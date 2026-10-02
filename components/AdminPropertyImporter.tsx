// @ts-nocheck
'use client';

import { useState } from 'react';
import { CheckCircle2, Download, ExternalLink, Images, Languages, Loader2, Save, WandSparkles } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

const locales = ['fr','en','ru','ar'];

function local(value='') {
  return { fr:value, en:value, ru:value, ar:value };
}

function slugify(value='') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff]+/g,'-')
    .replace(/^-+|-+$/g,'')
    .slice(0,110);
}

function linesFromArray(items:any[] = [], locale='fr') {
  return items.map((x:any)=>x?.[locale]).filter(Boolean).join('\n');
}

function linesToLocalized(value:any) {
  const split:any = {};
  locales.forEach((l)=>{ split[l]=String(value[l]||'').split('\n').map((x)=>x.trim()).filter(Boolean); });
  const max=Math.max(0,...locales.map((l)=>split[l].length));
  return Array.from({length:max},(_,i)=>Object.fromEntries(locales.map((l)=>[l,split[l][i]||split.fr[i]||''])));
}

function detectCity(text='') {
  const x=text.toLowerCase();
  if(x.includes('bodrum')) return 'bodrum';
  if(x.includes('antalya')) return 'antalya';
  if(x.includes('istanbul')||x.includes('İstanbul'.toLowerCase())) return 'istanbul';
  return 'istanbul';
}

export function AdminPropertyImporter({ user, reload }: { user:any; reload?:()=>void }) {
  const supabase=getPortalSupabase();
  const [url,setUrl]=useState('');
  const [busy,setBusy]=useState(false);
  const [stage,setStage]=useState('');
  const [message,setMessage]=useState('');
  const [lastCreated,setLastCreated]=useState<any>(null);
  const [jobId,setJobId]=useState<string|null>(null);
  const [source,setSource]=useState<any>(null);
  const [draft,setDraft]=useState<any>(null);
  const [strengths,setStrengths]=useState(local(''));
  const [technicalNotes,setTechnicalNotes]=useState(local(''));
  const [watchpoints,setWatchpoints]=useState(local(''));

  async function authHeader() {
    const {data}=await supabase.auth.getSession();
    const token=data.session?.access_token;
    if(!token) throw new Error('Session administrateur expirée.');
    return { Authorization:`Bearer ${token}`,'Content-Type':'application/json' };
  }

  async function importUrl() {
    if(!url.trim()) return;
    setBusy(true); setMessage(''); setStage('Lecture de la page partenaire…');
    try{
      const headers=await authHeader();
      const response=await fetch('/api/property-desk/import-url',{
        method:'POST',
        headers,
        body:JSON.stringify({url:url.trim(),copyImages:true}),
      });
      const result=await response.json();
      if(!response.ok) throw new Error(result.error||'Import impossible.');
      setJobId(result.importJobId||null);
      setSource(result.data);

      const base=result.data;
      const fallback={
        countryCode:base.countryCode||'TR',
        countryName:base.countryName||base.country||'Turkey',
        city:base.city||detectCity(`${base.title||''} ${base.description||''} ${base.district||''}`),
        cityName:base.cityName||base.city||'Istanbul',
        district:base.district||'',
        collection:'selected-investment',
        propertyType:'apartment',
        transaction:'sale',
        currency:base.currency||'EUR',
        totalPrice:base.price||'',
        entryCapital:'',
        surfaceM2:base.surfaceM2||'',
        bedrooms:base.bedrooms||'',
        bathrooms:'',
        developer:base.developer||'',
        paymentPlan:Array.isArray(base.paymentPlan)?base.paymentPlan:[],
        paymentPlanEnabled:Array.isArray(base.paymentPlan)&&base.paymentPlan.length>0,
        paymentInterestMode:'not_specified',
        paymentInterestRate:'',
        cashDiscountPct:'',
        cashPrice:'',
        installmentPrice:'',
        featured:false,
        priceOnRequest:!base.price,
        title:local(base.title||''),
        summary:local(base.summary||''),
        description:local(base.description||base.rawText?.slice(0,5000)||''),
        seoTitle:local(base.title||''),
        seoDescription:local(base.summary||''),
        delivery:local(base.delivery||''),
        images:base.images||[],
      };

      setDraft(fallback);
      setStage('Traduction et réécriture Bosphoras…');

      const translate=await fetch('/api/property-desk/translate-draft',{
        method:'POST',
        headers,
        body:JSON.stringify({data:base,importJobId:result.importJobId||null}),
      });
      const translated=await translate.json();

      if(translate.ok&&translated.data){
        const ai=translated.data;
        const aiPlan=Array.isArray(ai.paymentPlan)?ai.paymentPlan:fallback.paymentPlan;
        const firstPct=Number(aiPlan?.[0]?.percentage||0);
        const derivedEntry=!ai.entryCapital&&fallback.totalPrice&&firstPct>0
          ? Math.round(Number(fallback.totalPrice)*firstPct/100)
          : '';
        setDraft({
          ...fallback,
          countryCode:ai.countryCode||fallback.countryCode,
          countryName:ai.countryName||fallback.countryName,
          city:ai.city||fallback.city,
          cityName:ai.cityName||fallback.cityName,
          district:ai.district||fallback.district,
          title:ai.title||fallback.title,
          summary:ai.summary||fallback.summary,
          description:ai.description||fallback.description,
          seoTitle:ai.seoTitle||fallback.seoTitle,
          seoDescription:ai.seoDescription||fallback.seoDescription,
          propertyType:ai.propertyType||fallback.propertyType,
          developer:ai.developer||fallback.developer,
          currency:ai.currency||fallback.currency,
          totalPrice:ai.price??fallback.totalPrice,
          surfaceM2:ai.surfaceM2??fallback.surfaceM2,
          bedrooms:ai.bedrooms??fallback.bedrooms,
          bathrooms:ai.bathrooms??fallback.bathrooms,
          delivery:ai.delivery||fallback.delivery,
          paymentPlan:aiPlan,
          entryCapital:ai.entryCapital??derivedEntry??fallback.entryCapital,
        });
        setStrengths(Object.fromEntries(locales.map((l)=>[l,linesFromArray(ai.strengths||ai.highlights||[],l)])));
        setTechnicalNotes(Object.fromEntries(locales.map((l)=>[l,linesFromArray(ai.technicalNotes||[],l)])));
        setWatchpoints(Object.fromEntries(locales.map((l)=>[l,linesFromArray(ai.watchpoints||[],l)])));
        setMessage(translated.mode==='translation-fallback'
          ? 'Import terminé : données, photos et traductions automatiques préremplies. La réécriture IA approfondie est actuellement indisponible ; vérifiez les textes avant publication.'
          : 'Import terminé : données, photos et versions multilingues préremplies. Vérifiez avant publication.');
      }else{
        setMessage(`Import terminé. La traduction automatique n’a pas été appliquée : ${translated.error||'service IA indisponible'}. Les champs restent modifiables.`);
      }
      setStage('');
    }catch(error){
      setMessage(error instanceof Error?error.message:'Import impossible.');
      setStage('');
    }finally{setBusy(false);}
  }

  function setField(key:string,value:any){setDraft((d:any)=>({...d,[key]:value}));}
  function setLocaleField(key:string,locale:string,value:string){setDraft((d:any)=>({...d,[key]:{...(d?.[key]||local('')),[locale]:value}}));}

  async function save(publish:boolean) {
    if(!draft) return;
    if(!draft.title?.fr?.trim()||!draft.district?.trim()){
      setMessage('Titre FR et quartier sont obligatoires.');
      return;
    }
    setBusy(true); setMessage(''); setStage(publish?'Enregistrement et publication…':'Enregistrement du brouillon…');
    try{
      const slugs=Object.fromEntries(locales.map((l)=>[l,slugify(draft.title?.[l]||draft.title.fr)]));
      const externalId=`IMP-${Date.now().toString(36).toUpperCase()}`;
      const row={
        external_id:externalId,
        published:publish,
        featured:Boolean(draft.featured),
        status:'available',
        collection:draft.collection,
        transaction_type:draft.transaction,
        property_type:draft.propertyType,
        country_code:draft.countryCode||'TR',
        country_name:draft.countryName||'Turkey',
        city:draft.city||slugify(draft.cityName||'city'),
        city_name:draft.cityName||draft.city,
        district:draft.district,
        slug_fr:slugs.fr,
        slug_en:slugs.en,
        slug_ru:slugs.ru,
        slug_ar:slugs.ar,
        title:draft.title,
        summary:draft.summary,
        description:draft.description,
        seo_title:draft.seoTitle,
        seo_description:draft.seoDescription,
        currency:draft.currency,
        total_price:draft.priceOnRequest?null:Number(draft.totalPrice)||null,
        price_on_request:Boolean(draft.priceOnRequest),
        entry_capital:Number(draft.entryCapital)||null,
        surface_m2:Number(draft.surfaceM2)||null,
        bedrooms:Number(draft.bedrooms)||null,
        bathrooms:Number(draft.bathrooms)||null,
        delivery:draft.delivery,
        developer:draft.developer||null,
        payment_plan:Array.isArray(draft.paymentPlan)?draft.paymentPlan:[],
        payment_plan_enabled:Boolean(draft.paymentPlanEnabled),
        payment_interest_mode:draft.paymentInterestMode||'not_specified',
        payment_interest_rate:Number(draft.paymentInterestRate)||null,
        cash_discount_pct:Number(draft.cashDiscountPct)||null,
        cash_price:Number(draft.cashPrice)||null,
        installment_price:Number(draft.installmentPrice)||null,
        highlights:[],
        technical_notes:linesToLocalized(technicalNotes),
        strengths:linesToLocalized(strengths),
        watchpoints:linesToLocalized(watchpoints),
        images:draft.images||[],
        hero_image:draft.images?.[0]||null,
        verified_at:new Date().toISOString(),
        published_at:publish?new Date().toISOString():null,
        created_by:user.id,
        approved_by:user.id,
        approved_at:new Date().toISOString(),
        review_status:'approved',
        source_url:source?.sourceUrl||null,
        source_host:source?.sourceHost||null,
        source_last_checked_at:new Date().toISOString(),
        source_partner_name:draft.developer||source?.sourceHost||null,
      };
      const {data,error}=await supabase.from('property_listings').insert(row).select('id,external_id').single();
      if(error) throw error;
      if(jobId&&data?.id){
        await supabase.from('property_import_jobs').update({status:'draft_created',listing_id:data.id}).eq('id',jobId);
      }
      setLastCreated({id:data?.id,slug:slugs.fr,published:publish,title:draft.title?.fr||externalId});
      setMessage(publish?'Annonce créée et publiée.':'Brouillon créé. Il reste invisible du public jusqu’à publication.');
      setDraft(null); setSource(null); setUrl(''); setJobId(null);
      reload?.();
    }catch(error){
      setMessage(error instanceof Error?error.message:'Enregistrement impossible.');
    }finally{setBusy(false);setStage('');}
  }

  const input='min-h-[43px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]';
  const textarea='w-full border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]';

  return <div className="space-y-7 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]">
    <section className="border border-[#d9e1e8] bg-white p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#12304a] text-white"><Download size={18}/></div>
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.02em]">Importer une annonce partenaire</h2>
          <p className="mt-1 text-sm leading-6 text-[#687685]">Collez l’URL. Bosphoras récupère ce qui est réellement disponible dans la page : titre, description, prix, surface, localisation, données structurées et photos. Rien n’est publié sans votre validation.</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="https://partenaire.com/projet/..." className="min-h-[48px] flex-1 border border-[#cfd8e3] px-4 text-sm outline-none focus:border-[#315d7c]"/>
        <button disabled={busy||!url.trim()} onClick={importUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white disabled:opacity-50">
          {busy?<Loader2 size={16} className="animate-spin"/>:<WandSparkles size={16}/>} Importer & préparer
        </button>
      </div>
      {stage&&<p className="mt-3 text-xs font-medium text-[#315d7c]">{stage}</p>}
      {message&&<div className="mt-4 border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm leading-6 text-[#526272]"><p>{message}</p>{lastCreated?.id?<div className="mt-3 flex flex-wrap gap-2"><a href={'/espace/apercu?listing='+lastCreated.id} target="_blank" rel="noreferrer" className="inline-flex min-h-[38px] items-center border border-[#315d7c] bg-white px-3 text-xs font-semibold uppercase text-[#315d7c]">Aperçu de la fiche</a>{lastCreated.published?<a href={'/investissement-immobilier-international/'+lastCreated.slug} target="_blank" rel="noreferrer" className="inline-flex min-h-[38px] items-center border border-[#2f6d59] bg-white px-3 text-xs font-semibold uppercase text-[#2f6d59]">Ouvrir la page publique</a>:null}</div>:null}</div>}
    </section>

    {draft&&<>
      <section className="grid gap-5 border border-[#d9e1e8] bg-white p-6 md:grid-cols-4">
        <label className={label}>Pays <span className="normal-case font-normal tracking-normal text-[#7b8794]">(nom affiché)</span><input value={draft.countryName||''} onChange={(e)=>setField('countryName',e.target.value)} className={input} placeholder="Turkey, UAE, Georgia…"/></label>
        <label className={label}>Code pays <span className="normal-case font-normal tracking-normal text-[#7b8794]">(TR, AE, GE, KZ, FR, US…)</span><input value={draft.countryCode||''} onChange={(e)=>setField('countryCode',e.target.value.toUpperCase().slice(0,3))} className={input}/></label>
        <label className={label}>Ville <span className="normal-case font-normal tracking-normal text-[#7b8794]">(libre : Istanbul, Dubai, Batumi, Almaty, Paris…)</span><input value={draft.cityName||''} onChange={(e)=>{setField('cityName',e.target.value);setField('city',slugify(e.target.value));}} className={input}/></label>
        <label className={label}>Quartier <span className="normal-case font-normal tracking-normal text-[#7b8794]">(à contrôler dans l’adresse source)</span><input value={draft.district} onChange={(e)=>setField('district',e.target.value)} className={input}/></label>
        <label className={label}>Type
          <select value={draft.propertyType} onChange={(e)=>setField('propertyType',e.target.value)} className={input}><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select>
        </label>
        <label className={label}>Collection
          <select value={draft.collection} onChange={(e)=>setField('collection',e.target.value)} className={input}><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select>
        </label>
        <label className={label}>Devise <select value={draft.currency} onChange={(e)=>setField('currency',e.target.value)} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option><option>KZT</option><option>GEL</option></select></label>
        <label className={label}>Prix total <span className="normal-case font-normal tracking-normal text-[#7b8794]">(prix affiché par la source)</span><input value={draft.totalPrice} onChange={(e)=>setField('totalPrice',e.target.value)} className={input}/></label>
        <label className={label}>Capital aujourd’hui <span className="normal-case font-normal tracking-normal text-[#7b8794]">(apport/acompte nécessaire maintenant)</span><input value={draft.entryCapital} onChange={(e)=>setField('entryCapital',e.target.value)} className={input}/></label>
        <label className={label}>Surface m² <input value={draft.surfaceM2} onChange={(e)=>setField('surfaceM2',e.target.value)} className={input}/></label>
        <label className={label}>Chambres <input value={draft.bedrooms} onChange={(e)=>setField('bedrooms',e.target.value)} className={input}/></label>
        <label className={label}>Salles de bain <input value={draft.bathrooms} onChange={(e)=>setField('bathrooms',e.target.value)} className={input}/></label>
        <label className={label}>Promoteur / projet <input value={draft.developer} onChange={(e)=>setField('developer',e.target.value)} className={input}/></label>
        <label className="flex items-center gap-3 pt-7 text-sm text-[#526272]"><input type="checkbox" checked={draft.priceOnRequest} onChange={(e)=>setField('priceOnRequest',e.target.checked)}/> Prix sur demande</label>
      </section>

      <section className="border border-[#d9e1e8] bg-white p-6">
        <div className="mb-5 grid gap-4 border-b border-[#e7edf2] pb-5 md:grid-cols-5">
          <label className="flex items-center gap-3 pt-6 text-sm text-[#526272]"><input type="checkbox" checked={Boolean(draft.paymentPlanEnabled)} onChange={(e)=>setField('paymentPlanEnabled',e.target.checked)}/> Afficher le plan de paiement</label>
          <label className={label}>Type de taux<select value={draft.paymentInterestMode||'not_specified'} onChange={(e)=>setField('paymentInterestMode',e.target.value)} className={input}><option value="not_specified">Non précisé</option><option value="interest_free">Sans intérêt / 0%</option><option value="interest_bearing">Avec intérêt</option></select></label>
          <label className={label}>Taux % <span className="normal-case font-normal tracking-normal text-[#7b8794]">(si paiement avec intérêt)</span><input value={draft.paymentInterestRate||''} onChange={(e)=>setField('paymentInterestRate',e.target.value)} className={input} inputMode="decimal"/></label>
          <label className={label}>Remise comptant % <span className="normal-case font-normal tracking-normal text-[#7b8794]">(réduction si paiement cash)</span><input value={draft.cashDiscountPct||''} onChange={(e)=>setField('cashDiscountPct',e.target.value)} className={input} inputMode="decimal"/></label>
          <label className={label}>Prix comptant / échelonné <span className="normal-case font-normal tracking-normal text-[#7b8794]">(si les deux prix diffèrent)</span><div className="grid grid-cols-2 gap-2"><input value={draft.cashPrice||''} onChange={(e)=>setField('cashPrice',e.target.value)} className={input} placeholder="Cash"/><input value={draft.installmentPrice||''} onChange={(e)=>setField('installmentPrice',e.target.value)} className={input} placeholder="Échelonné"/></div></label>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Plan de paiement</h3>
            <p className="mt-1 text-xs leading-5 text-[#7b8794]">(uniquement les échéances présentes dans la source ; contrôlez le total avant publication)</p>
          </div>
          <button
            type="button"
            onClick={()=>setField('paymentPlan',[...(draft.paymentPlan||[]),{label:local('Nouvelle étape'),percentage:null,amount:null,due:local('À définir')}])}
            className="border border-[#12304a] px-3 py-2 text-xs font-semibold text-[#12304a]"
          >
            + Ajouter une étape
          </button>
        </div>
        <div className="mt-5 space-y-3">
          {(draft.paymentPlan||[]).map((step:any,index:number)=>(
            <div key={index} className="grid gap-3 border-t border-[#e7edf2] pt-4 md:grid-cols-[1.1fr_0.45fr_0.65fr_1.1fr_auto]">
              <input
                value={step?.label?.fr||''}
                onChange={(e)=>setField('paymentPlan',(draft.paymentPlan||[]).map((s:any,i:number)=>i===index?{...s,label:{...(s.label||local('')),fr:e.target.value,en:s.label?.en||e.target.value,ru:s.label?.ru||e.target.value,ar:s.label?.ar||e.target.value}}:s))}
                className={input}
                placeholder="Étape"
              />
              <input
                value={step?.percentage??''}
                onChange={(e)=>setField('paymentPlan',(draft.paymentPlan||[]).map((s:any,i:number)=>i===index?{...s,percentage:e.target.value===''?null:Number(e.target.value)}:s))}
                className={input}
                placeholder="%"
                inputMode="decimal"
              />
              <input
                value={step?.amount??''}
                onChange={(e)=>setField('paymentPlan',(draft.paymentPlan||[]).map((s:any,i:number)=>i===index?{...s,amount:e.target.value===''?null:Number(e.target.value)}:s))}
                className={input}
                placeholder="Montant"
                inputMode="decimal"
              />
              <input
                value={step?.due?.fr||''}
                onChange={(e)=>setField('paymentPlan',(draft.paymentPlan||[]).map((s:any,i:number)=>i===index?{...s,due:{...(s.due||local('')),fr:e.target.value,en:s.due?.en||e.target.value,ru:s.due?.ru||e.target.value,ar:s.due?.ar||e.target.value}}:s))}
                className={input}
                placeholder="Échéance"
              />
              <button type="button" onClick={()=>setField('paymentPlan',(draft.paymentPlan||[]).filter((_:any,i:number)=>i!==index))} className="px-3 text-sm font-semibold text-[#a85656]">×</button>
            </div>
          ))}
          {!(draft.paymentPlan||[]).length?<p className="text-sm text-[#7b8794]">Aucun échéancier détecté. Ne pas en inventer : ajoutez-le seulement si le promoteur l'a confirmé.</p>:null}
        </div>
      </section>

      {[
        ['Titre', 'title', false, 1],
        ['Résumé', 'summary', true, 3],
        ['Description', 'description', true, 7],
        ['SEO title', 'seoTitle', false, 1],
        ['Meta description', 'seoDescription', true, 3],
      ].map(([name,key,multi,rows]:any)=><section key={key} className="border border-[#d9e1e8] bg-white p-6">
        <div className="flex items-center gap-2"><Languages size={17} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">{name}</h3></div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">{locales.map((l)=><label key={l} className={label}>{l.toUpperCase()}
          {multi?<textarea rows={rows} value={draft[key]?.[l]||''} onChange={(e)=>setLocaleField(key,l,e.target.value)} className={textarea}/>:<input value={draft[key]?.[l]||''} onChange={(e)=>setLocaleField(key,l,e.target.value)} className={input}/>}
        </label>)}</div>
      </section>)}

      <section className="grid gap-5 lg:grid-cols-3">
        {[
          ['Pourquoi Bosphoras le sélectionne',strengths,setStrengths],
          ['Technical Notes',technicalNotes,setTechnicalNotes],
          ['Points de vigilance',watchpoints,setWatchpoints],
        ].map(([name,value,setter]:any)=><div key={name} className="border border-[#d9e1e8] bg-white p-5">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="mt-1 text-xs text-[#7b8794]">(un point par ligne ; ne garder que ce qui est vérifiable)</p>
          <div className="mt-4 space-y-3">{locales.map((l)=><label key={l} className={label}>{l.toUpperCase()}<textarea rows={4} value={value[l]} onChange={(e)=>setter({...value,[l]:e.target.value})} className={textarea}/></label>)}</div>
        </div>)}
      </section>

      <section className="border border-[#d9e1e8] bg-white p-6">
        <div className="flex items-center gap-3"><Images size={18} className="text-[#315d7c]"/><div><h3 className="text-lg font-semibold">Photos importées</h3><p className="text-xs text-[#7b8794]">(copiées dans le stockage Bosphoras quand la page le permet ; à utiliser uniquement si le partenaire vous autorise à les publier)</p></div></div>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">{(draft.images||[]).map((src:string,i:number)=><div key={src} className="relative aspect-[4/3] overflow-hidden bg-[#e8edf2]"><img src={src} alt="" className="h-full w-full object-cover"/><button onClick={()=>setField('images',draft.images.filter((_:any,index:number)=>index!==i))} className="absolute right-1 top-1 bg-[#0d1c2b] px-2 py-1 text-xs text-white">×</button></div>)}</div>
        {source?.sourceUrl&&<a href={source.sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#315d7c]"><ExternalLink size={14}/>Voir la source originale</a>}
      </section>

      <div className="flex flex-wrap gap-3">
        <button disabled={busy} onClick={()=>save(false)} className="inline-flex min-h-[48px] items-center gap-2 border border-[#12304a] bg-white px-5 text-sm font-semibold text-[#12304a]"><Save size={16}/>Enregistrer brouillon</button>
        <button disabled={busy} onClick={()=>save(true)} className="inline-flex min-h-[48px] items-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white"><CheckCircle2 size={16}/>Valider & publier</button>
      </div>
    </>}
  </div>;
}
