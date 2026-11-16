import {approvedCategorySlugs,approvedDestinationSlugs,destinationBySlug} from './destinations';
import {isEditorialLocale,isLocalizedGuideReviewed} from './localizedGuides';
import {travelHref} from '@/lib/travel/i18n';
import {istanbulHotels} from './istanbulFlagship';
export const editorialTravelLocales=['fr','en','ru','ar'] as const;
export type EditorialTravelLocale=typeof editorialTravelLocales[number];
export function isTravelGuideIndexable(slug:string,variant:'destinations'|'hotels',locale:string){
 const destination=destinationBySlug.get(slug);if(!destination||(variant==='hotels'&&!destination.categories.includes('hotels')))return false;
 if(isEditorialLocale(locale))return isLocalizedGuideReviewed(slug,locale);
 return variant==='hotels'?approvedCategorySlugs.has('hotels/'+slug+'/'+locale):approvedDestinationSlugs.has(slug+'/'+locale);
}
export function indexedTravelAlternates(origin:string,slug:string,variant:'destinations'|'hotels'){
 return Object.fromEntries(editorialTravelLocales.filter(l=>isTravelGuideIndexable(slug,variant,l)).map(l=>[l,origin+travelHref(l,variant+'/'+slug)]));
}
export function isTravelCollectionIndexable(path:string,locale:string){
 return (editorialTravelLocales as readonly string[]).includes(locale)&&['','destinations','hotels'].includes(path);
}
export function isIstanbulHotelIndexable(path:string,locale:string){return (locale==='fr'||locale==='en')&&istanbulHotels.some(h=>path==='hotels/istanbul/'+h.id);}
export function indexedTravelUrls(origin:string){
 const guides=[...destinationBySlug.keys()].flatMap(slug=>(['destinations','hotels'] as const).flatMap(variant=>editorialTravelLocales.filter(locale=>isTravelGuideIndexable(slug,variant,locale)).map(locale=>origin+travelHref(locale,variant+'/'+slug))));
 return [...guides,...editorialTravelLocales.flatMap(locale=>['','destinations','hotels'].map(path=>origin+travelHref(locale,path))),...['fr','en'].flatMap(locale=>istanbulHotels.map(h=>origin+travelHref(locale as 'fr'|'en','hotels/istanbul/'+h.id)))];
}
