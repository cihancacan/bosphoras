/** Bangkok #63 — independently sourced city pictures and protected hotel-media reviewer. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {bangkokDraftGuide} from './bangkokDraftGuide';
import manifest from './bangkokMediaCandidates.json';
export type BangkokScene=(typeof manifest.destinationScenes)[number];
export type BangkokHotelImage=(typeof manifest.hotels)[number];
export function approvedBangkokScene(p:BangkokScene):boolean{
 return p.rightsEvidenceType==='wikimedia_license_metadata'
 && p.commercialRightsCleared===true
 && /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage)
 && /^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license)
 && p.visuallyVerified===true && p.status==='source_identified_private_preview'
 && p.localPath.startsWith('/images/travel/bangkok-premium/destination/')
 && p.sha256.length===64 && p.bytes>17000 && !!p.credit && !!p.licenseUrl
 && !!p.frCaption && !!p.enCaption;
}
export function approvedBangkokHotelImage(p:BangkokHotelImage,key:string,property:string):boolean{
 return p.propertyKey===key && p.property===property
 && p.rightsEvidenceType==='hotel_official_publisher_not_licensed'
 && p.commercialRightsCleared===false
 && p.visuallyVerified===true && p.status==='source_identified_private_preview'
 && p.localPath.startsWith('/images/travel/bangkok-premium/'+key+'/')
 && p.sourcePage.startsWith('https://')
 && p.sha256.length===64 && p.bytes>17000
 && !!p.credit && !!p.frCaption && !!p.enCaption;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!approvedBangkokScene(p))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,
    licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const bangkokGuide:FeaturedCityGuideData={...bangkokDraftGuide,photos};
