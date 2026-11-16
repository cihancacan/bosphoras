import labels from './localized/destination-names.json';
import type {EditorialLocale} from './localizedGuides';
export const nativeTravelNames=labels as Record<string,{en:string;ru:string;ar:string;country:Record<'en'|'ru'|'ar',string>}>;
export function nativeTravelName(slug:string,locale:string,fallback:string){return(locale==='ru'||locale==='ar')?nativeTravelNames[slug]?.[locale]||fallback:fallback;}
export function nativeTravelCountry(slug:string,locale:string,fallback:string){return(locale==='ru'||locale==='ar')?nativeTravelNames[slug]?.country[locale]||fallback:fallback;}
export function localizedHotelTitle(slug:string,locale:EditorialLocale,fallback:string){const n=nativeTravelName(slug,locale,fallback);return locale==='ar'?'أفضل الفنادق الفاخرة في '+n:'Роскошные отели — '+n+': выбор и бронирование';}
export function localizedDestinationTitle(slug:string,locale:EditorialLocale,fallback:string){const n=nativeTravelName(slug,locale,fallback);return locale==='ar'?n+': دليل السفر الفاخر والفنادق والتجارب':n+': путеводитель по роскошному отдыху и отелям';}
export function seoSnippet(text:string,max=160){const s=text.replace(/\s+/g,' ').trim();if(s.length<=max)return s;const i=s.lastIndexOf(' ',max-1);return s.slice(0,i>70?i:max-1).replace(/[,:;،؛.]$/,'')+'…';}
