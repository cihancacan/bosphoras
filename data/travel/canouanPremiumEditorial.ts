import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {canouanDraftGuide} from './canouanDraftGuide';
import {approvedCanouanPhoto} from './canouanGuide';
import media from './canouanMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["mandarin","soho","bigblue","silverturtle"];
export const canouanHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(canouanDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedCanouanPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-5','scene-1','scene-8','scene-6'];
export const canouanAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedCanouanPhoto(x)?photo(x):null;});
export const confirmedCanouanAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedCanouanPhoto).map(x=>x.localPath!));
