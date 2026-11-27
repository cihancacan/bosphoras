import Link from 'next/link';
import { destinationBySlug,travelDestinations } from '@/data/travel/destinations';
import { isTravelGuideIndexable } from '@/data/travel/guideIndexation';
import { nativeTravelName,nativeTravelCountry } from '@/data/travel/localizedNames';
import { travelHref,type TravelLocale } from '@/lib/travel/i18n';

const copy={
 tr:{title:'Keşfedilecek diğer destinasyonlar',guide:'Gezi rehberi',hotels:'Otel seçkisi'},
 fr:{title:'Autres destinations à découvrir',guide:'Guide de voyage',hotels:'Sélection d’hôtels'},
 en:{title:'Explore related destinations',guide:'Travel guide',hotels:'Hotel guide'},
 ru:{title:'Другие направления для путешествия',guide:'Путеводитель',hotels:'Подборка отелей'},
 ar:{title:'اكتشف وجهات سفر أخرى',guide:'دليل السفر',hotels:'دليل الفنادق'},
} as const;
export function RelatedTravelGuides({locale,slug}:{locale:Extract<TravelLocale,keyof typeof copy>;slug:string}){
 const current=destinationBySlug.get(slug);if(!current)return null;
 const candidates=travelDestinations.filter(d=>d.slug!==slug&&isTravelGuideIndexable(d.slug,'destinations',locale));
 const sameCountry=candidates.filter(d=>d.country===current.country);
 const sameRegion=candidates.filter(d=>d.country!==current.country&&d.region===current.region);
 const related=[...sameCountry,...sameRegion].slice(0,6);
 if(!related.length)return null;
 const t=copy[locale];
 return <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14" lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
  <h2 className="font-sans text-3xl font-normal text-[#202629]">{t.title}</h2>
  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{related.map(d=>{
   const name=nativeTravelName(d.slug,locale,d.name);
   return <article key={d.slug} className="rounded-xl border border-[#e1e5e5] bg-white p-5">
    <p className="text-xs text-[#53616b]">{nativeTravelCountry(d.slug,locale,d.country)}</p>
    <h3 className="mt-2 text-xl text-[#193344]">{name}</h3>
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
     <Link href={travelHref(locale,'destinations/'+d.slug)} className="underline underline-offset-4" aria-label={t.guide+' · '+name}>{t.guide}</Link>
     {isTravelGuideIndexable(d.slug,'hotels',locale)&&<Link href={travelHref(locale,'hotels/'+d.slug)} className="underline underline-offset-4" aria-label={t.hotels+' · '+name}>{t.hotels}</Link>}
    </div>
   </article>;
  })}</div>
 </section>;
}
