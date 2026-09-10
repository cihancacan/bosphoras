import Link from 'next/link';
import { conversionCopy } from '@/data/conversion';
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
  const c = conversionCopy[locale];

  return (
    <section className="relative overflow-hidden bg-[#071426] pt-20 text-white md:min-h-[78vh] md:pt-32">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-istanbul.jpg" />
        <img src="/images/mobile-istanbul.jpg" alt="" width={1200} height={1600}
          loading="eager" fetchPriority="high" decoding="async"
          className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,0.76)_0%,rgba(7,20,38,0.56)_42%,rgba(7,20,38,0.24)_72%,rgba(7,20,38,0.10)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,8,18,0.66)_0%,rgba(3,8,18,0.04)_45%,rgba(3,8,18,0.46)_100%)]" />

      <div className="container-editorial relative z-10 flex items-center py-10 md:min-h-[calc(78vh-7rem)] md:py-16">
        <div className="max-w-4xl py-4 md:py-0">
          <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.28em] text-[#d2a863] md:mb-6 md:text-[0.62rem] md:tracking-[0.34em]">
            Bosphoras Private Desk
          </p>
          <h1 className="max-w-4xl font-serif text-[2.2rem] leading-[1.02] tracking-[-0.045em] text-[#fffaf0] md:text-5xl lg:text-6xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#efe4d2] md:mt-6 md:text-xl md:leading-8">
            {c.intro}
          </p>


          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              href={copy.assessmentHref} data-cta-id="home_hero"
              className="inline-flex items-center justify-center bg-[#d2a863] px-6 py-3.5 text-sm font-semibold text-[#101827] transition hover:bg-[#e0bc78] md:px-8 md:py-4 md:text-sm md:tracking-[0.16em]"
            >
              {c.cta}
            </Link>
            <Link
              href="#votre-projet"
              className="inline-flex min-h-[48px] items-center justify-center border border-transparent bg-transparent px-6 py-3.5 text-sm font-semibold text-[#fffaf0] underline underline-offset-4 transition hover:bg-white/15 md:px-8 md:py-4 md:text-sm md:tracking-[0.16em]"
            >
              {c.choose}
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="order-2 mt-5 max-w-2xl text-sm leading-6 text-[#efe4d2] md:order-1 md:mt-4">{c.reassurance}</p>
            <blockquote className="order-1 mt-4 max-w-2xl border-t border-[#d2a863]/35 pt-4 font-sans text-lg font-medium leading-7 tracking-[0.01em] text-white md:order-2 md:mt-7 md:pt-5 md:text-xl">
              “{copy.quote}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
