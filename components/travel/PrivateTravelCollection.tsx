'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Building2, CalendarDays, Compass, Home, MountainSnow, Plane, Ship, Users, Waves } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';
import { getNuiteeWhiteLabelSearchHref } from '@/lib/travel/nuiteeWhiteLabel';
import { withAssessmentContext } from '@/lib/assessmentContext';

type Service = 'hotels' | 'villas' | 'chalets' | 'jets' | 'helicopters' | 'yachts';
const services: { id: Service; icon: typeof Home }[] = [
  { id: 'hotels', icon: Building2 },
  { id: 'villas', icon: Home },
  { id: 'chalets', icon: MountainSnow },
  { id: 'jets', icon: Plane },
  { id: 'helicopters', icon: Compass },
  { id: 'yachts', icon: Ship },
];
const translations: Record<Locale, {
  eyebrow: string; title: string; description: string; panelTitle: string; panelIntro: string;
  destination: string; origin: string; departure: string; returnDate: string; guests: string;
  destinationHint: string; originHint: string; cta: string; hotelCta: string; empty: string;
  available: string; services: Record<Service,{label:string,description:string}>;
  footnote: string; inspirations: string; inspireTitle: string; villa: string; chalet: string;
  privacy: string; explore: string;
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
    services: {
      hotels:{label:'Hôtels',description:'Hôtels et resorts sélectionnés'},
      villas:{label:'Villas',description:'Piscine privée et séjours d’exception'},
      chalets:{label:'Chalets',description:'Refuges alpins et grands domaines'},
      jets:{label:'Jets privés',description:'Charters et vols sur mesure'},
      helicopters:{label:'Hélicoptères',description:'Transferts privés et survols'},
      yachts:{label:'Yachts',description:'Charters et croisières privées'}
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
    services:{hotels:{label:'Hotels',description:'Curated hotels and resorts'},villas:{label:'Villas',description:'Private pools and exceptional homes'},chalets:{label:'Chalets',description:'Alpine escapes and mountain estates'},jets:{label:'Private jets',description:'Charters and tailored flights'},helicopters:{label:'Helicopters',description:'Private transfers and scenic flights'},yachts:{label:'Yachts',description:'Private charters and cruises'}}
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
    services:{hotels:{label:'Отели',description:'Избранные отели и курорты'},villas:{label:'Виллы',description:'Частные дома и бассейны'},chalets:{label:'Шале',description:'Отдых в Альпах'},jets:{label:'Частные самолёты',description:'Перелёты по запросу'},helicopters:{label:'Вертолёты',description:'Трансферы и экскурсии'},yachts:{label:'Яхты',description:'Частные круизы'}}
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
    services:{hotels:{label:'الفنادق',description:'فنادق ومنتجعات مختارة'},villas:{label:'الفلل',description:'منازل خاصة ومسابح'},chalets:{label:'الشاليهات',description:'ملاذات جبلية فاخرة'},jets:{label:'الطائرات الخاصة',description:'رحلات حسب الطلب'},helicopters:{label:'المروحيات',description:'انتقالات وجولات جوية'},yachts:{label:'اليخوت',description:'رحلات بحرية خاصة'}}
  }
};

export function PrivateTravelCollection({ locale }: { locale: Locale }) {
  const [service,setService] = useState<Service>('villas');
  const [destination,setDestination] = useState('');
  const [origin,setOrigin] = useState('');
  const [departure,setDeparture] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [guests,setGuests] = useState('2');
  const tr = translations[locale];
  const currentPath = getLocalePath(locale,'/travel/private-collection');
  const assessment = getLocalePath(locale,getSlugForPage('private-assessment',locale) || '/diagnostic-prive');
  const isTransport = service === 'jets' || service === 'helicopters';
  const isHotel = service === 'hotels';
  const inquiryHref = useMemo(() => withAssessmentContext(
    assessment,currentPath,'Bosphoras Private Travel',
    [tr.services[service].label, origin && ('From: ' + origin), destination && ('To: ' + destination), departure && ('Departure: ' + departure), returnDate && ('Return: ' + returnDate), 'Guests: ' + guests].filter(Boolean).join(' · ')
  ),[assessment,currentPath,tr,service,origin,destination,departure,returnDate,guests]);

  return (
    <>
      <Header locale={locale} currentPath={currentPath} localizedPaths={{
        fr:'/travel/private-collection',en:'/en/travel/private-collection',
        ru:'/ru/travel/private-collection',ar:'/ar/travel/private-collection'
      }}/>
      <main lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="pt-[4.85rem] bg-white text-[#1d2b32]">
        <section className="relative min-h-[440px] overflow-hidden bg-[#15303f] text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{backgroundImage:"url('/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp')"}} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2839]/90 via-[#0d2839]/60 to-transparent" aria-hidden="true" />
          <div className="container-editorial relative flex min-h-[440px] flex-col justify-center py-16 md:py-20">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-white/85">{tr.eyebrow}</p>
            <h1 className="max-w-[790px] text-[2.4rem] font-normal leading-[1.15] tracking-[-0.03em] md:text-[4.1rem]">{tr.title}</h1>
            <p className="mt-7 max-w-[620px] text-[0.99rem] leading-7 text-white/90">{tr.description}</p>
          </div>
        </section>

        <section id="private-travel-top" className="container-editorial py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#6d777e]">{tr.privacy}</p>
            <h2 className="text-2xl font-normal tracking-[-0.015em] md:text-3xl">{tr.panelTitle}</h2>
            <p className="mt-2 text-sm text-[#626d73]">{tr.panelIntro}</p>
          </div>
          <div role="tablist" aria-label={tr.panelTitle} className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
            {services.map(({id,icon:Icon}) => {
              const active = id === service;
              return (
                <button type="button" role="tab" aria-selected={active} key={id} onClick={() => setService(id)}
                  className={'flex min-h-[110px] flex-col justify-between border px-4 py-3.5 text-start transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193344] ' + (active ? 'border-[#193344] bg-[#193344] text-white' : 'border-[#e1e6e8] bg-[#f8f9f8] text-[#243741] hover:border-[#193344]')}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true"/>
                  <span className="mt-3 block text-sm font-medium">{tr.services[id].label}</span>
                  <span className={'mt-1 block text-xs leading-4 ' + (active?'text-white/75':'text-[#637079]')}>{tr.services[id].description}</span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="mt-6 border border-[#e1e6e8] bg-white p-5 shadow-[0_8px_36px_rgba(25,51,68,0.045)] md:p-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {isTransport && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.origin}</span>
                  <input type="text" value={origin} onChange={e=>setOrigin(e.target.value)} placeholder={tr.originHint}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.destination}</span>
                  <input type="text" value={destination} onChange={e=>setDestination(e.target.value)} placeholder={tr.destinationHint}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.departure}</span>
                  <input type="date" value={departure} onChange={e=>setDeparture(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && !isTransport && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.returnDate}</span>
                  <input type="date" min={departure || undefined} value={returnDate} onChange={e=>setReturnDate(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]"/>
                </label>
              )}
              {!isHotel && (
                <label className="block">
                  <span className="mb-2 block text-xs font-medium">{tr.guests}</span>
                  <select value={guests} onChange={e=>setGuests(e.target.value)}
                    className="h-12 w-full min-w-0 rounded-none border border-[#dce2e5] bg-white px-3 text-sm outline-offset-2 focus:border-[#193344]">
                    {[1,2,3,4,5,6,8,10,12,16].map(n=><option value={n} key={n}>{n}</option>)}
                  </select>
                </label>
              )}
              {isHotel && <p className="col-span-full text-sm leading-6 text-[#52616b]">{tr.available} — Nuitée. {tr.description}</p>}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {isHotel ? (
                <a href={getNuiteeWhiteLabelSearchHref(locale)} rel="sponsored" className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {tr.hotelCta}<ArrowRight size={17}/>
                </a>
              ) : (
                <Link href={inquiryHref} className="inline-flex min-h-12 items-center gap-3 bg-[#193344] px-7 py-3 text-sm font-medium text-white hover:bg-[#28495a]">
                  {tr.cta}<ArrowRight size={17}/>
                </Link>
              )}
              <p className="max-w-lg text-xs leading-5 text-[#67747c]">{isHotel ? tr.footnote : tr.empty}</p>
            </div>
          </div>
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
