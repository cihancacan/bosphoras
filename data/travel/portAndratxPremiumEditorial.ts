import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {portAndratxDraftGuide} from './portAndratxDraftGuide';
import {approvedPortAndratxPhoto} from './portAndratxGuide';
import media from './portAndratxMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["monport","pergola","zafiro","campdemar"];
export const portAndratxHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(portAndratxDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedPortAndratxPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-4','scene-5','scene-6','scene-8'];
export const portAndratxAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedPortAndratxPhoto(x)?photo(x):null;});
export const confirmedPortAndratxAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedPortAndratxPhoto).map(x=>x.localPath!));
