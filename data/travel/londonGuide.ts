/** London #89 — reviewed assets for preview only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {londonDraftGuide} from './londonDraftGuide';
import manifest from './londonReviewedMedia.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes)if(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.webpSHA256)photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
export const londonGuide:FeaturedCityGuideData={...londonDraftGuide,hero:'scene-4',secondary:'scene-6',photos};
