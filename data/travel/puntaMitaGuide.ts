import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {puntaMitaDraftGuide} from './puntaMitaDraftGuide';
import media from './puntaMitaMediaCandidates.json';
type Candidate={
 key:string;status:string;localPath?:string;sourcePage?:string;
 credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;
 sha256?:string;bytes?:number;visuallyVerified?:boolean;visualQaWarning?:string
};
export const approvedPuntaMitaPreviewPhoto=(p:Candidate):boolean=>
 p.status==='candidate_needs_visual_review' &&
 p.localPath?.startsWith('/images/travel/punta-mita-premium/')===true &&
 p.sourcePage?.startsWith('https://')===true &&
 !!p.frCaption && !!p.enCaption && !!p.credit && !!p.sha256 && p.sha256.length===64 && (p.bytes||0)>=13000;
// Photographs in this editorial Preview do not establish publisher copyright licence,
// public-commercial publication rights, availability, booking or resort affiliation.
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of media.destinationScenes as Candidate[]){
 if(approvedPuntaMitaPreviewPhoto(p)){
  photos[p.key]={
   src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,author:p.credit!,
   license:p.license||'Reuse subject to source conditions',
   licenseUrl:p.licenseUrl||p.sourcePage!,sourcePage:p.sourcePage!
  };
 }
}
const d=puntaMitaDraftGuide;
export const puntaMitaGuide:FeaturedCityGuideData={
 ...d,areas:d.areas.map(x=>({...x})),experiences:d.experiences.map(x=>({...x})),
 hotels:d.hotels.map(x=>({...x})),checksFr:[...d.checksFr],checksEn:[...d.checksEn],photos
};
