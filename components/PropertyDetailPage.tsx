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
  Check,
  CheckCircle2,
  Clock3,
  Landmark,
  MapPin,
  Ruler,
  ShieldAlert,
  Sparkles,
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
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { PropertyGallery } from '@/components/PropertyGallery';
import { PropertyLocationMap } from '@/components/PropertyLocationMap';
import { ProjectInquiryForm } from '@/components/ProjectInquiryForm';
import {ProjectSelectButton,ProjectWishlistTray} from '@/components/ProjectWishlist';

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
    project: 'PROJET SÉLECTIONNÉ',
    price: 'Prix',
    entry: 'Capital aujourd’hui',
    location: 'Localisation',
    surface: 'Surface',
    bedrooms: 'Chambres',
    bathrooms: 'Salles de bain',
    delivery: 'Livraison',
    developer: 'Promoteur',
    reference: 'Référence',
    overview: 'À propos du projet',
    overviewEyebrow: 'LE PROJET',
    highlights: 'Atouts & équipements',
    why: 'Pourquoi Bosphoras le retient',
    technical: 'Lecture technique',
    watch: 'Points de vigilance',
    financing: 'Plan de paiement',
    paymentEyebrow: 'CONDITIONS PROMOTEUR',
    paymentIntro: 'Une lecture simple de ce qui est dû à la réservation, pendant le projet et à la livraison.',
    paymentPlan: 'Échéancier',
    interestRate: 'Taux promoteur',
    cashPrice: 'Prix comptant',
    installmentPrice: 'Prix avec échéancier',
    planSurcharge: 'Surcoût de l’échéancier',
    cashDiscount: 'Remise comptant',
    noInterest: '0 %',
    notSpecified: 'Non communiqué',
    interestNote: 'Taux annoncé par le promoteur ; à confirmer au contrat.',
    noInterestNote: 'Échelonnement annoncé sans intérêt ; conditions à reconfirmer avant signature.',
    cashPriceNote: 'Prix applicable en cas de règlement comptant selon les conditions du promoteur.',
    installmentPriceNote: 'Prix total applicable lorsque le plan de paiement est utilisé.',
    verified: 'Données vérifiées',
    request: 'Recevoir le dossier complet',
    visit: 'Organiser une visite privée',
    available: 'Disponible',
    reserved: 'Réservé',
    sold: 'Vendu',
    private: 'Privé',
    aboutNav: 'Projet',
    paymentNav: 'Paiement',
    locationNav: 'Localisation',
    analysisNav: 'Analyse',
    projectFacts: 'Informations clés',
    amount: 'Montant',
    when: 'Échéance',
    total: 'Total',
    locationTitle: 'Localisation du projet',
    locationText: 'Situez le projet et validez l’environnement, les accès et la cohérence du quartier avec votre objectif.',
    developerTitle: 'À propos du promoteur',
    developerText: 'Bosphoras conserve le nom du promoteur dans le dossier afin de rattacher le projet à son historique, ses conditions commerciales et les vérifications utiles avant engagement.',
    faqTitle: 'Questions fréquentes',
    finalEyebrow: 'DOSSIER PRIVÉ',
    finalTitle: 'Vous voulez aller plus loin sur ce projet ?',
    finalText: 'Nous pouvons vous transmettre le dossier disponible, confirmer les conditions en cours et organiser la suite avec les interlocuteurs concernés.',
    disclaimer: 'Les prix, disponibilités, taux, remises et échéanciers peuvent évoluer. Toute condition financière doit être reconfirmée auprès du promoteur ou du partenaire autorisé avant réservation, signature ou transfert de fonds.',
  };

  if (locale === 'ru') return {
    back,
    project: 'ВЫБРАННЫЙ ПРОЕКТ',
    price: 'Цена',
    entry: 'Капитал сегодня',
    location: 'Локация',
    surface: 'Площадь',
    bedrooms: 'Спальни',
    bathrooms: 'Ванные',
    delivery: 'Сдача',
    developer: 'Застройщик',
    reference: 'Референс',
    overview: 'О проекте',
    overviewEyebrow: 'ПРОЕКТ',
    highlights: 'Преимущества и инфраструктура',
    why: 'Почему Bosphoras выбрал проект',
    technical: 'Технический анализ',
    watch: 'На что обратить внимание',
    financing: 'План оплаты',
    paymentEyebrow: 'УСЛОВИЯ ЗАСТРОЙЩИКА',
    paymentIntro: 'Понятная структура платежей при бронировании, в ходе проекта и при сдаче.',
    paymentPlan: 'График платежей',
    interestRate: 'Ставка застройщика',
    cashPrice: 'Цена при полной оплате',
    installmentPrice: 'Цена в рассрочку',
    planSurcharge: 'Удорожание рассрочки',
    cashDiscount: 'Скидка за полную оплату',
    noInterest: '0%',
    notSpecified: 'Не указано',
    interestNote: 'Ставка заявлена застройщиком и должна быть подтверждена в договоре.',
    noInterestNote: 'Заявленная беспроцентная рассрочка; условия необходимо подтвердить до подписания.',
    cashPriceNote: 'Цена при полной оплате по условиям застройщика.',
    installmentPriceNote: 'Общая цена при использовании рассрочки.',
    verified: 'Данные проверены',
    request: 'Получить полный пакет',
    visit: 'Организовать частный просмотр',
    available: 'Доступно',
    reserved: 'Зарезервировано',
    sold: 'Продано',
    private: 'Частное',
    aboutNav: 'Проект',
    paymentNav: 'Оплата',
    locationNav: 'Локация',
    analysisNav: 'Анализ',
    projectFacts: 'Ключевые данные',
    amount: 'Сумма',
    when: 'Срок',
    total: 'Итого',
    locationTitle: 'Расположение проекта',
    locationText: 'Проверьте район, доступность и соответствие локации вашей инвестиционной цели.',
    developerTitle: 'О застройщике',
    developerText: 'Bosphoras сохраняет данные застройщика в инвестиционном досье для проверки истории, коммерческих условий и необходимых подтверждений.',
    faqTitle: 'Частые вопросы',
    finalEyebrow: 'ЧАСТНОЕ ДОСЬЕ',
    finalTitle: 'Хотите продолжить работу по этому проекту?',
    finalText: 'Мы можем передать доступное досье, подтвердить текущие условия и организовать следующие шаги.',
    disclaimer: 'Цены, наличие, ставки, скидки и графики платежей могут меняться. Все финансовые условия необходимо повторно подтвердить у застройщика или уполномоченного партнёра до бронирования, подписания или перевода средств.',
  };

  if (locale === 'ar') return {
    back,
    project: 'مشروع مختار',
    price: 'السعر',
    entry: 'رأس المال اليوم',
    location: 'الموقع',
    surface: 'المساحة',
    bedrooms: 'غرف النوم',
    bathrooms: 'الحمامات',
    delivery: 'التسليم',
    developer: 'المطور',
    reference: 'المرجع',
    overview: 'عن المشروع',
    overviewEyebrow: 'المشروع',
    highlights: 'المزايا والخدمات',
    why: 'لماذا اختاره Bosphoras',
    technical: 'التحليل الفني',
    watch: 'نقاط يجب الانتباه لها',
    financing: 'خطة الدفع',
    paymentEyebrow: 'شروط المطور',
    paymentIntro: 'قراءة واضحة لما يستحق عند الحجز وأثناء المشروع وعند التسليم.',
    paymentPlan: 'جدول الدفع',
    interestRate: 'معدل المطور',
    cashPrice: 'السعر النقدي',
    installmentPrice: 'سعر التقسيط',
    planSurcharge: 'تكلفة إضافية للتقسيط',
    cashDiscount: 'خصم الدفع النقدي',
    noInterest: '0٪',
    notSpecified: 'غير معلن',
    interestNote: 'المعدل المعلن من المطور ويجب تأكيده في العقد.',
    noInterestNote: 'تقسيط معلن بدون فائدة؛ يجب إعادة تأكيد الشروط قبل التوقيع.',
    cashPriceNote: 'السعر عند الدفع النقدي وفق شروط المطور.',
    installmentPriceNote: 'السعر الإجمالي عند استخدام خطة التقسيط.',
    verified: 'تم التحقق من البيانات',
    request: 'طلب الملف الكامل',
    visit: 'تنظيم زيارة خاصة',
    available: 'متاح',
    reserved: 'محجوز',
    sold: 'مباع',
    private: 'خاص',
    aboutNav: 'المشروع',
    paymentNav: 'الدفع',
    locationNav: 'الموقع',
    analysisNav: 'التحليل',
    projectFacts: 'البيانات الرئيسية',
    amount: 'المبلغ',
    when: 'الموعد',
    total: 'الإجمالي',
    locationTitle: 'موقع المشروع',
    locationText: 'تحقق من الحي وسهولة الوصول ومدى توافق الموقع مع هدفك الاستثماري.',
    developerTitle: 'عن المطور',
    developerText: 'تحتفظ Bosphoras ببيانات المطور ضمن ملف المشروع لربط العرض بسجله وشروطه التجارية والتحققات المطلوبة.',
    faqTitle: 'الأسئلة الشائعة',
    finalEyebrow: 'ملف خاص',
    finalTitle: 'هل ترغب في متابعة هذا المشروع؟',
    finalText: 'يمكننا إرسال الملف المتاح وتأكيد الشروط الحالية وتنظيم الخطوات التالية.',
    disclaimer: 'قد تتغير الأسعار والتوافر والمعدلات والخصومات وخطط الدفع. يجب إعادة تأكيد كل الشروط المالية مع المطور أو الشريك المخول قبل الحجز أو التوقيع أو تحويل الأموال.',
  };

  return {
    back,
    project: 'SELECTED PROJECT',
    price: 'Price',
    entry: 'Capital today',
    location: 'Location',
    surface: 'Surface',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    delivery: 'Handover',
    developer: 'Developer',
    reference: 'Reference',
    overview: 'About the project',
    overviewEyebrow: 'THE PROJECT',
    highlights: 'Highlights & amenities',
    why: 'Why Bosphoras selected it',
    technical: 'Technical reading',
    watch: 'Points to watch',
    financing: 'Payment plan',
    paymentEyebrow: 'DEVELOPER TERMS',
    paymentIntro: 'A clear view of what is due at booking, during the project and at handover.',
    paymentPlan: 'Payment schedule',
    interestRate: 'Developer rate',
    cashPrice: 'Cash price',
    installmentPrice: 'Instalment price',
    planSurcharge: 'Instalment premium',
    cashDiscount: 'Cash discount',
    noInterest: '0%',
    notSpecified: 'Not disclosed',
    interestNote: 'Rate quoted by the developer; confirm it in the contract.',
    noInterestNote: 'Interest-free instalments as quoted; terms must be reconfirmed before signing.',
    cashPriceNote: 'Price for cash payment under the developer terms.',
    installmentPriceNote: 'Total price when the instalment plan is used.',
    verified: 'Data checked',
    request: 'Request the full file',
    visit: 'Arrange a private viewing',
    available: 'Available',
    reserved: 'Reserved',
    sold: 'Sold',
    private: 'Private',
    aboutNav: 'Project',
    paymentNav: 'Payment',
    locationNav: 'Location',
    analysisNav: 'Analysis',
    projectFacts: 'Key information',
    amount: 'Amount',
    when: 'Due',
    total: 'Total',
    locationTitle: 'Project location',
    locationText: 'Review the neighbourhood, access and how the location fits your investment objective.',
    developerTitle: 'About the developer',
    developerText: 'Bosphoras keeps the developer attached to the project file so its track record, commercial terms and relevant checks can be reviewed before commitment.',
    faqTitle: 'Frequently asked questions',
    finalEyebrow: 'PRIVATE FILE',
    finalTitle: 'Want to take this project further?',
    finalText: 'We can share the available file, reconfirm current terms and coordinate the next steps with the relevant parties.',
    disclaimer: 'Prices, availability, rates, discounts and payment schedules may change. All financial terms must be reconfirmed with the developer or authorised partner before reservation, signature or transfer of funds.',
  };
}

function money(value: number | undefined | null, currency: string, locale: Locale) {
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
  const requestHref = property.projectId ? '#project-inquiry' : `${assessmentPath}?subject=property&property=${encodeURIComponent(property.id)}&property_title=${encodeURIComponent(propertyTitle)}&property_location=${encodeURIComponent(propertyLocation)}`;
  const visitHref = property.projectId ? '#project-inquiry' : `${assessmentPath}?subject=private-viewing&property=${encodeURIComponent(property.id)}&property_title=${encodeURIComponent(propertyTitle)}&property_location=${encodeURIComponent(propertyLocation)}`;

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
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(new Date(property.verifiedAt))
    : null;

  const paymentReferencePrice = property.projectId ? null : (property.installmentPrice || property.totalPrice || property.cashPrice || null);
  const paymentRows = paymentPlanVisible
    ? property.paymentPlan!.map((step) => {
        const amount = step.amount !== undefined
          ? step.amount
          : step.percentage !== undefined && paymentReferencePrice
          ? (paymentReferencePrice * Number(step.percentage)) / 100
          : null;
        return { ...step, calculatedAmount: amount };
      })
    : [];

  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    url: `${siteUrl}${fullPath}`,
    priceCurrency: property.currency,
    ...(!property.projectId && property.totalPrice && !property.priceOnRequest ? { price: property.totalPrice } : {}),
    ...(!property.projectId ? { availability:
      property.status === 'available'
        ? 'https://schema.org/InStock'
        : property.status === 'reserved'
        ? 'https://schema.org/LimitedAvailability'
        : 'https://schema.org/OutOfStock' } : {}),
    itemOffered: {
      '@type': property.projectId ? 'ApartmentComplex' : property.propertyType === 'villa' ? 'House' : property.propertyType === 'commercial' ? 'Place' : 'Apartment',
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
    property.surfaceM2 ? { icon: Ruler, label: c.surface, value: `${property.surfaceM2} m²` } : null,
    property.bedrooms !== undefined ? { icon: BedDouble, label: c.bedrooms, value: String(property.bedrooms) } : null,
    property.bathrooms !== undefined ? { icon: Bath, label: c.bathrooms, value: String(property.bathrooms) } : null,
    property.delivery ? { icon: Clock3, label: c.delivery, value: localized(property.delivery, locale) } : null,
    property.developer ? { icon: Building2, label: c.developer, value: property.developer } : null,
    { icon: MapPin, label: c.location, value: propertyLocation },
  ].filter(Boolean);

  const faqItems: Array<{ question: string; answer: string }> = [];
  if (property.totalPrice || property.priceOnRequest) {
    faqItems.push({
      question:
        locale === 'fr' ? `Quel est le prix de ${propertyTitle} ?`
        : locale === 'ru' ? `Какова цена ${propertyTitle}?`
        : locale === 'ar' ? `ما سعر ${propertyTitle}؟`
        : `What is the price of ${propertyTitle}?`,
      answer:
        locale === 'fr' ? `Le prix actuellement affiché est ${formatPropertyPrice(property, locale)}. Il doit être reconfirmé au moment de la demande car le stock et les conditions peuvent évoluer.`
        : locale === 'ru' ? `Текущая отображаемая цена — ${formatPropertyPrice(property, locale)}. Наличие и условия необходимо подтвердить на момент запроса.`
        : locale === 'ar' ? `السعر المعروض حالياً هو ${formatPropertyPrice(property, locale)}، ويجب إعادة تأكيده عند الطلب لأن التوافر والشروط قد تتغير.`
        : `The current displayed price is ${formatPropertyPrice(property, locale)}. Availability and terms should be reconfirmed when you enquire.`,
    });
  }
  if (paymentPlanVisible) {
    faqItems.push({
      question:
        locale === 'fr' ? `Quel est le plan de paiement de ${propertyTitle} ?`
        : locale === 'ru' ? `Какой план оплаты у ${propertyTitle}?`
        : locale === 'ar' ? `ما خطة الدفع الخاصة بـ ${propertyTitle}؟`
        : `What is the payment plan for ${propertyTitle}?`,
      answer:
        locale === 'fr' ? 'Le détail de l’échéancier disponible est publié dans la section Plan de paiement de cette page. Les échéances doivent être reconfirmées avant réservation.'
        : locale === 'ru' ? 'Доступный график опубликован в разделе плана оплаты на этой странице. Условия необходимо подтвердить до бронирования.'
        : locale === 'ar' ? 'يظهر جدول الدفع المتاح في قسم خطة الدفع في هذه الصفحة ويجب إعادة تأكيده قبل الحجز.'
        : 'The available payment schedule is shown in the payment-plan section on this page. The terms should be reconfirmed before reservation.',
    });
  }
  if (property.delivery) {
    faqItems.push({
      question:
        locale === 'fr' ? `Quand est prévue la livraison de ${propertyTitle} ?`
        : locale === 'ru' ? `Когда запланирована сдача ${propertyTitle}?`
        : locale === 'ar' ? `متى موعد تسليم ${propertyTitle}؟`
        : `When is ${propertyTitle} expected to hand over?`,
      answer:
        locale === 'fr' ? `La livraison indiquée est ${localized(property.delivery, locale)}. Il s’agit d’une information projet à reconfirmer contractuellement.`
        : locale === 'ru' ? `Указанный срок сдачи: ${localized(property.delivery, locale)}. Его необходимо подтвердить в договоре.`
        : locale === 'ar' ? `موعد التسليم المشار إليه هو ${localized(property.delivery, locale)} ويجب تأكيده تعاقدياً.`
        : `The stated handover is ${localized(property.delivery, locale)}. This should be reconfirmed contractually.`,
    });
  }
  if (propertyLocation) {
    faqItems.push({
      question:
        locale === 'fr' ? `Où se situe ${propertyTitle} ?`
        : locale === 'ru' ? `Где расположен ${propertyTitle}?`
        : locale === 'ar' ? `أين يقع ${propertyTitle}؟`
        : `Where is ${propertyTitle} located?`,
      answer:
        locale === 'fr' ? `${propertyTitle} se situe à ${propertyLocation}. La carte du projet est disponible plus bas sur cette page.`
        : locale === 'ru' ? `${propertyTitle} расположен в ${propertyLocation}. Карта проекта доступна ниже на странице.`
        : locale === 'ar' ? `يقع ${propertyTitle} في ${propertyLocation}. خريطة المشروع متاحة أدناه.`
        : `${propertyTitle} is located in ${propertyLocation}. The project map is available further down this page.`,
    });
  }

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f5f3ee] text-[#17201d] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <Header locale={locale} currentPath={fullPath} localizedPaths={localizedPaths} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={propertySchema} />
      <StructuredData data={breadcrumbSchema([{ name: c.back, url: `${siteUrl}${hubPath}` }, { name: property.title[locale], url: `${siteUrl}${fullPath}` }])} />
      {faqItems.length ? <StructuredData data={faqSchema(faqItems)} /> : null}

      <section className="border-b border-[#ded9cf] bg-[#fbfaf6] px-4 pb-5 pt-24 sm:px-6 sm:pb-6 sm:pt-28 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3">
          <Link href={hubPath} className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#456d60]">
            <ArrowLeft size={14} /> {c.back}
          </Link>
          <span className="text-[0.66rem] text-[#8a867e]">{c.reference}: {property.id}</span>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-0 py-0 sm:px-6 sm:py-7 lg:px-8 lg:py-9">
        <div className="mx-auto max-w-[1500px]">
          <PropertyGallery
            images={images}
            title={propertyTitle}
            summary={localized(property.summary, locale)}
            location={propertyLocation}
          />
        </div>
      </section>

      <section className="border-y border-[#ded9cf] bg-[#fbfaf6] px-5 py-9 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1360px] gap-9 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-[#244b3f] px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-white">{c.project}</span>
              <span className="rounded-full border border-[#cfc8bc] px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-[#6f695f]">{collectionLabel(property.collection, locale)}</span>
              <span className="rounded-full border border-[#cfc8bc] px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.12em] text-[#6f695f]">{property.projectId ? (locale==='fr'?'Disponibilités sur demande':locale==='en'?'Availability on request':locale==='ru'?'Наличие по запросу':'التوافر عند الطلب') : statusLabel(property.status, c)}</span>
            </div>
            <h1 className="mt-5 max-w-5xl font-serif text-[clamp(2.7rem,6vw,5.6rem)] font-normal leading-[0.94] tracking-[-0.055em] text-[#131a18]">{propertyTitle}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#68706b]">
              <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-[#58786d]"/>{propertyLocation}</span>
              {property.developer ? <span className="inline-flex items-center gap-2"><Building2 size={16} className="text-[#58786d]"/>{property.developer}</span> : null}
            </div>
            {localized(property.summary, locale) ? <p className="mt-6 max-w-3xl text-base leading-8 text-[#5e6762]">{localized(property.summary, locale)}</p> : null}
          </div>

          <aside className="rounded-[1.5rem] border border-[#d8d2c7] bg-white p-6 shadow-[0_20px_70px_rgba(27,42,36,.07)] sm:p-7">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#8a867e]">{c.price}</span>
            <strong className="mt-2 block text-[2rem] font-semibold tracking-[-0.045em] text-[#18211e]">{formatPropertyPrice(property, locale)}</strong>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#e7e2d8] pt-5">
              <div>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.11em] text-[#999389]">{c.entry}</span>
                <strong className="mt-1 block text-base text-[#315f52]">{property.entryCapital ? money(property.entryCapital, property.currency, locale) : '—'}</strong>
              </div>
              <div>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.11em] text-[#999389]">{c.delivery}</span>
                <strong className="mt-1 block text-base text-[#303834]">{property.delivery ? localized(property.delivery, locale) : '—'}</strong>
              </div>
            </div>
            <div className="mt-6 grid gap-2.5">
              <Link href={requestHref} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#244b3f] px-5 text-sm font-semibold text-white transition hover:bg-[#1c3c33]">
                {c.request}<ArrowRight size={16}/>
              </Link>
              <Link href={visitHref} className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-[#244b3f] px-5 text-sm font-semibold text-[#244b3f] transition hover:bg-[#eef2ef]">
                <CalendarDays size={16}/>{c.visit}
              </Link>
              {property.projectId?<ProjectSelectButton locale={locale} property={property} href={fullPath}/>:null}
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-10 max-w-[1360px] overflow-hidden rounded-[1.5rem] border border-[#ddd7cc] bg-[#f7f5f0]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {facts.map((fact:any, index:number) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className={`min-h-[120px] border-[#ddd7cc] p-5 ${index ? 'border-t sm:border-l sm:border-t-0' : ''} ${index >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${index >= 3 ? 'lg:border-t xl:border-t-0' : ''}`}>
                  <Icon size={17} className="text-[#58786d]"/>
                  <span className="mt-4 block text-[0.6rem] font-semibold uppercase tracking-[0.11em] text-[#8d887f]">{fact.label}</span>
                  <strong className="mt-1 block text-sm font-medium leading-5 text-[#29312e]">{fact.value}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 hidden border-b border-[#ded9cf] bg-[#fbfaf6]/94 px-5 backdrop-blur-xl md:block">
        <nav className="mx-auto flex max-w-[1360px] items-center gap-8 overflow-x-auto py-4 text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-[#6d746f]">
          <a href="#project" className="hover:text-[#244b3f]">{c.aboutNav}</a>
          {property.projectId ? <a href="#unit-options" className="hover:text-[#244b3f]">{locale==='fr'?'Typologies':locale==='en'?'Unit types':locale==='ru'?'Планировки':'أنواع الوحدات'}</a> : null}
          {hasDeveloperTerms ? <a href="#payment" className="hover:text-[#244b3f]">{c.paymentNav}</a> : null}
          <a href="#location" className="hover:text-[#244b3f]">{c.locationNav}</a>
          {(property.strengths?.length || property.technicalNotes?.length || property.watchpoints?.length) ? <a href="#analysis" className="hover:text-[#244b3f]">{c.analysisNav}</a> : null}
        </nav>
      </div>

      <section id="project" className="scroll-mt-36 px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#87683c]">{c.overviewEyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.04em] text-[#17201d] sm:text-5xl">{c.overview}</h2>
            </div>
            <div>
              <div className="whitespace-pre-line font-serif text-[1.35rem] leading-[1.65] text-[#343b37] sm:text-[1.55rem]">
                {localized(property.description, locale) || localized(property.summary, locale)}
              </div>
            </div>
          </div>

          {property.highlights?.length ? (
            <section className="mt-14 border-t border-[#d7d1c6] pt-8">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#58786d]">{c.projectFacts}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{c.highlights}</h3>
                </div>
                <Sparkles size={20} className="text-[#87683c]"/>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {property.highlights.map((item, index) => (
                  <div key={index} className="flex min-h-[86px] items-start gap-3 rounded-2xl border border-[#d9d4ca] bg-[#fbfaf6] p-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8eeeb] text-[#315f52]"><Check size={14}/></span>
                    <p className="text-sm leading-6 text-[#555e59]">{localized(item, locale)}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {property.strengths?.length ? (
            <section id="analysis" className="mt-14 scroll-mt-36 overflow-hidden rounded-[2rem] bg-[#10231e] text-white">
              <div className="grid lg:grid-cols-[.78fr_1.22fr]">
                <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#d2b27c]">BOSPHORAS</p>
                  <h3 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.04em]">{c.why}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#aebdb8]">{localized(property.summary, locale)}</p>
                </div>
                <div className="divide-y divide-white/10">
                  {property.strengths.map((item, index) => (
                    <div key={index} className="grid grid-cols-[44px_1fr] gap-5 p-6 sm:p-7">
                      <span className="font-serif text-2xl text-[#d2b27c]">{String(index + 1).padStart(2, '0')}</span>
                      <p className="text-sm leading-7 text-[#d5dfdc]">{localized(item, locale)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </section>

      {property.projectId ? (
        <section id="unit-options" className="scroll-mt-36 border-t border-[#ded9cf] bg-[#faf9f5] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.18em] text-[#698474]">BOSPHORAS · PROJECT COLLECTION</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{locale==='fr'?'Typologies & possibilités':locale==='en'?'Unit types & options':locale==='ru'?'Типы квартир и варианты':'أنواع الوحدات والخيارات'}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#68736b]">{locale==='fr'?'Les propositions ci-dessous décrivent des typologies ou des offres signalées par nos sources. Elles ne garantissent pas qu’un lot soit encore disponible. Nos conseillers confirment le stock, les prix et les conditions avant toute réservation.':locale==='en'?'The options below reflect advertised unit types or reported offers, not guaranteed current inventory. We confirm prices and availability before any reservation.':locale==='ru'?'Ниже показаны варианты из источников. Наличие конкретных квартир и цены уточняются перед бронированием.':'الخيارات أدناه معلومات إرشادية وليست تأكيداً للمخزون. نتحقق من الأسعار والتوافر قبل الحجز.'}</p>
            {property.projectUnitOptions?.length ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {property.projectUnitOptions.map((unit,index)=>(
                  <article key={index} className="rounded-2xl border border-[#dad5ca] bg-white p-6">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#638270]">{unit.availability==='confirmed' ? (locale==='fr'?'Confirmée manuellement':locale==='en'?'Manually confirmed':locale==='ru'?'Подтверждено':'تم التأكيد') : (locale==='fr'?'Sur demande':locale==='en'?'On request':locale==='ru'?'По запросу':'حسب الطلب')}</span>
                    <h3 className="mt-3 text-xl font-semibold text-[#15231c]">{unit.label}</h3>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#6a746d]">
                      {unit.bedrooms!==undefined?<span>{unit.bedrooms} {locale==='fr'?'ch.':locale==='ru'?'сп.':locale==='ar'?'غرف':'bed'}</span>:null}
                      {unit.bathrooms!==undefined?<span>{unit.bathrooms} {locale==='fr'?'SDB':locale==='ru'?'ванн.':locale==='ar'?'حمام':'bath'}</span>:null}
                      {unit.areaM2?<span>{unit.areaM2} m²</span>:null}
                    </div>
                    <strong className="mt-5 block text-xl text-[#244b3f]">{unit.price?new Intl.NumberFormat(locale==='fr'?'fr-FR':locale==='ru'?'ru-RU':locale==='ar'?'ar':'en-GB',{style:'currency',currency:unit.currency||property.currency,maximumFractionDigits:0}).format(unit.price):(locale==='fr'?'Prix sur demande':locale==='en'?'Price on request':locale==='ru'?'Цена по запросу':'السعر عند الطلب')}</strong>
                    <a href="#project-inquiry" className="mt-5 inline-flex items-center gap-2 border-b border-[#244b3f] pb-1 text-xs font-semibold text-[#244b3f]">{locale==='fr'?'Demander les disponibilités':locale==='en'?'Check availability':locale==='ru'?'Уточнить наличие':'التحقق من التوافر'} <ArrowRight size={14}/></a>
                  </article>
                ))}
              </div>
            ):<p className="mt-8 rounded-xl border border-[#dad5ca] bg-white px-5 py-5 text-sm text-[#69736c]">{locale==='fr'?'Détail des typologies sur demande. Nous pouvons vérifier les possibilités selon votre budget.':locale==='en'?'Unit types are available on request. We can check options based on your budget.':locale==='ru'?'Типы квартир уточняются по запросу.':'تفاصيل الوحدات حسب الطلب.'}</p>}
          </div>
        </section>
      ):null}

      {hasDeveloperTerms ? (
        <section id="payment" className="scroll-mt-36 bg-[#0f211c] px-5 py-16 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:items-end">
              <div>
                <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#d2b27c]">{c.paymentEyebrow}</p>
                <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">{c.financing}</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#aebdb8]">{c.paymentIntro}</p>
                {verifiedLabel ? <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/55"><CheckCircle2 size={14}/>{c.verified}: {verifiedLabel}</p> : null}
              </div>

              <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/12 sm:grid-cols-2">
                {property.paymentInterestMode === 'interest_free' ? <FinancialMetric label={c.interestRate} value={c.noInterest} note={c.noInterestNote} accent/> : null}
                {property.paymentInterestMode === 'interest_bearing' ? <FinancialMetric label={c.interestRate} value={property.paymentInterestRate !== undefined ? `${property.paymentInterestRate}%` : c.notSpecified} note={c.interestNote} accent/> : null}
                {property.cashPrice ? <FinancialMetric label={c.cashPrice} value={money(property.cashPrice, property.currency, locale)} note={c.cashPriceNote}/> : null}
                {property.installmentPrice ? <FinancialMetric label={c.installmentPrice} value={money(property.installmentPrice, property.currency, locale)} note={c.installmentPriceNote}/> : null}
                {installmentPremiumPct !== null && Math.abs(installmentPremiumPct) > 0.001 ? <FinancialMetric label={c.planSurcharge} value={`${installmentPremiumPct.toFixed(1)}%`} note={c.interestNote}/> : null}
                {property.cashDiscountPct ? <FinancialMetric label={c.cashDiscount} value={`-${property.cashDiscountPct}%`} note={c.cashPriceNote}/> : null}
              </div>
            </div>

            {localized(property.paymentNotes, locale) ? <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white/70">{localized(property.paymentNotes, locale)}</div> : null}

            {paymentPlanVisible ? (
              <div className="mt-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="inline-flex items-center gap-2 text-sm font-semibold"><BadgePercent size={17} className="text-[#d2b27c]"/>{c.paymentPlan}</h3>
                  {paymentReferencePrice ? <span className="text-xs text-white/55">{c.total}: <strong className="text-white">{money(paymentReferencePrice, property.currency, locale)}</strong></span> : null}
                </div>
                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
                  {paymentRows.map((step:any, index:number) => (
                    <div key={index} className="grid gap-3 border-b border-white/10 bg-white/[0.025] px-5 py-5 last:border-b-0 sm:grid-cols-[52px_minmax(0,1fr)_150px_160px] sm:items-center">
                      <span className="font-serif text-2xl text-[#d2b27c]">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <strong className="block text-sm font-medium">{localized(step.label, locale)}</strong>
                        <span className="mt-1 block text-xs leading-5 text-white/50">{localized(step.due, locale)}</span>
                      </div>
                      <div>
                        <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-white/35">{c.when}</span>
                        <strong className="mt-1 block text-sm text-white/85">{localized(step.due, locale) || '—'}</strong>
                      </div>
                      <div className="sm:text-right">
                        <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-white/35">{c.amount}</span>
                        <strong className="mt-1 block text-sm text-[#ead7b6]">
                          {step.percentage !== undefined ? `${step.percentage}%` : ''}
                          {step.percentage !== undefined && step.calculatedAmount ? ' · ' : ''}
                          {step.calculatedAmount ? money(step.calculatedAmount, property.currency, locale) : step.amount !== undefined ? money(step.amount, property.currency, locale) : '—'}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section id="location" className="scroll-mt-36 px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#87683c]">{c.location}</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">{c.locationTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-[#65706a]">{c.locationText}</p>
              <div className="mt-6 rounded-2xl border border-[#d9d4ca] bg-[#fbfaf6] p-5">
                <MapPin size={18} className="text-[#58786d]"/>
                <strong className="mt-3 block text-base">{propertyLocation}</strong>
              </div>
            </div>
            <div className="min-w-0">
              <PropertyLocationMap locale={locale} location={propertyLocation} />
            </div>
          </div>
        </div>
      </section>

      {(property.technicalNotes?.length || property.watchpoints?.length) ? (
        <section className="border-y border-[#ded9cf] bg-[#fbfaf6] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-5 md:grid-cols-2">
            {property.technicalNotes?.length ? (
              <article className="rounded-[1.75rem] border border-[#d9d4ca] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3"><Wrench size={18} className="text-[#58786d]"/><h2 className="text-xl font-semibold tracking-[-0.025em]">{c.technical}</h2></div>
                <div className="mt-5 divide-y divide-[#e4dfd6] border-y border-[#e4dfd6]">
                  {property.technicalNotes.map((item, index) => <p key={index} className="py-4 text-sm leading-7 text-[#555e59]">{localized(item, locale)}</p>)}
                </div>
              </article>
            ) : null}
            {property.watchpoints?.length ? (
              <article className="rounded-[1.75rem] border border-[#e0d4c2] bg-[#fffaf2] p-6 sm:p-8">
                <div className="flex items-center gap-3"><ShieldAlert size={18} className="text-[#967042]"/><h2 className="text-xl font-semibold tracking-[-0.025em] text-[#6f5838]">{c.watch}</h2></div>
                <div className="mt-5 divide-y divide-[#e7dccb] border-y border-[#e7dccb]">
                  {property.watchpoints.map((item, index) => <p key={index} className="py-4 text-sm leading-7 text-[#665d51]">{localized(item, locale)}</p>)}
                </div>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}

      {property.developer ? (
        <section className="px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-[#d9d4ca] bg-white">
            <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
              <div className="flex min-h-[210px] items-center justify-center bg-[#e8eeeb] p-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#244b3f] text-white"><Landmark size={34}/></div>
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#58786d]">{c.developer}</p>
                <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em]">{property.developer}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#626d67]">{c.developerText}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {faqItems.length ? (
        <section className="border-t border-[#ded9cf] bg-[#fbfaf6] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[980px]">
            <h2 className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{c.faqTitle}</h2>
            <div className="mt-7 divide-y divide-[#ddd7cc] border-y border-[#ddd7cc]">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold sm:text-lg">
                    <span>{faq.question}</span>
                    <span className="text-2xl font-light text-[#87683c] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-[#626d67]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {property.projectId&&property.publicListingId?<ProjectInquiryForm locale={locale} listingId={property.publicListingId} projectId={property.projectId}/>:null}

      <section className="bg-[#091713] px-5 py-18 text-white sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#d2b27c]">{c.finalEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">{c.finalTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#adbfba] sm:text-base">{c.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={requestHref} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#d2b27c] px-7 text-sm font-semibold text-[#0c1d19]">{c.request}<ArrowRight size={16}/></Link>
            <Link href={visitHref} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 px-7 text-sm font-semibold text-white"><CalendarDays size={16}/>{c.visit}</Link>
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-[0.7rem] leading-6 text-white/45">{c.disclaimer}</p>
        </div>
      </section>

      {property.projectId?<ProjectWishlistTray locale={locale}/>:null}
      <Footer locale={locale} />
    </main>
  );
}

function FinancialMetric({ label, value, note, accent = false }: { label: string; value: string; note?: string; accent?: boolean }) {
  return (
    <div className={`min-h-[150px] bg-[#17372e] p-5 sm:p-6 ${accent ? 'bg-[#1b4035]' : ''}`}>
      <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.11em] text-white/45">{label}</span>
      <strong className={`mt-2 block text-2xl font-semibold tracking-[-0.03em] ${accent ? 'text-[#dac8a8]' : 'text-white'}`}>{value}</strong>
      {note ? <span className="mt-3 block text-[0.68rem] leading-5 text-white/45">{note}</span> : null}
    </div>
  );
}
