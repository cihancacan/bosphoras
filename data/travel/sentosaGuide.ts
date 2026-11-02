/** Sentosa #75 actual CC-attributed Sentosa landscapes and private hotel photos. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {sentosaDraftGuide} from './sentosaDraftGuide';
import manifest from './sentosaMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const sentosaGuide:FeaturedCityGuideData={...sentosaDraftGuide,photos};
