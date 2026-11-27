/** Seoul #98 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {seoulDraftGuide} from './seoulDraftGuide';
import manifest from './seoulReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const seoulGuide:FeaturedCityGuideData={...seoulDraftGuide,hero:'scene-1',secondary:'scene-8',photos};
