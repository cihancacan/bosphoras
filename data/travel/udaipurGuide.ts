/** Udaipur #76: 9 authenticated, credited geographic images; hotel photos only on private noindex preview. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {udaipurDraftGuide} from './udaipurDraftGuide';
import manifest from './udaipurMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const udaipurGuide:FeaturedCityGuideData={...udaipurDraftGuide,photos};
