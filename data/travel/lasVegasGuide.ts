/** Las Vegas #90 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {lasVegasDraftGuide} from './lasVegasDraftGuide';
import manifest from './lasVegasReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const lasVegasGuide:FeaturedCityGuideData={...lasVegasDraftGuide,hero:'scene-2',secondary:'scene-14',photos};
