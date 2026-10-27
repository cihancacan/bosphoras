import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {neckerIslandDraftGuide} from './neckerIslandDraftGuide';
import {approvedNeckerIslandPhoto} from './neckerIslandGuide';
import media from './neckerIslandMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["great","hi","lo","temple"];
export const neckerIslandHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(neckerIslandDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedNeckerIslandPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-6','scene-2','scene-1','scene-7','scene-5'];
export const neckerIslandAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedNeckerIslandPhoto(x)?photo(x):null;});
export const confirmedNeckerIslandAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedNeckerIslandPhoto).map(x=>x.localPath!));
