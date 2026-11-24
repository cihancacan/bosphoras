'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BookingComingSoon } from './BookingComingSoon';
import { additionalBookingServicesPaused } from '@/lib/travel/collectionPresentation';
import { ArrowRight, Compass, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { travelHref, type TravelLocale } from '@/lib/travel/i18n';
import { extraDiscoveryCopy, type ExtraDiscoveryLocale } from '@/components/travel/travelDiscoveryExtraCopy';

export type DiscoveryContext='stays'|'flights'|'mobility'|'activities'|'private';
type Choice='hotels'|'villas'|'chalets'|'transfers'|'activities';
type PlaceKey='istanbul'|'bodrum'|'courchevel-1850'|'maldives'|'paris'|'dubai'|'bali'|'saint-tropez'|'antalya'|'porto-cervo';
const places:Record<PlaceKey,{name:string;image:string;copy:Record<Locale,string>}>={
 istanbul:{name:'Istanbul',image:'/images/travel/istanbul/city/ortakoy-bosphorus.webp',copy:{fr:'Le Bosphore, les quartiers historiques et des hôtels remarquables.',en:'Bosphorus views, historic neighbourhoods and remarkable hotels.',ru:'Босфор, исторические кварталы и необычные отели.',ar:'مضيق البوسفور والأحياء التاريخية وفنادق مميزة.'}},
 bodrum:{name:'Bodrum',image:'/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp',copy:{fr:'Criques turquoise, villas en retrait et marinas de la côte égéenne.',en:'Turquoise coves, private villas and Aegean marinas.',ru:'Бирюзовые бухты, уединённые виллы и марины.',ar:'خلجان فيروزية وفلل خاصة ومرافئ بحر إيجة.'}},
 'courchevel-1850':{name:'Courchevel',image:'/images/travel/courchevel-1850-premium/destination/alps-1.webp',copy:{fr:'Des chalets alpins pour profiter pleinement de la montagne.',en:'Mountain chalets and exceptional Alpine escapes.',ru:'Горные шале и прекрасный отдых в Альпах.',ar:'شاليهات جبلية وإقامات رائعة في جبال الألب.'}},
 maldives:{name:'Maldives',image:'/images/travel/maldives-premium/destination/overwater-villas.webp',copy:{fr:'Villas sur pilotis et lagons aux mille nuances de bleu.',en:'Overwater villas and spectacular turquoise lagoons.',ru:'Виллы над водой и бирюзовые лагуны.',ar:'فلل فوق الماء وبحيرات فيروزية ساحرة.'}},
 paris:{name:'Paris',image:'/images/travel/paris-premium/destination/paris-eiffel-seine-wide.webp',copy:{fr:'Musées, belles adresses et promenades au bord de la Seine.',en:'Museums, beautiful addresses and walks along the Seine.',ru:'Музеи, красивые места и прогулки по берегам Сены.',ar:'متاحف وأماكن مميزة ونزهات على ضفاف السين.'}},
 dubai:{name:'Dubai',image:'/images/travel/dubai-premium/destination/west-beach-hero.webp',copy:{fr:'Plages, architecture et expériences urbaines spectaculaires.',en:'Beaches, architecture and remarkable city experiences.',ru:'Пляжи, архитектура и городские впечатления.',ar:'شواطئ وعمارة وتجارب حضرية رائعة.'}},
 bali:{name:'Bali',image:'/images/travel/bali-premium/destination/bali-ubud-tegallalang.webp',copy:{fr:'Terrasses de riz, temples et échappées au vert.',en:'Rice terraces, temples and nature escapes.',ru:'Рисовые террасы, храмы и отдых на природе.',ar:'مدرجات الأرز والمعابد ورحلات وسط الطبيعة.'}},
 'saint-tropez':{name:'Saint-Tropez',image:'/images/travel/saint-tropez-premium/destination/saint-tropez-yachts-bay.webp',copy:{fr:'Le vieux port, les criques et une Riviera à vivre en mer.',en:'Historic harbour, beautiful coves and the Riviera at sea.',ru:'Старинная гавань, бухты и морская Ривьера.',ar:'الميناء القديم والخلجان والريفييرا من البحر.'}},
 antalya:{name:'Antalya',image:'/images/travel/antalya-premium/destination/kemer-panorama.webp',copy:{fr:'Le littoral méditerranéen, entre plages et montagnes.',en:'The Mediterranean coast, between beaches and mountains.',ru:'Средиземноморское побережье, пляжи и горы.',ar:'الساحل المتوسطي بين الشواطئ والجبال.'}},
 'porto-cervo':{name:'Porto Cervo',image:'/images/travel/porto-cervo-premium/destination/porto-cervo-marina.webp',copy:{fr:'Marinas élégantes et eaux émeraude de Sardaigne.',en:'Elegant marinas and Sardinia’s emerald waters.',ru:'Элегантные марины и изумрудное море Сардинии.',ar:'مرافئ أنيقة ومياه سردينيا الزمردية.'}}
};
const sets:Record<DiscoveryContext,PlaceKey[]>={
 stays:['istanbul','bodrum','courchevel-1850','maldives'],
 flights:['paris','dubai','istanbul','bali'],
 mobility:['istanbul','saint-tropez','dubai','antalya'],
 activities:['bali','paris','istanbul','dubai'],
 private:['saint-tropez','porto-cervo','bodrum','courchevel-1850']
};
type Localized={
 eyebrow:string;viewGuide:string;all:string;
 stories:Record<DiscoveryContext,[string,string]>;
 collections:[string,string];collectionNames:[string,string,string];
 collectionDescriptions:[string,string,string];
 guideTitle:string;guideText:string;
 tips:[string,string,string];tipDescriptions:[string,string,string];tipLinks:[string,string,string];
 note:string;
};
const copy:Record<Locale,Localized>={
 fr:{eyebrow:'Inspirations Bosphoras',viewGuide:'Découvrir le guide',all:'Toutes les destinations',
  stories:{stays:['Des séjours qui valent le voyage','Villes iconiques, villas au bord de la mer et chalets à la montagne : laissez-vous inspirer avant de réserver.'],flights:['Votre prochaine destination vous attend','Quelques idées pour choisir où partir avant de consulter les horaires et les itinéraires.'],mobility:['À destination, tout devient plus simple','Voyager, rejoindre son hôtel puis explorer la côte ou la ville à son rythme.'],activities:['Plus qu’un séjour, des expériences','Explorez les quartiers, les paysages et les découvertes locales qui donnent du sens au voyage.'],private:['Des échappées plus exclusives','Entre Riviera, marinas et Alpes, imaginez une arrivée ou un séjour pensé à votre mesure.']},
  collections:['Quel type de séjour vous ressemble ?','Trois inspirations pour trouver la bonne adresse, sans catalogue interminable.'],
  collectionNames:['Hôtels de caractère','Villas au soleil','Chalets de montagne'],
  collectionDescriptions:['Un city-break dans les meilleurs quartiers.','L’intimité d’une villa avec vue.','Le confort après une journée en altitude.'],
  guideTitle:'Préparez votre voyage en toute simplicité',
  guideText:'Nos guides et services vous aident à choisir votre destination, organiser l’arrivée et profiter du séjour.',
  tips:['Choisir sa destination','Organiser son arrivée','Profiter des activités'],
  tipDescriptions:['Découvrez les quartiers et les ambiances dans nos guides détaillés.','Prévoyez votre transfert avant votre arrivée, sans multiplier les démarches.','Repérez les visites et expériences adaptées à votre séjour.'],
  tipLinks:['Explorer les guides','Voir les transferts','Explorer les activités'],
  note:'Sélection éditoriale Bosphoras : aucune promotion, prix ou disponibilité Nuitée n’est présenté comme vérifié.'
 },
 en:{eyebrow:'Bosphoras inspiration',viewGuide:'Explore guide',all:'All destinations',
  stories:{stays:['Places worth planning a stay around','Iconic cities, seaside villas and Alpine chalets: explore before you book.'],flights:['Choose your next destination','A few ideas for deciding where to go before checking flights and schedules.'],mobility:['A smoother arrival and journey','From airport transfers to exploring coastlines and cities at your own pace.'],activities:['Experiences beyond the hotel','Explore neighbourhoods, landscapes and local discoveries that make each journey memorable.'],private:['More exceptional getaways','From the Riviera to Alpine resorts, imagine a journey tailored to your plans.']},
  collections:['What kind of stay feels right?','Three simple ways to discover your next address.'],
  collectionNames:['City hotels','Sunlit villas','Mountain chalets'],
  collectionDescriptions:['City escapes in remarkable neighbourhoods.','Private stays with beautiful views.','Comfort after a day in the mountains.'],
  guideTitle:'Plan your trip, without the complication',
  guideText:'Our guides and services help you choose a destination, plan your arrival and enjoy your stay.',
  tips:['Find your destination','Plan your arrival','Explore experiences'],
  tipDescriptions:['Explore neighbourhoods and travel ideas in our destination guides.','Arrange your transfer ahead of arrival, with fewer steps.','Discover visits and experiences that fit your plans.'],
  tipLinks:['Explore guides','View transfers','Explore activities'],
  note:'Bosphoras editorial selection: no unverified Nuitée prices, discounts or availability are shown.'
 },
 ru:{eyebrow:'Идеи от Bosphoras',viewGuide:'Смотреть гид',all:'Все направления',
  stories:{stays:['Направления для прекрасного отдыха','Города, виллы у моря и шале в Альпах: выбирайте место до бронирования.'],flights:['Куда отправиться дальше?','Идеи направлений перед выбором перелёта и расписания.'],mobility:['Комфортное прибытие и поездка','От аэропорта до побережья и городских кварталов — путешествуйте удобно.'],activities:['Впечатления за пределами отеля','Узнайте районы, пейзажи и местную культуру каждого направления.'],private:['Особенные путешествия','От Ривьеры до Альп — вдохновение для индивидуального путешествия.']},
  collections:['Какой отдых вам подходит?','Три идеи, чтобы найти подходящее размещение.'],
  collectionNames:['Городские отели','Виллы у моря','Горные шале'],
  collectionDescriptions:['Красивые отели в интересных районах.','Уединённый отдых с видом.','Комфорт после дня в горах.'],
  guideTitle:'Планируйте путешествие легко',guideText:'Наши гиды помогут выбрать место, организовать прибытие и провести время с удовольствием.',
  tips:['Выберите направление','Организуйте прибытие','Найдите впечатления'],
  tipDescriptions:['Читайте о районах и направлениях в наших гидах.','Закажите трансфер заранее и упростите прибытие.','Узнайте, что можно посетить во время поездки.'],
  tipLinks:['Открыть гиды','Смотреть трансферы','Смотреть активности'],
  note:'Редакционная подборка Bosphoras: цены, скидки и наличие от Nuitée не заявляются как подтверждённые.'
 },
 ar:{eyebrow:'إلهام من Bosphoras',viewGuide:'اكتشف الدليل',all:'كل الوجهات',
  stories:{stays:['إقامات تستحق السفر من أجلها','مدن مميزة وفلل على البحر وشاليهات جبلية: استلهم أفكار رحلتك قبل الحجز.'],flights:['اختر وجهتك التالية','أفكار للوجهات قبل مقارنة الرحلات والمواعيد.'],mobility:['وصول وتنقل أكثر راحة','من المطار إلى الساحل والمدينة، تنقل بسهولة خلال رحلتك.'],activities:['تجارب تتجاوز الفندق','اكتشف الأحياء والطبيعة والثقافة المحلية التي تميز كل وجهة.'],private:['رحلات أكثر خصوصية','من الريفييرا إلى جبال الألب، استلهم أفكار رحلة مصممة لك.']},
  collections:['ما نوع الإقامة الذي يناسبك؟','ثلاث أفكار بسيطة لاختيار إقامتك القادمة.'],
  collectionNames:['فنادق المدن','فلل مشمسة','شاليهات جبلية'],
  collectionDescriptions:['فنادق جميلة في أحياء مميزة.','إقامات خاصة بإطلالات رائعة.','الراحة بعد يوم في الجبال.'],
  guideTitle:'خطط لرحلتك بسهولة',guideText:'تساعدك أدلتنا وخدماتنا على اختيار الوجهة وتنظيم الوصول والاستمتاع بالإقامة.',
  tips:['اختر الوجهة','نظم وصولك','استكشف التجارب'],
  tipDescriptions:['تعرف على الأحياء والوجهات في أدلتنا.','رتب خدمة النقل مسبقاً للوصول بسهولة.','اكتشف الزيارات والأنشطة المناسبة لرحلتك.'],
  tipLinks:['تصفح الأدلة','خدمات النقل','استكشف الأنشطة'],
  note:'هذه توصيات تحريرية من Bosphoras، وليست أسعاراً أو خصومات أو توافراً مؤكداً من Nuitée.'
 }
};
// Da Nang featured guide hero (scene-1, My Khe Beach).
// Source: Wikimedia Commons; credit is displayed under the collection cards.
const daNangHeroImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/My_Khe_Beach%2C_Da_Nang%2C_Vietnam.jpg/1280px-My_Khe_Beach%2C_Da_Nang%2C_Vietnam.jpg';
const collectionImages=[
 '/images/travel/paris-premium/destination/paris-pont-alexandre.webp',
 daNangHeroImage,
 '/images/travel/courchevel-1850-premium/destination/alps-3.webp'
];
export function TravelDiscoverySections({locale,context,onSelect}:{
 locale:TravelLocale;context:DiscoveryContext;onSelect:(service:Choice)=>void;
}){
 const baseLocale:Locale=(locale==='fr'||locale==='en'||locale==='ru'||locale==='ar')?locale:'en';
 const additional=(extraDiscoveryCopy as Partial<Record<TravelLocale,(typeof extraDiscoveryCopy)[ExtraDiscoveryLocale]>>)[locale];
 const t=additional||copy[baseLocale];
 const story=t.stories[context];
 const href=(slug:string)=>travelHref(locale,'destinations/'+slug);
 function select(service:Choice){
   onSelect(service);
   document.getElementById('private-travel-top')?.scrollIntoView({behavior:'smooth',block:'start'});
 }
 return <>
  <section className="bg-white py-11 md:py-16" aria-labelledby="travel-stories-title">
   <div className="container-editorial">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
     <div className="max-w-[750px]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#577b91]">{t.eyebrow}</p>
      <h2 id="travel-stories-title" className="mt-2 text-2xl font-semibold text-[#193748] md:text-[2rem]">{story[0]}</h2>
      <p className="mt-3 text-sm leading-6 text-[#5c7180]">{story[1]}</p>
     </div>
     <Link href={travelHref(locale,'destinations')} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#006da5] underline underline-offset-4">{t.all}<ArrowRight size={16}/></Link>
    </div>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
     {sets[context].map(slug=>{
      const p=places[slug];
      return <Link key={slug} href={href(slug)} className="group min-w-0 overflow-hidden rounded-2xl border border-[#e4ebef] bg-white shadow-[0_5px_24px_rgba(20,49,70,0.04)] hover:shadow-[0_12px_30px_rgba(20,49,70,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071ad]">
       <div className="relative h-[150px] overflow-hidden bg-[#e2edf2] sm:h-[185px]">
        <Image src={p.image} alt={p.name} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-[1.035]"/>
       </div>
       <div className="p-3.5 md:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-[#748b99]">{t.eyebrow}</p>
        <h3 className="mt-1 text-base font-semibold text-[#203f50] md:text-lg">{p.name}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#5f7380] md:text-sm">{additional?additional.scenes[slug]:p.copy[baseLocale]}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0073a9] md:text-sm">{t.viewGuide}<ArrowRight size={14}/></span>
       </div>
      </Link>;
     })}
    </div>
    <p className="mt-5 text-[11px] leading-5 text-[#7b8c95]"><ShieldCheck size={14} className="me-1 inline align-[-3px]"/>{t.note}</p>
   </div>
  </section>
  <section className="bg-[#f3f7f9] py-11 md:py-16" aria-labelledby="travel-collections-title">
   <div className="container-editorial">
    <h2 id="travel-collections-title" className="text-2xl font-semibold text-[#193748] md:text-[2rem]">{t.collections[0]}</h2>
    <p className="mt-3 text-sm leading-6 text-[#617582]">{t.collections[1]}</p>
    <div className="mt-7 grid gap-4 sm:grid-cols-3">
     {(['hotels','villas','chalets'] as const).map((id,i)=><button key={id} type="button" disabled={additionalBookingServicesPaused&&id!=='hotels'} onClick={()=>select(id)}
       className="group overflow-hidden rounded-2xl bg-white text-start shadow-[0_5px_24px_rgba(20,49,70,0.05)] enabled:hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0071ad]">
       <div className="relative h-[190px] overflow-hidden bg-[#dfeaf0]">
        {i===1 ? (
         <div role="img" aria-label="Plage My Khe à Da Nang, Vietnam" className="h-full w-full bg-cover bg-center transition-transform duration-500 motion-reduce:transform-none group-hover:scale-[1.035]"
          style={{backgroundImage:`url("${daNangHeroImage}")`}}/>
        ) : (
         <Image src={collectionImages[i]} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-[1.035]"/>
        )}
       </div>
       <span className="flex items-center justify-between gap-3 p-5">
        <span><span className="block text-base font-semibold text-[#203e4f]">{t.collectionNames[i]}</span><span className="mt-2 block text-sm leading-6 text-[#647987]">{t.collectionDescriptions[i]}</span></span>
        {additionalBookingServicesPaused&&id!=='hotels' ? <BookingComingSoon locale={locale}/> : <ArrowRight size={19} className="shrink-0 text-[#0073a9]"/>}
       </span>
      </button>)}
    </div>
    <p className="mt-3 text-[11px] leading-5 text-[#607583]">
      {t.collectionNames[1]} :
      {' '}<a href="https://commons.wikimedia.org/wiki/File:My_Khe_Beach,_Da_Nang,_Vietnam.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">. Ray in Manila</a>
      {' · '}<a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">CC BY 2.0</a>{' · '}{locale==='fr'?'Recadrée':locale==='ru'?'Кадрировано':locale==='ar'?'تم اقتصاص الصورة':'Cropped'}.
    </p>
   </div>
  </section>
  <section className="bg-white py-11 md:py-16" aria-labelledby="travel-guide-tips-title">
   <div className="container-editorial">
    <h2 id="travel-guide-tips-title" className="text-2xl font-semibold text-[#193748] md:text-[2rem]">{t.guideTitle}</h2>
    <p className="mt-3 max-w-3xl text-sm leading-6 text-[#607583]">{t.guideText}</p>
    <div className="mt-7 grid gap-3 md:grid-cols-3 md:gap-5">
     {t.tips.map((title,i)=><div key={i} className="flex flex-col rounded-2xl border border-[#e1e9ee] bg-[#fbfcfd] p-5 md:p-6">
      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9f4f9] text-[#0875a4]">
       {i===0?<Compass size={20}/>:i===1?<MapPin size={20}/>:<Sparkles size={20}/>}
      </span>
      <h3 className="text-base font-semibold text-[#203b4b]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#627783]">{t.tipDescriptions[i]}</p>
      {i===0?<Link href={travelHref(locale,'destinations')} className="mt-4 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-[#0074aa]">{t.tipLinks[i]}<ArrowRight size={15}/></Link>:
       additionalBookingServicesPaused ? <div className="mt-4 self-start"><BookingComingSoon locale={locale}/></div> :
       <button type="button" onClick={()=>select(i===1?'transfers':'activities')} className="mt-4 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-[#0074aa]">{t.tipLinks[i]}<ArrowRight size={15}/></button>}
     </div>)}
    </div>
   </div>
  </section>
 </>;
}
