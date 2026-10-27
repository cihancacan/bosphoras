import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {melidesDraftGuide} from './melidesDraftGuide';
import {approvedMelidesPhoto} from './melidesGuide';
import media from './melidesMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["vermelho","pateos","amala","casavadia"];
export const melidesHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(melidesDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedMelidesPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-3','scene-5','scene-6','scene-9'];
export const melidesAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedMelidesPhoto(x)?photo(x):null;});
export const confirmedMelidesAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedMelidesPhoto).map(x=>x.localPath!));
