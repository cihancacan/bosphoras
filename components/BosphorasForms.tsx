'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';

type FormKind = 'private-assessment' | 'membership-application';

const labels = {
  fr: {
    submit: 'Envoyer ma demande',
    sent: 'Demande préparée. Le formulaire est en mode démonstration pour le moment.',
    required: 'Les informations marquées sont importantes pour qualifier la demande.',
    privacy: 'En envoyant ce formulaire, vous acceptez d’être recontacté par Bosphoras. Les informations sont traitées avec discrétion et ne sont partagées qu’en cas de nécessité pour la mission.',
    fields: {
      fullName: 'Nom complet', email: 'Email', whatsapp: 'WhatsApp', nationality: 'Nationalité', residence: 'Pays de résidence', language: 'Langue préférée', city: 'Ville d’intérêt', objective: 'Objectif principal', budget: 'Budget indicatif', timeline: 'Calendrier', message: 'Message confidentiel', company: 'Entreprise', role: 'Fonction / rôle', income: 'Revenus annuels ou patrimoine indicatif', referrer: 'Nom du parrain si vous en avez un', consent: 'J’accepte d’être recontacté par Bosphoras au sujet de ma demande.',
    },
    options: {
      city: ['Istanbul', 'Bodrum', 'Antalya', 'Pas encore décidé'],
      objective: ['Relocation', 'Fiscalité / résidence', 'Création de société', 'Immobilier', 'Santé / assurance', 'Bureaux', 'Lifestyle / concierge', 'Adhésion privée'],
      budget: ['À définir', '6 000 USD+', '10 000 USD+', '25 000 USD+', '50 000 USD+'],
      timeline: ['Urgent', '1 à 3 mois', '3 à 6 mois', '6 à 12 mois', 'Simple exploration'],
      language: ['Français', 'Anglais', 'Russe', 'Arabe', 'Turc'],
    },
  },
  en: {
    submit: 'Send my request',
    sent: 'Request prepared. The form is currently in demo mode.',
    required: 'Marked information is important to qualify the request.',
    privacy: 'By submitting this form, you agree to be contacted by Bosphoras. Information is handled discreetly and shared only when necessary for the mission.',
    fields: {
      fullName: 'Full name', email: 'Email', whatsapp: 'WhatsApp', nationality: 'Nationality', residence: 'Country of residence', language: 'Preferred language', city: 'City of interest', objective: 'Main objective', budget: 'Indicative budget', timeline: 'Timeline', message: 'Confidential message', company: 'Company', role: 'Position / role', income: 'Annual income or indicative wealth', referrer: 'Referrer name if you have one', consent: 'I agree to be contacted by Bosphoras regarding my request.',
    },
    options: {
      city: ['Istanbul', 'Bodrum', 'Antalya', 'Not decided yet'],
      objective: ['Relocation', 'Tax / residence', 'Company formation', 'Property', 'Healthcare / insurance', 'Offices', 'Lifestyle / concierge', 'Private membership'],
      budget: ['To be defined', '6,000 USD+', '10,000 USD+', '25,000 USD+', '50,000 USD+'],
      timeline: ['Urgent', '1 to 3 months', '3 to 6 months', '6 to 12 months', 'Exploration only'],
      language: ['French', 'English', 'Russian', 'Arabic', 'Turkish'],
    },
  },
  ru: {
    submit: 'Отправить запрос',
    sent: 'Запрос подготовлен. Форма пока работает в демонстрационном режиме.',
    required: 'Отмеченная информация важна для квалификации запроса.',
    privacy: 'Отправляя форму, вы соглашаетесь на контакт со стороны Bosphoras. Информация обрабатывается дискретно и передается только при необходимости для миссии.',
    fields: {
      fullName: 'Полное имя', email: 'Email', whatsapp: 'WhatsApp', nationality: 'Гражданство', residence: 'Страна проживания', language: 'Предпочтительный язык', city: 'Город интереса', objective: 'Главная цель', budget: 'Ориентировочный бюджет', timeline: 'Сроки', message: 'Конфиденциальное сообщение', company: 'Компания', role: 'Должность / роль', income: 'Годовой доход или ориентировочный капитал', referrer: 'Имя рекомендателя, если есть', consent: 'Я согласен/согласна, чтобы Bosphoras связался со мной по моему запросу.',
    },
    options: {
      city: ['Стамбул', 'Бодрум', 'Анталья', 'Еще не решено'],
      objective: ['Переезд', 'Налоги / резиденция', 'Создание компании', 'Недвижимость', 'Здоровье / страхование', 'Офисы', 'Lifestyle / concierge', 'Частное членство'],
      budget: ['Определить позже', '6 000 USD+', '10 000 USD+', '25 000 USD+', '50 000 USD+'],
      timeline: ['Срочно', '1–3 месяца', '3–6 месяцев', '6–12 месяцев', 'Только изучение'],
      language: ['Французский', 'Английский', 'Русский', 'Арабский', 'Турецкий'],
    },
  },
  ar: {
    submit: 'إرسال الطلب',
    sent: 'تم تجهيز الطلب. النموذج حالياً في وضع تجريبي.',
    required: 'المعلومات المحددة مهمة لتقييم الطلب.',
    privacy: 'بإرسال هذا النموذج، توافقون على أن يتواصل معكم Bosphoras بخصوص طلبكم. تتم معالجة المعلومات بسرية ولا تُشارك إلا عند الضرورة للمهمة.',
    fields: {
      fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', whatsapp: 'WhatsApp', nationality: 'الجنسية', residence: 'بلد الإقامة', language: 'اللغة المفضلة', city: 'المدينة محل الاهتمام', objective: 'الهدف الرئيسي', budget: 'الميزانية التقريبية', timeline: 'الجدول الزمني', message: 'رسالة سرية', company: 'الشركة', role: 'المنصب / الدور', income: 'الدخل السنوي أو الثروة التقريبية', referrer: 'اسم المُرشح إن وجد', consent: 'أوافق على أن يتواصل معي Bosphoras بخصوص طلبي.',
    },
    options: {
      city: ['إسطنبول', 'بودروم', 'أنطاليا', 'لم يتم القرار بعد'],
      objective: ['الانتقال', 'الضرائب / الإقامة', 'تأسيس شركة', 'العقار', 'الصحة / التأمين', 'المكاتب', 'Lifestyle / concierge', 'عضوية خاصة'],
      budget: ['يحدد لاحقاً', '6,000 USD+', '10,000 USD+', '25,000 USD+', '50,000 USD+'],
      timeline: ['عاجل', '1 إلى 3 أشهر', '3 إلى 6 أشهر', '6 إلى 12 شهراً', 'استكشاف فقط'],
      language: ['الفرنسية', 'الإنجليزية', 'الروسية', 'العربية', 'التركية'],
    },
  },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]">{label}</span>
      {children}
    </label>
  );
}

function inputClass() {
  return 'w-full border border-[#d8c7a1] bg-[#fffaf0] px-4 py-3 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]';
}

function Select({ options }: { options: string[] }) {
  return <select className={inputClass()} defaultValue=""><option value="" disabled>—</option>{options.map((option) => <option key={option}>{option}</option>)}</select>;
}

export function BosphorasForm({ locale, kind }: { locale: Locale; kind: FormKind }) {
  const [sent, setSent] = useState(false);
  const l = labels[locale];
  const isMembership = kind === 'membership-application';

  return (
    <section className="border-y border-[#d8c7a1] bg-[#fffaf0] py-14 md:py-20">
      <div className="container-editorial">
        <form
          onSubmit={(event) => { event.preventDefault(); setSent(true); }}
          className="mx-auto max-w-5xl border border-[#d8c7a1] bg-white p-6 shadow-[0_24px_80px_rgba(16,24,39,0.08)] md:p-10"
        >
          <p className="mb-8 text-sm leading-7 text-[#3e4857]">{l.required}</p>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label={l.fields.fullName}><input className={inputClass()} name="fullName" /></Field>
            <Field label={l.fields.email}><input className={inputClass()} name="email" type="email" /></Field>
            <Field label={l.fields.whatsapp}><input className={inputClass()} name="whatsapp" /></Field>
            <Field label={l.fields.nationality}><input className={inputClass()} name="nationality" /></Field>
            <Field label={l.fields.residence}><input className={inputClass()} name="residence" /></Field>
            <Field label={l.fields.language}><Select options={l.options.language} /></Field>
            <Field label={l.fields.city}><Select options={l.options.city} /></Field>
            <Field label={l.fields.objective}><Select options={l.options.objective} /></Field>
            <Field label={l.fields.budget}><Select options={l.options.budget} /></Field>
            <Field label={l.fields.timeline}><Select options={l.options.timeline} /></Field>
            {isMembership && <Field label={l.fields.company}><input className={inputClass()} name="company" /></Field>}
            {isMembership && <Field label={l.fields.role}><input className={inputClass()} name="role" /></Field>}
            {isMembership && <Field label={l.fields.income}><input className={inputClass()} name="income" /></Field>}
            {isMembership && <Field label={l.fields.referrer}><input className={inputClass()} name="referrer" /></Field>}
          </div>
          <div className="mt-5">
            <Field label={l.fields.message}><textarea className={`${inputClass()} min-h-[150px]`} name="message" /></Field>
          </div>
          <label className="mt-6 flex gap-3 text-sm leading-6 text-[#3e4857]">
            <input type="checkbox" className="mt-1 h-4 w-4 flex-none" />
            <span>{l.fields.consent}</span>
          </label>
          <p className="mt-5 text-xs leading-6 text-[#657083]">{l.privacy}</p>
          <button type="submit" className="mt-8 inline-flex bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">
            {l.submit}
          </button>
          {sent && <p className="mt-5 text-sm font-semibold text-[#8a6728]">{l.sent}</p>}
        </form>
      </div>
    </section>
  );
}
