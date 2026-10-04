// @ts-nocheck
'use client';

import { useState } from 'react';
import { Building2, CheckCircle2, ExternalLink, Images, Loader2, Save, WandSparkles } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function local(value=''){return {fr:value,en:value,ru:value,ar:value};}
function lines(value=''){return String(value||'').split('\n').map((x)=>x.trim()).filter(Boolean);}
function money(value:any,currency='EUR'){
  const n=Number(value||0);if(!Number.isFinite(n)||!n)return '—';
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(n);}catch{return String(n)+' '+currency;}
}

export function AdminProjectImporter({
  user,profile,isAdmin,partners=[],developers=[],onSaved
}:{user:any;profile:any;isAdmin:boolean;partners?:any[];developers?:any[];onSaved?:()=>void}){
  const supabase=getPortalSupabase();
  const [url,setUrl]=useState('');
  const [busy,setBusy]=useState(false);
  const [stage,setStage]=useState('');
  const [message,setMessage]=useState('');
  const [source,setSource]=useState<any>(null);
  const [draft,setDraft]=useState<any>(null);
  const [jobId,setJobId]=useState<string|null>(null);
  const [existingProjectId,setExistingProjectId]=useState<string|null>(null);

  async function authHeader(){
    const {data}=await supabase.auth.getSession();
    const token=data.session?.access_token;
    if(!token)throw new Error('Session expirée.');
    return {Authorization:'Bearer '+token,'Content-Type':'application/json'};
  }

  async function importUrl(){
    if(!url.trim())return;
    setBusy(true);setMessage('');setStage('Lecture du projet et copie des médias…');
    try{
      const headers=await authHeader();
      const response=await fetch('/api/property-desk/import-project-url',{
        method:'POST',headers,body:JSON.stringify({url:url.trim(),copyImages:true})
      });
      const result=await response.json();
      if(!response.ok)throw new Error(result.error||'Import impossible.');
      const base=result.data||{};
      setSource(base);setJobId(result.importJobId||null);

      const existingDev=developers.find((d:any)=>String(d.name||'').trim().toLowerCase()===String(base.developer||'').trim().toLowerCase());
      const {data:existingProject}=await supabase.from('real_estate_projects').select('id,name').eq('source_url',base.sourceUrl).maybeSingle();
      setExistingProjectId(existingProject?.id||null);

      const fallback={
        projectName:base.projectName||'',
        projectLogo:base.projectLogo||'',
        developerId:existingDev?.id||'',
        developerName:base.developer||existingDev?.name||'',
        developerLogo:base.developerLogo||existingDev?.logo_url||'',
        developerWebsite:base.developerWebsite||existingDev?.website||'',
        partnerId:isAdmin?'':(profile?.partner_id||''),
        countryCode:base.countryCode||'TR',
        countryName:base.countryName||'Turkey',
        city:base.cityName||base.city||'',
        district:base.district||'',
        address:base.address||'',
        currency:base.currency||'EUR',
        priceMin:base.priceMin||'',
        priceMax:base.priceMax||'',
        entryCapitalMin:base.entryCapital||'',
        completionDate:base.completionDate||'',
        handoverText:base.delivery||'',
        salesStatus:'available',
        description:base.description||base.summary||'',
        amenities:(base.amenities||[]).join('\n'),
        highlights:(base.highlights||[]).join('\n'),
        paymentPlan:Array.isArray(base.paymentPlan)?base.paymentPlan:[],
        brochureUrl:base.brochureUrl||'',
        floorplanUrl:base.floorplanUrl||'',
        images:base.images||[],
        heroImage:base.heroImage||base.images?.[0]||'',
        logoCandidates:base.logoCandidates||[],
        sourceSystem:base.sourceHost||'url-import',
        sourceUrl:base.sourceUrl||url.trim(),
      };
      setDraft(fallback);
      setMessage(existingProject
        ? 'Projet déjà présent dans Bosphoras : les champs sont préremplis depuis la source. Enregistrer mettra à jour ce projet.'
        : 'Projet récupéré. Vérifiez les logos, les photos et les conditions avant enregistrement.');
      setStage('');
    }catch(e:any){
      setMessage(e?.message||'Import impossible.');setStage('');
    }finally{setBusy(false);}
  }

  function field(key:string,value:any){setDraft((d:any)=>({...d,[key]:value}));}

  async function save(){
    if(!draft?.projectName?.trim()){setMessage('Le nom du projet est obligatoire.');return;}
    setBusy(true);setStage(existingProjectId?'Mise à jour du projet…':'Création du promoteur et du projet…');setMessage('');
    try{
      let developerId=String(draft.developerId||'')||null;
      if(draft.developerName?.trim()){
        if(!developerId){
          const {data:found}=await supabase.from('developers').select('*').ilike('name',draft.developerName.trim()).limit(1).maybeSingle();
          developerId=found?.id||null;
        }
        const developerPayload:any={
          name:draft.developerName.trim(),
          country_code:draft.countryCode||null,
          city:draft.city||null,
          website:draft.developerWebsite?.trim()||null,
          logo_url:draft.developerLogo?.trim()||null,
          updated_at:new Date().toISOString(),
        };
        if(developerId){
          const {error}=await supabase.from('developers').update(developerPayload).eq('id',developerId);
          if(error)throw error;
        }else{
          developerPayload.created_by=user?.id||null;
          const {data,error}=await supabase.from('developers').insert(developerPayload).select('id').single();
          if(error)throw error;developerId=data.id;
        }
      }

      const projectPayload:any={
        developer_id:developerId,
        partner_id:isAdmin?(String(draft.partnerId||'')||null):(profile?.partner_id||null),
        external_id:existingProjectId?undefined:'IMP-'+Date.now().toString(36).toUpperCase(),
        source_system:draft.sourceSystem||source?.sourceHost||'url-import',
        source_url:draft.sourceUrl||source?.sourceUrl||url.trim(),
        name:draft.projectName.trim(),
        name_i18n:local(draft.projectName.trim()),
        logo_url:draft.projectLogo?.trim()||null,
        hero_image:draft.heroImage?.trim()||draft.images?.[0]||null,
        country_code:draft.countryCode||'TR',
        country_name:draft.countryName||null,
        city:draft.city||null,
        district:draft.district||null,
        address:draft.address||null,
        status:'active',
        sales_status:draft.salesStatus||'available',
        completion_date:draft.completionDate||null,
        handover_text:draft.handoverText||null,
        currency:draft.currency||'EUR',
        price_min:Number(draft.priceMin)||null,
        price_max:Number(draft.priceMax)||null,
        entry_capital_min:Number(draft.entryCapitalMin)||null,
        payment_plan:Array.isArray(draft.paymentPlan)?draft.paymentPlan:[],
        amenities:lines(draft.amenities),
        highlights:lines(draft.highlights),
        description:local(draft.description||''),
        images:draft.images||[],
        brochure_url:draft.brochureUrl||null,
        floorplan_url:draft.floorplanUrl||null,
        source_last_synced_at:new Date().toISOString(),
        last_verified_at:new Date().toISOString(),
        updated_by:user?.id||null,
      };

      let projectId=existingProjectId;
      if(existingProjectId){
        delete projectPayload.external_id;
        const {error}=await supabase.from('real_estate_projects').update(projectPayload).eq('id',existingProjectId);
        if(error)throw error;
      }else{
        projectPayload.created_by=user?.id||null;
        const {data,error}=await supabase.from('real_estate_projects').insert(projectPayload).select('id').single();
        if(error)throw error;projectId=data.id;
      }

      if(jobId&&projectId){
        await supabase.from('property_import_jobs').update({
          status:'draft_created',project_id:projectId,developer_id:developerId
        }).eq('id',jobId);
      }

      setMessage(existingProjectId?'Projet mis à jour.':'Projet et promoteur enregistrés.');
      setDraft(null);setSource(null);setJobId(null);setExistingProjectId(null);setUrl('');
      onSaved?.();
    }catch(e:any){
      setMessage(e?.message||'Enregistrement impossible.');
    }finally{setBusy(false);setStage('');}
  }

  const input='min-h-[42px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]';
  const textarea='w-full border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]';

  return <section className="space-y-5 border border-[#d9e1e8] bg-white p-5">
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#12304a] text-white"><WandSparkles size={17}/></div>
      <div><h2 className="text-xl font-semibold">Importer un projet depuis une URL</h2><p className="mt-1 text-sm leading-6 text-[#687685]">Bosphoras récupère le projet, le promoteur, les logos, les photos et les principales conditions. Rien n’est enregistré avant votre validation.</p></div>
    </div>

    <div className="flex flex-col gap-3 md:flex-row">
      <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="https://promoteur.com/projet/..." className="min-h-[48px] flex-1 border border-[#cfd8e3] px-4 text-sm outline-none focus:border-[#315d7c]"/>
      <button disabled={busy||!url.trim()} onClick={importUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white disabled:opacity-50">
        {busy?<Loader2 size={16} className="animate-spin"/>:<Building2 size={16}/>} Récupérer le projet
      </button>
    </div>
    {stage?<p className="text-xs font-semibold text-[#315d7c]">{stage}</p>:null}
    {message?<p className="border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm leading-6 text-[#526272]">{message}</p>:null}

    {draft?<div className="space-y-5 border-t border-[#e7edf2] pt-5">
      <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <div className="border border-[#e5eaee] p-4">
          <h3 className="font-semibold">Identité du projet</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className={label+" md:col-span-2"}>Nom du projet<input value={draft.projectName} onChange={(e)=>field('projectName',e.target.value)} className={input}/></label>
            <label className={label+" md:col-span-2"}>Logo projet<input value={draft.projectLogo||''} onChange={(e)=>field('projectLogo',e.target.value)} className={input}/></label>
            {draft.projectLogo?<div className="md:col-span-2 flex min-h-[120px] items-center justify-center bg-[#f5f7f9] p-4"><img src={draft.projectLogo} alt="" className="max-h-24 max-w-[260px] object-contain"/></div>:null}
          </div>
        </div>

        <div className="border border-[#e5eaee] p-4">
          <h3 className="font-semibold">Promoteur</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className={label+" md:col-span-2"}>Promoteur existant<select value={draft.developerId||''} onChange={(e)=>{const id=e.target.value;const d=developers.find((x:any)=>x.id===id);field('developerId',id);if(d){setDraft((v:any)=>({...v,developerId:id,developerName:d.name||v.developerName,developerLogo:d.logo_url||v.developerLogo,developerWebsite:d.website||v.developerWebsite}));}}} className={input}><option value="">Créer / détecter automatiquement</option>{developers.map((d:any)=><option key={d.id} value={d.id}>{d.name}</option>)}</select></label>
            <label className={label}>Nom<input value={draft.developerName||''} onChange={(e)=>field('developerName',e.target.value)} className={input}/></label>
            <label className={label}>Site web<input value={draft.developerWebsite||''} onChange={(e)=>field('developerWebsite',e.target.value)} className={input}/></label>
            <label className={label+" md:col-span-2"}>Logo promoteur<input value={draft.developerLogo||''} onChange={(e)=>field('developerLogo',e.target.value)} className={input}/></label>
            {draft.developerLogo?<div className="md:col-span-2 flex min-h-[120px] items-center justify-center bg-[#f5f7f9] p-4"><img src={draft.developerLogo} alt="" className="max-h-24 max-w-[260px] object-contain"/></div>:null}
          </div>
        </div>
      </div>

      {(draft.logoCandidates||[]).length?<div className="border border-[#e5eaee] p-4">
        <h3 className="font-semibold">Logos détectés à confirmer</h3>
        <p className="mt-1 text-xs text-[#7b8794]">Si le moteur hésite entre le logo du site, du projet et du promoteur, choisissez ici.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">{draft.logoCandidates.map((src:string)=><div key={src} className="border border-[#e5eaee] bg-[#f7f9fb] p-2"><div className="flex aspect-[4/3] items-center justify-center"><img src={src} alt="" className="max-h-full max-w-full object-contain"/></div><div className="mt-2 grid grid-cols-2 gap-1"><button type="button" onClick={()=>field('projectLogo',src)} className="border border-[#315d7c] px-1 py-1 text-[0.62rem] font-semibold text-[#315d7c]">Projet</button><button type="button" onClick={()=>field('developerLogo',src)} className="border border-[#315d7c] px-1 py-1 text-[0.62rem] font-semibold text-[#315d7c]">Promoteur</button></div></div>)}</div>
      </div>:null}

      <div className="grid gap-3 md:grid-cols-4">
        <label className={label}>Pays<input value={draft.countryName||''} onChange={(e)=>field('countryName',e.target.value)} className={input}/></label>
        <label className={label}>Code pays<input value={draft.countryCode||''} onChange={(e)=>field('countryCode',e.target.value.toUpperCase())} className={input}/></label>
        <label className={label}>Ville<input value={draft.city||''} onChange={(e)=>field('city',e.target.value)} className={input}/></label>
        <label className={label}>Quartier<input value={draft.district||''} onChange={(e)=>field('district',e.target.value)} className={input}/></label>
        <label className={label+" md:col-span-2"}>Adresse<input value={draft.address||''} onChange={(e)=>field('address',e.target.value)} className={input}/></label>
        {isAdmin?<label className={label}>Partenaire source<select value={draft.partnerId||''} onChange={(e)=>field('partnerId',e.target.value)} className={input}><option value="">Bosphoras / direct</option>{partners.map((p:any)=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label>:null}
        <label className={label}>Statut<select value={draft.salesStatus} onChange={(e)=>field('salesStatus',e.target.value)} className={input}><option value="prelaunch">Pré-lancement</option><option value="available">Disponible</option><option value="limited">Stock limité</option><option value="sold_out">Épuisé</option></select></label>

        <label className={label}>Devise<select value={draft.currency} onChange={(e)=>field('currency',e.target.value)} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option><option>GBP</option></select></label>
        <label className={label}>Prix min<input value={draft.priceMin||''} onChange={(e)=>field('priceMin',e.target.value)} inputMode="decimal" className={input}/></label>
        <label className={label}>Prix max<input value={draft.priceMax||''} onChange={(e)=>field('priceMax',e.target.value)} inputMode="decimal" className={input}/></label>
        <label className={label}>Capital d’entrée min<input value={draft.entryCapitalMin||''} onChange={(e)=>field('entryCapitalMin',e.target.value)} inputMode="decimal" className={input}/></label>
        <label className={label}>Livraison exacte<input value={draft.completionDate||''} onChange={(e)=>field('completionDate',e.target.value)} type="date" className={input}/></label>
        <label className={label+" md:col-span-3"}>Texte livraison<input value={draft.handoverText||''} onChange={(e)=>field('handoverText',e.target.value)} className={input} placeholder="Q4 2027, Ready, etc."/></label>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <label className={label+" lg:col-span-2"}>Description<textarea rows={7} value={draft.description||''} onChange={(e)=>field('description',e.target.value)} className={textarea}/></label>
        <div className="grid gap-3">
          <label className={label}>Équipements<textarea rows={5} value={draft.amenities||''} onChange={(e)=>field('amenities',e.target.value)} className={textarea} placeholder="1 par ligne"/></label>
          <label className={label}>Points forts<textarea rows={5} value={draft.highlights||''} onChange={(e)=>field('highlights',e.target.value)} className={textarea} placeholder="1 par ligne"/></label>
        </div>
      </div>

      <div className="border border-[#e5eaee] p-4">
        <div className="flex items-center justify-between gap-3"><div><h3 className="font-semibold">Plan de paiement</h3><p className="mt-1 text-xs text-[#7b8794]">Uniquement ce qui a été détecté. À contrôler avant utilisation commerciale.</p></div><button type="button" onClick={()=>field('paymentPlan',[...(draft.paymentPlan||[]),{label:local('Nouvelle étape'),percentage:null,amount:null,due:local('À définir')}])} className="border border-[#12304a] px-3 py-2 text-xs font-semibold text-[#12304a]">+ Étape</button></div>
        <div className="mt-4 space-y-3">{(draft.paymentPlan||[]).map((step:any,index:number)=><div key={index} className="grid gap-2 md:grid-cols-[1fr_130px_1fr_auto]">
          <input value={step?.label?.fr||''} onChange={(e)=>field('paymentPlan',draft.paymentPlan.map((s:any,i:number)=>i===index?{...s,label:{...(s.label||local('')),fr:e.target.value}}:s))} className={input} placeholder="Étape"/>
          <input value={step?.percentage??''} onChange={(e)=>field('paymentPlan',draft.paymentPlan.map((s:any,i:number)=>i===index?{...s,percentage:e.target.value===''?null:Number(e.target.value)}:s))} className={input} placeholder="%"/>
          <input value={step?.due?.fr||''} onChange={(e)=>field('paymentPlan',draft.paymentPlan.map((s:any,i:number)=>i===index?{...s,due:{...(s.due||local('')),fr:e.target.value}}:s))} className={input} placeholder="Échéance"/>
          <button type="button" onClick={()=>field('paymentPlan',draft.paymentPlan.filter((_:any,i:number)=>i!==index))} className="px-3 text-[#a85656]">×</button>
        </div>)}{!(draft.paymentPlan||[]).length?<p className="text-sm text-[#7b8794]">Aucun échéancier fiable détecté.</p>:null}</div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className={label}>Brochure<input value={draft.brochureUrl||''} onChange={(e)=>field('brochureUrl',e.target.value)} className={input}/></label>
        <label className={label}>Floor plan / masterplan<input value={draft.floorplanUrl||''} onChange={(e)=>field('floorplanUrl',e.target.value)} className={input}/></label>
      </div>

      <div className="border border-[#e5eaee] p-4">
        <div className="flex items-center gap-2"><Images size={17} className="text-[#315d7c]"/><h3 className="font-semibold">Photos du projet</h3></div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">{(draft.images||[]).map((src:string,i:number)=><div key={src} className={'relative overflow-hidden border '+(draft.heroImage===src?'border-[#315d7c] ring-2 ring-[#315d7c]/20':'border-[#e5eaee]')}>
          <div className="aspect-[4/3] bg-[#edf1f4]"><img src={src} alt="" className="h-full w-full object-cover"/></div>
          <div className="grid grid-cols-2"><button type="button" onClick={()=>field('heroImage',src)} className="px-2 py-1 text-[0.62rem] font-semibold text-[#315d7c]">Principale</button><button type="button" onClick={()=>{const next=draft.images.filter((_:any,n:number)=>n!==i);field('images',next);if(draft.heroImage===src)field('heroImage',next[0]||'');}} className="px-2 py-1 text-[0.62rem] font-semibold text-[#a85656]">Retirer</button></div>
        </div>)}</div>
        {source?.sourceUrl?<a href={source.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#315d7c]"><ExternalLink size={13}/>Voir la source</a>:null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e7edf2] pt-5">
        <div className="text-sm text-[#687685]">{draft.priceMin?<><strong className="text-[#162334]">{money(draft.priceMin,draft.currency)}</strong> prix d’entrée détecté</>:null}</div>
        <button disabled={busy} onClick={save} className="inline-flex min-h-[48px] items-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white disabled:opacity-50">{existingProjectId?<Save size={16}/>:<CheckCircle2 size={16}/>} {existingProjectId?'Mettre à jour le projet':'Créer le projet'}</button>
      </div>
    </div>:null}
  </section>;
}
