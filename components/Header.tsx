'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Globe2, KeyRound, Menu, Search, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { t, locales, localeNames } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage, pageSlugs } from '@/data/pages/types';
import { getEquivalentHighPotentialSlug } from '@/data/highPotentialPages';
import { longTailTaxRouteGroups } from '@/data/longTailTaxRoutes';
import { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';
import { globalPropertyHubPaths, propertyHubPaths } from '@/data/propertyDesk';
import { getNuiteeWhiteLabelSearchHref } from '@/lib/travel/nuiteeWhiteLabel';
import dynamic from 'next/dynamic';
const SearchOverlay = dynamic(() => import('@/components/SearchOverlay').then((module) => module.SearchOverlay));

interface HeaderProps { locale: Locale; currentPath?: string; localizedPaths?: Partial<Record<Locale, string>>; }
type MenuItem = { label: string; href: string; description?: string; tone?: 'property' | 'transfer' | 'hotel' };
type MenuGroup = { label: string; href: string; items: MenuItem[] };

const corporateRelocationPaths: Record<Locale, string> = {
  fr: '/relocation-corporate-turquie',
  en: '/en/corporate-relocation-turkey',
  ru: '/ru/korporativnyy-relokeyshn-v-turtsiyu',
  ar: '/ar/الانتقال-المؤسسي-إلى-تركيا',
};

const specialLocalizedPaths: Array<Record<Locale, string>> = [
  { fr: '/peninsula-istanbul', en: '/en/peninsula-istanbul', ru: '/ru/peninsula-istanbul', ar: '/ar/peninsula-istanbul' },
  { fr: '/transfert-aeroport-istanbul', en: '/en/istanbul-airport-transfer', ru: '/ru/transfer-aeroport-stambul', ar: '/ar/istanbul-airport-transfer' },
  corporateRelocationPaths,
  { fr: '/exoneration-fiscale-turquie-revenus-etrangers', en: '/en/turkey-tax-exemption-foreign-income', ru: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', ar: '/ar/turkey-tax-exemption-foreign-income' },
  { fr: '/strategie-fiscale-turquie-investisseurs-etrangers', en: '/en/turkey-tax-strategy-foreign-investors', ru: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', ar: '/ar/turkey-tax-strategy-foreign-investors' },
  { fr: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', en: '/en/turkey-20-year-tax-exemption-new-residents', ru: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', ar: '/ar/turkey-20-year-tax-exemption-new-residents' },
  { fr: '/istanbul-finance-center-avantages-fiscaux-investisseurs', en: '/en/istanbul-finance-center-tax-benefits-investors', ru: '/ru/istanbul-finance-center-nalogovye-lgoty-investory', ar: '/ar/istanbul-finance-center-tax-benefits-investors' },
  { fr: '/societe-turquie-transit-trade-commerce-international', en: '/en/turkey-company-transit-trade-international-commerce', ru: '/ru/kompaniya-turtsiya-tranzitnaya-torgovlya', ar: '/ar/turkey-company-transit-trade-international-commerce' },
  { fr: '/centres-services-qualifies-turquie-avantages-fiscaux', en: '/en/qualified-service-centers-turkey-tax-benefits', ru: '/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya', ar: '/ar/qualified-service-centers-turkey-tax-benefits' },
  { fr: '/family-office-turquie-istanbul', en: '/en/family-office-turkey-istanbul', ru: '/ru/family-office-turtsiya-stambul', ar: '/ar/family-office-turkey-istanbul' },
  { fr: '/industrie-fabrication-turquie-impot-societe-12-5', en: '/en/turkey-manufacturing-corporate-tax-12-5', ru: '/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5', ar: '/ar/turkey-manufacturing-corporate-tax-12-5' },
  { fr: '/turquie-vs-dubai-investisseurs-fiscalite', en: '/en/turkey-vs-dubai-investors-tax', ru: '/ru/turtsiya-vs-dubai-investory-nalogi', ar: '/ar/turkey-vs-dubai-investors-tax' },
  ...longTailTaxRouteGroups,
];

function normalizePath(path: string) {
  const clean = path.split('?')[0].split('#')[0];
  return clean.replace(/\/$/, '') || '/';
}

export function Header({ locale, currentPath = '/', localizedPaths }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const slug = (id: string) => getSlugForPage(id, locale) ?? '/';
  const linkTo = (id: string) => getLocalePath(locale, slug(id));
  const normalizedCurrentPath = normalizePath(currentPath);
  const isHomePath = normalizedCurrentPath === '/' || normalizedCurrentPath === '/en' || normalizedCurrentPath === '/ru' || normalizedCurrentPath === '/ar';

  const labels = {
    services: locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : locale === 'ru' ? 'Услуги' : 'الخدمات',
    destinations: locale === 'fr' ? 'Hôtels & Séjours' : locale === 'en' ? 'Hotels & Stays' : locale === 'ru' ? 'Отели и отдых' : 'الفنادق والإقامات',
    property: locale === 'fr' ? 'Immobilier' : locale === 'en' ? 'Property' : locale === 'ru' ? 'Недвижимость' : 'العقار',
    privateAccess: 'Private Access',
    information: locale === 'fr' ? 'Informations' : locale === 'en' ? 'Information' : locale === 'ru' ? 'Информация' : 'معلومات',
  };
  const searchLabel = locale === 'fr' ? 'Rechercher' : locale === 'en' ? 'Search' : locale === 'ru' ? 'Поиск' : 'بحث';
  const compactAssessmentLabel = locale === 'fr' ? 'Diagnostic' : locale === 'en' ? 'Assessment' : locale === 'ru' ? 'Консультация' : 'تقييم';
  const mobilityLink = locale === 'fr' ? '/transfert-aeroport-istanbul' : locale === 'en' ? '/en/istanbul-airport-transfer' : locale === 'ru' ? '/ru/transfer-aeroport-stambul' : '/ar/istanbul-airport-transfer';
  const peninsulaLink = locale === 'fr' ? '/peninsula-istanbul' : `/${locale}/peninsula-istanbul`;
  const travelHomeHref = locale === 'fr' ? '/travel' : `/${locale}/travel`;
  const hotelSearchHref = getNuiteeWhiteLabelSearchHref(locale);
  const travelDestinationsHref = locale === 'fr' ? '/travel/destinations' : `/${locale}/travel/destinations`;
  const corporateRelocationLink = corporateRelocationPaths[locale];
  const propertyTurkeyLink = getLocalePath(locale, propertyHubPaths[locale]);
  const propertyInvestmentLink = getLocalePath(locale, globalPropertyHubPaths[locale]);

  const groups: MenuGroup[] = [
    { label: labels.services, href: linkTo('services'), items: [
      { label: locale === 'fr' ? 'Installation en Turquie' : locale === 'en' ? 'Relocate to Turkey' : locale === 'ru' ? 'Переезд в Турцию' : 'الانتقال إلى تركيا', href: linkTo('relocate'), description: locale === 'fr' ? 'Residence, famille, ville, demarches.' : locale === 'en' ? 'Residence, family, city, formalities.' : locale === 'ru' ? 'Резиденция, семья, город, процедуры.' : 'الإقامة، العائلة، المدينة والإجراءات.' },
      { label: locale === 'fr' ? 'Relocation corporate' : locale === 'en' ? 'Corporate Relocation' : locale === 'ru' ? 'Corporate Relocation' : 'Corporate Relocation', href: corporateRelocationLink, description: locale === 'fr' ? 'Logement, titre de sejour, immigration et installation des cadres expatries.' : locale === 'en' ? 'Housing, residence permit, immigration and executive relocation.' : locale === 'ru' ? 'Жилье, ВНЖ, immigration и сопровождение руководителей.' : 'السكن والإقامة والهجرة وانتقال المدراء.' },
      { label: locale === 'fr' ? 'Conseil Juridique & Fiscal' : locale === 'en' ? 'Legal & Tax Advisory' : locale === 'ru' ? 'Право и налоги' : 'القانون والضرائب', href: linkTo('legal-tax'), description: locale === 'fr' ? 'Avocats, fiscalistes, conformite.' : locale === 'en' ? 'Lawyers, tax advisors, compliance.' : locale === 'ru' ? 'Юристы, налоги, compliance.' : 'محامون، ضرائب وامتثال.' },
      { label: locale === 'fr' ? "Creation d'Entreprise" : locale === 'en' ? 'Company Formation' : locale === 'ru' ? 'Создание компании' : 'تأسيس الشركات', href: linkTo('business-setup'), description: locale === 'fr' ? 'Societe, comptabilite, bureaux.' : locale === 'en' ? 'Company, accounting, offices.' : locale === 'ru' ? 'Компания, бухгалтерия, офисы.' : 'شركة، محاسبة ومكاتب.' },
      { label: locale === 'fr' ? 'Sante & Assurance' : locale === 'en' ? 'Health & Insurance' : locale === 'ru' ? 'Здоровье и страхование' : 'الصحة والتأمين', href: linkTo('health-insurance'), description: locale === 'fr' ? 'Medecins, cliniques, assurances.' : locale === 'en' ? 'Doctors, clinics, insurance.' : locale === 'ru' ? 'Врачи, клиники, страхование.' : 'أطباء، عيادات وتأمين.' },
      { label: locale === 'fr' ? 'Transfert & chauffeur à la demande' : locale === 'en' ? 'Transfer & chauffeur on demand' : locale === 'ru' ? 'Трансфер и водитель по запросу' : 'نقل وسائق عند الطلب', href: mobilityLink, tone: 'transfer', description: locale === 'fr' ? 'Réservation immédiate ou programmée · Istanbul & Turquie.' : locale === 'en' ? 'Immediate or scheduled booking · Istanbul & Turkey.' : locale === 'ru' ? 'Немедленное или запланированное бронирование · Стамбул и Турция.' : 'حجز فوري أو مسبق · إسطنبول وتركيا.' },
      { label: locale === 'fr' ? 'Conciergerie de Luxe' : locale === 'en' ? 'Luxury Concierge' : locale === 'ru' ? 'Luxury Concierge' : 'كونسيرج فاخر', href: linkTo('luxury-concierge'), description: locale === 'fr' ? 'Transport privé, palaces, yachts, jets, shopping.' : locale === 'en' ? 'Private transport, palaces, yachts, jets, shopping.' : locale === 'ru' ? 'Private transport, palaces, yachts, jets, shopping.' : 'نقل خاص، فنادق فاخرة، يخوت، طائرات وتسوق.' },
    ]},
    { label: labels.property, href: propertyTurkeyLink, items: [
      {
        label: locale === 'fr' ? 'Immobilier en Turquie' : locale === 'en' ? 'Property in Turkey' : locale === 'ru' ? 'Недвижимость в Турции' : 'العقارات في تركيا',
        href: propertyTurkeyLink,
        tone: 'property',
        description: locale === 'fr' ? 'Istanbul, Bodrum et Antalya : projets sélectionnés, résidence et investissement.' : locale === 'en' ? 'Istanbul, Bodrum and Antalya: selected projects, living and investment.' : locale === 'ru' ? 'Стамбул, Бодрум и Анталья: отобранные проекты для жизни и инвестиций.' : 'إسطنبول وبودروم وأنطاليا: مشاريع مختارة للسكن والاستثمار.',
      },
      {
        label: locale === 'fr' ? 'Investissement international' : locale === 'en' ? 'International investment' : locale === 'ru' ? 'Международные инвестиции' : 'الاستثمار الدولي',
        href: propertyInvestmentLink,
        tone: 'property',
        description: locale === 'fr' ? 'Opportunités sélectionnées hors de Turquie, programmes neufs et plans de paiement promoteurs.' : locale === 'en' ? 'Selected opportunities outside Turkey, new developments and developer payment plans.' : locale === 'ru' ? 'Отобранные возможности за пределами Турции, новостройки и планы оплаты от застройщиков.' : 'فرص مختارة خارج تركيا، مشاريع جديدة وخطط دفع من المطورين.',
      },
    ]},
    { label: labels.destinations, href: travelHomeHref, items: [
      {
        label: locale === 'fr' ? 'Rechercher un hôtel' : locale === 'en' ? 'Find a hotel' : locale === 'ru' ? 'Найти отель' : 'البحث عن فندق',
        href: hotelSearchHref,
        tone: 'hotel',
        description: locale === 'fr' ? 'Disponibilités en temps réel et réservation auprès de notre partenaire.'
          : locale === 'en' ? 'Live availability and booking through our partner.'
          : locale === 'ru' ? 'Поиск и бронирование у партнёра — интерфейс на английском.'
          : 'البحث والحجز عبر شريكنا — الواجهة باللغة الإنجليزية.',
      },
      {
        label: locale === 'fr' ? 'Explorer les destinations' : locale === 'en' ? 'Explore destinations' : locale === 'ru' ? 'Исследовать направления' : 'استكشف الوجهات',
        href: travelDestinationsHref,
        description: locale === 'fr' ? 'Découvrez nos destinations, hôtels sélectionnés et guides locaux.'
          : locale === 'en' ? 'Discover our destinations, curated hotels and local guides.'
          : locale === 'ru' ? 'Направления, отобранные отели и местные гиды.'
          : 'اكتشف وجهاتنا وفنادقنا المختارة وأدلتنا المحلية.',
      },
    ]},
    { label: labels.privateAccess, href: linkTo('private-club'), items: [
      { label: locale === 'fr' ? 'Cercle prive' : locale === 'en' ? 'Private Access Club' : locale === 'ru' ? 'Частный клуб' : 'النادي الخاص', href: linkTo('private-club') },
      { label: 'The Peninsula Istanbul', href: peninsulaLink, description: locale === 'fr' ? 'Adresse membre Bosphoras Premium a Istanbul.' : locale === 'en' ? 'Bosphoras Premium member address in Istanbul.' : locale === 'ru' ? 'Адрес участника Bosphoras Premium в Стамбуле.' : 'عنوان عضو Bosphoras Premium في إسطنبول.' },
      { label: locale === 'fr' ? 'Demande d adhesion' : locale === 'en' ? 'Membership application' : locale === 'ru' ? 'Заявка на членство' : 'طلب عضوية', href: linkTo('membership-application') },
      { label: locale === 'fr' ? 'Diagnostic prive' : locale === 'en' ? 'Private Assessment' : locale === 'ru' ? 'Частная консультация' : 'تقييم خاص', href: linkTo('private-assessment') },
    ]},
    { label: labels.information, href: linkTo('about'), items: [
      { label: locale === 'fr' ? 'A propos' : locale === 'en' ? 'About' : locale === 'ru' ? 'О нас' : 'من نحن', href: linkTo('about') },
      { label: locale === 'fr' ? 'Conformite & confiance' : locale === 'en' ? 'Compliance & Trust' : locale === 'ru' ? 'Комплаенс и доверие' : 'الامتثال والثقة', href: linkTo('compliance') },
      { label: locale === 'fr' ? 'Partenaires & reseau' : locale === 'en' ? 'Partners & Network' : locale === 'ru' ? 'Партнеры и сеть' : 'الشركاء والشبكة', href: linkTo('partners') },
      { label: locale === 'fr' ? 'Questions frequentes' : locale === 'en' ? 'FAQ' : locale === 'ru' ? 'Вопросы и ответы' : 'أسئلة شائعة', href: linkTo('faq') },
    ]},
  ];

  const getLocaleHref = (targetLocale: Locale) => {
    if (localizedPaths?.[targetLocale]) return localizedPaths[targetLocale] as string;
    const specialPath = specialLocalizedPaths.find((paths) => locales.some((loc) => normalizePath(paths[loc]) === normalizedCurrentPath));
    if (specialPath) return specialPath[targetLocale];
    const registryPage = allBosphorasSeoPages.find((page) => locales.some((loc) => normalizePath(page.slugs[loc]) === normalizedCurrentPath));
    if (registryPage) return registryPage.slugs[targetLocale];
    const guideSlug = getEquivalentHighPotentialSlug(normalizedCurrentPath, targetLocale);
    if (guideSlug) return getLocalePath(targetLocale, guideSlug);
    const pathWithoutLocale = normalizedCurrentPath.replace(/^\/(en|ru|ar)/, '') || '/';
    const matchedPage = pageSlugs.find((page) => locales.some((loc) => page.slugs[loc] === pathWithoutLocale));
    if (matchedPage) return getLocalePath(targetLocale, matchedPage.slugs[targetLocale]);
    return getLocalePath(targetLocale, pathWithoutLocale);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e7e8e7] bg-white shadow-[0_2px_12px_rgba(25,51,68,0.04)]">
        <div className="hidden" aria-hidden="true" />
        <div className="container-editorial flex h-[4.65rem] items-center justify-between gap-4 md:h-[4.85rem]">
          <Link href={getLocalePath(locale, '/')} className="group flex shrink-0 flex-col leading-none" aria-label="Bosphoras — Accueil"><span style={{ fontFamily: "var(--font-bosphoras-logo), sans-serif" }} className="text-sm font-normal uppercase tracking-[0.18em] text-[#193344] transition-colors duration-200 group-hover:text-[#202629] sm:text-base">Bosphoras</span><span className="hidden">{locale === 'fr' && 'Bureau Prive · Turquie'}{locale === 'en' && 'Private Office · Turkey'}{locale === 'ru' && 'Частный Офис · Турция'}{locale === 'ar' && 'مكتب خاص · تركيا'}</span></Link>
          <nav className="hidden min-w-0 items-center gap-3 xl:flex 2xl:gap-4" aria-label="Navigation principale">
            {groups.map((group) => (
              <div key={group.label} className="group relative py-6">
                <Link href={group.href} className="inline-flex items-center gap-1.5 whitespace-nowrap text-[0.86rem] font-normal tracking-[-0.01em] text-[#202629] transition-colors duration-200 hover:text-[#193344]">
                  {group.label}<span className="text-[#193344]">▾</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-[400px] translate-y-2 border border-[#e5e8ea] bg-white p-3 opacity-0 shadow-[0_16px_32px_rgba(25,51,68,0.09)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      rel={item.tone === 'hotel' ? 'sponsored' : undefined}
                      className="mb-1 block border-b border-[#e8eaeb] px-4 py-3.5 transition last:mb-0 hover:bg-[#f5f5f3]"
                    >
                      <span className="block text-[0.82rem] font-medium tracking-[-0.01em] text-[#202629]">{item.label}</span>
                      {item.description && <span className="mt-1.5 block text-[0.79rem] font-medium leading-5 text-[#58636b]">{item.description}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <button onClick={() => setSearchOpen(true)} className="inline-flex h-10 w-10 items-center justify-center border border-[#e3e6e8] text-[#202629] transition-colors duration-200 hover:border-[#193344] hover:text-[#193344]" aria-label={searchLabel}><Search size={15} /></button><Link href="/connexion" className="inline-flex h-10 w-10 items-center justify-center border border-[#e3e6e8] text-[#202629] transition-colors duration-200 hover:border-[#193344] hover:text-[#193344]" aria-label={locale === 'fr' ? 'Espace partenaire' : locale === 'en' ? 'Partner portal' : locale === 'ru' ? 'Партнёрский кабинет' : 'بوابة الشركاء'} title={locale === 'fr' ? 'Espace partenaire' : locale === 'en' ? 'Partner portal' : locale === 'ru' ? 'Партнёрский кабинет' : 'بوابة الشركاء'}><KeyRound size={16} /></Link>
            <div className="relative"><button onClick={() => setLangOpen(!langOpen)} className="flex h-10 items-center gap-2 border border-[#e3e6e8] px-3 text-xs font-medium text-[#202629] transition-colors duration-200 hover:border-[#193344] hover:text-[#193344]" aria-expanded={langOpen} aria-haspopup="listbox"><Globe2 size={15} /><span>{locale.toUpperCase()}</span><span className="text-[#193344]">▾</span></button>{langOpen && <div className="absolute right-0 top-full z-50 mt-4 min-w-[150px] border border-[#e5e8ea] bg-white shadow-[0_16px_32px_rgba(25,51,68,0.09)]" role="listbox">{locales.map((loc) => <Link key={loc} href={getLocaleHref(loc)} onClick={() => setLangOpen(false)} className={`block px-4 py-3 text-xs uppercase tracking-[0.12em] transition-colors duration-150 hover:bg-[#f5f5f3] ${loc === locale ? 'font-semibold text-[#193344]' : 'text-[#53616b]'}`} role="option" aria-selected={loc === locale} lang={loc}>{localeNames[loc]}</Link>)}</div>}</div>
            <Link href={linkTo('private-assessment')} data-cta-id="header_assessment" className="whitespace-nowrap border border-[#193344] bg-[#193344] px-4 py-3 text-[0.68rem] font-medium tracking-normal text-white transition-colors duration-300 hover:bg-[#25485e]">{compactAssessmentLabel}</Link>
          </div>
          <div className="flex items-center gap-2 xl:hidden"><Link href="/connexion" className="p-2 text-[#202629]" aria-label={locale === 'fr' ? 'Espace partenaire' : locale === 'en' ? 'Partner portal' : locale === 'ru' ? 'Партнёрский кабинет' : 'بوابة الشركاء'}><KeyRound size={20} /></Link><button className="p-2 text-[#202629]" onClick={() => setSearchOpen(true)} aria-label={searchLabel}><Search size={21} /></button><button className="p-2 text-[#202629]" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
        {menuOpen && <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#e7e8e7] bg-white px-5 py-5 xl:hidden">
          <div className="flex flex-col gap-3">
            {groups.map((group) => <div key={group.label} className="border-b border-[#e5e8ea] pb-3">
              <button onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-[#202629]">
                {group.label}<span className="text-[#193344]">▾</span>
              </button>
              {openGroup === group.label && <div className="mt-2 space-y-1 pl-2">
                <Link href={group.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-[#193344]">{group.href === travelHomeHref
                    ? locale === 'fr' ? 'Découvrir Luxury Stays' : locale === 'en' ? 'Discover Luxury Stays' : locale === 'ru' ? 'Открыть Luxury Stays' : 'اكتشف Luxury Stays'
                    : locale === 'fr' ? 'Voir tout' : locale === 'en' ? 'View all' : locale === 'ru' ? 'Смотреть всё' : 'عرض الكل'}</Link>
                {group.items.map((item) => <Link
                  key={item.href}
                  href={item.href}
                  rel={item.tone === 'hotel' ? 'sponsored' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block border-l-2 border-transparent px-3 py-2.5 text-sm text-[#202629] transition hover:border-[#193344] hover:bg-[#f5f5f3]"
                >{item.label}</Link>)}
              </div>}
            </div>)}
            <div className="mt-3 flex flex-wrap gap-3 border-t border-[#e7e8e7] pt-5">{locales.map((loc) => <Link key={loc} href={getLocaleHref(loc)} onClick={() => setMenuOpen(false)} className={`text-xs uppercase tracking-[0.12em] ${loc === locale ? 'font-semibold text-[#193344]' : 'text-[#53616b]'}`} lang={loc}>{localeNames[loc]}</Link>)}</div>
            <Link href={linkTo('private-assessment')} data-cta-id="header_assessment" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex justify-center border border-[#193344] bg-[#193344] px-6 py-4 text-xs font-medium tracking-normal text-white">{t(locale, 'nav.assessment')}</Link>
          </div>
        </div>}
      </header>
      {searchOpen && <SearchOverlay locale={locale} open={searchOpen} onClose={() => setSearchOpen(false)} />}
    </>
  );
}
