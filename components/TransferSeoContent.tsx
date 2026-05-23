'use client';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

type SeoCopy = {
  eyebrow: string;
  h1: string;
  intro: string[];
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
