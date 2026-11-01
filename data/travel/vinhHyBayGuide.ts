/** Vinh Hy Bay #70 four real lodging tiers, nine copyright-attributed Commons locations. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {vinhHyBayDraftGuide} from './vinhHyBayDraftGuide';
import manifest from './vinhHyBayMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const vinhHyBayGuide:FeaturedCityGuideData={...vinhHyBayDraftGuide,photos};
