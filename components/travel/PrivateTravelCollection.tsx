'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowLeftRight, BedDouble, Building2, CalendarDays, CarFront, CarTaxiFront, Check, ChevronDown, Clock3, Compass, Home, MapPin, Plane, PlaneTakeoff, Search, ShieldCheck, Ship, Ticket, UsersRound } from 'lucide-react';
import { trackConversion } from '@/lib/conversionAnalytics';
import { TravelDiscoverySections, type DiscoveryContext } from '@/components/travel/TravelDiscoverySections';
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
 {id:'hotels',icon:BedDouble},{id:'flights',icon:PlaneTakeoff},
 {id:'cars',icon:CarFront},{id:'activities',icon:Ticket}
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


type SearchCopy = {
 title:string;subtitle:string;eyebrow:string;destination:string;dates:string;travelers:string;
 go:string;back:string;where:string;departure:string;arrival:string;
 selection:string;hotelStart:string;transferStart:string;partnerStart:string;
 request:string;date:string;dateReturn:string;oneTime:string;
 partnerIntro:string;hotelPartner:string;transferPartner:string;activityPartner:string;
 pending:string;flightDeparture:string;flightArrival:string;guestLabel:string;scrollHint:string;
 noDuplicate:string;privateAccess:string;privateDesc:string;discover:string;
 placeHint:string;flightHint:string;carHint:string;searchType:string;
 stays:string;carsTab:string;hotelsShort:string;villaShort:string;chaletShort:string;
 rentalShort:string;transferShort:string;multiCity:string;flightSegment:string;
 addFlight:string;removeFlight:string;swap:string;flightLimit:string;
};
const searchCopy:Record<Locale,SearchCopy> = {
 fr:{
  stays:'Séjours',carsTab:'Voitures',hotelsShort:'Hôtels',villaShort:'Villas',chaletShort:'Chalets',
  rentalShort:'Location de voitures',transferShort:'Transfert aéroport',
  multiCity:'Multidestination',flightSegment:'Vol',addFlight:'Ajouter un vol',removeFlight:'Supprimer le dernier vol',
  swap:'Inverser départ et arrivée',flightLimit:'Jusqu’à cinq vols par demande.',
  title:'Où souhaitez-vous aller ?',subtitle:'Vols, séjours, voitures et expériences : trouvez votre prochain voyage en quelques gestes.',
  eyebrow:'BOSPHORAS TRAVEL',destination:'Destination',dates:'Dates',travelers:'Voyageurs',
  go:'Rechercher',back:'Retour',where:'Ville, hôtel ou destination',departure:'Départ',arrival:'Arrivée',
  selection:'Choisissez votre recherche',hotelStart:'Rechercher des hôtels',transferStart:'Réserver un transfert',partnerStart:'Continuer vers le partenaire',
  request:'Demander une proposition',date:'Date de départ',dateReturn:'Date de retour',oneTime:'Date souhaitée',
  partnerIntro:'Les critères seront saisis directement dans le moteur du partenaire, pour éviter toute double saisie.',
  hotelPartner:'La recherche et la réservation se font chez Nuitée. Aucun formulaire à remplir deux fois.',
  transferPartner:'Accédez directement au moteur Mobility actuel. Un partenaire en marque blanche remplacera progressivement ce système.',
  activityPartner:'La recherche continue directement chez Nuitée.',
  pending:'La connexion aux résultats automatisés est en préparation. Votre demande conserve les informations renseignées.',
  flightDeparture:'Ville ou aéroport de départ',flightArrival:'Ville ou aéroport d’arrivée',
  guestLabel:'Personnes',scrollHint:'Faites défiler les catégories',noDuplicate:'Une recherche claire, sans ressaisie inutile.',
  privateAccess:'Voyages privés',privateDesc:'Jets, hélicoptères et yachts sur mesure',discover:'À découvrir après votre recherche',
  placeHint:'Ex. Istanbul, Paris, Bodrum',flightHint:'Ex. Paris, CDG',carHint:'Ville, adresse ou aéroport',searchType:'Votre recherche'
 },
 en:{
  stays:'Stays',carsTab:'Cars',hotelsShort:'Hotels',villaShort:'Villas',chaletShort:'Chalets',
  rentalShort:'Car rental',transferShort:'Airport transfer',
  multiCity:'Multi-city',flightSegment:'Flight',addFlight:'Add a flight',removeFlight:'Remove last flight',
  swap:'Swap departure and arrival',flightLimit:'Up to five flights per enquiry.',
  title:'Where would you like to go?',subtitle:'Flights, stays, cars and experiences. Start your next journey in just a few steps.',
  eyebrow:'BOSPHORAS TRAVEL',destination:'Destination',dates:'Dates',travelers:'Travellers',
  go:'Search',back:'Back',where:'City, hotel or destination',departure:'Departure',arrival:'Arrival',
  selection:'Choose what to search',hotelStart:'Find hotels',transferStart:'Book a transfer',partnerStart:'Continue to partner',
  request:'Request a proposal',date:'Departure date',dateReturn:'Return date',oneTime:'Preferred date',
  partnerIntro:'Enter your search details directly with the booking partner, so you never enter them twice.',
  hotelPartner:'Hotel search and booking take place with Nuitée. No duplicate forms.',
  transferPartner:'Open the current Mobility booking engine. A future white-label partner will replace this process.',
  activityPartner:'Search continues directly with Nuitée.',
  pending:'Live partner search is being connected. Your enquiry keeps the details you enter.',
  flightDeparture:'Departure city or airport',flightArrival:'Arrival city or airport',
  guestLabel:'People',scrollHint:'Swipe to see more categories',noDuplicate:'A simple search, without unnecessary re-entry.',
  privateAccess:'Private travel',privateDesc:'Tailored jets, helicopters and yachts',discover:'Discover more after your search',
  placeHint:'E.g. Istanbul, Paris, Bodrum',flightHint:'E.g. Paris, CDG',carHint:'City, address or airport',searchType:'Your search'
 },
 ru:{
  stays:'Проживание',carsTab:'Авто',hotelsShort:'Отели',villaShort:'Виллы',chaletShort:'Шале',
  rentalShort:'Аренда авто',transferShort:'Трансфер',
  multiCity:'Сложный маршрут',flightSegment:'Рейс',addFlight:'Добавить рейс',removeFlight:'Удалить последний рейс',
  swap:'Поменять местами отправление и прибытие',flightLimit:'До пяти рейсов в одной заявке.',
  title:'Куда хотите отправиться?',subtitle:'Авиабилеты, проживание, автомобили и впечатления. Всё для путешествия в одном месте.',
  eyebrow:'BOSPHORAS TRAVEL',destination:'Направление',dates:'Даты',travelers:'Путешественники',
  go:'Найти',back:'Назад',where:'Город, отель или направление',departure:'Отправление',arrival:'Прибытие',
  selection:'Выберите услугу',hotelStart:'Найти отель',transferStart:'Заказать трансфер',partnerStart:'Перейти к партнёру',
  request:'Запросить предложение',date:'Дата отправления',dateReturn:'Дата возвращения',oneTime:'Желаемая дата',
  partnerIntro:'Укажите параметры непосредственно у партнёра, чтобы не вводить их дважды.',
  hotelPartner:'Поиск и бронирование отелей выполняются у Nuitée. Без повторного ввода данных.',
  transferPartner:'Перейдите в действующую систему Mobility. Позднее её заменит партнёр с системой под нашим брендом.',
  activityPartner:'Поиск продолжается непосредственно у Nuitée.',
  pending:'Автоматический поиск подключается. Ваша заявка сохранит указанные параметры.',
  flightDeparture:'Город или аэропорт вылета',flightArrival:'Город или аэропорт прибытия',
  guestLabel:'Человек',scrollHint:'Прокрутите категории',noDuplicate:'Простой поиск без повторного ввода.',
  privateAccess:'Частные путешествия',privateDesc:'Частные самолёты, вертолёты и яхты',discover:'Больше идей для путешествия',
  placeHint:'Например: Стамбул, Париж, Бодрум',flightHint:'Например: Париж, CDG',carHint:'Город, адрес или аэропорт',searchType:'Ваш поиск'
 },
 ar:{
  stays:'الإقامات',carsTab:'السيارات',hotelsShort:'فنادق',villaShort:'فلل',chaletShort:'شاليهات',
  rentalShort:'تأجير السيارات',transferShort:'النقل من المطار',
  multiCity:'وجهات متعددة',flightSegment:'رحلة',addFlight:'إضافة رحلة',removeFlight:'إزالة الرحلة الأخيرة',
  swap:'تبديل المغادرة والوصول',flightLimit:'ما يصل إلى خمس رحلات في الطلب.',
  title:'إلى أين ترغب بالسفر؟',subtitle:'رحلات الطيران والإقامات والسيارات والتجارب في مكان واحد وبخطوات بسيطة.',
  eyebrow:'BOSPHORAS TRAVEL',destination:'الوجهة',dates:'التواريخ',travelers:'المسافرون',
  go:'ابحث',back:'رجوع',where:'المدينة أو الفندق أو الوجهة',departure:'المغادرة',arrival:'الوصول',
  selection:'اختر نوع البحث',hotelStart:'ابحث عن فندق',transferStart:'احجز خدمة النقل',partnerStart:'المتابعة لدى الشريك',
  request:'اطلب عرضاً',date:'تاريخ المغادرة',dateReturn:'تاريخ العودة',oneTime:'التاريخ المطلوب',
  partnerIntro:'أدخل تفاصيل البحث مباشرة لدى شريك الحجز حتى لا تكتبها مرتين.',
  hotelPartner:'البحث عن الفنادق والحجز عبر Nuitée دون تكرار إدخال البيانات.',
  transferPartner:'انتقل إلى نظام الحجز الحالي Mobility. سيتم استبداله لاحقاً بشريك ذي علامة بيضاء.',
  activityPartner:'يستمر البحث مباشرة لدى Nuitée.',
  pending:'نعمل على ربط البحث التلقائي. سيحتفظ طلبك بالتفاصيل التي أدخلتها.',
  flightDeparture:'مدينة أو مطار المغادرة',flightArrival:'مدينة أو مطار الوصول',
  guestLabel:'أشخاص',scrollHint:'مرر لعرض المزيد',noDuplicate:'بحث بسيط دون إعادة إدخال البيانات.',
  privateAccess:'السفر الخاص',privateDesc:'طائرات خاصة ومروحيات ويخوت حسب الطلب',discover:'اكتشف المزيد بعد البحث',
  placeHint:'مثل إسطنبول أو باريس أو بودروم',flightHint:'مثل باريس CDG',carHint:'مدينة أو عنوان أو مطار',searchType:'بحثك'
 }
};
const fieldClass = 'block h-[58px] w-full min-w-0 rounded-xl border border-[#dde5eb] bg-white px-4 text-sm font-medium text-[#172c3c] placeholder:font-normal placeholder:text-[#8d9ca8] transition-colors focus:border-[#006da8] focus:outline-none focus:ring-2 focus:ring-[#b7dfed]';
const labelClass = 'mb-1.5 flex items-center gap-1.5 text-xs font-medium text-[#536575]';

export function PrivateTravelCollection({ locale }: { locale: Locale }) {
  const [service,setService]=useState<Service>('hotels');
  const [destination,setDestination]=useState('');
  const [origin,setOrigin]=useState('');
  const [departure,setDeparture]=useState('');
  const [returnDate,setReturnDate]=useState('');
  const [guests,setGuests]=useState('2');
  const [tripType,setTripType]=useState<'round'|'one'|'multi'>('round');
  const [flightLegs,setFlightLegs]=useState<Array<{from:string;to:string;date:string}>>([
    {from:'',to:'',date:''},{from:'',to:'',date:''}
  ]);
  const updateLeg=(i:number,field:'from'|'to'|'date',value:string)=>
    setFlightLegs(current=>current.map((leg,j)=>j===i?{...leg,[field]:value}:leg));
  const [cabin,setCabin]=useState<'economy'|'premium'|'business'|'first'>('economy');
  const [homeCollection,setHomeCollection]=useState<'curated'|'signature'>('curated');
  const [bedrooms,setBedrooms]=useState('3');
  const [yachtType,setYachtType]=useState<'skippered'|'crewed'>('skippered');
  const [privateOpen,setPrivateOpen]=useState(false);
  const [returnSame,setReturnSame]=useState(true);
  const [pickupTime,setPickupTime]=useState('10:00');
  const [dropoffTime,setDropoffTime]=useState('10:00');

  useEffect(()=>{
    const requested=new URLSearchParams(window.location.search).get('service');
    if(requested==='homes')setService('villas');
    else if(requested==='chalets'||mainServices.concat(privateServices).some(item=>item.id===requested)){
      setService(requested as Service);
      if(privateServices.some(item=>item.id===requested))setPrivateOpen(true);
    }
  },[]);

  const tr=translations[locale];
  const ux=travelChoiceCopy[locale];
  const copy=searchCopy[locale];
  const privateLabels=privateServiceLabels[locale];
  const currentPath=getLocalePath(locale,'/travel/private-collection');
  const assessment=getLocalePath(locale,getSlugForPage('private-assessment',locale)||'/diagnostic-prive');
  const transferHref:Record<Locale,string>={
    fr:'/transfert-aeroport-istanbul',
    en:'/en/istanbul-airport-transfer',
    ru:'/ru/transfer-aeroport-stambul',
    ar:'/ar/istanbul-airport-transfer'
  };
  const isHotel=service==='hotels';
  const isFlight=service==='flights';
  const isCar=service==='cars';
  const isTransfer=service==='transfers';
  const isActivity=service==='activities';
  const isMulti=isFlight&&tripType==='multi';
  const isHome=service==='villas'||service==='chalets';
  const isPrivate=privateServices.some(item=>item.id===service);
  const discoveryContext:DiscoveryContext=isPrivate?'private':isActivity?'activities':(isCar||isTransfer)?'mobility':isFlight?'flights':'stays';
  const privateService=isHome||isPrivate;
  const isTransport=isFlight||service==='jets'||service==='helicopters'||isCar;
  const selectedPartner=privateService?getPrivateTravelPartnerName(service as PrivateTravelPartnerService,homeCollection):'';
  const bookingHref=privateService&&!(service==='yachts'&&yachtType==='crewed')
    ?getApprovedPartnerUrl(service as PrivateTravelPartnerService,homeCollection):null;
  const activityHref=getNuiteeExperiencesHref();

  // No dummy search fields for partners: until a supported deep link or widget exists,
  // their real booking search opens directly to prevent a second entry of dates/places.
  const delegated=isHotel||isTransfer||(isActivity&&Boolean(activityHref))||Boolean(bookingHref);
  const ctaHref=isHotel?getNuiteeWhiteLabelSearchHref(locale):
    isTransfer?transferHref[locale]:
    isActivity&&activityHref?activityHref:
    bookingHref||null;
  const isExternal=Boolean(ctaHref&&/^https:\/\//.test(ctaHref));
  const heroLabel=isHome?ux.homes:tr.services[service].label;
  const requestInfo=[
    heroLabel,
    !isMulti&&origin&&('From: '+origin),
    !isMulti&&destination&&(!isCar||!returnSame)&&('To: '+destination),
    !isMulti&&departure&&('Date: '+departure),
    !isMulti&&returnDate&&('Return: '+returnDate),
    !isCar&&('People: '+guests),
    isCar&&('Pickup: '+pickupTime+'; Return: '+dropoffTime),
    isFlight&&('Journey: '+tripType+'; Cabin: '+cabin),
    isMulti&&flightLegs.map((leg,i)=>'Flight '+(i+1)+': '+(leg.from||'?')+' → '+(leg.to||'?')+' ('+(leg.date||'?')+')').join(' | '),
    isHome&&('Bedrooms: '+bedrooms),
    selectedPartner&&('Preferred supplier: '+selectedPartner),
    service==='yachts'&&('Charter: '+yachtType)
  ].filter(Boolean).join(' · ');
  const inquiryHref=useMemo(
    ()=>withAssessmentContext(assessment,currentPath,'Bosphoras Private Travel',requestInfo),
    [assessment,currentPath,requestInfo]
  );
  const actionHref=ctaHref||inquiryHref;
  const buttonLabel=isHotel?copy.hotelStart:
    isTransfer?copy.transferStart:
    (isActivity&&activityHref)||bookingHref?copy.partnerStart:
    isCar?ux.requestCar:isFlight?ux.requestFlight:copy.request;

  function choose(next:Service){
    setService(next);
    if(privateServices.some(item=>item.id===next))setPrivateOpen(true);
    trackConversion('travel_service_selected',{service_id:next,language:locale});
  }
  function trackAction(action:string){
    trackConversion('travel_booking_action',{service_id:service,action,language:locale});
  }

  const destinationLabel=isFlight?copy.flightArrival:
    isCar?ux.returnPlace:isActivity?tr.activityDestination:tr.destination;
  const tripDateLabel=isCar?ux.pickupDate:isActivity?tr.activityDate:copy.date;
  const hasReturn=isCar||isHome||service==='yachts'||(isFlight&&tripType==='round');
  const hasOrigin=isTransport;
  const hasDestination=!isCar||!returnSame;

  return (
    <>
      <Header locale={locale} currentPath={currentPath} localizedPaths={{
        fr:'/travel/private-collection',en:'/en/travel/private-collection',
        ru:'/ru/travel/private-collection',ar:'/ar/travel/private-collection'
      }}/>
      <main lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="bg-white pt-[4.85rem] text-[#172c3c]">
        <section id="private-travel-top" className="relative isolate overflow-hidden bg-[#f5f8fa] pb-11 pt-8 md:pb-16 md:pt-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[465px] bg-cover bg-center md:h-[455px]"
            aria-hidden="true"
            style={{backgroundImage:"linear-gradient(180deg,rgba(7,30,45,0.69) 0%,rgba(9,38,53,0.42) 58%,#f5f8fa 100%),url('/images/travel/saint-tropez-premium/destination/saint-tropez-pampelonne-bay.webp')"}}/>
          <div className="container-editorial relative z-10">
            <div className="mb-6 md:mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-white/90">{copy.eyebrow}</p>
              <h1 className="mt-3 max-w-5xl text-[2rem] font-semibold leading-[1.13] tracking-[-0.035em] text-white drop-shadow-[0_3px_18px_rgba(5,20,30,0.24)] sm:text-[2.5rem] md:text-[3.3rem]">
                {copy.title}
              </h1>
              <p className="mt-3 max-w-[790px] text-sm leading-6 text-white/90 md:text-base">{copy.subtitle}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e2e9ee] bg-white shadow-[0_18px_55px_rgba(20,49,70,0.08)]">
              <div className="border-b border-[#e2e9ee]">
                <div role="tablist" aria-label={copy.selection} className="grid grid-cols-4 gap-0 px-1 sm:px-3">
                  {mainServices.map(({id,icon:Icon})=>{
                    const active=id==='hotels' ? (isHotel||isHome) : id==='cars' ? (isCar||isTransfer) : service===id;
                    const label=id==='hotels'?copy.stays:id==='cars'?copy.carsTab:tr.services[id].label;
                    return (
                      <button type="button" key={id} role="tab" aria-selected={active} aria-controls="travel-service-panel"
                        onClick={()=>choose(id)}
                        className={'relative flex min-h-[73px] min-w-0 flex-col items-center justify-center gap-1.5 border-b-[3px] px-0.5 py-2 text-center text-[11px] font-semibold leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0b6a9e] sm:min-h-[80px] sm:px-3 sm:text-sm '+
                          (active?'border-[#0475ad] bg-[#f1f8fc] text-[#005f93]':'border-transparent text-[#536a77] hover:bg-[#f4f8fb]')}>
                        <Icon size={25} strokeWidth={1.7} aria-hidden="true" className="shrink-0 sm:h-7 sm:w-7"/>
                        <span className="block max-w-full whitespace-normal">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div id="travel-service-panel" role="tabpanel" aria-label={heroLabel} className="px-4 pb-5 pt-5 md:px-7 md:pb-7 md:pt-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[#1c3849]">{copy.searchType} · {heroLabel}</p>
                  {isHotel||isTransfer?(
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eff7f3] px-3 py-1.5 text-[11px] font-medium text-[#22684e]">
                      <Check size={13} aria-hidden="true"/>{isHotel?'Nuitée':'Bosphoras Mobility'}
                    </span>
                  ):null}
                </div>

                {(isHotel||isHome)&&(
                  <div role="group" aria-label={copy.stays} className="mb-5 grid grid-cols-3 border-b border-[#e2e9ee]">
                    {(['hotels','villas','chalets'] as const).map(id=>{
                      const label=id==='hotels'?copy.hotelsShort:id==='villas'?copy.villaShort:copy.chaletShort;
                      return <button type="button" key={id} aria-pressed={service===id} onClick={()=>choose(id)}
                        className={'min-h-[48px] border-b-[3px] px-2 py-2 text-center text-[13px] font-semibold transition-colors sm:text-sm '+
                          (service===id?'border-[#0475ad] text-[#006dad]':'border-transparent text-[#4f6371] hover:text-[#006dad]')}>
                        {label}
                      </button>;
                    })}
                  </div>
                )}
                {(isCar||isTransfer)&&(
                  <div role="group" aria-label={copy.carsTab} className="mb-5 grid grid-cols-2 border-b border-[#e2e9ee]">
                    {(['cars','transfers'] as const).map(id=><button type="button" key={id}
                      aria-pressed={service===id} onClick={()=>choose(id)}
                      className={'min-h-[48px] border-b-[3px] px-2 py-2 text-center text-[13px] font-semibold transition-colors sm:text-sm '+
                        (service===id?'border-[#0475ad] text-[#006dad]':'border-transparent text-[#4f6371] hover:text-[#006dad]')}>
                      {id==='cars'?copy.rentalShort:copy.transferShort}
                    </button>)}
                  </div>
                )}

                {isFlight&&(
                  <div role="group" aria-label={tr.tripType} className="mb-5 grid grid-cols-3 border-b border-[#e2e9ee]">
                    {(['round','one','multi'] as const).map(mode=>(
                      <button type="button" key={mode} aria-pressed={tripType===mode}
                        onClick={()=>setTripType(mode)}
                        className={'min-h-[48px] border-b-[3px] px-1.5 py-2 text-center text-[12px] font-semibold leading-snug transition-colors sm:text-sm '+
                          (tripType===mode?'border-[#0475ad] text-[#006dad]':'border-transparent text-[#4f6371] hover:text-[#006dad]')}>
                        {mode==='round'?tr.roundTrip:mode==='one'?tr.oneWay:copy.multiCity}
                      </button>
                    ))}
                  </div>
                )}


                {isFlight&&tripType!=='multi'&&(
                  <div className="mb-4 flex justify-end">
                    <button type="button" onClick={()=>{setOrigin(destination);setDestination(origin);}}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-medium text-[#076c9f] hover:bg-[#ecf6fa]">
                      <ArrowLeftRight size={16} aria-hidden="true"/>{copy.swap}
                    </button>
                  </div>
                )}

                {service==='yachts'&&(
                  <fieldset className="mb-5">
                    <legend className={labelClass}>{tr.services.yachts.label}</legend>
                    <div className="flex flex-wrap gap-2">
                      {([{id:'skippered' as const,label:privateLabels.skippered},{id:'crewed' as const,label:privateLabels.crewed}]).map(option=>(
                        <button type="button" key={option.id} aria-pressed={yachtType===option.id}
                          onClick={()=>setYachtType(option.id)} className={'min-h-11 rounded-lg border px-4 py-2 text-sm font-medium '+
                          (yachtType===option.id?'border-[#0475ad] bg-[#eef7fb] text-[#005f93]':'border-[#dde6ec] text-[#4d6472]')}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                    {yachtType==='crewed'&&<p className="mt-2 text-xs text-[#637783]">{privateLabels.charterInfo}</p>}
                  </fieldset>
                )}

                {delegated?(
                  <>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-stretch">
                      <div className="flex min-h-[70px] items-center gap-3 rounded-xl border border-[#dde6eb] bg-[#f8fafb] px-4">
                        <MapPin size={19} strokeWidth={1.75} className="shrink-0 text-[#648394]" aria-hidden="true"/>
                        <div className="min-w-0">
                          <p className="text-[11px] font-medium text-[#657b88]">{copy.destination}</p>
                          <p className="mt-0.5 truncate text-sm font-semibold text-[#233d4b]">{copy.where}</p>
                        </div>
                      </div>
                      <div className="flex min-h-[70px] items-center gap-3 rounded-xl border border-[#dde6eb] bg-[#f8fafb] px-4">
                        <CalendarDays size={19} strokeWidth={1.75} className="shrink-0 text-[#648394]" aria-hidden="true"/>
                        <div>
                          <p className="text-[11px] font-medium text-[#657b88]">{copy.dates}</p>
                          <p className="mt-0.5 text-sm font-semibold text-[#233d4b]">{tr.departure} – {tr.returnDate}</p>
                        </div>
                      </div>
                      <div className="flex min-h-[70px] items-center gap-3 rounded-xl border border-[#dde6eb] bg-[#f8fafb] px-4">
                        <UsersRound size={19} strokeWidth={1.75} className="shrink-0 text-[#648394]" aria-hidden="true"/>
                        <div>
                          <p className="text-[11px] font-medium text-[#657b88]">{copy.travelers}</p>
                          <p className="mt-0.5 text-sm font-semibold text-[#233d4b]">{copy.guestLabel}</p>
                        </div>
                      </div>
                      <Link href={actionHref} rel={isExternal?'sponsored noopener noreferrer':undefined}
                        onClick={()=>trackAction(isHotel?'nuitee_hotels':isTransfer?'mobility': 'partner')}
                        className="inline-flex min-h-[64px] items-center justify-center gap-2 rounded-xl bg-[#0071ad] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_4px_15px_rgba(0,113,173,0.16)] transition-colors hover:bg-[#005b90] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071ad]">
                        <Search size={18} aria-hidden="true"/><span className="whitespace-nowrap">{buttonLabel}</span>
                      </Link>
                    </div>
                    <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#637782]">
                      <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true"/>
                      {isHotel?copy.hotelPartner:isTransfer?copy.transferPartner:isActivity?copy.activityPartner:copy.partnerIntro}
                    </p>
                  </>
                ):(
                  <>
                    {!isMulti&&<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {hasOrigin&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><MapPin size={14} aria-hidden="true"/>{isCar?ux.pickup:copy.flightDeparture}</span>
                          <input value={origin} onChange={e=>setOrigin(e.target.value)} type="text" autoComplete="off"
                            placeholder={isCar?copy.carHint:copy.flightHint} className={fieldClass}/>
                        </label>
                      )}

                      {hasDestination&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><MapPin size={14} aria-hidden="true"/>{destinationLabel}</span>
                          <input value={destination} onChange={e=>setDestination(e.target.value)} type="text" autoComplete="off"
                            placeholder={isCar?copy.carHint:isFlight?copy.flightHint:copy.placeHint} className={fieldClass}/>
                        </label>
                      )}

                      <label className="block min-w-0">
                        <span className={labelClass}><CalendarDays size={14} aria-hidden="true"/>{tripDateLabel}</span>
                        <input value={departure} onChange={e=>setDeparture(e.target.value)} type="date" className={fieldClass}/>
                      </label>
                      {hasReturn&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><CalendarDays size={14} aria-hidden="true"/>{isCar?ux.returnDate:copy.dateReturn}</span>
                          <input value={returnDate} min={departure||undefined} onChange={e=>setReturnDate(e.target.value)}
                            type="date" className={fieldClass}/>
                        </label>
                      )}
                      {!isCar&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><UsersRound size={14} aria-hidden="true"/>{isTransport?tr.passengers:copy.travelers}</span>
                          <select value={guests} onChange={e=>setGuests(e.target.value)} className={fieldClass}>
                            {[1,2,3,4,5,6,8,10,12,16].map(n=><option value={n} key={n}>{n}</option>)}
                          </select>
                        </label>
                      )}
                      {isHome&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><Home size={14} aria-hidden="true"/>{privateLabels.rooms}</span>
                          <select value={bedrooms} onChange={e=>setBedrooms(e.target.value)} className={fieldClass}>
                            {[1,2,3,4,5,6,7,8,10,12].map(n=><option key={n} value={n}>{n}</option>)}
                          </select>
                        </label>
                      )}
                      {isFlight&&(
                        <label className="block min-w-0">
                          <span className={labelClass}><Plane size={14} aria-hidden="true"/>{tr.cabin}</span>
                          <select value={cabin} onChange={e=>setCabin(e.target.value as typeof cabin)} className={fieldClass}>
                            {(Object.keys(tr.cabinOptions) as Array<keyof typeof tr.cabinOptions>).map(id=>(
                              <option key={id} value={id}>{tr.cabinOptions[id]}</option>
                            ))}
                          </select>
                        </label>
                      )}
                    </div>}
                    {isMulti&&(
                      <div className="space-y-3">
                        {flightLegs.map((leg,i)=>(
                          <div key={i} className="rounded-xl border border-[#dde6ec] bg-[#fafcfd] p-3 sm:p-4">
                            <div className="mb-3 flex items-center justify-between">
                              <p className="text-sm font-semibold text-[#234557]">{copy.flightSegment} {i+1}</p>
                              <button type="button" aria-label={copy.swap}
                                onClick={()=>setFlightLegs(current=>current.map((l,j)=>j===i?{...l,from:l.to,to:l.from}:l))}
                                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-medium text-[#076c9f] hover:bg-[#e9f4f9]">
                                <ArrowLeftRight size={16} aria-hidden="true"/>{copy.swap}
                              </button>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                              <label className="block min-w-0"><span className={labelClass}>{copy.flightDeparture}</span>
                                <input type="text" autoComplete="off" value={leg.from}
                                  onChange={e=>updateLeg(i,'from',e.target.value)} placeholder={copy.flightHint} className={fieldClass}/>
                              </label>
                              <label className="block min-w-0"><span className={labelClass}>{copy.flightArrival}</span>
                                <input type="text" autoComplete="off" value={leg.to}
                                  onChange={e=>updateLeg(i,'to',e.target.value)} placeholder={copy.flightHint} className={fieldClass}/>
                              </label>
                              <label className="block min-w-0"><span className={labelClass}>{copy.date}</span>
                                <input type="date" value={leg.date} min={i>0?flightLegs[i-1].date||undefined:undefined}
                                  onChange={e=>updateLeg(i,'date',e.target.value)} className={fieldClass}/>
                              </label>
                            </div>
                          </div>
                        ))}
                        <div className="flex flex-wrap items-center gap-2">
                          {flightLegs.length<5&&<button type="button" onClick={()=>setFlightLegs(legs=>[...legs,{from:legs[legs.length-1]?.to||'',to:'',date:''}])}
                            className="min-h-11 rounded-lg border border-[#b8d4e1] bg-white px-4 py-2 text-sm font-semibold text-[#026b9d] hover:bg-[#f0f8fc]">+ {copy.addFlight}</button>}
                          {flightLegs.length>2&&<button type="button" onClick={()=>setFlightLegs(legs=>legs.slice(0,-1))}
                            className="min-h-11 rounded-lg border border-[#dde6ec] px-4 py-2 text-sm text-[#4e6473] hover:bg-[#f7fafb]">{copy.removeFlight}</button>}
                          <span className="text-xs text-[#70818d]">{copy.flightLimit}</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className="block"><span className={labelClass}><UsersRound size={14}/>{copy.travelers}</span>
                            <select value={guests} onChange={e=>setGuests(e.target.value)} className={fieldClass}>
                              {[1,2,3,4,5,6,8,10,12,16].map(n=><option value={n} key={n}>{n}</option>)}
                            </select>
                          </label>
                          <label className="block"><span className={labelClass}><Plane size={14}/>{tr.cabin}</span>
                            <select value={cabin} onChange={e=>setCabin(e.target.value as typeof cabin)} className={fieldClass}>
                              {(Object.keys(tr.cabinOptions) as Array<keyof typeof tr.cabinOptions>).map(id=>
                                <option key={id} value={id}>{tr.cabinOptions[id]}</option>)}
                            </select>
                          </label>
                        </div>
                      </div>
                    )}

                    {isCar&&(
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm text-[#385162]">
                          <input type="checkbox" checked={returnSame} onChange={e=>setReturnSame(e.target.checked)}
                            className="h-4 w-4 accent-[#0475ad]"/>{ux.samePlace}
                        </label>
                        <label className="flex items-center gap-2 text-xs text-[#536575]">
                          <Clock3 size={14} aria-hidden="true"/>{ux.pickupTime}
                          <input type="time" value={pickupTime} onChange={e=>setPickupTime(e.target.value)}
                            className="h-11 rounded-lg border border-[#dbe6eb] bg-white px-2 text-sm"/>
                        </label>
                        <label className="flex items-center gap-2 text-xs text-[#536575]">
                          <Clock3 size={14} aria-hidden="true"/>{ux.returnTime}
                          <input type="time" value={dropoffTime} onChange={e=>setDropoffTime(e.target.value)}
                            className="h-11 rounded-lg border border-[#dbe6eb] bg-white px-2 text-sm"/>
                        </label>
                      </div>
                    )}

                    {isHome&&(
                      <details className="mt-4">
                        <summary className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-sm text-[#42657b] underline underline-offset-4">
                          {ux.advanced} <ChevronDown size={15} aria-hidden="true"/>
                        </summary>
                        <fieldset className="mt-3 max-w-xl rounded-xl border border-[#dde6ec] bg-[#fafcfd] p-4">
                          <legend className="px-2 text-xs text-[#536575]">{privateLabels.collection}</legend>
                          <div className="flex flex-wrap gap-2">
                            {([{id:'curated' as const,label:privateLabels.curated},{id:'signature' as const,label:privateLabels.signature}]).map(option=>(
                              <button type="button" key={option.id} aria-pressed={homeCollection===option.id}
                                onClick={()=>setHomeCollection(option.id)}
                                className={'min-h-11 rounded-lg border px-4 py-2 text-sm '+
                                  (homeCollection===option.id?'border-[#0475ad] bg-[#eff8fc] text-[#00618e]':'border-[#dde6eb] bg-white text-[#4d6270]')}>
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </fieldset>
                      </details>
                    )}

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-[670px] text-xs leading-5 text-[#667a86]">
                        <ShieldCheck size={15} className="me-1 inline align-[-3px]" aria-hidden="true"/>
                        {isFlight?tr.flightsNote:isCar?ux.carInfo:copy.pending}
                      </p>
                      <Link href={inquiryHref} onClick={()=>trackAction('private_enquiry')}
                        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0071ad] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(0,113,173,0.16)] transition-colors hover:bg-[#005b90]">
                        <Search size={18} aria-hidden="true"/>{buttonLabel}<ArrowRight size={16} aria-hidden="true"/>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#dae6ec] bg-white">
              <button type="button" aria-expanded={privateOpen} aria-controls="travel-private-options"
                onClick={()=>setPrivateOpen(!privateOpen)}
                className="flex min-h-[74px] w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors hover:bg-[#f8fbfd]">
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf3f8] text-[#1e678d]">
                    <Plane size={19} strokeWidth={1.6} aria-hidden="true"/>
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#233c4a]">{copy.privateAccess}</span>
                    <span className="mt-1 block text-xs text-[#637784]">{copy.privateDesc}</span>
                  </span>
                </span>
                <ChevronDown size={18} className={'shrink-0 text-[#476577] transition-transform '+(privateOpen?'rotate-180':'')} aria-hidden="true"/>
              </button>
              {privateOpen&&(
                <div id="travel-private-options" className="grid grid-cols-1 gap-2 border-t border-[#e4ebef] p-3 sm:grid-cols-3">
                  {privateServices.map(({id,icon:Icon})=>(
                    <button type="button" key={id} aria-pressed={service===id}
                      onClick={()=>{
                        choose(id);
                        document.getElementById('travel-service-panel')?.scrollIntoView({behavior:'smooth',block:'center'});
                      }}
                      className={'flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-start text-sm font-medium transition-colors '+
                        (service===id?'border-[#0475ad] bg-[#edf7fc] text-[#006ba4]':'border-[#e1e9ee] bg-white text-[#324d5e] hover:border-[#83b5ce]')}>
                      <Icon size={19} strokeWidth={1.6} aria-hidden="true"/>{tr.services[id].label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="mt-4 inline-flex items-center gap-2 text-xs text-[#6d808c]">
              <ShieldCheck size={15} className="shrink-0" aria-hidden="true"/>{ux.trust}
            </p>
          </div>
        </section>

        <TravelDiscoverySections locale={locale} context={discoveryContext} onSelect={choose}/>
        <p className="container-editorial py-7 text-xs leading-6 text-[#70838e]">{tr.footnote}</p>
      </main>
      <Footer locale={locale}/>
    </>
  );
}
