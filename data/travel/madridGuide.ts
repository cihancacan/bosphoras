/** Madrid #99 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {madridDraftGuide} from './madridDraftGuide';
import manifest from './madridReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const madridGuide:FeaturedCityGuideData={...madridDraftGuide,hero:'scene-2',secondary:'scene-3',photos};
