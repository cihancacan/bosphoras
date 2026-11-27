/** Orlando #94 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {orlandoDraftGuide} from './orlandoDraftGuide';
import manifest from './orlandoReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const orlandoGuide:FeaturedCityGuideData={...orlandoDraftGuide,hero:'scene-11',secondary:'scene-3',photos};
