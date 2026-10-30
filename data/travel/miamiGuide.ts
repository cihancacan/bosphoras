/** Miami 57th featured luxury guide, owner noindex Preview only.
 * Genuine local CC imagery may be used with attribution.
 * Publisher hotel images have NOT been cleared for commercial release.
 */
import type {FeaturedCityGuideData, FeaturedCityPhoto} from './featuredCityGuides';
import {miamiDraftGuide} from './miamiDraftGuide';
import media from './miamiMediaCandidates.json';

export type MiamiCandidate={key:string;localPath?:string;status:string;
 sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;
 frCaption?:string;enCaption?:string;sha256?:string;bytes?:number;
 propertyKey?:string;rightsEvidenceType?:string;commercialRightsCleared?:boolean};

export function approvedMiamiCityPhoto(p:MiamiCandidate):boolean {
 return p.status==='source_identified_private_preview'
  && p.commercialRightsCleared===true
  && p.rightsEvidenceType==='wikimedia_cc_attribution'
  && p.localPath?.startsWith('/images/travel/miami-premium/destination/')===true
  && !!p.sourcePage?.startsWith('https://commons.wikimedia.org/wiki/File:')
  && (p.license?.startsWith('CC BY')===true || p.license==='CC0'||p.license==='Public domain')
  && !!p.credit && !!p.frCaption && !!p.enCaption && !!p.licenseUrl
  && p.sha256?.length===64 && (p.bytes||0)>16000;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const photo of media.destinationScenes as MiamiCandidate[]) {
 if(!approvedMiamiCityPhoto(photo)) continue;
 photos[photo.key]={src:photo.localPath!,fr:photo.frCaption!,en:photo.enCaption!,
  author:photo.credit!,license:photo.license!,licenseUrl:photo.licenseUrl!,sourcePage:photo.sourcePage!};
}
export const miamiGuide:FeaturedCityGuideData={...miamiDraftGuide,photos};
