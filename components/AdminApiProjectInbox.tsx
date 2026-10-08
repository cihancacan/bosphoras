// @ts-nocheck
'use client';

import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, CloudDownload, Database, ExternalLink, Loader2, RefreshCw, XCircle } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  if(!Number.isFinite(n)||!n)return '—';
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(n);}
  catch{return String(n)+' '+currency;}
}
function local(value=''){return {fr:value,en:value,ru:value,ar:value};}
function cleanDescription(raw:any){
  const candidates=[raw?.description?.en,raw?.description?.fr,
    typeof raw?.description==='string'?raw.description:null,
    raw?.summary?.en,typeof raw?.summary==='string'?raw.summary:null,
    raw?.subtitle?.en,typeof raw?.subtitle==='string'?raw.subtitle:null];
  return String(candidates.find((v:any)=>typeof v==='string'&&v.trim()&&!/^\[object Object\]$/i.test(v.trim()))||'').trim().slice(0,12000);
}
function factualProjectDescription(candidate:any,raw:any){
  const description=cleanDescription(raw);
  if(description)return {fr:'',en:description,ru:'',ar:''};
  const name=String(candidate.project_name||'Ce programme');
  const city=String(candidate.city||'').trim();
  const district=String(candidate.district||'').trim();
  const place=[district,city].filter(Boolean).join(', ');
  const dev=String(candidate.developer_name||'').trim();
  const rooms=raw.rooms!=null&&Number.isInteger(Number(raw.rooms))?Number(raw.rooms):null;
  const delivery=String(candidate.completion_date||'').trim();
  return {
    fr:'Le programme '+name+(place?' se situe dans le secteur de '+place:'')+
      (dev?'. Promoteur indiqué : '+dev+'.':'.')+
      (rooms!==null?' Une offre source mentionne un logement de '+rooms+' chambre(s) ; les autres typologies restent à confirmer.':' Les typologies disponibles sont à confirmer.')+
      (delivery?' Livraison prévisionnelle indiquée : '+delivery+'.':'')+
      ' Les prix sont indicatifs et les disponibilités doivent être vérifiées auprès du promoteur.',
    en:'The '+name+' development'+(place?' is located in '+place:'')+
      (dev?'. Reported developer: '+dev+'.':'.')+
      (rooms!==null?' One source listing mentions a '+rooms+'-bedroom unit; other types need confirmation.':' Available unit types require confirmation.')+
      (delivery?' Reported expected delivery: '+delivery+'.':'')+
      ' Indicative pricing and stock require developer confirmation.',
    ru:'Проект '+name+(place+' .').trim()+' Доступность, типы квартир и условия необходимо подтвердить у застройщика.',
    ar:'مشروع '+name+(place?' في '+place:'')+'. يلزم تأكيد أنواع الوحدات والأسعار والتوافر مع المطور.'
  };
}
function when(value?:string|null){
  if(!value)return '—';
  const d=new Date(value);
  return Number.isNaN(d.getTime())?'—':d.toLocaleString('fr-FR',{dateStyle:'medium',timeStyle:'short'});
}

function candidateScore(candidate:any){
  let score=0;
  if(candidate.project_name)score+=10;
  if(candidate.developer_name)score+=12;
  if(candidate.city)score+=8;
  if(candidate.district)score+=5;
  if(Number(candidate.price_min)>0)score+=15;
  if(Number(candidate.price_max)>0)score+=5;
  if(candidate.handover_text||candidate.completion_date)score+=10;
  if(candidate.source_external_id)score+=5;
  if(candidate.source_url)score+=5;
  const images=Array.isArray(candidate.images)?candidate.images:[];
  if(images.length>=1)score+=5;
  if(images.length>=3)score+=5;
  const raw=candidate.source_payload||{};
  const hasPaymentPlan=Boolean(
    raw.paymentPlan||raw.payment_plan||raw.paymentPlans||raw.payment_plans||
    raw.installments||raw.installmentPlan||raw.installment_plan
  );
  if(hasPaymentPlan)score+=10;
  if(candidate.matched_project_id)score-=25;
  return Math.max(0,Math.min(100,score));
}

function scoreLabel(score:number){
  if(score>=80)return 'Très complet';
  if(score>=65)return 'À examiner';
  if(score>=45)return 'À enrichir';
  return 'Faible donnée';
}

export function AdminApiProjectInbox({user,reload}:{user:any;reload?:()=>void}){
  const supabase=getPortalSupabase();
  const [candidates,setCandidates]=useState<any[]>([]);
  const [sources,setSources]=useState<any>({});
  const [status,setStatus]=useState('new');
  const [sourceFilter,setSourceFilter]=useState('all');
  const [busy,setBusy]=useState('');
  const [message,setMessage]=useState('');

  async function authHeaders(){
    const {data}=await supabase.auth.getSession();
    const token=data.session?.access_token;
    if(!token)throw new Error('Session expirée.');
    return {Authorization:'Bearer '+token,'Content-Type':'application/json'};
  }

  async function load(){
    const [{data,error},headers]=await Promise.all([
      supabase.from('project_import_candidates').select('*').order('last_seen_at',{ascending:false}).limit(400),
      authHeaders()
    ]);
    if(error)setMessage(error.message);else setCandidates(data||[]);
    try{
      const res=await fetch('/api/property-desk/api-projects/sync',{headers});
      const json=await res.json();
      if(res.ok)setSources(json.sources||{});
    }catch{}
  }

  useEffect(()=>{load();},[]);

  async function sync(source:string){
    setBusy('sync-'+source);setMessage('');
    try{
      const headers=await authHeaders();
      const current=(sources[source]?.runs||0)+1;
      const response=await fetch('/api/property-desk/api-projects/sync',{
        method:'POST',headers,body:JSON.stringify({source,page:current})
      });
      const result=await response.json();
      if(!response.ok)throw new Error(result.error||'Synchronisation impossible.');
      setMessage(source==='bayut'
        ? result.fetched+' projet(s) reçus depuis Dubai/UAE, '+result.candidates+' placé(s) ou actualisé(s) dans la file privée.'
        : result.fetched+' projet(s) Turquie reçus, '+result.candidates+' placé(s) ou actualisé(s) dans la file privée.');
      await load();
    }catch(e:any){setMessage(e?.message||'Synchronisation impossible.');}
    finally{setBusy('');}
  }

  async function testConnection(source:string){
    setBusy('test-'+source);setMessage('');
    try{
      const headers=await authHeaders();
      const response=await fetch('/api/property-desk/api-projects/sync',{
        method:'POST',headers,body:JSON.stringify({source,action:'test'})
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(data.error||'Connexion impossible.');
      const samples=Array.isArray(data.sample)?data.sample.map((item:any)=>item.name).filter(Boolean).join(', '):'';
      setMessage('Test Emlakjet : HTTP '+(data.remoteStatus||200)+'. '+
        Number(data.results||0)+' résultat(s) reconnus ; aucun projet importé. '+
        (samples?'Exemples : '+samples+'. ':'')+
        (data.results?'Connexion confirmée, tu peux importer le prochain lot.':
         'L’API répond, mais la structure ou les critères de recherche doivent être examinés. '+
         'Champs réponse : '+[...(data.topLevelKeys||[]),...(data.dataKeys||[])].slice(0,18).join(', ')+'.'));
      await load();
    }catch(error:any){setMessage('Test Emlakjet : '+(error?.message||'Connexion impossible.'));}
    finally{setBusy('');}
  }

  async function setDecision(candidate:any,next:string){
    let reason:string|null=null;
    if(next==='rejected'){
      reason=window.prompt('Motif interne du refus (optionnel) :','');
      if(reason===null)return;
    }
    setBusy(candidate.id);setMessage('');
    const {error}=await supabase.from('project_import_candidates').update({
      review_status:next,
      rejection_reason:reason||null,
      reviewed_by:user?.id||null,
      reviewed_at:new Date().toISOString(),
    }).eq('id',candidate.id);
    if(error)setMessage(error.message);else await load();
    setBusy('');
  }

  async function createDraft(candidate:any){
    if(candidate.matched_project_id){
      setMessage('Ce projet semble déjà présent dans Bosphoras. Marquez-le comme doublon ou ouvrez le projet existant.');
      return;
    }
    setBusy(candidate.id);setMessage('');
    try{
      let developerId:string|null=null;
      if(candidate.developer_name){
        const found=await supabase.from('developers').select('id,name').ilike('name',candidate.developer_name).limit(1).maybeSingle();
        if(found.error)throw found.error;
        developerId=found.data?.id||null;
        if(!developerId){
          const inserted=await supabase.from('developers').insert({
            name:candidate.developer_name,
            country_code:candidate.country_code||null,
            city:candidate.city||null,
            source_system:candidate.source_system,
            created_by:user?.id||null,
          }).select('id').single();
          if(inserted.error)throw inserted.error;
          developerId=inserted.data.id;
        }
      }

      const raw=candidate.source_payload||{};
      const description=factualProjectDescription(candidate,raw);
      const payload:any={
        developer_id:developerId,
        external_id:candidate.source_external_id||('API-'+candidate.id.slice(0,8)),
        source_system:candidate.source_system,
        source_url:candidate.source_url||null,
        name:candidate.project_name,
        name_i18n:local(candidate.project_name),
        country_code:candidate.country_code,
        country_name:candidate.country_name||null,
        city:candidate.city||null,
        district:candidate.district||null,
        status:'draft',
        sales_status:'available',
        completion_date:candidate.completion_date||null,
        handover_text:candidate.completion_date||candidate.handover_text||null,
        currency:candidate.currency||(candidate.country_code==='AE'?'AED':'TRY'),
        price_min:candidate.price_min||null,
        price_max:candidate.price_max||null,
        description,
        images:candidate.images||[],
        hero_image:candidate.hero_image||candidate.images?.[0]||null,
        source_last_synced_at:new Date().toISOString(),
        created_by:user?.id||null,
        updated_by:user?.id||null,
      };

      const inserted=await supabase.from('real_estate_projects').insert(payload).select('id').single();
      if(inserted.error)throw inserted.error;

      const marked=await supabase.from('project_import_candidates').update({
        review_status:'imported',
        imported_project_id:inserted.data.id,
        reviewed_by:user?.id||null,
        reviewed_at:new Date().toISOString(),
      }).eq('id',candidate.id);
      if(marked.error)throw marked.error;

      // Enrichment runs only after creating a PRIVATE draft, and is best-effort.
      // All extracted text, location, amenities and photos still require admin approval.
      let officialFeedback='Consulte la section Recherche officielle dans Projets & unités.';
      try{
        const session=await supabase.auth.getSession();
        const token=session.data.session?.access_token;
        if(token){
          const response=await fetch('/api/property-desk/official-research',{
            method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},
            body:JSON.stringify({action:'scan',project_id:inserted.data.id})
          });
          const result=await response.json().catch(()=>({}));
          officialFeedback=result.ok?'Une source officielle a été analysée. Vérifie les suggestions dans Projets & unités.':
            result.needs_url?'URL officielle à renseigner dans Projets & unités.':
            'Recherche officielle indisponible. Tu peux ajouter la page officielle dans Projets & unités.';
        }
      }catch{officialFeedback='Recherche officielle non disponible. Le brouillon reste enregistré.';}
      await load();await reload?.();
      setMessage('Projet enregistré comme BROUILLON privé. '+officialFeedback+' Rien n’a été publié.');
    }catch(e:any){
      setMessage(e?.message||'Création du brouillon impossible.');
    }finally{setBusy('');}
  }

  const visible=useMemo(()=>candidates.filter((c:any)=>
    (status==='all'||c.review_status===status) &&
    (sourceFilter==='all'||c.source_system===sourceFilter)
  ).sort((a:any,b:any)=>candidateScore(b)-candidateScore(a)),[candidates,status,sourceFilter]);

  const counts=useMemo(()=>candidates.reduce((a:any,c:any)=>{a[c.review_status]=(a[c.review_status]||0)+1;return a;},{}),[candidates]);

  const sourceCard=(key:string,label:string,sub:string)=>{
    const s=sources[key]||{};
    const remaining=s.monthlyLimit==null?null:Math.max(0,Number(s.monthlyLimit)-Number(s.requests||0));
    return <article className="border border-[#d9e1e8] bg-white p-5">
      <div className="flex items-start justify-between gap-4"><div><span className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">{key}</span><h3 className="mt-1 text-xl font-semibold">{label}</h3><p className="mt-1 text-xs leading-5 text-[#7b8794]">{sub}</p></div><span className={'px-2 py-1 text-[0.62rem] font-bold uppercase '+(s.configured?'bg-[#edf7f1] text-[#2f6d59]':'bg-[#fff4e8] text-[#9a6927]')}>{s.configured?'Connectée':'Clé à ajouter'}</span></div>
      <div className="mt-5 grid grid-cols-3 gap-px bg-[#e5eaee] text-center"><div className="bg-[#f8fafb] p-3"><span className="block text-[0.58rem] uppercase text-[#7b8794]">Requêtes mois</span><strong className="mt-1 block text-xl">{s.requests||0}</strong></div><div className="bg-[#f8fafb] p-3"><span className="block text-[0.58rem] uppercase text-[#7b8794]">Projets vus</span><strong className="mt-1 block text-xl">{s.fetched||0}</strong></div><div className="bg-[#f8fafb] p-3"><span className="block text-[0.58rem] uppercase text-[#7b8794]">{remaining==null?'Limite':'Restantes'}</span><strong className="mt-1 block text-xl">{remaining==null?'—':remaining}</strong></div></div>
      {key==='emlakjet'?<button disabled={busy!==''||!s.configured} onClick={()=>testConnection(key)} className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 border border-[#315d7c] bg-white px-4 text-xs font-semibold uppercase tracking-[0.07em] text-[#12304a] disabled:opacity-45">{busy==='test-'+key?<Loader2 size={14} className="animate-spin"/>:<RefreshCw size={14}/>}Tester la connexion (sans importer)</button>:null}
      <button disabled={busy!==''||!s.configured} onClick={()=>sync(key)} className="mt-3 inline-flex min-h-[42px] w-full items-center justify-center gap-2 bg-[#12304a] px-4 text-xs font-semibold uppercase tracking-[0.07em] text-white disabled:opacity-45">{busy==='sync-'+key?<Loader2 size={14} className="animate-spin"/>:<CloudDownload size={14}/>}Importer le prochain lot</button>
    </article>;
  };

  return <div className="space-y-6">
    <div className="border border-[#b9cbd8] bg-[#f7fbfd] p-5 text-sm leading-6 text-[#526272]">
      <strong className="text-[#162334]">Règle Bosphoras :</strong> les API alimentent uniquement cette file privée. Un clic « Créer brouillon » crée un projet interne non publié ; la publication reste une étape séparée. Le score Bosphoras ci-dessous mesure la complétude et l'exploitabilité des données importées, pas la qualité financière de l'investissement.
    </div>

    <div className="grid gap-5 lg:grid-cols-2">
      {sourceCard('bayut','Dubai / UAE · BayutAPI','Off-plan et nouveaux projets. Un lot de recherche peut ramener jusqu’à 24 projets en un seul appel API.')}
      {sourceCard('emlakjet','Turquie · Emlakjet','Projets neufs Turquie. La source apparaît dès que la clé et le host RapidAPI sont configurés côté serveur.')}
    </div>

    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm leading-6 text-[#526272]">{message}</div>:null}

    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2">
        {[
          ['new','À examiner'],['imported','Importés'],['duplicate','Doublons'],['rejected','Refusés'],['all','Tous']
        ].map(([value,label])=><button key={value} onClick={()=>setStatus(value)} className={'border px-3 py-2 text-xs font-semibold '+(status===value?'border-[#12304a] bg-[#12304a] text-white':'border-[#cfd8e3] bg-white text-[#526272]')}>{label}{value!=='all'?' · '+(counts[value]||0):''}</button>)}
      </div>
      <div className="flex gap-2"><select value={sourceFilter} onChange={(e)=>setSourceFilter(e.target.value)} className="min-h-[38px] border border-[#cfd8e3] bg-white px-3 text-xs"><option value="all">Toutes les sources</option><option value="bayut">Bayut</option><option value="emlakjet">Emlakjet</option></select><button onClick={load} className="inline-flex min-h-[38px] items-center gap-2 border border-[#cfd8e3] bg-white px-3 text-xs font-semibold"><RefreshCw size={13}/>Actualiser</button></div>
    </div>

    <div className="space-y-4">
      {visible.map((c:any)=><article key={c.id} className="border border-[#d9e1e8] bg-white p-5">
        <div className="grid gap-5 lg:grid-cols-[190px_minmax(0,1fr)_250px]">
          <div>{c.hero_image?<img src={c.hero_image} alt="" className="aspect-[4/3] w-full object-cover"/>:<div className="flex aspect-[4/3] items-center justify-center bg-[#eef2f5] text-[0.62rem] uppercase tracking-[0.12em] text-[#8a949b]">Sans image</div>}</div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2"><span className="bg-[#eef3f6] px-2 py-1 text-[0.6rem] font-bold uppercase text-[#315d7c]">{c.source_system}</span><span className="text-[0.62rem] uppercase text-[#7b8794]">{c.country_code} · {c.city||'Ville non renseignée'}{c.district?' · '+c.district:''}</span><span className="bg-[#edf7f1] px-2 py-1 text-[0.6rem] font-bold uppercase text-[#2f6d59]">Score Bosphoras {candidateScore(c)}/100 · {scoreLabel(candidateScore(c))}</span></div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">{c.project_name}</h3>
            <p className="mt-1 text-sm text-[#687685]">{c.developer_name||'Promoteur à confirmer'}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3"><div><span className="text-[0.62rem] uppercase text-[#7b8794]">Prix départ</span><strong className="mt-1 block">{money(c.price_min,c.currency||'EUR')}</strong></div><div><span className="text-[0.62rem] uppercase text-[#7b8794]">Livraison</span><strong className="mt-1 block">{c.handover_text||c.completion_date||'—'}</strong></div><div><span className="text-[0.62rem] uppercase text-[#7b8794]">Dernière vue</span><strong className="mt-1 block text-sm">{when(c.last_seen_at)}</strong></div></div>
            {c.matched_project_id?<div className="mt-4 flex items-center gap-2 border border-[#edd3b0] bg-[#fff9ef] px-3 py-2 text-xs text-[#8a6429]"><AlertTriangle size={14}/>Projet potentiellement déjà présent dans Bosphoras.</div>:null}
            {c.source_url?<a href={c.source_url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#315d7c]">Voir la source <ExternalLink size={12}/></a>:null}
          </div>
          <div className="flex flex-col justify-between gap-3 border-l border-[#edf1f4] pl-5">
            <div><span className="text-[0.62rem] uppercase text-[#7b8794]">Statut</span><strong className="mt-1 block capitalize">{c.review_status}</strong></div>
            {c.review_status==='new'?<div className="grid gap-2">
              <button disabled={busy!==''||Boolean(c.matched_project_id)} onClick={()=>createDraft(c)} className="inline-flex min-h-[40px] items-center justify-center gap-2 bg-[#12304a] px-3 text-xs font-semibold text-white disabled:opacity-45"><CheckCircle2 size={14}/>Créer brouillon</button>
              <button disabled={busy!==''} onClick={()=>setDecision(c,'duplicate')} className="min-h-[38px] border border-[#cfd8e3] px-3 text-xs font-semibold text-[#526272]">Marquer doublon</button>
              <button disabled={busy!==''} onClick={()=>setDecision(c,'rejected')} className="inline-flex min-h-[38px] items-center justify-center gap-2 border border-[#c88984] px-3 text-xs font-semibold text-[#9b4c46]"><XCircle size={13}/>Refuser</button>
            </div>:null}
            {c.review_status==='imported'?<div className="flex items-center gap-2 bg-[#edf7f1] px-3 py-2 text-xs font-semibold text-[#2f6d59]"><CheckCircle2 size={14}/>Brouillon créé</div>:null}
            {c.review_status==='rejected'?<p className="text-xs leading-5 text-[#8a5b57]">{c.rejection_reason||'Refusé sans motif.'}</p>:null}
            {c.review_status==='duplicate'?<div className="flex items-center gap-2 bg-[#f4f5f6] px-3 py-2 text-xs text-[#687685]"><Database size={14}/>Ignoré comme doublon</div>:null}
          </div>
        </div>
      </article>)}
      {!visible.length?<div className="border border-dashed border-[#cfd8e3] bg-white p-10 text-center"><Database className="mx-auto text-[#7f94a3]"/><h3 className="mt-4 text-xl font-semibold">Aucun projet dans cette vue</h3><p className="mt-2 text-sm text-[#687685]">Connectez une source puis importez un lot. Aucun projet n’est publié automatiquement.</p></div>:null}
    </div>
  </div>;
}
