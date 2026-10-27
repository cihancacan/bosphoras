import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {nantucketDraftGuide} from './nantucketDraftGuide';
import {approvedNantucketPhoto} from './nantucketGuide';
import media from './nantucketMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original photographer'});
const keys=["elephant","wauwinet","greydon","nantuckethotel"];
export const nantucketHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(nantucketDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approvedNantucketPhoto(x)).map(photo),
 credit:h.name+' · sourced property photos',sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
const scenes=['scene-2','scene-1','scene-4','scene-3','scene-5'];
export const nantucketAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approvedNantucketPhoto(x)?photo(x):null;});
export const confirmedNantucketAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approvedNantucketPhoto).map(x=>x.localPath!));
