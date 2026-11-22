'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BedDouble, CalendarDays, Compass, MapPin, Plane, Search, ShieldCheck, Ship, UsersRound } from 'lucide-react';
import type { TravelCategory } from '@/data/travel/destinations';
import { travelHref, travelKeywordTitles, type TravelLocale } from '@/lib/travel/i18n';
import { getNuiteeWhiteLabelSearchHref } from '@/lib/travel/nuiteeWhiteLabel';
import { withAssessmentContext } from '@/lib/assessmentContext';
import { trackConversion } from '@/lib/conversionAnalytics';

type Words={title:string;destination:string;from:string;to:string;arrival:string;leave:string;date:string;returnDate:string;people:string;bedrooms:string;harbour:string;charter:string;skipper:string;crew:string;submit:string;hotels:string;hotelNote:string;note:string;guide:string;other:string};
const words:Record<TravelLocale,Words>={
 fr:{title:'Organisez votre voyage',destination:'Destination',from:'Départ ou aéroport',to:'Arrivée ou aéroport',arrival:'Arrivée',leave:'Départ',date:'Date de départ',returnDate:'Retour (facultatif)',people:'Voyageurs',bedrooms:'Chambres',harbour:'Port ou marina',charter:'Type de location',skipper:'Avec skipper',crew:'Avec équipage',submit:'Demander une proposition',hotels:'Rechercher sur Nuitée',hotelNote:'Les disponibilités et dates se consultent directement sur le moteur Nuitée.',note:'Demande personnalisée : aucun tarif ni disponibilité en temps réel ne sont affichés.',guide:'Guide de destination',other:'Autres expériences'},
 en:{title:'Plan your journey',destination:'Destination',from:'Departure or airport',to:'Arrival or airport',arrival:'Check-in',leave:'Check-out',date:'Departure date',returnDate:'Return (optional)',people:'Travellers',bedrooms:'Bedrooms',harbour:'Port or marina',charter:'Charter type',skipper:'With skipper',crew:'With crew',submit:'Request a proposal',hotels:'Search with Nuitée',hotelNote:'Live hotel availability and dates are checked directly with Nuitée.',note:'Tailored enquiry: no live rates or availability are shown here.',guide:'Destination guide',other:'Other experiences'},
 ru:{title:'Спланируйте поездку',destination:'Направление',from:'Отправление или аэропорт',to:'Прибытие или аэропорт',arrival:'Заезд',leave:'Выезд',date:'Дата отправления',returnDate:'Обратно (необязательно)',people:'Гости',bedrooms:'Спальни',harbour:'Порт или марина',charter:'Тип чартера',skipper:'Со шкипером',crew:'С экипажем',submit:'Запросить предложение',hotels:'Поиск через Nuitée',hotelNote:'Наличие и даты уточняются непосредственно в системе Nuitée.',note:'Индивидуальный запрос: цены и наличие в реальном времени здесь не показываются.',guide:'Гид по направлению',other:'Другие услуги'},
 ar:{title:'خطط لرحلتك',destination:'الوجهة',from:'المغادرة أو المطار',to:'الوصول أو المطار',arrival:'تسجيل الوصول',leave:'تسجيل المغادرة',date:'تاريخ المغادرة',returnDate:'العودة (اختياري)',people:'المسافرون',bedrooms:'غرف النوم',harbour:'الميناء أو المرسى',charter:'نوع التأجير',skipper:'مع قبطان',crew:'مع طاقم',submit:'اطلب عرضاً',hotels:'البحث عبر Nuitée',hotelNote:'تحقق من التوافر والتواريخ مباشرة لدى Nuitée.',note:'طلب مخصص: لا نعرض أسعاراً أو توافراً مباشراً هنا.',guide:'دليل الوجهة',other:'خدمات أخرى'},
 de:{title:'Reise planen',destination:'Reiseziel',from:'Abflug oder Flughafen',to:'Ankunft oder Flughafen',arrival:'Check-in',leave:'Check-out',date:'Abreisedatum',returnDate:'Rückreise (optional)',people:'Reisende',bedrooms:'Schlafzimmer',harbour:'Hafen oder Marina',charter:'Charterart',skipper:'Mit Skipper',crew:'Mit Crew',submit:'Angebot anfordern',hotels:'Bei Nuitée suchen',hotelNote:'Verfügbarkeit und Termine werden direkt bei Nuitée geprüft.',note:'Persönliche Anfrage: keine Live-Tarife oder bestätigten Verfügbarkeiten.',guide:'Reiseführer',other:'Weitere Services'},
 tr:{title:'Seyahatinizi planlayın',destination:'Destinasyon',from:'Kalkış veya havalimanı',to:'Varış veya havalimanı',arrival:'Giriş',leave:'Çıkış',date:'Gidiş tarihi',returnDate:'Dönüş (isteğe bağlı)',people:'Yolcular',bedrooms:'Yatak odası',harbour:'Liman veya marina',charter:'Kiralama türü',skipper:'Kaptanlı',crew:'Mürettebatlı',submit:'Teklif iste',hotels:'Nuitée üzerinden ara',hotelNote:'Müsaitlik ve tarihler doğrudan Nuitée üzerinden kontrol edilir.',note:'Kişiye özel talep: burada canlı fiyat veya müsaitlik gösterilmez.',guide:'Destinasyon rehberi',other:'Diğer hizmetler'},
 es:{title:'Planifique su viaje',destination:'Destino',from:'Salida o aeropuerto',to:'Llegada o aeropuerto',arrival:'Entrada',leave:'Salida',date:'Fecha de salida',returnDate:'Regreso (opcional)',people:'Viajeros',bedrooms:'Dormitorios',harbour:'Puerto o marina',charter:'Tipo de chárter',skipper:'Con patrón',crew:'Con tripulación',submit:'Solicitar propuesta',hotels:'Buscar con Nuitée',hotelNote:'La disponibilidad y las fechas se consultan directamente en Nuitée.',note:'Solicitud personalizada: no mostramos tarifas ni disponibilidad en tiempo real.',guide:'Guía del destino',other:'Otros servicios'},
 zh:{title:'规划您的旅程',destination:'目的地',from:'出发地或机场',to:'到达地或机场',arrival:'入住',leave:'退房',date:'出发日期',returnDate:'返回（可选）',people:'旅客',bedrooms:'卧室',harbour:'港口或码头',charter:'包租类型',skipper:'配船长',crew:'配船员',submit:'索取方案',hotels:'通过 Nuitée 搜索',hotelNote:'请直接在 Nuitée 查询日期和实时库存。',note:'私人咨询：这里不展示实时价格或空位。',guide:'目的地指南',other:'其他服务'},
 pt:{title:'Planeje sua viagem',destination:'Destino',from:'Partida ou aeroporto',to:'Chegada ou aeroporto',arrival:'Check-in',leave:'Check-out',date:'Data de partida',returnDate:'Retorno (opcional)',people:'Viajantes',bedrooms:'Quartos',harbour:'Porto ou marina',charter:'Tipo de fretamento',skipper:'Com capitão',crew:'Com tripulação',submit:'Solicitar proposta',hotels:'Buscar na Nuitée',hotelNote:'Datas e disponibilidade são consultadas diretamente na Nuitée.',note:'Consulta personalizada: sem preços ou disponibilidade em tempo real.',guide:'Guia de destino',other:'Outros serviços'},
 it:{title:'Organizzate il viaggio',destination:'Destinazione',from:'Partenza o aeroporto',to:'Arrivo o aeroporto',arrival:'Check-in',leave:'Check-out',date:'Data di partenza',returnDate:'Ritorno (facoltativo)',people:'Viaggiatori',bedrooms:'Camere da letto',harbour:'Porto o marina',charter:'Tipo di charter',skipper:'Con skipper',crew:'Con equipaggio',submit:'Richiedi proposta',hotels:'Cerca con Nuitée',hotelNote:'Date e disponibilità si verificano direttamente su Nuitée.',note:'Richiesta personalizzata: non mostriamo prezzi o disponibilità live.',guide:'Guida della destinazione',other:'Altri servizi'}
};
const icons:Record<TravelCategory,typeof BedDouble>={hotels:BedDouble,villas:BedDouble,chalets:BedDouble,yachts:Ship,helicopters:Compass,'private-jets':Plane};
type Props={locale:TravelLocale;category:TravelCategory;destinationName?:string;destinationSlug?:string;availableCategories?:TravelCategory[];sourceSlug:string;compact?:boolean};
export function TravelContextualSearch({locale,category,destinationName,destinationSlug,availableCategories,sourceSlug,compact=false}:Props){
 const [choice,setChoice]=useState<TravelCategory>(category);
 const [place,setPlace]=useState(destinationName||'');
 const [origin,setOrigin]=useState('');
 const [date,setDate]=useState('');
 const [end,setEnd]=useState('');
 const [travellers,setTravellers]=useState('2');
 const [rooms,setRooms]=useState('3');
 const [charter,setCharter]=useState<'skipper'|'crew'>('crew');
 const t=words[locale],Icon=icons[choice];
 const hotel=choice==='hotels',accommodation=choice==='villas'||choice==='chalets',flight=choice==='private-jets'||choice==='helicopters';
 const sourcePath=travelHref(locale,sourceSlug);
 const context=[
  travelKeywordTitles[choice][locale],'Language: '+locale,
  place&&'Destination/Port: '+place,
  origin&&'Origin: '+origin,
  date&&'Start: '+date,
  end&&'Return/Checkout: '+end,
  'Guests: '+travellers,
  accommodation&&'Bedrooms: '+rooms,
  choice==='yachts'&&'Yacht: '+charter
 ].filter(Boolean).join(' · ');
 const inquiry=useMemo(()=>{
  const form=locale==='fr'?'/diagnostic-prive':locale==='ru'?'/ru/chastnaya-konsultatsiya':locale==='ar'?'/ar/تقييم-خاص':'/en/private-assessment';
  return withAssessmentContext(form,sourcePath,travelKeywordTitles[choice][locale],context);
 },[locale,choice,context,sourcePath]);
 const guideUrl=destinationSlug?travelHref(locale,'destinations/'+destinationSlug):travelHref(locale,'destinations');
 const label='flex min-w-0 flex-col gap-1.5 text-xs font-semibold text-[#587080]';
 const field='min-h-12 w-full min-w-0 rounded-xl border border-[#d8e4eb] bg-white px-3.5 py-2 text-sm text-[#1f3b4b] outline-none focus:border-[#C23674] focus:ring-2 focus:ring-[#C23674]/15';
 const button='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#146c95] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d5577] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C23674]';
 return <section lang={locale} dir={locale==='ar'?'rtl':'ltr'} aria-label={t.title}
  className={'rounded-2xl border border-[#e0e8ee] bg-white p-4 shadow-[0_10px_28px_rgba(22,47,65,0.06)] sm:p-6 '+(compact?'my-5':'my-8')}>
  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
   <div className="flex items-center gap-3">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0f6] text-[#C23674]"><Icon size={23} strokeWidth={1.7} aria-hidden="true"/></span>
    <div><h2 className="text-base font-semibold text-[#193747] sm:text-lg">{t.title} · {travelKeywordTitles[choice][locale]}</h2>
     {destinationName&&<p className="mt-1 text-sm text-[#617584]">{destinationName}</p>}
    </div>
   </div>
   <Link href={guideUrl} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#176e96] underline underline-offset-4">
    <MapPin size={16} aria-hidden="true"/>{t.guide}<ArrowRight size={15} aria-hidden="true"/>
   </Link>
  </div>
  {availableCategories&&availableCategories.length>1&&
   <div role="group" aria-label={t.other} className="mb-5 flex flex-wrap gap-2">
    {availableCategories.map(id=><button type="button" key={id} aria-pressed={choice===id} onClick={()=>setChoice(id)}
     className={'min-h-11 rounded-xl border px-3 py-2 text-xs font-semibold sm:text-sm '+(choice===id?'border-[#C23674] bg-[#fff0f6] text-[#9b275c]':'border-[#d9e4ea] text-[#536e7d] hover:border-[#b7cdd8]')}>
     {travelKeywordTitles[id][locale]}
    </button>)}
   </div>}
  {hotel ? <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-[#f8fafb] p-4 sm:flex-row sm:items-center">
    <div className="flex items-start gap-2"><Search size={20} className="mt-1 shrink-0 text-[#C23674]" aria-hidden="true"/>
     <p className="max-w-xl text-sm leading-6 text-[#5d7381]">{t.hotelNote}</p></div>
    <a href={getNuiteeWhiteLabelSearchHref(locale)} target="_blank" rel="sponsored noopener noreferrer"
     onClick={()=>trackConversion('travel_booking_action',{service_id:'hotels',action:'nuitee_from_seo',language:locale})}
     className={button}>{t.hotels}<ArrowRight size={17} aria-hidden="true"/></a>
   </div> : <>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
     {flight&&<label className={label}>{t.from}<input type="text" autoComplete="off" className={field} value={origin} onChange={e=>setOrigin(e.target.value)} placeholder={t.from}/></label>}
     <label className={label}>{choice==='yachts'?t.harbour:flight?t.to:t.destination}
      <input type="text" autoComplete="off" className={field} value={place} onChange={e=>setPlace(e.target.value)} placeholder={t.destination}/></label>
     <label className={label}><span className="inline-flex items-center gap-1"><CalendarDays size={14} aria-hidden="true"/>{accommodation?t.arrival:t.date}</span>
      <input type="date" className={field} value={date} onChange={e=>setDate(e.target.value)}/></label>
     {(accommodation||choice==='yachts'||choice==='private-jets')&&<label className={label}>{accommodation?t.leave:t.returnDate}
       <input type="date" className={field} value={end} min={date||undefined} onChange={e=>setEnd(e.target.value)}/></label>}
     <label className={label}><span className="inline-flex items-center gap-1"><UsersRound size={14} aria-hidden="true"/>{t.people}</span>
      <select className={field} value={travellers} onChange={e=>setTravellers(e.target.value)}>
       {[1,2,3,4,5,6,8,10,12,16,20].map(n=><option key={n} value={n}>{n}</option>)}
      </select></label>
     {accommodation&&<label className={label}>{t.bedrooms}<select className={field} value={rooms} onChange={e=>setRooms(e.target.value)}>
      {[1,2,3,4,5,6,7,8,10,12].map(n=><option key={n} value={n}>{n}</option>)}</select></label>}
     {choice==='yachts'&&<label className={label}>{t.charter}
      <select className={field} value={charter} onChange={e=>setCharter(e.target.value as 'skipper'|'crew')}>
       <option value="skipper">{t.skipper}</option><option value="crew">{t.crew}</option>
      </select></label>}
    </div>
    <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
     <p className="max-w-2xl text-xs leading-5 text-[#637886]"><ShieldCheck size={15} className="me-1 inline align-[-3px]" aria-hidden="true"/>{t.note}</p>
     <Link href={inquiry} className={button}
      onClick={()=>trackConversion('travel_booking_action',{service_id:choice,action:'seo_enquiry',language:locale})}>
      {t.submit}<ArrowRight size={17} aria-hidden="true"/></Link>
    </div>
   </>}
 </section>;
}
