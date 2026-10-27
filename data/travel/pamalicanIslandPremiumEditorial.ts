import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {pamalicanIslandDraftGuide} from './pamalicanIslandDraftGuide';
import {approvedPamalicanIslandPhoto} from './pamalicanIslandGuide';
import media from './pamalicanIslandMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["beachpool","treetoppool","grand","villas"];
export const pamalicanIslandHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(pamalicanIslandDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedPamalicanIslandPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-1','scene-3','scene-6','scene-7'];
export const pamalicanIslandAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedPamalicanIslandPhoto(x)?photo(x):null;});
export const confirmedPamalicanIslandAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedPamalicanIslandPhoto).map(x=>x.localPath!));
