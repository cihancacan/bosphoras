import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {positanoDraftGuide} from './positanoDraftGuide';
import {approvedPositanoPhoto} from './positanoGuide';
import media from './positanoMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const approved=(x:Candidate):boolean=>approvedPositanoPhoto(x);
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original publisher'});
const keys=["le-sirenuse","hotel-poseidon","villa-treville","il-san-pietro"];
export const positanoHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 positanoDraftGuide.hotels.map((hotel,i)=>[hotel.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approved(x)).map(photo),
 credit:hotel.name+' · original property photos',sourcePage:hotel.officialUrl,
 frBest:hotel.frWatch,enBest:hotel.enWatch,frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch}])
);
const scenes=['scene-1','scene-2','scene-3','scene-4','scene-6'];
export const positanoAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&approved(x)?photo(x):null;});
export const confirmedPositanoAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approved).map(x=>x.localPath!));
