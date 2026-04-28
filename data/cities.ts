export interface City {
  id: string;
  slug: string;
  image: string;
  names: Record<string, string>;
  taglines: Record<string, string>;
  descriptions: Record<string, string>;
  highlights: Record<string, string[]>;
}

export const cities: City[] = [
  {
    id: 'istanbul',
    slug: 'istanbul',
    image: 'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg',
    names: {
      fr: 'Istanbul',
      en: 'Istanbul',
      ru: 'Стамбул',
      ar: 'إسطنبول',
    },
    taglines: {
      fr: 'La métropole stratégique',
      en: 'The strategic metropolis',
      ru: 'Стратегическая метрополия',
      ar: 'المدينة الاستراتيجية',
    },
    descriptions: {
      fr: "Istanbul est le cœur économique et culturel de la Turquie. Pont entre l'Orient et l'Occident, elle offre des opportunités d'investissement uniques, une scène internationale et un niveau de vie de haut rang.",
      en: "Istanbul is Turkey's economic and cultural heart. A bridge between East and West, it offers unique investment opportunities, an international scene and a high standard of living.",
      ru: 'Стамбул — экономическое и культурное сердце Турции. Мост между Востоком и Западом, предлагающий уникальные инвестиционные возможности, международную среду и высокий уровень жизни.',
      ar: 'إسطنبول هي قلب تركيا الاقتصادي والثقافي. جسر بين الشرق والغرب، تقدم فرص استثمارية فريدة ومشهداً دولياً ومستوى معيشياً رفيعاً.',
    },
    highlights: {
      fr: ['Centre financier régional', 'Immobilier premium', 'Hubs éducatifs internationaux', 'Gastronomie & culture'],
      en: ['Regional financial hub', 'Premium real estate', 'International education hubs', 'Gastronomy & culture'],
      ru: ['Региональный финансовый центр', 'Премиальная недвижимость', 'Международные учебные центры', 'Гастрономия и культура'],
      ar: ['مركز مالي إقليمي', 'عقارات فاخرة', 'مراكز تعليمية دولية', 'المطبخ والثقافة'],
    },
  },
  {
    id: 'bodrum',
    slug: 'bodrum',
    image: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg',
    names: {
      fr: 'Bodrum',
      en: 'Bodrum',
      ru: 'Бодрум',
      ar: 'بودروم',
    },
    taglines: {
      fr: "La riviera de l'élite",
      en: 'The elite riviera',
      ru: 'Ривьера элиты',
      ar: 'ريفييرا النخبة',
    },
    descriptions: {
      fr: "Bodrum réunit la beauté de la mer Égée, un art de vivre méditerranéen et une communauté internationale discrète. Résidences de prestige, yachts et événements privés y tracent le quotidien des initiés.",
      en: "Bodrum combines the beauty of the Aegean Sea, a Mediterranean lifestyle and a discreet international community. Prestigious residences, yachts and private events define the daily life of insiders.",
      ru: 'Бодрум сочетает красоту Эгейского моря, средиземноморский образ жизни и дискретное международное сообщество. Престижные резиденции, яхты и частные мероприятия определяют жизнь избранных.',
      ar: 'يجمع بودروم بين جمال بحر إيجة وأسلوب الحياة المتوسطي ومجتمع دولي متحفظ. تُحدد المساكن الفاخرة واليخوت والفعاليات الخاصة حياة المطلعين.',
    },
    highlights: {
      fr: ['Yachting & marina', 'Villas & résidences privées', 'Gastronomie méditerranéenne', 'Art de vivre estival'],
      en: ['Yachting & marina', 'Villas & private residences', 'Mediterranean gastronomy', 'Summer lifestyle'],
      ru: ['Яхтинг и марина', 'Виллы и частные резиденции', 'Средиземноморская гастрономия', 'Летний образ жизни'],
      ar: ['اليخوت والمرسى', 'فيلات ومساكن خاصة', 'مطبخ متوسطي', 'أسلوب حياة صيفي'],
    },
  },
  {
    id: 'antalya',
    slug: 'antalya',
    image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
    names: {
      fr: 'Antalya',
      en: 'Antalya',
      ru: 'Анталья',
      ar: 'أنطاليا',
    },
    taglines: {
      fr: 'La perle méditerranéenne',
      en: 'The Mediterranean pearl',
      ru: 'Жемчужина Средиземноморья',
      ar: 'جوهرة البحر الأبيض المتوسط',
    },
    descriptions: {
      fr: "Antalya offre un cadre naturel exceptionnel, un climat généreux et un marché immobilier dynamique. Très prisée des familles internationales, elle allie qualité de vie et accessibilité stratégique.",
      en: "Antalya offers an exceptional natural setting, a generous climate and a dynamic real estate market. Highly sought by international families, it combines quality of life with strategic accessibility.",
      ru: 'Анталья предлагает исключительную природу, щедрый климат и динамичный рынок недвижимости. Высоко ценимая международными семьями, она сочетает качество жизни со стратегической доступностью.',
      ar: 'تُقدم أنطاليا بيئة طبيعية استثنائية ومناخاً كريماً وسوقاً عقارياً ديناميكياً. تحظى بإقبال كبير من العائلات الدولية، وتجمع بين جودة الحياة وإمكانية الوصول الاستراتيجي.',
    },
    highlights: {
      fr: ['Retraite & résidence secondaire', 'Vols directs internationaux', 'Soins médicaux de premier rang', 'Nature & détente'],
      en: ['Retirement & second home', 'Direct international flights', 'Top-tier medical care', 'Nature & wellness'],
      ru: ['Выход на пенсию и второй дом', 'Прямые международные рейсы', 'Первоклассная медицинская помощь', 'Природа и оздоровление'],
      ar: ['التقاعد والمنزل الثاني', 'رحلات دولية مباشرة', 'رعاية طبية متميزة', 'الطبيعة والاسترخاء'],
    },
  },
];
