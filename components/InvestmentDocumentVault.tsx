'use client';
import {useEffect,useState,type ChangeEvent} from 'react';
import {ArrowDownToLine,CloudUpload,FileText,ShieldCheck,Trash2} from 'lucide-react';
import {getPortalSupabase} from '@/lib/portalSupabase';
import {pick,portalStatus,type PortalLocale} from '@/lib/investmentPortalI18n';
const db:any=getPortalSupabase();
const types=new Set(['application/pdf','image/jpeg','image/png','image/webp','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']);
export type InvestmentDoc={id:string;project_draft_id:string;user_id:string;storage_path:string;file_name:string;mime_type:string;file_size:number;category:string;status:string;admin_note:string;created_at:string};

export function InvestmentDocumentVault({draftId,userId,adminPreview=false,admin=false,locale='fr'}:{draftId:string;userId:string;adminPreview?:boolean;admin?:boolean;locale?:PortalLocale}){
 const cats=[['financial',pick(locale,"Comptes et bilans","Accounts and statements","Счета и отчётность","الحسابات والميزانيات")],['business_plan',pick(locale,"Business plan","Business plan","Бизнес-план","خطة العمل")],['registration',pick(locale,"Immatriculation","Registration","Регистрация","التسجيل")],['contract',pick(locale,"Contrats","Contracts","Договоры","العقود")],['permit',pick(locale,"Autorisations","Permits","Разрешения","التصاريح")],['presentation',pick(locale,"Présentation","Presentation","Презентация","العرض")],['other',pick(locale,"Autre document","Other document","Другой документ","مستند آخر")]];
 const [docs,setDocs]=useState<InvestmentDoc[]>([]),[category,setCategory]=useState('financial'),[busy,setBusy]=useState(false),[message,setMessage]=useState(''),[error,setError]=useState('');
 useEffect(()=>{let ok=true;if(adminPreview||!draftId||!userId)return;db.from('investment_documents').select('*').eq('project_draft_id',draftId).order('created_at',{ascending:false}).then(({data,error}:any)=>{if(!ok)return;if(error)setError(error.message);else setDocs(data||[]);});return()=>{ok=false;};},[draftId,userId,adminPreview]);
 async function upload(ev:ChangeEvent<HTMLInputElement>){
  const file=ev.target.files?.[0];ev.target.value='';if(!file)return;
  if(adminPreview){setMessage(pick(locale,"Aperçu administrateur : téléchargement désactivé.","Admin preview: uploads disabled.","Предпросмотр: загрузка отключена.","معاينة المسؤول: التحميل معطل."));return;}
  if(!types.has(file.type)||file.size>15728640||file.size===0){setError(pick(locale,"Format non pris en charge ou fichier de plus de 15 Mo.","Unsupported format or file larger than 15 MB.","Неподдерживаемый формат или файл более 15 МБ.","صيغة غير مدعومة أو ملف يتجاوز 15 ميغابايت."));return;}
  setBusy(true);setError('');setMessage('');
  const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,'-').slice(-150);
  const path=userId+'/'+draftId+'/'+crypto.randomUUID()+'-'+safe;
  try{
   const {error:storageError}=await db.storage.from('investment-dossiers').upload(path,file,{contentType:file.type,upsert:false,cacheControl:'0'});
   if(storageError)throw storageError;
   const {data,error:recordError}=await db.from('investment_documents').insert({
    project_draft_id:draftId,user_id:userId,storage_path:path,file_name:file.name.slice(0,250),
    file_size:file.size,mime_type:file.type,category
   }).select('*').single();
   if(recordError){await db.storage.from('investment-dossiers').remove([path]);throw recordError;}
   setDocs(cur=>[data,...cur]);setMessage(pick(locale,"Document enregistré dans le coffre privé.","Document saved to the private vault.","Документ сохранён в закрытом хранилище.","تم حفظ المستند في الخزنة الخاصة."));
  }catch(e){setError(e instanceof Error?e.message:pick(locale,"Échec du téléchargement.","Upload failed.","Не удалось загрузить файл.","فشل التحميل."));}
  finally{setBusy(false);}
 }
 async function download(d:InvestmentDoc){
  const {data,error}=await db.storage.from('investment-dossiers').createSignedUrl(d.storage_path,60);
  if(error){setError(error.message);return;}
  window.open(data.signedUrl,'_blank','noopener,noreferrer');
 }
 async function remove(d:InvestmentDoc){
  if(!window.confirm(pick(locale,"Supprimer ce document ?","Delete this document?","Удалить документ?","حذف المستند؟")))return;
  setBusy(true);setError('');
  const {error:storageErr}=await db.storage.from('investment-dossiers').remove([d.storage_path]);
  if(storageErr){setError(storageErr.message);setBusy(false);return;}
  const {error:metaErr}=await db.from('investment_documents').delete().eq('id',d.id);
  if(metaErr)setError(metaErr.message);else setDocs(cur=>cur.filter(x=>x.id!==d.id));
  setBusy(false);
 }
 async function updateStatus(d:InvestmentDoc,status:string){
  setBusy(true);setError('');
  const {error}=await db.from('investment_documents').update({status}).eq('id',d.id);
  if(error)setError(error.message);else setDocs(cur=>cur.map(x=>x.id===d.id?{...x,status}:x));setBusy(false);
 }
 return <section className="rounded-xl border border-[#dce4e7] bg-white p-6 md:p-8">
  <div className="flex items-center gap-3"><CloudUpload size={24} className="text-[#193344]"/><h2 className="text-xl font-medium text-[#193344]">{admin?pick(locale,"Documents du dossier","Dossier documents","Документы досье","مستندات الملف"):pick(locale,"Coffre documentaire du projet","Project document vault","Хранилище документов проекта","خزنة مستندات المشروع")}</h2></div>
  <p className="mt-3 text-sm leading-7 text-[#647681]">{pick(locale,"PDF, images, Word ou Excel, 15 Mo maximum par fichier. Accès privé au porteur et à l’équipe habilitée. Évitez les pièces d’identité et données médicales.","PDF, images, Word or Excel, maximum 15 MB per file. Private access for the project owner and authorised team. Avoid identity documents and medical data.","PDF, изображения, Word или Excel, до 15 МБ на файл. Доступ только у владельца проекта и уполномоченной команды. Не загружайте удостоверения личности и медицинские данные.","PDF أو صور أو Word أو Excel، بحد أقصى 15 ميغابايت للملف. وصول خاص لصاحب المشروع والفريق المخول. تجنب وثائق الهوية والبيانات الطبية.")}</p>
  {!admin&&<div className="mt-6 flex flex-wrap items-end gap-3"><label className="block text-xs text-[#51626b]">{pick(locale,"Catégorie","Category","Категория","الفئة")}<select className="mt-2 block min-w-44 rounded-lg border border-[#ced9de] bg-white p-3 text-sm" value={category} onChange={e=>setCategory(e.target.value)}>{cats.map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label>
  <label className={'inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white '+(busy?'opacity-50':'')}><CloudUpload size={17}/>{busy?pick(locale,"Téléchargement…","Uploading…","Загрузка…","جارٍ التحميل…"):pick(locale,"Ajouter un document","Add a document","Добавить документ","إضافة مستند")}<input type="file" className="sr-only" disabled={busy||adminPreview} accept=".pdf,.jpg,.jpeg,.png,.webp,.docx,.xlsx" onChange={upload}/></label></div>}
  {message&&<p role="status" className="mt-4 rounded-lg bg-[#e9f4ef] p-3 text-sm text-[#2d5b4b]">{message}</p>}
  {error&&<p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</p>}
  <div className="mt-7 space-y-3">{docs.length===0?<p className="rounded-lg border border-dashed border-[#d2dfe3] p-6 text-sm text-[#687780]">{pick(locale,"Aucun fichier dans ce dossier.","No files in this dossier.","В досье нет файлов.","لا توجد ملفات في هذا الملف.")}</p>:docs.map(d=><div key={d.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[#e4ebed] p-4"><div className="flex min-w-0 items-center gap-3"><FileText size={20} className="shrink-0 text-[#193344]"/><div><p className="max-w-[260px] break-all text-sm font-medium text-[#193344]">{d.file_name}</p><p className="mt-1 text-xs text-[#71808a]">{cats.find(c=>c[0]===d.category)?.[1]||d.category} · {(d.file_size/1024/1024).toFixed(1)} {pick(locale,'Mo','MB','МБ','ميغابايت')} · {portalStatus(locale,d.status)}</p></div></div><div className="flex items-center gap-3">{admin&&<select aria-label={pick(locale,"Statut du document","Document status","Статус документа","حالة المستند")} value={d.status} disabled={busy} onChange={e=>updateStatus(d,e.target.value)} className="rounded-lg border border-[#d6dfe3] p-2 text-xs"><option value="received">{pick(locale,"Reçu","Received","Получено","تم الاستلام")}</option><option value="reviewing">{pick(locale,"À vérifier","To review","На проверке","قيد المراجعة")}</option><option value="validated">{pick(locale,"Validé","Validated","Проверено","تم التحقق")}</option><option value="more_info">{pick(locale,"Complément demandé","More information requested","Запрошены сведения","مطلوب معلومات إضافية")}</option></select>}<button title={pick(locale,"Ouvrir document","Open document","Открыть документ","فتح المستند")} onClick={()=>download(d)} className="rounded-lg p-2 text-[#193344] hover:bg-[#f0f4f5]"><ArrowDownToLine size={18}/></button>{!admin&&<button disabled={busy} onClick={()=>remove(d)} className="rounded-lg p-2 text-[#a33c3c] hover:bg-red-50" title={pick(locale,"Supprimer document","Delete document","Удалить документ","حذف المستند")}><Trash2 size={17}/></button>}</div></div>)}</div>
  <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-[#71818a]"><ShieldCheck size={15} className="mt-1 shrink-0"/>{pick(locale,"Les liens de téléchargement expirent après une minute. L’accès aux documents est contrôlé par le compte connecté.","Download links expire after one minute. Document access is controlled by the signed-in account.","Ссылки действуют одну минуту. Доступ к документам определяется аккаунтом.","تنتهي روابط التنزيل بعد دقيقة واحدة. يتحكم الحساب المسجل في الوصول إلى المستندات.")}</p>
 </section>;
}
