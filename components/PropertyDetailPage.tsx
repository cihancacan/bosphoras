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
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f2f5f4] text-[#12221f] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <Header locale={locale} currentPath={fullPath} localizedPaths={localizedPaths} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={propertySchema} />
      <StructuredData data={breadcrumbSchema([{ name: c.back, url: `${siteUrl}${hubPath}` }, { name: property.title[locale], url: `${siteUrl}${fullPath}` }])} />

      <section className="border-b border-[#d7dfdc] bg-white px-5 pb-8 pt-28 md:px-8 md:pb-10 md:pt-32">
        <div className="mx-auto max-w-[1540px]">
          <Link href={hubPath} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#315d7c]">
            <ArrowLeft size={14} /> {c.back}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#10231e] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white">{collectionLabel(property.collection, locale)}</span>
            <span className="rounded-full border border-[#cbd7d2] bg-[#f7f9f8] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#2f6d59]">{statusLabel(property.status, c)}</span>
            <span className="text-xs text-[#72807b]">{c.reference}: {property.id}</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f4] px-5 py-7 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-[minmax(0,1.5fr)_410px] lg:items-start">
          <PropertyGallery
            images={images}
            title={propertyTitle}
            summary={localized(property.summary, locale)}
            location={propertyLocation}
          />

          <aside className="rounded-[1.65rem] border border-[#d7dfdc] bg-[#fffdfa] p-6 shadow-[0_22px_70px_rgba(20,40,34,.08)] md:p-7 lg:sticky lg:top-28">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.18em] text-[#8a6a45]">{c.investmentMemo}</p>
              <span className="rounded-full border border-[#b9cec5] bg-[#edf5f1] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#2f6d59]">{statusLabel(property.status, c)}</span>
            </div>
            <h1 className="mt-5 text-[clamp(2rem,3.2vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#12221f]">{propertyTitle}</h1>
            <p className="mt-4 text-sm leading-7 text-[#65756f]">{propertyLocation}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-xl border border-[#dde4e1] bg-white p-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#7b8985]">{c.price}</span>
                <strong className="mt-2 block text-xl font-semibold text-[#12221f]">{formatPropertyPrice(property, locale)}</strong>
              </div>
              <div className="rounded-xl border border-[#dfd0ad] bg-[#f7f0e1] p-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#7b6847]">{c.entry}</span>
                <strong className="mt-2 block text-xl font-semibold text-[#5f4c2f]">{property.entryCapital ? money(property.entryCapital, property.currency, locale) : '—'}</strong>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {facts.slice(0, 4).map((fact: any) => {
                const Icon = fact.icon;
                return <div key={fact.label} className="rounded-xl border border-[#e2e8e5] bg-[#f8faf9] p-4"><Icon size={15} className="text-[#2f6d59]" /><span className="mt-3 block text-[0.59rem] font-semibold uppercase tracking-[0.1em] text-[#7b8985]">{fact.label}</span><strong className="mt-1 block text-sm font-medium text-[#12221f]">{fact.value}</strong></div>;
              })}
            </div>

            <div className="mt-7 border-t border-[#e0e6e3] pt-6">
              <Link href={requestHref} className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-[#173d34] px-5 text-sm font-semibold text-white transition hover:bg-[#205044]">
                {c.request}<ArrowRight size={16}/>
              </Link>
              <Link href={visitHref} className="mt-3 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-[#b9c9c3] bg-white px-5 text-sm font-semibold text-[#173d34] transition hover:bg-[#f1f6f3]">
                <CalendarDays size={16}/>{c.visit}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-7 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-[#d7dfdc] bg-white p-6 md:p-8">
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-[#8a6a45]">{c.overview}</p>
              <div className="mt-5 whitespace-pre-line text-[0.98rem] leading-8 text-[#566761]">{localized(property.description, locale)}</div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {facts.map((fact: any) => {
                const Icon = fact.icon;
                return <article key={fact.label} className="rounded-xl border border-[#d7dfdc] bg-white p-5"><Icon size={18} className="text-[#2f6d59]" /><span className="mt-4 block text-[0.63rem] font-semibold uppercase tracking-[0.1em] text-[#7b8985]">{fact.label}</span><strong className="mt-1 block text-base font-semibold text-[#12221f]">{fact.value}</strong></article>;
              })}
            </section>

            {property.strengths?.length ? <section className="rounded-2xl border border-[#d7dfdc] bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.025em]">{c.why}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {property.strengths.map((item, index) => <div key={index} className="flex gap-3 rounded-xl bg-[#f5f8f7] p-4"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#2f6d59]" /><p className="text-sm leading-6 text-[#566761]">{localized(item, locale)}</p></div>)}
              </div>
            </section> : null}

            {property.technicalNotes?.length ? <section className="rounded-2xl border border-[#cfdcd6] bg-[#eef5f1] p-6 text-[#12221f] md:p-8">
              <div className="flex items-center gap-3"><Wrench size={20} className="text-[#2f6d59]" /><h2 className="text-2xl font-semibold tracking-[-0.025em]">{c.technical}</h2></div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {property.technicalNotes.map((item, index) => <div key={index} className="border-l border-[#7ca596] pl-4 text-sm leading-7 text-[#566761]">{localized(item, locale)}</div>)}
              </div>
            </section> : null}

            {property.watchpoints?.length ? <section className="rounded-2xl border border-[#d6c59f] bg-[#fffaf0] p-6 md:p-8">
              <div className="flex items-center gap-3"><ShieldAlert size={20} className="text-[#9a6a28]" /><h2 className="text-2xl font-semibold tracking-[-0.025em]">{c.watch}</h2></div>
              <div className="mt-5 space-y-3">
                {property.watchpoints.map((item, index) => <p key={index} className="text-sm leading-7 text-[#645b4d]">• {localized(item, locale)}</p>)}
              </div>
            </section> : null}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            {hasDeveloperTerms ? <section className="overflow-hidden rounded-2xl border border-[#cbd7d2] bg-white shadow-[0_20px_60px_rgba(25,55,45,.08)]">
              <div className="bg-[#10231e] p-6 text-white">
                <div className="flex items-center gap-3"><WalletCards size={20} className="text-[#c9aa7a]" /><h2 className="text-xl font-semibold">{c.financing}</h2></div>
                {verifiedLabel ? <p className="mt-2 text-xs text-[#9fb0aa]">{c.verified}: {verifiedLabel}</p> : null}
              </div>

              <div className="grid gap-px bg-[#e0e7e4] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {property.paymentInterestMode === 'interest_free' ? <FinancialMetric label={c.interestRate} value={c.noInterest} note={c.noInterestNote} accent /> : null}
                {property.paymentInterestMode === 'interest_bearing' ? <FinancialMetric label={c.interestRate} value={property.paymentInterestRate !== undefined ? `${property.paymentInterestRate}%` : c.notSpecified} note={c.interestNote} accent /> : null}
                {property.cashPrice ? <FinancialMetric label={c.cashPrice} value={money(property.cashPrice, property.currency, locale)} note={c.cashPriceNote} /> : null}
                {property.installmentPrice ? <FinancialMetric label={c.installmentPrice} value={money(property.installmentPrice, property.currency, locale)} note={c.installmentPriceNote} /> : null}
                {installmentPremiumPct !== null && Math.abs(installmentPremiumPct) > 0.001 ? <FinancialMetric label={c.planSurcharge} value={`${installmentPremiumPct.toFixed(1)}%`} note={c.interestNote} /> : null}
                {property.cashDiscountPct ? <FinancialMetric label={c.cashDiscount} value={`-${property.cashDiscountPct}%`} note={c.cashPriceNote} /> : null}
              </div>

              {localized(property.paymentNotes, locale) ? <div className="border-t border-[#e0e7e4] bg-[#f7f9f8] px-5 py-4 text-sm leading-6 text-[#5f706a]">{localized(property.paymentNotes, locale)}</div> : null}

              {paymentPlanVisible ? <div className="p-6">
                <div className="flex items-center justify-between gap-4"><h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52635d]">{c.paymentPlan}</h3><BadgePercent size={18} className="text-[#8a6a45]" /></div>
                <div className="mt-5 space-y-0">
                  {property.paymentPlan!.map((step, index) => <div key={index} className="relative grid grid-cols-[24px_1fr_auto] gap-3 pb-5 last:pb-0">
                    <div className="relative"><span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#10231e] text-[0.62rem] font-semibold text-white">{index + 1}</span>{index < property.paymentPlan!.length - 1 ? <span className="absolute left-[11px] top-6 h-full w-px bg-[#d7dfdc]" /> : null}</div>
                    <div><strong className="block text-sm font-semibold">{localized(step.label, locale)}</strong><span className="mt-1 block text-xs leading-5 text-[#74817d]">{localized(step.due, locale)}</span></div>
                    <strong className="text-sm font-semibold text-[#2f6d59]">{step.percentage !== undefined ? `${step.percentage}%` : step.amount !== undefined ? money(step.amount, property.currency, locale) : '—'}</strong>
                  </div>)}
                </div>
              </div> : null}
            </section> : null}

            <section className="rounded-2xl border border-[#d7dfdc] bg-white p-6">
              <p className="text-xs leading-6 text-[#6d7b76]">{c.disclaimer}</p>
              <Link href={requestHref} className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#10231e] px-5 text-sm font-semibold text-white">{c.request}<ArrowRight size={15}/></Link>
              <Link href={visitHref} className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#10231e] px-5 text-sm font-semibold text-[#10231e]"><CalendarDays size={15}/>{c.visit}</Link>
            </section>
          </aside>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}

function FinancialMetric({ label, value, note, accent = false }: { label: string; value: string; note?: string; accent?: boolean }) {
  return <div className={accent ? 'bg-[#edf5f1] p-5' : 'bg-white p-5'}>
    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#73817c]">{label}</span>
    <strong className={accent ? 'mt-2 block text-2xl font-semibold text-[#24614d]' : 'mt-2 block text-2xl font-semibold text-[#12221f]'}>{value}</strong>
    {note ? <span className="mt-2 block text-[0.68rem] leading-5 text-[#7b8783]">{note}</span> : null}
  </div>;
}
