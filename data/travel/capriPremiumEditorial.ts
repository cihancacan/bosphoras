import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {capriDraftGuide} from './capriDraftGuide';
import {approvedCapriPhoto} from './capriGuide';
import media from './capriMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const valid=(x:Candidate):boolean=>approvedCapriPhoto(x);
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Original publisher'});
const keys=["hotel-la-palma","jk-place-capri","punta-tragara","jumeirah-capri-palace"];
export const capriHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 capriDraftGuide.hotels.map((hotel,i)=>[hotel.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&valid(x)).map(photo),
 credit:hotel.name+' · original photographs',sourcePage:hotel.officialUrl,frBest:hotel.frWatch,enBest:hotel.enWatch,
 frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch}])
);
const sceneKeys=['scene-2','scene-3','scene-4','scene-5','scene-6'];
export const capriAreaVisuals:(BodrumPremiumPhoto|null)[]=sceneKeys.map(k=>{const x=(media.destinationScenes as Candidate[]).find(x=>x.key===k);return x&&valid(x)?photo(x):null;});
export const confirmedCapriAssets=new Set(([...media.hotels,...media.destinationScenes] as Candidate[]).filter(valid).map(x=>x.localPath!));
