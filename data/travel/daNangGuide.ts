/** Da Nang #71 genuine city scenes licensed by Wikimedia creators, owner-only preview. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {daNangDraftGuide} from './daNangDraftGuide';
import manifest from './daNangMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const daNangGuide:FeaturedCityGuideData={...daNangDraftGuide,photos};
