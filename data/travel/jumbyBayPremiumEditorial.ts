import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {jumbyBayDraftGuide} from './jumbyBayDraftGuide';
import {approvedJumbyBayPhoto} from './jumbyBayGuide';
import media from './jumbyBayMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original property publisher'});
const keys=["garden","pool","jabberwocky","calabash"];
export const jumbyBayHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(jumbyBayDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedJumbyBayPhoto(x)).map(photo),
 credit:'Jumby Bay · accommodation-labelled partner gallery; copyright audit pending',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-1','scene-2','scene-5','scene-8','scene-3'];
export const jumbyBayAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedJumbyBayPhoto(x)?photo(x):null;});
export const confirmedJumbyBayAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedJumbyBayPhoto).map(x=>x.localPath!));
