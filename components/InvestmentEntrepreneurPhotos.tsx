'use client';
import {useEffect,useState,type ChangeEvent} from 'react';
import {Camera,ImagePlus,Trash2,ShieldCheck} from 'lucide-react';
import {prepareInvestmentImage} from '@/lib/prepareInvestmentImage';
import {getPortalSupabase} from '@/lib/portalSupabase';
import {pick,portalStatus,type PortalLocale} from '@/lib/investmentPortalI18n';
const db:any=getPortalSupabase();
type Media={id:string;owner_id:string;draft_id:string;category:string;original_name:string;private_path:string;public_path:string;status:string;created_at:string};

export function InvestmentEntrepreneurPhotos({draftId,userId,adminPreview=false,locale='fr'}:{draftId:string;userId:string;adminPreview?:boolean;locale?:PortalLocale}){
 const [items,setItems]=useState<Media[]>([]),[previews,setPreviews]=useState<Record<string,string>>({}),[category,setCategory]=useState('cover'),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState(''),[progress,setProgress]=useState<{done:number;total:number;name:string}|null>(null);
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
  if(!files.length||adminPreview||busy)return;if(files.length>8){setError(pick(locale,'8 images maximum.','Up to 8 images.','Не более 8 изображений.','ثماني صور كحد أقصى.'));return;}setBusy(true);let completed=0;setProgress({done:0,total:files.length,name:files[0].name});setError('');setNotice('');
  try{
   for(const original of files){setProgress({done:completed,total:files.length,name:original.name});
    let file:File;
    try{file=await prepareInvestmentImage(original);}catch{throw Error(original.name+' : '+pick(locale,"Image illisible ou trop volumineuse. Essayez JPG, PNG ou WebP (30 Mo max).","Unreadable or oversized image. Try JPG, PNG or WebP (30 MB max).","Изображение не читается или слишком большое. Попробуйте JPG, PNG или WebP (до 30 МБ).","الصورة غير قابلة للقراءة أو كبيرة جداً. جرّب JPG أو PNG أو WebP (30 ميغابايت كحد أقصى)."));}
    const path=userId+'/'+draftId+'/'+crypto.randomUUID()+'-'+file.name.replace(/[^a-z0-9._-]/gi,'-').slice(-100);
    const {error:storageError}=await db.storage.from('investment-dossiers').upload(path,file,{contentType:file.type,upsert:false});
    if(storageError)throw storageError;
    const {data:row,error:dbError}=await db.from('investment_listing_media').insert({
      owner_id:userId,draft_id:draftId,category,original_name:original.name.slice(0,240),private_path:path,content_type:file.type,size_bytes:file.size,sort_order:items.length+completed
    }).select('*').single();
    if(dbError){await db.storage.from('investment-dossiers').remove([path]);throw dbError;}
    setItems(x=>[row,...x]);completed++;setProgress({done:completed,total:files.length,name:file.name});
    const {data:signed}=await db.storage.from('investment-dossiers').createSignedUrl(path,360);
    if(signed?.signedUrl)setPreviews(x=>({...x,[row.id]:signed.signedUrl}));
   }
   setNotice(pick(locale,"Photos enregistrées. Leur publication sera effectuée depuis l’administration Bosphoras.","Photos saved. Publication is managed by Bosphoras administration.","Фотографии сохранены. Публикацией управляет администрация Bosphoras.","تم حفظ الصور. يتولى مسؤولو بوسفوراس نشرها."));
  }catch(e){setError(typeof e==='object'&&e&&'message' in e?String(e.message):pick(locale,"Erreur pendant l’envoi.","Upload error.","Ошибка загрузки.","خطأ أثناء التحميل."));}
  finally{setBusy(false);setProgress(null);}
 }
 async function remove(item:Media){
  if(item.status==='approved')return;
  if(!confirm(pick(locale,"Supprimer cette photo ?","Delete this photo?","Удалить фотографию?","حذف هذه الصورة؟")))return;
  setBusy(true);setError('');
  try{
   const {error}=await db.from('investment_listing_media').delete().eq('id',item.id).eq('owner_id',userId);
   if(error)throw error;
   if(item.private_path)await db.storage.from('investment-dossiers').remove([item.private_path]);
   setItems(x=>x.filter(y=>y.id!==item.id));
  }catch(e){setError(e instanceof Error?e.message:pick(locale,"Échec de suppression.","Deletion failed.","Не удалось удалить.","فشل الحذف."));}
  finally{setBusy(false);}
 }
 return <section className="rounded-xl border border-[#dce4e7] bg-white p-6 md:p-8">
  <div className="flex items-center gap-3"><Camera className="text-[#193344]"/><h2 className="text-xl font-medium text-[#193344]">{pick(locale,"Photos et identité visuelle","Photos and visual identity","Фотографии и фирменный стиль","الصور والهوية البصرية")}</h2></div>
  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#60727b]">{pick(locale,"Ajoutez votre photo de couverture, votre logo et des photos de votre activité. Les images ne deviennent visibles sur les annonces qu’après sélection par Bosphoras.","Add a cover image, logo and photos of your business. Images appear publicly only after selection by Bosphoras.","Добавьте обложку, логотип и фотографии бизнеса. Изображения появляются в объявлениях только после отбора Bosphoras.","أضف صورة الغلاف والشعار وصور نشاطك. لا تظهر الصور في الإعلانات إلا بعد اختيارها من بوسفوراس.")}</p>
  <div className="mt-7 flex flex-wrap items-end gap-3">
   <label className="text-sm text-[#53656c]">{pick(locale,"Usage de l’image","Image purpose","Назначение изображения","استخدام الصورة")}<select className="mt-2 block rounded-lg border border-[#cdd8de] bg-white px-4 py-3 text-sm" value={category} onChange={e=>setCategory(e.target.value)}><option value="cover">{pick(locale,"Photo principale","Cover photo","Главное фото","الصورة الرئيسية")}</option><option value="logo">{pick(locale,"Logo","Logo","Логотип","الشعار")}</option><option value="gallery">{pick(locale,"Galerie","Gallery","Галерея","المعرض")}</option></select></label>
   <label className={'inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white '+(busy?'opacity-60':'')}><ImagePlus size={18}/>{busy?pick(locale,"Envoi…","Uploading…","Загрузка…","جارٍ التحميل…"):pick(locale,"Ajouter des photos","Add photos","Добавить фотографии","إضافة صور")}<input type="file" accept="image/*,.heic,.heif,.avif" multiple disabled={busy||adminPreview} className="sr-only" onChange={upload}/></label>
  </div>
  <p className="mt-3 text-xs text-[#78878d]">{pick(locale,"Formats JPG, PNG ou WebP · 30 Mo avant optimisation · jusqu’à huit images par envoi.","JPG, PNG or WebP · 30 MB before optimisation · up to eight per upload.","JPG, PNG или WebP · до 30 МБ до оптимизации · до восьми за раз.","JPG أو PNG أو WebP · 30 ميغابايت قبل التحسين · حتى ثماني صور دفعة واحدة.")}</p>
  {progress&&<div role="status" aria-live="polite" className="mt-4 min-w-0 rounded-md border p-3 text-xs"><p className="break-all">{progress.name}</p><progress max={progress.total} value={progress.done} className="mt-2 w-full"/><p>{progress.done} / {progress.total}</p></div>}
  {notice&&<p className="mt-5 rounded-lg bg-[#eef6f1] p-3 text-sm text-[#34634c]" role="status">{notice}</p>}
  {error&&<p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">{error}</p>}
  <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{items.map(item=><div key={item.id} className="overflow-hidden rounded-lg border border-[#dce5e8] bg-[#f7f9fa]">
   <div className="aspect-[4/3] overflow-hidden bg-[#dce5e8]">{previews[item.id]?<img src={previews[item.id]} className="h-full w-full object-cover" alt={item.original_name}/>:<div className="flex h-full items-center justify-center text-xs text-[#768891]">{pick(locale,"Photo privée","Private photo","Закрытая фотография","صورة خاصة")}</div>}</div>
   <div className="p-3"><p className="truncate text-xs font-medium text-[#193344]">{item.original_name}</p><p className="mt-2 text-[11px] text-[#65747c]">{item.category==='cover'?pick(locale,"Couverture","Cover","Обложка","الغلاف"):item.category==='logo'?pick(locale,"Logo","Logo","Логотип","الشعار"):pick(locale,"Galerie","Gallery","Галерея","المعرض")} · {item.status==='approved'?pick(locale,"Validée","Approved","Одобрено","معتمدة"):item.status==='rejected'?pick(locale,"Non retenue","Rejected","Отклонено","مرفوضة"):pick(locale,"À sélectionner","Awaiting selection","Ожидает отбора","بانتظار الاختيار")}</p>
   {item.status!=='approved'&&<button disabled={busy} onClick={()=>remove(item)} className="mt-2 inline-flex items-center gap-1 text-xs text-red-700"><Trash2 size={14}/>{pick(locale,"Supprimer","Delete","Удалить","حذف")}</button>}</div>
  </div>)}</div>
  {items.length===0&&<p className="mt-6 text-sm text-[#70808a]">{pick(locale,"Ajoutez une image représentative de votre entreprise pour sa future présentation.","Add an image representing your company for its future presentation.","Добавьте фотографию, представляющую вашу компанию.","أضف صورة تمثل شركتك لعرضها مستقبلاً.")}</p>}
  <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-[#7a8a92]"><ShieldCheck className="mt-1 shrink-0" size={15}/>{pick(locale,"Les fichiers originaux restent dans un coffre privé. Seules les images sélectionnées par l’administration sont rendues publiques.","Original files remain in private storage. Only images selected by administrators become public.","Оригиналы остаются в закрытом хранилище. Публикуются только изображения, выбранные администрацией.","تبقى الملفات الأصلية في خزنة خاصة. لا تُنشر إلا الصور التي تختارها الإدارة.")}</p>
 </section>;
}
