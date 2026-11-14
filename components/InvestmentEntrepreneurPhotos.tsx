'use client';
import {useEffect,useState,type ChangeEvent} from 'react';
import {Camera,ImagePlus,Trash2,ShieldCheck} from 'lucide-react';
import {getPortalSupabase} from '@/lib/portalSupabase';
const db:any=getPortalSupabase();
type Media={id:string;owner_id:string;draft_id:string;category:string;original_name:string;private_path:string;public_path:string;status:string;created_at:string};
const allowed=new Set(['image/jpeg','image/png','image/webp']);
export function InvestmentEntrepreneurPhotos({draftId,userId,adminPreview=false}:{draftId:string;userId:string;adminPreview?:boolean}){
 const [items,setItems]=useState<Media[]>([]),[previews,setPreviews]=useState<Record<string,string>>({}),[category,setCategory]=useState('cover'),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState('');
 useEffect(()=>{let alive=true;if(!draftId||adminPreview)return;
  (async()=>{
   const {data,error}=await db.from('investment_listing_media').select('*').eq('draft_id',draftId).eq('owner_id',userId).order('created_at',{ascending:false});
   if(!alive)return;
   if(error){setError(error.message);return;}
   const rows:Media[]=data||[];setItems(rows);
   const urls:Record<string,string>={};
   for(const item of rows){
    if(!item.private_path)continue;
    const {data:signed}=await db.storage.from('investment-dossiers').createSignedUrl(item.private_path,360);
    if(signed?.signedUrl)urls[item.id]=signed.signedUrl;
   }
   if(alive)setPreviews(urls);
  })().catch(e=>{if(alive)setError(String(e));});
  return()=>{alive=false;};
 },[draftId,userId,adminPreview]);
 async function upload(e:ChangeEvent<HTMLInputElement>){
  const files=Array.from(e.target.files||[]);e.target.value='';
  if(!files.length||adminPreview)return;setBusy(true);setError('');setNotice('');
  try{
   for(const file of files.slice(0,8)){
    if(!allowed.has(file.type)||file.size>10485760||file.size===0)throw Error('Choisissez une image JPG, PNG ou WebP de 10 Mo maximum.');
    const path=userId+'/'+draftId+'/'+crypto.randomUUID()+'-'+file.name.replace(/[^a-z0-9._-]/gi,'-').slice(-100);
    const {error:storageError}=await db.storage.from('investment-dossiers').upload(path,file,{contentType:file.type,upsert:false});
    if(storageError)throw storageError;
    const {data:row,error:dbError}=await db.from('investment_listing_media').insert({
      owner_id:userId,draft_id:draftId,category,original_name:file.name.slice(0,240),private_path:path,content_type:file.type,size_bytes:file.size,sort_order:items.length
    }).select('*').single();
    if(dbError){await db.storage.from('investment-dossiers').remove([path]);throw dbError;}
    setItems(x=>[row,...x]);
    const {data:signed}=await db.storage.from('investment-dossiers').createSignedUrl(path,360);
    if(signed?.signedUrl)setPreviews(x=>({...x,[row.id]:signed.signedUrl}));
   }
   setNotice('Photos enregistrées. Leur publication sera effectuée depuis l’administration Bosphoras.');
  }catch(e){setError(e instanceof Error?e.message:'Erreur pendant l’envoi.');}
  finally{setBusy(false);}
 }
 async function remove(item:Media){
  if(item.status==='approved')return;
  if(!confirm('Supprimer cette photo ?'))return;
  setBusy(true);setError('');
  try{
   const {error}=await db.from('investment_listing_media').delete().eq('id',item.id).eq('owner_id',userId);
   if(error)throw error;
   if(item.private_path)await db.storage.from('investment-dossiers').remove([item.private_path]);
   setItems(x=>x.filter(y=>y.id!==item.id));
  }catch(e){setError(e instanceof Error?e.message:'Échec de suppression.');}
  finally{setBusy(false);}
 }
 return <section className="rounded-xl border border-[#dce4e7] bg-white p-6 md:p-8">
  <div className="flex items-center gap-3"><Camera className="text-[#193344]"/><h2 className="text-xl font-medium text-[#193344]">Photos et identité visuelle</h2></div>
  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#60727b]">Ajoutez votre photo de couverture, votre logo et des photos de votre activité. Les images ne deviennent visibles sur les annonces qu’après sélection par Bosphoras.</p>
  <div className="mt-7 flex flex-wrap items-end gap-3">
   <label className="text-sm text-[#53656c]">Usage de l’image<select className="mt-2 block rounded-lg border border-[#cdd8de] bg-white px-4 py-3 text-sm" value={category} onChange={e=>setCategory(e.target.value)}><option value="cover">Photo principale</option><option value="logo">Logo</option><option value="gallery">Galerie</option></select></label>
   <label className={'inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white '+(busy?'opacity-60':'')}><ImagePlus size={18}/>{busy?'Envoi…':'Ajouter des photos'}<input type="file" accept=".jpg,.jpeg,.png,.webp" multiple disabled={busy||adminPreview} className="sr-only" onChange={upload}/></label>
  </div>
  <p className="mt-3 text-xs text-[#78878d]">Formats JPG, PNG ou WebP · 10 Mo par image · jusqu’à huit images par envoi.</p>
  {notice&&<p className="mt-5 rounded-lg bg-[#eef6f1] p-3 text-sm text-[#34634c]" role="status">{notice}</p>}
  {error&&<p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">{error}</p>}
  <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{items.map(item=><div key={item.id} className="overflow-hidden rounded-lg border border-[#dce5e8] bg-[#f7f9fa]">
   <div className="aspect-[4/3] overflow-hidden bg-[#dce5e8]">{previews[item.id]?<img src={previews[item.id]} className="h-full w-full object-cover" alt={item.original_name}/>:<div className="flex h-full items-center justify-center text-xs text-[#768891]">Photo privée</div>}</div>
   <div className="p-3"><p className="truncate text-xs font-medium text-[#193344]">{item.original_name}</p><p className="mt-2 text-[11px] text-[#65747c]">{item.category==='cover'?'Couverture':item.category==='logo'?'Logo':'Galerie'} · {item.status==='approved'?'Validée':item.status==='rejected'?'Non retenue':'À sélectionner'}</p>
   {item.status!=='approved'&&<button disabled={busy} onClick={()=>remove(item)} className="mt-2 inline-flex items-center gap-1 text-xs text-red-700"><Trash2 size={14}/>Supprimer</button>}</div>
  </div>)}</div>
  {items.length===0&&<p className="mt-6 text-sm text-[#70808a]">Ajoutez une image représentative de votre entreprise pour sa future présentation.</p>}
  <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-[#7a8a92]"><ShieldCheck className="mt-1 shrink-0" size={15}/>Les fichiers originaux restent dans un coffre privé. Seules les images sélectionnées par l’administration sont rendues publiques.</p>
 </section>;
}
