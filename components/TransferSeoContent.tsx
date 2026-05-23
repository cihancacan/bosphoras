'use client';

import type { Locale } from '@/lib/i18n';

type SeoGroup = [string, string[]];

const pageContent: Record<Locale, {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  routeEyebrow: string;
  routeTitle: string;
  routeText: string;
  routeSummary: string;
  chauffeurEyebrow: string;
  chauffeurTitle: string;
  chauffeurSummary: string;
  clusters: SeoGroup[];
  routes: string[];
  useCases: string[];
}> = {
  fr: {
    eyebrow: 'Transfert privé Istanbul',
    title: 'Transfert aéroport Istanbul IST & SAW, chauffeur privé et réservation à l’heure.',
    paragraphs: [
      'Réservez un transfert aéroport Istanbul depuis IST ou Sabiha Gökçen SAW vers votre hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.',
      'Le service couvre les arrivées, les départs, les trajets inter-aéroports, les transferts VIP et les réservations de chauffeur privé à l’heure à Istanbul.',
      'Avec le numéro de vol, l’accueil à l’aéroport et le suivi de vol permettent une prise en charge plus fluide, même en cas de retard.',
      'Les véhicules disponibles incluent Mercedes Classe E, Mercedes Classe S, Viano VIP et Sprinter VIP selon le nombre de passagers et de bagages.',
    ],
    routeEyebrow: 'Trajets fréquents',
    routeTitle: 'Routes populaires pour les transferts aéroport à Istanbul',
    routeText: 'Les trajets les plus demandés relient Istanbul Airport IST et Sabiha Gökçen SAW aux quartiers hôteliers, zones d’affaires, adresses du Bosphore, marinas et résidences privées.',
    routeSummary: 'Ouvrir les trajets populaires',
    chauffeurEyebrow: 'Chauffeur privé Istanbul',
    chauffeurTitle: 'Chauffeur privé, chauffeur à l’heure et mobilité VIP à Istanbul',
    chauffeurSummary: 'Ouvrir les usages chauffeur privé',
    clusters: [
      ['Transfert aéroport Istanbul', ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'transfert privé aéroport Istanbul', 'navette privée Istanbul', 'taxi privé aéroport Istanbul', 'chauffeur aéroport Istanbul', 'réserver transfert Istanbul', 'transfert aéroport Istanbul hôtel', 'transfert aéroport Istanbul centre ville', 'transfert VIP Istanbul aéroport', 'transfert luxe Istanbul', 'prise en charge aéroport Istanbul']],
      ['Istanbul Airport IST', ['transfert Istanbul Airport IST', 'transfert aéroport IST', 'chauffeur privé Istanbul Airport', 'Istanbul Airport vers Taksim', 'Istanbul Airport vers Sultanahmet', 'Istanbul Airport vers Nişantaşı', 'Istanbul Airport vers Beşiktaş', 'Istanbul Airport vers Galataport', 'Istanbul Airport vers Bosphore', 'Istanbul Airport vers hôtel']],
      ['Sabiha Gökçen SAW', ['transfert Sabiha Gökçen', 'transfert aéroport SAW', 'chauffeur privé Sabiha Gökçen', 'Sabiha vers Taksim', 'Sabiha vers Sultanahmet', 'Sabiha vers Kadıköy', 'Sabiha vers Üsküdar', 'Sabiha vers rive européenne', 'Sabiha vers rive asiatique', 'Sabiha vers Istanbul Airport']],
      ['Chauffeur privé Istanbul', ['chauffeur privé Istanbul', 'chauffeur à l’heure Istanbul', 'voiture avec chauffeur Istanbul', 'chauffeur VIP Istanbul', 'chauffeur business Istanbul', 'chauffeur pour shopping Istanbul', 'chauffeur privé hôtel Istanbul', 'chauffeur privé Bosphore', 'Mercedes avec chauffeur Istanbul', 'limousine Istanbul']],
    ],
    routes: ['IST → Taksim', 'IST → Sultanahmet', 'IST → Nişantaşı', 'IST → Beşiktaş', 'IST → Galataport', 'IST → Bebek', 'IST → Levent / Maslak', 'IST → hôtels du Bosphore', 'SAW → Taksim', 'SAW → Sultanahmet', 'SAW → Kadıköy', 'SAW → Üsküdar', 'SAW → Nişantaşı', 'SAW → Beşiktaş', 'SAW → Bosphore', 'SAW → Istanbul Airport IST'],
    useCases: ['Accueil aéroport', 'Suivi de vol', 'Rendez-vous d’affaires', 'Transfert hôtel restaurant', 'Shopping à Nişantaşı', 'Dîner sur le Bosphore', 'Chauffeur à l’heure', 'Mariage ou événement', 'Famille VIP', 'Roadshow corporate', 'Transfert marina', 'Rendez-vous clinique'],
  },
  en: {
    eyebrow: 'Istanbul private transfer',
    title: 'Istanbul Airport IST & SAW transfer, private chauffeur and hourly booking.',
    paragraphs: [
      'Book an Istanbul airport transfer from IST or Sabiha Gökçen SAW to your hotel, residence, marina, restaurant or business appointment.',
      'The service covers arrivals, departures, airport-to-airport transfers, VIP transfers and hourly private chauffeur bookings in Istanbul.',
      'When a flight number is provided, airport meet and greet and flight tracking help make the pickup smoother, even in case of delay.',
      'Available vehicles include Mercedes E-Class, Mercedes S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.',
    ],
    routeEyebrow: 'Popular routes',
    routeTitle: 'Popular Istanbul airport transfer routes',
    routeText: 'The most requested routes connect Istanbul Airport IST and Sabiha Gökçen SAW with hotel districts, business areas, Bosphorus addresses, marinas and private residences.',
    routeSummary: 'Open popular routes',
    chauffeurEyebrow: 'Private chauffeur Istanbul',
    chauffeurTitle: 'Private driver, hourly chauffeur and VIP mobility in Istanbul',
    chauffeurSummary: 'Open chauffeur use cases',
    clusters: [
      ['Istanbul airport transfer', ['Istanbul airport transfer', 'airport transfer Istanbul', 'private airport transfer Istanbul', 'Istanbul airport pickup', 'Istanbul hotel transfer', 'book Istanbul airport transfer', 'VIP airport transfer Istanbul', 'Istanbul airport car service', 'Istanbul airport to hotel transfer', 'Istanbul airport to city center', 'luxury airport transfer Istanbul', 'airport meet and greet Istanbul']],
      ['Istanbul Airport IST', ['IST airport transfer', 'Istanbul Airport IST transfer', 'Istanbul Airport private driver', 'Istanbul Airport to Taksim', 'Istanbul Airport to Sultanahmet', 'Istanbul Airport to Nisantasi', 'Istanbul Airport to Besiktas', 'Istanbul Airport to Galataport', 'Istanbul Airport to Bosphorus', 'Istanbul Airport hotel transfer']],
      ['Sabiha Gokcen SAW', ['SAW airport transfer', 'Sabiha Gokcen airport transfer', 'Sabiha Gokcen private transfer', 'Sabiha to Taksim', 'Sabiha to Sultanahmet', 'Sabiha to Kadikoy', 'Sabiha to Uskudar', 'Sabiha to European side', 'Sabiha to Asian side', 'Sabiha to Istanbul Airport']],
      ['Private chauffeur Istanbul', ['private chauffeur Istanbul', 'private driver Istanbul', 'hourly chauffeur Istanbul', 'Istanbul car with driver', 'VIP chauffeur Istanbul', 'executive chauffeur Istanbul', 'business chauffeur Istanbul', 'limousine service Istanbul', 'Mercedes chauffeur Istanbul', 'luxury car service Istanbul']],
    ],
    routes: ['IST → Taksim', 'IST → Sultanahmet', 'IST → Nisantasi', 'IST → Besiktas', 'IST → Galataport', 'IST → Bebek', 'IST → Levent / Maslak', 'IST → Bosphorus hotels', 'SAW → Taksim', 'SAW → Sultanahmet', 'SAW → Kadikoy', 'SAW → Uskudar', 'SAW → Nisantasi', 'SAW → Besiktas', 'SAW → Bosphorus', 'SAW → Istanbul Airport IST'],
    useCases: ['Airport meet and greet', 'Flight tracking', 'Business meetings', 'Hotel to restaurant transfer', 'Shopping in Nisantasi', 'Bosphorus dinner transfer', 'Hourly private chauffeur', 'Wedding or event', 'VIP family transfer', 'Corporate roadshow', 'Marina transfer', 'Clinic appointment transfer'],
  },
  ru: {
    eyebrow: 'Частный трансфер Стамбул',
    title: 'Трансфер аэропорт Стамбул IST и SAW, личный водитель и почасовая аренда.',
    paragraphs: [
      'Забронируйте трансфер из аэропорта Стамбула IST или Sabiha Gökçen SAW до отеля, резиденции, марины, ресторана или деловой встречи.',
      'Сервис подходит для прилёта, вылета, поездок между аэропортами, VIP-трансфера и почасовой аренды личного водителя в Стамбуле.',
      'Если указан номер рейса, встреча в аэропорту и отслеживание рейса помогают организовать более спокойную посадку даже при задержке.',
      'Доступны Mercedes E-Class, Mercedes S-Class, Viano VIP и Sprinter VIP в зависимости от количества пассажиров и багажа.',
    ],
    routeEyebrow: 'Популярные маршруты',
    routeTitle: 'Популярные маршруты трансфера из аэропортов Стамбула',
    routeText: 'Самые частые маршруты соединяют Istanbul Airport IST и Sabiha Gökçen SAW с отелями, деловыми районами, адресами у Босфора, маринами и частными резиденциями.',
    routeSummary: 'Открыть популярные маршруты',
    chauffeurEyebrow: 'Личный водитель Стамбул',
    chauffeurTitle: 'Личный водитель, водитель на час и VIP-передвижение в Стамбуле',
    chauffeurSummary: 'Открыть варианты использования',
    clusters: [
      ['Трансфер аэропорт Стамбул', ['трансфер аэропорт Стамбул', 'трансфер из аэропорта Стамбула', 'частный трансфер Стамбул', 'встреча в аэропорту Стамбул', 'трансфер отель Стамбул', 'VIP трансфер Стамбул', 'заказать трансфер Стамбул', 'трансфер с водителем Стамбул', 'трансфер аэропорт отель Стамбул', 'люксовый трансфер Стамбул']],
      ['Аэропорт Istanbul IST', ['трансфер Istanbul Airport IST', 'трансфер аэропорт IST', 'водитель Istanbul Airport', 'Istanbul Airport Таксим', 'Istanbul Airport Султанахмет', 'Istanbul Airport Нишанташи', 'Istanbul Airport Бешикташ', 'Istanbul Airport Галатапорт', 'Istanbul Airport Босфор']],
      ['Sabiha Gökçen SAW', ['трансфер Sabiha Gökçen', 'трансфер аэропорт SAW', 'Sabiha Gokcen трансфер', 'Сабиха Таксим', 'Сабиха Султанахмет', 'Сабиха Кадыкёй', 'Сабиха Ускюдар', 'Сабиха европейская сторона', 'Сабиха азиатская сторона']],
      ['Личный водитель Стамбул', ['личный водитель Стамбул', 'частный водитель Стамбул', 'водитель на час Стамбул', 'авто с водителем Стамбул', 'VIP водитель Стамбул', 'бизнес водитель Стамбул', 'Mercedes с водителем Стамбул', 'лимузин сервис Стамбул']],
    ],
    routes: ['IST → Таксим', 'IST → Султанахмет', 'IST → Нишанташи', 'IST → Бешикташ', 'IST → Галатапорт', 'IST → Бебек', 'IST → Левент / Маслак', 'IST → отели Босфора', 'SAW → Таксим', 'SAW → Султанахмет', 'SAW → Кадыкёй', 'SAW → Ускюдар', 'SAW → Нишанташи', 'SAW → Бешикташ', 'SAW → Босфор', 'SAW → Istanbul Airport IST'],
    useCases: ['Встреча в аэропорту', 'Отслеживание рейса', 'Деловые встречи', 'Трансфер отель ресторан', 'Шопинг в Нишанташи', 'Ужин на Босфоре', 'Водитель на час', 'Свадьба или событие', 'VIP семья', 'Корпоративный roadshow', 'Трансфер в марину', 'Поездка в клинику'],
  },
  ar: {
    eyebrow: 'نقل خاص في إسطنبول',
    title: 'نقل مطار إسطنبول IST و SAW، سائق خاص وحجز بالساعة.',
    paragraphs: [
      'احجز خدمة نقل من مطار إسطنبول IST أو مطار صبيحة SAW إلى الفندق أو السكن أو المارينا أو المطعم أو موعد العمل.',
      'الخدمة مناسبة للوصول والمغادرة والتنقل بين المطارات وخدمة النقل VIP وحجز سائق خاص بالساعة في إسطنبول.',
      'عند إدخال رقم الرحلة، يساعد تتبع الرحلة والاستقبال في المطار على تنظيم الوصول بشكل أكثر سلاسة حتى في حال التأخير.',
      'تشمل السيارات المتاحة Mercedes E-Class و Mercedes S-Class و Viano VIP و Sprinter VIP حسب عدد الركاب والحقائب.',
    ],
    routeEyebrow: 'المسارات الشائعة',
    routeTitle: 'أشهر مسارات النقل من مطارات إسطنبول',
    routeText: 'تربط المسارات الأكثر طلباً مطار إسطنبول IST ومطار صبيحة SAW بمناطق الفنادق والأعمال وعناوين البوسفور والمارينا والمساكن الخاصة.',
    routeSummary: 'فتح المسارات الشائعة',
    chauffeurEyebrow: 'سائق خاص إسطنبول',
    chauffeurTitle: 'سائق خاص، سائق بالساعة وتنقل VIP في إسطنبول',
    chauffeurSummary: 'فتح استخدامات السائق الخاص',
    clusters: [
      ['نقل مطار إسطنبول', ['نقل مطار إسطنبول', 'حجز نقل من مطار إسطنبول', 'سيارة خاصة من مطار إسطنبول', 'استقبال مطار إسطنبول', 'نقل من المطار إلى الفندق إسطنبول', 'خدمة نقل VIP إسطنبول', 'سائق خاص مطار إسطنبول', 'نقل فاخر إسطنبول', 'نقل المطار إلى وسط إسطنبول']],
      ['مطار إسطنبول IST', ['نقل مطار Istanbul IST', 'نقل من IST إلى تقسيم', 'نقل من IST إلى السلطان أحمد', 'نقل من IST إلى نيشانتاشي', 'نقل من IST إلى بشكتاش', 'نقل من IST إلى غالاتابورت', 'نقل من IST إلى البوسفور']],
      ['مطار صبيحة SAW', ['نقل مطار صبيحة', 'نقل من SAW إلى تقسيم', 'نقل من SAW إلى السلطان أحمد', 'نقل من صبيحة إلى كاديكوي', 'نقل من صبيحة إلى أوسكودار', 'نقل من صبيحة إلى الجانب الأوروبي', 'نقل من صبيحة إلى الجانب الآسيوي']],
      ['سائق خاص إسطنبول', ['سائق خاص إسطنبول', 'سيارة مع سائق إسطنبول', 'سائق بالساعة إسطنبول', 'سائق VIP إسطنبول', 'خدمة ليموزين إسطنبول', 'سائق أعمال إسطنبول', 'مرسيدس مع سائق إسطنبول']],
    ],
    routes: ['IST → تقسيم', 'IST → السلطان أحمد', 'IST → نيشانتاشي', 'IST → بشكتاش', 'IST → غالاتابورت', 'IST → بيبك', 'IST → ليفنت / مسلك', 'IST → فنادق البوسفور', 'SAW → تقسيم', 'SAW → السلطان أحمد', 'SAW → كاديكوي', 'SAW → أوسكودار', 'SAW → نيشانتاشي', 'SAW → بشكتاش', 'SAW → البوسفور', 'SAW → Istanbul Airport IST'],
    useCases: ['استقبال في المطار', 'تتبع الرحلة', 'اجتماعات عمل', 'نقل من الفندق إلى المطعم', 'تسوق في نيشانتاشي', 'عشاء على البوسفور', 'سائق بالساعة', 'زفاف أو مناسبة', 'عائلة VIP', 'جولة أعمال', 'نقل إلى المارينا', 'موعد عيادة'],
  },
};

export function TransferSeoContent({ locale }: { locale: Locale }) {
  const content = pageContent[locale];
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <section id="airports" dir={direction} className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.eyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.title}</h2>
          <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
            {content.paragraphs.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section id="vehicles" dir={direction} className="bg-white px-5 pb-10 md:px-8 md:pb-14">
        <div className="mx-auto max-w-[1180px] divide-y divide-slate-200 border-y border-slate-200">
          {content.clusters.map(([title, terms]) => (
            <details key={title} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-[-0.01em] text-slate-900 transition hover:text-slate-600 md:text-lg">
                <span>{title}</span>
                <span className="text-xl font-light text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-normal leading-7 text-slate-500">
                {terms.map((term) => <span key={term}>{term}</span>)}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section dir={direction} className="bg-[#f8fafc] px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.routeEyebrow}</p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.routeTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{content.routeText}</p>
          </div>
          <details className="border-y border-slate-200 py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-slate-900">{content.routeSummary}</summary>
            <div className="mt-4 grid gap-x-5 gap-y-2 text-sm font-normal leading-7 text-slate-500 sm:grid-cols-2">
              {content.routes.map((route) => <span key={route}>{route}</span>)}
            </div>
          </details>
        </div>
      </section>

      <section dir={direction} className="bg-white px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{content.chauffeurEyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-2xl font-medium tracking-[-0.03em] text-slate-950 md:text-4xl">{content.chauffeurTitle}</h2>
          <details className="mt-6 border-y border-slate-200 py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-slate-900">{content.chauffeurSummary}</summary>
            <div className="mt-4 grid gap-x-5 gap-y-2 text-sm font-normal leading-7 text-slate-500 md:grid-cols-3">
              {content.useCases.map((useCase) => <span key={useCase}>{useCase}</span>)}
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
