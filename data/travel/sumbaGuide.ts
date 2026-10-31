/** Sumba #65 · sourced images, author/license attribution and private staging gate. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {sumbaDraftGuide} from './sumbaDraftGuide';
import manifest from './sumbaMediaCandidates.json';
export type SumbaScene=(typeof manifest.destinationScenes)[number];
export type SumbaHotelImage=(typeof manifest.hotels)[number];
export function approvedSumbaScene(p:SumbaScene):boolean{
 return p.rightsEvidenceType==='wikimedia_license_metadata'
 && p.commercialRightsCleared===true
 && /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage)
 && /^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license)
 && p.visuallyVerified===true && p.status==='source_identified_private_preview'
 && p.localPath.startsWith('/images/travel/sumba-premium/destination/')
 && p.sha256.length===64 && p.bytes>17000 && !!p.credit && !!p.licenseUrl
 && !!p.frCaption && !!p.enCaption;
}
export function approvedSumbaHotelImage(p:SumbaHotelImage,key:string,property:string):boolean{
 return p.propertyKey===key && p.property===property
 && p.rightsEvidenceType==='hotel_official_publisher_not_licensed'
 && p.commercialRightsCleared===false
 && p.visuallyVerified===true && p.status==='source_identified_private_preview'
 && p.localPath.startsWith('/images/travel/sumba-premium/'+key+'/')
 && p.sourcePage.startsWith('https://')
 && p.sha256.length===64 && p.bytes>17000 && !!p.credit && !!p.frCaption && !!p.enCaption;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!approvedSumbaScene(p))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,
  licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const sumbaGuide:FeaturedCityGuideData={...sumbaDraftGuide,photos};
