import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {formenteraDraftGuide} from './formenteraDraftGuide';
import {approvedFormenteraPhoto} from './formenteraGuide';
import media from './formenteraMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["five-flowers","gecko","teranka","cala-saona"];
export const formenteraHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(formenteraDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedFormenteraPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-3','scene-4','scene-5','scene-1'];
export const formenteraAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedFormenteraPhoto(x)?photo(x):null;});
export const confirmedFormenteraAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedFormenteraPhoto).map(x=>x.localPath!));
