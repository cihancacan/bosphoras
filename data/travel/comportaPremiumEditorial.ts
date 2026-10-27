import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {comportaDraftGuide} from './comportaDraftGuide';
import {approvedComportaPhoto} from './comportaGuide';
import media from './comportaMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["sublime","quinta","spatia","almalusa"];
export const comportaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(comportaDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedComportaPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-3','scene-4','scene-5','scene-8'];
export const comportaAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedComportaPhoto(x)?photo(x):null;});
export const confirmedComportaAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedComportaPhoto).map(x=>x.localPath!));
