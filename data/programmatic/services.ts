import type { Locale } from '@/lib/i18n';

export type ProgrammaticServiceCategory =
  | 'relocation'
  | 'legal-tax'
  | 'business-setup'
  | 'property'
  | 'health-insurance'
  | 'offices'
  | 'vip-transport'
  | 'hospitality'
  | 'private-access'
  | 'luxury-shopping'
  | 'family-services'
  | 'administrative-support';

export type ProgrammaticService = {
  id: string;
  category: ProgrammaticServiceCategory;
  priorityLevel: 1 | 2 | 3;
  name: Record<Locale, string>;
  slug: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  userPainPoint: Record<Locale, string>;
  bosphorasSolution: Record<Locale, string>;
  faqSeeds: Record<Locale, string[]>;
  relatedServices: string[];
  cta: Record<Locale, string>;
};

type ServiceSeed = {
  id: string;
  category: ProgrammaticServiceCategory;
  priorityLevel: 1 | 2 | 3;
  name: Record<Locale, string>;
  slug: Record<Locale, string>;
  relatedServices?: string[];
};

const categoryDescriptions: Record<ProgrammaticServiceCategory, Record<Locale, string>> = {
  relocation: {
    fr: 'Accompagnement privé pour structurer l’installation en Turquie, avec coordination des étapes administratives, familiales et pratiques.',
    en: 'Private support to structure relocation to Turkey, coordinating administrative, family and practical steps.',
    ru: 'Частное сопровождение переезда в Турцию с координацией административных, семейных и практических этапов.',
    ar: 'دعم خاص لتنظيم الانتقال إلى تركيا مع تنسيق الخطوات الإدارية والعائلية والعملية.',
  },
  'legal-tax': {
    fr: 'Coordination avec des professionnels qualifiés pour les sujets juridiques, fiscaux, contractuels et de conformité.',
    en: 'Coordination with qualified professionals for legal, tax, contractual and compliance matters.',
    ru: 'Координация с квалифицированными специалистами по юридическим, налоговым, договорным и compliance-вопросам.',
    ar: 'تنسيق مع مهنيين مؤهلين للمواضيع القانونية والضريبية والعقود والامتثال.',
  },
  'business-setup': {
    fr: 'Mise en relation et coordination pour structurer l’activité, la société, la comptabilité, les bureaux et les opérations.',
    en: 'Introductions and coordination to structure business activity, company, accounting, offices and operations.',
    ru: 'Интродукции и координация для структурирования бизнеса, компании, бухгалтерии, офисов и операций.',
    ar: 'تعارف وتنسيق لهيكلة النشاط والشركة والمحاسبة والمكاتب والعمليات.',
  },
  property: {
    fr: 'Coordination immobilière prudente avec agents, avocats, vérifications, location, achat et gestion locale.',
    en: 'Careful property coordination with agents, lawyers, due diligence, rental, purchase and local management.',
    ru: 'Аккуратная координация недвижимости с агентами, юристами, проверками, арендой, покупкой и управлением.',
    ar: 'تنسيق عقاري حذر مع وكلاء ومحامين وتدقيق وإيجار وشراء وإدارة محلية.',
  },
  'health-insurance': {
    fr: 'Coordination santé et assurance avec courtiers, assureurs, médecins, cliniques et hôpitaux privés sélectionnés.',
    en: 'Healthcare and insurance coordination with selected brokers, insurers, doctors, clinics and private hospitals.',
    ru: 'Координация здоровья и страхования с выбранными брокерами, страховщиками, врачами, клиниками и частными больницами.',
    ar: 'تنسيق الصحة والتأمين مع وسطاء وشركات تأمين وأطباء وعيادات ومستشفيات خاصة مختارة.',
  },
  offices: {
    fr: 'Coordination d’adresses, bureaux privés, espaces premium, salles de réunion et solutions de travail en Turquie.',
    en: 'Coordination of addresses, private offices, premium workspaces, meeting rooms and work solutions in Turkey.',
    ru: 'Координация адресов, частных офисов, premium workspaces, переговорных комнат и рабочих решений в Турции.',
    ar: 'تنسيق العناوين والمكاتب الخاصة ومساحات العمل الفاخرة وقاعات الاجتماعات وحلول العمل في تركيا.',
  },
  'vip-transport': {
    fr: 'Coordination de mobilité premium : chauffeurs privés, transferts, vans VIP, jets, hélicoptères et yachts.',
    en: 'Premium mobility coordination: private drivers, transfers, VIP vans, jets, helicopters and yachts.',
    ru: 'Координация premium mobility: личные водители, трансферы, VIP vans, джеты, вертолеты и яхты.',
    ar: 'تنسيق تنقل فاخر: سائقون خاصون، انتقالات، سيارات VIP، طائرات، مروحيات ويخوت.',
  },
  hospitality: {
    fr: 'Coordination hospitality : hôtels, palaces, villas, restaurants, dîners d’affaires, événements et accès privés.',
    en: 'Hospitality coordination: hotels, palaces, villas, restaurants, business dinners, events and private access.',
    ru: 'Координация hospitality: отели, palaces, виллы, рестораны, бизнес-ужины, события и private access.',
    ar: 'تنسيق الضيافة: فنادق، قصور، فيلات، مطاعم، عشاءات أعمال، فعاليات ووصول خاص.',
  },
  'private-access': {
    fr: 'Accès membre et coordination prioritaire pour les clients sélectionnés du Bosphoras Private Access Club.',
    en: 'Membership access and priority coordination for selected Bosphoras Private Access Club clients.',
    ru: 'Членский доступ и приоритетная координация для выбранных клиентов Bosphoras Private Access Club.',
    ar: 'وصول عضوية وتنسيق أولوية للعملاء المختارين في Bosphoras Private Access Club.',
  },
  'luxury-shopping': {
    fr: 'Coordination shopping luxe, personal shopper, montres, bijoux, sacs rares et demandes confidentielles.',
    en: 'Luxury shopping coordination, personal shopper, watches, jewelry, rare handbags and confidential requests.',
    ru: 'Координация luxury shopping, personal shopper, часов, украшений, редких сумок и конфиденциальных запросов.',
    ar: 'تنسيق التسوق الفاخر، personal shopper، ساعات، مجوهرات، حقائب نادرة وطلبات سرية.',
  },
  'family-services': {
    fr: 'Services familiaux pour écoles, santé, logement, sécurité, installation quotidienne et continuité privée.',
    en: 'Family services for schools, healthcare, housing, security, daily setup and private continuity.',
    ru: 'Семейные сервисы для школ, здоровья, жилья, безопасности, ежедневной установки и private continuity.',
    ar: 'خدمات عائلية للمدارس والصحة والسكن والأمن والاستقرار اليومي والاستمرارية الخاصة.',
  },
  'administrative-support': {
    fr: 'Assistance administrative, traductions, interprètes, documents, rendez-vous et coordination locale.',
    en: 'Administrative assistance, translations, interpreters, documents, appointments and local coordination.',
    ru: 'Административная помощь, переводы, переводчики, документы, встречи и локальная координация.',
    ar: 'مساعدة إدارية، ترجمات، مترجمون، مستندات، مواعيد وتنسيق محلي.',
  },
};

const painPointByCategory: Record<ProgrammaticServiceCategory, Record<Locale, string>> = {
  relocation: { fr: 'Les clients étrangers perdent souvent du temps avec des informations contradictoires, des interlocuteurs non vérifiés et des démarches mal séquencées.', en: 'Foreign clients often lose time with contradictory information, unverified contacts and poorly sequenced steps.', ru: 'Иностранные клиенты часто теряют время из-за противоречивой информации, непроверенных контактов и неверной последовательности шагов.', ar: 'غالباً يضيع العملاء الأجانب الوقت بسبب معلومات متضاربة وجهات غير موثوقة وخطوات غير مرتبة.' },
  'legal-tax': { fr: 'Le risque principal est de prendre une décision juridique ou fiscale sans validation professionnelle dans les bonnes juridictions.', en: 'The main risk is making a legal or tax decision without professional validation in the right jurisdictions.', ru: 'Главный риск — принять юридическое или налоговое решение без профессиональной проверки в нужных юрисдикциях.', ar: 'الخطر الرئيسي هو اتخاذ قرار قانوني أو ضريبي دون تأكيد مهني في الجهات الصحيحة.' },
  'business-setup': { fr: 'Une société peut être créée rapidement, mais une mauvaise structure peut compliquer la banque, la fiscalité et l’exploitation.', en: 'A company can be incorporated quickly, but a poor structure may complicate banking, tax and operations.', ru: 'Компанию можно создать быстро, но неправильная структура усложнит банк, налоги и работу.', ar: 'يمكن تأسيس شركة بسرعة، لكن الهيكلة الخاطئة قد تعقد البنوك والضرائب والتشغيل.' },
  property: { fr: 'Le risque immobilier vient souvent d’un achat trop rapide, sans due diligence, sans lecture de quartier ou sans vérification des documents.', en: 'Property risk often comes from buying too quickly without due diligence, neighborhood reading or document verification.', ru: 'Риск недвижимости часто возникает из-за слишком быстрой покупки без due diligence, анализа района или проверки документов.', ar: 'غالباً يأتي خطر العقار من الشراء السريع دون تدقيق أو قراءة للحي أو فحص للمستندات.' },
  'health-insurance': { fr: 'Les familles doivent éviter les couvertures mal comprises, les exclusions, les hôpitaux mal adaptés ou les contacts médicaux improvisés.', en: 'Families must avoid misunderstood coverage, exclusions, unsuitable hospitals or improvised medical contacts.', ru: 'Семьи должны избегать непонятного покрытия, исключений, неподходящих больниц и случайных медицинских контактов.', ar: 'يجب على العائلات تجنب التغطيات غير المفهومة والاستثناءات والمستشفيات غير المناسبة والاتصالات الطبية العشوائية.' },
  offices: { fr: 'Le mauvais bureau ou la mauvaise adresse peut nuire à l’image, à la banque, aux rendez-vous et à l’organisation locale.', en: 'The wrong office or address can affect image, banking, meetings and local organization.', ru: 'Неправильный офис или адрес может повлиять на имидж, банк, встречи и локальную организацию.', ar: 'قد يؤثر المكتب أو العنوان غير المناسب على الصورة والبنوك والاجتماعات والتنظيم المحلي.' },
  'vip-transport': { fr: 'Le transport premium exige fiabilité, discrétion, ponctualité et prestataires réellement vérifiés.', en: 'Premium transport requires reliability, discretion, punctuality and genuinely verified providers.', ru: 'Premium transport требует надежности, дискретности, пунктуальности и действительно проверенных поставщиков.', ar: 'يتطلب النقل الفاخر موثوقية وسرية ودقة ومزودين تم التحقق منهم فعلاً.' },
  hospitality: { fr: 'Les accès premium doivent être coordonnés sans promesse excessive, avec respect des disponibilités, règles et profils.', en: 'Premium access must be coordinated without excessive promises, respecting availability, rules and profiles.', ru: 'Premium access должен координироваться без чрезмерных обещаний, с учетом доступности, правил и профилей.', ar: 'يجب تنسيق الوصول الراقي دون وعود مبالغ فيها مع احترام التوفر والقواعد والملفات.' },
  'private-access': { fr: 'Les clients sérieux ne veulent pas du bruit : ils veulent un accès prioritaire, discret et filtré.', en: 'Serious clients do not want noise: they want priority, discreet and filtered access.', ru: 'Серьезным клиентам не нужен шум: им нужен приоритетный, дискретный и фильтрованный доступ.', ar: 'العملاء الجادون لا يريدون ضجيجاً: يريدون وصولاً أولوياً وسرياً ومنتقًى.' },
  'luxury-shopping': { fr: 'Les achats rares demandent discrétion, authenticité, disponibilité et intermédiaires fiables.', en: 'Rare purchases require discretion, authenticity, availability and reliable intermediaries.', ru: 'Редкие покупки требуют дискретности, подлинности, доступности и надежных посредников.', ar: 'تتطلب المشتريات النادرة السرية والأصالة والتوفر ووسطاء موثوقين.' },
  'family-services': { fr: 'L’installation familiale échoue souvent quand santé, école, logement, transport et quotidien ne sont pas coordonnés ensemble.', en: 'Family relocation often fails when healthcare, school, housing, transport and daily life are not coordinated together.', ru: 'Семейный переезд часто проваливается, когда здоровье, школа, жилье, транспорт и быт не координируются вместе.', ar: 'يفشل الانتقال العائلي غالباً عندما لا يتم تنسيق الصحة والمدرسة والسكن والنقل والحياة اليومية معاً.' },
  'administrative-support': { fr: 'Les démarches administratives deviennent vite complexes quand les documents, traductions et rendez-vous sont mal préparés.', en: 'Administrative steps quickly become complex when documents, translations and appointments are poorly prepared.', ru: 'Административные шаги быстро усложняются, когда документы, переводы и встречи плохо подготовлены.', ar: 'تصبح الإجراءات الإدارية معقدة بسرعة عندما تكون المستندات والترجمات والمواعيد غير جاهزة.' },
};

const solutionByCategory: Record<ProgrammaticServiceCategory, Record<Locale, string>> = {
  relocation: { fr: 'Bosphoras structure le parcours, filtre les informations, coordonne les professionnels et suit les étapes jusqu’à l’installation.', en: 'Bosphoras structures the journey, filters information, coordinates professionals and follows each step through settlement.', ru: 'Bosphoras структурирует путь, фильтрует информацию, координирует специалистов и сопровождает этапы до установки.', ar: 'ينظم Bosphoras المسار، يرشح المعلومات، ينسق المهنيين ويتابع كل خطوة حتى الاستقرار.' },
  'legal-tax': { fr: 'Bosphoras organise l’accès à des avocats, fiscalistes, comptables ou notaires sélectionnés selon le sujet.', en: 'Bosphoras organizes access to selected lawyers, tax advisors, accountants or notaries according to the subject.', ru: 'Bosphoras организует доступ к выбранным юристам, налоговым консультантам, бухгалтерам или нотариусам.', ar: 'ينظم Bosphoras الوصول إلى محامين ومستشارين ضريبيين ومحاسبين أو موثقين مختارين حسب الموضوع.' },
  'business-setup': { fr: 'Bosphoras coordonne la structure, les interlocuteurs, les bureaux, la banque, la comptabilité et les étapes opérationnelles.', en: 'Bosphoras coordinates structure, contacts, offices, banking, accounting and operational steps.', ru: 'Bosphoras координирует структуру, контакты, офисы, банк, бухгалтерию и операционные этапы.', ar: 'ينسق Bosphoras الهيكل والجهات والمكاتب والبنوك والمحاسبة والخطوات التشغيلية.' },
  property: { fr: 'Bosphoras filtre les biens, coordonne les agents, la due diligence, les avocats, les visites et la gestion locale.', en: 'Bosphoras filters properties, coordinates agents, due diligence, lawyers, visits and local management.', ru: 'Bosphoras фильтрует объекты, координирует агентов, due diligence, юристов, визиты и управление.', ar: 'يرشح Bosphoras العقارات وينسق الوكلاء والتدقيق والمحامين والزيارات والإدارة المحلية.' },
  'health-insurance': { fr: 'Bosphoras coordonne assureurs, courtiers, médecins, cliniques privées et parcours santé adaptés au profil.', en: 'Bosphoras coordinates insurers, brokers, doctors, private clinics and healthcare pathways adapted to the profile.', ru: 'Bosphoras координирует страховщиков, брокеров, врачей, частные клиники и медицинские маршруты под профиль.', ar: 'ينسق Bosphoras شركات التأمين والوسطاء والأطباء والعيادات الخاصة ومسارات صحية مناسبة للملف.' },
  offices: { fr: 'Bosphoras identifie les adresses et espaces adaptés à l’image, à l’usage réel et aux besoins business.', en: 'Bosphoras identifies addresses and spaces adapted to image, real use and business needs.', ru: 'Bosphoras подбирает адреса и пространства под имидж, реальное использование и бизнес-потребности.', ar: 'يحدد Bosphoras العناوين والمساحات المناسبة للصورة والاستخدام الحقيقي واحتياجات الأعمال.' },
  'vip-transport': { fr: 'Bosphoras coordonne des prestataires sélectionnés pour organiser trajets, arrivées, chauffeurs et mobilités privées.', en: 'Bosphoras coordinates selected providers to organize trips, arrivals, drivers and private mobility.', ru: 'Bosphoras координирует выбранных поставщиков для поездок, прибытий, водителей и private mobility.', ar: 'ينسق Bosphoras مزودين مختارين لتنظيم الرحلات والوصول والسائقين والتنقل الخاص.' },
  hospitality: { fr: 'Bosphoras filtre les demandes, coordonne les réservations et privilégie une exécution discrète et réaliste.', en: 'Bosphoras filters requests, coordinates reservations and favors discreet, realistic execution.', ru: 'Bosphoras фильтрует запросы, координирует бронирования и предпочитает дискретное, реалистичное исполнение.', ar: 'يرشح Bosphoras الطلبات وينسق الحجوزات ويفضل تنفيذاً هادئاً وواقعياً.' },
  'private-access': { fr: 'Bosphoras Private Access donne un cadre de relation annuelle, accès prioritaire et coordination confidentielle.', en: 'Bosphoras Private Access provides an annual relationship framework, priority access and confidential coordination.', ru: 'Bosphoras Private Access дает годовую рамку отношений, приоритетный доступ и конфиденциальную координацию.', ar: 'يوفر Bosphoras Private Access إطار علاقة سنوية ووصولاً أولوياً وتنسيقاً سرياً.' },
  'luxury-shopping': { fr: 'Bosphoras coordonne les recherches, vérifie les intermédiaires et organise l’accès selon disponibilité et profil.', en: 'Bosphoras coordinates searches, checks intermediaries and organizes access according to availability and profile.', ru: 'Bosphoras координирует поиск, проверяет посредников и организует доступ по доступности и профилю.', ar: 'ينسق Bosphoras البحث ويتحقق من الوسطاء وينظم الوصول حسب التوفر والملف.' },
  'family-services': { fr: 'Bosphoras coordonne les besoins familiaux dans une logique globale : logement, santé, école, sécurité et quotidien.', en: 'Bosphoras coordinates family needs globally: housing, healthcare, school, security and daily life.', ru: 'Bosphoras координирует семейные потребности комплексно: жилье, здоровье, школа, безопасность и быт.', ar: 'ينسق Bosphoras احتياجات العائلة بشكل شامل: السكن والصحة والمدرسة والأمن والحياة اليومية.' },
  'administrative-support': { fr: 'Bosphoras organise les documents, traductions, rendez-vous et échanges avec les bons interlocuteurs.', en: 'Bosphoras organizes documents, translations, appointments and exchanges with the right contacts.', ru: 'Bosphoras организует документы, переводы, встречи и коммуникацию с нужными контактами.', ar: 'ينظم Bosphoras المستندات والترجمات والمواعيد والتواصل مع الجهات الصحيحة.' },
};

const faqByCategory: Record<ProgrammaticServiceCategory, Record<Locale, string[]>> = Object.fromEntries(
  Object.keys(categoryDescriptions).map((category) => [
    category,
    {
      fr: ['Par où commencer ?', 'Bosphoras remplace-t-il les professionnels réglementés ?', 'Combien de temps faut-il prévoir ?', 'Le service peut-il être intégré au Private Desk ?'],
      en: ['Where should I start?', 'Does Bosphoras replace regulated professionals?', 'How long should I expect?', 'Can this service be part of Private Desk support?'],
      ru: ['С чего начать?', 'Bosphoras заменяет регулируемых специалистов?', 'Сколько времени нужно?', 'Можно ли включить это в Private Desk?'],
      ar: ['من أين أبدأ؟', 'هل يحل Bosphoras محل المهنيين المنظمين؟', 'كم من الوقت يجب توقعه؟', 'هل يمكن إدخال هذه الخدمة ضمن Private Desk؟'],
    },
  ])
) as Record<ProgrammaticServiceCategory, Record<Locale, string[]>>;

const ctaByLocale: Record<Locale, string> = {
  fr: 'Demander un diagnostic privé',
  en: 'Request a private assessment',
  ru: 'Получить частную консультацию',
  ar: 'طلب تقييم خاص',
};

const seeds: ServiceSeed[] = [
  { id: 'private-relocation-turkey', category: 'relocation', priorityLevel: 1, name: { fr: 'Relocation privée en Turquie', en: 'Private relocation in Turkey', ru: 'Частный переезд в Турцию', ar: 'انتقال خاص إلى تركيا' }, slug: { fr: 'relocation-privee-turquie', en: 'private-relocation-turkey', ru: 'chastnyy-pereezd-turtsiya', ar: 'private-relocation-turkey' }, relatedServices: ['family-relocation-turkey', 'turkey-residence-permit', 'long-term-rental-turkey'] },
  { id: 'relocation-advisory-turkey', category: 'relocation', priorityLevel: 1, name: { fr: 'Conseil relocation en Turquie', en: 'Relocation advisory in Turkey', ru: 'Консультация по релокации в Турции', ar: 'استشارة انتقال في تركيا' }, slug: { fr: 'conseil-relocation-turquie', en: 'relocation-advisory-turkey', ru: 'konsultatsiya-relokatsiya-turtsiya', ar: 'relocation-advisory-turkey' } },
  { id: 'turkey-residence-permit', category: 'relocation', priorityLevel: 1, name: { fr: 'Permis de résidence en Turquie', en: 'Turkey residence permit', ru: 'Вид на жительство в Турции', ar: 'تصريح إقامة في تركيا' }, slug: { fr: 'permis-residence-turquie', en: 'turkey-residence-permit', ru: 'vid-na-zhitelstvo-turtsiya', ar: 'turkey-residence-permit' } },
  { id: 'turkey-tax-residency', category: 'legal-tax', priorityLevel: 1, name: { fr: 'Résidence fiscale en Turquie', en: 'Turkey tax residency', ru: 'Налоговое резидентство Турции', ar: 'الإقامة الضريبية في تركيا' }, slug: { fr: 'residence-fiscale-turquie', en: 'turkey-tax-residency', ru: 'nalogovoe-rezidentstvo-turtsiya', ar: 'turkey-tax-residency' } },
  { id: 'company-setup-turkey', category: 'business-setup', priorityLevel: 1, name: { fr: 'Création d’entreprise en Turquie', en: 'Company setup in Turkey', ru: 'Открытие компании в Турции', ar: 'تأسيس شركة في تركيا' }, slug: { fr: 'creation-entreprise-turquie', en: 'company-setup-turkey', ru: 'otkrytie-kompanii-turtsiya', ar: 'company-setup-turkey' } },
  { id: 'accounting-turkey', category: 'business-setup', priorityLevel: 1, name: { fr: 'Comptabilité en Turquie', en: 'Accounting in Turkey', ru: 'Бухгалтерия в Турции', ar: 'المحاسبة في تركيا' }, slug: { fr: 'comptabilite-turquie', en: 'accounting-turkey', ru: 'bukhgalteriya-turtsiya', ar: 'accounting-turkey' } },
  { id: 'company-domiciliation-turkey', category: 'business-setup', priorityLevel: 2, name: { fr: 'Domiciliation d’entreprise en Turquie', en: 'Company domiciliation in Turkey', ru: 'Юридический адрес компании в Турции', ar: 'عنوان شركة في تركيا' }, slug: { fr: 'domiciliation-entreprise-turquie', en: 'company-domiciliation-turkey', ru: 'yuridicheskiy-adres-kompanii-turtsiya', ar: 'company-domiciliation-turkey' } },
  { id: 'bank-account-opening-turkey', category: 'business-setup', priorityLevel: 1, name: { fr: 'Ouverture de compte bancaire en Turquie', en: 'Bank account opening in Turkey', ru: 'Открытие банковского счета в Турции', ar: 'فتح حساب مصرفي في تركيا' }, slug: { fr: 'ouverture-compte-bancaire-turquie', en: 'bank-account-opening-turkey', ru: 'otkrytie-bankovskogo-scheta-turtsiya', ar: 'bank-account-opening-turkey' } },
  { id: 'private-office-turkey', category: 'offices', priorityLevel: 2, name: { fr: 'Bureau privé en Turquie', en: 'Private office in Turkey', ru: 'Частный офис в Турции', ar: 'مكتب خاص في تركيا' }, slug: { fr: 'bureau-prive-turquie', en: 'private-office-turkey', ru: 'chastnyy-ofis-turtsiya', ar: 'private-office-turkey' } },
  { id: 'premium-shared-office-turkey', category: 'offices', priorityLevel: 3, name: { fr: 'Bureau partagé premium en Turquie', en: 'Premium shared office in Turkey', ru: 'Premium shared office в Турции', ar: 'مكتب مشترك فاخر في تركيا' }, slug: { fr: 'bureau-partage-premium-turquie', en: 'premium-shared-office-turkey', ru: 'premium-shared-office-turtsiya', ar: 'premium-shared-office-turkey' } },
  { id: 'meeting-room-turkey', category: 'offices', priorityLevel: 3, name: { fr: 'Salle de réunion en Turquie', en: 'Meeting room in Turkey', ru: 'Переговорная комната в Турции', ar: 'قاعة اجتماع في تركيا' }, slug: { fr: 'salle-reunion-turquie', en: 'meeting-room-turkey', ru: 'peregovornaya-komnata-turtsiya', ar: 'meeting-room-turkey' } },
  { id: 'real-estate-lawyer-turkey', category: 'legal-tax', priorityLevel: 1, name: { fr: 'Avocat immobilier en Turquie', en: 'Real estate lawyer in Turkey', ru: 'Юрист по недвижимости в Турции', ar: 'محامي عقارات في تركيا' }, slug: { fr: 'avocat-immobilier-turquie', en: 'real-estate-lawyer-turkey', ru: 'yurist-nedvizhimost-turtsiya', ar: 'real-estate-lawyer-turkey' } },
  { id: 'tax-lawyer-turkey', category: 'legal-tax', priorityLevel: 1, name: { fr: 'Avocat fiscaliste en Turquie', en: 'Tax lawyer in Turkey', ru: 'Налоговый юрист в Турции', ar: 'محامي ضرائب في تركيا' }, slug: { fr: 'avocat-fiscaliste-turquie', en: 'tax-lawyer-turkey', ru: 'nalogovyy-yurist-turtsiya', ar: 'tax-lawyer-turkey' } },
  { id: 'real-estate-due-diligence-turkey', category: 'property', priorityLevel: 1, name: { fr: 'Due diligence immobilière en Turquie', en: 'Real estate due diligence in Turkey', ru: 'Due diligence недвижимости в Турции', ar: 'تدقيق عقاري في تركيا' }, slug: { fr: 'due-diligence-immobiliere-turquie', en: 'real-estate-due-diligence-turkey', ru: 'due-diligence-nedvizhimost-turtsiya', ar: 'real-estate-due-diligence-turkey' } },
  { id: 'contracts-notary-turkey', category: 'legal-tax', priorityLevel: 2, name: { fr: 'Contrats et notaire en Turquie', en: 'Contracts and notary in Turkey', ru: 'Договоры и нотариус в Турции', ar: 'العقود والكاتب العدل في تركيا' }, slug: { fr: 'contrats-notaire-turquie', en: 'contracts-notary-turkey', ru: 'dogovory-notarius-turtsiya', ar: 'contracts-notary-turkey' } },
  { id: 'secure-property-purchase-turkey', category: 'property', priorityLevel: 1, name: { fr: 'Achat immobilier sécurisé en Turquie', en: 'Secure property purchase in Turkey', ru: 'Безопасная покупка недвижимости в Турции', ar: 'شراء عقار آمن في تركيا' }, slug: { fr: 'achat-immobilier-securise-turquie', en: 'secure-property-purchase-turkey', ru: 'bezopasnaya-pokupka-nedvizhimosti-turtsiya', ar: 'secure-property-purchase-turkey' } },
  { id: 'long-term-rental-turkey', category: 'property', priorityLevel: 1, name: { fr: 'Location longue durée en Turquie', en: 'Long-term rental in Turkey', ru: 'Долгосрочная аренда в Турции', ar: 'إيجار طويل الأمد في تركيا' }, slug: { fr: 'location-longue-duree-turquie', en: 'long-term-rental-turkey', ru: 'dolgosrochnaya-arenda-turtsiya', ar: 'long-term-rental-turkey' } },
  { id: 'premium-short-term-rental-turkey', category: 'property', priorityLevel: 2, name: { fr: 'Location courte durée premium en Turquie', en: 'Premium short-term rental in Turkey', ru: 'Premium short-term rental в Турции', ar: 'إيجار قصير فاخر في تركيا' }, slug: { fr: 'location-courte-duree-premium-turquie', en: 'premium-short-term-rental-turkey', ru: 'premium-short-term-rental-turtsiya', ar: 'premium-short-term-rental-turkey' } },
  { id: 'property-management-turkey', category: 'property', priorityLevel: 2, name: { fr: 'Gestion immobilière en Turquie', en: 'Property management in Turkey', ru: 'Управление недвижимостью в Турции', ar: 'إدارة العقارات في تركيا' }, slug: { fr: 'gestion-immobiliere-turquie', en: 'property-management-turkey', ru: 'upravlenie-nedvizhimostyu-turtsiya', ar: 'property-management-turkey' } },
  { id: 'furniture-interior-design-turkey', category: 'property', priorityLevel: 3, name: { fr: 'Mobilier et décoration intérieure en Turquie', en: 'Furniture and interior design in Turkey', ru: 'Мебель и дизайн интерьера в Турции', ar: 'الأثاث والتصميم الداخلي في تركيا' }, slug: { fr: 'mobilier-decoration-interieure-turquie', en: 'furniture-interior-design-turkey', ru: 'mebel-dizayn-interera-turtsiya', ar: 'furniture-interior-design-turkey' } },
  { id: 'local-health-insurance-turkey', category: 'health-insurance', priorityLevel: 1, name: { fr: 'Assurance santé locale en Turquie', en: 'Local health insurance in Turkey', ru: 'Местная медицинская страховка в Турции', ar: 'تأمين صحي محلي في تركيا' }, slug: { fr: 'assurance-sante-locale-turquie', en: 'local-health-insurance-turkey', ru: 'mestnaya-meditsinskaya-strahovka-turtsiya', ar: 'local-health-insurance-turkey' } },
  { id: 'international-health-insurance-turkey', category: 'health-insurance', priorityLevel: 1, name: { fr: 'Assurance santé internationale en Turquie', en: 'International health insurance in Turkey', ru: 'Международная медицинская страховка в Турции', ar: 'تأمين صحي دولي في تركيا' }, slug: { fr: 'assurance-sante-internationale-turquie', en: 'international-health-insurance-turkey', ru: 'mezhdunarodnaya-meditsinskaya-strahovka-turtsiya', ar: 'international-health-insurance-turkey' } },
  { id: 'home-insurance-turkey', category: 'health-insurance', priorityLevel: 3, name: { fr: 'Assurance habitation en Turquie', en: 'Home insurance in Turkey', ru: 'Страхование жилья в Турции', ar: 'تأمين منزل في تركيا' }, slug: { fr: 'assurance-habitation-turquie', en: 'home-insurance-turkey', ru: 'strahovanie-zhilya-turtsiya', ar: 'home-insurance-turkey' } },
  { id: 'business-insurance-turkey', category: 'health-insurance', priorityLevel: 3, name: { fr: 'Assurance professionnelle en Turquie', en: 'Business insurance in Turkey', ru: 'Бизнес-страхование в Турции', ar: 'تأمين أعمال في تركيا' }, slug: { fr: 'assurance-professionnelle-turquie', en: 'business-insurance-turkey', ru: 'biznes-strahovanie-turtsiya', ar: 'business-insurance-turkey' } },
  { id: 'private-doctors-turkey', category: 'health-insurance', priorityLevel: 2, name: { fr: 'Médecins privés en Turquie', en: 'Private doctors in Turkey', ru: 'Частные врачи в Турции', ar: 'أطباء خاصون في تركيا' }, slug: { fr: 'medecins-prives-turquie', en: 'private-doctors-turkey', ru: 'chastnye-vrachi-turtsiya', ar: 'private-doctors-turkey' } },
  { id: 'private-clinics-turkey', category: 'health-insurance', priorityLevel: 2, name: { fr: 'Cliniques privées en Turquie', en: 'Private clinics in Turkey', ru: 'Частные клиники в Турции', ar: 'عيادات خاصة في تركيا' }, slug: { fr: 'cliniques-privees-turquie', en: 'private-clinics-turkey', ru: 'chastnye-kliniki-turtsiya', ar: 'private-clinics-turkey' } },
  { id: 'executive-medical-checkup-turkey', category: 'health-insurance', priorityLevel: 2, name: { fr: 'Check-up médical exécutif en Turquie', en: 'Executive medical check-up in Turkey', ru: 'Executive medical check-up в Турции', ar: 'فحص طبي تنفيذي في تركيا' }, slug: { fr: 'check-up-medical-executif-turquie', en: 'executive-medical-checkup-turkey', ru: 'executive-medical-checkup-turtsiya', ar: 'executive-medical-checkup-turkey' } },
  { id: 'private-medical-emergency-support-turkey', category: 'health-insurance', priorityLevel: 2, name: { fr: 'Support urgence médicale privée en Turquie', en: 'Private medical emergency support in Turkey', ru: 'Частная поддержка при медицинской срочности в Турции', ar: 'دعم طوارئ طبي خاص في تركيا' }, slug: { fr: 'support-urgence-medicale-privee-turquie', en: 'private-medical-emergency-support-turkey', ru: 'chastnaya-meditsinskaya-srochnost-turtsiya', ar: 'private-medical-emergency-support-turkey' } },
  { id: 'international-schools-turkey', category: 'family-services', priorityLevel: 2, name: { fr: 'Écoles internationales en Turquie', en: 'International schools in Turkey', ru: 'Международные школы в Турции', ar: 'مدارس دولية في تركيا' }, slug: { fr: 'ecoles-internationales-turquie', en: 'international-schools-turkey', ru: 'mezhdunarodnye-shkoly-turtsiya', ar: 'international-schools-turkey' } },
  { id: 'family-relocation-services-turkey', category: 'family-services', priorityLevel: 1, name: { fr: 'Services relocation famille en Turquie', en: 'Family relocation services in Turkey', ru: 'Семейная релокация в Турции', ar: 'خدمات انتقال العائلة في تركيا' }, slug: { fr: 'services-relocation-famille-turquie', en: 'family-relocation-services-turkey', ru: 'semeynaya-relokatsiya-turtsiya', ar: 'family-relocation-services-turkey' } },
  { id: 'private-chauffeur-turkey', category: 'vip-transport', priorityLevel: 2, name: { fr: 'Chauffeur privé en Turquie', en: 'Private chauffeur in Turkey', ru: 'Частный водитель в Турции', ar: 'سائق خاص في تركيا' }, slug: { fr: 'chauffeur-prive-turquie', en: 'private-chauffeur-turkey', ru: 'chastnyy-voditel-turtsiya', ar: 'private-chauffeur-turkey' } },
  { id: 'vip-airport-transfer-turkey', category: 'vip-transport', priorityLevel: 2, name: { fr: 'Transfert aéroport VIP en Turquie', en: 'VIP airport transfer in Turkey', ru: 'VIP трансфер из аэропорта в Турции', ar: 'انتقال مطار VIP في تركيا' }, slug: { fr: 'transfert-aeroport-vip-turquie', en: 'vip-airport-transfer-turkey', ru: 'vip-transfer-aeroport-turtsiya', ar: 'vip-airport-transfer-turkey' } },
  { id: 'limousine-vip-van-turkey', category: 'vip-transport', priorityLevel: 3, name: { fr: 'Limousine et van VIP en Turquie', en: 'Limousine and VIP van in Turkey', ru: 'Лимузин и VIP van в Турции', ar: 'ليموزين وفان VIP في تركيا' }, slug: { fr: 'limousine-van-vip-turquie', en: 'limousine-vip-van-turkey', ru: 'limuzin-vip-van-turtsiya', ar: 'limousine-vip-van-turkey' } },
  { id: 'private-jet-turkey', category: 'vip-transport', priorityLevel: 2, name: { fr: 'Jet privé en Turquie', en: 'Private jet in Turkey', ru: 'Частный самолет в Турции', ar: 'طائرة خاصة في تركيا' }, slug: { fr: 'jet-prive-turquie', en: 'private-jet-turkey', ru: 'chastnyy-samolet-turtsiya', ar: 'private-jet-turkey' } },
  { id: 'private-helicopter-turkey', category: 'vip-transport', priorityLevel: 3, name: { fr: 'Hélicoptère privé en Turquie', en: 'Private helicopter in Turkey', ru: 'Частный вертолет в Турции', ar: 'مروحية خاصة في تركيا' }, slug: { fr: 'helicoptere-prive-turquie', en: 'private-helicopter-turkey', ru: 'chastnyy-vertolet-turtsiya', ar: 'private-helicopter-turkey' } },
  { id: 'private-yacht-turkey', category: 'vip-transport', priorityLevel: 2, name: { fr: 'Yacht privé en Turquie', en: 'Private yacht in Turkey', ru: 'Частная яхта в Турции', ar: 'يخت خاص في تركيا' }, slug: { fr: 'yacht-prive-turquie', en: 'private-yacht-turkey', ru: 'chastnaya-yakhta-turtsiya', ar: 'private-yacht-turkey' } },
  { id: 'hotels-palaces-booking-turkey', category: 'hospitality', priorityLevel: 3, name: { fr: 'Réservation hôtels et palaces en Turquie', en: 'Hotels and palaces booking in Turkey', ru: 'Бронирование отелей и palaces в Турции', ar: 'حجز فنادق وقصور في تركيا' }, slug: { fr: 'reservation-hotels-palaces-turquie', en: 'hotels-palaces-booking-turkey', ru: 'bronirovanie-oteley-palaces-turtsiya', ar: 'hotels-palaces-booking-turkey' } },
  { id: 'private-villas-turkey', category: 'hospitality', priorityLevel: 2, name: { fr: 'Villas privées en Turquie', en: 'Private villas in Turkey', ru: 'Частные виллы в Турции', ar: 'فيلات خاصة في تركيا' }, slug: { fr: 'villas-privees-turquie', en: 'private-villas-turkey', ru: 'chastnye-villy-turtsiya', ar: 'private-villas-turkey' } },
  { id: 'restaurants-best-tables-turkey', category: 'hospitality', priorityLevel: 3, name: { fr: 'Restaurants et meilleures tables en Turquie', en: 'Restaurants and best tables in Turkey', ru: 'Рестораны и лучшие столы в Турции', ar: 'مطاعم وأفضل طاولات في تركيا' }, slug: { fr: 'restaurants-meilleures-tables-turquie', en: 'restaurants-best-tables-turkey', ru: 'restorany-luchshie-stoly-turtsiya', ar: 'restaurants-best-tables-turkey' } },
  { id: 'private-clubs-guest-list-turkey', category: 'hospitality', priorityLevel: 3, name: { fr: 'Clubs privés et guest list en Turquie', en: 'Private clubs and guest list in Turkey', ru: 'Частные клубы и guest list в Турции', ar: 'نوادٍ خاصة وقائمة ضيوف في تركيا' }, slug: { fr: 'clubs-prives-guest-list-turquie', en: 'private-clubs-guest-list-turkey', ru: 'chastnye-kluby-guest-list-turtsiya', ar: 'private-clubs-guest-list-turkey' } },
  { id: 'business-dinner-turkey', category: 'hospitality', priorityLevel: 3, name: { fr: 'Dîner d’affaires en Turquie', en: 'Business dinner in Turkey', ru: 'Бизнес-ужин в Турции', ar: 'عشاء أعمال في تركيا' }, slug: { fr: 'diner-affaires-turquie', en: 'business-dinner-turkey', ru: 'biznes-uzhin-turtsiya', ar: 'business-dinner-turkey' } },
  { id: 'private-event-turkey', category: 'hospitality', priorityLevel: 3, name: { fr: 'Événement privé en Turquie', en: 'Private event in Turkey', ru: 'Частное событие в Турции', ar: 'فعالية خاصة في تركيا' }, slug: { fr: 'evenement-prive-turquie', en: 'private-event-turkey', ru: 'chastnoe-sobytie-turtsiya', ar: 'private-event-turkey' } },
  { id: 'luxury-shopping-turkey', category: 'luxury-shopping', priorityLevel: 3, name: { fr: 'Shopping luxe en Turquie', en: 'Luxury shopping in Turkey', ru: 'Luxury shopping в Турции', ar: 'تسوق فاخر في تركيا' }, slug: { fr: 'shopping-luxe-turquie', en: 'luxury-shopping-turkey', ru: 'luxury-shopping-turtsiya', ar: 'luxury-shopping-turkey' } },
  { id: 'rare-watches-turkey', category: 'luxury-shopping', priorityLevel: 3, name: { fr: 'Montres rares en Turquie', en: 'Rare watches in Turkey', ru: 'Редкие часы в Турции', ar: 'ساعات نادرة في تركيا' }, slug: { fr: 'montres-rares-turquie', en: 'rare-watches-turkey', ru: 'redkie-chasy-turtsiya', ar: 'rare-watches-turkey' } },
  { id: 'rare-jewelry-handbags-turkey', category: 'luxury-shopping', priorityLevel: 3, name: { fr: 'Bijoux et sacs rares en Turquie', en: 'Rare jewelry and handbags in Turkey', ru: 'Редкие украшения и сумки в Турции', ar: 'مجوهرات وحقائب نادرة في تركيا' }, slug: { fr: 'bijoux-sacs-rares-turquie', en: 'rare-jewelry-handbags-turkey', ru: 'redkie-ukrasheniya-sumki-turtsiya', ar: 'rare-jewelry-handbags-turkey' } },
  { id: 'personal-shopper-turkey', category: 'luxury-shopping', priorityLevel: 3, name: { fr: 'Personal shopper en Turquie', en: 'Personal shopper in Turkey', ru: 'Personal shopper в Турции', ar: 'Personal shopper في تركيا' }, slug: { fr: 'personal-shopper-turquie', en: 'personal-shopper-turkey', ru: 'personal-shopper-turtsiya', ar: 'personal-shopper-turkey' } },
  { id: 'private-security-turkey', category: 'administrative-support', priorityLevel: 3, name: { fr: 'Sécurité privée en Turquie', en: 'Private security in Turkey', ru: 'Частная безопасность в Турции', ar: 'أمن خاص في تركيا' }, slug: { fr: 'securite-privee-turquie', en: 'private-security-turkey', ru: 'chastnaya-bezopasnost-turtsiya', ar: 'private-security-turkey' } },
  { id: 'translation-interpreter-turkey', category: 'administrative-support', priorityLevel: 2, name: { fr: 'Traduction et interprète en Turquie', en: 'Translation and interpreter in Turkey', ru: 'Перевод и переводчик в Турции', ar: 'ترجمة ومترجم في تركيا' }, slug: { fr: 'traduction-interprete-turquie', en: 'translation-interpreter-turkey', ru: 'perevod-perevodchik-turtsiya', ar: 'translation-interpreter-turkey' } },
  { id: 'administrative-assistance-turkey', category: 'administrative-support', priorityLevel: 2, name: { fr: 'Assistance administrative en Turquie', en: 'Administrative assistance in Turkey', ru: 'Административная помощь в Турции', ar: 'مساعدة إدارية في تركيا' }, slug: { fr: 'assistance-administrative-turquie', en: 'administrative-assistance-turkey', ru: 'administrativnaya-pomoshch-turtsiya', ar: 'administrative-assistance-turkey' } },
  { id: 'bosphoras-membership-card-private-access', category: 'private-access', priorityLevel: 1, name: { fr: 'Carte membre Bosphoras et accès privé', en: 'Bosphoras membership card and private access', ru: 'Карта участника Bosphoras и private access', ar: 'بطاقة عضوية Bosphoras والوصول الخاص' }, slug: { fr: 'carte-membre-bosphoras-acces-prive', en: 'bosphoras-membership-card-private-access', ru: 'karta-uchastnika-bosphoras-private-access', ar: 'bosphoras-membership-card-private-access' } },
];

export const programmaticServices: ProgrammaticService[] = seeds.map((seed) => ({
  ...seed,
  shortDescription: categoryDescriptions[seed.category],
  userPainPoint: painPointByCategory[seed.category],
  bosphorasSolution: solutionByCategory[seed.category],
  faqSeeds: faqByCategory[seed.category],
  relatedServices: seed.relatedServices ?? [],
  cta: ctaByLocale,
}));
