import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {tivatDraftGuide} from './tivatDraftGuide';
import {approvedTivatPhoto} from './tivatGuide';
import media from './tivatMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["quince","siro","chedi","laroche"];
export const tivatHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(tivatDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedTivatPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-3','scene-4','scene-6','scene-7'];
export const tivatAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedTivatPhoto(x)?photo(x):null;});
export const confirmedTivatAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedTivatPhoto).map(x=>x.localPath!));
