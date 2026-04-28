export interface HighPotentialPage {
  id: string;
  slug: string;
  parentSlug?: string;
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  keywords: string[];
}

export const highPotentialPages: HighPotentialPage[] = [
  {
    id: 'citizenship-by-investment',
    slug: 'citoyennete-par-investissement',
    parentSlug: 'services',
    titles: {
      fr: "Citoyenneté turque par l'investissement | Bosphoras",
      en: 'Turkish citizenship by investment | Bosphoras',
      ru: 'Турецкое гражданство через инвестиции | Bosphoras',
      ar: 'الجنسية التركية عن طريق الاستثمار | بوسفوراس',
    },
    descriptions: {
      fr: "Guide complet sur la citoyenneté turque par l'investissement immobilier. Conditions, montants et procédures — à confirmer avec un professionnel juridique habilité.",
      en: 'Comprehensive guide on Turkish citizenship by real estate investment. Conditions, amounts and procedures — to be confirmed with a qualified legal professional.',
      ru: 'Полное руководство по турецкому гражданству через инвестиции в недвижимость. Условия, суммы и процедуры — для подтверждения с квалифицированным юристом.',
      ar: 'دليل شامل حول الجنسية التركية عن طريق الاستثمار العقاري. الشروط والمبالغ والإجراءات — للتأكيد مع متخصص قانوني مؤهل.',
    },
    keywords: ['citizenship by investment turkey', 'citoyenneté turque investissement', 'türk vatandaşlığı yatırım'],
  },
  {
    id: 'golden-visa-turkey',
    slug: 'visa-or-turquie',
    parentSlug: 'services',
    titles: {
      fr: 'Résidence et visa en Turquie pour investisseurs | Bosphoras',
      en: 'Residence and visa in Turkey for investors | Bosphoras',
      ru: 'Вид на жительство и виза в Турции для инвесторов | Bosphoras',
      ar: 'الإقامة والتأشيرة في تركيا للمستثمرين | بوسفوراس',
    },
    descriptions: {
      fr: "Options de résidence en Turquie pour investisseurs et familles internationales. Permis de séjour, résidence longue durée et conditions de naturalisation.",
      en: 'Residence options in Turkey for investors and international families. Residence permits, long-term residence and naturalisation conditions.',
      ru: 'Варианты проживания в Турции для инвесторов и международных семей. Разрешения на проживание, долгосрочное проживание и условия натурализации.',
      ar: 'خيارات الإقامة في تركيا للمستثمرين والعائلات الدولية. تصاريح الإقامة والإقامة طويلة الأمد وشروط التجنيس.',
    },
    keywords: ['visa investisseur turquie', 'residence permit turkey investors', 'иммиграция в турцию'],
  },
  {
    id: 'family-office-turkey',
    slug: 'family-office-turquie',
    parentSlug: 'services',
    titles: {
      fr: 'Family Office en Turquie — Gestion Patrimoniale | Bosphoras',
      en: 'Family Office in Turkey — Wealth Management | Bosphoras',
      ru: 'Семейный офис в Турции — Управление капиталом | Bosphoras',
      ar: 'مكتب عائلي في تركيا — إدارة الثروات | بوسفوراس',
    },
    descriptions: {
      fr: "Services de family office en Turquie : structuration patrimoniale, conseil en investissement, gouvernance familiale et gestion des actifs internationaux.",
      en: 'Family office services in Turkey: wealth structuring, investment advice, family governance and international asset management.',
      ru: 'Услуги семейного офиса в Турции: структурирование капитала, инвестиционные советы, семейное управление и управление международными активами.',
      ar: 'خدمات المكتب العائلي في تركيا: هيكلة الثروات، الاستشارات الاستثمارية، الحوكمة الأسرية وإدارة الأصول الدولية.',
    },
    keywords: ['family office turkey', 'family office istanbul', 'bureau familial turquie'],
  },
  {
    id: 'relocation-istanbul',
    slug: 'relocation-istanbul',
    parentSlug: 'destinations/istanbul',
    titles: {
      fr: "S'installer à Istanbul — Guide de Relocation | Bosphoras",
      en: 'Moving to Istanbul — Relocation Guide | Bosphoras',
      ru: 'Переезд в Стамбул — Руководство по релокации | Bosphoras',
      ar: 'الانتقال إلى إسطنبول — دليل الاستقرار | بوسفوراس',
    },
    descriptions: {
      fr: "Guide complet pour s'installer à Istanbul : logement, scolarité, santé, transport et vie quotidienne pour les familles et expatriés internationaux.",
      en: 'Complete guide to settling in Istanbul: housing, schooling, healthcare, transport and daily life for international families and expats.',
      ru: 'Полное руководство по обустройству в Стамбуле: жильё, образование, здравоохранение, транспорт и повседневная жизнь для международных семей и экспатов.',
      ar: 'دليل كامل للاستقرار في إسطنبول: السكن والتعليم والرعاية الصحية والنقل والحياة اليومية للعائلات الدولية والمغتربين.',
    },
    keywords: ['relocation istanbul', 's\'installer à istanbul', 'expat istanbul guide'],
  },
  {
    id: 'buy-property-bodrum',
    slug: 'acheter-propriete-bodrum',
    parentSlug: 'destinations/bodrum',
    titles: {
      fr: "Acheter une propriété à Bodrum — Conseil Immobilier | Bosphoras",
      en: 'Buy property in Bodrum — Property Advisory | Bosphoras',
      ru: 'Купить недвижимость в Бодруме — Консультации | Bosphoras',
      ar: 'شراء عقار في بودروم — الاستشارات العقارية | بوسفوراس',
    },
    descriptions: {
      fr: "Guide d'achat immobilier à Bodrum pour investisseurs étrangers : villas, appartements de luxe, due diligence et accompagnement juridique.",
      en: 'Real estate buying guide in Bodrum for foreign investors: villas, luxury apartments, due diligence and legal support.',
      ru: 'Руководство по покупке недвижимости в Бодруме для иностранных инвесторов: виллы, роскошные квартиры, due diligence и юридическое сопровождение.',
      ar: 'دليل شراء العقارات في بودروم للمستثمرين الأجانب: فيلات وشقق فاخرة وعناية واجبة ودعم قانوني.',
    },
    keywords: ['buy property bodrum', 'acheter villa bodrum', 'immobilier bodrum etranger'],
  },
];
