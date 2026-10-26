import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {ravelloDraftGuide} from './ravelloDraftGuide';
import {approvedRavelloPhoto} from './ravelloGuide';
import media from './ravelloMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const approved=(x:Candidate)=>approvedRavelloPhoto(x);
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original publisher'});
const keys=["caruso-belmond","palazzo-avino","hotel-villa-cimbrone","palazzo-confalone"];
export const ravelloHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 ravelloDraftGuide.hotels.map((h,i)=>[h.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approved(x)).map(photo),
 credit:h.name+' · source-linked hotel photography',sourcePage:h.officialUrl,
 frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}])
);
const sceneKeys=['scene-4','scene-3','scene-2','scene-6','scene-7'];
export const ravelloAreaVisuals:(BodrumPremiumPhoto|null)[]=sceneKeys.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approved(x)?photo(x):null;});
export const confirmedRavelloAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approved).map(x=>x.localPath!));
