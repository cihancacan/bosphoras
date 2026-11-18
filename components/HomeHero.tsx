import { homeEditorial } from '@/data/homeEditorial';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { withAssessmentContext } from '@/lib/assessmentContext';

type HomeHeroCopy = {
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
  const editorial = homeEditorial[locale];
  const assessmentHref = withAssessmentContext(copy.assessmentHref, '/', editorial.h1, 'home');

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f3] pt-20 text-[#202629] md:pt-24">
      <picture>
        <source media="(min-width:768px)" srcSet="/images/hero-istanbul.jpg"/>
        <img src="/images/mobile-istanbul.jpg" alt="" width={1200} height={1600} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover object-center"/>
      </picture>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(245,245,243,0.96)_0%,rgba(245,245,243,0.9)_45%,rgba(245,245,243,0.68)_100%)] md:bg-[linear-gradient(90deg,rgba(245,245,243,0.96)_0%,rgba(245,245,243,0.90)_31%,rgba(245,245,243,0.52)_58%,rgba(245,245,243,0.02)_100%)] rtl:md:bg-[linear-gradient(270deg,rgba(245,245,243,0.96)_0%,rgba(245,245,243,0.90)_31%,rgba(245,245,243,0.52)_58%,rgba(245,245,243,0.02)_100%)]"/>
      <div className="mx-auto flex max-w-[1320px] items-center px-5 py-10 sm:px-8 sm:py-14 md:min-h-[min(540px,66vh)] md:py-12">
        <div className="w-full max-w-[690px]">
          <p className="mb-4 max-w-[620px] font-sans text-sm font-light leading-relaxed text-[#53616b] sm:text-base md:text-lg">“{copy.quote}”</p>
          <h1 className="whitespace-pre-line font-sans text-[clamp(1.85rem,5.8vw,2.65rem)] font-normal leading-[1.16] tracking-[-0.035em] text-[#193344] md:text-[3rem] lg:text-[3.45rem]">{editorial.h1}</h1>
          <p className="mt-4 max-w-[590px] text-sm leading-6 text-[#26343d] sm:text-base md:mt-5 md:text-lg md:leading-8">{editorial.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"><Link href={assessmentHref} data-cta-id="home_hero_adviser" className="inline-flex min-h-[48px] items-center bg-[#193344] px-5 py-3 text-sm font-medium text-white hover:bg-[#25485e] sm:px-7">{editorial.cta}</Link><a href="#votre-projet" className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#193344] underline underline-offset-4">{editorial.explore}</a></div>
          <p className="mt-4 max-w-[580px] text-xs leading-5 text-[#465159] md:text-sm md:leading-6">{editorial.reassurance}</p>
        </div>
      </div>
    </section>
  );
}
