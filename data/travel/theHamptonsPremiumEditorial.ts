import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {theHamptonsDraftGuide} from './theHamptonsDraftGuide';
import {approvedTheHamptonsPhoto} from './theHamptonsGuide';
import media from './theHamptonsMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["topping","maidstone","marram","gurneys"];
export const theHamptonsHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(theHamptonsDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedTheHamptonsPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-4','scene-2','scene-5','scene-6','scene-3'];
export const theHamptonsAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedTheHamptonsPhoto(x)?photo(x):null;});
export const confirmedTheHamptonsAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedTheHamptonsPhoto).map(x=>x.localPath!));
