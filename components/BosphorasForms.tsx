'use client';

import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type FormKind = 'private-assessment' | 'membership-application';

type FormCopy = {
  eyebrow: string;
  title: string;
  fullName: string;
  phone: string;
  email: string;
  residence: string;
  city: string;
  subject: string;
  timeline: string;
  budget: string;
  message: string;
  consent: string;
  submit: string;
  note: string;
  placeholders: {
    name: string;
    phone: string;
    email: string;
    residence: string;
    message: string;
  };
  cityOptions: string[];
  subjectOptions: string[];
  timelineOptions: string[];
  budgetOptions: string[];
};

const diagnostic: Record<Locale, FormCopy> = {
  fr: {
    eyebrow: 'Formulaire confidentiel',
    title: 'Votre demande',
    fullName: 'Nom complet *',
    phone: 'Téléphone *',
    email: 'Email *',
    residence: 'Pays de résidence',
    city: 'Ville ciblée',
    subject: 'Sujet principal *',
    timeline: 'Délai souhaité',
    budget: 'Budget / enveloppe',
    message: 'Message *',
    consent:
      'J’accepte que Bosphoras me contacte au sujet de cette demande. Je comprends que les informations transmises seront traitées avec confidentialité.',
    submit: 'Envoyer ma demande',
    note:
      'Le formulaire ouvre votre messagerie afin d’envoyer la demande à contact@bosphoras.com. Pour un formulaire connecté directement au CRM, il faudra ensuite brancher un service d’envoi ou une API.',
    placeholders: {
      name: 'Votre nom',
      phone: '+33...',
      email: 'votre@email.com',
      residence: 'France, UAE, Kazakhstan...',
      message: 'Expliquez votre situation, vos objectifs et ce que vous souhaitez organiser en Turquie.',
    },
    cityOptions: ['Istanbul', 'Bodrum', 'Antalya', 'Plusieurs villes', 'Je ne sais pas encore'],
    subjectOptions: [
      'Installation en Turquie',
      'Fiscalité / résidence fiscale',
      'Création d’entreprise',
      'Immobilier / relocation',
      'Santé / assurance',
      'Transport VIP / hospitality',
      'Accès privé / membership',
      'Autre demande',
    ],
    timelineOptions: ['Urgent', 'Sous 30 jours', '1 à 3 mois', '3 à 6 mois', 'Projet exploratoire'],
    budgetOptions: ['À définir', '50k - 150k', '150k - 500k', '500k - 1M', '1M+'],
  },
  en: {
    eyebrow: 'Confidential form',
    title: 'Your request',
    fullName: 'Full name *',
    phone: 'Phone *',
    email: 'Email *',
    residence: 'Country of residence',
    city: 'Target city',
    subject: 'Main subject *',
    timeline: 'Desired timeline',
    budget: 'Budget / envelope',
    message: 'Message *',
    consent:
      'I agree that Bosphoras may contact me regarding this request. I understand that the information submitted will be treated confidentially.',
    submit: 'Send my request',
    note:
      'The form opens your email application so the request can be sent to contact@bosphoras.com. For a form connected directly to the CRM, a sending service or API will need to be connected later.',
    placeholders: {
      name: 'Your name',
      phone: '+44...',
      email: 'your@email.com',
      residence: 'United Kingdom, UAE, Kazakhstan...',
      message: 'Explain your situation, your objectives and what you would like to organize in Turkey.',
    },
    cityOptions: ['Istanbul', 'Bodrum', 'Antalya', 'Several cities', 'I do not know yet'],
    subjectOptions: [
      'Relocation to Turkey',
      'Tax / tax residency',
      'Company formation',
      'Property / relocation',
      'Health / insurance',
      'VIP transport / hospitality',
      'Private access / membership',
      'Other request',
    ],
    timelineOptions: ['Urgent', 'Within 30 days', '1 to 3 months', '3 to 6 months', 'Exploratory project'],
    budgetOptions: ['To be defined', '50k - 150k', '150k - 500k', '500k - 1M', '1M+'],
  },
  ru: {
    eyebrow: 'Конфиденциальная форма',
    title: 'Ваш запрос',
    fullName: 'Полное имя *',
    phone: 'Телефон *',
    email: 'Email *',
    residence: 'Страна проживания',
    city: 'Целевой город',
    subject: 'Основная тема *',
    timeline: 'Желаемые сроки',
    budget: 'Бюджет / ориентировочная сумма',
    message: 'Сообщение *',
    consent:
      'Я согласен/согласна, чтобы Bosphoras связался со мной по этому запросу. Я понимаю, что переданная информация будет обработана конфиденциально.',
    submit: 'Отправить запрос',
    note:
      'Форма открывает вашу почтовую программу, чтобы отправить запрос на contact@bosphoras.com. Для формы, напрямую подключенной к CRM, позже потребуется подключить сервис отправки или API.',
    placeholders: {
      name: 'Ваше имя',
      phone: '+7...',
      email: 'your@email.com',
      residence: 'Казахстан, ОАЭ, Франция...',
      message: 'Опишите вашу ситуацию, цели и то, что вы хотите организовать в Турции.',
    },
    cityOptions: ['Стамбул', 'Бодрум', 'Анталья', 'Несколько городов', 'Я пока не знаю'],
    subjectOptions: [
      'Переезд в Турцию',
      'Налоги / налоговая резиденция',
      'Создание компании',
      'Недвижимость / relocation',
      'Здоровье / страхование',
      'VIP transport / hospitality',
      'Private access / membership',
      'Другой запрос',
    ],
    timelineOptions: ['Срочно', 'В течение 30 дней', '1–3 месяца', '3–6 месяцев', 'Ознакомительный проект'],
    budgetOptions: ['Определить позже', '50k - 150k', '150k - 500k', '500k - 1M', '1M+'],
  },
  ar: {
    eyebrow: 'نموذج سري',
    title: 'طلبكم',
    fullName: 'الاسم الكامل *',
    phone: 'الهاتف *',
    email: 'البريد الإلكتروني *',
    residence: 'بلد الإقامة',
    city: 'المدينة المستهدفة',
    subject: 'الموضوع الرئيسي *',
    timeline: 'المهلة المطلوبة',
    budget: 'الميزانية / الإطار المالي',
    message: 'الرسالة *',
    consent:
      'أوافق على أن يتواصل معي Bosphoras بخصوص هذا الطلب. أفهم أن المعلومات المرسلة ستتم معالجتها بسرية.',
    submit: 'إرسال الطلب',
    note:
      'يفتح النموذج تطبيق البريد الإلكتروني لإرسال الطلب إلى contact@bosphoras.com. ولربط النموذج مباشرةً مع CRM، يجب لاحقاً توصيل خدمة إرسال أو API.',
    placeholders: {
      name: 'اسمكم',
      phone: '+971...',
      email: 'your@email.com',
      residence: 'الإمارات، السعودية، كازاخستان...',
      message: 'اشرحوا وضعكم وأهدافكم وما ترغبون في تنظيمه في تركيا.',
    },
    cityOptions: ['إسطنبول', 'بودروم', 'أنطاليا', 'عدة مدن', 'لا أعرف بعد'],
    subjectOptions: [
      'الانتقال إلى تركيا',
      'الضرائب / الإقامة الضريبية',
      'تأسيس شركة',
      'العقار / relocation',
      'الصحة / التأمين',
      'النقل VIP / hospitality',
      'الوصول الخاص / العضوية',
      'طلب آخر',
    ],
    timelineOptions: ['عاجل', 'خلال 30 يوماً', '1 إلى 3 أشهر', '3 إلى 6 أشهر', 'مشروع استكشافي'],
    budgetOptions: ['يحدد لاحقاً', '50k - 150k', '150k - 500k', '500k - 1M', '1M+'],
  },
};

function inputClass() {
  return 'w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]';
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">{label}</span>
      {children}
    </label>
  );
}

function SelectField({ name, options }: { name: string; options: string[] }) {
  return (
    <select name={name} className={inputClass()} defaultValue="">
      <option value="">—</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export function BosphorasForm({ locale }: { locale: Locale; kind?: FormKind }) {
  const copy = diagnostic[locale];

  return (
    <section className="border-y border-[#d8c7a1] bg-[#f8f1e7] py-14 md:py-20">
      <div className="container-editorial">
        <form
          action="mailto:contact@bosphoras.com"
          method="post"
          encType="text/plain"
          className="relative mx-auto max-w-5xl border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_35px_100px_rgba(16,24,39,0.12)] md:p-8"
        >
          <div className="mb-8 border-b border-[#d8c7a1] pb-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#8a6728]">{copy.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">{copy.title}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label={copy.fullName}>
              <input required name={copy.fullName.replace(' *', '')} type="text" placeholder={copy.placeholders.name} className={inputClass()} />
            </Field>
            <Field label={copy.phone}>
              <input required name={copy.phone.replace(' *', '')} type="tel" placeholder={copy.placeholders.phone} className={inputClass()} />
            </Field>
            <Field label={copy.email}>
              <input required name={copy.email.replace(' *', '')} type="email" placeholder={copy.placeholders.email} className={inputClass()} />
            </Field>
            <Field label={copy.residence}>
              <input name={copy.residence} type="text" placeholder={copy.placeholders.residence} className={inputClass()} />
            </Field>
            <Field label={copy.city}>
              <SelectField name={copy.city} options={copy.cityOptions} />
            </Field>
            <Field label={copy.subject}>
              <SelectField name={copy.subject.replace(' *', '')} options={copy.subjectOptions} />
            </Field>
            <Field label={copy.timeline}>
              <SelectField name={copy.timeline} options={copy.timelineOptions} />
            </Field>
            <Field label={copy.budget}>
              <SelectField name={copy.budget} options={copy.budgetOptions} />
            </Field>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">{copy.message}</span>
            <textarea required name={copy.message.replace(' *', '')} rows={6} placeholder={copy.placeholders.message} className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#8a6728]" />
          </label>

          <label className="mt-5 flex gap-3 text-sm leading-6 text-[#5c6676]">
            <input required name="Confidentiality accepted" type="checkbox" value="Yes" className="mt-1 h-4 w-4 border-[#d8c7a1]" />
            <span>{copy.consent}</span>
          </label>

          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246] md:w-auto">
            {copy.submit}
            <ArrowRight size={15} />
          </button>

          <p className="mt-5 text-xs leading-6 text-[#7a8494]">{copy.note}</p>
        </form>
      </div>
    </section>
  );
}
