import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {northIslandSeychellesDraftGuide} from './northIslandSeychellesDraftGuide';
import {approvedNorthIslandSeychellesPhoto} from './northIslandSeychellesGuide';
import media from './northIslandSeychellesMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["beachfront","family","north","exclusive"];
export const northIslandSeychellesHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(northIslandSeychellesDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedNorthIslandSeychellesPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-2','scene-5','scene-8','scene-3'];
export const northIslandSeychellesAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedNorthIslandSeychellesPhoto(x)?photo(x):null;});
export const confirmedNorthIslandSeychellesAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedNorthIslandSeychellesPhoto).map(x=>x.localPath!));
