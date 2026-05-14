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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#071426] pt-20 text-white md:min-h-[92vh] md:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[center_center]"
        style={{
          backgroundImage:
            "image-set(url('/images/mobile-istanbul.jpg') 1x), url('/images/mobile-istanbul.jpg')",
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/images/hero-istanbul.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,0.76)_0%,rgba(7,20,38,0.56)_42%,rgba(7,20,38,0.24)_72%,rgba(7,20,38,0.10)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,8,18,0.66)_0%,rgba(3,8,18,0.04)_45%,rgba(3,8,18,0.46)_100%)]" />

      <div className="container-editorial relative z-10 flex min-h-[calc(100svh-5rem)] items-center pb-5 md:min-h-[calc(92vh-7rem)] md:pb-12">
        <div className="max-w-4xl py-4 md:py-0">
          <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.28em] text-[#d2a863] md:mb-6 md:text-[0.62rem] md:tracking-[0.34em]">
            Bosphoras Private Desk
          </p>
          <h1 className="max-w-4xl font-serif text-[2.45rem] leading-[1.02] tracking-[-0.045em] text-[#fffaf0] md:text-6xl lg:text-7xl">
            {copy.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#efe4d2] md:mt-8 md:text-xl md:leading-10">
            {copy.subtitle}{' '}
            <span className="font-semibold text-white">{copy.closing}</span>
          </p>
          <p className="mt-5 max-w-2xl border-l border-[#d2a863] pl-4 font-serif text-xl leading-snug text-[#fffaf0] md:mt-8 md:pl-5 md:text-3xl">
            “{copy.quote}”
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              href={copy.assessmentHref}
              className="inline-flex items-center justify-center bg-[#d2a863] px-6 py-3.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78] md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={copy.servicesHref}
              className="inline-flex items-center justify-center border border-[#d2a863]/80 bg-white/10 px-6 py-3.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#fffaf0] backdrop-blur-sm transition hover:bg-white/15 md:px-8 md:py-4 md:text-xs md:tracking-[0.16em]"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <Link
            href={copy.membershipHref}
            className="mt-4 inline-flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:text-[#fffaf0] md:mt-5 md:text-xs md:tracking-[0.18em]"
          >
            {copy.memberCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
