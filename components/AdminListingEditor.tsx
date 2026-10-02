// @ts-nocheck
'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp, ImagePlus, Save, X } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { PropertyUrlAutofill } from '@/components/PropertyUrlAutofill';

const locales=['fr','en','ru','ar'];

function linesFromArray(items:any[] = [], locale='fr') {
  return items.map((x:any)=>x?.[locale]).filter(Boolean).join('\n');
}

function linesToLocalized(value:any) {
  const split:any={};
  locales.forEach((l)=>{split[l]=String(value?.[l]||'').split('\n').map((x)=>x.trim()).filter(Boolean);});
  const max=Math.max(0,...locales.map((l)=>split[l].length));
  return Array.from({length:max},(_,i)=>Object.fromEntries(locales.map((l)=>[l,split[l][i]||split.fr[i]||''])));
}

export function AdminListingEditor({listing,onClose,reload}:{listing:any;onClose:()=>void;reload:()=>void}) {
  const supabase=getPortalSupabase();
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [draft,setDraft]=useState({
    ...listing,
    title:{fr:listing.title?.fr||'',en:listing.title?.en||'',ru:listing.title?.ru||'',ar:listing.title?.ar||''},
    summary:{fr:listing.summary?.fr||'',en:listing.summary?.en||'',ru:listing.summary?.ru||'',ar:listing.summary?.ar||''},
    description:{fr:listing.description?.fr||'',en:listing.description?.en||'',ru:listing.description?.ru||'',ar:listing.description?.ar||''},
    seo_title:{fr:listing.seo_title?.fr||'',en:listing.seo_title?.en||'',ru:listing.seo_title?.ru||'',ar:listing.seo_title?.ar||''},
    seo_description:{fr:listing.seo_description?.fr||'',en:listing.seo_description?.en||'',ru:listing.seo_description?.ru||'',ar:listing.seo_description?.ar||''},
    delivery:{fr:listing.delivery?.fr||'',en:listing.delivery?.en||'',ru:listing.delivery?.ru||'',ar:listing.delivery?.ar||''},
    images:Array.isArray(listing.images)?listing.images:[],
    payment_plan:Array.isArray(listing.payment_plan)?listing.payment_plan:[],
    strengths_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.strengths||[],l)])),
    technical_notes_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.technical_notes||[],l)])),
    watchpoints_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.watchpoints||[],l)])),
  });

  const input='min-h-[43px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]';
  const textarea='w-full border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]';

  function setField(key:string,value:any){setDraft((d:any)=>({...d,[key]:value}));}
  function setLocale(key:string,locale:string,value:string){setDraft((d:any)=>({...d,[key]:{...(d[key]||{}),[locale]:value}}));}

  async function upload(files:FileList|null){
    if(!files?.length)return;
    setBusy(true);
    try{
      const next=[...draft.images];
      for(const file of Array.from(files).slice(0,16-next.length)){
        const ext=(file.name.split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'');
        const path=`admin/${listing.id}/${crypto.randomUUID()}.${ext||'jpg'}`;
        const {error}=await supabase.storage.from('property-images').upload(path,file,{cacheControl:'31536000',upsert:false,contentType:file.type});
        if(error)throw error;
        const {data}=supabase.storage.from('property-images').getPublicUrl(path);
        next.push(data.publicUrl);
      }
      setField('images',next);
    }catch(error){setMessage(error instanceof Error?error.message:'Upload impossible.');}
    finally{setBusy(false);}
  }

  function moveImage(index:number,delta:number){
    const target=index+delta;
    if(target<0||target>=draft.images.length)return;
    const next=[...draft.images];
    [next[index],next[target]]=[next[target],next[index]];
    setField('images',next);
  }

  function applyImported(prepared:any){
    const importedImages=Array.isArray(prepared.images)?prepared.images:[];
    const mergeImages=Array.from(new Set([...importedImages,...(draft.images||[])]));
    setDraft((current:any)=>({
      ...current,
      city:prepared.city||current.city,
      district:prepared.district||current.district,
      collection:prepared.collection||current.collection,
      property_type:prepared.propertyType||current.property_type,
      transaction_type:prepared.transaction||current.transaction_type,
      currency:prepared.currency||current.currency,
      total_price:prepared.totalPrice!==''&&prepared.totalPrice!==null&&prepared.totalPrice!==undefined?prepared.totalPrice:current.total_price,
      entry_capital:prepared.entryCapital!==''&&prepared.entryCapital!==null&&prepared.entryCapital!==undefined?prepared.entryCapital:current.entry_capital,
      surface_m2:prepared.surfaceM2!==''&&prepared.surfaceM2!==null&&prepared.surfaceM2!==undefined?prepared.surfaceM2:current.surface_m2,
      bedrooms:prepared.bedrooms!==''&&prepared.bedrooms!==null&&prepared.bedrooms!==undefined?prepared.bedrooms:current.bedrooms,
      bathrooms:prepared.bathrooms!==''&&prepared.bathrooms!==null&&prepared.bathrooms!==undefined?prepared.bathrooms:current.bathrooms,
      developer:prepared.developer||current.developer,
      price_on_request:Boolean(prepared.priceOnRequest&&!(prepared.totalPrice||current.total_price)),
      title:prepared.title||current.title,
      summary:prepared.summary||current.summary,
      description:prepared.description||current.description,
      seo_title:prepared.seoTitle||current.seo_title,
      seo_description:prepared.seoDescription||current.seo_description,
      delivery:prepared.delivery||current.delivery,
      payment_plan:Array.isArray(prepared.paymentPlan)&&prepared.paymentPlan.length?prepared.paymentPlan:current.payment_plan,
      images:mergeImages,
      hero_image:mergeImages[0]||current.hero_image,
      source_url:prepared.sourceUrl||current.source_url,
      source_host:prepared.sourceHost||current.source_host,
      source_last_checked_at:new Date().toISOString(),
      strengths_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(prepared.strengths||[],l)||current.strengths_text?.[l]||''])),
      technical_notes_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(prepared.technicalNotes||[],l)||current.technical_notes_text?.[l]||''])),
      watchpoints_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(prepared.watchpoints||[],l)||current.watchpoints_text?.[l]||''])),
    }));
    setMessage('Préremplissage appliqué. Les données restent modifiables avant enregistrement. Les URLs SEO existantes ont été conservées pour éviter une redirection inutile.');
  }

  async function save(){
    setBusy(true);setMessage('');
    try{
      const update={
        published:Boolean(draft.published),
        featured:Boolean(draft.featured),
        status:draft.status,
        collection:draft.collection,
        transaction_type:draft.transaction_type,
        property_type:draft.property_type,
        city:draft.city,
        district:draft.district,
        slug_fr:draft.slug_fr,
        slug_en:draft.slug_en,
        slug_ru:draft.slug_ru,
        slug_ar:draft.slug_ar,
        title:draft.title,
        summary:draft.summary,
        description:draft.description,
        seo_title:draft.seo_title,
        seo_description:draft.seo_description,
        currency:draft.currency,
        total_price:draft.price_on_request?null:Number(draft.total_price)||null,
        price_on_request:Boolean(draft.price_on_request),
        entry_capital:Number(draft.entry_capital)||null,
        surface_m2:Number(draft.surface_m2)||null,
        bedrooms:Number(draft.bedrooms)||null,
        bathrooms:Number(draft.bathrooms)||null,
        delivery:draft.delivery,
        developer:draft.developer||null,
        payment_plan:Array.isArray(draft.payment_plan)?draft.payment_plan:[],
        strengths:linesToLocalized(draft.strengths_text),
        technical_notes:linesToLocalized(draft.technical_notes_text),
        watchpoints:linesToLocalized(draft.watchpoints_text),
        images:draft.images,
        hero_image:draft.images?.[0]||null,
        published_at:draft.published?(draft.published_at||new Date().toISOString()):null,
        approved_at:new Date().toISOString(),
        review_status:'approved',
        revision:Number(draft.revision||1)+1,
        source_last_checked_at:draft.source_url?new Date().toISOString():draft.source_last_checked_at||null,
      };
      const {error}=await supabase.from('property_listings').update(update).eq('id',listing.id);
      if(error)throw error;
      setMessage('Annonce mise à jour.');
      await reload();
    }catch(error){setMessage(error instanceof Error?error.message:'Mise à jour impossible.');}
    finally{setBusy(false);}
  }

  return <div className="space-y-6 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]">
    <div className="flex items-start justify-between gap-4 border-b border-[#d9e1e8] pb-5">
      <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#315d7c]">Édition administrateur</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">{draft.title?.fr||draft.external_id}</h2><p className="mt-1 text-sm text-[#687685]">Toutes les modifications enregistrées ici deviennent la version officielle de la fiche.</p></div>
      <button onClick={onClose} className="p-2 text-[#687685]"><X size={20}/></button>
    </div>

    {draft.source_url ? <section className="border border-[#d9e1e8] bg-[#f7f9fb] p-5">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Source d'origine</span>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <a href={draft.source_url} target="_blank" rel="noreferrer" className="break-all text-sm font-medium text-[#315d7c] underline underline-offset-2">{draft.source_url}</a>
        <span className="text-xs text-[#7b8794]">(traçabilité interne ; à recontrôler avant une mise à jour importante)</span>
      </div>
    </section> : null}

    <PropertyUrlAutofill onPrepared={applyImported} />

    <section className="grid gap-4 border border-[#d9e1e8] bg-white p-5 md:grid-cols-4">
      <label className={label}>Ville<select value={draft.city} onChange={(e)=>setField('city',e.target.value)} className={input}><option value="istanbul">Istanbul</option><option value="bodrum">Bodrum</option><option value="antalya">Antalya</option></select></label>
      <label className={label}>Quartier<input value={draft.district||''} onChange={(e)=>setField('district',e.target.value)} className={input}/></label>
      <label className={label}>Type<select value={draft.property_type} onChange={(e)=>setField('property_type',e.target.value)} className={input}><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select></label>
      <label className={label}>Collection<select value={draft.collection} onChange={(e)=>setField('collection',e.target.value)} className={input}><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select></label>
      <label className={label}>Devise<select value={draft.currency} onChange={(e)=>setField('currency',e.target.value)} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option></select></label>
      <label className={label}>Prix total<input value={draft.total_price||''} onChange={(e)=>setField('total_price',e.target.value)} className={input}/></label>
      <label className={label}>Capital aujourd’hui<input value={draft.entry_capital||''} onChange={(e)=>setField('entry_capital',e.target.value)} className={input}/></label>
      <label className={label}>Surface m²<input value={draft.surface_m2||''} onChange={(e)=>setField('surface_m2',e.target.value)} className={input}/></label>
      <label className={label}>Chambres<input value={draft.bedrooms||''} onChange={(e)=>setField('bedrooms',e.target.value)} className={input}/></label>
      <label className={label}>Salles de bain<input value={draft.bathrooms||''} onChange={(e)=>setField('bathrooms',e.target.value)} className={input}/></label>
      <label className={label}>Promoteur<input value={draft.developer||''} onChange={(e)=>setField('developer',e.target.value)} className={input}/></label>
      <label className={label}>Statut<select value={draft.status} onChange={(e)=>setField('status',e.target.value)} className={input}><option value="available">Disponible</option><option value="reserved">Réservé</option><option value="sold">Vendu</option><option value="private">Privé</option></select></label>
      <label className="flex items-center gap-3 pt-7 text-sm text-[#526272]"><input type="checkbox" checked={Boolean(draft.published)} onChange={(e)=>setField('published',e.target.checked)}/> Publiée</label>
      <label className="flex items-center gap-3 pt-7 text-sm text-[#526272]"><input type="checkbox" checked={Boolean(draft.featured)} onChange={(e)=>setField('featured',e.target.checked)}/> Mise en avant</label>
      <label className="flex items-center gap-3 pt-7 text-sm text-[#526272]"><input type="checkbox" checked={Boolean(draft.price_on_request)} onChange={(e)=>setField('price_on_request',e.target.checked)}/> Prix sur demande</label>
    </section>

    <section className="grid gap-4 border border-[#d9e1e8] bg-white p-5 md:grid-cols-2">
      {locales.map((l)=><label key={l} className={label}>Slug {l.toUpperCase()}<input value={draft[`slug_${l}`]||''} onChange={(e)=>setField(`slug_${l}`,e.target.value)} className={input}/></label>)}
    </section>

    <section className="border border-[#d9e1e8] bg-white p-5">
      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Contenu principal</p>
        <h3 className="mt-1 text-lg font-semibold">Version française</h3>
        <p className="mt-1 text-xs text-[#7b8794]">(c’est la version à relire en priorité après un import automatique)</p>
      </div>
      <div className="mt-5 grid gap-4">
        <label className={label}>Titre public<input value={draft.title?.fr||''} onChange={(e)=>setLocale('title','fr',e.target.value)} className={input}/></label>
        <label className={label}>Résumé<textarea rows={3} value={draft.summary?.fr||''} onChange={(e)=>setLocale('summary','fr',e.target.value)} className={textarea}/></label>
        <label className={label}>Description<textarea rows={7} value={draft.description?.fr||''} onChange={(e)=>setLocale('description','fr',e.target.value)} className={textarea}/></label>
      </div>
    </section>

    <details className="border border-[#d9e1e8] bg-white">
      <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[#162334]">Traductions & SEO <span className="ml-2 text-xs font-normal text-[#7b8794]">(préremplis automatiquement, à ouvrir seulement si vous voulez les ajuster)</span></summary>
      <div className="space-y-5 border-t border-[#e7edf2] p-5">
        {[
          ['Titre','title',false,1],
          ['Résumé','summary',true,3],
          ['Description','description',true,6],
          ['SEO title','seo_title',false,1],
          ['Meta description','seo_description',true,3],
          ['Livraison','delivery',false,1],
        ].map(([name,key,multi,rows]:any)=><section key={key} className="border border-[#e7edf2] bg-[#f8fafb] p-4"><h3 className="text-sm font-semibold">{name}</h3><div className="mt-3 grid gap-3 md:grid-cols-2">{locales.map((l)=><label key={l} className={label}>{l.toUpperCase()}{multi?<textarea rows={rows} value={draft[key]?.[l]||''} onChange={(e)=>setLocale(key,l,e.target.value)} className={textarea}/>:<input value={draft[key]?.[l]||''} onChange={(e)=>setLocale(key,l,e.target.value)} className={input}/>}</label>)}</div></section>)}
      </div>
    </details>

    <section className="border border-[#d9e1e8] bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">Plan de paiement</h3>
          <p className="mt-1 text-xs text-[#7b8794]">(utilisez seulement les conditions confirmées par le promoteur ou partenaire)</p>
        </div>
        <button type="button" onClick={()=>setField('payment_plan',[...(draft.payment_plan||[]),{label:{fr:'Nouvelle étape',en:'New step',ru:'Новый этап',ar:'مرحلة جديدة'},percentage:null,amount:null,due:{fr:'À définir',en:'To define',ru:'Уточнить',ar:'يحدد لاحقاً'}}])} className="border border-[#12304a] px-3 py-2 text-xs font-semibold text-[#12304a]">+ Étape</button>
      </div>
      <div className="mt-5 space-y-3">
        {(draft.payment_plan||[]).map((step:any,index:number)=>(
          <div key={index} className="grid gap-3 border-t border-[#e7edf2] pt-4 md:grid-cols-[1.1fr_0.45fr_0.65fr_1.1fr_auto]">
            <input value={step?.label?.fr||''} onChange={(e)=>setField('payment_plan',(draft.payment_plan||[]).map((s:any,i:number)=>i===index?{...s,label:{...(s.label||{}),fr:e.target.value,en:s.label?.en||e.target.value,ru:s.label?.ru||e.target.value,ar:s.label?.ar||e.target.value}}:s))} className={input} placeholder="Étape"/>
            <input value={step?.percentage??''} onChange={(e)=>setField('payment_plan',(draft.payment_plan||[]).map((s:any,i:number)=>i===index?{...s,percentage:e.target.value===''?null:Number(e.target.value)}:s))} className={input} placeholder="%" inputMode="decimal"/>
            <input value={step?.amount??''} onChange={(e)=>setField('payment_plan',(draft.payment_plan||[]).map((s:any,i:number)=>i===index?{...s,amount:e.target.value===''?null:Number(e.target.value)}:s))} className={input} placeholder="Montant" inputMode="decimal"/>
            <input value={step?.due?.fr||''} onChange={(e)=>setField('payment_plan',(draft.payment_plan||[]).map((s:any,i:number)=>i===index?{...s,due:{...(s.due||{}),fr:e.target.value,en:s.due?.en||e.target.value,ru:s.due?.ru||e.target.value,ar:s.due?.ar||e.target.value}}:s))} className={input} placeholder="Échéance"/>
            <button type="button" onClick={()=>setField('payment_plan',(draft.payment_plan||[]).filter((_:any,i:number)=>i!==index))} className="px-3 text-[#a85656]">×</button>
          </div>
        ))}
      </div>
    </section>

    <section className="grid gap-5 lg:grid-cols-3">
      {[
        ['Pourquoi Bosphoras le sélectionne','strengths_text'],
        ['Bosphoras Technical Notes','technical_notes_text'],
        ['Points de vigilance','watchpoints_text'],
      ].map(([title,key]:any)=>(
        <div key={key} className="border border-[#d9e1e8] bg-white p-5">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-xs text-[#7b8794]">(un point par ligne ; gardez une formulation factuelle)</p>
          <div className="mt-4 space-y-3">
            {locales.map((l)=><label key={l} className={label}>{l.toUpperCase()}<textarea rows={4} value={draft[key]?.[l]||''} onChange={(e)=>setField(key,{...(draft[key]||{}),[l]:e.target.value})} className={textarea}/></label>)}
          </div>
        </div>
      ))}
    </section>

    <section className="border border-[#d9e1e8] bg-white p-5">
      <div className="flex items-center gap-2"><ImagePlus size={17} className="text-[#315d7c]"/><h3 className="text-base font-semibold">Galerie</h3></div>
      <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={(e)=>upload(e.target.files)} className="mt-4 text-sm"/>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">{draft.images.map((src:string,i:number)=><div key={src} className="relative aspect-[4/3] overflow-hidden bg-[#e8edf2]"><img src={src} alt="" className="h-full w-full object-cover"/><div className="absolute inset-x-1 top-1 flex justify-between"><button onClick={()=>moveImage(i,-1)} className="bg-[#0d1c2b] p-1 text-white"><ArrowUp size={12}/></button><button onClick={()=>setField('images',draft.images.filter((_:any,index:number)=>index!==i))} className="bg-[#8f4747] p-1 text-white"><X size={12}/></button><button onClick={()=>moveImage(i,1)} className="bg-[#0d1c2b] p-1 text-white"><ArrowDown size={12}/></button></div>{i===0&&<span className="absolute bottom-1 left-1 bg-white px-2 py-1 text-[0.6rem] font-semibold">HERO</span>}</div>)}</div>
    </section>

    {message&&<p className="border border-[#d9e1e8] bg-white p-4 text-sm text-[#526272]">{message}</p>}
    <button disabled={busy} onClick={save} className="inline-flex min-h-[48px] items-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white disabled:opacity-50"><Save size={16}/>{busy?'Enregistrement…':'Enregistrer les modifications'}</button>
  </div>;
}
