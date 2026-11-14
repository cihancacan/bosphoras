'use client';
import {useEffect,useState,type ChangeEvent} from 'react';
import Link from 'next/link';
import {ArrowDownToLine,ArrowRight,Camera,Check,Eye,ImagePlus,Save,ShieldCheck,Star,Trash2} from 'lucide-react';
import {getPortalSupabase} from '@/lib/portalSupabase';
import {investmentVentures} from '@/data/investmentVentures';
import {mergedInvestmentListing,moneyLabel,publicCoverUrl,type InvestmentListing} from '@/lib/investmentListings';
import {InvestmentProjectCard} from '@/components/InvestmentProjectCard';

const db:any=getPortalSupabase();
type Media={id:string;owner_id:string;draft_id:string|null;listing_code:string|null;category:string;original_name:string;private_path:string;public_path:string;status:string;content_type:string;size_bytes:number;sort_order:number;created_at:string};
const statuses:Record<string,string>={pending:'À valider',approved:'Approuvée',rejected:'Refusée'};
const allowed=new Set(['image/jpeg','image/png','image/webp']);
const input='mt-2 block w-full rounded-lg border border-[#cbd6db] bg-white px-4 py-3 text-sm text-[#243b46] outline-none focus:border-[#193344]';
const label='block text-sm font-medium leading-6 text-[#506570]';
const fieldsIntro:[keyof InvestmentListing,string][]=[['title_fr','Titre français'],['title_en','English title'],['tagline_fr','Accroche FR'],['tagline_en','Tagline EN'],['short_fr','Présentation courte FR'],['short_en','Short summary EN'],['story_fr','Présentation détaillée FR'],['story_en','Detailed description EN'],['highlights_fr','Atouts du projet FR — un par ligne'],['highlights_en','Highlights EN — one per line'],['sector','Secteur'],['location','Localisation'],['issuer_name','Société juridique porteuse']];
const financeFields:[keyof InvestmentListing,string][]=[['exit_terms_fr','Conditions de sortie FR'],['exit_terms_en','Exit terms EN'],['use_of_funds_fr','Utilisation des fonds FR'],['use_of_funds_en','Use of funds EN'],['risk_summary_fr','Risques FR'],['risk_summary_en','Risks EN']];
export function InvestmentListingManager(){
 const [items,setItems]=useState<InvestmentListing[]>([]),[media,setMedia]=useState<Media[]>([]),[selected,setSelected]=useState('aqma'),[draft,setDraft]=useState<InvestmentListing|null>(null),[busy,setBusy]=useState(false),[loading,setLoading]=useState(true),[error,setError]=useState(''),[notice,setNotice]=useState(''),[section,setSection]=useState<'content'|'finance'|'media'|'publish'>('content'),[imageCategory,setImageCategory]=useState('cover'),[targetForMedia,setTargetForMedia]=useState('aqma'),[previewUrls,setPreviewUrls]=useState<Record<string,string>>({});
 async function reload(){
  const [l,m]=await Promise.all([
   db.from('investment_listings').select('*').order('display_order'),
   db.from('investment_listing_media').select('*').order('created_at',{ascending:false})
  ]);
  if(l.error||m.error)throw l.error||m.error;
  setItems((l.data||[]) as InvestmentListing[]);setMedia((m.data||[]) as Media[]);
 }
 useEffect(()=>{let active=true;reload().catch(e=>{if(active)setError(e.message||String(e));}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[]);
 useEffect(()=>{
  const item=items.find(x=>x.code===selected);
  if(item)setDraft({...item});
  setTargetForMedia(selected);
 },[items,selected]);
 useEffect(()=>{let alive=true;(async()=>{
  const urls:Record<string,string>={};
  for(const m of media.filter(x=>x.status==='pending'&&x.private_path).slice(0,30)){
   const {data}=await db.storage.from('investment-dossiers').createSignedUrl(m.private_path,300);
   if(data?.signedUrl)urls[m.id]=data.signedUrl;
  }
  if(alive)setPreviewUrls(urls);
 })().catch(()=>{});
 return()=>{alive=false;};},[media]);
 async function run(fn:()=>Promise<void>,text:string){
  setBusy(true);setError('');setNotice('');
  try{await fn();await reload();setNotice(text);}
  catch(e){setError(e instanceof Error?e.message:String(e));}
  finally{setBusy(false);}
 }
 const value=(key:keyof InvestmentListing)=>String(draft?.[key]??'');
 const change=(key:keyof InvestmentListing,val:unknown)=>setDraft(x=>x?{...x,[key]:val}:x);
 const row=items.find(x=>x.code===selected);
 async function save(overrides:Partial<InvestmentListing>={},success='Annonce sauvegardée en brouillon.'){
  if(!draft)return;
  if(row?.publication_status==='published' && !confirm('Cette annonce est déjà publiée : enregistrer ces modifications les rendra immédiatement visibles au public. Continuer ?'))return;
  await run(async()=>{
   const current=items.find(x=>x.code===selected);
   const payload={...draft,...overrides,updated_at:new Date().toISOString()};
   // Publication has an explicit action; saving text cannot accidentally go live.
   delete (payload as any).code;delete (payload as any).published_at;
   payload.publication_status=current?.publication_status||'draft';
   const {error}=await db.from('investment_listings').update(payload).eq('code',selected);
   if(error)throw error;
  },row?.publication_status==='published'?'Annonce publique mise à jour.':success);
 }
 async function publish(){
  if(!draft)return;
  if(!draft.title_fr.trim()||!draft.short_fr.trim()||!draft.story_fr.trim())return setError('Renseignez le titre, le résumé et la présentation détaillée.');
  if(!draft.cover_path)return setError('Choisissez une photo principale approuvée avant publication.');
  if(!draft.target_amount||!draft.minimum_ticket||!draft.investment_type)return setError('Montant recherché, ticket minimum et instrument financier sont nécessaires avant publication.');
  if(!draft.risk_summary_fr||!draft.exit_terms_fr)return setError('Renseignez les risques et les conditions de sortie.');
  if(!confirm('Publier cette annonce et ses conditions financières sur le site public ? Vérifiez tous les montants, visuels, droits et autorisations.'))return;
  await run(async()=>{
   const {data:{user}}=await db.auth.getUser();if(!user)throw Error('Connexion requise.');
   const payload={...draft,publication_status:'published',published_at:new Date().toISOString(),approved_by:user.id,updated_at:new Date().toISOString()};
   delete (payload as any).code;
   const {error}=await db.from('investment_listings').update(payload).eq('code',selected);if(error)throw error;
  },'Annonce publiée. Les nouvelles conditions deviennent accessibles aux visiteurs.');
 }
 async function unpublish(){
  if(!confirm('Retirer cette annonce de sa publication financière ?'))return;
  await run(async()=>{const {error}=await db.from('investment_listings').update({publication_status:'draft',published_at:null,updated_at:new Date().toISOString()}).eq('code',selected);if(error)throw error;},'Annonce dépubliée. La présentation éditoriale du projet reste visible.');
 }
 async function uploadAdminImages(e:ChangeEvent<HTMLInputElement>){
  const files=Array.from(e.target.files||[]);e.target.value='';if(!files.length)return;
  await run(async()=>{
   const {data:{user}}=await db.auth.getUser();if(!user)throw Error('Session expirée.');
   for(const file of files.slice(0,8)){
    if(!allowed.has(file.type)||file.size>10485760||file.size<1)throw Error('Image JPG, PNG ou WebP, 10 Mo maximum.');
    const path='projects/'+selected+'/'+crypto.randomUUID()+'.'+(file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg');
    const {error:uploadError}=await db.storage.from('investment-listing-public').upload(path,file,{contentType:file.type,upsert:false,cacheControl:'3600'});
    if(uploadError)throw uploadError;
    const {data,error:insertError}=await db.from('investment_listing_media').insert({owner_id:user.id,draft_id:null,listing_code:selected,category:imageCategory,original_name:file.name.slice(0,240),private_path:'',public_path:path,content_type:file.type,size_bytes:file.size,sort_order:media.length,status:'approved'}).select('id').single();
    if(insertError){await db.storage.from('investment-listing-public').remove([path]);throw insertError;}
    if(imageCategory==='cover'&&!draft?.cover_path){
     const {error:ce}=await db.from('investment_listings').update({cover_path:path}).eq('code',selected);
     if(ce)throw ce;
    }
   }
  },'Images enregistrées et disponibles dans la médiathèque.');
 }
 async function approvePhoto(image:Media){
  if(!image.private_path)return;
  await run(async()=>{
   const {data:file,error:downloadError}=await db.storage.from('investment-dossiers').download(image.private_path);
   if(downloadError||!file)throw downloadError||Error('Fichier privé indisponible.');
   const ext=image.content_type==='image/png'?'png':image.content_type==='image/webp'?'webp':'jpg';
   const path='projects/'+targetForMedia+'/'+crypto.randomUUID()+'.'+ext;
   const {error:uploadError}=await db.storage.from('investment-listing-public').upload(path,file,{contentType:image.content_type,upsert:false,cacheControl:'3600'});
   if(uploadError)throw uploadError;
   const {error:updateError}=await db.from('investment_listing_media').update({listing_code:targetForMedia,public_path:path,status:'approved'}).eq('id',image.id);
   if(updateError){await db.storage.from('investment-listing-public').remove([path]);throw updateError;}
   if(image.category==='cover'){
    const {error:coverError}=await db.from('investment_listings').update({cover_path:path}).eq('code',targetForMedia);
    if(coverError)throw coverError;
   }
  },'Image entreprise approuvée et rattachée au projet.');
 }
 async function rejectPhoto(image:Media){await run(async()=>{const {error}=await db.from('investment_listing_media').update({status:'rejected'}).eq('id',image.id);if(error)throw error;},'Photo refusée.');}
 async function makeCover(image:Media){
  if(image.listing_code!==selected||image.status!=='approved')return;
  await run(async()=>{const {error}=await db.from('investment_listings').update({cover_path:image.public_path}).eq('code',selected);if(error)throw error;},'Photo principale mise à jour.');
 }
 async function movePhoto(image:Media,diff:number){
  const next=Math.max(0,image.sort_order+diff);
  await run(async()=>{const {error}=await db.from('investment_listing_media').update({sort_order:next}).eq('id',image.id);if(error)throw error;},'Ordre des photos actualisé.');
 }
 const associated=media.filter(x=>x.listing_code===selected&&x.status==='approved').sort((a,b)=>a.sort_order-b.sort_order);
 const pending=media.filter(x=>x.status==='pending');
 if(loading)return <div className="rounded-xl bg-white p-7 text-sm text-[#526672]">Chargement des annonces Investment…</div>;
 return <div className="space-y-6">
  <div className="grid gap-5 lg:grid-cols-[270px_1fr]">
   <aside className="self-start rounded-xl border border-[#dbe4e7] bg-white p-5"><h2 className="text-lg font-semibold text-[#193344]">Annonces Investment</h2><p className="mt-2 text-xs leading-6 text-[#6e808a]">Sélectionnez un projet pour préparer sa vitrine.</p>
    <div className="mt-5 space-y-2">{investmentVentures.map(v=>{const item=items.find(x=>x.code===v.code);return <button key={v.code} onClick={()=>{setSelected(v.code);setSection('content');setError('');setNotice('');}} className={'w-full rounded-lg border p-3 text-left '+(selected===v.code?'border-[#193344] bg-[#eaf1f4]':'border-[#e2e9eb] bg-white')}><p className="text-sm font-medium text-[#193344]">{v.name}</p><p className="mt-1 text-[11px] text-[#72818a]">{item?.publication_status==='published'?'Publié':'Brouillon privé'}</p></button>})}</div>
   </aside>
   <div className="space-y-6">
    <section className="rounded-xl border border-[#dbe4e7] bg-white p-6 md:p-8">
     <div className="flex flex-wrap justify-between gap-3"><div><p className="text-xs uppercase tracking-[.12em] text-[#6a7a83]">ÉDITEUR D'OPPORTUNITÉS</p><h2 className="mt-3 text-2xl font-semibold text-[#193344]">{investmentVentures.find(v=>v.code===selected)?.name}</h2></div><span className={'self-start rounded-lg px-3 py-2 text-xs font-medium '+(row?.publication_status==='published'?'bg-[#e8f5ec] text-[#236441]':'bg-[#f3f1ea] text-[#746438]')}>{row?.publication_status==='published'?'Publiée':'Brouillon'}</span></div>
     <div className="mt-7 flex flex-wrap gap-2 border-b border-[#dce5e8] pb-4">{([['content','Présentation'],['finance','Financement'],['media','Photos et médias'],['publish','Publication']] as const).map(([k,t])=><button key={k} onClick={()=>setSection(k)} className={'rounded-md px-4 py-3 text-sm '+(section===k?'bg-[#193344] text-white':'bg-[#edf2f4] text-[#405763]')}>{t}</button>)}</div>
     {error&&<p role="alert" className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</p>}
     {notice&&<p role="status" className="mt-5 rounded-lg bg-[#e8f3ed] p-4 text-sm text-[#285c42]">{notice}</p>}
     {draft&&section==='content'&&<div className="mt-7 grid gap-5 md:grid-cols-2">{fieldsIntro.map(([k,t])=><label key={k} className={label+' '+(String(k).includes('story')||String(k).includes('short')||String(k).includes('highlights')?'md:col-span-2':'')}>{t}{['short_fr','short_en','story_fr','story_en','highlights_fr','highlights_en'].includes(k)?<textarea rows={String(k).includes('story')?6:3} className={input} maxLength={k==='story_fr'||k==='story_en'?10000:1800} value={value(k)} onChange={e=>change(k,e.target.value)}/>:<input maxLength={230} className={input} value={value(k)} onChange={e=>change(k,e.target.value)}/>}</label>)}</div>}
     {draft&&section==='finance'&&<div className="mt-7 grid gap-5 md:grid-cols-2">
      <label className={label}>Montant recherché<input type="number" min="0" step="1" className={input} value={draft.target_amount??''} onChange={e=>change('target_amount',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Ticket minimum<input type="number" min="0" step="1" className={input} value={draft.minimum_ticket??''} onChange={e=>change('minimum_ticket',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Ticket maximum<input type="number" min="0" step="1" className={input} value={draft.maximum_ticket??''} onChange={e=>change('maximum_ticket',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Devise<select value={draft.currency} onChange={e=>change('currency',e.target.value)} className={input}><option value="EUR">EUR</option><option value="USD">USD</option><option value="AED">AED</option></select></label>
      <label className={label}>Type d’investissement<select className={input} value={draft.investment_type} onChange={e=>change('investment_type',e.target.value)}><option value="">À définir</option><option value="loan">Prêt</option><option value="bond">Obligation</option><option value="equity">Capital / actions</option><option value="project_finance">Financement de projet</option><option value="other">Autre</option></select></label>
      <label className={label}>Taux annuel indicatif (%)<input type="number" min="0" max="100" step="0.01" className={input} value={draft.annual_rate??''} onChange={e=>change('annual_rate',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Durée (mois)<input type="number" min="1" max="600" step="1" className={input} value={draft.term_months??''} onChange={e=>change('term_months',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Premier paiement (mois)<input type="number" min="1" max="600" step="1" className={input} value={draft.first_payment_month??''} onChange={e=>change('first_payment_month',e.target.value===''?null:Number(e.target.value))}/></label>
      <label className={label}>Fréquence des paiements<select className={input} value={draft.payment_frequency} onChange={e=>change('payment_frequency',e.target.value)}><option value="">À déterminer</option><option value="monthly">Mensuelle</option><option value="quarterly">Trimestrielle</option><option value="annual">Annuelle</option><option value="at_maturity">À échéance</option><option value="variable">Variable</option></select></label>
      <label className={label}>Ordre d’affichage<input type="number" min="0" step="1" className={input} value={draft.display_order} onChange={e=>change('display_order',Number(e.target.value))}/></label>
      {financeFields.map(([k,t])=><label key={k} className={label+' md:col-span-2'}>{t}<textarea className={input} rows={3} maxLength={4000} value={value(k)} onChange={e=>change(k,e.target.value)}/></label>)}
     </div>}
     {section==='media'&&<div className="mt-7 space-y-10">
      <div className="rounded-lg bg-[#f3f6f7] p-5"><p className="text-sm font-medium text-[#193344]">Ajouter une photo depuis l’administration</p><div className="mt-4 flex flex-wrap items-end gap-3"><label className={label}>Catégorie<select className={input} value={imageCategory} onChange={e=>setImageCategory(e.target.value)}><option value="cover">Couverture</option><option value="gallery">Galerie</option><option value="logo">Logo</option></select></label><label className={'inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white '+(busy?'opacity-50':'')}><ImagePlus size={17}/>Télécharger des images<input className="sr-only" type="file" multiple accept=".jpg,.jpeg,.png,.webp" disabled={busy} onChange={uploadAdminImages}/></label></div></div>
      <div><h3 className="text-lg font-medium text-[#193344]">Médiathèque validée ({associated.length})</h3><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{associated.map(m=><div className="overflow-hidden rounded-lg border border-[#dbe4e7]" key={m.id}><div className="aspect-[4/3] bg-[#e2e8eb]"><img alt={m.original_name} src={publicCoverUrl(m.public_path)} className="h-full w-full object-cover"/></div><div className="p-3"><p className="truncate text-xs text-[#405966]">{m.original_name}</p><div className="mt-3 flex flex-wrap gap-2"><button onClick={()=>makeCover(m)} disabled={busy} className="inline-flex items-center gap-1 rounded border border-[#cbd8dc] px-2 py-1 text-xs text-[#193344]"><Star size={13}/>{draft?.cover_path===m.public_path?'Couverture actuelle':'Couverture'}</button><button onClick={()=>movePhoto(m,-1)} disabled={busy} className="rounded border border-[#d6dfe3] px-2 py-1 text-xs">↑</button><button onClick={()=>movePhoto(m,1)} disabled={busy} className="rounded border border-[#d6dfe3] px-2 py-1 text-xs">↓</button></div></div></div>)}</div>{associated.length===0&&<p className="mt-4 text-sm text-[#6c7c84]">Téléchargez une photo ou validez un média transmis par l’entreprise.</p>}</div>
      <div><h3 className="text-lg font-medium text-[#193344]">Photos proposées par les entreprises ({pending.length})</h3><p className="mt-2 text-sm leading-7 text-[#6b7d86]">Vous choisissez le projet auquel rattacher chaque image avant qu’elle soit publiée.</p><label className="mt-4 block max-w-sm text-sm text-[#4b5d66]">Projet destinataire<select className={input} value={targetForMedia} onChange={e=>setTargetForMedia(e.target.value)}>{investmentVentures.map(v=><option value={v.code} key={v.code}>{v.name}</option>)}</select></label><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{pending.map(m=><div key={m.id} className="overflow-hidden rounded-lg border border-[#dbe4e7]"><div className="aspect-[4/3] bg-[#e1e9ed]">{previewUrls[m.id]?<img className="h-full w-full object-cover" src={previewUrls[m.id]} alt={m.original_name}/>:<div className="flex h-full items-center justify-center text-xs text-[#71818a]">Image privée</div>}</div><div className="p-4"><p className="truncate text-xs font-medium text-[#193344]">{m.original_name}</p><p className="mt-1 text-xs text-[#687b83]">{m.category==='cover'?'Photo principale':m.category==='logo'?'Logo':'Galerie'}</p><div className="mt-3 flex flex-wrap gap-2"><button disabled={busy} onClick={()=>approvePhoto(m)} className="rounded bg-[#193344] px-3 py-2 text-xs text-white">Approuver</button><button disabled={busy} onClick={()=>rejectPhoto(m)} className="rounded border border-[#d8dfe3] px-3 py-2 text-xs">Refuser</button></div></div></div>)}</div></div>
     </div>}
     {draft&&section==='publish'&&<div className="mt-7 space-y-6">
      <div className="rounded-lg bg-[#edf3f5] p-6"><p className="text-sm font-semibold text-[#193344]">Contrôle de publication</p><p className="mt-3 text-sm leading-8 text-[#526772]">Une annonce publiée rend visibles ses montants, conditions, photos et descriptions. Les demandes de placement restent des demandes non contraignantes transmises au CRM.</p></div>
      <label className="flex items-center gap-3 text-sm text-[#4b5f69]"><input type="checkbox" className="h-4 w-4 accent-[#193344]" checked={draft.featured} onChange={e=>change('featured',e.target.checked)}/>Mettre le projet en avant dans le catalogue</label>
      <div className="grid gap-3 sm:grid-cols-2"><button disabled={busy} onClick={()=>publish()} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#193344] px-5 py-4 text-sm text-white"><Check size={17}/>Publier l’annonce</button><button disabled={busy} onClick={()=>unpublish()} className="rounded-lg border border-[#ccd7dc] px-5 py-4 text-sm text-[#193344]">Retirer de la publication</button></div>
      <Link href={'/investissement/projets/'+selected} className="inline-flex items-center gap-2 text-sm text-[#193344] underline underline-offset-4"><Eye size={16}/>Voir la fiche publique</Link>
     </div>}
     {section!=='media'&&section!=='publish'&&<div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#e0e7ea] pt-6"><button disabled={busy} onClick={()=>save()} className="inline-flex items-center gap-2 rounded-lg bg-[#193344] px-6 py-3.5 text-sm font-medium text-white"><Save size={16}/>{busy?'Sauvegarde…':'Enregistrer les modifications'}</button><span className="text-xs leading-6 text-[#6b7f87]">{row?.publication_status==='published'?'Cette annonce est publique : enregistrer ses modifications met à jour le site.':'L’annonce reste privée tant que vous ne l’avez pas publiée.'}</span></div>}
    </section>
    {draft&&<section className="rounded-xl border border-[#dbe4e7] bg-white p-6 md:p-8"><h2 className="mb-5 text-lg font-medium text-[#193344]">Aperçu de l’annonce</h2><div className="max-w-[480px]"><InvestmentProjectCard project={{...draft,publication_status:'published'}} locale="fr"/></div><p className="mt-5 text-xs leading-6 text-[#607680]">Aperçu local du contenu en cours d'édition. La sauvegarde ne vaut pas publication.</p></section>}
   </div>
  </div>
 </div>;
}
