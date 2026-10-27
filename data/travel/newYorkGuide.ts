/** New York destination guide, non-indexable owner Preview.
 * Captions are for identified locations, not promised room views or included services.
 * Authentic local CC photographs + source-identified hotel-publisher photographs.
 * Hotel photographs must NOT be represented as commercially licensed.
 */
import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { newYorkDraftGuide } from './newYorkDraftGuide';
import sources from './newYorkMediaCandidates.json';

type Candidate = { key:string; localPath?:string; status:string; sourcePage?:string;
 credit?:string; license?:string; licenseUrl?:string; frCaption?:string; enCaption?:string;
 sha256?:string; bytes?:number; commercialRightsCleared?:boolean; rightsEvidenceType?:string };

export function approvedNewYorkCityPhoto(photo:Candidate):boolean {
 return photo.status==='source_identified_private_preview'
   && photo.commercialRightsCleared===true
   && photo.rightsEvidenceType==='wikimedia_cc_attribution'
   && photo.localPath?.startsWith('/images/travel/new-york-premium/destination/')===true
   && !!photo.sourcePage?.startsWith('https://commons.wikimedia.org/wiki/File:')
   && !!photo.license?.startsWith('CC BY')
   && !!photo.credit && !!photo.frCaption && !!photo.enCaption
   && photo.sha256?.length===64 && (photo.bytes||0)>14000;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of sources.destinationScenes as Candidate[]){
 if(!approvedNewYorkCityPhoto(p)) continue;
 photos[p.key]={
  src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,author:p.credit!,
  license:p.license!,licenseUrl:p.licenseUrl!,sourcePage:p.sourcePage!
 };
}
export const newYorkGuide:FeaturedCityGuideData={...newYorkDraftGuide, photos};
