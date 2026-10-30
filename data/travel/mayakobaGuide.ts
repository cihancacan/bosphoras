/** Mayakoba #59: 2026 current resorts, source-labelled private imagery only. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {mayakobaDraftGuide} from './mayakobaDraftGuide';
import manifest from './mayakobaMediaCandidates.json';
export type MayakobaCandidate={key:string;localPath?:string;status:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;
 frCaption?:string;enCaption?:string;sha256?:string;bytes?:number;propertyKey?:string;rightsEvidenceType?:string;commercialRightsCleared?:boolean};
export const approvedMayakobaOwnerPhoto=(p:MayakobaCandidate):boolean=>
 p.status==='source_identified_private_preview'
 && p.rightsEvidenceType==='official_destination_publisher_not_commercially_cleared'
 && p.commercialRightsCleared===false
 && p.localPath?.startsWith('/images/travel/mayakoba-premium/destination/')===true
 && p.sourcePage?.startsWith('https://mayakoba.com/')===true
 && !!p.credit && !!p.frCaption && !!p.enCaption && p.sha256?.length===64 && (p.bytes||0)>18000;
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes as MayakobaCandidate[]){
 if(!approvedMayakobaOwnerPhoto(p))continue;
 photos[p.key]={src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,author:p.credit!,license:p.license||'Publisher private review',licenseUrl:p.sourcePage!,sourcePage:p.sourcePage!};
}
export const mayakobaGuide:FeaturedCityGuideData={...mayakobaDraftGuide,photos};
