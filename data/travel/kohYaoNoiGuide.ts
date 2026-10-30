/** Koh Yao Noi #62 · verified island photography gate for private noindex Preview. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {kohYaoNoiDraftGuide} from './kohYaoNoiDraftGuide';
import manifest from './kohYaoNoiMediaCandidates.json';
export type KohYaoNoiScene = (typeof manifest.destinationScenes)[number];
export type KohYaoNoiHotelImage = (typeof manifest.hotels)[number];
const licensedSource=/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/;
export function approvedKohYaoNoiScene(p:KohYaoNoiScene):boolean{
  return p.rightsEvidenceType==='wikimedia_license_metadata'
  && p.commercialRightsCleared===true
  && licensedSource.test(p.sourcePage)
  && /^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license)
  && p.status==='source_identified_private_preview' && p.visuallyVerified===true
  && p.localPath.startsWith('/images/travel/koh-yao-noi-premium/destination/')
  && p.bytes>17000 && p.sha256.length===64 && !!p.credit && !!p.licenseUrl && !!p.frCaption && !!p.enCaption;
}
export function approvedKohYaoNoiHotelImage(p:KohYaoNoiHotelImage,key:string,property:string):boolean{
  return p.propertyKey===key && p.property===property
    && p.rightsEvidenceType==='hotel_official_publisher_not_licensed'
    && p.commercialRightsCleared===false && p.visuallyVerified===true
    && p.status==='source_identified_private_preview'
    && p.localPath.startsWith('/images/travel/koh-yao-noi-premium/'+key+'/')
    && p.sourcePage.startsWith('https://') && p.sha256.length===64 && p.bytes>17000
    && !!p.credit && !!p.frCaption && !!p.enCaption;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!approvedKohYaoNoiScene(p))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const kohYaoNoiGuide: FeaturedCityGuideData={...kohYaoNoiDraftGuide,photos};
