// @ts-nocheck
'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp, ImagePlus, Save, X } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

const locales=['fr','en','ru','ar'];

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

    {[
      ['Titre','title',false,1],
      ['Résumé','summary',true,3],
      ['Description','description',true,7],
      ['SEO title','seo_title',false,1],
      ['Meta description','seo_description',true,3],
      ['Livraison','delivery',false,1],
    ].map(([name,key,multi,rows]:any)=><section key={key} className="border border-[#d9e1e8] bg-white p-5"><h3 className="text-base font-semibold">{name}</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{locales.map((l)=><label key={l} className={label}>{l.toUpperCase()}{multi?<textarea rows={rows} value={draft[key]?.[l]||''} onChange={(e)=>setLocale(key,l,e.target.value)} className={textarea}/>:<input value={draft[key]?.[l]||''} onChange={(e)=>setLocale(key,l,e.target.value)} className={input}/>}</label>)}</div></section>)}

    <section className="border border-[#d9e1e8] bg-white p-5">
      <div className="flex items-center gap-2"><ImagePlus size={17} className="text-[#315d7c]"/><h3 className="text-base font-semibold">Galerie</h3></div>
      <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={(e)=>upload(e.target.files)} className="mt-4 text-sm"/>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">{draft.images.map((src:string,i:number)=><div key={src} className="relative aspect-[4/3] overflow-hidden bg-[#e8edf2]"><img src={src} alt="" className="h-full w-full object-cover"/><div className="absolute inset-x-1 top-1 flex justify-between"><button onClick={()=>moveImage(i,-1)} className="bg-[#0d1c2b] p-1 text-white"><ArrowUp size={12}/></button><button onClick={()=>setField('images',draft.images.filter((_:any,index:number)=>index!==i))} className="bg-[#8f4747] p-1 text-white"><X size={12}/></button><button onClick={()=>moveImage(i,1)} className="bg-[#0d1c2b] p-1 text-white"><ArrowDown size={12}/></button></div>{i===0&&<span className="absolute bottom-1 left-1 bg-white px-2 py-1 text-[0.6rem] font-semibold">HERO</span>}</div>)}</div>
    </section>

    {message&&<p className="border border-[#d9e1e8] bg-white p-4 text-sm text-[#526272]">{message}</p>}
    <button disabled={busy} onClick={save} className="inline-flex min-h-[48px] items-center gap-2 bg-[#12304a] px-6 text-sm font-semibold text-white disabled:opacity-50"><Save size={16}/>{busy?'Enregistrement…':'Enregistrer les modifications'}</button>
  </div>;
}
