/** Osaka #97 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {osakaDraftGuide} from './osakaDraftGuide';
import manifest from './osakaReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const osakaGuide:FeaturedCityGuideData={...osakaDraftGuide,hero:'scene-1',secondary:'scene-5',photos};
