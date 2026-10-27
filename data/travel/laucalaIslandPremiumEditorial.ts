import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {laucalaIslandDraftGuide} from './laucalaIslandDraftGuide';
import {approvedLaucalaIslandPhoto} from './laucalaIslandGuide';
import media from './laucalaIslandMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["plantation","seagrass","plateau","wai"];
export const laucalaIslandHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(laucalaIslandDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedLaucalaIslandPhoto(x)).map(photo),
 credit:'LAUCALA original publisher · representative island photos only, exact residence not verified',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-8','scene-3','scene-7','scene-6','scene-5'];
export const laucalaIslandAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedLaucalaIslandPhoto(x)?photo(x):null;});
export const confirmedLaucalaIslandAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedLaucalaIslandPhoto).map(x=>x.localPath!));
