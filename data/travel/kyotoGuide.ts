/** Kyoto #68 – owner protected noindex, 9 Commons landscapes; publisher hotel rights not cleared. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {kyotoDraftGuide} from './kyotoDraftGuide';
import manifest from './kyotoMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const kyotoGuide:FeaturedCityGuideData={...kyotoDraftGuide,photos};
