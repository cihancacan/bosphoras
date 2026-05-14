import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type HomeHeroCopy = {
  h1: string;
  subtitle: string;
  closing: string;
  quote: string;
  primaryCta: string;
  secondaryCta: string;
  memberCta: string;
  assessmentHref: string;
  servicesHref: string;
  membershipHref: string;
};

const heroCopy: Record<Locale, HomeHeroCopy> = {
  fr: {
    h1: 'Votre bureau privé pour vous installer en Turquie',
    subtitle:
      'Bosphoras accompagne votre arrivée en Turquie avec méthode, discrétion et les bons experts : résidence, fiscalité, société, banque, santé, assurance, immobilier et vie sur place.',
    closing: 'Un seul interlocuteur. Une installation structurée. Un suivi dans la durée.',
    quote: 'En Turquie, la vraie difficulté c’est de savoir à qui faire confiance.',
    primaryCta: 'Demander un diagnostic privé',
    secondaryCta: 'Comprendre l’accompagnement',
    memberCta: 'Accès membre Bosphoras',
    assessmentHref: '/diagnostic-prive',
    servicesHref: '/services',
    membershipHref: '/adhesion/demande-membre',
  },
  en: {
    h1: 'Your private desk for settling in Turkey',
    subtitle:
      'Bosphoras supports your arrival in Turkey with method, discretion and the right experts: residence, tax, company setup, banking, healthcare, insurance, property and life on the ground.',
    closing: 'One point of contact. A structured arrival. Long-term follow-up.',
    quote: 'In Turkey, the real difficulty is knowing who to trust.',
    primaryCta: 'Request a private assessment',
    secondaryCta: 'Understand our support',
    memberCta: 'Bosphoras member access',
    assessmentHref: '/en/private-assessment',
    servicesHref: '/en/services',
    membershipHref: '/en/membership/application',
  },
  ru: {
    h1: 'Ваш частный офис для переезда в Турцию',
    subtitle:
      'Bosphoras сопровождает ваш приезд в Турцию с методичностью, конфиденциальностью и правильными экспертами: резиденция, налоги, компания, банк, медицина, страхование, недвижимость и жизнь на месте.',
    closing: 'Один контакт. Структурированный переезд. Долгосрочное сопровождение.',
    quote: 'В Турции настоящая сложность — понять, кому можно доверять.',
    primaryCta: 'Получить частную консультацию',
    secondaryCta: 'Понять сопровождение',
    memberCta: 'Доступ для участников Bosphoras',
    assessmentHref: '/ru/chastnaya-konsultatsiya',
    servicesHref: '/ru/uslugi',
    membershipHref: '/ru/chlenstvo/zayavka',
  },
  ar: {
    h1: 'مكتبكم الخاص للاستقرار في تركيا',
    subtitle:
      'يرافقكم Bosphoras في وصولكم إلى تركيا بمنهجية وسرية ومع الخبراء المناسبين: الإقامة، الضرائب، تأسيس الشركة، الحساب البنكي، الصحة، التأمين، العقار والحياة على أرض الواقع.',
    closing: 'جهة اتصال واحدة. وصول منظّم. متابعة طويلة المدى.',
    quote: 'في تركيا، الصعوبة الحقيقية هي معرفة من يمكن الوثوق به.',
    primaryCta: 'طلب تقييم خاص',
    secondaryCta: 'فهم المرافقة',
    memberCta: 'دخول أعضاء Bosphoras',
    assessmentHref: '/ar/تقييم-خاص',
    servicesHref: '/ar/خدمات',
    membershipHref: '/ar/عضوية/طلب',
  },
};

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#071426] pt-24 text-white md:pt-32">
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/images/mobile-istanbul.jpg" />
        <img
          src="/images/hero-istanbul.jpg"
          alt="Istanbul Bosphorus skyline"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,0.88)_0%,rgba(7,20,38,0.72)_42%,rgba(7,20,38,0.34)_72%,rgba(7,20,38,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,8,18,0.72)_0%,rgba(3,8,18,0.10)_45%,rgba(3,8,18,0.58)_100%)]" />

      <div className="container-editorial relative z-10 flex min-h-[calc(92vh-7rem)] items-center pb-12">
        <div className="max-w-4xl">
          <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">
            Bosphoras Private Desk
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.03] tracking-[-0.045em] text-[#fffaf0] md:text-6xl lg:text-7xl">
            {copy.h1}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#efe4d2] md:text-xl md:leading-10">
            {copy.subtitle}
          </p>
          <p className="mt-5 max-w-2xl font-serif text-xl leading-8 text-white md:text-2xl">
            {copy.closing}
          </p>
          <p className="mt-8 max-w-2xl border-l border-[#d2a863] pl-5 font-serif text-2xl leading-snug text-[#fffaf0] md:text-3xl">
            “{copy.quote}”
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={copy.assessmentHref}
              className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={copy.servicesHref}
              className="inline-flex items-center justify-center border border-[#d2a863]/80 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] backdrop-blur-sm transition hover:bg-white/15"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <Link
            href={copy.membershipHref}
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d2a863] transition hover:text-[#fffaf0]"
          >
            {copy.memberCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
