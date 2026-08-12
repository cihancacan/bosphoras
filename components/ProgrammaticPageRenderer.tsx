import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import type { ProgrammaticPage } from '@/data/programmatic/pages';
import { getProgrammaticSlug } from '@/data/programmatic/pages';
import { programmaticServices } from '@/data/programmatic/services';
import { getSlugForPage } from '@/data/pages/types';
import { localeDir } from '@/lib/i18n';
import { getCanonicalUrl, getLocalePath } from '@/lib/routes';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';

type Locale = ProgrammaticPage['locale'];
type Category = ProgrammaticPage['service']['category'];

type FaqItem = {
  question: string;
  answer: string;
};

function serviceCoreName(page: ProgrammaticPage) {
  const locale = page.locale;
  const serviceName = page.service.name[locale];
  if (locale === 'fr') return serviceName.replace(/\s+en Turquie$/i, '');
  if (locale === 'en') return serviceName.replace(/\s+in Turkey$/i, '');
  if (locale === 'ru') return serviceName.replace(/\s+в Турции$/i, '');
  return serviceName.replace(/\s+في تركيا$/i, '');
}

function labels(page: ProgrammaticPage) {
  const locale = page.locale;
  const service = serviceCoreName(page);
  const city = page.city.name[locale];
  const market = page.market.countryName;

  if (locale === 'fr') {
    return {
      answer: 'En bref',
      toc: 'Sur cette page',
      market: `Contexte client : ${market}`,
      city: `${city} pour ce besoin`,
      coordinates: `Comment Bosphoras organise ${service}`,
      caution: 'Points à confirmer avant d’agir',
      process: 'Déroulement de la demande',
      related: 'Services complémentaires',
      faq: 'Questions utiles',
      cta: 'Demander un diagnostic privé',
    };
  }

  if (locale === 'ru') {
    return {
      answer: 'Коротко',
      toc: 'На этой странице',
      market: `Контекст клиента: ${market}`,
      city: `${city}: почему это имеет смысл`,
      coordinates: `Как Bosphoras организует: ${service}`,
      caution: 'Что нужно подтвердить заранее',
      process: 'Как проходит запрос',
      related: 'Дополнительные услуги',
      faq: 'Полезные вопросы',
      cta: 'Получить частную консультацию',
    };
  }

  if (locale === 'ar') {
    return {
      answer: 'باختصار',
      toc: 'في هذه الصفحة',
      market: `سياق العميل: ${market}`,
      city: `${city}: لماذا يناسب هذا الطلب`,
      coordinates: `كيف ينسق Bosphoras خدمة ${service}`,
      caution: 'ما يجب تأكيده قبل التنفيذ',
      process: 'مسار الطلب',
      related: 'خدمات مكملة',
      faq: 'أسئلة مفيدة',
      cta: 'طلب تقييم خاص',
    };
  }

  return {
    answer: 'In brief',
    toc: 'On this page',
    market: `Client context: ${market}`,
    city: `${city} for this need`,
    coordinates: `How Bosphoras coordinates ${service}`,
    caution: 'What must be confirmed first',
    process: 'How the request is handled',
    related: 'Related services',
    faq: 'Useful questions',
    cta: 'Request a private assessment',
  };
}

function privateAssessmentPath(locale: Locale) {
  const slug = getSlugForPage('private-assessment', locale);
  if (!slug) return locale === 'fr' ? '/diagnostic-prive' : `/${locale}/private-assessment`;
  return getLocalePath(locale, slug);
}

const categoryPlanningPoints: Record<Category, Record<Locale, string[]>> = {
  relocation: {
    fr: ['statut de séjour et calendrier', 'logement et situation familiale', 'documents à préparer', 'ordre des démarches avant et après l’arrivée'],
    en: ['residence status and timing', 'housing and family situation', 'documents to prepare', 'the right sequence before and after arrival'],
    ru: ['статус пребывания и сроки', 'жилье и семейная ситуация', 'необходимые документы', 'правильная последовательность шагов до и после приезда'],
    ar: ['وضع الإقامة والجدول الزمني', 'السكن والوضع العائلي', 'المستندات المطلوبة', 'ترتيب الخطوات قبل الوصول وبعده'],
  },
  'legal-tax': {
    fr: ['juridictions concernées', 'faits et documents à faire valider', 'professionnel habilité adapté au sujet', 'conséquences fiscales, juridiques ou déclaratives à confirmer'],
    en: ['relevant jurisdictions', 'facts and documents to validate', 'the right licensed professional', 'tax, legal or filing consequences to confirm'],
    ru: ['релевантные юрисдикции', 'факты и документы для проверки', 'подходящий лицензированный специалист', 'налоговые, юридические и декларационные последствия'],
    ar: ['الجهات القضائية المعنية', 'الوقائع والمستندات المطلوب التحقق منها', 'المهني المرخص المناسب', 'الآثار الضريبية والقانونية والتصريحية الواجب تأكيدها'],
  },
  'business-setup': {
    fr: ['activité réelle et associés', 'adresse, objet social et structure', 'comptabilité et banque', 'calendrier de constitution et démarrage opérationnel'],
    en: ['real activity and shareholders', 'address, corporate purpose and structure', 'accounting and banking', 'incorporation and operational launch timing'],
    ru: ['реальная деятельность и участники', 'адрес, виды деятельности и структура', 'бухгалтерия и банк', 'сроки регистрации и запуска операций'],
    ar: ['النشاط الفعلي والشركاء', 'العنوان وغرض الشركة والهيكل', 'المحاسبة والبنوك', 'جدول التأسيس وبدء التشغيل'],
  },
  property: {
    fr: ['usage réel du bien et quartier', 'budget global et frais', 'documents et due diligence', 'négociation, signature et gestion après acquisition'],
    en: ['real use and neighborhood', 'total budget and fees', 'documents and due diligence', 'negotiation, signing and post-acquisition management'],
    ru: ['реальное использование и район', 'общий бюджет и расходы', 'документы и due diligence', 'переговоры, подписание и управление после сделки'],
    ar: ['الاستخدام الفعلي والعقار والمنطقة', 'الميزانية الإجمالية والرسوم', 'المستندات والتدقيق', 'التفاوض والتوقيع والإدارة بعد الشراء'],
  },
  'health-insurance': {
    fr: ['besoin médical ou niveau de couverture', 'réseau d’établissements ou assureurs', 'exclusions, garanties et préautorisations', 'rendez-vous, souscription et suivi'],
    en: ['medical need or coverage level', 'provider or insurer network', 'exclusions, benefits and pre-authorizations', 'appointments, enrollment and follow-up'],
    ru: ['медицинская потребность или уровень покрытия', 'сеть клиник или страховщиков', 'исключения, гарантии и предварительные согласования', 'приемы, оформление и сопровождение'],
    ar: ['الاحتياج الطبي أو مستوى التغطية', 'شبكة المستشفيات أو شركات التأمين', 'الاستثناءات والمزايا والموافقات المسبقة', 'المواعيد والاشتراك والمتابعة'],
  },
  offices: {
    fr: ['usage réel de l’adresse ou du bureau', 'capacité, salles et services inclus', 'image, accessibilité et localisation', 'contrat, durée et conditions opérationnelles'],
    en: ['real use of the address or office', 'capacity, rooms and included services', 'image, accessibility and location', 'contract, duration and operating conditions'],
    ru: ['реальное использование адреса или офиса', 'вместимость, переговорные и включенные услуги', 'имидж, доступность и локация', 'договор, срок и операционные условия'],
    ar: ['الاستخدام الفعلي للعنوان أو المكتب', 'السعة والقاعات والخدمات المشمولة', 'الصورة وسهولة الوصول والموقع', 'العقد والمدة وشروط التشغيل'],
  },
  'vip-transport': {
    fr: ['trajet, date et horaires', 'nombre de passagers et bagages', 'type de véhicule ou moyen de transport', 'attente, modifications, confidentialité et conditions d’annulation'],
    en: ['route, date and timing', 'passenger and luggage count', 'vehicle or transport type', 'waiting time, changes, privacy and cancellation terms'],
    ru: ['маршрут, дата и время', 'число пассажиров и багаж', 'тип автомобиля или транспорта', 'ожидание, изменения, конфиденциальность и отмена'],
    ar: ['المسار والتاريخ والتوقيت', 'عدد الركاب والأمتعة', 'نوع المركبة أو وسيلة النقل', 'الانتظار والتعديلات والخصوصية وشروط الإلغاء'],
  },
  hospitality: {
    fr: ['dates et nombre de personnes', 'niveau d’établissement ou d’accès recherché', 'disponibilités et conditions de réservation', 'paiement, annulation et demandes particulières'],
    en: ['dates and party size', 'required venue or access level', 'availability and booking conditions', 'payment, cancellation and special requests'],
    ru: ['даты и количество гостей', 'уровень места или доступа', 'доступность и условия бронирования', 'оплата, отмена и особые пожелания'],
    ar: ['التواريخ وعدد الأشخاص', 'مستوى المكان أو الوصول المطلوب', 'التوفر وشروط الحجز', 'الدفع والإلغاء والطلبات الخاصة'],
  },
  'private-access': {
    fr: ['profil et attentes du membre', 'priorités et niveau de réactivité attendu', 'périmètre inclus et frais externes', 'confidentialité et continuité de la relation'],
    en: ['member profile and expectations', 'priorities and expected response level', 'included scope and external costs', 'confidentiality and continuity of the relationship'],
    ru: ['профиль и ожидания участника', 'приоритеты и ожидаемая скорость реакции', 'что включено и какие расходы внешние', 'конфиденциальность и непрерывность отношений'],
    ar: ['ملف العضو وتوقعاته', 'الأولويات ومستوى سرعة الاستجابة', 'النطاق المشمول والتكاليف الخارجية', 'السرية واستمرارية العلاقة'],
  },
  'luxury-shopping': {
    fr: ['référence recherchée et budget', 'authenticité, provenance et état', 'disponibilité réelle', 'paiement, livraison, assurance et confidentialité'],
    en: ['target reference and budget', 'authenticity, provenance and condition', 'real availability', 'payment, delivery, insurance and privacy'],
    ru: ['искомая модель и бюджет', 'подлинность, происхождение и состояние', 'реальная доступность', 'оплата, доставка, страхование и конфиденциальность'],
    ar: ['المرجع المطلوب والميزانية', 'الأصالة والمصدر والحالة', 'التوفر الفعلي', 'الدفع والتسليم والتأمين والخصوصية'],
  },
  'family-services': {
    fr: ['composition de la famille', 'école, santé et logement prioritaires', 'calendrier d’installation', 'continuité du quotidien et interlocuteurs de confiance'],
    en: ['family composition', 'school, healthcare and housing priorities', 'relocation timing', 'daily continuity and trusted contacts'],
    ru: ['состав семьи', 'приоритеты школы, здоровья и жилья', 'сроки переезда', 'непрерывность быта и надежные контакты'],
    ar: ['تكوين الأسرة', 'أولويات المدرسة والصحة والسكن', 'جدول الانتقال', 'استمرارية الحياة اليومية والجهات الموثوقة'],
  },
  'administrative-support': {
    fr: ['procédure exacte à accomplir', 'documents et traductions nécessaires', 'rendez-vous et autorités concernées', 'délais, formats et preuves à conserver'],
    en: ['exact procedure to complete', 'required documents and translations', 'appointments and relevant authorities', 'deadlines, formats and evidence to keep'],
    ru: ['точная процедура', 'необходимые документы и переводы', 'встречи и соответствующие органы', 'сроки, форматы и подтверждения'],
    ar: ['الإجراء المحدد المطلوب', 'المستندات والترجمات اللازمة', 'المواعيد والجهات المعنية', 'المهل والصيغ والإثباتات الواجب حفظها'],
  },
};

const transportServiceOverrides: Partial<Record<string, Record<Locale, string[]>>> = {
  'private-chauffeur-turkey': {
    fr: ['jours et amplitude de mise à disposition', 'trajets récurrents ou ponctuels', 'catégorie de véhicule et nombre de passagers', 'langue du chauffeur, confidentialité et temps d’attente'],
    en: ['days and on-call hours', 'recurring or one-off routes', 'vehicle class and passenger count', 'driver language, privacy and waiting time'],
    ru: ['дни и часы предоставления', 'регулярные или разовые маршруты', 'класс автомобиля и число пассажиров', 'язык водителя, конфиденциальность и ожидание'],
    ar: ['الأيام وساعات التوفر', 'المسارات المتكررة أو المنفردة', 'فئة السيارة وعدد الركاب', 'لغة السائق والخصوصية ووقت الانتظار'],
  },
  'vip-airport-transfer-turkey': {
    fr: ['aéroport, terminal et numéro de vol', 'heure réelle d’arrivée et suivi du vol', 'passagers, bagages et sièges enfants', 'accueil, attente et adresse finale'],
    en: ['airport, terminal and flight number', 'actual arrival time and flight monitoring', 'passengers, luggage and child seats', 'meet-and-greet, waiting and final address'],
    ru: ['аэропорт, терминал и номер рейса', 'фактическое время прибытия и отслеживание рейса', 'пассажиры, багаж и детские кресла', 'встреча, ожидание и конечный адрес'],
    ar: ['المطار والمحطة ورقم الرحلة', 'وقت الوصول الفعلي ومتابعة الرحلة', 'الركاب والأمتعة ومقاعد الأطفال', 'الاستقبال والانتظار والعنوان النهائي'],
  },
  'limousine-vip-van-turkey': {
    fr: ['type de véhicule attendu : berline, limousine ou van VIP', 'nombre de passagers, bagages et configuration', 'trajet, horaires et éventuelle mise à disposition', 'niveau de discrétion, accueil et conditions de modification'],
    en: ['required vehicle type: sedan, limousine or VIP van', 'passenger count, luggage and configuration', 'route, timing and possible hourly disposal', 'privacy level, meet-and-greet and change conditions'],
    ru: ['нужный тип автомобиля: седан, лимузин или VIP van', 'число пассажиров, багаж и конфигурация', 'маршрут, время и возможная подача на часы', 'уровень конфиденциальности, встреча и условия изменений'],
    ar: ['نوع المركبة المطلوب: سيدان أو ليموزين أو فان VIP', 'عدد الركاب والأمتعة والتجهيز', 'المسار والتوقيت وإمكانية الحجز بالساعة', 'مستوى الخصوصية والاستقبال وشروط التعديل'],
  },
  'private-jet-turkey': {
    fr: ['aéroports de départ et d’arrivée', 'dates, horaires et flexibilité', 'nombre de passagers et bagages', 'type d’appareil, handling et conditions opérateur'],
    en: ['departure and arrival airports', 'dates, timing and flexibility', 'passenger and luggage count', 'aircraft type, handling and operator conditions'],
    ru: ['аэропорты вылета и прилета', 'даты, время и гибкость', 'число пассажиров и багаж', 'тип самолета, handling и условия оператора'],
    ar: ['مطارات المغادرة والوصول', 'التواريخ والتوقيت والمرونة', 'عدد الركاب والأمتعة', 'نوع الطائرة والخدمات الأرضية وشروط المشغل'],
  },
  'private-helicopter-turkey': {
    fr: ['points de départ et d’arrivée autorisés', 'météo, horaires et fenêtres opérationnelles', 'passagers et bagages', 'opérateur, autorisations et solution de repli'],
    en: ['authorized departure and arrival points', 'weather, timing and operating windows', 'passengers and luggage', 'operator, permissions and backup plan'],
    ru: ['разрешенные точки вылета и прилета', 'погода, время и операционные окна', 'пассажиры и багаж', 'оператор, разрешения и резервный план'],
    ar: ['نقاط المغادرة والوصول المسموح بها', 'الطقس والتوقيت ونوافذ التشغيل', 'الركاب والأمتعة', 'المشغل والتصاريح والخطة البديلة'],
  },
  'private-yacht-turkey': {
    fr: ['port de départ, itinéraire et durée', 'nombre d’invités et cabines', 'type de yacht, équipage et prestations', 'météo, disponibilité, carburant et conditions de charter'],
    en: ['departure marina, itinerary and duration', 'guest count and cabins', 'yacht type, crew and services', 'weather, availability, fuel and charter terms'],
    ru: ['марина отправления, маршрут и длительность', 'число гостей и кают', 'тип яхты, экипаж и услуги', 'погода, доступность, топливо и условия чартерa'],
    ar: ['مرسى الانطلاق والمسار والمدة', 'عدد الضيوف والكبائن', 'نوع اليخت والطاقم والخدمات', 'الطقس والتوفر والوقود وشروط التأجير'],
  },
};

function planningPoints(page: ProgrammaticPage) {
  return transportServiceOverrides[page.service.id]?.[page.locale] ?? categoryPlanningPoints[page.service.category][page.locale];
}

function directAnswer(page: ProgrammaticPage) {
  const locale = page.locale;
  const service = serviceCoreName(page);
  const city = page.city.name[locale];
  const market = page.market.countryName;
  const points = planningPoints(page);

  if (locale === 'fr') return `${service} à ${city}, pour un client lié à ${market}, se prépare autour de ${points[0]}, ${points[1]} et ${points[2]}. Bosphoras cadre la demande, sélectionne les interlocuteurs ou prestataires adaptés, confirme les conditions et suit l’exécution locale.`;
  if (locale === 'ru') return `${service} в ${city} для клиента, связанного с ${market}, требует проверить: ${points[0]}, ${points[1]} и ${points[2]}. Bosphoras структурирует запрос, подбирает подходящих специалистов или поставщиков, подтверждает условия и координирует локальное исполнение.`;
  if (locale === 'ar') return `خدمة ${service} في ${city} لعميل مرتبط بـ ${market} تتطلب تحديد ${points[0]} و${points[1]} و${points[2]}. ينسق Bosphoras الطلب ويختار الجهات أو المزودين المناسبين ويؤكد الشروط ويتابع التنفيذ محلياً.`;
  return `${service} in ${city}, for a client connected to ${market}, should be planned around ${points[0]}, ${points[1]} and ${points[2]}. Bosphoras structures the request, selects suitable professionals or providers, confirms the conditions and follows local execution.`;
}

function marketContext(page: ProgrammaticPage): string[] {
  const locale = page.locale;
  const category = page.service.category;
  const service = serviceCoreName(page);
  const city = page.city.name[locale];
  const market = page.market;

  const first = `${market.audienceProfile} ${market.culturalAngle}`;

  if (['vip-transport', 'hospitality', 'luxury-shopping', 'private-access'].includes(category)) {
    if (locale === 'fr') return [first, `Pour ${service} à ${city}, l’enjeu est surtout opérationnel : qualité réelle du prestataire, disponibilité, conditions claires et exécution discrète. ${market.cityPreferenceHints}`];
    if (locale === 'ru') return [first, `Для ${service} в ${city} главный вопрос — исполнение: реальное качество поставщика, доступность, понятные условия и конфиденциальность. ${market.cityPreferenceHints}`];
    if (locale === 'ar') return [first, `بالنسبة إلى ${service} في ${city}، الأولوية تشغيلية: جودة المزود الفعلية والتوفر والشروط الواضحة والتنفيذ السري. ${market.cityPreferenceHints}`];
    return [first, `For ${service} in ${city}, the main issue is operational: real provider quality, availability, clear conditions and discreet execution. ${market.cityPreferenceHints}`];
  }

  if (['health-insurance', 'family-services'].includes(category)) {
    return [first, `${market.relocationAngle} ${market.cityPreferenceHints}`];
  }

  if (['legal-tax', 'business-setup', 'property', 'relocation', 'offices'].includes(category)) {
    return [first, `${market.taxAngle} ${market.relocationAngle}`];
  }

  return [first, `${market.relocationAngle} ${market.cityPreferenceHints}`];
}

function cityContext(page: ProgrammaticPage): string[] {
  const locale = page.locale;
  const category = page.service.category;
  const city = page.city;

  if (['vip-transport', 'hospitality', 'luxury-shopping'].includes(category)) {
    return [`${city.intro[locale]} ${city.luxuryAngle[locale]}`, city.positioning[locale]];
  }
  if (['health-insurance', 'family-services'].includes(category)) {
    return [`${city.intro[locale]} ${city.healthAngle[locale]}`, city.relocationAngle[locale]];
  }
  if (['legal-tax', 'business-setup', 'offices', 'administrative-support'].includes(category)) {
    return [`${city.intro[locale]} ${city.businessAngle[locale]}`, city.positioning[locale]];
  }
  if (category === 'property') {
    return [`${city.intro[locale]} ${city.relocationAngle[locale]}`, city.luxuryAngle[locale]];
  }
  if (category === 'private-access') {
    return [`${city.intro[locale]} ${city.businessAngle[locale]}`, city.luxuryAngle[locale]];
  }
  return [`${city.intro[locale]} ${city.relocationAngle[locale]}`, city.positioning[locale]];
}

const complianceByCategory: Record<Category, Record<Locale, string>> = {
  relocation: {
    fr: 'Les conditions de séjour, permis, résidence et documents dépendent du profil et des règles en vigueur. Bosphoras coordonne le parcours, mais les décisions officielles appartiennent aux autorités et aux professionnels habilités.',
    en: 'Stay, permit, residence and document requirements depend on the profile and current rules. Bosphoras coordinates the process, while official decisions remain with authorities and qualified professionals.',
    ru: 'Условия пребывания, ВНЖ и документы зависят от профиля и действующих правил. Bosphoras координирует процесс, а официальные решения принимают органы и квалифицированные специалисты.',
    ar: 'تعتمد شروط الإقامة والتصاريح والمستندات على الملف والقواعد السارية. ينسق Bosphoras المسار، بينما تبقى القرارات الرسمية للسلطات والمهنيين المؤهلين.',
  },
  'legal-tax': {
    fr: 'Bosphoras ne fournit pas de conseil juridique ou fiscal réglementé. Les conclusions doivent être validées directement par un avocat, fiscaliste, comptable ou notaire qualifié dans les juridictions concernées.',
    en: 'Bosphoras does not provide regulated legal or tax advice. Conclusions must be validated directly by qualified lawyers, tax advisers, accountants or notaries in the relevant jurisdictions.',
    ru: 'Bosphoras не оказывает регулируемые юридические или налоговые консультации. Выводы должны подтверждаться квалифицированными юристами, налоговыми консультантами, бухгалтерами или нотариусами.',
    ar: 'لا يقدم Bosphoras استشارات قانونية أو ضريبية منظمة. يجب اعتماد النتائج مباشرة من محامين أو مستشارين ضريبيين أو محاسبين أو موثقين مؤهلين.',
  },
  'business-setup': {
    fr: 'La création d’une société, l’adresse, la banque et la comptabilité doivent correspondre à l’activité réelle. Les formalités et validations sont réalisées par les professionnels et autorités compétents.',
    en: 'Company formation, address, banking and accounting must match the real activity. Formalities and validations are handled by the relevant professionals and authorities.',
    ru: 'Регистрация компании, адрес, банк и бухгалтерия должны соответствовать реальной деятельности. Формальности и подтверждения выполняются компетентными специалистами и органами.',
    ar: 'يجب أن يتوافق تأسيس الشركة والعنوان والبنك والمحاسبة مع النشاط الفعلي. تتولى الجهات المهنية والسلطات المختصة الإجراءات والموافقات.',
  },
  property: {
    fr: 'Aucun achat ou engagement immobilier ne doit être confirmé sans vérification des titres, documents, conditions contractuelles et, lorsque nécessaire, revue juridique indépendante.',
    en: 'No property purchase or commitment should be confirmed without title, document and contract checks and, when needed, independent legal review.',
    ru: 'Покупка или обязательство по недвижимости не должны подтверждаться без проверки титула, документов, условий договора и при необходимости независимой юридической проверки.',
    ar: 'لا ينبغي تأكيد أي شراء أو التزام عقاري دون فحص الملكية والمستندات والشروط التعاقدية والمراجعة القانونية المستقلة عند الحاجة.',
  },
  'health-insurance': {
    fr: 'Bosphoras ne pose pas de diagnostic médical et ne remplace ni médecin ni assureur. Les garanties, exclusions, tarifs, décisions médicales et prises en charge doivent être confirmés directement par les professionnels concernés.',
    en: 'Bosphoras does not diagnose medical conditions and does not replace doctors or insurers. Coverage, exclusions, pricing, medical decisions and approvals must be confirmed directly by the relevant professionals.',
    ru: 'Bosphoras не ставит диагнозы и не заменяет врача или страховщика. Покрытие, исключения, тарифы, медицинские решения и согласования подтверждаются соответствующими специалистами.',
    ar: 'لا يشخص Bosphoras الحالات الطبية ولا يحل محل الطبيب أو شركة التأمين. يجب تأكيد التغطية والاستثناءات والأسعار والقرارات الطبية والموافقات مباشرة من الجهات المختصة.',
  },
  offices: {
    fr: 'L’usage d’une adresse ou d’un bureau pour une société peut avoir des conséquences administratives, bancaires ou fiscales. Le contrat et l’usage déclaré doivent être vérifiés avant engagement.',
    en: 'Using an address or office for a company can have administrative, banking or tax consequences. The contract and declared use should be checked before commitment.',
    ru: 'Использование адреса или офиса компанией может иметь административные, банковские или налоговые последствия. Договор и заявленное использование нужно проверить заранее.',
    ar: 'قد يترتب على استخدام عنوان أو مكتب للشركة آثار إدارية أو مصرفية أو ضريبية. يجب التحقق من العقد والاستخدام المعلن قبل الالتزام.',
  },
  'vip-transport': {
    fr: 'Véhicules, chauffeurs, appareils, yachts, horaires et tarifs restent soumis à disponibilité et aux conditions du prestataire ou opérateur. Bosphoras coordonne la demande et les confirmations ; il n’agit pas comme transporteur.',
    en: 'Vehicles, drivers, aircraft, yachts, schedules and pricing remain subject to availability and provider or operator terms. Bosphoras coordinates the request and confirmations; it does not act as the carrier.',
    ru: 'Автомобили, водители, воздушные суда, яхты, расписание и цены зависят от доступности и условий поставщика или оператора. Bosphoras координирует запрос и подтверждения, но не является перевозчиком.',
    ar: 'تخضع المركبات والسائقون والطائرات واليخوت والمواعيد والأسعار للتوفر وشروط المزود أو المشغل. ينسق Bosphoras الطلب والتأكيدات ولا يعمل كناقل.',
  },
  hospitality: {
    fr: 'Hôtels, restaurants, villas, clubs, tables et événements sont soumis aux disponibilités, politiques de réservation, dépôts et règles des établissements. Aucun accès ne doit être considéré comme garanti avant confirmation écrite.',
    en: 'Hotels, restaurants, villas, clubs, tables and events are subject to availability, booking policies, deposits and venue rules. No access should be considered guaranteed before written confirmation.',
    ru: 'Отели, рестораны, виллы, клубы, столы и мероприятия зависят от доступности, правил бронирования, депозитов и условий площадки. Доступ не считается гарантированным до письменного подтверждения.',
    ar: 'تخضع الفنادق والمطاعم والفيلات والنوادي والطاولات والفعاليات للتوفر وسياسات الحجز والودائع وقواعد المكان. لا يعتبر أي وصول مضموناً قبل تأكيد مكتوب.',
  },
  'private-access': {
    fr: 'L’accès membre, les avantages, les introductions et les disponibilités restent soumis au cadre Bosphoras Private Access, au profil validé et aux conditions des partenaires externes.',
    en: 'Membership access, benefits, introductions and availability remain subject to the Bosphoras Private Access framework, validated profile and external partner terms.',
    ru: 'Членский доступ, преимущества, интродукции и доступность зависят от правил Bosphoras Private Access, подтвержденного профиля и условий внешних партнеров.',
    ar: 'يخضع وصول العضوية والمزايا والتعارف والتوفر لإطار Bosphoras Private Access والملف المعتمد وشروط الشركاء الخارجيين.',
  },
  'luxury-shopping': {
    fr: 'Disponibilité, authenticité, état, provenance, prix et conditions de livraison doivent être confirmés avant paiement. Bosphoras coordonne la recherche et les intermédiaires sans garantir un article non confirmé.',
    en: 'Availability, authenticity, condition, provenance, price and delivery terms must be confirmed before payment. Bosphoras coordinates sourcing and intermediaries without guaranteeing an unconfirmed item.',
    ru: 'Доступность, подлинность, состояние, происхождение, цена и доставка должны быть подтверждены до оплаты. Bosphoras координирует поиск и посредников, не гарантируя неподтвержденный товар.',
    ar: 'يجب تأكيد التوفر والأصالة والحالة والمصدر والسعر وشروط التسليم قبل الدفع. ينسق Bosphoras البحث والوسطاء دون ضمان قطعة غير مؤكدة.',
  },
  'family-services': {
    fr: 'Écoles, santé, logement, sécurité et services familiaux ont leurs propres règles, admissions, contrats et disponibilités. Chaque élément doit être confirmé auprès du prestataire ou de l’institution concernée.',
    en: 'Schools, healthcare, housing, security and family services have their own rules, admissions, contracts and availability. Each item must be confirmed with the relevant provider or institution.',
    ru: 'Школы, медицина, жилье, безопасность и семейные услуги имеют собственные правила, прием, договоры и доступность. Каждый элемент подтверждается у соответствующей организации.',
    ar: 'للمدارس والصحة والسكن والأمن والخدمات العائلية قواعدها وقبولها وعقودها وتوفرها. يجب تأكيد كل عنصر لدى الجهة أو المؤسسة المعنية.',
  },
  'administrative-support': {
    fr: 'Les administrations peuvent modifier formulaires, pièces, délais et modalités. Bosphoras aide à préparer et coordonner le dossier, mais l’acceptation finale appartient à l’autorité compétente.',
    en: 'Authorities may change forms, documents, deadlines and procedures. Bosphoras helps prepare and coordinate the file, while final acceptance remains with the competent authority.',
    ru: 'Органы могут менять формы, документы, сроки и процедуры. Bosphoras помогает подготовить и координировать дело, а окончательное решение принимает компетентный орган.',
    ar: 'قد تغير السلطات النماذج والمستندات والمواعيد والإجراءات. يساعد Bosphoras في إعداد الملف وتنسيقه، بينما يبقى القرار النهائي للجهة المختصة.',
  },
};

function complianceText(page: ProgrammaticPage) {
  return complianceByCategory[page.service.category][page.locale];
}

function processSteps(page: ProgrammaticPage) {
  const locale = page.locale;
  const city = page.city.name[locale];
  const points = planningPoints(page);

  if (locale === 'fr') return [
    'Cadrage précis du besoin et du calendrier',
    `Vérification des éléments clés : ${points[0]} ; ${points[1]}`,
    `Sélection des interlocuteurs ou prestataires adaptés à ${city}`,
    'Confirmation des conditions, coûts, disponibilités et délais',
    'Coordination locale et suivi jusqu’à la clôture de la demande',
  ];
  if (locale === 'ru') return [
    'Точное определение задачи и сроков',
    `Проверка ключевых элементов: ${points[0]}; ${points[1]}`,
    `Подбор подходящих специалистов или поставщиков в ${city}`,
    'Подтверждение условий, стоимости, доступности и сроков',
    'Локальная координация и сопровождение до закрытия запроса',
  ];
  if (locale === 'ar') return [
    'تحديد الطلب والجدول الزمني بدقة',
    `التحقق من العناصر الأساسية: ${points[0]}؛ ${points[1]}`,
    `اختيار الجهات أو المزودين المناسبين في ${city}`,
    'تأكيد الشروط والتكاليف والتوفر والمواعيد',
    'التنسيق المحلي والمتابعة حتى إغلاق الطلب',
  ];
  return [
    'Define the request and timeline precisely',
    `Check the key elements: ${points[0]}; ${points[1]}`,
    `Select suitable professionals or providers in ${city}`,
    'Confirm conditions, costs, availability and timing',
    'Coordinate locally and follow through until the request is closed',
  ];
}

function buildFaqs(page: ProgrammaticPage): FaqItem[] {
  const locale = page.locale;
  const service = serviceCoreName(page);
  const city = page.city.name[locale];
  const market = page.market.countryName;
  const points = planningPoints(page);

  if (locale === 'fr') return [
    { question: `Par où commencer pour ${service} à ${city} ?`, answer: directAnswer(page) },
    { question: 'Quelles informations faut-il préparer ?', answer: `Préparez au minimum ${points[0]}, ${points[1]}, ${points[2]} et ${points[3]}. Plus le brief est précis, plus les confirmations sont fiables.` },
    { question: `Combien de temps faut-il prévoir ?`, answer: `Le délai dépend notamment de ${points[0]} et ${points[1]}, mais aussi des disponibilités des professionnels, prestataires ou autorités concernés. Bosphoras confirme un calendrier réaliste après revue du besoin.` },
    { question: `Ce service est-il adapté à un client lié à ${market} ?`, answer: `${page.market.audienceProfile} Pour ce besoin précis, Bosphoras tient compte du contexte du client sans appliquer une solution standard à tous les profils.` },
    { question: `Pourquoi ${city} pour ce service ?`, answer: cityContext(page).join(' ') },
    { question: 'Bosphoras réalise-t-il directement la prestation réglementée ou opérée ?', answer: complianceText(page) },
  ];

  if (locale === 'ru') return [
    { question: `С чего начать ${service} в ${city}?`, answer: directAnswer(page) },
    { question: 'Какие данные нужно подготовить?', answer: `Минимально подготовьте: ${points[0]}, ${points[1]}, ${points[2]} и ${points[3]}. Чем точнее brief, тем надежнее подтверждения.` },
    { question: 'Сколько времени нужно?', answer: `Срок зависит от ${points[0]} и ${points[1]}, а также от доступности специалистов, поставщиков или органов. Bosphoras подтверждает реалистичный график после анализа запроса.` },
    { question: `Подходит ли услуга клиенту, связанному с ${market}?`, answer: `${page.market.audienceProfile} Bosphoras учитывает контекст клиента и не применяет одну стандартную схему ко всем профилям.` },
    { question: `Почему ${city}?`, answer: cityContext(page).join(' ') },
    { question: 'Bosphoras сам оказывает регулируемую или операторскую услугу?', answer: complianceText(page) },
  ];

  if (locale === 'ar') return [
    { question: `من أين نبدأ لخدمة ${service} في ${city}؟`, answer: directAnswer(page) },
    { question: 'ما المعلومات التي يجب تحضيرها؟', answer: `يجب تحضير ${points[0]} و${points[1]} و${points[2]} و${points[3]} كحد أدنى. كلما كان الطلب أدق كانت التأكيدات أكثر موثوقية.` },
    { question: 'كم يستغرق الأمر؟', answer: `تعتمد المدة على ${points[0]} و${points[1]} وكذلك على توفر المهنيين أو المزودين أو الجهات المعنية. يؤكد Bosphoras جدولاً واقعياً بعد مراجعة الطلب.` },
    { question: `هل الخدمة مناسبة لعميل مرتبط بـ ${market}؟`, answer: `${page.market.audienceProfile} يأخذ Bosphoras سياق العميل في الاعتبار ولا يطبق حلاً موحداً على جميع الملفات.` },
    { question: `لماذا ${city}؟`, answer: cityContext(page).join(' ') },
    { question: 'هل ينفذ Bosphoras بنفسه الخدمة المنظمة أو التشغيلية؟', answer: complianceText(page) },
  ];

  return [
    { question: `Where should I start with ${service} in ${city}?`, answer: directAnswer(page) },
    { question: 'What information should I prepare?', answer: `Prepare at least ${points[0]}, ${points[1]}, ${points[2]} and ${points[3]}. The more precise the brief, the more reliable the confirmations.` },
    { question: 'How long should I expect?', answer: `Timing depends on ${points[0]} and ${points[1]}, as well as the availability of the relevant professionals, providers or authorities. Bosphoras confirms a realistic timeline after reviewing the request.` },
    { question: `Is this service relevant to a client connected to ${market}?`, answer: `${page.market.audienceProfile} Bosphoras considers the client context rather than applying one standard solution to every profile.` },
    { question: `Why ${city}?`, answer: cityContext(page).join(' ') },
    { question: 'Does Bosphoras directly provide the regulated or operated service?', answer: complianceText(page) },
  ];
}

const relatedFallbacks: Partial<Record<Category, string[]>> = {
  relocation: ['turkey-residence-permit', 'long-term-rental-turkey', 'international-health-insurance-turkey', 'company-setup-turkey'],
  'legal-tax': ['turkey-tax-residency', 'tax-lawyer-turkey', 'contracts-notary-turkey', 'company-setup-turkey'],
  'business-setup': ['company-setup-turkey', 'company-domiciliation-turkey', 'accounting-turkey', 'bank-account-opening-turkey'],
  property: ['real-estate-due-diligence-turkey', 'secure-property-purchase-turkey', 'long-term-rental-turkey', 'property-management-turkey'],
  'health-insurance': ['international-health-insurance-turkey', 'private-doctors-turkey', 'private-clinics-turkey', 'executive-medical-checkup-turkey'],
  offices: ['private-office-turkey', 'premium-shared-office-turkey', 'meeting-room-turkey', 'company-domiciliation-turkey'],
  'vip-transport': ['private-chauffeur-turkey', 'vip-airport-transfer-turkey', 'limousine-vip-van-turkey', 'private-jet-turkey', 'private-yacht-turkey'],
  hospitality: ['hotels-palaces-booking-turkey', 'private-villas-turkey', 'restaurants-best-tables-turkey', 'private-event-turkey'],
  'private-access': ['private-chauffeur-turkey', 'private-villas-turkey', 'private-office-turkey', 'company-setup-turkey'],
  'luxury-shopping': ['personal-shopper-turkey', 'rare-watches-turkey', 'rare-jewelry-handbags-turkey'],
  'family-services': ['international-schools-turkey', 'international-health-insurance-turkey', 'long-term-rental-turkey', 'private-chauffeur-turkey'],
  'administrative-support': ['translation-interpreter-turkey', 'administrative-assistance-turkey', 'company-setup-turkey', 'turkey-residence-permit'],
};

function relatedServices(page: ProgrammaticPage) {
  const requestedIds = [
    ...page.service.relatedServices,
    ...(relatedFallbacks[page.service.category] ?? []),
  ];

  const uniqueIds = [...new Set(requestedIds)].filter((id) => id !== page.service.id);
  const selected = uniqueIds
    .map((id) => programmaticServices.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  if (selected.length >= 3) return selected.slice(0, 4);

  const sameCategory = programmaticServices.filter(
    (service) => service.category === page.service.category && service.id !== page.service.id,
  );

  return [...selected, ...sameCategory]
    .filter((service, index, array) => array.findIndex((item) => item.id === service.id) === index)
    .slice(0, 4);
}

function ctaIntro(page: ProgrammaticPage) {
  const locale = page.locale;
  if (locale === 'fr') return 'Présentez votre besoin, votre calendrier et vos contraintes. Bosphoras vérifie la faisabilité, la bonne séquence et les interlocuteurs à mobiliser avant de lancer la coordination.';
  if (locale === 'ru') return 'Опишите задачу, сроки и ограничения. Bosphoras проверит реализуемость, правильную последовательность и нужных специалистов до начала координации.';
  if (locale === 'ar') return 'اشرح احتياجك وجدولك الزمني والقيود. يتحقق Bosphoras من قابلية التنفيذ والتسلسل الصحيح والجهات الواجب إشراكها قبل بدء التنسيق.';
  return 'Describe your need, timing and constraints. Bosphoras checks feasibility, the right sequence and the people to involve before coordination starts.';
}

export function ProgrammaticPageRenderer({ page }: { page: ProgrammaticPage }) {
  const l = labels(page);
  const locale = page.locale;
  const faqs = buildFaqs(page);
  const canonical = getCanonicalUrl(locale, page.slug);
  const citySlug = getSlugForPage(page.city.id, locale);
  const marketParagraphs = marketContext(page);
  const cityParagraphs = cityContext(page);
  const points = planningPoints(page);
  const related = relatedServices(page);
  const schemas = [
    serviceSchema({ name: page.title, description: page.metaDescription, url: canonical }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Bosphoras', url: getCanonicalUrl(locale, '/') },
      ...(citySlug ? [{ name: page.city.name[locale], url: getCanonicalUrl(locale, citySlug) }] : []),
      { name: serviceCoreName(page), url: canonical },
    ]),
  ];

  return (
    <main className="bg-[#f8f1e7] text-[#101827]" dir={localeDir[locale]}>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]"><MapPin size={15} /> {page.city.name[locale]} · {page.market.countryName}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{page.title.replace(' | Bosphoras', '')}</h1>
            <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_18px_60px_rgba(16,24,39,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">{l.answer}</p>
              <p className="mt-3 text-lg leading-8 text-[#172032]">{directAnswer(page)}</p>
            </div>
            <Link href={privateAssessmentPath(locale)} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">{l.cta}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-6 lg:sticky lg:top-28">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{l.toc}</p>
            {[l.market, l.city, l.coordinates, l.caution, l.process, l.related, l.faq].map((item, index) => <a key={item} href={`#section-${index}`} className="block py-2 text-sm leading-6 text-[#3e4857] hover:text-[#8a6728]">{item}</a>)}
          </aside>

          <article className="space-y-8">
            <section id="section-0" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.market}</h2>
              {marketParagraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-[#3e4857]">{paragraph}</p>)}
            </section>

            <section id="section-1" className="border border-[#d8c7a1] bg-white p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.city}</h2>
              {cityParagraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-[#3e4857]">{paragraph}</p>)}
            </section>

            <section id="section-2" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.coordinates}</h2>
              <p className="mt-5 text-base leading-8 text-[#3e4857]">{page.service.shortDescription[locale]}</p>
              <p className="mt-4 text-base leading-8 text-[#3e4857]">{page.service.userPainPoint[locale]}</p>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{point}</li>)}
              </ul>
              <p className="mt-6 text-base leading-8 text-[#3e4857]">{page.service.bosphorasSolution[locale]}</p>
            </section>

            <section id="section-3" className="border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9">
              <h2 className="flex items-center gap-3 font-serif text-3xl"><AlertTriangle className="text-[#d2a863]" />{l.caution}</h2>
              <p className="mt-5 text-base leading-8 text-[#d8cfbf]">{complianceText(page)}</p>
            </section>

            <section id="section-4" className="border border-[#d8c7a1] bg-white p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.process}</h2>
              <ol className="mt-6 space-y-3">
                {processSteps(page).map((step, index) => <li key={step} className="flex gap-4 text-sm leading-6 text-[#3e4857]"><span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#d8c7a1] text-xs font-bold text-[#8a6728]">{index + 1}</span><span className="pt-0.5">{step}</span></li>)}
              </ol>
            </section>

            <section id="section-5" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.related}</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {related.map((service) => {
                  const href = getLocalePath(locale, getProgrammaticSlug(service, page.city, page.market));
                  return <Link key={service.id} href={href} className="group flex items-center justify-between border border-[#d8c7a1] px-4 py-4 text-sm text-[#3e4857] transition hover:border-[#8a6728] hover:text-[#8a6728]"><span>{service.name[locale]}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>;
                })}
              </div>
            </section>

            <section id="section-6" className="border border-[#d8c7a1] bg-white p-7 md:p-9">
              <h2 className="font-serif text-3xl text-[#121826]">{l.faq}</h2>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => <div key={faq.question} className="border-t border-[#d8c7a1] pt-5"><h3 className="font-serif text-2xl text-[#121826]">{faq.question}</h3><p className="mt-3 text-base leading-8 text-[#3e4857]">{faq.answer}</p></div>)}
              </div>
            </section>

            <section className="border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9">
              <h2 className="flex items-center gap-3 font-serif text-3xl"><ShieldCheck className="text-[#d2a863]" />Bosphoras Private Desk</h2>
              <p className="mt-5 text-base leading-8 text-[#d8cfbf]">{ctaIntro(page)}</p>
              <p className="mt-3 text-sm leading-7 text-[#b9b1a5]">{page.market.ctaWording}</p>
              <Link href={privateAssessmentPath(locale)} className="mt-7 inline-flex items-center justify-center gap-3 border border-[#d2a863] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#d2a863] transition hover:bg-[#d2a863] hover:text-[#121826]">{l.cta}<ArrowRight size={15} /></Link>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
