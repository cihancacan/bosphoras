import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BosphorasForm } from '@/components/BosphorasForms';

type Copy = {
  currentPath: string;
  eyebrow: string;
  h1: string;
  intro: string;
  confidentiality: string;
  languages: string;
  locations: string;
  needsEyebrow: string;
  needsTitle: string;
  needs: string[];
  methodEyebrow: string;
  methodTitle: string;
  process: Array<{ title: string; text: string }>;
  finalTitle: string;
  finalText: string;
  finalButton: string;
  finalClock: string;
};

const copies: Record<Locale, Copy> = {
  fr: {
    currentPath: '/diagnostic-prive',
    eyebrow: 'Bosphoras · Contact privé',
    h1: 'Demander un diagnostic privé',
    intro: 'Décrivez votre demande. Nous analysons le sujet et revenons vers vous avec la bonne approche.',
    confidentiality: 'Confidentialité renforcée',
    languages: 'Français · English · Русский · العربية',
    locations: 'Paris · Istanbul · Londres · Almaty · Moscou · Dubai',
    needsEyebrow: 'Demandes prises en charge',
    needsTitle: 'Les sujets que nous pouvons coordonner.',
    needs: ['Installation en Turquie', 'Création d’entreprise', 'Fiscalité & résidence', 'Avocat & conformité', 'Santé & assurance', 'Immobilier & relocation', 'Bureaux privés ou partagés', 'Transport VIP & hospitality', 'Hôtels, yachts, événements', 'Accès privé & membership'],
    methodEyebrow: 'Méthode',
    methodTitle: 'La suite après votre demande.',
    process: [
      { title: 'Analyse confidentielle', text: 'Nous étudions votre profil, votre pays de résidence, votre calendrier, votre budget et vos priorités.' },
      { title: 'Sélection des bons interlocuteurs', text: 'Avocat, fiscaliste, comptable, assureur, médecin, bureau, transporteur, hôtel ou partenaire privé.' },
      { title: 'Organisation de la suite', text: 'Nous vous proposons une feuille de route claire pour avancer sans perte de temps.' },
    ],
    finalTitle: 'Votre demande reste confidentielle.',
    finalText: 'Bosphoras ne remplace pas les professionnels réglementés. Notre rôle est de filtrer, coordonner et organiser les bons interlocuteurs autour de votre projet.',
    finalButton: 'Écrire à Bosphoras',
    finalClock: 'Réponse après analyse de la demande',
  },
  en: {
    currentPath: '/en/private-assessment',
    eyebrow: 'Bosphoras · Private contact',
    h1: 'Request a private assessment',
    intro: 'Describe your request. We analyse the subject and come back to you with the right approach.',
    confidentiality: 'Enhanced confidentiality',
    languages: 'Français · English · Русский · العربية',
    locations: 'Paris · Istanbul · London · Almaty · Moscow · Dubai',
    needsEyebrow: 'Requests handled',
    needsTitle: 'The matters we can coordinate.',
    needs: ['Relocation to Turkey', 'Company formation', 'Tax & residence', 'Lawyer & compliance', 'Healthcare & insurance', 'Property & relocation', 'Private or shared offices', 'VIP transport & hospitality', 'Hotels, yachts, events', 'Private access & membership'],
    methodEyebrow: 'Method',
    methodTitle: 'What happens after your request.',
    process: [
      { title: 'Confidential analysis', text: 'We review your profile, country of residence, timeline, budget and priorities.' },
      { title: 'Selection of the right contacts', text: 'Lawyer, tax advisor, accountant, insurer, doctor, office, transport provider, hotel or private partner.' },
      { title: 'Organisation of the next steps', text: 'We propose a clear roadmap so you can move forward without wasting time.' },
    ],
    finalTitle: 'Your request remains confidential.',
    finalText: 'Bosphoras does not replace regulated professionals. Our role is to filter, coordinate and organise the right contacts around your project.',
    finalButton: 'Write to Bosphoras',
    finalClock: 'Reply after analysis of the request',
  },
  ru: {
    currentPath: '/ru/chastnaya-konsultatsiya',
    eyebrow: 'Bosphoras · Частный контакт',
    h1: 'Запросить частную консультацию',
    intro: 'Опишите ваш запрос. Мы анализируем тему и возвращаемся к вам с правильным подходом.',
    confidentiality: 'Повышенная конфиденциальность',
    languages: 'Français · English · Русский · العربية',
    locations: 'Париж · Стамбул · Лондон · Алматы · Москва · Дубай',
    needsEyebrow: 'Запросы, которые мы координируем',
    needsTitle: 'Темы, которые мы можем координировать.',
    needs: ['Переезд в Турцию', 'Создание компании', 'Налоги и резиденция', 'Юрист и compliance', 'Здоровье и страхование', 'Недвижимость и relocation', 'Частные или shared офисы', 'VIP transport и hospitality', 'Отели, яхты, мероприятия', 'Private access и membership'],
    methodEyebrow: 'Метод',
    methodTitle: 'Что происходит после вашего запроса.',
    process: [
      { title: 'Конфиденциальный анализ', text: 'Мы изучаем ваш профиль, страну проживания, сроки, бюджет и приоритеты.' },
      { title: 'Подбор правильных interlocutors', text: 'Юрист, налоговый консультант, бухгалтер, страховщик, врач, офис, транспортный провайдер, отель или частный партнёр.' },
      { title: 'Организация следующих шагов', text: 'Мы предлагаем понятную дорожную карту, чтобы двигаться дальше без потери времени.' },
    ],
    finalTitle: 'Ваш запрос остаётся конфиденциальным.',
    finalText: 'Bosphoras не заменяет регулируемых специалистов. Наша роль — фильтровать, координировать и организовывать правильных interlocutors вокруг вашего проекта.',
    finalButton: 'Написать в Bosphoras',
    finalClock: 'Ответ после анализа запроса',
  },
  ar: {
    currentPath: '/ar/تقييم-خاص',
    eyebrow: 'Bosphoras · تواصل خاص',
    h1: 'طلب تقييم خاص',
    intro: 'اشرحوا طلبكم. نقوم بتحليل الموضوع ونعود إليكم بالنهج المناسب.',
    confidentiality: 'سرية معززة',
    languages: 'Français · English · Русский · العربية',
    locations: 'باريس · إسطنبول · لندن · ألماتي · موسكو · دبي',
    needsEyebrow: 'الطلبات التي يمكننا التعامل معها',
    needsTitle: 'المواضيع التي يمكننا تنسيقها.',
    needs: ['الانتقال إلى تركيا', 'تأسيس شركة', 'الضرائب والإقامة', 'محامٍ وامتثال', 'الصحة والتأمين', 'العقار وrelocation', 'مكاتب خاصة أو مشتركة', 'النقل VIP وhospitality', 'فنادق، يخوت، فعاليات', 'الوصول الخاص والعضوية'],
    methodEyebrow: 'الطريقة',
    methodTitle: 'ما يحدث بعد طلبكم.',
    process: [
      { title: 'تحليل سري', text: 'ندرس ملفكم، بلد الإقامة، الجدول الزمني، الميزانية والأولويات.' },
      { title: 'اختيار الجهات المناسبة', text: 'محامٍ، مستشار ضريبي، محاسب، شركة تأمين، طبيب، مكتب، مزود نقل، فندق أو شريك خاص.' },
      { title: 'تنظيم الخطوات التالية', text: 'نقترح عليكم خارطة طريق واضحة للتقدم دون إضاعة الوقت.' },
    ],
    finalTitle: 'يبقى طلبكم سرياً.',
    finalText: 'Bosphoras لا يحل محل المهنيين المنظمين. دورنا هو التصفية والتنسيق وتنظيم الجهات المناسبة حول مشروعكم.',
    finalButton: 'مراسلة Bosphoras',
    finalClock: 'الرد بعد تحليل الطلب',
  },
};

interface Props { locale: Locale; }

export function PrivateAssessmentLocalizedPage({ locale }: Props) {
  const copy = copies[locale];

  return (
    <>
      <Header locale={locale} currentPath={copy.currentPath} />
      <main className="bg-[#f8f1e7] pt-24 text-[#101827] md:pt-28">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_8%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
          <div className="container-editorial relative z-10 grid gap-12 py-12 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="lg:pt-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{copy.eyebrow}</p>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{copy.h1}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:text-lg">{copy.intro}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><Lock className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">{copy.confidentiality}</p></div>
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><Globe className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">{copy.languages}</p></div>
              </div>
              <div className="mt-8 space-y-3 text-sm text-[#3e4857]">
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#8a6728]" /><a href="tel:+33188842222" className="hover:text-[#8a6728]">01 88 84 22 22</a></p>
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#8a6728]" /><a href="mailto:contact@bosphoras.com" className="hover:text-[#8a6728]">contact@bosphoras.com</a></p>
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#8a6728]" />{copy.locations}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 hidden border border-[#d8c7a1] md:block" />
              <BosphorasForm locale={locale} embedded />
            </div>
          </div>
        </section>
        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">{copy.needsEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{copy.needsTitle}</h2></div><div className="grid gap-3 sm:grid-cols-2">{copy.needs.map((need) => <div key={need} className="flex items-center gap-3 border border-[#d2a863]/20 bg-white/[0.03] p-4 text-sm leading-7 text-[#d8cfbf]"><ShieldCheck className="h-5 w-5 shrink-0 text-[#d2a863]" strokeWidth={1.4} /><span>{need}</span></div>)}</div></div></section>
        <section className="container-editorial py-16 md:py-24"><div className="mb-10 max-w-4xl"><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{copy.methodEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{copy.methodTitle}</h2></div><div className="grid gap-6 md:grid-cols-3">{copy.process.map((item, index) => <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><p className="font-serif text-4xl text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p><h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3><p className="mt-5 text-base leading-8 text-[#3e4857]">{item.text}</p></article>)}</div></section>
        <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div className="text-white"><Sparkles className="mb-6 h-7 w-7 text-[#d2a863]" strokeWidth={1.4} /><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">{copy.finalTitle}</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">{copy.finalText}</p></div><div className="md:text-right"><Link href="mailto:contact@bosphoras.com?subject=Demande%20confidentielle%20Bosphoras" className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">{copy.finalButton}</Link><div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80"><Clock className="h-4 w-4 text-[#d2a863]" />{copy.finalClock}</div></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function buildPrivateAssessmentMetadata(locale: Locale): Metadata {
  const title = locale === 'fr' ? 'Contact privé | Diagnostic Bosphoras' : locale === 'en' ? 'Private Contact | Bosphoras Assessment' : locale === 'ru' ? 'Частный контакт | Консультация Bosphoras' : 'تواصل خاص | تقييم Bosphoras';
  const description = locale === 'fr' ? 'Contactez Bosphoras pour un diagnostic privé en Turquie : installation, fiscalité, société, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.' : locale === 'en' ? 'Contact Bosphoras for a private assessment in Turkey: relocation, tax, company, healthcare, insurance, property, offices, VIP transport, hotels, events and private access.' : locale === 'ru' ? 'Свяжитесь с Bosphoras для частной консультации по Турции: переезд, налоги, компания, здоровье, страхование, недвижимость, офисы, VIP transport, отели, мероприятия и private access.' : 'تواصلوا مع Bosphoras للحصول على تقييم خاص في تركيا: الانتقال، الضرائب، الشركة، الصحة، التأمين، العقار، المكاتب، النقل VIP، الفنادق، الفعاليات والوصول الخاص.';
  return { title, description };
}
