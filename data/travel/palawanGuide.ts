/** Palawan #66 · remote first-party and Commons photography in PRIVATE Preview only.
 * Sources were fetched and individually SHA-256 hashed in a private acquisition environment.
 * The 21 sources still require human visual and redistribution-rights review before public release.
 */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {palawanDraftGuide} from './palawanDraftGuide';
import scenes from './palawanRemoteScenes.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of scenes){
 if(!p.commercialRightsCleared||!p.downloadUrl.startsWith('https://')||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license))continue;
 photos[p.key]={src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,
   licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const palawanGuide:FeaturedCityGuideData={...palawanDraftGuide,photos};
