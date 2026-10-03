// @ts-nocheck
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Ruler,
  ShieldAlert,
  WalletCards,
  Wrench,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';
import {
  formatPropertyPrice,
  getPropertyPath,
  globalPropertyHubPaths,
  propertyHubPaths,
  type PropertyListing,
} from '@/data/propertyDesk';
import { getLocalePath, siteUrl } from '@/lib/routes';
import { breadcrumbSchema, organizationSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { PropertyGallery } from '@/components/PropertyGallery';
import { PropertyLocationMap } from '@/components/PropertyLocationMap';

interface PropertyDetailPageProps {
  locale: Locale;
  property: PropertyListing;
  globalMode?: boolean;
}

function labels(locale: Locale, globalMode = false) {
  const back = globalMode
    ? locale === 'fr' ? 'Investissement immobilier international'
      : locale === 'en' ? 'International property investment'
      : locale === 'ru' ? 'Зарубежная недвижимость'
      : 'الاستثمار العقاري الدولي'
    : locale === 'fr' ? 'Immobilier en Turquie'
      : locale === 'en' ? 'Property in Turkey'
      : locale === 'ru' ? 'Недвижимость в Турции'
      : 'عقارات تركيا';

  if (locale === 'fr') return {
    back,
    investmentMemo: 'FICHE INVESTISSEMENT',
    price: 'Prix affiché',
    entry: 'Capital aujourd’hui',
    location: 'Localisation',
    surface: 'Surface',
    bedrooms: 'Chambres',
    bathrooms: 'Salles de bain',
    delivery: 'Livraison',
    developer: 'Promoteur',
    reference: 'Référence',
    overview: 'Présentation du bien',
    why: 'Pourquoi Bosphoras le retient',
    technical: 'Lecture technique',
    watch: 'Points de vigilance',
    financing: 'Conditions promoteur',
    paymentPlan: 'Échéancier',
    interestRate: 'Taux promoteur',
    cashPrice: 'Prix comptant',
    installmentPrice: 'Prix avec échéancier',
    planSurcharge: 'Surcoût de l’échéancier',
    cashDiscount: 'Remise comptant',
    noInterest: '0 %',
    notSpecified: 'Non communiqué',
    interestNote: '(taux annoncé par le promoteur ; à confirmer dans le contrat et à distinguer d’un taux bancaire)',
    noInterestNote: '(échelonnement annoncé sans intérêt ; conditions à reconfirmer avant signature)',
    cashPriceNote: '(prix si règlement comptant selon les conditions du promoteur)',
    installmentPriceNote: '(prix total applicable lorsque le paiement est échelonné)',
    verified: 'Conditions vérifiées',
    request: 'Demander le dossier complet',
    visit: 'Organiser une visite privée',
    available: 'Disponible',
    reserved: 'Réservé',
    sold: 'Vendu',
    private: 'Privé',
    disclaimer: 'Les prix, disponibilités, taux, remises et échéanciers peuvent évoluer. Toute condition financière doit être reconfirmée auprès du promoteur ou du partenaire autorisé avant réservation, signature ou transfert de fonds.',
  };
  if (locale === 'ru') return {
    back,
    investmentMemo: 'ИНВЕСТИЦИОННАЯ КАРТОЧКА',
    price: 'Цена',
    entry: 'Капитал сегодня',
    location: 'Локация',
    surface: 'Площадь',
    bedrooms: 'Спальни',
    bathrooms: 'Ванные',
    delivery: 'Сдача',
    developer: 'Застройщик',
    reference: 'Референс',
    overview: 'Об объекте',
    why: 'Почему Bosphoras выбрал объект',
    technical: 'Технический анализ',
    watch: 'На что обратить внимание',
    financing: 'Условия застройщика',
    paymentPlan: 'График платежей',
    interestRate: 'Ставка застройщика',
    cashPrice: 'Цена при полной оплате',
    installmentPrice: 'Цена в рассрочку',
    planSurcharge: 'Удорожание рассрочки',
    cashDiscount: 'Скидка за полную оплату',
    noInterest: '0 %',
    notSpecified: 'Не указано',
    interestNote: '(ставка, заявленная застройщиком; подтвердить в договоре и не путать с банковской ставкой)',
    noInterestNote: '(заявленная беспроцентная рассрочка; условия необходимо подтвердить до подписания)',
    cashPriceNote: '(цена при полной оплате по условиям застройщика)',
    installmentPriceNote: '(общая цена при использовании рассрочки)',
    verified: 'Условия проверены',
    request: 'Получить полный пакет',
    visit: 'Организовать частный просмотр',
    available: 'Доступно', reserved: 'Зарезервировано', sold: 'Продано', private: 'Частное',
    disclaimer: 'Цены, наличие, ставки, скидки и графики платежей могут меняться. Все финансовые условия необходимо повторно подтвердить у застройщика или уполномоченного партнёра до бронирования, подписания или перевода средств.',
  };
  if (locale === 'ar') return {
    back,
    investmentMemo: 'بطاقة استثمار',
    price: 'السعر المعلن',
    entry: 'رأس المال اليوم',
    location: 'الموقع',
    surface: 'المساحة',
    bedrooms: 'غرف النوم',
    bathrooms: 'الحمامات',
    delivery: 'التسليم',
    developer: 'المطور',
    reference: 'المرجع',
    overview: 'عن العقار',
    why: 'لماذا اختاره Bosphoras',
    technical: 'التحليل الفني',
    watch: 'نقاط يجب الانتباه لها',
    financing: 'شروط المطور',
    paymentPlan: 'خطة الدفع',
    interestRate: 'معدل المطور',
    cashPrice: 'السعر النقدي',
    installmentPrice: 'سعر التقسيط',
    planSurcharge: 'تكلفة إضافية للتقسيط',
    cashDiscount: 'خصم الدفع النقدي',
    noInterest: '0٪',
    notSpecified: 'غير معلن',
    interestNote: '(المعدل المعلن من المطور؛ يجب تأكيده في العقد وتمييزه عن الفائدة البنكية)',
    noInterestNote: '(تقسيط معلن بدون فائدة؛ يجب إعادة تأكيد الشروط قبل التوقيع)',
    cashPriceNote: '(السعر عند الدفع النقدي وفق شروط المطور)',
    installmentPriceNote: '(السعر الإجمالي عند استخدام خطة التقسيط)',
    verified: 'تم التحقق من الشروط',
    request: 'طلب الملف الكامل',
    visit: 'تنظيم زيارة خاصة',
    available: 'متاح', reserved: 'محجوز', sold: 'مباع', private: 'خاص',
    disclaimer: 'قد تتغير الأسعار والتوافر والمعدلات والخصومات وخطط الدفع. يجب إعادة تأكيد كل الشروط المالية مع المطور أو الشريك المخول قبل الحجز أو التوقيع أو تحويل الأموال.',
  };
  return {
    back,
    investmentMemo: 'INVESTMENT MEMO',
    price: 'Asking price',
    entry: 'Capital today',
    location: 'Location',
    surface: 'Surface',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    delivery: 'Delivery',
    developer: 'Developer',
    reference: 'Reference',
    overview: 'Property overview',
    why: 'Why Bosphoras selected it',
    technical: 'Technical reading',
    watch: 'Points to watch',
    financing: 'Developer terms',
    paymentPlan: 'Payment schedule',
    interestRate: 'Developer rate',
    cashPrice: 'Cash price',
    installmentPrice: 'Instalment price',
    planSurcharge: 'Instalment premium',
    cashDiscount: 'Cash discount',
    noInterest: '0%',
    notSpecified: 'Not disclosed',
    interestNote: '(rate quoted by the developer; confirm it in the contract and distinguish it from bank financing)',
    noInterestNote: '(interest-free instalments as quoted; terms must be reconfirmed before signing)',
    cashPriceNote: '(price for cash payment under the developer terms)',
    installmentPriceNote: '(total price when the instalment plan is used)',
    verified: 'Terms checked',
    request: 'Request the full file',
    visit: 'Arrange a private viewing',
    available: 'Available', reserved: 'Reserved', sold: 'Sold', private: 'Private',
    disclaimer: 'Prices, availability, rates, discounts and payment schedules may change. All financial terms must be reconfirmed with the developer or authorised partner before reservation, signature or transfer of funds.',
  };
}

function money(value: number | undefined, currency: string, locale: Locale) {
  if (value === undefined || value === null || !Number.isFinite(Number(value))) return '—';
  return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function localized(value: any, locale: Locale) {
  return value?.[locale] || value?.fr || value?.en || '';
}

function cityLabel(property: PropertyListing) {
  return property.cityName || property.city;
}

function collectionLabel(collection: PropertyListing['collection'], locale: Locale) {
  const map = {
    'selected-investment': { fr: 'Selected Investment', en: 'Selected Investment', ru: 'Selected Investment', ar: 'Selected Investment' },
    signature: { fr: 'Signature Collection', en: 'Signature Collection', ru: 'Signature Collection', ar: 'Signature Collection' },
    private: { fr: 'Private Opportunity', en: 'Private Opportunity', ru: 'Private Opportunity', ar: 'Private Opportunity' },
  } as const;
  return map[collection][locale];
}

function statusLabel(status: PropertyListing['status'], c: any) {
  return c[status] || status;
}

export function PropertyDetailPage({ locale, property, globalMode = false }: PropertyDetailPageProps) {
  const c = labels(locale, globalMode);
  const hubBase = globalMode ? globalPropertyHubPaths[locale] : propertyHubPaths[locale];
  const fullPath = getLocalePath(locale, getPropertyPath(locale, property, globalMode));
  const hubPath = getLocalePath(locale, hubBase);
  const assessmentPath =
    locale === 'fr'
      ? '/diagnostic-prive'
      : locale === 'en'
      ? '/en/private-assessment'
      : locale === 'ru'
      ? '/ru/chastnaya-konsultatsiya'
      : '/ar/تقييم-خاص';

  const localizedPaths = Object.fromEntries(
    (['fr', 'en', 'ru', 'ar'] as const).map((targetLocale) => [
      targetLocale,
      getLocalePath(targetLocale, getPropertyPath(targetLocale, property, globalMode)),
    ])
  ) as Record<Locale, string>;

  const propertyTitle = localized(property.title, locale);
  const propertyLocation = [property.district, cityLabel(property), property.countryName].filter(Boolean).join(', ');
  const requestHref = `${assessmentPath}?subject=property&property=${encodeURIComponent(property.id)}&property_title=${encodeURIComponent(propertyTitle)}&property_location=${encodeURIComponent(propertyLocation)}`;
  const visitHref = `${assessmentPath}?subject=private-viewing&property=${encodeURIComponent(property.id)}&property_title=${encodeURIComponent(propertyTitle)}&property_location=${encodeURIComponent(propertyLocation)}`;

  const images = (property.images?.length ? property.images : [property.heroImage].filter(Boolean)) as string[];
  const paymentPlanVisible = property.paymentPlanEnabled !== false && Boolean(property.paymentPlan?.length);
  const hasDeveloperTerms =
    property.paymentPlanEnabled !== false &&
    (paymentPlanVisible ||
      property.paymentInterestMode === 'interest_free' ||
      property.paymentInterestMode === 'interest_bearing' ||
      property.cashDiscountPct ||
      property.cashPrice ||
      property.installmentPrice);

  const installmentPremiumPct =
    property.cashPrice && property.installmentPrice && property.cashPrice > 0
      ? ((property.installmentPrice - property.cashPrice) / property.cashPrice) * 100
      : null;

  const verifiedLabel = property.verifiedAt
    ? new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
      }).format(new Date(property.verifiedAt))
    : null;

  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    url: `${siteUrl}${fullPath}`,
    priceCurrency: property.currency,
    ...(property.totalPrice && !property.priceOnRequest ? { price: property.totalPrice } : {}),
    availability:
      property.status === 'available'
        ? 'https://schema.org/InStock'
        : property.status === 'reserved'
        ? 'https://schema.org/LimitedAvailability'
        : 'https://schema.org/OutOfStock',
    itemOffered: {
      '@type': property.propertyType === 'villa' ? 'House' : property.propertyType === 'commercial' ? 'Place' : 'Apartment',
      name: property.title[locale],
      description: property.summary[locale],
      address: {
        '@type': 'PostalAddress',
        addressLocality: `${property.district}, ${cityLabel(property)}`,
        addressCountry: property.countryCode || property.countryName,
      },
      ...(property.surfaceM2 ? { floorSize: { '@type': 'QuantitativeValue', value: property.surfaceM2, unitCode: 'MTK' } } : {}),
      ...(property.bedrooms ? { numberOfRooms: property.bedrooms } : {}),
      ...(images.length ? { image: images } : {}),
    },
    offeredBy: { '@id': `${siteUrl}/#organization` },
  };

  const facts = [
    { icon: MapPin, label: c.location, value: [property.district, cityLabel(property), property.countryName].filter(Boolean).join(', ') },
    property.surfaceM2 ? { icon: Ruler, label: c.surface, value: `${property.surfaceM2} m²` } : null,
    property.bedrooms !== undefined ? { icon: BedDouble, label: c.bedrooms, value: String(property.bedrooms) } : null,
    property.bathrooms !== undefined ? { icon: Bath, label: c.bathrooms, value: String(property.bathrooms) } : null,
    property.delivery ? { icon: Clock3, label: c.delivery, value: localized(property.delivery, locale) } : null,
    property.developer ? { icon: Building2, label: c.developer, value: property.developer } : null,
  ].filter(Boolean);

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f5f2eb] text-[#1a201e] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <Header locale={locale} currentPath={fullPath} localizedPaths={localizedPaths} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={propertySchema} />
      <StructuredData data={breadcrumbSchema([{ name: c.back, url: `${siteUrl}${hubPath}` }, { name: property.title[locale], url: `${siteUrl}${fullPath}` }])} />

      <section className="border-b border-[#d9d4ca] bg-[#fbfaf6] px-4 pb-5 pt-24 sm:px-6 sm:pb-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Link href={hubPath} className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#456d60]">
            <ArrowLeft size={14} /> {c.back}
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#e6e1d8] pt-4">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#456d60]">{collectionLabel(property.collection, locale)}</span>
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#7c715f]">{statusLabel(property.status, c)}</span>
            <span className="text-[0.68rem] text-[#8a867e]">{c.reference}: {property.id}</span>
          </div>
        </div>
      </section>

      <section className="px-0 py-0 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-[1280px] min-w-0 gap-0 bg-[#fbfaf6] sm:border sm:border-[#ded9cf] lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,.72fr)]">
          <div className="min-w-0 p-0 sm:p-4 lg:p-5">
            <PropertyGallery
              images={images}
              title={propertyTitle}
              summary={localized(property.summary, locale)}
              location={propertyLocation}
            />
          </div>

          <aside className="border-t border-[#ded9cf] px-5 py-7 sm:px-7 lg:border-l lg:border-t-0 lg:px-8 lg:py-9">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#5c7f72]">{c.investmentMemo}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.15rem,4vw,4.15rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#161c1a]">{propertyTitle}</h1>
            <div className="mt-5 flex items-start gap-2 text-sm leading-6 text-[#656b67]"><MapPin size={16} className="mt-1 shrink-0 text-[#5c7f72]"/><span>{propertyLocation}</span></div>

            <div className="mt-8 border-y border-[#ded9cf]">
              <div className="grid grid-cols-2 divide-x divide-[#ded9cf]">
                <div className="py-5 pr-4">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#8b877f]">{c.price}</span>
                  <strong className="mt-2 block text-[1.45rem] font-semibold tracking-[-0.03em] text-[#1b221f] sm:text-[1.7rem]">{formatPropertyPrice(property, locale)}</strong>
                </div>
                <div className="py-5 pl-4">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#8b877f]">{c.entry}</span>
                  <strong className="mt-2 block text-[1.45rem] font-semibold tracking-[-0.03em] text-[#456d60] sm:text-[1.7rem]">{property.entryCapital ? money(property.entryCapital, property.currency, locale) : '—'}</strong>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-[#ded9cf]">
              {facts.slice(1,5).map((fact:any,index:number)=>{
                const Icon=fact.icon;
                return <div key={fact.label} className={`min-h-[94px] py-4 ${index%2===0?'pr-4 border-r border-[#ded9cf]':'pl-4'} ${index<2?'border-b border-[#ded9cf]':''}`}>
                  <Icon size={15} className="text-[#5c7f72]"/>
                  <span className="mt-3 block text-[0.6rem] font-semibold uppercase tracking-[0.11em] text-[#8b877f]">{fact.label}</span>
                  <strong className="mt-1 block text-sm font-medium leading-5 text-[#252c29]">{fact.value}</strong>
                </div>;
              })}
            </div>

            <div className="mt-7 grid gap-2.5">
              <Link href={requestHref} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 bg-[#244b3f] px-5 text-sm font-semibold text-white transition hover:bg-[#1c3c33]">
                {c.request}<ArrowRight size={16}/>
              </Link>
              <Link href={visitHref} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 border border-[#244b3f] bg-transparent px-5 text-sm font-semibold text-[#244b3f] transition hover:bg-[#eef2ef]">
                <CalendarDays size={16}/>{c.visit}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-16">
          <div className="min-w-0">
            <section className="border-t border-[#cbc5ba] pt-7">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#5c7f72]">{c.overview}</p>
              <div className="mt-6 max-w-3xl whitespace-pre-line font-serif text-[1.35rem] leading-[1.65] text-[#343a37] sm:text-[1.5rem]">{localized(property.description, locale)}</div>
            </section>

            <PropertyLocationMap locale={locale} location={propertyLocation} />

            {property.strengths?.length ? <section className="mt-14 border-t border-[#cbc5ba] pt-7">
              <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                <div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#5c7f72]">{c.why}</p></div>
                <div className="divide-y divide-[#ddd8ce] border-y border-[#ddd8ce]">
                  {property.strengths.map((item,index)=><div key={index} className="grid grid-cols-[34px_1fr] gap-4 py-5">
                    <span className="font-serif text-xl text-[#5c7f72]">{String(index+1).padStart(2,'0')}</span>
                    <p className="text-sm leading-7 text-[#525955]">{localized(item,locale)}</p>
                  </div>)}
                </div>
              </div>
            </section>:null}

            {(property.technicalNotes?.length||property.watchpoints?.length)?<section className="mt-14 grid gap-8 border-t border-[#cbc5ba] pt-7 md:grid-cols-2">
              {property.technicalNotes?.length?<div>
                <div className="flex items-center gap-2"><Wrench size={16} className="text-[#5c7f72]"/><h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#4c5c56]">{c.technical}</h2></div>
                <div className="mt-5 divide-y divide-[#ddd8ce] border-y border-[#ddd8ce]">{property.technicalNotes.map((item,index)=><p key={index} className="py-4 text-sm leading-7 text-[#555c58]">{localized(item,locale)}</p>)}</div>
              </div>:null}
              {property.watchpoints?.length?<div>
                <div className="flex items-center gap-2"><ShieldAlert size={16} className="text-[#967042]"/><h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#80643f]">{c.watch}</h2></div>
                <div className="mt-5 divide-y divide-[#dfd5c6] border-y border-[#dfd5c6]">{property.watchpoints.map((item,index)=><p key={index} className="py-4 text-sm leading-7 text-[#625b52]">{localized(item,locale)}</p>)}</div>
              </div>:null}
            </section>:null}

            <section className="mt-14 border-t border-[#cbc5ba] pt-7">
              <div className="grid gap-px bg-[#d8d3c9] sm:grid-cols-2 lg:grid-cols-3">
                {facts.map((fact:any)=>{
                  const Icon=fact.icon;
                  return <div key={fact.label} className="bg-[#f5f2eb] p-5"><Icon size={16} className="text-[#5c7f72]"/><span className="mt-4 block text-[0.61rem] font-semibold uppercase tracking-[0.11em] text-[#858178]">{fact.label}</span><strong className="mt-1 block text-base font-medium text-[#232a27]">{fact.value}</strong></div>;
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {hasDeveloperTerms ? <section className="bg-[#17372e] text-white">
              <div className="border-b border-white/15 px-6 py-6">
                <div className="flex items-center gap-3"><WalletCards size={18} className="text-[#cfbea0]"/><h2 className="font-serif text-2xl">{c.financing}</h2></div>
                {verifiedLabel?<p className="mt-2 text-xs text-white/55">{c.verified}: {verifiedLabel}</p>:null}
              </div>

              <div className="grid grid-cols-2 border-b border-white/15">
                {property.paymentInterestMode==='interest_free'?<FinancialMetric label={c.interestRate} value={c.noInterest} note={c.noInterestNote} accent/>:null}
                {property.paymentInterestMode==='interest_bearing'?<FinancialMetric label={c.interestRate} value={property.paymentInterestRate!==undefined?`${property.paymentInterestRate}%`:c.notSpecified} note={c.interestNote} accent/>:null}
                {property.cashPrice?<FinancialMetric label={c.cashPrice} value={money(property.cashPrice,property.currency,locale)} note={c.cashPriceNote}/>:null}
                {property.installmentPrice?<FinancialMetric label={c.installmentPrice} value={money(property.installmentPrice,property.currency,locale)} note={c.installmentPriceNote}/>:null}
                {installmentPremiumPct!==null&&Math.abs(installmentPremiumPct)>0.001?<FinancialMetric label={c.planSurcharge} value={`${installmentPremiumPct.toFixed(1)}%`} note={c.interestNote}/>:null}
                {property.cashDiscountPct?<FinancialMetric label={c.cashDiscount} value={`-${property.cashDiscountPct}%`} note={c.cashPriceNote}/>:null}
              </div>

              {localized(property.paymentNotes,locale)?<div className="border-b border-white/15 px-6 py-5 text-sm leading-6 text-white/70">{localized(property.paymentNotes,locale)}</div>:null}

              {paymentPlanVisible?<div className="px-6 py-6">
                <div className="flex items-center justify-between gap-4"><h3 className="text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-[#d9cbb4]">{c.paymentPlan}</h3><BadgePercent size={17} className="text-[#d9cbb4]"/></div>
                <div className="mt-4 divide-y divide-white/12 border-y border-white/12">
                  {property.paymentPlan!.map((step,index)=><div key={index} className="grid grid-cols-[30px_1fr_auto] gap-3 py-4">
                    <span className="font-serif text-lg text-[#cdbb9b]">{String(index+1).padStart(2,'0')}</span>
                    <div><strong className="block text-sm font-medium text-white">{localized(step.label,locale)}</strong><span className="mt-1 block text-xs leading-5 text-white/50">{localized(step.due,locale)}</span></div>
                    <strong className="text-sm font-semibold text-[#d8c6a7]">{step.percentage!==undefined?`${step.percentage}%`:step.amount!==undefined?money(step.amount,property.currency,locale):'—'}</strong>
                  </div>)}
                </div>
              </div>:null}
            </section>:null}

            <section className="border border-[#d5cfc4] bg-[#fbfaf6] p-6">
              <p className="text-xs leading-6 text-[#6d706b]">{c.disclaimer}</p>
              <Link href={requestHref} className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#244b3f] px-5 text-sm font-semibold text-white">{c.request}<ArrowRight size={15}/></Link>
              <Link href={visitHref} className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#244b3f] px-5 text-sm font-semibold text-[#244b3f]"><CalendarDays size={15}/>{c.visit}</Link>
            </section>
          </aside>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

function FinancialMetric({ label, value, note, accent = false }: { label: string; value: string; note?: string; accent?: boolean }) {
  return <div className={`min-h-[126px] border-r border-t border-white/12 p-5 last:border-r-0 ${accent?'bg-white/[0.05]':''}`}>
    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.11em] text-white/45">{label}</span>
    <strong className={`mt-2 block text-xl font-semibold ${accent?'text-[#dac8a8]':'text-white'}`}>{value}</strong>
    {note?<span className="mt-2 block text-[0.64rem] leading-5 text-white/45">{note}</span>:null}
  </div>;
}
