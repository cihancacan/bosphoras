import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {costaCareyesDraftGuide} from './costaCareyesDraftGuide';
import {approvedCareyesPreviewPhoto} from './costaCareyesGuide';
import media from './costaCareyesMediaCandidates.json';
type Candidate={key:string;propertyKey?:string|null;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;status:string;visuallyVerified?:boolean;visualQaWarning?:string;sha256?:string;bytes?:number};
const photo=(p:Candidate):BodrumPremiumPhoto=>({src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,credit:p.credit||'Careyes operator publisher, rights pending',sourcePage:p.sourcePage!});
const keys=['sol','carioca','club','bungalow'];
export const costaCareyesHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 costaCareyesDraftGuide.hotels.map((h,i)=>[h.name,{
  photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedCareyesPreviewPhoto(x)).map(photo),
  sourcePage:h.officialUrl,
  credit:'Careyes official photography for owner-only nonindexed Preview; commercial photographer rights not cleared',
  frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }]));
const areas=['scene-2','scene-3','scene-4','scene-5','scene-1'];
export const costaCareyesAreaVisuals:(BodrumPremiumPhoto|null)[]=areas.map(k=>{
 const p=(media.destinationScenes as Candidate[]).find(x=>x.key===k);
 return p&&approvedCareyesPreviewPhoto(p)?photo(p):null;
});
export const confirmedCostaCareyesPreviewAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[])
 .filter(approvedCareyesPreviewPhoto).map(x=>x.localPath!)
);
