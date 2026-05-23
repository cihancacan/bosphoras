export type TransferSeoLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

export const transferLocales: TransferSeoLocale[] = ['fr', 'en', 'ru', 'ar', 'zh', 'de', 'es', 'it', 'pt'];

export const transferMainPaths: Record<TransferSeoLocale, string> = {
  fr: '/transferts-istanbul',
  en: '/en/istanbul-airport-transfer',
  ru: '/ru/transfer-aeroport-stambul',
  ar: '/ar/istanbul-airport-transfer',
  zh: '/zh/istanbul-airport-transfer',
  de: '/de/flughafentransfer-istanbul',
  es: '/es/traslado-aeropuerto-estambul',
  it: '/it/transfer-aeroporto-istanbul',
  pt: '/pt/transfer-aeroporto-istambul',
};

export const transferKeywordBases: Record<TransferSeoLocale, string> = {
  fr: '/transfer-istanbul',
  en: '/en/istanbul-transfer',
  ru: '/ru/transfer-stambul',
  ar: '/ar/istanbul-transfer',
  zh: '/zh/istanbul-transfer',
  de: '/de/istanbul-transfer',
  es: '/es/transfer-estambul',
  it: '/it/transfer-istanbul',
  pt: '/pt/transfer-istambul',
};

export const transferKeywordClusters: Record<TransferSeoLocale, Array<{ title: string; terms: string[] }>> = {
  fr: [
    { title: 'Transfert aéroport Istanbul', terms: ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'transfert privé aéroport Istanbul', 'navette privée Istanbul', 'taxi privé aéroport Istanbul', 'chauffeur aéroport Istanbul', 'réserver transfert Istanbul', 'transfert aéroport Istanbul hôtel', 'transfert aéroport Istanbul centre ville', 'transfert VIP Istanbul aéroport', 'transfert luxe Istanbul', 'prise en charge aéroport Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['transfert Istanbul Airport IST', 'transfert aéroport IST', 'chauffeur privé Istanbul Airport', 'Istanbul Airport vers Taksim', 'Istanbul Airport vers Sultanahmet', 'Istanbul Airport vers Nişantaşı', 'Istanbul Airport vers Beşiktaş', 'Istanbul Airport vers Galataport', 'Istanbul Airport vers Bosphore', 'Istanbul Airport vers hôtel'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfert Sabiha Gökçen', 'transfert aéroport SAW', 'chauffeur privé Sabiha Gökçen', 'Sabiha vers Taksim', 'Sabiha vers Sultanahmet', 'Sabiha vers Kadıköy', 'Sabiha vers Üsküdar', 'Sabiha vers rive européenne', 'Sabiha vers rive asiatique', 'Sabiha vers Istanbul Airport'] },
    { title: 'Chauffeur privé Istanbul', terms: ['chauffeur privé Istanbul', 'chauffeur à l’heure Istanbul', 'voiture avec chauffeur Istanbul', 'chauffeur VIP Istanbul', 'chauffeur business Istanbul', 'chauffeur pour shopping Istanbul', 'Mercedes avec chauffeur Istanbul', 'limousine Istanbul'] },
  ],
  en: [
    { title: 'Istanbul airport transfer', terms: ['Istanbul airport transfer', 'airport transfer Istanbul', 'private airport transfer Istanbul', 'Istanbul airport pickup', 'Istanbul hotel transfer', 'book Istanbul airport transfer', 'VIP airport transfer Istanbul', 'Istanbul airport car service', 'Istanbul airport to hotel transfer', 'Istanbul airport to city center', 'luxury airport transfer Istanbul', 'airport meet and greet Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['IST airport transfer', 'Istanbul Airport IST transfer', 'Istanbul Airport private driver', 'Istanbul Airport to Taksim', 'Istanbul Airport to Sultanahmet', 'Istanbul Airport to Nisantasi', 'Istanbul Airport to Besiktas', 'Istanbul Airport to Galataport', 'Istanbul Airport to Bosphorus', 'Istanbul Airport hotel transfer'] },
    { title: 'Sabiha Gokcen SAW', terms: ['SAW airport transfer', 'Sabiha Gokcen airport transfer', 'Sabiha Gokcen private transfer', 'Sabiha to Taksim', 'Sabiha to Sultanahmet', 'Sabiha to Kadikoy', 'Sabiha to Uskudar', 'Sabiha to European side', 'Sabiha to Asian side', 'Sabiha to Istanbul Airport'] },
    { title: 'Private driver Istanbul', terms: ['private driver Istanbul', 'hourly private driver Istanbul', 'Istanbul car with driver', 'VIP driver Istanbul', 'executive driver Istanbul', 'business driver Istanbul', 'luxury car service Istanbul', 'Mercedes private driver Istanbul', 'limousine service Istanbul', 'Istanbul driver service'] },
  ],
  ru: [
    { title: 'Трансфер аэропорт Стамбул', terms: ['трансфер аэропорт Стамбул', 'трансфер из аэропорта Стамбула', 'частный трансфер Стамбул', 'встреча в аэропорту Стамбул', 'трансфер отель Стамбул', 'VIP трансфер Стамбул', 'заказать трансфер Стамбул'] },
    { title: 'Аэропорт Istanbul IST', terms: ['трансфер Istanbul Airport IST', 'трансфер аэропорт IST', 'водитель Istanbul Airport', 'Istanbul Airport Таксим', 'Istanbul Airport Султанахмет', 'Istanbul Airport Нишанташи'] },
    { title: 'Sabiha Gökçen SAW', terms: ['трансфер Sabiha Gökçen', 'трансфер аэропорт SAW', 'Sabiha Gokcen трансфер', 'Сабиха Таксим', 'Сабиха Султанахмет', 'Сабиха Кадыкёй'] },
    { title: 'Личный водитель Стамбул', terms: ['личный водитель Стамбул', 'частный водитель Стамбул', 'водитель на час Стамбул', 'авто с водителем Стамбул', 'VIP водитель Стамбул', 'Mercedes с водителем Стамбул'] },
  ],
  ar: [
    { title: 'نقل مطار إسطنبول', terms: ['نقل مطار إسطنبول', 'حجز نقل من مطار إسطنبول', 'سيارة خاصة من مطار إسطنبول', 'استقبال مطار إسطنبول', 'نقل من المطار إلى الفندق إسطنبول', 'خدمة نقل VIP إسطنبول'] },
    { title: 'مطار إسطنبول IST', terms: ['نقل مطار Istanbul IST', 'نقل من IST إلى تقسيم', 'نقل من IST إلى السلطان أحمد', 'نقل من IST إلى نيشانتاشي', 'نقل من IST إلى البوسفور'] },
    { title: 'مطار صبيحة SAW', terms: ['نقل مطار صبيحة', 'نقل من SAW إلى تقسيم', 'نقل من SAW إلى السلطان أحمد', 'نقل من صبيحة إلى كاديكوي', 'نقل من صبيحة إلى الجانب الأوروبي'] },
    { title: 'سائق خاص إسطنبول', terms: ['سائق خاص إسطنبول', 'سيارة مع سائق إسطنبول', 'سائق بالساعة إسطنبول', 'سائق VIP إسطنبول', 'خدمة ليموزين إسطنبول'] },
  ],
  zh: [
    { title: '伊斯坦布尔机场接送', terms: ['伊斯坦布尔机场接送', '伊斯坦布尔机场私人接送', '伊斯坦布尔机场到酒店', '伊斯坦布尔机场接机', '伊斯坦布尔VIP接送'] },
    { title: 'Istanbul Airport IST', terms: ['IST机场接送', 'Istanbul Airport IST transfer', 'IST到塔克西姆', 'IST到苏丹艾哈迈德', 'IST到博斯普鲁斯'] },
    { title: 'Sabiha Gökçen SAW', terms: ['SAW机场接送', '萨比哈机场接送', 'SAW到塔克西姆', 'SAW到苏丹艾哈迈德', 'SAW到欧洲区'] },
    { title: '伊斯坦布尔私人司机', terms: ['伊斯坦布尔私人司机', '伊斯坦布尔包车司机', '伊斯坦布尔小时司机', '伊斯坦布尔VIP司机', '伊斯坦布尔奔驰接送'] },
  ],
  de: [
    { title: 'Flughafentransfer Istanbul', terms: ['Flughafentransfer Istanbul', 'privater Flughafentransfer Istanbul', 'Transfer Flughafen Istanbul Hotel', 'VIP Transfer Istanbul', 'Istanbul Flughafentransfer buchen'] },
    { title: 'Istanbul Airport IST', terms: ['IST Flughafentransfer', 'Istanbul Airport IST Transfer', 'Istanbul Airport nach Taksim', 'Istanbul Airport nach Sultanahmet', 'Istanbul Airport zum Bosporus'] },
    { title: 'Sabiha Gökçen SAW', terms: ['Sabiha Gökçen Transfer', 'SAW Flughafentransfer', 'Sabiha nach Taksim', 'Sabiha nach Sultanahmet', 'Sabiha europäische Seite'] },
    { title: 'Privater Fahrer Istanbul', terms: ['privater Fahrer Istanbul', 'Privatfahrer Istanbul', 'Fahrer stundenweise Istanbul', 'Auto mit Fahrer Istanbul', 'Limousinenservice Istanbul'] },
  ],
  es: [
    { title: 'Traslado aeropuerto Estambul', terms: ['traslado aeropuerto Estambul', 'traslado privado aeropuerto Estambul', 'transfer aeropuerto Estambul', 'traslado aeropuerto hotel Estambul', 'traslado VIP Estambul'] },
    { title: 'Istanbul Airport IST', terms: ['traslado Istanbul Airport IST', 'traslado aeropuerto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport al Bósforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['traslado Sabiha Gökçen', 'traslado aeropuerto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha lado europeo'] },
    { title: 'Chófer privado Estambul', terms: ['chófer privado Estambul', 'conductor privado Estambul', 'coche con conductor Estambul', 'chofer por horas Estambul', 'servicio limusina Estambul'] },
  ],
  it: [
    { title: 'Transfer aeroporto Istanbul', terms: ['transfer aeroporto Istanbul', 'transfer privato aeroporto Istanbul', 'trasferimento aeroporto Istanbul hotel', 'pickup aeroporto Istanbul', 'transfer VIP Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport Bosforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha lato europeo'] },
    { title: 'Autista privato Istanbul', terms: ['autista privato Istanbul', 'auto con autista Istanbul', 'autista a ore Istanbul', 'autista VIP Istanbul', 'servizio limousine Istanbul'] },
  ],
  pt: [
    { title: 'Transfer aeroporto Istambul', terms: ['transfer aeroporto Istambul', 'transfer privado aeroporto Istambul', 'transfer aeroporto hotel Istambul', 'pickup aeroporto Istambul', 'transfer VIP Istambul'] },
    { title: 'Istanbul Airport IST', terms: ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport para Taksim', 'Istanbul Airport para Sultanahmet', 'Istanbul Airport Bósforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha para Taksim', 'Sabiha para Sultanahmet', 'Sabiha lado europeu'] },
    { title: 'Motorista privado Istambul', terms: ['motorista privado Istambul', 'carro com motorista Istambul', 'motorista por hora Istambul', 'motorista VIP Istambul', 'serviço limousine Istambul'] },
  ],
};

export function slugifyTransferKeyword(term: string) {
  return encodeURIComponent(term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'istanbul-transfer');
}

export function getTransferKeywordHref(locale: TransferSeoLocale, term: string) {
  return `${transferKeywordBases[locale]}/${slugifyTransferKeyword(term)}`;
}

export function findTransferKeyword(locale: TransferSeoLocale, slug: string) {
  const decoded = decodeURIComponent(slug);
  const groups = transferKeywordClusters[locale] || transferKeywordClusters.en;
  for (const group of groups) {
    for (const term of group.terms) {
      if (slugifyTransferKeyword(term) === decoded || slugifyTransferKeyword(term) === slug) {
        return { term, groupTitle: group.title, related: group.terms.filter((item) => item !== term).slice(0, 8) };
      }
    }
  }
  return null;
}

export const transferKeywordCopy: Record<TransferSeoLocale, { reserve: string; cta: string; eyebrow: string; why: string; bookNow: string; faqTitle: string }> = {
  fr: { reserve: 'Réserver mon transfert', cta: 'Vérifier le prix et réserver', eyebrow: 'Page dédiée transfert Istanbul', why: 'Pourquoi réserver avec Bosphoras Mobility ?', bookNow: 'Réserver maintenant', faqTitle: 'Questions fréquentes' },
  en: { reserve: 'Book my transfer', cta: 'Check price and book', eyebrow: 'Dedicated Istanbul transfer page', why: 'Why book with Bosphoras Mobility?', bookNow: 'Book now', faqTitle: 'Frequently asked questions' },
  ru: { reserve: 'Забронировать трансфер', cta: 'Проверить цену и забронировать', eyebrow: 'Страница трансфера Стамбул', why: 'Почему Bosphoras Mobility?', bookNow: 'Забронировать', faqTitle: 'Частые вопросы' },
  ar: { reserve: 'احجز النقل', cta: 'تحقق من السعر واحجز', eyebrow: 'صفحة نقل إسطنبول', why: 'لماذا Bosphoras Mobility؟', bookNow: 'احجز الآن', faqTitle: 'الأسئلة الشائعة' },
  zh: { reserve: '预订接送', cta: '查看价格并预订', eyebrow: '伊斯坦布尔接送页面', why: '为什么选择 Bosphoras Mobility？', bookNow: '立即预订', faqTitle: '常见问题' },
  de: { reserve: 'Transfer buchen', cta: 'Preis prüfen und buchen', eyebrow: 'Istanbul Transfer Seite', why: 'Warum Bosphoras Mobility?', bookNow: 'Jetzt buchen', faqTitle: 'Häufige Fragen' },
  es: { reserve: 'Reservar traslado', cta: 'Ver precio y reservar', eyebrow: 'Página traslado Estambul', why: '¿Por qué Bosphoras Mobility?', bookNow: 'Reservar ahora', faqTitle: 'Preguntas frecuentes' },
  it: { reserve: 'Prenota transfer', cta: 'Controlla prezzo e prenota', eyebrow: 'Pagina transfer Istanbul', why: 'Perché Bosphoras Mobility?', bookNow: 'Prenota ora', faqTitle: 'Domande frequenti' },
  pt: { reserve: 'Reservar transfer', cta: 'Ver preço e reservar', eyebrow: 'Página transfer Istambul', why: 'Por que Bosphoras Mobility?', bookNow: 'Reservar agora', faqTitle: 'Perguntas frequentes' },
};
