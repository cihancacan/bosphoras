export interface Service {
  id: string;
  icon: string;
  category: 'legal' | 'lifestyle' | 'finance' | 'property' | 'relocation' | 'corporate';
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  slug: string;
  pageId: string;
}

export const services: Service[] = [
  {
    id: 'relocation',
    icon: 'MapPin',
    category: 'relocation',
    slug: 'relocation',
    pageId: 'relocate',
    titles: {
      fr: 'Relocation & Installation',
      en: 'Relocation & Settlement',
      ru: 'Переезд и обустройство',
      ar: 'الانتقال والاستقرار',
    },
    descriptions: {
      fr: 'Accompagnement complet pour votre installation en Turquie : résidence, permis, logement, scolarité et intégration au quotidien.',
      en: 'Full support for your move to Turkey: residence, permits, housing, schooling and daily integration.',
      ru: 'Полное сопровождение переезда в Турцию: вид на жительство, разрешения, жильё, образование и повседневная интеграция.',
      ar: 'دعم كامل للانتقال إلى تركيا: الإقامة، التصاريح، السكن، التعليم والاندماج اليومي.',
    },
  },
  {
    id: 'legal-tax',
    icon: 'Scale',
    category: 'legal',
    slug: 'conseil-juridique-fiscal',
    pageId: 'legal-tax',
    titles: {
      fr: 'Conseil Juridique & Fiscal',
      en: 'Legal & Tax Advisory',
      ru: 'Юридическое и налоговое консультирование',
      ar: 'الاستشارات القانونية والضريبية',
    },
    descriptions: {
      fr: 'Orientation par des professionnels qualifiés en droit turc, structuration fiscale internationale et conformité réglementaire.',
      en: 'Guidance from qualified professionals in Turkish law, international tax structuring and regulatory compliance.',
      ru: 'Консультации квалифицированных специалистов по турецкому праву, международному налогообложению и нормативному соответствию.',
      ar: 'توجيه من متخصصين مؤهلين في القانون التركي وهيكلة الضرائب الدولية والامتثال التنظيمي.',
    },
  },
  {
    id: 'company-formation',
    icon: 'Building2',
    category: 'corporate',
    slug: 'creation-entreprise',
    pageId: 'business-setup',
    titles: {
      fr: "Création d'Entreprise",
      en: 'Company Formation',
      ru: 'Создание компании',
      ar: 'تأسيس الشركات',
    },
    descriptions: {
      fr: "Constitution de sociétés en Turquie, domiciliation, comptabilité et gestion administrative pour les investisseurs étrangers.",
      en: 'Company incorporation in Turkey, registered address, accounting and administrative management for foreign investors.',
      ru: 'Регистрация компаний в Турции, юридический адрес, бухгалтерия и административное управление для иностранных инвесторов.',
      ar: 'تأسيس الشركات في تركيا، العنوان القانوني، المحاسبة والإدارة للمستثمرين الأجانب.',
    },
  },
  {
    id: 'property',
    icon: 'Home',
    category: 'property',
    slug: 'immobilier',
    pageId: 'property',
    titles: {
      fr: 'Conseil Immobilier',
      en: 'Property Advisory',
      ru: 'Консультации по недвижимости',
      ar: 'الاستشارات العقارية',
    },
    descriptions: {
      fr: "Sélection et acquisition de biens résidentiels ou commerciaux à Istanbul, Bodrum et Antalya, avec une due diligence rigoureuse.",
      en: 'Selection and acquisition of residential or commercial properties in Istanbul, Bodrum and Antalya, with rigorous due diligence.',
      ru: 'Подбор и приобретение жилой или коммерческой недвижимости в Стамбуле, Бодруме и Анталье с тщательной проверкой.',
      ar: 'اختيار واقتناء العقارات السكنية أو التجارية في إسطنبول وبودروم وأنطاليا مع العناية الواجبة الصارمة.',
    },
  },
  {
    id: 'investment',
    icon: 'TrendingUp',
    category: 'finance',
    slug: 'investissement',
    pageId: 'services',
    titles: {
      fr: 'Investissement & Patrimoine',
      en: 'Investment & Wealth',
      ru: 'Инвестиции и управление капиталом',
      ar: 'الاستثمار وإدارة الثروات',
    },
    descriptions: {
      fr: "Orientation stratégique pour l'investissement en Turquie : marchés financiers, fonds, actifs réels et structuration patrimoniale.",
      en: 'Strategic guidance for investment in Turkey: financial markets, funds, real assets and wealth structuring.',
      ru: 'Стратегическое руководство для инвестиций в Турции: финансовые рынки, фонды, реальные активы и структурирование капитала.',
      ar: 'توجيه استراتيجي للاستثمار في تركيا: الأسواق المالية والصناديق والأصول الحقيقية وهيكلة الثروات.',
    },
  },
  {
    id: 'healthcare',
    icon: 'Heart',
    category: 'lifestyle',
    slug: 'sante-assurance',
    pageId: 'health-insurance',
    titles: {
      fr: 'Santé & Assurance',
      en: 'Healthcare & Insurance',
      ru: 'Здравоохранение и страхование',
      ar: 'الرعاية الصحية والتأمين',
    },
    descriptions: {
      fr: "Accès aux meilleurs établissements médicaux privés, couverture d'assurance internationale et assistance médicale personnalisée.",
      en: 'Access to the best private medical facilities, international insurance coverage and personalised medical assistance.',
      ru: 'Доступ к лучшим частным медицинским учреждениям, международное страховое покрытие и персонализированная медицинская помощь.',
      ar: 'الوصول إلى أفضل المرافق الطبية الخاصة والتغطية التأمينية الدولية والمساعدة الطبية المخصصة.',
    },
  },
  {
    id: 'concierge',
    icon: 'Star',
    category: 'lifestyle',
    slug: 'concierge-luxe',
    pageId: 'transport',
    titles: {
      fr: 'Conciergerie de Luxe',
      en: 'Luxury Concierge',
      ru: 'Люксовый консьерж',
      ar: 'خدمات الكونسيرج الفاخرة',
    },
    descriptions: {
      fr: "Transport VIP, hôtels, yachts, événements privés, shopping et accès aux cercles exclusifs d'Istanbul, Bodrum et Antalya.",
      en: 'VIP transport, hotels, yachts, private events, shopping and access to exclusive circles in Istanbul, Bodrum and Antalya.',
      ru: 'VIP-транспорт, отели, яхты, частные мероприятия, шопинг и доступ в эксклюзивные круги Стамбула, Бодрума и Антальи.',
      ar: 'النقل الخاص والفنادق واليخوت والفعاليات الخاصة والتسوق والوصول إلى الدوائر الحصرية في إسطنبول وبودروم وأنطاليا.',
    },
  },
  {
    id: 'offices',
    icon: 'Briefcase',
    category: 'corporate',
    slug: 'bureaux-espaces',
    pageId: 'offices',
    titles: {
      fr: 'Bureaux & Espaces',
      en: 'Offices & Workspaces',
      ru: 'Офисы и рабочие пространства',
      ar: 'المكاتب ومساحات العمل',
    },
    descriptions: {
      fr: "Location de bureaux privés, espaces de travail premium et adresses de prestige dans les quartiers d'affaires les plus recherchés.",
      en: 'Private office rental, premium workspaces and prestigious addresses in the most sought-after business districts.',
      ru: 'Аренда частных офисов, премиальные рабочие пространства и престижные адреса в наиболее востребованных деловых районах.',
      ar: 'استئجار مكاتب خاصة ومساحات عمل متميزة وعناوين مرموقة في أرقى مناطق الأعمال.',
    },
  },
];
