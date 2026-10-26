import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {mykonosDraftGuide} from './mykonosDraftGuide';
import {approvedMykonosPhoto} from './mykonosGuide';
import media from './mykonosMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["kalesma","santa-marina","cavo-tagoo","mykonos-blu"];
export const mykonosHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(mykonosDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedMykonosPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-6','scene-3','scene-4','scene-1','scene-5'];
export const mykonosAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedMykonosPhoto(x)?photo(x):null;});
export const confirmedMykonosAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedMykonosPhoto).map(x=>x.localPath!));
