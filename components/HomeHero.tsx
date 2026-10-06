import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { withAssessmentContext } from '@/lib/assessmentContext';

type HomeHeroCopy = {
  eyebrow: string;
  h1: string;
  subtitle: string;
  pillars: string;
  reassurance: string;
  quote: string;
  primaryCta: string;
  secondaryCta: string;
  assessmentHref: string;
  propertyHref: string;
};

const heroCopy: Record<Locale, HomeHeroCopy> = {
  fr: {
    eyebrow: 'Bosphoras Private Office',
    h1: 'Investir, s’installer ou entreprendre en Turquie.',
    subtitle: 'Immobilier sélectionné, création de société, résidence et relocation. Bosphoras coordonne les professionnels, les démarches et l’exécution sur place à Istanbul, Bodrum et Antalya.',
    pillars: 'Immobilier sélectionné · Société · Résidence · Relocation',
    reassurance: 'Un seul interlocuteur. Des spécialistes pour chaque métier. Une exécution suivie sur place.',
    quote: 'En Turquie, la vraie difficulté c’est de savoir à qui faire confiance.',
    primaryCta: 'Parler à un conseiller Bosphoras',
    secondaryCta: 'Voir les opportunités immobilières',
    assessmentHref: '/diagnostic-prive',
    propertyHref: '/immobilier-turquie',
  },
  en: {
    eyebrow: 'Bosphoras Private Office',
    h1: 'Invest, relocate or build your business in Turkey.',
    subtitle: 'Selected property, company formation, residence and relocation. Bosphoras coordinates the right professionals, formalities and local execution in Istanbul, Bodrum and Antalya.',
    pillars: 'Selected property · Company setup · Residence · Relocation',
    reassurance: 'One point of contact. Specialists for each profession. Local execution followed through.',
    quote: 'In Turkey, the real difficulty is knowing who to trust.',
    primaryCta: 'Speak with a Bosphoras adviser',
    secondaryCta: 'View property opportunities',
    assessmentHref: '/en/private-assessment',
    propertyHref: '/en/property-turkey',
  },
  ru: {
    eyebrow: 'Bosphoras Private Office',
    h1: 'Инвестировать, переехать или вести бизнес в Турции.',
    subtitle: 'Отобранная недвижимость, создание компании, резиденция и relocation. Bosphoras координирует специалистов, процедуры и исполнение на месте в Стамбуле, Бодруме и Анталье.',
    pillars: 'Недвижимость · Компания · Резиденция · Relocation',
    reassurance: 'Один контакт. Специалисты по каждой задаче. Контроль исполнения на месте.',
    quote: 'В Турции настоящая сложность — понять, кому можно доверять.',
    primaryCta: 'Поговорить с консультантом Bosphoras',
    secondaryCta: 'Смотреть недвижимость',
    assessmentHref: '/ru/chastnaya-konsultatsiya',
    propertyHref: '/ru/nedvizhimost-v-turtsii',
  },
  ar: {
    eyebrow: 'Bosphoras Private Office',
    h1: 'استثمروا أو انتقلوا أو أسسوا أعمالكم في تركيا.',
    subtitle: 'عقارات مختارة، تأسيس شركات، إقامة وانتقال. ينسق Bosphoras المهنيين والإجراءات والتنفيذ المحلي في إسطنبول وبودروم وأنطاليا.',
    pillars: 'عقارات مختارة · تأسيس شركة · إقامة · انتقال',
    reassurance: 'جهة اتصال واحدة. مختصون لكل مجال. متابعة التنفيذ على أرض الواقع.',
    quote: 'في تركيا، الصعوبة الحقيقية هي معرفة من يمكن الوثوق به.',
    primaryCta: 'التحدث مع مستشار Bosphoras',
    secondaryCta: 'عرض الفرص العقارية',
    assessmentHref: '/ar/تقييم-خاص',
    propertyHref: '/ar/عقارات-تركيا',
  },
};

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];
  const assessmentHref = withAssessmentContext(copy.assessmentHref, '/', copy.h1, 'home');

  return (
    <section className="relative overflow-hidden bg-[#071426] pt-20 text-white md:min-h-[82vh] md:pt-32">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-istanbul.jpg" />
        <img
          src="/images/mobile-istanbul.jpg"
          alt=""
          width={1200}
          height={1600}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,18,0.82)_0%,rgba(7,20,38,0.62)_44%,rgba(7,20,38,0.22)_76%,rgba(7,20,38,0.10)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,8,18,0.72)_0%,rgba(3,8,18,0.04)_46%,rgba(3,8,18,0.48)_100%)]" />

      <div className="container-editorial relative z-10 flex items-center py-12 md:min-h-[calc(82vh-7rem)] md:py-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-[0.6rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-5xl font-serif text-[2.45rem] leading-[1.01] tracking-[-0.05em] text-[#fffaf0] md:text-6xl lg:text-7xl">
            {copy.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#efe4d2] md:text-xl md:leading-9">
            {copy.subtitle}
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#d2a863] md:text-sm">
            {copy.pillars}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              href={assessmentHref}
              data-cta-id="home_hero_adviser"
              className="inline-flex min-h-[52px] items-center justify-center bg-[#d2a863] px-7 py-4 text-sm font-semibold text-[#101827] transition hover:bg-[#e0bc78] md:px-8"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={copy.propertyHref}
              data-cta-id="home_hero_property"
              className="inline-flex min-h-[52px] items-center justify-center border border-white/45 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-[#fffaf0] backdrop-blur-sm transition hover:border-white/70 hover:bg-white/[0.12] md:px-8"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#efe4d2]">{copy.reassurance}</p>
          <blockquote className="mt-7 max-w-3xl border-t border-[#d2a863]/35 pt-5 text-lg font-medium leading-7 tracking-[0.01em] text-white md:text-xl">
            “{copy.quote}”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
