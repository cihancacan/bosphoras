import desaru from './localized/desaru-coast.json';
import ruDrafts from './localized/ru-drafts.json';
import arDrafts from './localized/ar-drafts.json';
import type { FeaturedCityGuideData } from './featuredCityGuides';
export type EditorialLocale='ru'|'ar';
export type LocalizedGuide={
 name:string;country:string;eyebrow:string;heading:string;intro:string;editorial:string;hotelIntro:string;
 areas:string[][];experiences:string[][];checks:string[];hotels:string[][];faq:string[][];
 photoCaptions:string[];hotelCaptionGroups:string[][];
 seoTitle:string;hotelSeoTitle:string;seoDescription:string;
};
export function isEditorialLocale(locale:string):locale is EditorialLocale{return locale==='ru'||locale==='ar';}
const drafts:Record<EditorialLocale,Record<string,LocalizedGuide>>={ru:ruDrafts,ar:arDrafts};
const localized:Record<string,Partial<Record<EditorialLocale,LocalizedGuide>>>={'desaru-coast':desaru};
export function getLocalizedGuide(slug:string|undefined,locale:string):LocalizedGuide|undefined{
 return slug&&isEditorialLocale(locale)?(localized[slug]?.[locale]||drafts[locale][slug]):undefined;
}
// Keep translated drafts out of the sitemap until content and rendering are reviewed.
export const reviewedLocalizedGuides:ReadonlySet<string>=new Set<string>();
export function isLocalizedGuideReviewed(slug:string,locale:string){return reviewedLocalizedGuides.has(slug+'/'+locale)&&!!getLocalizedGuide(slug,locale);}
export function validateLocalizedGuide(source:FeaturedCityGuideData,data:LocalizedGuide){
 return data.areas.length===source.areas.length&&data.experiences.length===source.experiences.length&&data.hotels.length===source.hotels.length&&data.checks.length===source.checksEn.length&&[data.name,data.country,data.eyebrow,data.heading,data.intro,data.editorial,data.hotelIntro,data.seoTitle,data.hotelSeoTitle,data.seoDescription].every(Boolean);
}
