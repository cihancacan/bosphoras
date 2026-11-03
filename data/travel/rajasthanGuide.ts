/** Rajasthan #78: 9 authentic CC-credited landscapes. Hotel media restricted to owner Preview. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {rajasthanDraftGuide} from './rajasthanDraftGuide';
import manifest from './rajasthanMediaCandidates.json';
const photos: Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
  if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved)continue;
  if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')||!/^CC BY-SA 4\.0$/.test(p.license))continue;
  photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl||'',sourcePage:p.sourcePage};
}
export const rajasthanGuide:FeaturedCityGuideData={...rajasthanDraftGuide,photos};
