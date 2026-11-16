import {approvedCategorySlugs,approvedDestinationSlugs,destinationBySlug} from './destinations';
import {isEditorialLocale,isLocalizedGuideReviewed} from './localizedGuides';
import {travelHref} from '@/lib/travel/i18n';
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
export function indexedTravelUrls(origin:string){
 return [...destinationBySlug.keys()].flatMap(slug=>(['destinations','hotels'] as const).flatMap(variant=>editorialTravelLocales.filter(locale=>isTravelGuideIndexable(slug,variant,locale)).map(locale=>origin+travelHref(locale,variant+'/'+slug))));
}
