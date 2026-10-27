import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {deiaDraftGuide} from './deiaDraftGuide';
import {approvedDeiaPhoto} from './deiaGuide';
import media from './deiaMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["belmond","es-moli","sa-pedrissa","costa-dor"];
export const deiaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(deiaDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedDeiaPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-3','scene-4','scene-6','scene-8'];
export const deiaAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedDeiaPhoto(x)?photo(x):null;});
export const confirmedDeiaAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedDeiaPhoto).map(x=>x.localPath!));
