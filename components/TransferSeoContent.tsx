'use client';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';
type KeywordGroup = [string, string[]];

type SeoCopy = {
  eyebrow: string;
  h1: string;
  intro: string[];
  keywordSummary: string;
  keywordGroups: KeywordGroup[];
  routesTitle: string;
  routesIntro: string;
  driverEyebrow: string;
  driverH2: string;
  routeSummary: string;
  driverSummary: string;
  routeItems: string[];
  serviceItems: string[];
};

const baseRouteItems = [
  'IST → Taksim',
  'IST → Sultanahmet',
  'IST → Nişantaşı',
  'IST → Beşiktaş',
  'IST → Galataport',
  'IST → Bosphorus hotels',
  'SAW → Taksim',
  'SAW → Sultanahmet',
  'SAW → Kadıköy',
  'SAW → Üsküdar',
  'SAW → Nişantaşı',
  'SAW → Istanbul Airport IST',
];

const copy: Record<TransferLocale, SeoCopy> = {
  fr: {
    eyebrow: 'Transfert privé Istanbul',
    h1: 'Transfert aéroport Istanbul IST & SAW, chauffeur privé et réservation à l’heure.',
    intro: [
      'Réservez un transfert aéroport Istanbul depuis IST ou Sabiha Gökçen SAW vers votre hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.',
      'Le service couvre les arrivées, les départs, les trajets inter-aéroports, les transferts VIP et les réservations de chauffeur privé à l’heure à Istanbul.',
    ],
    keywordSummary: 'Ouvrir les combinaisons de recherche',
    keywordGroups: [
      ['Transfert aéroport Istanbul', ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'transfert privé aéroport Istanbul', 'navette privée Istanbul', 'taxi privé aéroport Istanbul', 'chauffeur aéroport Istanbul', 'réserver transfert Istanbul', 'transfert aéroport Istanbul hôtel', 'transfert aéroport Istanbul centre ville', 'transfert VIP Istanbul aéroport', 'transfert luxe Istanbul', 'prise en charge aéroport Istanbul']],
      ['Istanbul Airport IST', ['transfert Istanbul Airport IST', 'transfert aéroport IST', 'chauffeur privé Istanbul Airport', 'Istanbul Airport vers Taksim', 'Istanbul Airport vers Sultanahmet', 'Istanbul Airport vers Nişantaşı', 'Istanbul Airport vers Beşiktaş', 'Istanbul Airport vers Galataport', 'Istanbul Airport vers Bosphore', 'Istanbul Airport vers hôtel']],
      ['Sabiha Gökçen SAW', ['transfert Sabiha Gökçen', 'transfert aéroport SAW', 'chauffeur privé Sabiha Gökçen', 'Sabiha vers Taksim', 'Sabiha vers Sultanahmet', 'Sabiha vers Kadıköy', 'Sabiha vers Üsküdar', 'Sabiha vers rive européenne', 'Sabiha vers rive asiatique', 'Sabiha vers Istanbul Airport']],
      ['Chauffeur privé Istanbul', ['chauffeur privé Istanbul', 'chauffeur à l’heure Istanbul', 'voiture avec chauffeur Istanbul', 'chauffeur VIP Istanbul', 'chauffeur business Istanbul', 'chauffeur pour shopping Istanbul', 'chauffeur privé hôtel Istanbul', 'chauffeur privé Bosphore', 'Mercedes avec chauffeur Istanbul', 'limousine Istanbul']],
    ],
    routesTitle: 'Routes populaires pour les transferts aéroport à Istanbul',
    routesIntro: 'Les trajets les plus demandés relient Istanbul Airport IST et Sabiha Gökçen SAW aux quartiers hôteliers, zones d’affaires, adresses du Bosphore, marinas et résidences privées.',
    driverEyebrow: 'Chauffeur privé Istanbul',
    driverH2: 'Chauffeur privé, chauffeur à l’heure et mobilité VIP à Istanbul',
    routeSummary: 'Ouvrir les trajets populaires',
    driverSummary: 'Ouvrir les usages chauffeur privé',
    routeItems: ['IST → Taksim', 'IST → Sultanahmet', 'IST → Nişantaşı', 'IST → Beşiktaş', 'IST → Galataport', 'IST → hôtels du Bosphore', 'SAW → Taksim', 'SAW → Sultanahmet', 'SAW → Kadıköy', 'SAW → Üsküdar', 'SAW → Nişantaşı', 'SAW → Istanbul Airport IST'],
    serviceItems: ['Accueil aéroport', 'Suivi de vol', 'Rendez-vous d’affaires', 'Transfert hôtel restaurant', 'Shopping à Nişantaşı', 'Dîner sur le Bosphore', 'Chauffeur à l’heure', 'Mariage ou événement', 'Famille VIP', 'Roadshow corporate', 'Transfert marina', 'Rendez-vous clinique'],
  },
  en: {
    eyebrow: 'Istanbul private transfer',
    h1: 'Istanbul Airport IST & SAW transfer, private driver and hourly booking.',
    intro: [
      'Book an Istanbul airport transfer from IST or Sabiha Gökçen SAW to your hotel, residence, marina, restaurant or business appointment.',
      'The service covers arrivals, departures, airport-to-airport transfers, VIP transfers and hourly private driver bookings in Istanbul.',
    ],
    keywordSummary: 'Open search combinations',
    keywordGroups: [
      ['Istanbul airport transfer', ['Istanbul airport transfer', 'airport transfer Istanbul', 'private airport transfer Istanbul', 'Istanbul airport pickup', 'Istanbul hotel transfer', 'book Istanbul airport transfer', 'VIP airport transfer Istanbul', 'Istanbul airport car service', 'Istanbul airport to hotel transfer', 'Istanbul airport to city center', 'luxury airport transfer Istanbul', 'airport meet and greet Istanbul']],
      ['Istanbul Airport IST', ['IST airport transfer', 'Istanbul Airport IST transfer', 'Istanbul Airport private driver', 'Istanbul Airport to Taksim', 'Istanbul Airport to Sultanahmet', 'Istanbul Airport to Nisantasi', 'Istanbul Airport to Besiktas', 'Istanbul Airport to Galataport', 'Istanbul Airport to Bosphorus', 'Istanbul Airport hotel transfer']],
      ['Sabiha Gokcen SAW', ['SAW airport transfer', 'Sabiha Gokcen airport transfer', 'Sabiha Gokcen private transfer', 'Sabiha to Taksim', 'Sabiha to Sultanahmet', 'Sabiha to Kadikoy', 'Sabiha to Uskudar', 'Sabiha to European side', 'Sabiha to Asian side', 'Sabiha to Istanbul Airport']],
      ['Private driver Istanbul', ['private driver Istanbul', 'hourly private driver Istanbul', 'Istanbul car with driver', 'VIP driver Istanbul', 'executive driver Istanbul', 'business driver Istanbul', 'luxury car service Istanbul', 'Mercedes private driver Istanbul', 'limousine service Istanbul', 'Istanbul driver service']],
    ],
    routesTitle: 'Popular Istanbul airport transfer routes',
    routesIntro: 'The most requested routes connect Istanbul Airport IST and Sabiha Gökçen SAW with hotel districts, business areas, Bosphorus addresses, marinas and private residences.',
    driverEyebrow: 'Private driver Istanbul',
    driverH2: 'Private driver, hourly private driver and VIP mobility in Istanbul',
    routeSummary: 'Open popular routes',
    driverSummary: 'Open private driver use cases',
    routeItems: baseRouteItems,
    serviceItems: ['Airport meet and greet', 'Flight tracking', 'Business meetings', 'Hotel to restaurant transfer', 'Shopping in Nişantaşı', 'Bosphorus dinner transfer', 'Hourly private driver', 'Wedding or event', 'VIP family transfer', 'Corporate roadshow', 'Marina transfer', 'Clinic appointment transfer'],
  },
  ru: {
    eyebrow: 'Частный трансфер Стамбул',
    h1: 'Трансфер аэропорт Стамбул IST и SAW, личный водитель и почасовая аренда.',
    intro: ['Забронируйте трансфер из аэропорта Стамбула IST или Sabiha Gökçen SAW до отеля, резиденции, марины, ресторана или деловой встречи.', 'Сервис подходит для прилёта, вылета, поездок между аэропортами, VIP-трансфера и почасовой аренды личного водителя в Стамбуле.'],
    keywordSummary: 'Открыть поисковые комбинации',
    keywordGroups: [
      ['Трансфер аэропорт Стамбул', ['трансфер аэропорт Стамбул', 'трансфер из аэропорта Стамбула', 'частный трансфер Стамбул', 'встреча в аэропорту Стамбул', 'трансфер отель Стамбул', 'VIP трансфер Стамбул', 'заказать трансфер Стамбул', 'трансфер с водителем Стамбул', 'трансфер аэропорт отель Стамбул', 'люксовый трансфер Стамбул']],
      ['Аэропорт Istanbul IST', ['трансфер Istanbul Airport IST', 'трансфер аэропорт IST', 'водитель Istanbul Airport', 'Istanbul Airport Таксим', 'Istanbul Airport Султанахмет', 'Istanbul Airport Нишанташи', 'Istanbul Airport Бешикташ', 'Istanbul Airport Галатапорт', 'Istanbul Airport Босфор']],
      ['Sabiha Gökçen SAW', ['трансфер Sabiha Gökçen', 'трансфер аэропорт SAW', 'Sabiha Gokcen трансфер', 'Сабиха Таксим', 'Сабиха Султанахмет', 'Сабиха Кадыкёй', 'Сабиха Ускюдар', 'Сабиха европейская сторона', 'Сабиха азиатская сторона']],
      ['Личный водитель Стамбул', ['личный водитель Стамбул', 'частный водитель Стамбул', 'водитель на час Стамбул', 'авто с водителем Стамбул', 'VIP водитель Стамбул', 'бизнес водитель Стамбул', 'Mercedes с водителем Стамбул', 'лимузин сервис Стамбул']],
    ],
    routesTitle: 'Популярные маршруты трансфера из аэропортов Стамбула',
    routesIntro: 'Самые частые маршруты соединяют Istanbul Airport IST и Sabiha Gökçen SAW с отелями, деловыми районами, адресами у Босфора, маринами и частными резиденциями.',
    driverEyebrow: 'Личный водитель Стамбул',
    driverH2: 'Личный водитель, водитель на час и VIP-передвижение в Стамбуле',
    routeSummary: 'Открыть популярные маршруты',
    driverSummary: 'Открыть варианты использования',
    routeItems: ['IST → Таксим', 'IST → Султанахмет', 'IST → Нишанташи', 'IST → Бешикташ', 'IST → Галатапорт', 'IST → отели Босфора', 'SAW → Таксим', 'SAW → Султанахмет', 'SAW → Кадыкёй', 'SAW → Ускюдар', 'SAW → Нишанташи', 'SAW → Istanbul Airport IST'],
    serviceItems: ['Встреча в аэропорту', 'Отслеживание рейса', 'Деловые встречи', 'Трансфер отель ресторан', 'Шопинг в Нишанташи', 'Ужин на Босфоре', 'Водитель на час', 'Свадьба или событие', 'VIP семья', 'Корпоративный roadshow', 'Трансфер в марину', 'Поездка в клинику'],
  },
  ar: {
    eyebrow: 'نقل خاص في إسطنبول',
    h1: 'نقل مطار إسطنبول IST و SAW، سائق خاص وحجز بالساعة.',
    intro: ['احجز خدمة نقل من مطار إسطنبول IST أو مطار صبيحة SAW إلى الفندق أو السكن أو المارينا أو المطعم أو موعد العمل.', 'الخدمة مناسبة للوصول والمغادرة والتنقل بين المطارات وخدمة النقل VIP وحجز سائق خاص بالساعة في إسطنبول.'],
    keywordSummary: 'فتح مجموعات البحث',
    keywordGroups: [
      ['نقل مطار إسطنبول', ['نقل مطار إسطنبول', 'حجز نقل من مطار إسطنبول', 'سيارة خاصة من مطار إسطنبول', 'استقبال مطار إسطنبول', 'نقل من المطار إلى الفندق إسطنبول', 'خدمة نقل VIP إسطنبول', 'سائق خاص مطار إسطنبول', 'نقل فاخر إسطنبول', 'نقل المطار إلى وسط إسطنبول']],
      ['مطار إسطنبول IST', ['نقل مطار Istanbul IST', 'نقل من IST إلى تقسيم', 'نقل من IST إلى السلطان أحمد', 'نقل من IST إلى نيشانتاشي', 'نقل من IST إلى بشكتاش', 'نقل من IST إلى غالاتابورت', 'نقل من IST إلى البوسفور']],
      ['مطار صبيحة SAW', ['نقل مطار صبيحة', 'نقل من SAW إلى تقسيم', 'نقل من SAW إلى السلطان أحمد', 'نقل من صبيحة إلى كاديكوي', 'نقل من صبيحة إلى أوسكودار', 'نقل من صبيحة إلى الجانب الأوروبي', 'نقل من صبيحة إلى الجانب الآسيوي']],
      ['سائق خاص إسطنبول', ['سائق خاص إسطنبول', 'سيارة مع سائق إسطنبول', 'سائق بالساعة إسطنبول', 'سائق VIP إسطنبول', 'خدمة ليموزين إسطنبول', 'سائق أعمال إسطنبول', 'مرسيدس مع سائق إسطنبول']],
    ],
    routesTitle: 'أشهر مسارات النقل من مطارات إسطنبول',
    routesIntro: 'تربط المسارات الأكثر طلباً مطار إسطنبول IST ومطار صبيحة SAW بمناطق الفنادق والأعمال وعناوين البوسفور والمارينا والمساكن الخاصة.',
    driverEyebrow: 'سائق خاص إسطنبول',
    driverH2: 'سائق خاص، سائق بالساعة وتنقل VIP في إسطنبول',
    routeSummary: 'فتح المسارات الشائعة',
    driverSummary: 'فتح استخدامات السائق الخاص',
    routeItems: ['IST → تقسيم', 'IST → السلطان أحمد', 'IST → نيشانتاشي', 'IST → بشكتاش', 'IST → غالاتابورت', 'IST → فنادق البوسفور', 'SAW → تقسيم', 'SAW → السلطان أحمد', 'SAW → كاديكوي', 'SAW → أوسكودار', 'SAW → نيشانتاشي', 'SAW → Istanbul Airport IST'],
    serviceItems: ['استقبال في المطار', 'تتبع الرحلة', 'اجتماعات عمل', 'نقل من الفندق إلى المطعم', 'تسوق في نيشانتاشي', 'عشاء على البوسفور', 'سائق بالساعة', 'زفاف أو مناسبة', 'عائلة VIP', 'جولة أعمال', 'نقل إلى المارينا', 'موعد عيادة'],
  },
  zh: {
    eyebrow: '伊斯坦布尔私人接送',
    h1: '伊斯坦布尔 IST 和 SAW 机场接送、私人司机和按小时预订。',
    intro: ['预订从 Istanbul Airport IST 或 Sabiha Gökçen SAW 到酒店、公寓、码头、餐厅或商务会面的私人机场接送。', '服务覆盖到达、离境、机场之间接送、VIP接送以及伊斯坦布尔按小时私人司机预订。'],
    keywordSummary: '打开搜索关键词组合',
    keywordGroups: [
      ['伊斯坦布尔机场接送', ['伊斯坦布尔机场接送', '伊斯坦布尔机场私人接送', '伊斯坦布尔机场到酒店', '伊斯坦布尔机场接机', '伊斯坦布尔VIP接送', '伊斯坦布尔机场专车', '伊斯坦布尔豪华机场接送']],
      ['Istanbul Airport IST', ['IST机场接送', 'Istanbul Airport IST transfer', 'IST到塔克西姆', 'IST到苏丹艾哈迈德', 'IST到尼尚塔石', 'IST到贝西克塔斯', 'IST到博斯普鲁斯', 'IST酒店接送']],
      ['Sabiha Gökçen SAW', ['SAW机场接送', '萨比哈机场接送', 'SAW到塔克西姆', 'SAW到苏丹艾哈迈德', 'SAW到卡德柯伊', 'SAW到于斯屈达尔', 'SAW到欧洲区', 'SAW到亚洲区']],
      ['伊斯坦布尔私人司机', ['伊斯坦布尔私人司机', '伊斯坦布尔包车司机', '伊斯坦布尔小时司机', '伊斯坦布尔VIP司机', '伊斯坦布尔奔驰接送', '伊斯坦布尔商务司机', '伊斯坦布尔豪华车服务']],
    ],
    routesTitle: '伊斯坦布尔机场接送热门路线',
    routesIntro: '常见路线连接 Istanbul Airport IST、Sabiha Gökçen SAW 与主要酒店区、商务区、博斯普鲁斯地址、码头和私人住宅。',
    driverEyebrow: '伊斯坦布尔私人司机',
    driverH2: '私人司机、按小时司机和伊斯坦布尔VIP出行',
    routeSummary: '打开热门路线',
    driverSummary: '打开私人司机使用场景',
    routeItems: baseRouteItems,
    serviceItems: ['机场迎接', '航班跟踪', '商务会议', '酒店到餐厅接送', 'Nişantaşı购物', '博斯普鲁斯晚餐接送', '按小时私人司机', '婚礼或活动', 'VIP家庭接送', '企业路演', '码头接送', '诊所预约接送'],
  },
  de: {
    eyebrow: 'Privater Transfer Istanbul',
    h1: 'Flughafentransfer Istanbul IST & SAW, privater Fahrer und Stundenbuchung.',
    intro: ['Buchen Sie einen Flughafentransfer Istanbul ab IST oder Sabiha Gökçen SAW zu Ihrem Hotel, Ihrer Residenz, Marina, Ihrem Restaurant oder Geschäftstermin.', 'Der Service umfasst Ankünfte, Abflüge, Transfers zwischen Flughäfen, VIP-Transfers und stundenweise private Fahrerbuchungen in Istanbul.'],
    keywordSummary: 'Suchkombinationen öffnen',
    keywordGroups: [
      ['Flughafentransfer Istanbul', ['Flughafentransfer Istanbul', 'privater Flughafentransfer Istanbul', 'Transfer Flughafen Istanbul Hotel', 'VIP Transfer Istanbul', 'Istanbul Flughafentransfer buchen', 'Privattransfer Istanbul', 'Luxus Flughafentransfer Istanbul']],
      ['Istanbul Airport IST', ['IST Flughafentransfer', 'Istanbul Airport IST Transfer', 'Istanbul Airport nach Taksim', 'Istanbul Airport nach Sultanahmet', 'Istanbul Airport nach Nişantaşı', 'Istanbul Airport nach Beşiktaş', 'Istanbul Airport zum Bosporus']],
      ['Sabiha Gökçen SAW', ['Sabiha Gökçen Transfer', 'SAW Flughafentransfer', 'Sabiha nach Taksim', 'Sabiha nach Sultanahmet', 'Sabiha nach Kadıköy', 'Sabiha europäische Seite', 'Sabiha asiatische Seite']],
      ['Privater Fahrer Istanbul', ['privater Fahrer Istanbul', 'Privatfahrer Istanbul', 'Fahrer stundenweise Istanbul', 'Auto mit Fahrer Istanbul', 'VIP Fahrer Istanbul', 'Fahrdienst Istanbul', 'Limousinenservice Istanbul', 'Mercedes mit Fahrer Istanbul']],
    ],
    routesTitle: 'Beliebte Flughafentransfer-Routen in Istanbul',
    routesIntro: 'Die meistgefragten Routen verbinden Istanbul Airport IST und Sabiha Gökçen SAW mit Hotelvierteln, Geschäftsbezirken, Bosporus-Adressen, Marinas und privaten Residenzen.',
    driverEyebrow: 'Privater Fahrer Istanbul',
    driverH2: 'Privater Fahrer, stundenweiser Fahrer und VIP-Mobilität in Istanbul',
    routeSummary: 'Beliebte Routen öffnen',
    driverSummary: 'Fahrdienst-Anwendungsfälle öffnen',
    routeItems: baseRouteItems,
    serviceItems: ['Empfang am Flughafen', 'Flugverfolgung', 'Geschäftstermine', 'Hotel-Restaurant-Transfer', 'Shopping in Nişantaşı', 'Dinner am Bosporus', 'Stundenweiser Fahrer', 'Hochzeit oder Event', 'VIP-Familientransfer', 'Corporate Roadshow', 'Marina-Transfer', 'Kliniktermin-Transfer'],
  },
  es: {
    eyebrow: 'Traslado privado Estambul',
    h1: 'Traslado aeropuerto Estambul IST & SAW, chófer privado y reserva por horas.',
    intro: ['Reserve un traslado del aeropuerto de Estambul desde IST o Sabiha Gökçen SAW hasta su hotel, residencia, marina, restaurante o cita de negocios.', 'El servicio cubre llegadas, salidas, traslados entre aeropuertos, traslados VIP y reservas de chófer privado por horas en Estambul.'],
    keywordSummary: 'Abrir combinaciones de búsqueda',
    keywordGroups: [
      ['Traslado aeropuerto Estambul', ['traslado aeropuerto Estambul', 'traslado privado aeropuerto Estambul', 'transfer aeropuerto Estambul', 'traslado aeropuerto hotel Estambul', 'recogida aeropuerto Estambul', 'traslado VIP Estambul', 'reservar traslado Estambul', 'traslado lujo Estambul']],
      ['Istanbul Airport IST', ['traslado Istanbul Airport IST', 'traslado aeropuerto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport a Nisantasi', 'Istanbul Airport a Besiktas', 'Istanbul Airport al Bósforo']],
      ['Sabiha Gökçen SAW', ['traslado Sabiha Gökçen', 'traslado aeropuerto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha a Kadıköy', 'Sabiha lado europeo', 'Sabiha lado asiático']],
      ['Chófer privado Estambul', ['chófer privado Estambul', 'conductor privado Estambul', 'coche con conductor Estambul', 'chofer por horas Estambul', 'chofer VIP Estambul', 'servicio limusina Estambul', 'Mercedes con chófer Estambul']],
    ],
    routesTitle: 'Rutas populares de traslado del aeropuerto en Estambul',
    routesIntro: 'Las rutas más solicitadas conectan Istanbul Airport IST y Sabiha Gökçen SAW con zonas hoteleras, áreas de negocios, direcciones del Bósforo, marinas y residencias privadas.',
    driverEyebrow: 'Chófer privado Estambul',
    driverH2: 'Conductor privado, chófer por horas y movilidad VIP en Estambul',
    routeSummary: 'Abrir rutas populares',
    driverSummary: 'Abrir usos del chófer privado',
    routeItems: baseRouteItems,
    serviceItems: ['Recepción en aeropuerto', 'Seguimiento de vuelo', 'Reuniones de negocios', 'Traslado hotel restaurante', 'Compras en Nişantaşı', 'Cena en el Bósforo', 'Chófer por horas', 'Boda o evento', 'Familia VIP', 'Roadshow corporativo', 'Traslado marina', 'Cita clínica'],
  },
  it: {
    eyebrow: 'Transfer privato Istanbul',
    h1: 'Transfer aeroporto Istanbul IST & SAW, autista privato e prenotazione a ore.',
    intro: ['Prenota un transfer dall’aeroporto di Istanbul da IST o Sabiha Gökçen SAW verso hotel, residenza, marina, ristorante o appuntamento di lavoro.', 'Il servizio copre arrivi, partenze, transfer tra aeroporti, transfer VIP e prenotazioni con autista privato a ore a Istanbul.'],
    keywordSummary: 'Apri combinazioni di ricerca',
    keywordGroups: [
      ['Transfer aeroporto Istanbul', ['transfer aeroporto Istanbul', 'transfer privato aeroporto Istanbul', 'trasferimento aeroporto Istanbul hotel', 'pickup aeroporto Istanbul', 'transfer VIP Istanbul', 'prenotare transfer Istanbul', 'navetta privata Istanbul', 'transfer lusso Istanbul']],
      ['Istanbul Airport IST', ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport a Taksim', 'Istanbul Airport a Sultanahmet', 'Istanbul Airport a Nişantaşı', 'Istanbul Airport a Beşiktaş', 'Istanbul Airport Bosforo']],
      ['Sabiha Gökçen SAW', ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha a Taksim', 'Sabiha a Sultanahmet', 'Sabiha a Kadıköy', 'Sabiha lato europeo', 'Sabiha lato asiatico']],
      ['Autista privato Istanbul', ['autista privato Istanbul', 'auto con autista Istanbul', 'autista a ore Istanbul', 'autista VIP Istanbul', 'servizio limousine Istanbul', 'Mercedes con autista Istanbul']],
    ],
    routesTitle: 'Percorsi popolari per i transfer aeroportuali a Istanbul',
    routesIntro: 'I percorsi più richiesti collegano Istanbul Airport IST e Sabiha Gökçen SAW con zone hotel, aree business, indirizzi sul Bosforo, marine e residenze private.',
    driverEyebrow: 'Autista privato Istanbul',
    driverH2: 'Autista privato, autista a ore e mobilità VIP a Istanbul',
    routeSummary: 'Apri percorsi popolari',
    driverSummary: 'Apri utilizzi autista privato',
    routeItems: baseRouteItems,
    serviceItems: ['Accoglienza in aeroporto', 'Monitoraggio volo', 'Riunioni di lavoro', 'Transfer hotel ristorante', 'Shopping a Nişantaşı', 'Cena sul Bosforo', 'Autista a ore', 'Matrimonio o evento', 'Famiglia VIP', 'Roadshow aziendale', 'Transfer marina', 'Appuntamento clinica'],
  },
  pt: {
    eyebrow: 'Transfer privado Istambul',
    h1: 'Transfer aeroporto Istambul IST & SAW, motorista privado e reserva por hora.',
    intro: ['Reserve um transfer do aeroporto de Istambul desde IST ou Sabiha Gökçen SAW para hotel, residência, marina, restaurante ou compromisso de negócios.', 'O serviço cobre chegadas, partidas, transfers entre aeroportos, transfers VIP e reservas de motorista privado por hora em Istambul.'],
    keywordSummary: 'Abrir combinações de pesquisa',
    keywordGroups: [
      ['Transfer aeroporto Istambul', ['transfer aeroporto Istambul', 'transfer privado aeroporto Istambul', 'translado aeroporto Istambul', 'transfer aeroporto hotel Istambul', 'receção aeroporto Istambul', 'transfer VIP Istambul', 'reservar transfer Istambul', 'transfer luxo Istambul']],
      ['Istanbul Airport IST', ['transfer Istanbul Airport IST', 'transfer aeroporto IST', 'Istanbul Airport para Taksim', 'Istanbul Airport para Sultanahmet', 'Istanbul Airport para Nisantasi', 'Istanbul Airport para Besiktas', 'Istanbul Airport para Bósforo']],
      ['Sabiha Gökçen SAW', ['transfer Sabiha Gökçen', 'transfer aeroporto SAW', 'Sabiha para Taksim', 'Sabiha para Sultanahmet', 'Sabiha para Kadıköy', 'Sabiha lado europeu', 'Sabiha lado asiático']],
      ['Motorista privado Istambul', ['motorista privado Istambul', 'carro com motorista Istambul', 'motorista por hora Istambul', 'motorista VIP Istambul', 'serviço limousine Istambul', 'Mercedes com motorista Istambul']],
    ],
    routesTitle: 'Rotas populares de transfer do aeroporto em Istambul',
    routesIntro: 'As rotas mais solicitadas ligam Istanbul Airport IST e Sabiha Gökçen SAW a zonas hoteleiras, áreas de negócios, moradas no Bósforo, marinas e residências privadas.',
    driverEyebrow: 'Motorista privado Istambul',
    driverH2: 'Motorista privado, motorista por hora e mobilidade VIP em Istambul',
    routeSummary: 'Abrir rotas populares',
    driverSummary: 'Abrir usos do motorista privado',
    routeItems: baseRouteItems,
    serviceItems: ['Receção no aeroporto', 'Monitorização do voo', 'Reuniões de negócios', 'Transfer hotel restaurante', 'Compras em Nişantaşı', 'Jantar no Bósforo', 'Motorista por hora', 'Casamento ou evento', 'Família VIP', 'Roadshow corporativo', 'Transfer marina', 'Consulta clínica'],
  },
};

export function TransferSeoContent({ locale }: { locale: TransferLocale }) {
  const content = copy[locale];
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <section id="airports" dir={direction} className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.eyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.h1}</h2>
          <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
            {content.intro.map((item) => <p key={item}>{item}</p>)}
          </div>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {content.keywordGroups.map(([title, terms]) => (
              <details key={title} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-[-0.01em] text-slate-900 transition hover:text-slate-600">
                  <span>{title}</span>
                  <span className="text-xl font-light text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-normal leading-7 text-slate-500">
                  {terms.map((term) => <span key={term}>{term}</span>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section dir={direction} className="bg-[#f8fafc] px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.routesTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{content.routesIntro}</p>
          </div>
          <details className="border-y border-slate-200 py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-slate-900">{content.routeSummary}</summary>
            <div className="mt-4 grid gap-x-5 gap-y-2 text-sm font-normal leading-7 text-slate-500 sm:grid-cols-2">{content.routeItems.map((route) => <span key={route}>{route}</span>)}</div>
          </details>
        </div>
      </section>

      <section id="vehicles" dir={direction} className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.driverEyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.driverH2}</h2>
          <details className="mt-6 border-y border-slate-200 py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-slate-900">{content.driverSummary}</summary>
            <div className="mt-4 grid gap-x-5 gap-y-2 text-sm font-normal leading-7 text-slate-500 md:grid-cols-3">{content.serviceItems.map((item) => <span key={item}>{item}</span>)}</div>
          </details>
        </div>
      </section>
    </>
  );
}
