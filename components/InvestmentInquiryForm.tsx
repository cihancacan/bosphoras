'use client';

import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type FormKind = 'investment-project' | 'investment-investor';
type FormLocale = 'fr' | 'en' | 'ru' | 'ar';

const copy = {
  fr: {
    name: 'Nom et prénom', email: 'Adresse e-mail', phone: 'Téléphone', country: 'Pays de résidence',
    company: 'Entreprise ou nom du projet', website: 'Site web (facultatif)', amount: 'Montant recherché',
    sector: 'Secteur d’activité', stage: 'Stade du projet', turnover: 'Chiffre d’affaires annuel approximatif', financeType: 'Type de financement envisagé', summary: 'Présentez le projet et son besoin de financement',
    profile: 'Votre profil', capacity: 'Montant d’investissement envisagé',
    interests: 'Quels secteurs vous intéressent ?', message: 'Votre message',
    consent: 'J’accepte que Bosphoras utilise mes coordonnées pour traiter cette demande et me contacter. J’ai consulté la politique de confidentialité.',
    submitProject: 'Soumettre mon projet', submitInvestor: 'Envoyer ma demande',
    sending: 'Envoi en cours…', success: 'Votre demande a été transmise. Notre équipe pourra revenir vers vous après examen.',
    error: 'Impossible de transmettre la demande. Réessayez ou écrivez à contact@bosphoras.com.',
    placeholder: 'Décrivez l’activité, les revenus existants, l’utilisation envisagée des fonds et le calendrier souhaité.',
    optional: 'Facultatif', privacy: 'Politique de confidentialité'
  },
  en: {
    name: 'Full name', email: 'Email address', phone: 'Phone number', country: 'Country of residence',
    company: 'Company or project name', website: 'Website (optional)', amount: 'Funding target',
    sector: 'Industry', stage: 'Project stage', turnover: 'Approximate annual revenue', financeType: 'Preferred financing structure', summary: 'Tell us about your business and financing needs',
    profile: 'Investor profile', capacity: 'Indicative investment amount',
    interests: 'Which sectors interest you?', message: 'Your message',
    consent: 'I agree that Bosphoras may use my contact information to process this enquiry and contact me. I have read the privacy policy.',
    submitProject: 'Submit a project', submitInvestor: 'Send my enquiry',
    sending: 'Sending…', success: 'Your enquiry has been submitted. Our team may contact you following its review.',
    error: 'We could not send your enquiry. Please retry or email contact@bosphoras.com.',
    placeholder: 'Describe your business, existing revenue, intended use of funds and proposed timetable.',
    optional: 'Optional', privacy: 'Privacy policy'
  },
  ru:{"name":"Имя и фамилия","email":"Электронная почта","phone":"Телефон","country":"Страна проживания","company":"Компания или название проекта","website":"Веб-сайт (необязательно)","amount":"Требуемая сумма","sector":"Отрасль","stage":"Стадия проекта","turnover":"Примерная годовая выручка","financeType":"Предпочтительная форма финансирования","summary":"Опишите проект и потребность в финансировании","profile":"Профиль инвестора","capacity":"Предполагаемая сумма инвестиций","interests":"Интересующие отрасли","message":"Ваше сообщение","consent":"Я согласен на обработку контактных данных для рассмотрения заявки и получения ответа. Я ознакомился с политикой конфиденциальности.","submitProject":"Подать заявку","submitInvestor":"Отправить запрос","sending":"Отправка…","success":"Заявка отправлена. Наша команда сможет связаться с вами.","error":"Не удалось отправить заявку. Повторите попытку или напишите на contact@bosphoras.com.","placeholder":"Опишите деятельность, текущие доходы, использование средств и сроки.","optional":"Необязательно","privacy":"Политика конфиденциальности"},
  ar:{"name":"الاسم الكامل","email":"البريد الإلكتروني","phone":"الهاتف","country":"بلد الإقامة","company":"اسم الشركة أو المشروع","website":"الموقع الإلكتروني (اختياري)","amount":"التمويل المطلوب","sector":"قطاع النشاط","stage":"مرحلة المشروع","turnover":"الإيرادات السنوية التقريبية","financeType":"نوع التمويل المفضل","summary":"عرّف بالمشروع واحتياجات التمويل","profile":"ملف المستثمر","capacity":"مبلغ الاستثمار المتوقع","interests":"القطاعات التي تهمك","message":"رسالتك","consent":"أوافق على معالجة بيانات الاتصال لدراسة الطلب والتواصل معي، وقد اطلعت على سياسة الخصوصية.","submitProject":"تقديم المشروع","submitInvestor":"إرسال الطلب","sending":"جارٍ الإرسال…","success":"تم إرسال الطلب وقد يتواصل فريقنا معك.","error":"تعذر إرسال الطلب. حاول مجدداً أو راسل contact@bosphoras.com.","placeholder":"صف نشاطك وإيراداتك الحالية واستخدام الأموال والجدول الزمني المقترح.","optional":"اختياري","privacy":"سياسة الخصوصية"}
};

const fieldStyle = 'mt-2 block w-full rounded-none border border-[#d6dddf] bg-white px-4 py-3 text-[15px] text-[#202629] outline-none transition-colors focus:border-[#193344] focus:ring-1 focus:ring-[#193344]';
const labelStyle = 'block text-sm font-medium leading-6 text-[#26343c]';

export function InvestmentInquiryForm({ locale, kind }: { locale: FormLocale; kind: FormKind }) {
  const c = copy[locale];
  const project = kind === 'investment-project';
  const [status, setStatus] = useState<FormStatus>('idle');

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields: Record<string, string> = {};
    new FormData(form).forEach((value, key) => { fields[key] = String(value); });
    setStatus('sending');
    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale, formKind: kind, fields, sourcePath: window.location.pathname })
      });
      if (!response.ok) { setStatus('error'); return; }
      form.reset();
      setStatus('success');
    } catch { setStatus('error'); }
  }

  return (
    <form onSubmit={send} className="relative grid gap-5" aria-label={project ? c.submitProject : c.submitInvestor}>
      <div className="pointer-events-none absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this empty<input type="text" name="Bosphoras bot trap" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelStyle}>{c.name} *<input className={fieldStyle} type="text" name="Full name" required maxLength={130} autoComplete="name" /></label>
        <label className={labelStyle}>{c.email} *<input className={fieldStyle} type="email" name="Email" required maxLength={180} autoComplete="email" /></label>
        <label className={labelStyle}>{c.phone}<input className={fieldStyle} type="tel" name="Phone" maxLength={50} autoComplete="tel" /></label>
        <label className={labelStyle}>{c.country} *<input className={fieldStyle} type="text" name="Country of residence" required maxLength={90} autoComplete="country-name" /></label>
      </div>
      {project ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelStyle}>{c.company} *<input className={fieldStyle} name="Company" required maxLength={180} /></label>
            <label className={labelStyle}>{c.website}<input className={fieldStyle} type="url" name="Website" placeholder="https://" maxLength={250} /></label>
            <label className={labelStyle}>{c.amount} *<select className={fieldStyle} name="Funding target" required defaultValue=""><option value="" disabled>—</option><option value="Under €100,000">{locale==='ru'?"До €100 000":locale==='ar'?"أقل من 100,000 €":"Under €100,000"}</option><option>€100,000–€500,000</option><option>€500,000–€2,000,000</option><option>€2,000,000–€5,000,000</option><option value="Above €5,000,000">{locale==='ru'?"Свыше €5 000 000":locale==='ar'?"أكثر من 5,000,000 €":"Above €5,000,000"}</option><option value="To be determined">{locale==='ru'?"Будет определено":locale==='ar'?"يحدد لاحقاً":"To be determined"}</option></select></label>
            <label className={labelStyle}>{c.sector} *<select className={fieldStyle} name="Sector" required defaultValue=""><option value="" disabled>—</option><option value="Industry & manufacturing">{locale==='ru'?"Промышленность":locale==='ar'?"الصناعة والتصنيع":"Industry & manufacturing"}</option><option value="Energy & environment">{locale==='ru'?"Энергетика и экология":locale==='ar'?"الطاقة والبيئة":"Energy & environment"}</option><option value="Technology & AI">{locale==='ru'?"Технологии и ИИ":locale==='ar'?"التكنولوجيا والذكاء الاصطناعي":"Technology & AI"}</option><option value="Healthcare">{locale==='ru'?"Здравоохранение":locale==='ar'?"الصحة":"Healthcare"}</option><option value="Travel & hospitality">{locale==='ru'?"Туризм и гостиницы":locale==='ar'?"السفر والضيافة":"Travel & hospitality"}</option><option value="Construction">{locale==='ru'?"Строительство":locale==='ar'?"البناء":"Construction"}</option><option value="Other">{locale==='ru'?"Другое":locale==='ar'?"أخرى":"Other"}</option></select></label>
            <label className={labelStyle}>{c.stage}<select className={fieldStyle} name="Project stage" defaultValue=""><option value="">—</option><option value="Idea / feasibility">{locale==='ru'?"Идея / оценка":locale==='ar'?"الفكرة / الجدوى":"Idea / feasibility"}</option><option value="In development">{locale==='ru'?"В разработке":locale==='ar'?"قيد التطوير":"In development"}</option><option value="Operating company">{locale==='ru'?"Действующая компания":locale==='ar'?"شركة قائمة":"Operating company"}</option><option value="Expansion / acquisition">{locale==='ru'?"Расширение / приобретение":locale==='ar'?"التوسع / الاستحواذ":"Expansion / acquisition"}</option></select></label>
            <label className={labelStyle}>{c.turnover}<select className={fieldStyle} name="Annual revenue band" defaultValue=""><option value="">—</option><option value="Pre-revenue">{locale==='ru'?"Без выручки":locale==='ar'?"قبل تحقيق الإيرادات":"Pre-revenue"}</option><option value="Under €100k">{locale==='ru'?"До €100 тыс.":locale==='ar'?"أقل من 100 ألف €":"Under €100k"}</option><option>€100k–€500k</option><option>€500k–€2m</option><option value="Above €2m">{locale==='ru'?"Свыше €2 млн":locale==='ar'?"أكثر من 2 مليون €":"Above €2m"}</option><option value="Prefer to discuss">{locale==='ru'?"Предпочитаю обсудить":locale==='ar'?"أفضل المناقشة":"Prefer to discuss"}</option></select></label>
            <label className={labelStyle}>{c.financeType}<select className={fieldStyle} name="Financing preference" defaultValue=""><option value="">—</option><option value="Debt / loan">{locale==='ru'?"Долг / заём":locale==='ar'?"دين / قرض":"Debt / loan"}</option><option value="Equity / shares">{locale==='ru'?"Акции / доли":locale==='ar'?"أسهم / حصص":"Equity / shares"}</option><option value="Project finance">{locale==='ru'?"Проектное финансирование":locale==='ar'?"تمويل المشاريع":"Project finance"}</option><option value="Not sure">{locale==='ru'?"Пока не знаю":locale==='ar'?"غير محدد":"Not sure"}</option></select></label>
          </div>
          <label className={labelStyle}>{c.summary} *<textarea className={fieldStyle} name="Message" required minLength={30} maxLength={3000} rows={6} placeholder={c.placeholder} /></label>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelStyle}>{c.profile}<select className={fieldStyle} name="Investor profile" defaultValue=""><option value="">—</option><option value="Individual investor">{locale==='ru'?"Частный инвестор":locale==='ar'?"مستثمر فردي":"Individual investor"}</option><option value="Entrepreneur">{locale==='ru'?"Предприниматель":locale==='ar'?"رائد أعمال":"Entrepreneur"}</option><option value="Professional investor">{locale==='ru'?"Профессиональный инвестор":locale==='ar'?"مستثمر محترف":"Professional investor"}</option><option value="Family office">{locale==='ru'?"Семейный офис":locale==='ar'?"مكتب عائلي":"Family office"}</option><option value="Institution">{locale==='ru'?"Организация":locale==='ar'?"مؤسسة":"Institution"}</option></select></label>
            <label className={labelStyle}>{c.capacity}<select className={fieldStyle} name="Indicative budget" defaultValue=""><option value="">—</option><option>€1,000–€5,000</option><option>€5,000–€25,000</option><option>€25,000–€100,000</option><option value="Above €100,000">{locale==='ru'?"Свыше €100 000":locale==='ar'?"أكثر من 100,000 €":"Above €100,000"}</option><option value="Prefer to discuss">{locale==='ru'?"Предпочитаю обсудить":locale==='ar'?"أفضل المناقشة":"Prefer to discuss"}</option></select></label>
          </div>
          <label className={labelStyle}>{c.interests}<input className={fieldStyle} name="Sectors of interest" maxLength={250} /></label>
          <label className={labelStyle}>{c.message}<textarea className={fieldStyle} name="Message" maxLength={2000} rows={4}/></label>
        </>
      )}
      <label className="flex items-start gap-3 text-[13px] leading-6 text-[#4a5961]">
        <input type="checkbox" name="Consent" value="Yes" required className="mt-1.5 h-4 w-4 shrink-0 accent-[#193344]"/>
        <span>{c.consent} <a className="underline underline-offset-2" href={locale === 'fr' ? '/confidentialite' : '/'+locale+'/confidentialite'}>{c.privacy}</a>.</span>
      </label>
      <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-12 items-center justify-center bg-[#193344] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b4e63] disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? c.sending : project ? c.submitProject : c.submitInvestor} <span aria-hidden="true" className="ml-3">→</span></button>
      {status === 'success' && <p role="status" className="border-l-2 border-[#193344] bg-[#eef1f2] p-4 text-sm text-[#193344]">{c.success}</p>}
      {status === 'error' && <p role="alert" className="border-l-2 border-red-700 bg-red-50 p-4 text-sm text-red-800">{c.error}</p>}
    </form>
  );
}
