import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { capDAntibesDraftGuide } from './capDAntibesDraftGuide';
import media from './capDAntibesMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;
 credit?:string;frCaption?:string;enCaption?:string;visualQaWarning?:string;
 visuallyVerified?:boolean;commercialRightsCleared?:boolean};
const approved=(x:Candidate)=>x.status==='candidate_needs_visual_review' &&
 x.visuallyVerified===true && x.commercialRightsCleared===true && !x.visualQaWarning &&
 !!x.localPath?.startsWith('/images/travel/cap-dantibes-premium/') &&
 !!x.sourcePage?.startsWith('https://') && !!x.frCaption && !!x.enCaption;
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,
 fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,
 credit:x.credit||'Photographie à créditer'});
const keys=['hotel-du-cap-eden-roc','cap-dantibes-beach-hotel','villa-mirae','hotel-belles-rives'];
export const capDAntibesHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 capDAntibesDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approved(x)).map(photo),
 credit:hotel.name+' · photographie identifiée',sourcePage:hotel.officialUrl,
 frBest:hotel.frWatch,enBest:hotel.enWatch,frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
const scenes=['scene-1','scene-3','scene-4','scene-5','scene-9'];
export const capDAntibesAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(key=>{
 const item=(media.destinationScenes as Candidate[]).find(x=>x.key===key);
 return item&&approved(item)?photo(item):null;
});
export const confirmedCapDAntibesAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approved).map(x=>x.localPath!)
);
