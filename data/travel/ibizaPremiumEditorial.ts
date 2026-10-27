import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {ibizaDraftGuide} from './ibizaDraftGuide';
import {approvedIbizaPhoto} from './ibizaGuide';
import media from './ibizaMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original publisher'});
const keys=['six-senses-ibiza','nobu-ibiza-bay','7pines-resort-ibiza','the-standard-ibiza'];
export const ibizaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 ibizaDraftGuide.hotels.map((h,i)=>[h.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedIbizaPhoto(x)).map(photo),
 credit:h.name+' · original property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}])
);
const scenes=['scene-1','scene-3','scene-4','scene-5','scene-8'];
export const ibizaAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedIbizaPhoto(x)?photo(x):null;});
export const confirmedIbizaAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedIbizaPhoto).map(x=>x.localPath!));
