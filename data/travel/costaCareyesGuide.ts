import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {costaCareyesDraftGuide} from './costaCareyesDraftGuide';
import media from './costaCareyesMediaCandidates.json';
type Candidate={status:string;visuallyVerified?:boolean;visualQaWarning?:string;localPath?:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;sha256?:string;bytes?:number;key:string};
export const approvedCareyesPreviewPhoto=(p:Candidate):boolean=>
 p.status==='visually_reviewed_private_preview'&&p.visuallyVerified===true&&!p.visualQaWarning&&
 p.localPath?.startsWith('/images/travel/costa-careyes-premium/')===true&&
 p.sourcePage?.startsWith('https://')===true&&
 !!p.frCaption&&!!p.enCaption&&!!p.credit&&p.sha256?.length===64&&(p.bytes||0)>14000;
// Source-identified operator images, only for private owner Preview under noindex.
// This does NOT imply any commercially licensed distribution or booking rights.
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of media.destinationScenes as Candidate[]){
 if(approvedCareyesPreviewPhoto(p))photos[p.key]={
  src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,
  author:p.credit!,license:p.license||'Operator copyright (publication not cleared)',
  licenseUrl:p.licenseUrl||p.sourcePage!,sourcePage:p.sourcePage!
 };
}
const d=costaCareyesDraftGuide;
export const costaCareyesGuide:FeaturedCityGuideData={
 ...d,hotels:d.hotels.map(h=>({...h})),areas:d.areas.map(x=>({...x})),
 experiences:d.experiences.map(x=>({...x})),checksFr:[...d.checksFr],checksEn:[...d.checksEn],photos
};
