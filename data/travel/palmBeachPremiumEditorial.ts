import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {palmBeachDraftGuide} from './palmBeachDraftGuide';
import {approvedPalmBeachPhoto} from './palmBeachGuide';
import media from './palmBeachMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["breakers","brazilian","colony","palmhouse"];
export const palmBeachHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(palmBeachDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedPalmBeachPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-2','scene-4','scene-6','scene-7'];
export const palmBeachAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedPalmBeachPhoto(x)?photo(x):null;});
export const confirmedPalmBeachAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedPalmBeachPhoto).map(x=>x.localPath!));
