'use client';
import { FormEvent, useState } from 'react';
import type { Locale } from '@/lib/i18n';

const copy={
  fr:{title:'Recevoir les disponibilités et les plans',intro:'Dites-nous ce qui vous intéresse. Nous vérifions les conditions du programme et pouvons vous proposer des alternatives adaptées.',name:'Nom complet',email:'E-mail',phone:'Téléphone / WhatsApp',budget:'Budget indicatif',message:'Votre recherche (typologie, calendrier, besoins)',alternate:'Je souhaite recevoir des propositions de projets similaires si celui-ci ne correspond plus à ma recherche.',consent:'J’accepte que Bosphoras me contacte concernant cette demande.',submit:'Demander le dossier et les disponibilités',sending:'Enregistrement…',done:'Demande enregistrée. Notre équipe pourra vous recontacter au sujet de ce programme.',error:'Enregistrement impossible. Réessayez ou contactez Bosphoras.',hint:'Les prix, les lots et les échéanciers restent à confirmer auprès du promoteur.'},
  en:{title:'Request plans and availability',intro:'Tell us what you are looking for. We will confirm the project details and may suggest suitable alternatives.',name:'Full name',email:'Email',phone:'Phone / WhatsApp',budget:'Indicative budget',message:'Your requirements (unit type, timing, preferences)',alternate:'I would like to receive suitable alternatives if this project is unavailable.',consent:'I agree that Bosphoras may contact me about this enquiry.',submit:'Request plans and availability',sending:'Saving…',done:'Your enquiry has been registered. Our team can follow up with project details.',error:'Could not register your enquiry. Please try again.',hint:'Prices, individual availability and payment terms require confirmation.'},
  ru:{title:'Получить планы и информацию о наличии',intro:'Расскажите о ваших критериях. Мы уточним условия проекта и при необходимости предложим альтернативы.',name:'Имя и фамилия',email:'Электронная почта',phone:'Телефон / WhatsApp',budget:'Ориентировочный бюджет',message:'Ваш запрос (тип квартиры, сроки, пожелания)',alternate:'Я хочу получать подходящие альтернативы, если этот проект недоступен.',consent:'Я согласен(на), чтобы Bosphoras связался со мной по этому запросу.',submit:'Запросить планы и наличие',sending:'Сохранение…',done:'Запрос зарегистрирован. Наша команда сможет связаться с вами.',error:'Не удалось отправить запрос. Повторите попытку.',hint:'Цены, наличие квартир и условия оплаты требуют подтверждения.'},
  ar:{title:'طلب المخططات والتوافر',intro:'أخبرنا بما تبحث عنه. سنتحقق من تفاصيل المشروع ويمكننا اقتراح بدائل مناسبة.',name:'الاسم الكامل',email:'البريد الإلكتروني',phone:'الهاتف / واتساب',budget:'الميزانية التقريبية',message:'متطلباتك (نوع الوحدة، موعد الشراء، التفضيلات)',alternate:'أرغب في تلقي بدائل مناسبة إذا لم يعد هذا المشروع متاحًا.',consent:'أوافق على تواصل Bosphoras معي بشأن هذا الطلب.',submit:'طلب المخططات والتوافر',sending:'جارٍ الحفظ…',done:'تم تسجيل طلبك. يمكن لفريقنا التواصل معك بشأن المشروع.',error:'تعذر تسجيل الطلب. يرجى المحاولة مجددًا.',hint:'الأسعار وتوافر الوحدات وشروط السداد بحاجة إلى تأكيد.'},
};
export function ProjectInquiryForm({locale,listingId,projectId}:{locale:Locale;listingId:string;projectId:string}){
  const c=copy[locale]||copy.fr;
  const [state,setState]=useState<'idle'|'saving'|'success'|'error'>('idle');
  const input='min-h-[46px] w-full rounded-lg border border-[#d7d2c8] bg-white px-4 py-3 text-sm text-[#18211e] outline-none focus:border-[#406c5e]';
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(state==='saving')return;
    const form=event.currentTarget;
    const fd=new FormData(form);
    setState('saving');
    try{
      const response=await fetch('/api/project-inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        listing_id:listingId,project_id:projectId,locale,
        full_name:fd.get('full_name'),email:fd.get('email'),phone:fd.get('phone'),
        budget:fd.get('budget'),message:fd.get('message'),
        website:fd.get('website'),accepts_contact:fd.get('accepts_contact')==='yes',
        wants_similar_options:fd.get('wants_similar_options')==='yes'
      })});
      if(!response.ok)throw new Error('request failed');
      setState('success');form.reset();
    }catch{setState('error');}
  }
  return <section id="project-inquiry" className="scroll-mt-32 bg-[#f6f5f0] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
    <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#67816f]">BOSPHORAS PRIVATE PROPERTY DESK</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#15221c] sm:text-5xl">{c.title}</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-[#66716a]">{c.intro}</p>
        <p className="mt-5 max-w-md text-xs leading-6 text-[#8b7560]">{c.hint}</p>
      </div>
      <form onSubmit={submit} className="grid gap-4 rounded-[1.5rem] border border-[#ded8cc] bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
        <label className="grid gap-2 text-xs font-semibold text-[#53665c]">{c.name}<input required maxLength={160} name="full_name" className={input}/></label>
        <label className="grid gap-2 text-xs font-semibold text-[#53665c]">{c.email}<input required type="email" maxLength={254} name="email" className={input}/></label>
        <label className="grid gap-2 text-xs font-semibold text-[#53665c]">{c.phone}<input name="phone" type="tel" maxLength={60} className={input}/></label>
        <label className="grid gap-2 text-xs font-semibold text-[#53665c]">{c.budget}<input name="budget" maxLength={100} className={input}/></label>
        <label className="grid gap-2 text-xs font-semibold text-[#53665c] sm:col-span-2">{c.message}<textarea name="message" maxLength={2000} rows={3} className={input}/></label>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden"/>
        <label className="flex items-start gap-3 text-xs leading-6 text-[#56645d] sm:col-span-2"><input type="checkbox" name="wants_similar_options" value="yes" className="mt-1.5"/>{c.alternate}</label>
        <label className="flex items-start gap-3 text-xs leading-6 text-[#56645d] sm:col-span-2"><input type="checkbox" name="accepts_contact" value="yes" required className="mt-1.5"/>{c.consent}</label>
        <button type="submit" disabled={state==='saving'} className="min-h-[52px] rounded-lg bg-[#244b3f] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 sm:col-span-2">{state==='saving'?c.sending:c.submit}</button>
        {state==='success'?<p role="status" className="text-sm text-[#27694f] sm:col-span-2">{c.done}</p>:null}
        {state==='error'?<p role="alert" className="text-sm text-red-700 sm:col-span-2">{c.error}</p>:null}
      </form>
    </div>
  </section>;
}
