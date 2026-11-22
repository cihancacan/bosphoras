'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Building2, CarFront, CarTaxiFront, ChevronDown, Compass, Home, Plane, PlaneTakeoff, Ship, Ticket } from 'lucide-react';
import { trackConversion } from '@/lib/conversionAnalytics';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';
import { getNuiteeWhiteLabelSearchHref, getNuiteeExperiencesHref } from '@/lib/travel/nuiteeWhiteLabel';
import { withAssessmentContext } from '@/lib/assessmentContext';
import { getApprovedPartnerUrl, getPrivateTravelPartnerName, type PrivateTravelPartnerService } from '@/lib/travel/privateTravelSupplierGateways';

type Service = 'flights' | 'hotels' | 'villas' | 'chalets' | 'cars' | 'transfers' | 'jets' | 'helicopters' | 'yachts' | 'activities';
const mainServices: { id: Service; icon: typeof Home }[] = [
 {id:'flights',icon:PlaneTakeoff},{id:'hotels',icon:Building2},{id:'villas',icon:Home},
 {id:'cars',icon:CarFront},{id:'transfers',icon:CarTaxiFront},{id:'activities',icon:Ticket}
];
const privateServices: { id: Service; icon: typeof Home }[] = [
 {id:'jets',icon:Plane},{id:'helicopters',icon:Compass},{id:'yachts',icon:Ship}
];
const translations: Record<Locale, {
  eyebrow: string; title: string; description: string; panelTitle: string; panelIntro: string;
  destination: string; origin: string; departure: string; returnDate: string; guests: string;
  destinationHint: string; originHint: string; cta: string; hotelCta: string; empty: string;
  available: string; services: Record<Service,{label:string,description:string}>;
  footnote: string; inspirations: string; inspireTitle: string; villa: string; chalet: string;
  privacy: string; explore: string;
  flightDestination: string; activityDestination: string; activityDate: string; passengers: string;
  tripType: string; roundTrip: string; oneWay: string; cabin: string; cabinOptions: Record<'economy'|'premium'|'business'|'first', string>;
  flightsNote: string; activitiesNote: string; activitySearch: string;
}> = {
  fr: {
    eyebrow: 'BOSPHORAS · PRIVATE TRAVEL',
    title: 'Des adresses qui valent le voyage. Et une autre façon d’y arriver.',
    description: 'Hôtels remarquables, villas confidentielles, chalets alpins et voyages privés. Une sélection internationale, pensée autour de votre séjour.',
    panelTitle: 'Préparez votre prochain voyage', panelIntro: 'Choisissez un service pour afficher la recherche adaptée.',
    destination: 'Destination ou port', origin: 'Ville de départ', departure: 'Date de départ',
    returnDate: 'Date de retour', guests: 'Voyageurs', destinationHint: 'Ex. Bodrum, Courchevel, Saint-Tropez',
    originHint: 'Ex. Paris, Genève, Istanbul', cta: 'Présenter ma demande', hotelCta: 'Rechercher un hôtel',
    empty: 'Les offres et disponibilités seront affichées après validation des accès partenaires.',
    available: 'Recherche partenaire', footnote: 'Les tarifs, disponibilités et réservations sont confirmés par les opérateurs concernés. Aucun service n’est vendu directement sur cette page.',
    inspirations: 'À découvrir', inspireTitle: 'Des séjours, des voyages, une seule inspiration.',
    villa: 'Villas en bord de mer', chalet: 'Chalets à la montagne', privacy: 'Un service discret. Sans catalogue interminable.', explore: 'Découvrir les destinations',
    flightDestination: 'Aéroport d’arrivée', activityDestination: 'Ville ou destination', activityDate: 'Date de l’activité', passengers: 'Passagers',
    tripType: 'Type de trajet', roundTrip: 'Aller-retour', oneWay: 'Aller simple', cabin: 'Classe',
    cabinOptions: {economy:'Économique', premium:'Premium Éco', business:'Affaires', first:'Première'},
    flightsNote: 'Vols commerciaux : l’activation a déjà été demandée à Nuitée. Les tarifs en direct seront disponibles après confirmation.',
    activitiesNote: 'Activités via Nuitée Connect Experiences. L’accès à la réservation doit être activé pour le compte Bosphoras et sa marque blanche.',
    activitySearch: 'Rechercher des activités',
    services: {
      flights:{label:'Vols',description:'Billets d’avion et itinéraires internationaux'},
      hotels:{label:'Hôtels',description:'Hôtels et resorts sélectionnés'},
      villas:{label:'Villas',description:'Piscine privée et séjours d’exception'},
      chalets:{label:'Chalets',description:'Refuges alpins et grands domaines'},
      cars:{label:'Voitures',description:'Location de voiture'},transfers:{label:'Transferts',description:'Chauffeur privé'},
      jets:{label:'Jets privés',description:'Charters et vols sur mesure'},
      helicopters:{label:'Hélicoptères',description:'Transferts privés et survols'},
      yachts:{label:'Yachts',description:'Charters et croisières privées'},
      activities:{label:'Activités',description:'Expériences et excursions via Nuitée'}
    }
  },
  en: {
    eyebrow:'BOSPHORAS · PRIVATE TRAVEL', title:'Places worth the journey. A remarkable way to arrive.',
    description:'Exceptional hotels, private villas, alpine chalets and tailored journeys. An international selection built around your stay.',
    panelTitle:'Plan your next journey',panelIntro:'Select a service to see the appropriate search.',
    destination:'Destination or marina',origin:'Departure city',departure:'Departure date',returnDate:'Return date',guests:'Guests',
    destinationHint:'E.g. Bodrum, Courchevel, Saint-Tropez',originHint:'E.g. Paris, Geneva, Istanbul',
    cta:'Send my enquiry',hotelCta:'Search hotels',empty:'Listings and live availability will appear after supplier approval.',
    available:'Partner search',footnote:'Prices, availability and bookings are confirmed by the relevant operators. Nothing is sold directly on this page.',
    inspirations:'Discover',inspireTitle:'Places to stay, ways to travel, one point of inspiration.',
    villa:'Villas by the sea',chalet:'Alpine chalets',privacy:'Discreet service. No endless catalogues.',explore:'Explore destinations',
    flightDestination:'Arrival airport', activityDestination:'City or destination', activityDate:'Activity date', passengers:'Passengers',
    tripType:'Journey type', roundTrip:'Return', oneWay:'One way', cabin:'Cabin',
    cabinOptions:{economy:'Economy',premium:'Premium economy',business:'Business',first:'First'},
    flightsNote:'Commercial flights: activation has already been requested from Nuitée. Live pricing awaits confirmation.',
    activitiesNote:'Activities via Nuitee Connect Experiences. Booking requires activation for the Bosphoras account and its white-label storefront.',
    activitySearch:'Browse activities',
    services:{flights:{label:'Flights',description:'Airline tickets and international routes'},hotels:{label:'Hotels',description:'Curated hotels and resorts'},villas:{label:'Villas',description:'Private pools and exceptional homes'},chalets:{label:'Chalets',description:'Alpine escapes and mountain estates'},cars:{label:'Car rental',description:'Rent a car'},transfers:{label:'Transfers',description:'Private chauffeur'},jets:{label:'Private jets',description:'Charters and tailored flights'},helicopters:{label:'Helicopters',description:'Private transfers and scenic flights'},yachts:{label:'Yachts',description:'Private charters and cruises'},activities:{label:'Activities',description:'Tours and experiences via Nuitee'}}
  },
  ru: {
    eyebrow:'BOSPHORAS · PRIVATE TRAVEL',title:'Места, ради которых стоит отправиться в путь.',
    description:'Избранные отели, частные виллы, альпийские шале и путешествия по индивидуальному маршруту.',
    panelTitle:'Спланируйте поездку',panelIntro:'Выберите услугу, чтобы открыть подходящую форму.',
    destination:'Направление или порт',origin:'Город вылета',departure:'Дата отправления',returnDate:'Дата возвращения',guests:'Гости',
    destinationHint:'Бодрум, Куршевель, Сен-Тропе',originHint:'Париж, Женева, Стамбул',
    cta:'Отправить запрос',hotelCta:'Найти отель',empty:'Предложения и наличие будут доступны после подключения партнёров.',
    available:'Поиск у партнёра',footnote:'Цены и наличие подтверждает поставщик услуги. На этой странице бронирование не осуществляется.',
    inspirations:'Откройте для себя',inspireTitle:'Особенные места и маршруты.',
    villa:'Виллы у моря',chalet:'Альпийские шале',privacy:'Персональный сервис. Только достойные варианты.',explore:'Смотреть направления',
    flightDestination:'Аэропорт прибытия', activityDestination:'Город или направление', activityDate:'Дата мероприятия', passengers:'Пассажиры',
    tripType:'Тип перелёта', roundTrip:'Туда и обратно', oneWay:'В одну сторону', cabin:'Класс обслуживания',
    cabinOptions:{economy:'Эконом',premium:'Премиум-эконом',business:'Бизнес',first:'Первый класс'},
    flightsNote:'Подключение авиабилетов уже запрошено у Nuitée. Актуальные цены станут доступны после подтверждения.',
    activitiesNote:'Экскурсии и мероприятия через Nuitée Connect Experiences. Для бронирования необходимо активировать продукт на аккаунте и витрине Bosphoras.',
    activitySearch:'Найти экскурсии',
    services:{flights:{label:'Авиабилеты',description:'Регулярные международные рейсы'},hotels:{label:'Отели',description:'Избранные отели и курорты'},villas:{label:'Виллы',description:'Частные дома и бассейны'},chalets:{label:'Шале',description:'Отдых в Альпах'},cars:{label:'Аренда авто',description:'Прокат автомобиля'},transfers:{label:'Трансферы',description:'Водитель и трансфер'},jets:{label:'Частные самолёты',description:'Перелёты по запросу'},helicopters:{label:'Вертолёты',description:'Трансферы и экскурсии'},yachts:{label:'Яхты',description:'Частные круизы'},activities:{label:'Впечатления',description:'Экскурсии и мероприятия через Nuitée'}}
  },
  ar: {
    eyebrow:'BOSPHORAS · PRIVATE TRAVEL',title:'أماكن تستحق الرحلة. وطريقة استثنائية للوصول.',
    description:'فنادق مختارة، فلل خاصة، شاليهات جبلية ورحلات مصممة حسب رغبتك حول العالم.',
    panelTitle:'خطط لرحلتك المقبلة',panelIntro:'اختر الخدمة لعرض نموذج البحث المناسب.',
    destination:'الوجهة أو المرسى',origin:'مدينة المغادرة',departure:'تاريخ المغادرة',returnDate:'تاريخ العودة',guests:'عدد الضيوف',
    destinationHint:'بودروم، كورشوفيل، سان تروبيه',originHint:'باريس، جنيف، إسطنبول',
    cta:'إرسال طلب',hotelCta:'البحث عن فندق',empty:'ستظهر العروض والتوافر بعد تفعيل شركاء الحجز.',
    available:'بحث عبر الشريك',footnote:'تخضع الأسعار والتوافر والحجوزات لتأكيد مزود الخدمة. لا يتم البيع مباشرة عبر هذه الصفحة.',
    inspirations:'اكتشف',inspireTitle:'إقامات مميزة ورحلات استثنائية.',
    villa:'فلل على البحر',chalet:'شاليهات جبال الألب',privacy:'خدمة راقية ومختارة بعناية.',explore:'استكشف الوجهات',
    flightDestination:'مطار الوصول', activityDestination:'المدينة أو الوجهة', activityDate:'تاريخ النشاط', passengers:'المسافرون',
    tripType:'نوع الرحلة', roundTrip:'ذهاب وعودة', oneWay:'ذهاب فقط', cabin:'درجة السفر',
    cabinOptions:{economy:'اقتصادية',premium:'اقتصادية ممتازة',business:'رجال الأعمال',first:'الأولى'},
    flightsNote:'تم طلب تفعيل الرحلات الجوية من Nuitée بالفعل. ستظهر الأسعار بعد تأكيد التفعيل.',
    activitiesNote:'الأنشطة والجولات عبر Nuitée Connect Experiences. يتطلب الحجز تفعيل المنتج لحساب بوسفوراس والمتجر الخاص به.',
    activitySearch:'استكشف الأنشطة',
    services:{flights:{label:'رحلات الطيران',description:'تذاكر الرحلات الجوية الدولية'},hotels:{label:'الفنادق',description:'فنادق ومنتجعات مختارة'},villas:{label:'الفلل',description:'منازل خاصة ومسابح'},chalets:{label:'الشاليهات',description:'ملاذات جبلية فاخرة'},cars:{label:'تأجير السيارات',description:'استئجار سيارة'},transfers:{label:'التنقلات',description:'النقل مع سائق'},jets:{label:'الطائرات الخاصة',description:'رحلات حسب الطلب'},helicopters:{label:'المروحيات',description:'انتقالات وجولات جوية'},yachts:{label:'اليخوت',description:'رحلات بحرية خاصة'},activities:{label:'الأنشطة',description:'تجارب وجولات عبر Nuitée'} }
  }
};

const privateServiceLabels: Record<Locale,{collection:string;curated:string;signature:string;redirect:string;pending:string;skippered:string;crewed:string;charterInfo:string;rooms:string}> = {
 fr:{collection:'Type de sélection',curated:'Collection sélectionnée',signature:'Propriétés signature',redirect:'Continuer chez le partenaire',pending:'Catalogue partenaire en cours de connexion — demande privée disponible.',skippered:'Yacht avec skipper',crewed:'Superyacht avec équipage',charterInfo:'Les superyachts avec équipage restent sur devis individuel.',rooms:'Chambres'},
 en:{collection:'Collection',curated:'Curated stays',signature:'Signature properties',redirect:'Continue with partner',pending:'Partner catalogue being connected — private enquiry available.',skippered:'Skippered yacht',crewed:'Fully crewed superyacht',charterInfo:'Fully crewed superyachts require a custom quote.',rooms:'Bedrooms'},
 ru:{collection:'Подборка',curated:'Избранные варианты',signature:'Особые резиденции',redirect:'Перейти к партнёру',pending:'Каталог партнёра подключается — доступен индивидуальный запрос.',skippered:'Яхта со шкипером',crewed:'Суперъяхта с экипажем',charterInfo:'Суперъяхты с экипажем — индивидуальный расчёт.',rooms:'Спальни'},
 ar:{collection:'المجموعة',curated:'إقامات مختارة',signature:'إقامات استثنائية',redirect:'المتابعة لدى الشريك',pending:'نعمل على ربط كتالوج الشريك، ويمكن إرسال طلب خاص.',skippered:'يخت مع قبطان',crewed:'يخت بطاقم كامل',charterInfo:'تتطلب اليخوت بطاقم كامل عرض سعر مخصصاً.',rooms:'غرف النوم'}
};

const travelChoiceCopy:Record<Locale,{homes:string;privateTravel:string;privateText:string;advanced:string;accommodation:string;pickup:string;returnPlace:string;samePlace:string;pickupDate:string;returnDate:string;pickupTime:string;returnTime:string;hotelInfo:string;transferInfo:string;bookTransfer:string;requestCar:string;requestFlight:string;requestQuote:string;carInfo:string;trust:string}> = {
 fr:{homes:'Villas & chalets',privateTravel:'Voyages privés',privateText:'Jets privés, hélicoptères et yachts',advanced:'Plus d’options',accommodation:'Type d’hébergement',pickup:'Lieu de prise en charge',returnPlace:'Lieu de restitution',samePlace:'Restitution au même endroit',pickupDate:'Date de prise en charge',returnDate:'Date de restitution',pickupTime:'Heure de prise en charge',returnTime:'Heure de restitution',hotelInfo:'Consultez les hôtels, les tarifs et les disponibilités chez notre partenaire Nuitée.',transferInfo:'Le moteur de réservation Mobility est déjà disponible pour Istanbul et la Turquie. Vous choisirez votre trajet et votre véhicule sur la page spécialisée.',bookTransfer:'Réserver un transfert',requestCar:'Demander une location',requestFlight:'Demander un itinéraire',requestQuote:'Demander une proposition',carInfo:'La location sera proposée via un partenaire à connecter. Cette recherche sert actuellement à préparer votre demande.',trust:'Réservation et paiement auprès des opérateurs concernés. Aucune disponibilité inventée.'},
 en:{homes:'Villas & chalets',privateTravel:'Private travel',privateText:'Private jets, helicopters and yachts',advanced:'More options',accommodation:'Accommodation type',pickup:'Pickup location',returnPlace:'Return location',samePlace:'Return to the same location',pickupDate:'Pickup date',returnDate:'Return date',pickupTime:'Pickup time',returnTime:'Return time',hotelInfo:'Browse hotels, prices and availability directly with our partner Nuitée.',transferInfo:'Our Mobility booking engine is already available in Istanbul and Turkey. Select your route and vehicle on the specialist page.',bookTransfer:'Book a transfer',requestCar:'Request car rental',requestFlight:'Request a flight itinerary',requestQuote:'Request a proposal',carInfo:'A car-rental partner has yet to be connected; these details prepare an enquiry.',trust:'Booking and payment take place with the relevant operators. No invented availability.'},
 ru:{homes:'Виллы и шале',privateTravel:'Частные путешествия',privateText:'Частные самолёты, вертолёты и яхты',advanced:'Дополнительные параметры',accommodation:'Тип жилья',pickup:'Место получения',returnPlace:'Место возврата',samePlace:'Вернуть в том же месте',pickupDate:'Дата получения',returnDate:'Дата возврата',pickupTime:'Время получения',returnTime:'Время возврата',hotelInfo:'Смотрите цены и наличие отелей напрямую у партнёра Nuitée.',transferInfo:'Система бронирования Mobility доступна для Стамбула и Турции. Выберите маршрут и автомобиль на отдельной странице.',bookTransfer:'Заказать трансфер',requestCar:'Запросить аренду',requestFlight:'Запросить маршрут',requestQuote:'Получить предложение',carInfo:'Партнёр по аренде ещё подключается. Эти данные используются для запроса.',trust:'Бронирование и оплата выполняются у поставщика. Мы не показываем неподтверждённые предложения.'},
 ar:{homes:'فلل وشاليهات',privateTravel:'السفر الخاص',privateText:'طائرات خاصة ومروحيات ويخوت',advanced:'خيارات إضافية',accommodation:'نوع الإقامة',pickup:'مكان الاستلام',returnPlace:'مكان التسليم',samePlace:'الإعادة إلى المكان نفسه',pickupDate:'تاريخ الاستلام',returnDate:'تاريخ التسليم',pickupTime:'وقت الاستلام',returnTime:'وقت التسليم',hotelInfo:'استعرض أسعار الفنادق والتوافر مباشرة لدى شريكنا Nuitée.',transferInfo:'نظام حجز Mobility متاح في إسطنبول وتركيا. اختر المسار والمركبة على الصفحة المخصصة.',bookTransfer:'احجز خدمة النقل',requestCar:'اطلب استئجار سيارة',requestFlight:'اطلب رحلة جوية',requestQuote:'اطلب عرضاً',carInfo:'لم يتم تفعيل شريك تأجير السيارات بعد. هذه التفاصيل لإعداد طلبك.',trust:'يتم الحجز والدفع لدى المشغل المختص، دون عرض توافر غير مؤكد.'}
};

export function PrivateTravelCollection({ locale }: { locale: Locale }) {
  const [service,setService] = useState<Service>('hotels');
  const [destination,setDestination] = useState('');
  const [origin,setOrigin] = useState('');
  const [departure,setDeparture] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [guests,setGuests] = useState('2');
  const [tripType,setTripType] = useState<'round'|'one'>('round');
  const [cabin,setCabin] = useState<'economy'|'premium'|'business'|'first'>('economy');
  const [homeCollection,setHomeCollection] = useState<'curated'|'signature'>('curated');
  const [bedrooms,setBedrooms] = useState('3');
  const [yachtType,setYachtType] = useState<'skippered'|'crewed'>('skippered');
  const [privateOpen,setPrivateOpen] = useState(false);
  const [returnSame,setReturnSame] = useState(true);
  const [pickupTime,setPickupTime] = useState('10:00');
  const [dropoffTime,setDropoffTime] = useState('10:00');
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('service');
    if(requested==='homes')setService('villas');
    else if(mainServices.concat(privateServices).some(item=>item.id===requested)||requested==='chalets'){
      setService(requested as Service);
      if(privateServices.some(item=>item.id===requested))setPrivateOpen(true);
    }
  }, []);
  const tr = translations[locale];
  const ux = travelChoiceCopy[locale];
  const transferHref:Record<Locale,string>={fr:'/transfert-aeroport-istanbul',en:'/en/istanbul-airport-transfer',ru:'/ru/transfer-aeroport-stambul',ar:'/ar/istanbul-airport-transfer'};
  const currentPath = getLocalePath(locale,'/travel/private-collection');
  const assessment = getLocalePath(locale,getSlugForPage('private-assessment',locale) || '/diagnostic-prive');
  const isFlight = service === 'flights';
  const isActivity = service === 'activities';
  const nuiteeActivitiesHref = getNuiteeExperiencesHref();
  const isCar = service==='cars';
  const isTransfer=service==='transfers';
  const isHome=service==='villas'||service==='chalets';
  const isTransport = isFlight || service === 'jets' || service === 'helicopters' || isCar;
  const privateService = (['villas','chalets','jets','helicopters','yachts'] as Service[]).includes(service);
  const selectedPartner = privateService ? getPrivateTravelPartnerName(service as PrivateTravelPartnerService,homeCollection) : '';
  const bookingHref = privateService && !(service==='yachts' && yachtType==='crewed')
    ? getApprovedPartnerUrl(service as PrivateTravelPartnerService,homeCollection)
    : null;
  const privateLabels = privateServiceLabels[locale];
  const isHotel = service === 'hotels';
  const inquiryHref = useMemo(() => withAssessmentContext(
    assessment,currentPath,'Bosphoras Private Travel',
    [tr.services[service].label, origin&&('From: '+origin), destination&&(!isCar||!returnSame)&&('To: '+destination), departure&&('Departure: '+departure), returnDate&&('Return: '+returnDate), !isCar&&('Guests: '+guests), isCar&&('Pickup: '+pickupTime+'; Return: '+dropoffTime), isFlight&&('Trip: '+tripType+'; Cabin: '+cabin), isHome&&('Bedrooms: '+bedrooms), selectedPartner&&('Preferred supplier: '+selectedPartner), service==='yachts'&&('Charter type: '+yachtType)].filter(Boolean).join(' · ')
  ),[assessment,currentPath,tr,service,origin,destination,departure,returnDate,guests,isFlight,tripType,cabin,bedrooms,selectedPartner,yachtType,isCar,isHome,returnSame,pickupTime,dropoffTime]);
  const choose=(id:Service)=>{setService(id);trackConversion('travel_service_selected',{service_id:id,language:locale});};
  const trackAction=(action:string)=>trackConversion('travel_booking_action',{service_id:service,action,language:locale});

  return (
    <>
      <Header locale={locale} currentPath={currentPath} localizedPaths={{
        fr:'/travel/private-collection',en:'/en/travel/private-collection',
        ru:'/ru/travel/private-collection',ar:'/ar/travel/private-collection'
      }}/>
      <main lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="pt-[4.85rem] bg-white text-[#1d2b32]">
        <section className="relative min-h-[300px] overflow-hidden bg-[#15303f] text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{backgroundImage:"url('/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp')"}} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2839]/90 via-[#0d2839]/60 to-transparent" aria-hidden="true" />
          <div className="container-editorial relative flex min-h-[300px] flex-col justify-center py-12 md:py-14">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/85">{tr.eyebrow}</p>
            <h1 className="max-w-[790px] text-[2.4rem] font-normal leading-[1.15] tracking-[-0.03em] md:text-[4.1rem]">{tr.title}</h1>
            <p className="mt-7 max-w-[620px] text-[0.99rem] leading-7 text-white/90">{tr.description}</p>
          </div>
        </section>

        <section id="private-travel-top" className="container-editorial py-8 md:py-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#6d777e]">{tr.privacy}</p>
            <h2 className="text-2xl font-normal tracking-[-0.015em] md:text-3xl">{tr.panelTitle}</h2>
            <p className="mt-2 text-sm text-[#626d73]">{tr.panelIntro}</p>
          </div>
          <div role="tablist" aria-label={tr.panelTitle} className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {mainServices.map(({id,icon:Icon})=>{
              const active=id==='villas'?isHome:id===service;
              return <button key={id} type="button" role="tab" aria-selected={active} aria-controls="travel-service-panel"
                onClick={()=>choose(id)} className={'flex min-h-[78px] flex-col items-center justify-center gap-2 border px-2 py-3 text-center text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193344] '+(active?'border-[#193344] bg-[#193344] text-white':'border-[#e1e6e8] bg-[#f8f9f8] text-[#243741] hover:border-[#193344]')}>
                <Icon size={20} strokeWidth={1.5} aria-hidden="true"/><span>{id==='villas'?ux.homes:tr.services[id].label}</span>
              </button>;
            })}
          </div>

          <div id="travel-service-panel" role="tabpanel" aria-label={isHome?ux.homes:tr.services[service].label} className="mt-6 border border-[#e1e6e8] bg-white p-5 shadow-[0_8px_36px_rgba(25,51,68,0.045)] md:p-8">
            {isHome && (
              <fieldset className="mb-5"><legend className="mb-2 text-xs font-medium">{ux.accommodation}</legend><div className="flex gap-2">{(['villas','chalets'] as const).map(id=><button key={id} type="button" aria-pressed={service===id} onClick={()=>choose(id)} className={'min-h-11 border px-5 py-2 text-sm '+(service===id?'border-[#193344] bg-[#193344] text-white':'border-[#dce2e5] bg-white text-[#243741]')}>{tr.services[id].label}</button>)}</div></fieldset>
            )}
            {privateService && (
              <div className="mb-6">
                {isHome && (
                  <details><summary className="mb-3 cursor-pointer text-sm underline underline-offset-4">{ux.advanced}</summary><fieldset>
                    <legend className="mb-3 text-xs font-medium text-[#43515a]">{privateLabels.collection}</legend>
                    <div className="flex flex-wrap gap-2">
                      {([{id:'curated' as const,label:privateLabels.curated},{id:'signature' as const,label:privateLabels.signature}]).map(option=>
                        <button type="button" key={option.id} aria-pressed={homeCollection===option.id} onClick={()=>setHomeCollection(option.id)}
                          className={'min-h-11 border px-5 py-3 text-sm ' + (homeCollection===option.id?'border-[#193344] bg-[#193344] text-white':'border-[#dce2e5] bg-white text-[#243741]')}>{option.label}</button>
                      )}
                    </div>
                  </fieldset></details>
                )}
                {service==='yachts' && (
                  <fieldset>
                    <legend className="mb-3 text-xs font-medium text-[#43515a]">{tr.services.yachts.label}</legend>
                    <div className="flex flex-wrap gap-2">
                      {([{id:'skippered' as const,label:privateLabels.skippered},{id:'crewed' as const,label:privateLabels.crewed}]).map(option=>
                        <button type="button" key={option.id} aria-pressed={yachtType===option.id} onClick={()=>setYachtType(option.id)}
                          className={'min-h-11 border px-5 py-3 text-sm ' + (yachtType===option.id?'border-[#193344] bg-[#193344] text-white':'border-[#dce2e5] bg-white text-[#243741]')}>{option.label}</button>
                      )}
                    </div>
                    <p className="mt-3 text-xs text-[#62707a]">{privateLabels.charterInfo}</p>
                  </fieldset>
                )}
              </div>
            )}
            {isFlight && (
              <div className="mb-6 flex flex-wrap items-center gap-3" role="group" aria-label={tr.tripType}>
                {(['round','one'] as const).map(mode => <button type="button" key={mode} aria-pressed={tripType === mode}
                  className={'min-h-10 border px-4 py-2 text-sm transition-colors ' + (tripType === mode ? 'border-[#193344] bg-[#193344] text-white' : 'border-[#dce2e5] bg-white text-[#243741]')}
                  onClick={()=>setTripType(mode)}>{mode === 'round' ? tr.roundTrip : tr.oneWay}</button>)}
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {isTransport && !isTransfer && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{isCar?ux.pickup:tr.origin}</span>
                  <input type="text" value={origin} onChange={e=>setOrigin(e.target.value)} placeholder={isCar?ux.pickup:tr.originHint}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && !isTransfer && (!isCar||!returnSame) && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{isCar?ux.returnPlace:isFlight ? tr.flightDestination : isActivity ? tr.activityDestination : tr.destination}</span>
                  <input type="text" value={destination} onChange={e=>setDestination(e.target.value)} placeholder={tr.destinationHint}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && !isTransfer && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{isCar?ux.pickupDate:isActivity ? tr.activityDate : tr.departure}</span>
                  <input type="date" value={departure} onChange={e=>setDeparture(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && !isActivity && !isTransfer && (isCar || !isTransport || (isFlight && tripType === 'round')) && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{isCar?ux.returnDate:tr.returnDate}</span>
                  <input type="date" min={departure || undefined} value={returnDate} onChange={e=>setReturnDate(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && !isTransfer && !isCar && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{isTransport ? tr.passengers : tr.guests}</span>
                  <select value={guests} onChange={e=>setGuests(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]">
                    {[1,2,3,4,5,6,8,10,12,16].map(n=><option value={n} key={n}>{n}</option>)}
                  </select>
                </label>
              )}
              {(service==='villas'||service==='chalets') && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{privateLabels.rooms}</span>
                  <select value={bedrooms} onChange={e=>setBedrooms(e.target.value)} className="h-12 w-full min-w-0 border border-[#dce2e5] bg-white px-3 text-sm">
                    {[1,2,3,4,5,6,7,8,10,12].map(n=><option key={n} value={n}>{n}</option>)}
                  </select>
                </label>
              )}
              {isFlight && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.cabin}</span>
                  <select value={cabin} onChange={e => setCabin(e.target.value as typeof cabin)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]">
                    {(Object.keys(tr.cabinOptions) as Array<keyof typeof tr.cabinOptions>).map(key => <option key={key} value={key}>{tr.cabinOptions[key]}</option>)}
                  </select>
                </label>
              )}
              {isHotel && <p className="col-span-full text-sm leading-6 text-[#52616b]">{ux.hotelInfo}</p>}
              {isTransfer && <p className="col-span-full text-sm leading-6 text-[#52616b]">{ux.transferInfo}</p>}
            </div>
            {isCar && (<div className="mt-5 flex flex-wrap items-end gap-4">
              <label className="inline-flex min-h-11 items-center gap-3 text-sm"><input type="checkbox" checked={returnSame} onChange={e=>setReturnSame(e.target.checked)} className="h-4 w-4 accent-[#193344]"/>{ux.samePlace}</label>
              <label className="text-xs">{ux.pickupTime}<input type="time" value={pickupTime} onChange={e=>setPickupTime(e.target.value)} className="mt-1 block h-11 border border-[#dce2e5] bg-white px-3 text-sm"/></label>
              <label className="text-xs">{ux.returnTime}<input type="time" value={dropoffTime} onChange={e=>setDropoffTime(e.target.value)} className="mt-1 block h-11 border border-[#dce2e5] bg-white px-3 text-sm"/></label>
            </div>)}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {isHotel ? (
                <a href={getNuiteeWhiteLabelSearchHref(locale)} rel="sponsored" className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {tr.hotelCta}<ArrowRight size={17}/>
                </a>
              ) : isTransfer ? (
                <Link href={transferHref[locale]} onClick={()=>trackAction('mobility_booking')} className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">{ux.bookTransfer}<ArrowRight size={17}/></Link>
              ) : (isActivity && nuiteeActivitiesHref) ? (
                <a href={nuiteeActivitiesHref} rel="sponsored" className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {tr.activitySearch}<ArrowRight size={17}/>
                </a>
              ) : bookingHref ? (
                <a href={bookingHref} rel="sponsored noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {privateLabels.redirect}<ArrowRight size={17}/>
                </a>
              ) : (
                <Link href={inquiryHref} className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {isCar?ux.requestCar:isFlight?ux.requestFlight:ux.requestQuote}<ArrowRight size={17}/>
                </Link>
              )}
              <p className="max-w-lg text-xs leading-5 text-[#67747c]">{isHotel||isTransfer?ux.trust:isCar?ux.carInfo:isFlight?tr.flightsNote:isActivity?(nuiteeActivitiesHref?tr.footnote:tr.activitiesNote):privateService&&!bookingHref?privateLabels.pending:tr.footnote}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-3 border border-[#e1e6e8] bg-[#f7f8f7] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-sm font-medium">{ux.privateTravel}</p><p className="mt-1 text-xs text-[#62707a]">{ux.privateText}</p></div>
            <button type="button" onClick={()=>setPrivateOpen(!privateOpen)} aria-expanded={privateOpen} aria-controls="travel-private-options"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#bac8cb] bg-white px-5 py-2 text-sm text-[#193344]">{ux.privateTravel}<ChevronDown size={16} className={privateOpen?'rotate-180':''}/></button>
          </div>
          {privateOpen && <div id="travel-private-options" className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {privateServices.map(({id,icon:Icon})=><button type="button" key={id} onClick={()=>{choose(id);document.getElementById('travel-service-panel')?.scrollIntoView({behavior:'smooth',block:'center'});}}
              aria-pressed={service===id} className={'flex min-h-14 items-center gap-3 border px-4 py-3 text-start text-sm '+(id===service?'border-[#193344] bg-[#193344] text-white':'border-[#e1e6e8] bg-white text-[#193344]')}>
              <Icon size={19} strokeWidth={1.5}/>{tr.services[id].label}</button>)}
          </div>}
          <p className="mt-4 text-xs text-[#62707a]">{ux.trust}</p>
        </section>

        <section className="bg-[#f6f7f5] py-12 md:py-16">
          <div className="container-editorial">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#66747a]">{tr.inspirations}</p>
            <h2 className="mt-3 max-w-2xl text-[1.9rem] font-normal leading-tight md:text-[2.5rem]">{tr.inspireTitle}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <button type="button" onClick={()=>{setService('villas');document.getElementById('private-travel-top')?.scrollIntoView({behavior:'smooth'});}}
                className="group overflow-hidden bg-white text-start">
                <div className="h-[225px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]" style={{backgroundImage:"url('/images/travel/bali-premium/destination/bali-uluwatu-ocean-hero.webp')"}} aria-hidden="true"/>
                <span className="flex items-center justify-between px-6 py-5 text-lg">{tr.villa}<ArrowRight size={17}/></span>
              </button>
              <button type="button" onClick={()=>{setService('chalets');document.getElementById('private-travel-top')?.scrollIntoView({behavior:'smooth'});}}
                className="group overflow-hidden bg-white text-start">
                <div className="h-[225px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]" style={{backgroundImage:"url('/images/travel/courchevel-1850-premium/destination/alps-1.webp')"}} aria-hidden="true"/>
                <span className="flex items-center justify-between px-6 py-5 text-lg">{tr.chalet}<ArrowRight size={17}/></span>
              </button>
            </div>
            <Link href={getLocalePath(locale,'/travel/destinations')} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#193344] underline underline-offset-4">{tr.explore}<ArrowRight size={16}/></Link>
          </div>
        </section>
        <p className="container-editorial py-7 text-xs leading-6 text-[#62707a]">{tr.footnote}</p>
      </main>
      <Footer locale={locale}/>
    </>
  );
}
