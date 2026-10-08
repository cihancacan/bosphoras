// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
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

function slugify(value:string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff]+/g,'-').replace(/^-+|-+$/g,'').slice(0,110);
}

export function AdminListingEditor({listing,onClose,reload}:{listing:any;onClose:()=>void;reload:()=>void}) {
  const supabase=getPortalSupabase();
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [draft,setDraft]=useState({
    ...listing,
    country_code:listing.country_code||'TR',
    country_name:listing.country_name||'Turkey',
    city_name:listing.city_name||listing.city||'',
    title:{fr:listing.title?.fr||'',en:listing.title?.en||'',ru:listing.title?.ru||'',ar:listing.title?.ar||''},
    summary:{fr:listing.summary?.fr||'',en:listing.summary?.en||'',ru:listing.summary?.ru||'',ar:listing.summary?.ar||''},
    description:{fr:listing.description?.fr||'',en:listing.description?.en||'',ru:listing.description?.ru||'',ar:listing.description?.ar||''},
    seo_title:{fr:listing.seo_title?.fr||'',en:listing.seo_title?.en||'',ru:listing.seo_title?.ru||'',ar:listing.seo_title?.ar||''},
    seo_description:{fr:listing.seo_description?.fr||'',en:listing.seo_description?.en||'',ru:listing.seo_description?.ru||'',ar:listing.seo_description?.ar||''},
    delivery:{fr:listing.delivery?.fr||'',en:listing.delivery?.en||'',ru:listing.delivery?.ru||'',ar:listing.delivery?.ar||''},
    images:Array.isArray(listing.images)?listing.images:[],
    payment_plan:Array.isArray(listing.payment_plan)?listing.payment_plan:[],
    project_price_max:listing.project_price_max??'',
    project_latitude:listing.project_latitude??'',
    project_longitude:listing.project_longitude??'',
    project_unit_options:Array.isArray(listing.project_unit_options)?listing.project_unit_options:[],
    payment_plan_enabled:listing.payment_plan_enabled !== false,
    payment_interest_mode:listing.payment_interest_mode || 'not_specified',
    payment_interest_rate:listing.payment_interest_rate ?? '',
    cash_discount_pct:listing.cash_discount_pct ?? '',
    cash_price:listing.cash_price ?? '',
    installment_price:listing.installment_price ?? '',
    payment_notes:{
      fr:listing.payment_notes?.fr||'',
      en:listing.payment_notes?.en||'',
      ru:listing.payment_notes?.ru||'',
      ar:listing.payment_notes?.ar||'',
    },
    highlights_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.highlights||[],l)])),
    strengths_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.strengths||[],l)])),
    technical_notes_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.technical_notes||[],l)])),
    watchpoints_text:Object.fromEntries(locales.map((l)=>[l,linesFromArray(listing.watchpoints||[],l)])),
  });
  const [owners,setOwners]=useState<any[]>([]);
  const [internal,setInternal]=useState<any>({
    owner_user_id:listing.created_by||'',
    seller_name:'',
    seller_company:'',
    seller_phone:'',
    seller_whatsapp:'',
    seller_email:'',
    seller_asking_price:'',
    seller_floor_price:'',
    internal_notes:'',
    access_scope:'owner_only',
  });

  useEffect(()=>{
    let active=true;
    (async()=>{
      const [{data:privateRow},{data:profileRows}]=await Promise.all([
        supabase.from('property_listing_internal').select('*').eq('listing_id',listing.id).maybeSingle(),
        supabase.from('profiles').select('user_id,full_name,email,role').order('full_name',{ascending:true}),
      ]);
      if(!active)return;
      if(privateRow)setInternal({
        ...privateRow,
        seller_asking_price:privateRow.seller_asking_price??'',
        seller_floor_price:privateRow.seller_floor_price??'',
      });
      setOwners(profileRows||[]);
    })();
    return()=>{active=false;};
  },[listing.id,supabase]);

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
      country_code:prepared.countryCode||current.country_code,
      country_name:prepared.countryName||current.country_name,
      city_name:prepared.cityName||prepared.city||current.city_name,
      city:slugify(prepared.cityName||prepared.city||current.city_name||current.city),
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
      payment_plan_enabled:prepared.paymentPlanEnabled !== undefined ? Boolean(prepared.paymentPlanEnabled) : current.payment_plan_enabled,
      payment_interest_mode:prepared.paymentInterestMode || current.payment_interest_mode || 'not_specified',
      payment_interest_rate:prepared.paymentInterestRate !== undefined && prepared.paymentInterestRate !== null && prepared.paymentInterestRate !== '' ? prepared.paymentInterestRate : current.payment_interest_rate,
      cash_discount_pct:prepared.cashDiscountPct !== undefined && prepared.cashDiscountPct !== null && prepared.cashDiscountPct !== '' ? prepared.cashDiscountPct : current.cash_discount_pct,
      cash_price:prepared.cashPrice !== undefined && prepared.cashPrice !== null && prepared.cashPrice !== '' ? prepared.cashPrice : current.cash_price,
      installment_price:prepared.installmentPrice !== undefined && prepared.installmentPrice !== null && prepared.installmentPrice !== '' ? prepared.installmentPrice : current.installment_price,
      payment_notes:prepared.paymentNotes || current.payment_notes,
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
      if(draft.real_estate_project_id&&draft.published&&!listing.published){
        if(!draft.images?.length&&!draft.hero_image)throw new Error('Ajoute une photo autorisée avant publication.');
        if(!String(draft.description?.fr||'').trim()||!String(draft.city_name||'').trim())
          throw new Error('Complète la description française et la ville.');
        if(!window.confirm('Confirmer la publication du programme après vérification des photos, prix et typologies ?')){setBusy(false);return;}
      }
      if(draft.real_estate_project_id&&Number(draft.project_price_max)>0&&Number(draft.project_price_max)<Number(draft.total_price||0))
        throw new Error('Le prix maximum du programme doit être supérieur ou égal au prix minimum.');
      const update={
        published:Boolean(draft.published),
        featured:Boolean(draft.featured),
        status:draft.status,
        collection:draft.collection,
        transaction_type:draft.transaction_type,
        property_type:draft.property_type,
        country_code:String(draft.country_code||'').trim().toUpperCase(),
        country_name:String(draft.country_name||'').trim(),
        city:slugify(String(draft.city_name||draft.city||'')),
        city_name:String(draft.city_name||'').trim(),
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
        project_price_max:draft.real_estate_project_id?(Number(draft.project_price_max)||null):null,
        project_latitude:draft.real_estate_project_id&&draft.project_latitude!==''&&draft.project_latitude!==null?Number(draft.project_latitude):null,
        project_longitude:draft.real_estate_project_id&&draft.project_longitude!==''&&draft.project_longitude!==null?Number(draft.project_longitude):null,
        project_unit_options:draft.real_estate_project_id&&Array.isArray(draft.project_unit_options)?draft.project_unit_options.map((opt:any)=>({
          label:String(opt.label||'Typologie à confirmer').slice(0,100),
          bedrooms:opt.bedrooms===''||opt.bedrooms==null?undefined:Number(opt.bedrooms),
          bathrooms:opt.bathrooms===''||opt.bathrooms==null?undefined:Number(opt.bathrooms),
          areaM2:opt.areaM2===''||opt.areaM2==null?undefined:Number(opt.areaM2),
          price:opt.price===''||opt.price==null?undefined:Number(opt.price),
          currency:opt.currency||draft.currency,
          availability:opt.availability==='confirmed'?'confirmed':'on_request',
          source:'unit'
        })).slice(0,16):[],
        price_on_request:Boolean(draft.price_on_request),
        entry_capital:Number(draft.entry_capital)||null,
        surface_m2:Number(draft.surface_m2)||null,
        bedrooms:Number(draft.bedrooms)||null,
        bathrooms:Number(draft.bathrooms)||null,
        delivery:draft.delivery,
        developer:draft.developer||null,
        payment_plan:Array.isArray(draft.payment_plan)?draft.payment_plan:[],
        payment_plan_enabled:Boolean(draft.payment_plan_enabled),
        payment_interest_mode:draft.payment_plan_enabled ? (draft.payment_interest_mode || 'not_specified') : 'not_specified',
        payment_interest_rate:draft.payment_plan_enabled && draft.payment_interest_mode==='interest_bearing' ? (Number(draft.payment_interest_rate)||null) : null,
        cash_discount_pct:Number(draft.cash_discount_pct)||null,
        cash_price:Number(draft.cash_price)||null,
        installment_price:Number(draft.installment_price)||null,
        payment_notes:draft.payment_notes,
        highlights:linesToLocalized(draft.highlights_text),
        strengths:linesToLocalized(draft.strengths_text),
        technical_notes:linesToLocalized(draft.technical_notes_text),
        watchpoints:linesToLocalized(draft.watchpoints_text),
        images:draft.images,
        hero_image:draft.images?.[0]||null,
        published_at:draft.published?(draft.published_at||new Date().toISOString()):null,
        approved_at:new Date().toISOString(),
        review_status:'approved',
        revision:Number(draft.revision||1)+1,
        source_url:draft.source_url||null,
        source_host:draft.source_host||null,
        source_last_checked_at:draft.source_url?new Date().toISOString():draft.source_last_checked_at||null,
        source_partner_name:draft.developer||draft.source_partner_name||null,
      };
      const {error}=await supabase.from('property_listings').update(update).eq('id',listing.id);
      if(error)throw error;
      const {error:internalError}=await supabase.from('property_listing_internal').upsert({
        listing_id:listing.id,
        owner_user_id:internal.owner_user_id||listing.created_by||null,
        seller_name:internal.seller_name||null,
        seller_company:internal.seller_company||null,
        seller_phone:internal.seller_phone||null,
        seller_whatsapp:internal.seller_whatsapp||null,
        seller_email:internal.seller_email||null,
        seller_asking_price:Number(internal.seller_asking_price)||null,
        seller_floor_price:Number(internal.seller_floor_price)||null,
        internal_notes:internal.internal_notes||null,
        access_scope:internal.access_scope||'owner_only',
        created_by:internal.created_by||listing.created_by||null,
        updated_at:new Date().toISOString(),
      },{onConflict:'listing_id'});
      if(internalError)throw internalError;
      setMessage('Annonce et informations internes mises à jour.');
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

    <section className="rounded-xl border border-[#b8c9c2] bg-[#f3f7f5] p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-[#2f6d59]">Informations internes · non publiques</p>
          <h3 className="mt-1 text-xl font-semibold text-[#162334]">Propriétaire du produit & vendeur</h3>
          <p className="mt-2 max-w-3xl text-xs leading-5 text-[#687685]">Ces informations sont séparées de la fiche publique. Le partenaire propriétaire et l’administrateur peuvent les consulter. L’administrateur choisit si elles restent limitées au propriétaire ou deviennent visibles à toute l’équipe interne. Elles ne sont jamais publiques.</p>
        </div>
        <label className={label}>Visibilité interne
          <select value={internal.access_scope||'owner_only'} onChange={(e)=>setInternal((v:any)=>({...v,access_scope:e.target.value}))} className={input}>
            <option value="owner_only">Propriétaire uniquement</option>
            <option value="all_agents">Tous les agents</option>
          </select>
        </label>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className={label}>Propriétaire interne
          <select value={internal.owner_user_id||''} onChange={(e)=>setInternal((v:any)=>({...v,owner_user_id:e.target.value}))} className={input}>
            <option value="">Non attribué</option>
            {owners.map((owner:any)=><option key={owner.user_id} value={owner.user_id}>{owner.full_name||owner.email||owner.user_id} · {owner.role}</option>)}
          </select>
        </label>
        <label className={label}>Nom vendeur<input value={internal.seller_name||''} onChange={(e)=>setInternal((v:any)=>({...v,seller_name:e.target.value}))} className={input}/></label>
        <label className={label}>Société vendeur<input value={internal.seller_company||''} onChange={(e)=>setInternal((v:any)=>({...v,seller_company:e.target.value}))} className={input}/></label>
        <label className={label}>Téléphone<input value={internal.seller_phone||''} onChange={(e)=>setInternal((v:any)=>({...v,seller_phone:e.target.value}))} className={input}/></label>
        <label className={label}>WhatsApp<input value={internal.seller_whatsapp||''} onChange={(e)=>setInternal((v:any)=>({...v,seller_whatsapp:e.target.value}))} className={input}/></label>
        <label className={label}>Email<input value={internal.seller_email||''} onChange={(e)=>setInternal((v:any)=>({...v,seller_email:e.target.value}))} className={input}/></label>
        <label className={label}>Prix vendeur<input value={internal.seller_asking_price??''} onChange={(e)=>setInternal((v:any)=>({...v,seller_asking_price:e.target.value}))} className={input} inputMode="decimal"/></label>
        <label className={label}>Prix minimum accepté<input value={internal.seller_floor_price??''} onChange={(e)=>setInternal((v:any)=>({...v,seller_floor_price:e.target.value}))} className={input} inputMode="decimal"/></label>
      </div>
      {Number(internal.seller_asking_price)>0 && Number(internal.seller_floor_price)>0 ? <div className="mt-4 inline-flex rounded-lg border border-[#c8d8d1] bg-white px-4 py-2 text-sm text-[#315d55]"><strong>Remise maximale indicative :</strong>&nbsp;{Math.max(0,((Number(internal.seller_asking_price)-Number(internal.seller_floor_price))/Number(internal.seller_asking_price))*100).toFixed(1)} %</div>:null}
      <label className={label+" mt-4"}>Notes internes<textarea rows={4} value={internal.internal_notes||''} onChange={(e)=>setInternal((v:any)=>({...v,internal_notes:e.target.value}))} className={textarea} placeholder="Contexte vendeur, marge de négociation, disponibilité, conditions particulières…"/></label>
    </section>

    <section className="grid gap-4 border border-[#d9e1e8] bg-white p-5 md:grid-cols-4">
      <label className={label}>Pays<input value={draft.country_name||''} onChange={(e)=>setField('country_name',e.target.value)} className={input} placeholder="Turkey, UAE, Georgia…"/></label>
      <label className={label}>Code pays<input value={draft.country_code||''} onChange={(e)=>setField('country_code',e.target.value.toUpperCase().slice(0,3))} className={input} placeholder="TR, AE, GE…"/></label>
      <label className={label}>Ville<input value={draft.city_name||''} onChange={(e)=>{setField('city_name',e.target.value);setField('city',slugify(e.target.value));}} className={input} placeholder="Bodrum, Dubai, Batumi…"/></label>
      <label className={label}>Quartier<input value={draft.district||''} onChange={(e)=>setField('district',e.target.value)} className={input}/></label>
      <label className={label}>Type<select value={draft.property_type} onChange={(e)=>setField('property_type',e.target.value)} className={input}><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select></label>
      <label className={label}>Collection<select value={draft.collection} onChange={(e)=>setField('collection',e.target.value)} className={input}><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select></label>
      <label className={label}>Devise<select value={draft.currency} onChange={(e)=>setField('currency',e.target.value)} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option><option>KZT</option><option>GEL</option></select></label>
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

    {draft.real_estate_project_id?<section className="border border-[#b9c7bf] bg-[#f6f9f6] p-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-[#406a55]">Programme immobilier · Turquie & Dubaï</p>
      <h3 className="mt-2 text-xl font-semibold text-[#12304a]">Données du programme (pas du lot)</h3>
      <p className="mt-2 text-xs leading-6 text-[#65756a]">Renseignez uniquement une fourchette confirmée. Si le prix maximum n'est pas connu, laissez-le vide. La disponibilité de chaque typologie reste sur demande jusqu'à vérification.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className={label}>Prix minimum indicatif<input value={draft.total_price??''} onChange={e=>{setField('total_price',e.target.value);setField('price_on_request',!e.target.value);}} type="number" min="0" step="1" className={input}/></label>
        <label className={label}>Prix maximum confirmé<input value={draft.project_price_max??''} onChange={e=>setField('project_price_max',e.target.value)} type="number" min="0" step="1" className={input}/></label>
        <label className={label}>Date / période de livraison<input value={draft.delivery?.fr||''} onChange={e=>setLocale('delivery','fr',e.target.value)} className={input} placeholder="T3 2028"/></label>
        <label className={label}>Latitude vérifiée<input value={draft.project_latitude??''} onChange={e=>setField('project_latitude',e.target.value)} type="number" min="-90" max="90" step="any" className={input}/></label>
        <label className={label}>Longitude vérifiée<input value={draft.project_longitude??''} onChange={e=>setField('project_longitude',e.target.value)} type="number" min="-180" max="180" step="any" className={input}/></label>
      </div>
      <p className="mt-3 text-xs text-[#7a836f]">Sans coordonnées vérifiées, la carte affiche la zone du quartier, pas l'immeuble exact.</p>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#cedbd0] pt-5">
        <div><h4 className="font-semibold">Typologies prévues / repérées</h4><p className="mt-1 text-xs text-[#65756a]">Pas besoin de créer un appartement pour afficher 1BR, 2BR, etc.</p></div>
        <button type="button" onClick={()=>setField('project_unit_options',[...(draft.project_unit_options||[]),{label:'',bedrooms:'',areaM2:'',price:'',currency:draft.currency,availability:'on_request',source:'unit'}].slice(0,16))} className="border border-[#315c48] bg-white px-4 py-2 text-xs font-semibold text-[#315c48]">+ Typologie</button>
      </div>
      <div className="mt-4 grid gap-3">{(draft.project_unit_options||[]).map((unit:any,index:number)=>(
        <div key={index} className="grid gap-2 rounded-xl border border-[#d6dfd6] bg-white p-3 md:grid-cols-[1.2fr_0.55fr_0.7fr_0.9fr_1fr_auto]">
          <label className={label}>Type<input value={unit.label||''} onChange={e=>setField('project_unit_options',(draft.project_unit_options||[]).map((u:any,i:number)=>i===index?{...u,label:e.target.value}:u))} className={input} placeholder="2 BR"/></label>
          <label className={label}>Chambres<input value={unit.bedrooms??''} onChange={e=>setField('project_unit_options',(draft.project_unit_options||[]).map((u:any,i:number)=>i===index?{...u,bedrooms:e.target.value}:u))} className={input} type="number" min="0"/></label>
          <label className={label}>Surface m²<input value={unit.areaM2??''} onChange={e=>setField('project_unit_options',(draft.project_unit_options||[]).map((u:any,i:number)=>i===index?{...u,areaM2:e.target.value}:u))} className={input} type="number" min="0" step="0.01"/></label>
          <label className={label}>Prix indicatif<input value={unit.price??''} onChange={e=>setField('project_unit_options',(draft.project_unit_options||[]).map((u:any,i:number)=>i===index?{...u,price:e.target.value}:u))} className={input} type="number" min="0" step="1"/></label>
          <label className={label}>Disponibilité<select value={unit.availability||'on_request'} onChange={e=>setField('project_unit_options',(draft.project_unit_options||[]).map((u:any,i:number)=>i===index?{...u,availability:e.target.value}:u))} className={input}><option value="on_request">Sur demande</option><option value="confirmed">Confirmée manuellement</option></select></label>
          <button type="button" aria-label="Retirer typologie" onClick={()=>setField('project_unit_options',(draft.project_unit_options||[]).filter((_:any,i:number)=>i!==index))} className="self-end border border-[#e1c5c5] px-3 py-3 text-[#aa4949]">×</button>
        </div>
      ))}</div>
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

    <section className="rounded-xl border border-[#cfd8e3] bg-[#f7f9fb] p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Conditions financières promoteur</p>
          <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#162334]">Échéancier, taux et prix comparables</h3>
          <p className="mt-2 max-w-3xl text-xs leading-5 text-[#7b8794]">(renseignez uniquement les conditions communiquées par le promoteur ; le taux promoteur n’est pas automatiquement un taux bancaire)</p>
        </div>
        <label className="flex items-center gap-3 text-sm font-medium text-[#526272]">
          <input type="checkbox" checked={Boolean(draft.payment_plan_enabled)} onChange={(e)=>setField('payment_plan_enabled',e.target.checked)}/>
          Échéancier proposé
        </label>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className={label}>Mode de financement
          <select value={draft.payment_interest_mode||'not_specified'} onChange={(e)=>setField('payment_interest_mode',e.target.value)} disabled={!draft.payment_plan_enabled} className={input}>
            <option value="not_specified">Taux non communiqué</option>
            <option value="interest_free">0 % / sans intérêt</option>
            <option value="interest_bearing">Avec taux / surcoût financier</option>
          </select>
          <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(choisir 0 % seulement si le promoteur le confirme explicitement)</span>
        </label>

        <label className={label}>Taux promoteur %
          <input value={draft.payment_interest_rate??''} onChange={(e)=>setField('payment_interest_rate',e.target.value)} disabled={!draft.payment_plan_enabled || draft.payment_interest_mode!=='interest_bearing'} className={input} inputMode="decimal" placeholder="Ex. 8"/>
          <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(taux annoncé par le promoteur ; préciser dans les notes s’il est annuel ou appliqué au prix total)</span>
        </label>

        <label className={label}>Prix comptant
          <input value={draft.cash_price??''} onChange={(e)=>setField('cash_price',e.target.value)} className={input} inputMode="decimal" placeholder="Ex. 1 250 000"/>
          <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(prix si le client règle comptant)</span>
        </label>

        <label className={label}>Prix avec échéancier
          <input value={draft.installment_price??''} onChange={(e)=>setField('installment_price',e.target.value)} className={input} inputMode="decimal" placeholder="Ex. 1 300 000"/>
          <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(prix total si le plan de paiement est utilisé)</span>
        </label>

        <label className={label}>Remise comptant %
          <input value={draft.cash_discount_pct??''} onChange={(e)=>setField('cash_discount_pct',e.target.value)} className={input} inputMode="decimal" placeholder="Ex. 5"/>
          <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(remise officielle par rapport au prix de référence)</span>
        </label>

        <div className="md:col-span-2 xl:col-span-3">
          <label className={label}>Note financière FR
            <textarea rows={3} value={draft.payment_notes?.fr||''} onChange={(e)=>setLocale('payment_notes','fr',e.target.value)} className={textarea} placeholder="Ex. 30 % à la réservation, solde sur 24 mois. Taux annoncé sur le prix échelonné, sous réserve du contrat."/>
            <span className="normal-case tracking-normal text-[0.65rem] font-normal text-[#8793a0]">(ce texte apparaît sur la fiche publique ; soyez précis sur la durée, la base du taux et les conditions)</span>
          </label>
        </div>
      </div>

      <details className="mt-5 border-t border-[#d9e1e8] pt-4">
        <summary className="cursor-pointer text-xs font-semibold text-[#315d7c]">Traductions de la note financière</summary>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['en','ru','ar'].map((l)=><label key={l} className={label}>{l.toUpperCase()}<textarea rows={3} value={draft.payment_notes?.[l]||''} onChange={(e)=>setLocale('payment_notes',l,e.target.value)} className={textarea}/></label>)}
        </div>
      </details>
    </section>

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
        ['Équipements & caractéristiques du programme','highlights_text'],
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
