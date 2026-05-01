import type { Locale } from '@/lib/i18n';

export type ProgrammaticCity = {
  id: 'istanbul' | 'bodrum' | 'antalya';
  name: Record<Locale, string>;
  slug: Record<Locale, string>;
  positioning: Record<Locale, string>;
  bestFor: Record<Locale, string[]>;
  intro: Record<Locale, string>;
  luxuryAngle: Record<Locale, string>;
  businessAngle: Record<Locale, string>;
  healthAngle: Record<Locale, string>;
  relocationAngle: Record<Locale, string>;
};

export const programmaticCities: ProgrammaticCity[] = [
  {
    id: 'istanbul',
    name: { fr: 'Istanbul', en: 'Istanbul', ru: 'Стамбул', ar: 'إسطنبول' },
    slug: { fr: 'istanbul', en: 'istanbul', ru: 'stambul', ar: 'istanbul' },
    positioning: {
      fr: 'La base business, bancaire, juridique, médicale et internationale la plus complète de Turquie.',
      en: 'Turkey’s most complete business, banking, legal, medical and international base.',
      ru: 'Самая полная бизнес-, банковская, юридическая, медицинская и международная база Турции.',
      ar: 'القاعدة الأكثر اكتمالاً في تركيا للأعمال والبنوك والقانون والصحة والحياة الدولية.',
    },
    bestFor: {
      fr: ['business', 'banque privée', 'santé privée', 'bureaux premium', 'familles internationales'],
      en: ['business', 'private banking', 'private healthcare', 'premium offices', 'international families'],
      ru: ['бизнес', 'private banking', 'частная медицина', 'premium offices', 'международные семьи'],
      ar: ['الأعمال', 'الخدمات المصرفية الخاصة', 'الصحة الخاصة', 'المكاتب الممتازة', 'العائلات الدولية'],
    },
    intro: {
      fr: 'Istanbul concentre les avocats, fiscalistes, banques, cliniques privées, bureaux premium, restaurants, hôtels et réseaux internationaux.',
      en: 'Istanbul concentrates lawyers, tax advisors, banks, private clinics, premium offices, restaurants, hotels and international networks.',
      ru: 'В Стамбуле сосредоточены юристы, налоговые консультанты, банки, частные клиники, premium offices, рестораны, отели и международные сети.',
      ar: 'تركز إسطنبول المحامين والمستشارين الضريبيين والبنوك والعيادات الخاصة والمكاتب الفاخرة والمطاعم والفنادق والشبكات الدولية.',
    },
    luxuryAngle: {
      fr: 'Bosphore, hôtels premium, tables privées, clubs, shopping luxe et accès discret aux meilleurs quartiers.',
      en: 'Bosphorus lifestyle, premium hotels, private tables, clubs, luxury shopping and discreet access to the best districts.',
      ru: 'Босфор, premium hotels, частные рестораны, клубы, luxury shopping и дискретный доступ к лучшим районам.',
      ar: 'أسلوب حياة البوسفور، فنادق راقية، طاولات خاصة، نوادٍ، تسوق فاخر ووصول هادئ إلى أفضل المناطق.',
    },
    businessAngle: {
      fr: 'Idéal pour créer une société, ouvrir un bureau, rencontrer des conseils, structurer la banque et coordonner les rendez-vous sensibles.',
      en: 'Ideal for company setup, office openings, advisor meetings, banking structure and sensitive appointments.',
      ru: 'Идеально для создания компании, открытия офиса, встреч с советниками, банковской структуры и чувствительных встреч.',
      ar: 'مثالية لتأسيس شركة، فتح مكتب، مقابلة المستشارين، هيكلة البنوك وتنسيق المواعيد الحساسة.',
    },
    healthAngle: {
      fr: 'Fort réseau d’hôpitaux privés, spécialistes, check-up exécutif et assurance santé pour familles internationales.',
      en: 'Strong network of private hospitals, specialists, executive check-ups and health insurance for international families.',
      ru: 'Сильная сеть частных больниц, специалистов, executive check-ups и медицинского страхования для международных семей.',
      ar: 'شبكة قوية من المستشفيات الخاصة والاختصاصيين والفحوصات التنفيذية والتأمين الصحي للعائلات الدولية.',
    },
    relocationAngle: {
      fr: 'Le choix le plus complet pour une première installation structurée, surtout si le projet combine famille, business et santé.',
      en: 'The most complete choice for a structured first move, especially when family, business and healthcare overlap.',
      ru: 'Самый полный выбор для структурированного первого переезда, особенно когда объединяются семья, бизнес и здоровье.',
      ar: 'الخيار الأكثر اكتمالاً لأول انتقال منظم، خاصة عندما يجتمع ملف العائلة والأعمال والصحة.',
    },
  },
  {
    id: 'bodrum',
    name: { fr: 'Bodrum', en: 'Bodrum', ru: 'Бодрум', ar: 'بودروم' },
    slug: { fr: 'bodrum', en: 'bodrum', ru: 'bodrum', ar: 'bodrum' },
    positioning: {
      fr: 'La base méditerranéenne discrète pour villas, yachts, résidences secondaires et lifestyle premium.',
      en: 'The discreet Mediterranean base for villas, yachts, second residences and premium lifestyle.',
      ru: 'Дискретная средиземноморская база для вилл, яхт, вторых резиденций и premium lifestyle.',
      ar: 'قاعدة متوسطية هادئة للفيلات واليخوت والإقامات الثانية ونمط الحياة الراقي.',
    },
    bestFor: {
      fr: ['villas', 'yachts', 'marina', 'résidence secondaire', 'familles premium'],
      en: ['villas', 'yachts', 'marina', 'second residence', 'premium families'],
      ru: ['виллы', 'яхты', 'марина', 'вторая резиденция', 'premium families'],
      ar: ['فيلات', 'يخوت', 'مارينا', 'إقامة ثانية', 'عائلات راقية'],
    },
    intro: {
      fr: 'Bodrum attire les profils qui veulent une Turquie plus privée, plus méditerranéenne, avec villas, marinas, clubs et services discrets.',
      en: 'Bodrum attracts profiles seeking a more private Mediterranean Turkey, with villas, marinas, clubs and discreet services.',
      ru: 'Бодрум привлекает тех, кто ищет более частную средиземноморскую Турцию с виллами, маринами, клубами и дискретными сервисами.',
      ar: 'تجذب بودروم من يبحثون عن تركيا متوسطية أكثر خصوصية مع فيلات ومارينات ونوادٍ وخدمات هادئة.',
    },
    luxuryAngle: {
      fr: 'Villas, marinas, yachts, dîners privés, clubs sélectifs et conciergerie saisonnière.',
      en: 'Villas, marinas, yachts, private dinners, selective clubs and seasonal concierge.',
      ru: 'Виллы, марины, яхты, частные ужины, select clubs и сезонный concierge.',
      ar: 'فيلات، مارينات، يخوت، عشاءات خاصة، نوادٍ مختارة وكونسيرج موسمي.',
    },
    businessAngle: {
      fr: 'Moins corporate qu’Istanbul, mais pertinent pour investisseurs, entrepreneurs mobiles, hospitality, immobilier et family offices.',
      en: 'Less corporate than Istanbul, but relevant for investors, mobile entrepreneurs, hospitality, property and family offices.',
      ru: 'Менее корпоративный, чем Стамбул, но актуален для инвесторов, мобильных предпринимателей, hospitality, недвижимости и family offices.',
      ar: 'أقل طابعاً مؤسسياً من إسطنبول، لكنه مهم للمستثمرين ورواد الأعمال المتنقلين والضيافة والعقارات والمكاتب العائلية.',
    },
    healthAngle: {
      fr: 'Bon pour une vie premium et saisonnière, avec coordination santé à prévoir entre Bodrum, Izmir et Istanbul selon le besoin.',
      en: 'Good for premium and seasonal living, with healthcare coordination often planned between Bodrum, Izmir and Istanbul when needed.',
      ru: 'Подходит для premium и сезонной жизни, медицинскую координацию часто нужно планировать между Бодрумом, Измиром и Стамбулом.',
      ar: 'مناسبة للحياة الموسمية الراقية، مع تنسيق صحي غالباً بين بودروم وإزمير وإسطنبول عند الحاجة.',
    },
    relocationAngle: {
      fr: 'Excellent pour résidence secondaire ou installation lifestyle, mais la saisonnalité doit être comprise avant toute décision immobilière.',
      en: 'Excellent for second residence or lifestyle relocation, but seasonality must be understood before any property decision.',
      ru: 'Отлично подходит для второй резиденции или lifestyle-переезда, но сезонность нужно понимать до покупки.',
      ar: 'ممتازة للإقامة الثانية أو الانتقال بنمط حياة خاص، لكن يجب فهم الموسمية قبل أي قرار عقاري.',
    },
  },
  {
    id: 'antalya',
    name: { fr: 'Antalya', en: 'Antalya', ru: 'Анталья', ar: 'أنطاليا' },
    slug: { fr: 'antalya', en: 'antalya', ru: 'antalia', ar: 'antalya' },
    positioning: {
      fr: 'La base familiale et santé, avec climat doux, mer, coût plus rationnel et vie plus stable à l’année.',
      en: 'The family and healthcare base, with mild climate, sea, more rational costs and stable year-round living.',
      ru: 'База для семьи и здоровья с мягким климатом, морем, более рациональными расходами и стабильной жизнью круглый год.',
      ar: 'قاعدة للعائلة والصحة مع مناخ معتدل وبحر وتكاليف أكثر عقلانية وحياة مستقرة طوال العام.',
    },
    bestFor: {
      fr: ['familles', 'santé', 'climat', 'coût de vie', 'résidence long terme'],
      en: ['families', 'healthcare', 'climate', 'cost of living', 'long-term residence'],
      ru: ['семьи', 'здоровье', 'климат', 'стоимость жизни', 'долгосрочная резиденция'],
      ar: ['العائلات', 'الصحة', 'المناخ', 'تكلفة المعيشة', 'الإقامة الطويلة'],
    },
    intro: {
      fr: 'Antalya peut convenir aux familles et profils long terme qui veulent une ville plus pratique, maritime et rationnelle.',
      en: 'Antalya can suit families and long-term profiles seeking a more practical, coastal and rational city.',
      ru: 'Анталья подходит семьям и долгосрочным профилям, которым нужна более практичная, морская и рациональная база.',
      ar: 'يمكن أن تناسب أنطاليا العائلات والملفات طويلة الأمد التي تبحث عن مدينة عملية وساحلية وعقلانية.',
    },
    luxuryAngle: {
      fr: 'Resorts, villas, mer, golf, hospitality et services familiaux haut de gamme.',
      en: 'Resorts, villas, sea, golf, hospitality and premium family services.',
      ru: 'Resorts, виллы, море, гольф, hospitality и premium family services.',
      ar: 'منتجعات، فيلات، بحر، غولف، ضيافة وخدمات عائلية راقية.',
    },
    businessAngle: {
      fr: 'Moins orientée finance qu’Istanbul, mais intéressante pour services, tourisme, santé, immobilier et familles internationales.',
      en: 'Less finance-oriented than Istanbul, but relevant for services, tourism, healthcare, property and international families.',
      ru: 'Менее финансово ориентирована, чем Стамбул, но актуальна для сервисов, туризма, медицины, недвижимости и международных семей.',
      ar: 'أقل تركيزاً على المال من إسطنبول، لكنها مهمة للخدمات والسياحة والصحة والعقارات والعائلات الدولية.',
    },
    healthAngle: {
      fr: 'Forte pertinence santé, assurance, check-up, famille et suivi médical dans un environnement plus calme.',
      en: 'Strong relevance for healthcare, insurance, check-ups, family and medical follow-up in a calmer environment.',
      ru: 'Сильная релевантность для медицины, страхования, check-up, семьи и медицинского сопровождения в более спокойной среде.',
      ar: 'مهمة جداً للصحة والتأمين والفحوصات والعائلة والمتابعة الطبية في بيئة أكثر هدوءاً.',
    },
    relocationAngle: {
      fr: 'Souvent adaptée aux familles qui veulent tester la Turquie avec un bon équilibre entre mer, santé, budget et stabilité.',
      en: 'Often suitable for families testing Turkey with a balance between sea, healthcare, budget and stability.',
      ru: 'Часто подходит семьям, которые хотят протестировать Турцию с балансом моря, медицины, бюджета и стабильности.',
      ar: 'غالباً مناسبة للعائلات التي تريد اختبار تركيا بتوازن بين البحر والصحة والميزانية والاستقرار.',
    },
  },
];
