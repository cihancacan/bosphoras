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
    <section className="bg-[#f5f5f0] pt-20 text-[#202629] md:pt-24">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[620px] lg:grid-cols-[0.94fr_1.06fr] items-stretch">
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-14 xl:px-20">
          <p className="mb-5 font-sans text-base font-light leading-relaxed text-[#53616b] md:text-lg">“{copy.quote}”</p>
          <h1 className="whitespace-pre-line font-sans text-[2.4rem] font-normal leading-[1.13] tracking-[-0.04em] text-[#193344] md:text-5xl xl:text-[3.65rem]">{editorial.h1}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#465159] md:text-lg">{editorial.subtitle}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4"><Link href={assessmentHref} data-cta-id="home_hero_adviser" className="inline-flex min-h-[52px] items-center bg-[#193344] px-7 py-4 text-sm font-medium text-white hover:bg-[#25485e]">{editorial.cta}</Link><a href="#votre-projet" className="text-sm font-medium text-[#193344] underline underline-offset-4">{editorial.explore}</a></div>
          <p className="mt-6 text-sm leading-6 text-[#53616b]">{editorial.reassurance}</p>
          <p className="mt-4 text-sm tracking-wide text-[#193344]">Istanbul · Bodrum · Antalya</p>
        </div>
        <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-full overflow-hidden"><picture><source media="(min-width:768px)" srcSet="/images/hero-istanbul.jpg"/><img src="/images/mobile-istanbul.jpg" alt={locale==='fr'?'Istanbul et le Bosphore':locale==='en'?'Istanbul and the Bosphorus':locale==='ru'?'Стамбул и Босфор':'إسطنبول والبوسفور'} width={1200} height={900} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover"/></picture></div>
      </div>
    </section>
  );
}
