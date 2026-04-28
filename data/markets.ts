export interface Market {
  id: string;
  slug: string;
  names: Record<string, string>;
  descriptions: Record<string, string>;
}

export const markets: Market[] = [
  {
    id: 'french',
    slug: 'clients-francophones',
    names: {
      fr: 'Clients francophones',
      en: 'French-speaking clients',
      ru: 'Франкоязычные клиенты',
      ar: 'العملاء الناطقون بالفرنسية',
    },
    descriptions: {
      fr: "Accompagnement complet pour les clients de France, Belgique, Suisse, Luxembourg et du monde francophone souhaitant investir ou s'établir en Turquie.",
      en: "Comprehensive support for clients from France, Belgium, Switzerland, Luxembourg and the French-speaking world wishing to invest or settle in Turkey.",
      ru: 'Комплексная поддержка клиентов из Франции, Бельгии, Швейцарии, Люксембурга и франкоязычного мира, желающих инвестировать или обосноваться в Турции.',
      ar: 'دعم شامل للعملاء من فرنسا وبلجيكا وسويسرا ولوكسمبورغ والعالم الناطق بالفرنسية الراغبين في الاستثمار أو الاستقرار في تركيا.',
    },
  },
  {
    id: 'gulf',
    slug: 'clients-golfe',
    names: {
      fr: 'Clients du Golfe',
      en: 'Gulf clients',
      ru: 'Клиенты из Персидского залива',
      ar: 'عملاء دول الخليج',
    },
    descriptions: {
      fr: "Service dédié pour les familles et investisseurs des pays du Golfe : Arabie Saoudite, Émirats Arabes Unis, Qatar, Koweït, Bahreïn et Oman.",
      en: "Dedicated service for families and investors from Gulf countries: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman.",
      ru: 'Специальный сервис для семей и инвесторов из стран Персидского залива: Саудовская Аравия, ОАЭ, Катар, Кувейт, Бахрейн и Оман.',
      ar: 'خدمة مخصصة للعائلات والمستثمرين من دول الخليج: المملكة العربية السعودية والإمارات وقطر والكويت والبحرين وعُمان.',
    },
  },
  {
    id: 'russian',
    slug: 'clients-russophones',
    names: {
      fr: 'Clients russophones',
      en: 'Russian-speaking clients',
      ru: 'Русскоязычные клиенты',
      ar: 'العملاء الناطقون بالروسية',
    },
    descriptions: {
      fr: "Solutions complètes pour les clients russophones de Russie, Ukraine, Kazakhstan et d'autres pays de la CEI cherchant à diversifier leurs actifs en Turquie.",
      en: 'Complete solutions for Russian-speaking clients from Russia, Ukraine, Kazakhstan and other CIS countries seeking to diversify their assets in Turkey.',
      ru: 'Полные решения для русскоязычных клиентов из России, Украины, Казахстана и других стран СНГ, стремящихся диверсифицировать свои активы в Турции.',
      ar: 'حلول كاملة للعملاء الناطقين بالروسية من روسيا وأوكرانيا وكازاخستان ودول رابطة الدول المستقلة الأخرى الساعين إلى تنويع أصولهم في تركيا.',
    },
  },
];
