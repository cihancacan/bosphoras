'use client';

import Link from 'next/link';
import {FormEvent,useEffect,useState} from 'react';
import {GitCompareArrows,Heart,ArrowRight,X,Trash2} from 'lucide-react';
import type {Locale} from '@/lib/i18n';
import type {PropertyListing} from '@/data/propertyDesk';
import {formatPropertyPrice} from '@/data/propertyDesk';

type WishProject={
 listingId:string; projectId:string; title:string; country:string; city:string; district:string;
 currency:string; priceMin:number|null; priceMax:number|null; delivery:string;
 developer:string; bedrooms:string; payment:string; image:string; href:string;
};
const KEY='bosphoras_project_wishlist_v1';
const EVENT='bosphoras-project-wishlist-changed';
const max=6;
const labels={
 fr:{add:'Ajouter à ma sélection',added:'Dans ma sélection',select:'Ma sélection',compare:'Comparer les projets',remove:'Retirer',empty:'Sélectionnez 2 à 6 programmes pour comparer et nous envoyer votre sélection.',project:'Programme',location:'Localisation',price:'Prix indicatif',delivery:'Livraison',units:'Typologies',payment:'Paiement',developer:'Promoteur',unknown:'Sur demande',inquiry:'Demander une proposition pour ces projets',name:'Nom complet',email:'Email',phone:'Téléphone / WhatsApp',budget:'Budget approximatif',goal:'Objectif',timeline:'Quand souhaitez-vous acheter ?',message:'Votre recherche et critères importants',alternatives:"Je souhaite aussi recevoir des alternatives correspondant à mes critères.",consent:"J’accepte que Bosphoras me contacte concernant les projets sélectionnés.",submit:'Envoyer ma sélection',saving:'Envoi…',done:'Votre sélection est enregistrée dans notre CRM. Nous vous recontacterons sur ces programmes.',error:'Impossible d’enregistrer la demande. Réessayez.',limit:'Maximum 6 projets par comparaison',view:'Voir la fiche',count:'programmes'},
 en:{add:'Add to shortlist',added:'Shortlisted',select:'My shortlist',compare:'Compare projects',remove:'Remove',empty:'Select 2 to 6 developments to compare and request a proposal.',project:'Development',location:'Location',price:'Indicative price',delivery:'Handover',units:'Unit types',payment:'Payment',developer:'Developer',unknown:'On request',inquiry:'Enquire about these projects',name:'Full name',email:'Email',phone:'Phone / WhatsApp',budget:'Approximate budget',goal:'Investment goal',timeline:'Desired purchase timeframe',message:'Requirements and priorities',alternatives:'I would also like to receive suitable alternatives.',consent:'I agree to be contacted about my shortlisted projects.',submit:'Send shortlist',saving:'Sending…',done:'Your shortlist was saved in our CRM. Our team will be in touch.',error:'Could not submit this selection. Please try again.',limit:'Up to 6 projects',view:'View project',count:'projects'},
 ru:{add:'В подборку',added:'В подборке',select:'Мои проекты',compare:'Сравнить проекты',remove:'Убрать',empty:'Выберите от 2 до 6 проектов для сравнения и отправки заявки.',project:'Проект',location:'Район',price:'Ориентир цены',delivery:'Сдача',units:'Типы квартир',payment:'Оплата',developer:'Застройщик',unknown:'По запросу',inquiry:'Запросить предложения по проектам',name:'Имя и фамилия',email:'Email',phone:'Телефон / WhatsApp',budget:'Бюджет',goal:'Цель покупки',timeline:'Срок покупки',message:'Ваши пожелания',alternatives:'Хочу получить другие подходящие предложения.',consent:'Я согласен(на) на связь по выбранным проектам.',submit:'Отправить подборку',saving:'Отправка…',done:'Ваша подборка сохранена в CRM. Мы свяжемся с вами.',error:'Не удалось отправить заявку.',limit:'До 6 проектов',view:'Открыть',count:'проекта'},
 ar:{add:'أضف إلى القائمة',added:'في القائمة',select:'قائمتي',compare:'قارن المشاريع',remove:'إزالة',empty:'اختر من مشروعين إلى ستة مشاريع للمقارنة وإرسال طلب.',project:'المشروع',location:'الموقع',price:'سعر إرشادي',delivery:'التسليم',units:'الوحدات',payment:'الدفع',developer:'المطور',unknown:'عند الطلب',inquiry:'طلب معلومات عن المشاريع',name:'الاسم الكامل',email:'البريد الإلكتروني',phone:'الهاتف / واتساب',budget:'الميزانية التقريبية',goal:'هدف الشراء',timeline:'موعد الشراء',message:'المتطلبات',alternatives:'أود تلقي مشاريع بديلة مناسبة.',consent:'أوافق على تواصل Bosphoras معي بشأن المشاريع المختارة.',submit:'إرسال القائمة',saving:'إرسال…',done:'تم حفظ قائمتك في نظام العملاء. سنتواصل معك.',error:'تعذر إرسال الطلب.',limit:'ستة مشاريع كحد أقصى',view:'عرض',count:'مشاريع'}
};
const money=(v:number|undefined|null,currency:string,locale:Locale)=>{
 if(!v||!Number.isFinite(v))return '';
 try{return new Intl.NumberFormat(locale==='fr'?'fr-FR':locale==='ru'?'ru-RU':locale==='ar'?'ar':'en-GB',{style:'currency',currency,maximumFractionDigits:0}).format(v);}
 catch{return String(v)+' '+currency;}
};
function fromProperty(p:PropertyListing,href:string):WishProject|null {
 if(!p.projectId||!p.publicListingId)return null;
 const get=(v:any):string=>typeof v==='string'?v:String(v?.fr||v?.en||v?.ru||'');
 const kinds=(p.projectUnitOptions||[]).map(x=>x.label).filter(Boolean);
 const payment=(p.paymentPlan||[]).map(step=>get(step.label)+' '+(step.percentage??'?')+' %').join(' · ');
 return {listingId:p.publicListingId,projectId:p.projectId,title:get(p.title),country:p.countryName,city:p.cityName,district:p.district,
   currency:p.currency,priceMin:p.totalPrice||null,priceMax:p.projectPriceMax||null,
   delivery:get(p.delivery),developer:p.developer||'',bedrooms:[...new Set(kinds)].slice(0,6).join(' · '),
   payment,image:p.heroImage||p.images?.[0]||'',href};
}
function read():WishProject[]{
 try{const items=JSON.parse(localStorage.getItem(KEY)||'[]');
   return Array.isArray(items)?items.filter(x=>x&&typeof x==='object'&&typeof x.listingId==='string'&&typeof x.projectId==='string'&&typeof x.title==='string').slice(0,max):[];
 }catch{return [];}
}
function update(items:WishProject[]){
 localStorage.setItem(KEY,JSON.stringify(items));window.dispatchEvent(new Event(EVENT));
}
function useWishlist(){
 const [items,setItems]=useState<WishProject[]>([]);
 useEffect(()=>{
   const listener=()=>setItems(read());
   listener();window.addEventListener('storage',listener);window.addEventListener(EVENT,listener);
   return()=>{window.removeEventListener('storage',listener);window.removeEventListener(EVENT,listener);};
 },[]);
 return items;
}
export function ProjectSelectButton({property,href,locale}:{property:PropertyListing;href:string;locale:Locale}){
 const items=useWishlist(),c=labels[locale]||labels.fr;
 const project=fromProperty(property,href);
 if(!project)return null;
 const selected=items.some(x=>x.listingId===project.listingId);
 return <button type="button" aria-pressed={selected} onClick={()=>{
   const next=read();
   if(selected){update(next.filter(x=>x.listingId!==project.listingId));return;}
   if(next.length>=max){alert(c.limit);return;}
   update([...next,project]);
 }} className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition ${selected?'border-[#315b47] bg-[#e5eee7] text-[#204b34]':'border-[#c8c2b8] bg-white text-[#315b47] hover:bg-[#eef3ef]'}`}>
  <Heart size={15} fill={selected?'currentColor':'none'}/>{selected?c.added:c.add}
 </button>;
}
export function ProjectWishlistTray({locale}:{locale:Locale}){
 const c=labels[locale]||labels.fr,items=useWishlist();
 const [open,setOpen]=useState(false),[sending,setSending]=useState(false),[result,setResult]=useState<'success'|'error'|null>(null);
 if(!items.length)return null;
 async function submit(e:FormEvent<HTMLFormElement>){
   e.preventDefault();if(sending||items.length<2)return;
   setSending(true);setResult(null);
   const form=e.currentTarget;
   const fd=new FormData(form);
   try{
     const response=await fetch('/api/project-shortlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
       listing_ids:items.map(x=>x.listingId),locale,full_name:fd.get('full_name'),email:fd.get('email'),
       phone:fd.get('phone'),budget:fd.get('budget'),investment_goal:fd.get('investment_goal'),
       desired_timeline:fd.get('desired_timeline'),message:fd.get('message'),website:fd.get('website'),
       accepts_contact:fd.get('accepts_contact')==='yes',wants_alternatives:fd.get('wants_alternatives')==='yes'
     })});
     if(!response.ok)throw new Error('send failed');
     setResult('success');form.reset();update([]);
   }catch{setResult('error');}
   finally{setSending(false);}
 }
 const rows=[['location',(p:WishProject)=>[p.district,p.city,p.country].filter(Boolean).join(' · ')],
  ['price',(p:WishProject)=>p.priceMin?(money(p.priceMin,p.currency,locale)+(p.priceMax&&p.priceMax>p.priceMin?' – '+money(p.priceMax,p.currency,locale):'')):c.unknown],
  ['units',(p:WishProject)=>p.bedrooms||c.unknown],['delivery',(p:WishProject)=>p.delivery||c.unknown],
  ['payment',(p:WishProject)=>p.payment||c.unknown],['developer',(p:WishProject)=>p.developer||c.unknown]] as const;
 return <>
  <button type="button" onClick={()=>{setOpen(true);setResult(null);}} className="fixed bottom-5 right-5 z-[85] inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[#bea87f] bg-[#173a30] px-6 text-sm font-semibold text-white shadow-xl">
   <GitCompareArrows size={18}/>{c.select} ({items.length}) <ArrowRight size={16}/>
  </button>
  {open?<div className="fixed inset-0 z-[110] overflow-y-auto bg-[#071913]/80 p-3 backdrop-blur-sm md:p-8" role="dialog" aria-modal="true" aria-label={c.compare}>
   <div className="mx-auto max-w-[1160px] rounded-2xl bg-[#faf9f6] p-4 text-[#12231c] shadow-2xl sm:p-8" dir={locale==='ar'?'rtl':'ltr'}>
     <div className="flex items-center justify-between gap-3"><div><p className="text-xs uppercase tracking-widest text-[#6d836f]">BOSPHORAS PROPERTY DESK</p><h2 className="mt-2 font-serif text-3xl sm:text-4xl">{c.compare} ({items.length}/{max})</h2></div><button onClick={()=>setOpen(false)} className="rounded-full border border-[#d8d1c5] p-3" aria-label="Close"><X size={20}/></button></div>
     <p className="mt-4 text-sm text-[#69746d]">{c.empty}</p>
     <div className="mt-6 overflow-x-auto rounded-xl border border-[#d8d3c9]">
       <table className="min-w-full table-fixed text-left text-xs sm:text-sm">
         <thead><tr className="bg-[#e9eee9]"><th className="w-32 p-3">{c.project}</th>{items.map(p=><th key={p.listingId} className="min-w-[185px] p-3 align-top">
           {p.image?<img src={p.image} alt="" className="mb-2 h-24 w-full rounded object-cover"/>:null}
           <strong>{p.title}</strong><div className="mt-3 flex flex-wrap gap-2">
           <Link href={p.href} onClick={()=>setOpen(false)} className="underline">{c.view}</Link>
           <button onClick={()=>update(read().filter(x=>x.listingId!==p.listingId))} className="inline-flex gap-1 text-red-700"><Trash2 size={13}/>{c.remove}</button></div>
         </th>)}</tr></thead>
         <tbody>{rows.map(([key,get])=><tr key={key} className="border-t border-[#dedbd2]"><th className="bg-[#f0f1ed] p-3 font-semibold">{c[key]}</th>{items.map(p=><td className="p-3 align-top" key={p.listingId}>{get(p)}</td>)}</tr>)}</tbody>
       </table>
     </div>
     <h3 className="mt-9 font-serif text-2xl">{c.inquiry}</h3>
     {result==='success'?<p role="status" className="my-4 rounded bg-[#e6f2e6] p-4 text-sm">{c.done}</p>:null}
     {items.length>=2?<form onSubmit={submit} className="mt-5 grid gap-4 sm:grid-cols-2">
       <label className="text-xs font-semibold">{c.name}<input required maxLength={160} name="full_name" className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold">{c.email}<input required type="email" maxLength={254} name="email" className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold">{c.phone}<input name="phone" maxLength={60} className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold">{c.budget}<input name="budget" maxLength={100} className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold">{c.goal}<input name="investment_goal" maxLength={150} className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold">{c.timeline}<input name="desired_timeline" maxLength={100} className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <label className="text-xs font-semibold sm:col-span-2">{c.message}<textarea name="message" rows={3} maxLength={2000} className="mt-1 w-full rounded border border-[#cdd4cd] bg-white px-4 py-3"/></label>
       <input name="website" type="text" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden"/>
       <label className="flex gap-2 text-xs sm:col-span-2"><input type="checkbox" value="yes" name="wants_alternatives"/>{c.alternatives}</label>
       <label className="flex gap-2 text-xs sm:col-span-2"><input required type="checkbox" value="yes" name="accepts_contact"/>{c.consent}</label>
       <button disabled={sending} className="min-h-[52px] rounded bg-[#214c3a] px-6 text-sm font-semibold text-white disabled:opacity-60 sm:col-span-2">{sending?c.saving:c.submit}</button>
       {result==='error'?<p role="alert" className="text-sm text-red-700 sm:col-span-2">{c.error}</p>:null}
     </form>:null}
   </div>
  </div>:null}
 </>;
}
