/** Hong Kong #95 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {hongKongDraftGuide} from './hongKongDraftGuide';
import manifest from './hongKongReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const hongKongGuide:FeaturedCityGuideData={...hongKongDraftGuide,hero:'scene-1',secondary:'scene-2',photos};
