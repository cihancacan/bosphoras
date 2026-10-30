/** Los Angeles luxury #58: source-gated city pictures for private owner Preview. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {losAngelesDraftGuide} from './losAngelesDraftGuide';
import manifest from './losAngelesMediaCandidates.json';
export type LACandidate={key:string;localPath?:string;status:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;
 frCaption?:string;enCaption?:string;sha256?:string;bytes?:number;propertyKey?:string;rightsEvidenceType?:string;commercialRightsCleared?:boolean};
export function approvedLACityPhoto(p:LACandidate):boolean{
 return p.status==='source_identified_private_preview' && p.commercialRightsCleared===true
 && p.rightsEvidenceType==='wikimedia_cc_attribution'
 && p.localPath?.startsWith('/images/travel/los-angeles-premium/destination/')===true
 && p.sourcePage?.startsWith('https://commons.wikimedia.org/wiki/File:')===true
 && (p.license?.startsWith('CC BY')===true||p.license==='CC0'||p.license==='Public domain')
 && !!p.credit&&!!p.frCaption&&!!p.enCaption&&!!p.licenseUrl&&p.sha256?.length===64&&(p.bytes||0)>18000;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes as LACandidate[]){
 if(!approvedLACityPhoto(p))continue;
 photos[p.key]={src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,author:p.credit!,license:p.license!,licenseUrl:p.licenseUrl!,sourcePage:p.sourcePage!};
}
export const losAngelesGuide:FeaturedCityGuideData={...losAngelesDraftGuide,photos};
