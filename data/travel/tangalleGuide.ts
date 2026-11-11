/** Tangalle #80: approved and attributed destination images only, no substituted photos. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {tangalleDraftGuide} from './tangalleDraftGuide';
import manifest from './tangalleMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for (const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved)continue;
 if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')||!p.license||!p.credit||!p.licenseUrl)continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const tangalleGuide:FeaturedCityGuideData={...tangalleDraftGuide,photos};
