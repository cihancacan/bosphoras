/** Siem Reap #84: attributed Commons Angkor photography and owner-authorized hotel galleries. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {siemReapDraftGuide} from './siemReapDraftGuide';
import manifest from './siemReapMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.credit||!p.license||!p.licenseUrl)continue;
 if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain)/.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const siemReapGuide:FeaturedCityGuideData={...siemReapDraftGuide,photos};
