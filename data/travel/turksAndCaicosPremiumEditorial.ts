import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {turksAndCaicosDraftGuide} from './turksAndCaicosDraftGuide';
import {approvedTurksAndCaicosPhoto} from './turksAndCaicosGuide';
import media from './turksAndCaicosMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["amanyara","como","shoreclub","wymara"];
export const turksAndCaicosHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(turksAndCaicosDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedTurksAndCaicosPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-2','scene-3','scene-4','scene-5'];
export const turksAndCaicosAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedTurksAndCaicosPhoto(x)?photo(x):null;});
export const confirmedTurksAndCaicosAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedTurksAndCaicosPhoto).map(x=>x.localPath!));
