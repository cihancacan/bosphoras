'use client';

import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type FormKind = 'private-assessment' | 'membership-application';

type DiagnosticCopy = {
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
  placeholders: { name: string; phone: string; email: string; residence: string; message: string };
  cityOptions: string[];
  subjectOptions: string[];
  timelineOptions: string[];
  budgetOptions: string[];
};

type MembershipCopy = {
  eyebrow: string;
  title: string;
  fullName: string;
  whatsapp: string;
  email: string;
  residence: string;
  referrer: string;
  profile: string;
  company: string;
  website: string;
  annualBudget: string;
  mainNeed: string;
  motivation: string;
  accessTitle: string;
  accessText: string;
  annualAdmission: string;
  monthlyRetainer: string;
  consentInfo: string;
  consentValidation: string;
  submit: string;
  note: string;
  placeholders: { name: string; phone: string; email: string; residence: string; referrer: string; company: string; website: string; motivation: string };
  profileOptions: string[];
  budgetOptions: string[];
  serviceOptions: string[];
};

const diagnostic: Record<Locale, DiagnosticCopy> = {
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
    consent: 'J’accepte que Bosphoras me contacte au sujet de cette demande. Je comprends que les informations transmises seront traitées avec confidentialité.',
    submit: 'Envoyer ma demande',
    note: 'Le formulaire ouvre votre messagerie afin d’envoyer la demande à contact@bosphoras.com. Pour un formulaire connecté directement au CRM, il faudra ensuite brancher un service d’envoi ou une API.',
    placeholders: { name: 'Votre nom', phone: '+33...', email: 'votre@email.com', residence: 'France, UAE, Kazakhstan...', message: 'Expliquez votre situation, vos objectifs et ce que vous souhaitez organiser en Turquie.' },
    cityOptions: ['Istanbul', 'Bodrum', 'Antalya', 'Plusieurs villes', 'Je ne sais pas encore'],
    subjectOptions: ['Installation en Turquie', 'Fiscalité / résidence fiscale', 'Création d’entreprise', 'Immobilier / relocation', 'Santé / assurance', 'Transport VIP / hospitality', 'Accès privé / membership', 'Autre demande'],
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
    consent: 'I agree that Bosphoras may contact me regarding this request. I understand that the information submitted will be treated confidentially.',
    submit: 'Send my request',
    note: 'The form opens your email application so the request can be sent to contact@bosphoras.com. For a form connected directly to the CRM, a sending service or API will need to be connected later.',
    placeholders: { name: 'Your name', phone: '+44...', email: 'your@email.com', residence: 'United Kingdom, UAE, Kazakhstan...', message: 'Explain your situation, your objectives and what you would like to organize in Turkey.' },
    cityOptions: ['Istanbul', 'Bodrum', 'Antalya', 'Several cities', 'I do not know yet'],
    subjectOptions: ['Relocation to Turkey', 'Tax / tax residency', 'Company formation', 'Property / relocation', 'Health / insurance', 'VIP transport / hospitality', 'Private access / membership', 'Other request'],
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
    consent: 'Я согласен/согласна, чтобы Bosphoras связался со мной по этому запросу. Я понимаю, что переданная информация будет обработана конфиденциально.',
    submit: 'Отправить запрос',
    note: 'Форма открывает вашу почтовую программу, чтобы отправить запрос на contact@bosphoras.com. Для формы, напрямую подключенной к CRM, позже потребуется подключить сервис отправки или API.',
    placeholders: { name: 'Ваше имя', phone: '+7...', email: 'your@email.com', residence: 'Казахстан, ОАЭ, Франция...', message: 'Опишите вашу ситуацию, цели и то, что вы хотите организовать в Турции.' },
    cityOptions: ['Стамбул', 'Бодрум', 'Анталья', 'Несколько городов', 'Я пока не знаю'],
    subjectOptions: ['Переезд в Турцию', 'Налоги / налоговая резиденция', 'Создание компании', 'Недвижимость / relocation', 'Здоровье / страхование', 'VIP transport / hospitality', 'Private access / membership', 'Другой запрос'],
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
    consent: 'أوافق على أن يتواصل معي Bosphoras بخصوص هذا الطلب. أفهم أن المعلومات المرسلة ستتم معالجتها بسرية.',
    submit: 'إرسال الطلب',
    note: 'يفتح النموذج تطبيق البريد الإلكتروني لإرسال الطلب إلى contact@bosphoras.com. ولربط النموذج مباشرةً مع CRM، يجب لاحقاً توصيل خدمة إرسال أو API.',
    placeholders: { name: 'اسمكم', phone: '+971...', email: 'your@email.com', residence: 'الإمارات، السعودية، كازاخستان...', message: 'اشرحوا وضعكم وأهدافكم وما ترغبون في تنظيمه في تركيا.' },
    cityOptions: ['إسطنبول', 'بودروم', 'أنطاليا', 'عدة مدن', 'لا أعرف بعد'],
    subjectOptions: ['الانتقال إلى تركيا', 'الضرائب / الإقامة الضريبية', 'تأسيس شركة', 'العقار / relocation', 'الصحة / التأمين', 'النقل VIP / hospitality', 'الوصول الخاص / العضوية', 'طلب آخر'],
    timelineOptions: ['عاجل', 'خلال 30 يوماً', '1 إلى 3 أشهر', '3 إلى 6 أشهر', 'مشروع استكشافي'],
    budgetOptions: ['يحدد لاحقاً', '50k - 150k', '150k - 500k', '500k - 1M', '1M+'],
  },
};

const membership: Record<Locale, MembershipCopy> = {
  fr: {
    eyebrow: 'Candidature membre', title: 'Votre profil', fullName: 'Nom complet *', whatsapp: 'Téléphone WhatsApp *', email: 'Email *', residence: 'Pays de résidence *', referrer: 'Parrain / recommandation', profile: 'Profil principal *', company: 'Société / activité', website: 'LinkedIn / site internet', annualBudget: 'Budget annuel estimé', mainNeed: 'Besoin principal *', motivation: 'Pourquoi souhaitez-vous rejoindre Bosphoras Private Access ? *', accessTitle: 'Conditions d’accès', accessText: 'Private Access fonctionne sur un cycle de 12 mois à compter de la validation du profil. Les conditions sont révisables chaque année.', annualAdmission: 'Admission annuelle : 10 000 USD', monthlyRetainer: 'Retainer mensuel : 1 000 USD / mois', consentInfo: 'Je confirme que les informations transmises sont exactes et j’accepte que Bosphoras me contacte concernant ma demande d’adhésion.', consentValidation: 'Je comprends que l’adhésion est soumise à validation et peut être refusée sans obligation de justification.', submit: 'Envoyer ma candidature', note: 'Le formulaire ouvre votre messagerie afin d’envoyer la demande à contact@bosphoras.com. Pour un envoi direct vers CRM, une connexion technique pourra être ajoutée ensuite.', placeholders: { name: 'Votre nom', phone: '+33...', email: 'votre@email.com', residence: 'France, UAE, Kazakhstan...', referrer: 'Nom du parrain, si applicable', company: 'Nom de société, secteur, activité', website: 'Lien LinkedIn ou site', motivation: 'Expliquez brièvement votre situation, votre projet en Turquie et ce que vous attendez du bureau privé Bosphoras.' }, profileOptions: ['Entrepreneur', 'Investisseur', 'Dirigeant', 'Profession libérale', 'Family office', 'Autre'], budgetOptions: ['Moins de 25 000 USD', '25 000 - 50 000 USD', '50 000 - 100 000 USD', '100 000 USD+', 'Préfère en discuter en privé'], serviceOptions: ['Installation en Turquie', 'Business / société / fiscalité', 'Santé / assurance', 'Immobilier / relocation', 'Transport VIP / hospitality', 'Accès privé / lifestyle', 'Plusieurs besoins'],
  },
  en: {
    eyebrow: 'Member application', title: 'Your profile', fullName: 'Full name *', whatsapp: 'WhatsApp phone *', email: 'Email *', residence: 'Country of residence *', referrer: 'Referrer / recommendation', profile: 'Main profile *', company: 'Company / activity', website: 'LinkedIn / website', annualBudget: 'Estimated annual budget', mainNeed: 'Main need *', motivation: 'Why do you want to join Bosphoras Private Access? *', accessTitle: 'Access conditions', accessText: 'Private Access operates on a 12-month cycle from profile validation. Conditions may be reviewed each year.', annualAdmission: 'Annual admission: 10,000 USD', monthlyRetainer: 'Monthly retainer: 1,000 USD / month', consentInfo: 'I confirm that the information submitted is accurate and I agree that Bosphoras may contact me regarding my membership application.', consentValidation: 'I understand that membership is subject to validation and may be refused without any obligation to provide justification.', submit: 'Send my application', note: 'The form opens your email application so the request can be sent to contact@bosphoras.com. For direct CRM submission, a technical connection can be added later.', placeholders: { name: 'Your name', phone: '+44...', email: 'your@email.com', residence: 'United Kingdom, UAE, Kazakhstan...', referrer: 'Referrer name, if applicable', company: 'Company name, sector, activity', website: 'LinkedIn or website link', motivation: 'Briefly explain your situation, your project in Turkey and what you expect from the Bosphoras private office.' }, profileOptions: ['Entrepreneur', 'Investor', 'Executive', 'Liberal profession', 'Family office', 'Other'], budgetOptions: ['Less than 25,000 USD', '25,000 - 50,000 USD', '50,000 - 100,000 USD', '100,000 USD+', 'Prefer to discuss privately'], serviceOptions: ['Relocation to Turkey', 'Business / company / tax', 'Health / insurance', 'Property / relocation', 'VIP transport / hospitality', 'Private access / lifestyle', 'Several needs'],
  },
  ru: {
    eyebrow: 'Заявка участника', title: 'Ваш профиль', fullName: 'Полное имя *', whatsapp: 'Телефон WhatsApp *', email: 'Email *', residence: 'Страна проживания *', referrer: 'Рекомендатель / рекомендация', profile: 'Основной профиль *', company: 'Компания / деятельность', website: 'LinkedIn / сайт', annualBudget: 'Ориентировочный годовой бюджет', mainNeed: 'Главная потребность *', motivation: 'Почему вы хотите присоединиться к Bosphoras Private Access? *', accessTitle: 'Условия доступа', accessText: 'Private Access работает по циклу 12 месяцев с момента утверждения профиля. Условия могут пересматриваться ежегодно.', annualAdmission: 'Ежегодный вступительный взнос: 10 000 USD', monthlyRetainer: 'Ежемесячный retainer: 1 000 USD / месяц', consentInfo: 'Я подтверждаю, что переданная информация точна, и соглашаюсь, чтобы Bosphoras связался со мной по моей заявке на членство.', consentValidation: 'Я понимаю, что членство подлежит утверждению и может быть отказано без обязанности объяснять причины.', submit: 'Отправить заявку', note: 'Форма открывает вашу почтовую программу, чтобы отправить запрос на contact@bosphoras.com. Для прямой отправки в CRM позже можно добавить техническое подключение.', placeholders: { name: 'Ваше имя', phone: '+7...', email: 'your@email.com', residence: 'Казахстан, ОАЭ, Франция...', referrer: 'Имя рекомендателя, если применимо', company: 'Название компании, сектор, деятельность', website: 'Ссылка LinkedIn или сайт', motivation: 'Кратко опишите вашу ситуацию, проект в Турции и ожидания от частного офиса Bosphoras.' }, profileOptions: ['Предприниматель', 'Инвестор', 'Руководитель', 'Свободная профессия', 'Family office', 'Другое'], budgetOptions: ['Менее 25 000 USD', '25 000 - 50 000 USD', '50 000 - 100 000 USD', '100 000 USD+', 'Предпочитаю обсудить лично'], serviceOptions: ['Переезд в Турцию', 'Бизнес / компания / налоги', 'Здоровье / страхование', 'Недвижимость / relocation', 'VIP transport / hospitality', 'Private access / lifestyle', 'Несколько потребностей'],
  },
  ar: {
    eyebrow: 'طلب عضوية', title: 'ملفكم', fullName: 'الاسم الكامل *', whatsapp: 'هاتف WhatsApp *', email: 'البريد الإلكتروني *', residence: 'بلد الإقامة *', referrer: 'المُرشح / التوصية', profile: 'الملف الرئيسي *', company: 'الشركة / النشاط', website: 'LinkedIn / الموقع الإلكتروني', annualBudget: 'الميزانية السنوية التقديرية', mainNeed: 'الحاجة الرئيسية *', motivation: 'لماذا ترغبون في الانضمام إلى Bosphoras Private Access؟ *', accessTitle: 'شروط الوصول', accessText: 'يعمل Private Access على دورة مدتها 12 شهراً من تاريخ اعتماد الملف. يمكن مراجعة الشروط كل سنة.', annualAdmission: 'رسوم القبول السنوية: 10,000 USD', monthlyRetainer: 'Retainer شهري: 1,000 USD / شهر', consentInfo: 'أؤكد أن المعلومات المرسلة صحيحة وأوافق على أن يتواصل معي Bosphoras بخصوص طلب العضوية.', consentValidation: 'أفهم أن العضوية خاضعة للموافقة ويمكن رفضها دون التزام بتقديم مبرر.', submit: 'إرسال الطلب', note: 'يفتح النموذج تطبيق البريد الإلكتروني لإرسال الطلب إلى contact@bosphoras.com. وللإرسال المباشر إلى CRM، يمكن إضافة اتصال تقني لاحقاً.', placeholders: { name: 'اسمكم', phone: '+971...', email: 'your@email.com', residence: 'الإمارات، السعودية، كازاخستان...', referrer: 'اسم المُرشح، إن وجد', company: 'اسم الشركة، القطاع، النشاط', website: 'رابط LinkedIn أو الموقع', motivation: 'اشرحوا بإيجاز وضعكم ومشروعكم في تركيا وما تتوقعونه من المكتب الخاص Bosphoras.' }, profileOptions: ['رائد أعمال', 'مستثمر', 'مدير', 'مهنة حرة', 'Family office', 'آخر'], budgetOptions: ['أقل من 25,000 USD', '25,000 - 50,000 USD', '50,000 - 100,000 USD', '100,000 USD+', 'أفضل المناقشة بسرية'], serviceOptions: ['الانتقال إلى تركيا', 'الأعمال / الشركة / الضرائب', 'الصحة / التأمين', 'العقار / relocation', 'النقل VIP / hospitality', 'الوصول الخاص / lifestyle', 'عدة احتياجات'],
  },
};

function inputClass() { return 'w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]'; }
function formClass(extra = '') { return `relative border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_35px_100px_rgba(16,24,39,0.12)] md:p-8 ${extra}`; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">{label}</span>{children}</label>; }
function SelectField({ name, options }: { name: string; options: string[] }) { return <select name={name} className={inputClass()} defaultValue=""><option value="">—</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>; }

export function BosphorasForm({ locale, embedded = false }: { locale: Locale; kind?: FormKind; embedded?: boolean }) {
  const copy = diagnostic[locale];
  const form = (
    <form action="mailto:contact@bosphoras.com" method="post" encType="text/plain" className={formClass(embedded ? '' : 'mx-auto max-w-5xl')}>
      <div className="mb-8 border-b border-[#d8c7a1] pb-6"><p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#8a6728]">{copy.eyebrow}</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">{copy.title}</h2></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={copy.fullName}><input required name={copy.fullName.replace(' *', '')} type="text" placeholder={copy.placeholders.name} className={inputClass()} /></Field>
        <Field label={copy.phone}><input required name={copy.phone.replace(' *', '')} type="tel" placeholder={copy.placeholders.phone} className={inputClass()} /></Field>
        <Field label={copy.email}><input required name={copy.email.replace(' *', '')} type="email" placeholder={copy.placeholders.email} className={inputClass()} /></Field>
        <Field label={copy.residence}><input name={copy.residence} type="text" placeholder={copy.placeholders.residence} className={inputClass()} /></Field>
        <Field label={copy.city}><SelectField name={copy.city} options={copy.cityOptions} /></Field>
        <Field label={copy.subject}><SelectField name={copy.subject.replace(' *', '')} options={copy.subjectOptions} /></Field>
        <Field label={copy.timeline}><SelectField name={copy.timeline} options={copy.timelineOptions} /></Field>
        <Field label={copy.budget}><SelectField name={copy.budget} options={copy.budgetOptions} /></Field>
      </div>
      <label className="mt-4 block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">{copy.message}</span><textarea required name={copy.message.replace(' *', '')} rows={6} placeholder={copy.placeholders.message} className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#8a6728]" /></label>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-[#5c6676]"><input required name="Confidentiality accepted" type="checkbox" value="Yes" className="mt-1 h-4 w-4 border-[#d8c7a1]" /><span>{copy.consent}</span></label>
      <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246] md:w-auto">{copy.submit}<ArrowRight size={15} /></button>
      <p className="mt-5 text-xs leading-6 text-[#7a8494]">{copy.note}</p>
    </form>
  );
  if (embedded) return form;
  return <section className="border-y border-[#d8c7a1] bg-[#f8f1e7] py-14 md:py-20"><div className="container-editorial">{form}</div></section>;
}

export function BosphorasMembershipForm({ locale, embedded = false }: { locale: Locale; embedded?: boolean }) {
  const copy = membership[locale];
  const form = (
    <form action="mailto:contact@bosphoras.com" method="post" encType="text/plain" className={formClass(embedded ? '' : 'mx-auto max-w-5xl')}>
      <div className="mb-8 border-b border-[#d8c7a1] pb-6"><p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#8a6728]">{copy.eyebrow}</p><h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">{copy.title}</h2></div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={copy.fullName}><input required name={copy.fullName.replace(' *', '')} type="text" placeholder={copy.placeholders.name} className={inputClass()} /></Field>
        <Field label={copy.whatsapp}><input required name={copy.whatsapp.replace(' *', '')} type="tel" placeholder={copy.placeholders.phone} className={inputClass()} /></Field>
        <Field label={copy.email}><input required name={copy.email.replace(' *', '')} type="email" placeholder={copy.placeholders.email} className={inputClass()} /></Field>
        <Field label={copy.residence}><input required name={copy.residence.replace(' *', '')} type="text" placeholder={copy.placeholders.residence} className={inputClass()} /></Field>
        <Field label={copy.referrer}><input name={copy.referrer} type="text" placeholder={copy.placeholders.referrer} className={inputClass()} /></Field>
        <Field label={copy.profile}><SelectField name={copy.profile.replace(' *', '')} options={copy.profileOptions} /></Field>
        <Field label={copy.company}><input name={copy.company} type="text" placeholder={copy.placeholders.company} className={inputClass()} /></Field>
        <Field label={copy.website}><input name={copy.website} type="text" placeholder={copy.placeholders.website} className={inputClass()} /></Field>
        <Field label={copy.annualBudget}><SelectField name={copy.annualBudget} options={copy.budgetOptions} /></Field>
        <Field label={copy.mainNeed}><SelectField name={copy.mainNeed.replace(' *', '')} options={copy.serviceOptions} /></Field>
      </div>
      <label className="mt-4 block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">{copy.motivation}</span><textarea required name={copy.motivation.replace(' *', '')} rows={6} placeholder={copy.placeholders.motivation} className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#8a6728]" /></label>
      <div className="mt-6 border border-[#d8c7a1] bg-[#f8f1e7] p-5"><p className="font-serif text-2xl text-[#121826]">{copy.accessTitle}</p><p className="mt-3 text-sm leading-7 text-[#3e4857]">{copy.accessText}</p><div className="mt-4 grid gap-3 text-sm leading-7 text-[#3e4857] sm:grid-cols-2"><p><strong>{copy.annualAdmission.split(':')[0]} :</strong> {copy.annualAdmission.split(':').slice(1).join(':').trim()}</p><p><strong>{copy.monthlyRetainer.split(':')[0]} :</strong> {copy.monthlyRetainer.split(':').slice(1).join(':').trim()}</p></div></div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-[#5c6676]"><input required name="Conditions accepted" type="checkbox" value="Yes" className="mt-1 h-4 w-4 border-[#d8c7a1]" /><span>{copy.consentInfo}</span></label>
      <label className="mt-3 flex gap-3 text-sm leading-6 text-[#5c6676]"><input required name="Validation accepted" type="checkbox" value="Yes" className="mt-1 h-4 w-4 border-[#d8c7a1]" /><span>{copy.consentValidation}</span></label>
      <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246] md:w-auto">{copy.submit}<ArrowRight size={15} /></button>
      <p className="mt-5 text-xs leading-6 text-[#7a8494]">{copy.note}</p>
    </form>
  );
  if (embedded) return form;
  return <section className="border-y border-[#d8c7a1] bg-[#f8f1e7] py-14 md:py-20"><div className="container-editorial">{form}</div></section>;
}
