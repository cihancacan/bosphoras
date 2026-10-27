import type {FeaturedCityGuideData, FeaturedCityPhoto} from './featuredCityGuides';
import {okavangoDeltaDraftGuide} from './okavangoDeltaDraftGuide';
import media from './okavangoDeltaMediaCandidates.json';
type Candidate={
 key:string;status:string;localPath?:string;sourcePage?:string;
 credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;
 sha256?:string;bytes?:number;propertyKey?:string;rightsEvidenceType?:string;
};
const isPreviewPhoto=(p:Candidate):boolean=>
 p.status==='candidate_needs_visual_review' &&
 Boolean(p.localPath?.startsWith('/images/travel/okavango-delta-premium/')) &&
 Boolean(p.sourcePage?.startsWith('https://')) &&
 Boolean(p.frCaption&&p.enCaption&&p.sha256?.length===64&&(p.bytes||0)>=16000);
// REVIEW GATE: The private Preview can show sourced candidate photographs without
// representing a photographer's commercial licence or final image-by-image approval.
// This does NOT permit production/public-commercial publication.
export const previewOkavangoDeltaPhoto=isPreviewPhoto;
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of media.destinationScenes as Candidate[]){
 if(isPreviewPhoto(p)) photos[p.key]={
  src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,
  author:p.credit||'Wikimedia Commons contributor',license:p.license||'CC licence pending audit',
  licenseUrl:p.licenseUrl||p.sourcePage!,sourcePage:p.sourcePage!
 };
}
const g=okavangoDeltaDraftGuide;
export const okavangoDeltaGuide:FeaturedCityGuideData={
 ...g,areas:g.areas.map(a=>({...a})),experiences:g.experiences.map(a=>({...a})),
 hotels:g.hotels.map(h=>({...h})),checksFr:[...g.checksFr],checksEn:[...g.checksEn],photos
};
