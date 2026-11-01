/** Hakone #69: source-attributed Commons vistas, noindex and four verified luxury ryokans. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {hakoneDraftGuide} from './hakoneDraftGuide';
import manifest from './hakoneMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const hakoneGuide:FeaturedCityGuideData={...hakoneDraftGuide,photos};
