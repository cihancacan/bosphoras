import losAngeles from './localized/los-angeles.json';
import losAngeles from './localized/los-angeles.json';
import miami from './localized/miami.json';
import newYork from './localized/new-york.json';
import newYork from './localized/new-york.json';
import phuket from './localized/phuket.json';
import bali from './localized/bali.json';
import saintTropez from './localized/saint-tropez.json';
import dubai from './localized/dubai.json';
import antalya from './localized/antalya.json';
import bodrum from './localized/bodrum.json';
import paris from './localized/paris.json';
import istanbul from './localized/istanbul.json';
import desaru from './localized/desaru-coast.json';
import ruDrafts from './localized/ru-drafts.json';
import arDrafts from './localized/ar-drafts.json';
import type { FeaturedCityGuideData } from './featuredCityGuides';
import {nativeTravelNames,localizedHotelTitle,localizedDestinationTitle,seoSnippet} from './localizedNames';
export type EditorialLocale='ru'|'ar';
export type LocalizedGuide={
 name:string;country:string;eyebrow:string;heading:string;intro:string;editorial:string;hotelIntro:string;
 areas:string[][];experiences:string[][];checks:string[];hotels:string[][];faq:string[][];
 photoCaptions:string[];hotelCaptionGroups:string[][];
 seoTitle:string;hotelSeoTitle:string;seoDescription:string;
};
export function isEditorialLocale(locale:string):locale is EditorialLocale{return locale==='ru'||locale==='ar';}
const drafts:Record<EditorialLocale,Record<string,LocalizedGuide>>={ru:ruDrafts,ar:arDrafts};
const localized:Record<string,Partial<Record<EditorialLocale,LocalizedGuide>>>={'desaru-coast':desaru,istanbul,paris,bodrum,antalya,dubai,'saint-tropez':saintTropez,bali,phuket,'new-york':newYork,miami,'los-angeles':losAngeles};
export function getLocalizedGuide(slug:string|undefined,locale:string):LocalizedGuide|undefined{
 if(!slug||!isEditorialLocale(locale))return undefined;
 const data=localized[slug]?.[locale]||drafts[locale][slug];if(!data)return undefined;
 const native=nativeTravelNames[slug];if(!native)return data;
 return {...data,name:native[locale],country:native.country[locale],seoTitle:localized[slug]?.[locale]?data.seoTitle:localizedDestinationTitle(slug,locale,data.name),hotelSeoTitle:localized[slug]?.[locale]?data.hotelSeoTitle:localizedHotelTitle(slug,locale,data.name),seoDescription:seoSnippet(data.seoDescription)};
}
// Keep translated drafts out of the sitemap until content and rendering are reviewed.
export const reviewedLocalizedGuides:ReadonlySet<string>=new Set<string>(['desaru-coast/ru','desaru-coast/ar']);
export function isLocalizedGuideReviewed(slug:string,locale:string){return reviewedLocalizedGuides.has(slug+'/'+locale)&&!!getLocalizedGuide(slug,locale);}
export function validateLocalizedGuide(source:FeaturedCityGuideData,data:LocalizedGuide){
 return data.areas.length===source.areas.length&&data.experiences.length===source.experiences.length&&data.hotels.length===source.hotels.length&&data.checks.length===source.checksEn.length&&[data.name,data.country,data.eyebrow,data.heading,data.intro,data.editorial,data.hotelIntro,data.seoTitle,data.hotelSeoTitle,data.seoDescription].every(Boolean);
}
