// @ts-nocheck
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, MapPin, ShieldAlert, WalletCards, Wrench } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';
import {
  formatEntryCapital,
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

interface PropertyDetailPageProps {
  locale: Locale;
  property: PropertyListing;
  globalMode?: boolean;
}

function labels(locale: Locale) {
  if (locale === 'fr') {
    return {
      back: 'Immobilier Turquie',
      totalPrice: 'Prix total',
      capitalToday: 'Capital aujourd’hui',
      delivery: 'Livraison',
      surface: 'Surface',
      bedrooms: 'Chambres',
      payment: 'Plan de paiement',
      cashPrice: 'Prix comptant',
      installmentPrice: 'Prix échelonné',
      why: 'Pourquoi Bosphoras l’a sélectionné',
      technical: 'Bosphoras Technical Notes',
      watch: 'Points de vigilance',
      overview: 'Le projet',
      request: 'Demander le dossier complet',
      visit: 'Organiser une visite privée',
      disclaimer:
        'Les prix, disponibilités, échéanciers et caractéristiques sont susceptibles d’évolution. Ils doivent être reconfirmés auprès du promoteur ou du partenaire autorisé avant toute décision ou transfert de fonds.',
    };
  }
  if (locale === 'ru') {
    return {
      back: 'Недвижимость в Турции',
      totalPrice: 'Полная цена',
      capitalToday: 'Капитал сегодня',
      delivery: 'Сдача',
      surface: 'Площадь',
      bedrooms: 'Спальни',
      payment: 'График платежей',
      cashPrice: 'Цена при полной оплате',
      installmentPrice: 'Цена в рассрочку',
      why: 'Почему Bosphoras выбрал этот объект',
      technical: 'Bosphoras Technical Notes',
      watch: 'На что обратить внимание',
      overview: 'О проекте',
      request: 'Получить полный пакет',
      visit: 'Организовать частный просмотр',
      disclaimer:
        'Цены, наличие, графики платежей и характеристики могут меняться. Перед решением или переводом средств их необходимо повторно подтвердить у застройщика или уполномоченного партнёра.',
    };
  }
  if (locale === 'ar') {
    return {
      back: 'عقارات تركيا',
      totalPrice: 'السعر الإجمالي',
      capitalToday: 'رأس المال اليوم',
      delivery: 'التسليم',
      surface: 'المساحة',
      bedrooms: 'غرف النوم',
      payment: 'خطة الدفع',
      cashPrice: 'السعر النقدي',
      installmentPrice: 'سعر التقسيط',
      why: 'لماذا اختار Bosphoras هذا العقار',
      technical: 'Bosphoras Technical Notes',
      watch: 'نقاط يجب الانتباه لها',
      overview: 'عن المشروع',
      request: 'طلب الملف الكامل',
      visit: 'تنظيم زيارة خاصة',
      disclaimer:
        'قد تتغير الأسعار والتوافر وخطط الدفع والمواصفات. يجب إعادة تأكيدها مع المطور أو الشريك المخول قبل أي قرار أو تحويل للأموال.',
    };
  }
  return {
    back: 'Property in Turkey',
    totalPrice: 'Total price',
    capitalToday: 'Capital today',
    delivery: 'Delivery',
    surface: 'Surface',
    bedrooms: 'Bedrooms',
    payment: 'Payment plan',
    cashPrice: 'Cash price',
    installmentPrice: 'Instalment price',
    why: 'Why Bosphoras selected it',
    technical: 'Bosphoras Technical Notes',
    watch: 'Points to watch',
    overview: 'The project',
    request: 'Request the full file',
    visit: 'Arrange a private viewing',
    disclaimer:
      'Prices, availability, payment schedules and specifications may change. They must be reconfirmed with the developer or authorised partner before any decision or transfer of funds.',
  };
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

function paymentCopy(locale: Locale) {
  if (locale === 'fr') return {
    interestFree: 'Échelonnement 0 %',
    interestBearing: 'Surcoût / taux',
    cashDiscount: 'Remise comptant',
    calculated: 'Montant correspondant',
    terms: 'Conditions promoteur',
    note: 'Les montants calculés à partir d’un pourcentage utilisent le prix échelonné lorsqu’il est renseigné, sinon le prix total. Le contrat et l’échéancier du promoteur restent la référence.',
  };
  if (locale === 'ru') return {
    interestFree: 'Рассрочка 0%',
    interestBearing: 'Удорожание / ставка',
    cashDiscount: 'Скидка при полной оплате',
    calculated: 'Сумма платежа',
    terms: 'Условия застройщика',
    note: 'Если указан процент, сумма рассчитывается от цены в рассрочку, а при её отсутствии — от полной цены. Приоритет имеют договор и официальный график застройщика.',
  };
  if (locale === 'ar') return {
    interestFree: 'تقسيط 0٪',
    interestBearing: 'تكلفة إضافية / معدل',
    cashDiscount: 'خصم الدفع النقدي',
    calculated: 'قيمة الدفعة',
    terms: 'شروط المطور',
    note: 'عند إدخال نسبة مئوية يتم احتساب القيمة من سعر التقسيط إن وُجد، وإلا من السعر الإجمالي. يبقى العقد والجدول الرسمي للمطور هما المرجع.',
  };
  return {
    interestFree: '0% instalments',
    interestBearing: 'Markup / rate',
    cashDiscount: 'Cash discount',
    calculated: 'Payment amount',
    terms: 'Developer terms',
    note: 'Percentage-based amounts use the instalment price when available, otherwise the total price. The developer’s contract and official schedule remain authoritative.',
  };
}

function moneyValue(value: number | undefined, currency: string, locale: Locale) {
  if (!value || value <= 0) return null;
  return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

function paymentStepAmount(property: PropertyListing, step: any) {
  if (step?.amount && Number(step.amount) > 0) return Number(step.amount);
  if (step?.percentage && Number(step.percentage) > 0) {
    const base = property.installmentPrice || property.totalPrice;
    if (base && base > 0) return Math.round(base * Number(step.percentage) / 100);
  }
  return null;
}

export function PropertyDetailPage({ locale, property, globalMode = false }: PropertyDetailPageProps) {
  const c = labels(locale);
  const paymentText = paymentCopy(locale);
  if (globalMode) c.back = locale === 'fr' ? 'Investissement immobilier international' : locale === 'en' ? 'International property investment' : locale === 'ru' ? 'Зарубежная недвижимость' : 'الاستثمار العقاري الدولي';
  const fullPath = getLocalePath(locale, getPropertyPath(locale, property, globalMode));
  const hubPath = getLocalePath(locale, globalMode ? globalPropertyHubPaths[locale] : propertyHubPaths[locale]);
  const assessmentPath =
    locale === 'fr'
      ? '/diagnostic-prive'
      : locale === 'en'
      ? '/en/private-assessment'
      : locale === 'ru'
      ? '/ru/chastnaya-konsultatsiya'
      : '/ar/تقييم-خاص';
  const capital = formatEntryCapital(property, locale);
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
      ...(property.images.length ? { image: property.images } : {}),
    },
    offeredBy: { '@id': `${siteUrl}/#organization` },
  };

  const localizedPaths = Object.fromEntries(
    (['fr', 'en', 'ru', 'ar'] as const).map((targetLocale) => [
      targetLocale,
      getLocalePath(targetLocale, getPropertyPath(targetLocale, property, globalMode)),
    ])
  ) as Record<Locale, string>;

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f5f3ef] text-[#1a1d22] [font-family:'Avenir_Next','Helvetica_Neue',Arial,sans-serif]">
      <Header locale={locale} currentPath={fullPath} localizedPaths={localizedPaths} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={propertySchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: c.back, url: `${siteUrl}${hubPath}` },
          { name: property.title[locale], url: `${siteUrl}${fullPath}` },
        ])}
      />

      <section className="px-5 pb-10 pt-32 md:px-8 md:pb-14 md:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <Link href={hubPath} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9a7447]">
            <ArrowLeft size={15} /> {c.back}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a7447]">
                {collectionLabel(property.collection, locale)} · {property.countryName} · {cityLabel(property)} · {property.district}
              </p>
              <h1 className="mt-4 max-w-5xl font-sans text-5xl leading-[1.02] tracking-[-0.045em] md:text-7xl">
                {property.title[locale]}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6b7078]">{property.summary[locale]}</p>
            </div>
            <div className="grid gap-px bg-[#d8d4cc] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="bg-white p-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#85888e]">{c.totalPrice}</span>
                <strong className="mt-2 block font-sans text-3xl">{formatPropertyPrice(property, locale)}</strong>
              </div>
              {capital && (
                <div className="bg-[#171a1f] p-6 text-white">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#b28b5a]">{c.capitalToday}</span>
                  <strong className="mt-2 block font-sans text-3xl">{capital.replace(/^.*?:\s*/, '')}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-3 md:grid-cols-12">
            {(property.images.length ? property.images : [property.heroImage].filter(Boolean) as string[]).slice(0, 5).map((image, index) => (
              <div key={image} className={index === 0 ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4'}>
                <div className={index === 0 ? 'aspect-[16/10] overflow-hidden bg-[#e8e5df]' : 'aspect-[16/9] overflow-hidden bg-[#e8e5df]'}>
                  <img src={image} alt={`${property.title[locale]} — ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
            {property.images.length === 0 && !property.heroImage && (
              <div className="flex aspect-[16/8] items-center justify-center bg-[#e8e5df] text-xs font-bold uppercase tracking-[0.25em] text-[#85888e] md:col-span-12">
                Bosphoras Property Desk
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <h2 className="font-sans text-4xl tracking-[-0.03em]">{c.overview}</h2>
            <p className="mt-6 whitespace-pre-line text-base leading-8 text-[#565b63]">{property.description[locale]}</p>

            {property.strengths && property.strengths.length > 0 && (
              <section className="mt-14 border-t border-[#d8d4cc] pt-10">
                <h2 className="font-sans text-3xl">{c.why}</h2>
                <ul className="mt-6 grid gap-4">
                  {property.strengths.map((item) => (
                    <li key={item[locale]} className="flex gap-3 text-base leading-7 text-[#565b63]">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#9a7447]" />{item[locale]}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {property.technicalNotes && property.technicalNotes.length > 0 && (
              <section className="mt-14 border-t border-[#d8d4cc] pt-10">
                <h2 className="inline-flex items-center gap-3 font-sans text-3xl"><Wrench size={23} className="text-[#9a7447]" />{c.technical}</h2>
                <ul className="mt-6 grid gap-4">
                  {property.technicalNotes.map((item) => (
                    <li key={item[locale]} className="border-l border-[#b28b5a] pl-5 text-base leading-7 text-[#565b63]">{item[locale]}</li>
                  ))}
                </ul>
              </section>
            )}

            {property.watchpoints && property.watchpoints.length > 0 && (
              <section className="mt-14 border border-[#e4d2b6] bg-[#fff8ed] p-7">
                <h2 className="inline-flex items-center gap-3 font-sans text-3xl"><ShieldAlert size={23} className="text-[#9a7447]" />{c.watch}</h2>
                <ul className="mt-6 grid gap-4">
                  {property.watchpoints.map((item) => (
                    <li key={item[locale]} className="text-base leading-7 text-[#565b63]">{item[locale]}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[#d8d4cc] bg-white p-7">
              <div className="grid grid-cols-2 gap-6">
                {property.surfaceM2 && <div><span className="text-xs uppercase tracking-[0.13em] text-[#85888e]">{c.surface}</span><strong className="mt-1 block text-xl">{property.surfaceM2} m²</strong></div>}
                {property.bedrooms !== undefined && <div><span className="text-xs uppercase tracking-[0.13em] text-[#85888e]">{c.bedrooms}</span><strong className="mt-1 block text-xl">{property.bedrooms}</strong></div>}
                {property.delivery && <div><span className="text-xs uppercase tracking-[0.13em] text-[#85888e]">{c.delivery}</span><strong className="mt-1 block text-xl">{property.delivery[locale]}</strong></div>}
                <div><span className="text-xs uppercase tracking-[0.13em] text-[#85888e]">Location</span><strong className="mt-1 block text-xl">{property.district}</strong></div>
              </div>
            </div>

            {property.paymentPlanEnabled !== false && property.paymentPlan && property.paymentPlan.length > 0 && (
              <div className="border border-[#2d3137] bg-[#171a1f] p-7 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#b28b5a]">{paymentText.terms}</p>
                    <h2 className="mt-2 inline-flex items-center gap-3 text-3xl font-semibold tracking-[-0.03em]"><WalletCards size={22} className="text-[#b28b5a]" />{c.payment}</h2>
                  </div>
                  {property.paymentInterestMode === 'interest_free' ? (
                    <span className="border border-[#b28b5a]/50 px-3 py-1.5 text-xs font-semibold text-[#e3d3bd]">{paymentText.interestFree}</span>
                  ) : null}
                </div>

                {(property.cashPrice || property.installmentPrice) ? (
                  <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                    {property.cashPrice ? (
                      <div className="bg-[#1d2127] p-4">
                        <span className="text-[0.62rem] uppercase tracking-[0.1em] text-[#aeb0b5]">{c.cashPrice}</span>
                        <strong className="mt-2 block text-lg">{moneyValue(property.cashPrice, property.currency, locale)}</strong>
                      </div>
                    ) : null}
                    {property.installmentPrice ? (
                      <div className="bg-[#1d2127] p-4">
                        <span className="text-[0.62rem] uppercase tracking-[0.1em] text-[#aeb0b5]">{c.installmentPrice}</span>
                        <strong className="mt-2 block text-lg">{moneyValue(property.installmentPrice, property.currency, locale)}</strong>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {property.paymentInterestMode === 'interest_bearing' && property.paymentInterestRate !== undefined ? (
                    <span className="border border-white/15 px-3 py-1.5 text-[#e3c39b]">{paymentText.interestBearing}: {property.paymentInterestRate}%</span>
                  ) : null}
                  {property.cashDiscountPct ? (
                    <span className="border border-white/15 px-3 py-1.5 text-[#e3d3bd]">{paymentText.cashDiscount}: -{property.cashDiscountPct}%</span>
                  ) : null}
                </div>

                <div className="mt-7 divide-y divide-white/12 border-y border-white/12">
                  {property.paymentPlan.map((step, index) => {
                    const stepAmount = paymentStepAmount(property, step);
                    return (
                      <div key={`${step.label[locale]}-${index}`} className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div className="flex gap-4">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-white/15 text-xs font-semibold text-[#d6b98f]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="font-semibold">{step.label[locale] || step.label.fr}</p>
                            <p className="mt-1 text-sm text-[#b6b9be]">{step.due[locale] || step.due.fr}</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <strong className="block text-2xl font-semibold text-[#d6b98f]">
                            {step.percentage ? `${step.percentage}%` : stepAmount ? moneyValue(stepAmount, property.currency, locale) : '—'}
                          </strong>
                          {step.percentage && stepAmount ? (
                            <span className="mt-1 block text-xs text-[#9fa3a9]">({paymentText.calculated}: {moneyValue(stepAmount, property.currency, locale)})</span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {property.paymentNotes?.[locale] ? (
                  <p className="mt-5 border-l-2 border-[#b28b5a] pl-4 text-sm leading-6 text-[#c6c8cc]">{property.paymentNotes[locale]}</p>
                ) : null}
                <p className="mt-5 text-[0.72rem] leading-5 text-[#94989f]">{paymentText.note}</p>
              </div>
            )}

            <div className="border border-[#d8d4cc] bg-[#faf9f6] p-7">
              <p className="text-sm leading-6 text-[#6b7078]">{c.disclaimer}</p>
              <Link href={`${assessmentPath}?subject=property&property=${encodeURIComponent(property.id)}`} className="mt-6 inline-flex w-full min-h-[50px] items-center justify-center gap-3 bg-[#171a1f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white">
                {c.request}<ArrowRight size={16} />
              </Link>
              <Link href={`${assessmentPath}?subject=private-viewing&property=${encodeURIComponent(property.id)}`} className="mt-3 inline-flex w-full min-h-[50px] items-center justify-center gap-3 border border-[#171a1f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#171a1f]">
                <CalendarDays size={16} />{c.visit}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
