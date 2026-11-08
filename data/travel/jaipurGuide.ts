/** Jaipur #77: no unverified images. Geography and rights must pass private-preview gates. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {jaipurDraftGuide} from './jaipurDraftGuide';
import manifest from './jaipurMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for (const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved)continue;
 if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')||!p.license||!p.credit||!p.licenseUrl)continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const jaipurGuide:FeaturedCityGuideData={...jaipurDraftGuide,photos};
