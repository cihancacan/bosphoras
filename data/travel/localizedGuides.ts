import ibiza from './localized/ibiza.json';
import antiparos from './localized/antiparos.json';
import mykonos from './localized/mykonos.json';
import ravello from './localized/ravello.json';
import positano from './localized/positano.json';
import capri from './localized/capri.json';
import lakeComo from './localized/lake-como.json';
import capDAntibes from './localized/cap-dantibes.json';
import capFerrat from './localized/saint-jean-cap-ferrat.json';
import monaco from './localized/monaco.json';
import mustique from './localized/mustique.json';
import portoCervo from './localized/porto-cervo.json';
import saintBarthelemy from './localized/saint-barthelemy.json';
import zermatt from './localized/zermatt.json';
import gstaad from './localized/gstaad.json';
import verbier from './localized/verbier.json';
import valDisere from './localized/val-disere.json';
import megeve from './localized/megeve.json';
import courchevel from './localized/courchevel-1850.json';
import losAngeles from './localized/los-angeles.json';
import miami from './localized/miami.json';
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
const localized:Record<string,Partial<Record<EditorialLocale,LocalizedGuide>>>={'desaru-coast':desaru,istanbul,paris,bodrum,antalya,dubai,'saint-tropez':saintTropez,bali,phuket,'new-york':newYork,miami,'los-angeles':losAngeles,'courchevel-1850':courchevel,megeve,'val-disere':valDisere,verbier,gstaad,zermatt,'saint-barthelemy':saintBarthelemy,'porto-cervo':portoCervo,mustique,monaco,'saint-jean-cap-ferrat':capFerrat,'cap-dantibes':capDAntibes,'lake-como':lakeComo,capri,positano,ravello,mykonos,antiparos,ibiza};
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
