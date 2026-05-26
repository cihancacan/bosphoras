export type TransferSeoLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

export const transferLocales: TransferSeoLocale[] = ['fr', 'en', 'ru', 'ar', 'zh', 'de', 'es', 'it', 'pt'];

export const transferMainPaths: Record<TransferSeoLocale, string> = {
  fr: '/transfert-aeroport-istanbul',
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
  fr: '',
  en: '/en/istanbul-transfer',
  ru: '/ru/transfer-stambul',
  ar: '/ar/istanbul-transfer',
  zh: '/zh/istanbul-transfer',
  de: '/de/istanbul-transfer',
  es: '/es/transfer-estambul',
  it: '/it/transfer-istanbul',
  pt: '/pt/transfer-istambul',
};

const frRoutes = ['IST vers Taksim', 'IST vers Sultanahmet', 'IST vers Nişantaşı', 'IST vers Beşiktaş', 'IST vers Galataport', 'IST vers hôtels du Bosphore', 'SAW vers Taksim', 'SAW vers Sultanahmet', 'SAW vers Kadıköy', 'SAW vers Üsküdar', 'SAW vers Nişantaşı', 'SAW vers Istanbul Airport IST'];
const enRoutes = ['IST to Taksim', 'IST to Sultanahmet', 'IST to Nisantasi', 'IST to Besiktas', 'IST to Galataport', 'IST to Bosphorus hotels', 'SAW to Taksim', 'SAW to Sultanahmet', 'SAW to Kadikoy', 'SAW to Uskudar', 'SAW to Nisantasi', 'SAW to Istanbul Airport IST'];
const ruRoutes = ['IST Таксим', 'IST Султанахмет', 'IST Нишанташи', 'IST Бешикташ', 'IST Галатапорт', 'IST отели Босфора', 'SAW Таксим', 'SAW Султанахмет', 'SAW Кадыкёй', 'SAW Ускюдар', 'SAW Нишанташи', 'SAW Istanbul Airport IST'];
const arRoutes = ['IST إلى تقسيم', 'IST إلى السلطان أحمد', 'IST إلى نيشانتاشي', 'IST إلى بشكتاش', 'IST إلى غالاتابورت', 'IST إلى فنادق البوسفور', 'SAW إلى تقسيم', 'SAW إلى السلطان أحمد', 'SAW إلى كاديكوي', 'SAW إلى أوسكودار', 'SAW إلى نيشانتاشي', 'SAW إلى Istanbul Airport IST'];
const zhRoutes = ['IST到塔克西姆', 'IST到苏丹艾哈迈德', 'IST到尼尚塔石', 'IST到贝西克塔斯', 'IST到加拉塔港', 'IST到博斯普鲁斯酒店', 'SAW到塔克西姆', 'SAW到苏丹艾哈迈德', 'SAW到卡德柯伊', 'SAW到于斯屈达尔', 'SAW到尼尚塔石', 'SAW到Istanbul Airport IST'];
const deRoutes = ['IST nach Taksim', 'IST nach Sultanahmet', 'IST nach Nişantaşı', 'IST nach Beşiktaş', 'IST nach Galataport', 'IST zu Bosporus Hotels', 'SAW nach Taksim', 'SAW nach Sultanahmet', 'SAW nach Kadıköy', 'SAW nach Üsküdar', 'SAW nach Nişantaşı', 'SAW nach Istanbul Airport IST'];
const esRoutes = ['IST a Taksim', 'IST a Sultanahmet', 'IST a Nisantasi', 'IST a Besiktas', 'IST a Galataport', 'IST a hoteles del Bósforo', 'SAW a Taksim', 'SAW a Sultanahmet', 'SAW a Kadikoy', 'SAW a Uskudar', 'SAW a Nisantasi', 'SAW a Istanbul Airport IST'];
const itRoutes = ['IST a Taksim', 'IST a Sultanahmet', 'IST a Nişantaşı', 'IST a Beşiktaş', 'IST a Galataport', 'IST hotel sul Bosforo', 'SAW a Taksim', 'SAW a Sultanahmet', 'SAW a Kadıköy', 'SAW a Üsküdar', 'SAW a Nişantaşı', 'SAW a Istanbul Airport IST'];
const ptRoutes = ['IST para Taksim', 'IST para Sultanahmet', 'IST para Nişantaşı', 'IST para Beşiktaş', 'IST para Galataport', 'IST para hotéis do Bósforo', 'SAW para Taksim', 'SAW para Sultanahmet', 'SAW para Kadıköy', 'SAW para Üsküdar', 'SAW para Nişantaşı', 'SAW para Istanbul Airport IST'];

const frUses = ['Accueil aéroport Istanbul', 'Suivi de vol Istanbul', 'Rendez-vous d’affaires Istanbul', 'Transfert hôtel restaurant Istanbul', 'Shopping à Nişantaşı avec chauffeur', 'Dîner sur le Bosphore avec chauffeur', 'Chauffeur à l’heure Istanbul', 'Chauffeur mariage Istanbul', 'Transport famille VIP Istanbul', 'Roadshow corporate Istanbul', 'Transfert marina Istanbul', 'Transfert clinique Istanbul'];
const enUses = ['Airport meet and greet Istanbul', 'Flight tracking Istanbul transfer', 'Business meetings Istanbul driver', 'Hotel to restaurant transfer Istanbul', 'Shopping in Nisantasi with driver', 'Bosphorus dinner transfer', 'Hourly private driver Istanbul', 'Wedding chauffeur Istanbul', 'VIP family transfer Istanbul', 'Corporate roadshow Istanbul', 'Marina transfer Istanbul', 'Clinic appointment transfer Istanbul'];
const ruUses = ['Встреча в аэропорту Стамбул', 'Отслеживание рейса Стамбул', 'Водитель для деловых встреч Стамбул', 'Трансфер отель ресторан Стамбул', 'Шопинг в Нишанташи с водителем', 'Ужин на Босфоре с водителем', 'Водитель на час Стамбул', 'Водитель на свадьбу Стамбул', 'VIP трансфер семья Стамбул', 'Корпоративный roadshow Стамбул', 'Трансфер в марину Стамбул', 'Трансфер в клинику Стамбул'];
const arUses = ['استقبال مطار إسطنبول', 'تتبع الرحلة إسطنبول', 'سائق لاجتماعات العمل إسطنبول', 'نقل من الفندق إلى المطعم إسطنبول', 'تسوق في نيشانتاشي مع سائق', 'عشاء على البوسفور مع سائق', 'سائق بالساعة إسطنبول', 'سائق زفاف إسطنبول', 'نقل عائلة VIP إسطنبول', 'جولة أعمال إسطنبول', 'نقل مارينا إسطنبول', 'نقل عيادة إسطنبول'];
const zhUses = ['伊斯坦布尔机场迎接', '伊斯坦布尔航班跟踪接送', '伊斯坦布尔商务会议司机', '伊斯坦布尔酒店到餐厅接送', '尼尚塔石购物司机', '博斯普鲁斯晚餐接送', '伊斯坦布尔按小时私人司机', '伊斯坦布尔婚礼司机', '伊斯坦布尔VIP家庭接送', '伊斯坦布尔企业路演司机', '伊斯坦布尔码头接送', '伊斯坦布尔诊所接送'];
const deUses = ['Flughafenempfang Istanbul', 'Flugverfolgung Istanbul Transfer', 'Fahrer für Geschäftstermine Istanbul', 'Hotel Restaurant Transfer Istanbul', 'Shopping in Nişantaşı mit Fahrer', 'Bosporus Dinner Transfer', 'Fahrer stundenweise Istanbul', 'Hochzeitschauffeur Istanbul', 'VIP Familientransfer Istanbul', 'Corporate Roadshow Istanbul', 'Marina Transfer Istanbul', 'Kliniktermin Transfer Istanbul'];
const esUses = ['Recepción aeropuerto Estambul', 'Seguimiento de vuelo Estambul', 'Chófer para reuniones Estambul', 'Traslado hotel restaurante Estambul', 'Compras en Nisantasi con chófer', 'Cena en el Bósforo con chófer', 'Chófer por horas Estambul', 'Chófer boda Estambul', 'Traslado familia VIP Estambul', 'Roadshow corporativo Estambul', 'Traslado marina Estambul', 'Traslado clínica Estambul'];
const itUses = ['Accoglienza aeroporto Istanbul', 'Monitoraggio volo Istanbul transfer', 'Autista per riunioni Istanbul', 'Transfer hotel ristorante Istanbul', 'Shopping a Nişantaşı con autista', 'Cena sul Bosforo con autista', 'Autista a ore Istanbul', 'Autista matrimonio Istanbul', 'Transfer famiglia VIP Istanbul', 'Roadshow aziendale Istanbul', 'Transfer marina Istanbul', 'Transfer clinica Istanbul'];
const ptUses = ['Receção aeroporto Istambul', 'Acompanhamento do voo Istambul', 'Motorista para reuniões Istambul', 'Transfer hotel restaurante Istambul', 'Compras em Nişantaşı com motorista', 'Jantar no Bósforo com motorista', 'Motorista por hora Istambul', 'Motorista casamento Istambul', 'Transfer família VIP Istambul', 'Roadshow corporativo Istambul', 'Transfer marina Istambul', 'Transfer clínica Istambul'];

export const transferKeywordClusters: Record<TransferSeoLocale, Array<{ title: string; terms: string[] }>> = {
  fr: [
    { title: 'Transfert aéroport Istanbul', terms: ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'transfert privé aéroport Istanbul', 'navette privée Istanbul', 'taxi privé aéroport Istanbul', 'chauffeur aéroport Istanbul', 'réserver transfert Istanbul', 'transfert aéroport Istanbul hôtel', 'transfert aéroport Istanbul centre ville', 'transfert VIP Istanbul aéroport', 'transfert luxe Istanbul', 'prise en charge aéroport Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['transfert Istanbul Airport IST', 'transfert aéroport IST', 'chauffeur privé Istanbul Airport', 'Istanbul Airport vers Taksim', 'Istanbul Airport vers Sultanahmet', 'Istanbul Airport vers Nişantaşı', 'Istanbul Airport vers Beşiktaş', 'Istanbul Airport vers Galataport', 'Istanbul Airport vers Bosphore', 'Istanbul Airport vers hôtel'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfert Sabiha Gökçen', 'transfert aéroport SAW', 'chauffeur privé Sabiha Gökçen', 'Sabiha vers Taksim', 'Sabiha vers Sultanahmet', 'Sabiha vers Kadıköy', 'Sabiha vers Üsküdar', 'Sabiha vers rive européenne', 'Sabiha vers rive asiatique', 'Sabiha vers Istanbul Airport'] },
    { title: 'Chauffeur privé Istanbul', terms: ['chauffeur privé Istanbul', 'chauffeur à l’heure Istanbul', 'voiture avec chauffeur Istanbul', 'chauffeur VIP Istanbul', 'chauffeur business Istanbul', 'chauffeur pour shopping Istanbul', 'Mercedes avec chauffeur Istanbul', 'limousine Istanbul'] },
    { title: 'Routes populaires pour les transferts aéroport à Istanbul', terms: frRoutes },
    { title: 'Chauffeur privé, chauffeur à l’heure et mobilité VIP à Istanbul', terms: frUses },
  ],
  en: [
    { title: 'Istanbul airport transfer', terms: ['Istanbul airport transfer', 'airport transfer Istanbul', 'private airport transfer Istanbul', 'Istanbul airport pickup', 'Istanbul hotel transfer', 'book Istanbul airport transfer', 'VIP airport transfer Istanbul', 'Istanbul airport car service', 'Istanbul airport to hotel transfer', 'Istanbul airport to city center', 'luxury airport transfer Istanbul', 'airport meet and greet Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['IST airport transfer', 'Istanbul Airport IST transfer', 'Istanbul Airport private driver', 'Istanbul Airport to Taksim', 'Istanbul Airport to Sultanahmet', 'Istanbul Airport to Nisantasi', 'Istanbul Airport to Besiktas', 'Istanbul Airport to Galataport', 'Istanbul Airport to Bosphorus', 'Istanbul Airport hotel transfer'] },
    { title: 'Sabiha Gokcen SAW', terms: ['SAW airport transfer', 'Sabiha Gokcen airport transfer', 'Sabiha Gokcen private transfer', 'Sabiha to Taksim', 'Sabiha to Sultanahmet', 'Sabiha to Kadikoy', 'Sabiha to Uskudar', 'Sabiha to European side', 'Sabiha to Asian side', 'Sabiha to Istanbul Airport'] },
    { title: 'Private driver Istanbul', terms: ['private driver Istanbul', 'hourly private driver Istanbul', 'Istanbul car with driver', 'VIP driver Istanbul', 'executive driver Istanbul', 'business driver Istanbul', 'luxury car service Istanbul', 'Mercedes private driver Istanbul', 'limousine service Istanbul', 'Istanbul driver service'] },
    { title: 'Popular Istanbul airport transfer routes', terms: enRoutes },
    { title: 'Private driver, hourly chauffeur and VIP mobility in Istanbul', terms: enUses },
  ],
  ru: [
    { title: 'Трансфер аэропорт Стамбул', terms: ['трансфер аэропорт Стамбул', 'трансфер из аэропорта Стамбула', 'частный трансфер Стамбул', 'встреча в аэропорту Стамбул', 'трансфер отель Стамбул', 'VIP трансфер Стамбул', 'заказать трансфер Стамбул'] },
    { title: 'Аэропорт Istanbul IST', terms: ['трансфер Istanbul Airport IST', 'трансфер аэропорт IST', 'водитель Istanbul Airport', 'Istanbul Airport Таксим', 'Istanbul Airport Султанахмет', 'Istanbul Airport Нишанташи'] },
    { title: 'Sabiha Gökçen SAW', terms: ['трансфер Sabiha Gökçen', 'трансфер аэропорт SAW', 'Sabiha Gokcen трансфер', 'Сабиха Таксим', 'Сабиха Султанахмет', 'Сабиха Кадыкёй'] },
    { title: 'Личный водитель Стамбул', terms: ['личный водитель Стамбул', 'частный водитель Стамбул', 'водитель на час Стамбул', 'авто с водителем Стамбул', 'VIP водитель Стамбул', 'Mercedes с водителем Стамбул'] },
    { title: 'Популярные маршруты трансфера из аэропортов Стамбула', terms: ruRoutes },
    { title: 'Личный водитель, водитель на час и VIP-передвижение в Стамбуле', terms: ruUses },
  ],
  ar: [
    { title: 'نقل مطار إسطنبول', terms: ['نقل مطار إسطنبول', 'حجز نقل من مطار إسطنبول', 'سيارة خاصة من مطار إسطنبول', 'استقبال مطار إسطنبول', 'نقل من المطار إلى الفندق إسطنبول', 'خدمة نقل VIP إسطنبول'] },
    { title: 'مطار إسطنبول IST', terms: ['نقل مطار Istanbul IST', 'نقل من IST إلى تقسيم', 'نقل من IST إلى السلطان أحمد', 'نقل من IST إلى نيشانتاشي', 'نقل من IST إلى البوسفور'] },
    { title: 'مطار صبيحة SAW', terms: ['نقل مطار صبيحة', 'نقل من SAW إلى تقسيم', 'نقل من SAW إلى السلطان أحمد', 'نقل من صبيحة إلى كاديكوي', 'نقل من صبيحة إلى الجانب الأوروبي'] },
    { title: 'سائق خاص إسطنبول', terms: ['سائق خاص إسطنبول', 'سيارة مع سائق إسطنبول', 'سائق بالساعة إسطنبول', 'سائق VIP إسطنبول', 'خدمة ليموزين إسطنبول'] },
    { title: 'أشهر مسارات النقل من مطارات إسطنبول', terms: arRoutes },
    { title: 'سائق خاص، سائق بالساعة وتنقل VIP في إسطنبول', terms: arUses },
  ],
  zh: [
    { title: '伊斯坦布尔机场接送', terms: ['伊斯坦布尔机场接送', '伊斯坦布尔机场私人接送', '伊斯坦布尔机场到酒店', '伊斯坦布尔机场接机', '伊斯坦布尔VIP接送'] },
    { title: 'Istanbul Airport IST', terms: ['IST机场接送', 'Istanbul Airport IST transfer', 'IST到塔克西姆', 'IST到苏丹艾哈迈德', 'IST到博斯普鲁斯'] },
    { title: 'Sabiha Gökçen SAW', terms: ['SAW机场接送', '萨比哈机场接送', 'SAW到塔克西姆', 'SAW到苏丹艾哈迈德', 'SAW到欧洲区'] },
    { title: '伊斯坦布尔私人司机', terms: ['伊斯坦布尔私人司机', '伊斯坦布尔包车司机', '伊斯坦布尔小时司机', '伊斯坦布尔VIP司机', '伊斯坦布尔奔驰接送'] },
    { title: '伊斯坦布尔机场接送热门路线', terms: zhRoutes },
    { title: '私人司机、按小时司机和伊斯坦布尔VIP出行', terms: zhUses },
  ],
  de: [
    { title: 'Flughafentransfer Istanbul', terms: ['Flughafentransfer Istanbul', 'privater Flughafentransfer Istanbul', 'Transfer Flughafen Istanbul Hotel', 'VIP Transfer Istanbul', 'Istanbul Flughafentransfer buchen'] },
    { title: 'Istanbul Airport IST', terms: ['IST Flughafentransfer', 'Istanbul Airport IST Transfer', 'Istanbul Airport nach Taksim', 'Istanbul Airport nach Sultanahmet', 'Istanbul Airport zum Bosporus'] },
    { title: 'Sabiha Gökçen SAW', terms: ['Sabiha Gökçen Transfer', 'SAW Flughafentransfer', 'Sabiha nach Taksim', 'Sabiha nach Sultanahmet', 'Sabiha europäische Seite'] },
    { title: 'Privater Fahrer Istanbul', terms: ['privater Fahrer Istanbul', 'Privatfahrer Istanbul', 'Fahrer stundenweise Istanbul', 'Auto mit Fahrer Istanbul', 'Limousinenservice Istanbul'] },
    { title: 'Beliebte Flughafentransfer-Routen in Istanbul', terms: deRoutes },
    { title: 'Privater Fahrer, stundenweiser Fahrer und VIP-Mobilität in Istanbul', terms: deUses },
  ],
  es: [
    { title: 'Traslado aeropuerto Estambul', terms: ['traslado aeropuerto Estambul', 'traslado privado aeropuerto Estambul', 'transfer aeropuerto Estambul', 'traslado aeropuerto hotel Estambul', 'traslado VIP Estambul'] },
    { title: 'Istanbul Airport IST', terms: ['traslado Istanbul Airport IST', 'traslado aeropuerto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport al Bósforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['traslado Sabiha Gökçen', 'traslado aeropuerto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha lado europeo'] },
    { title: 'Chófer privado Estambul', terms: ['chófer privado Estambul', 'conductor privado Estambul', 'coche con conductor Estambul', 'chofer por horas Estambul', 'servicio limusina Estambul'] },
    { title: 'Rutas populares de traslado del aeropuerto en Estambul', terms: esRoutes },
    { title: 'Conductor privado, chófer por horas y movilidad VIP en Estambul', terms: esUses },
  ],
  it: [
    { title: 'Transfer aeroporto Istanbul', terms: ['transfer aeroporto Istanbul', 'transfer privato aeroporto Istanbul', 'trasferimento aeroporto Istanbul hotel', 'pickup aeroporto Istanbul', 'transfer VIP Istanbul'] },
    { title: 'Istanbul Airport IST', terms: ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport Bosforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha lato europeo'] },
    { title: 'Autista privato Istanbul', terms: ['autista privato Istanbul', 'auto con autista Istanbul', 'autista a ore Istanbul', 'autista VIP Istanbul', 'servizio limousine Istanbul'] },
    { title: 'Percorsi popolari per i transfer aeroportuali a Istanbul', terms: itRoutes },
    { title: 'Autista privato, autista a ore e mobilità VIP a Istanbul', terms: itUses },
  ],
  pt: [
    { title: 'Transfer aeroporto Istambul', terms: ['transfer aeroporto Istambul', 'transfer privado aeroporto Istambul', 'transfer aeroporto hotel Istambul', 'pickup aeroporto Istambul', 'transfer VIP Istambul'] },
    { title: 'Istanbul Airport IST', terms: ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport para Taksim', 'Istanbul Airport para Sultanahmet', 'Istanbul Airport Bósforo'] },
    { title: 'Sabiha Gökçen SAW', terms: ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha para Taksim', 'Sabiha para Sultanahmet', 'Sabiha lado europeu'] },
    { title: 'Motorista privado Istambul', terms: ['motorista privado Istambul', 'carro com motorista Istambul', 'motorista por hora Istambul', 'motorista VIP Istambul', 'serviço limousine Istambul'] },
    { title: 'Rotas populares de transfer do aeroporto em Istambul', terms: ptRoutes },
    { title: 'Motorista privado, motorista por hora e mobilidade VIP em Istambul', terms: ptUses },
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
  fr: { reserve: 'Réserver mon transfert', cta: 'Vérifier le prix et réserver', eyebrow: 'Transfert privé Istanbul', why: 'Pourquoi réserver avec Bosphoras Mobility ?', bookNow: 'Réserver maintenant', faqTitle: 'Questions fréquentes' },
  en: { reserve: 'Book my transfer', cta: 'Check price and book', eyebrow: 'Istanbul private transfer', why: 'Why book with Bosphoras Mobility?', bookNow: 'Book now', faqTitle: 'Frequently asked questions' },
  ru: { reserve: 'Забронировать трансфер', cta: 'Проверить цену и забронировать', eyebrow: 'Частный трансфер Стамбул', why: 'Почему Bosphoras Mobility?', bookNow: 'Забронировать', faqTitle: 'Частые вопросы' },
  ar: { reserve: 'احجز النقل', cta: 'تحقق من السعر واحجز', eyebrow: 'نقل خاص في إسطنبول', why: 'لماذا Bosphoras Mobility؟', bookNow: 'احجز الآن', faqTitle: 'الأسئلة الشائعة' },
  zh: { reserve: '预订接送', cta: '查看价格并预订', eyebrow: '伊斯坦布尔私人接送', why: '为什么选择 Bosphoras Mobility？', bookNow: '立即预订', faqTitle: '常见问题' },
  de: { reserve: 'Transfer buchen', cta: 'Preis prüfen und buchen', eyebrow: 'Privater Transfer Istanbul', why: 'Warum Bosphoras Mobility?', bookNow: 'Jetzt buchen', faqTitle: 'Häufige Fragen' },
  es: { reserve: 'Reservar traslado', cta: 'Ver precio y reservar', eyebrow: 'Traslado privado Estambul', why: '¿Por qué Bosphoras Mobility?', bookNow: 'Reservar ahora', faqTitle: 'Preguntas frecuentes' },
  it: { reserve: 'Prenota transfer', cta: 'Controlla prezzo e prenota', eyebrow: 'Transfer privato Istanbul', why: 'Perché Bosphoras Mobility?', bookNow: 'Prenota ora', faqTitle: 'Domande frequenti' },
  pt: { reserve: 'Reservar transfer', cta: 'Ver preço e reservar', eyebrow: 'Transfer privado Istambul', why: 'Por que Bosphoras Mobility?', bookNow: 'Reservar agora', faqTitle: 'Perguntas frequentes' },
};
