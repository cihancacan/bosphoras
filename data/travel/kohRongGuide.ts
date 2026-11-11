/** Koh Rong #85: attributed Commons shore scenes and exact supplier hotel galleries. */
import type {FeaturedCityGuideData, FeaturedCityPhoto} from './featuredCityGuides';
import {kohRongDraftGuide} from './kohRongDraftGuide';
import manifest from './kohRongMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.credit||!p.license||!p.licenseUrl)continue;
 if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain)/.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const kohRongGuide:FeaturedCityGuideData={...kohRongDraftGuide,photos};
