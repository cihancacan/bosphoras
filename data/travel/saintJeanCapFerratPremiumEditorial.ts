import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { saintJeanCapFerratDraftGuide } from './saintJeanCapFerratDraftGuide';
import media from './saintJeanCapFerratMediaCandidates.json';

type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;
 sourcePage?:string;credit?:string;visuallyVerified?:boolean;
 commercialRightsCleared?:boolean;visualQaWarning?:string;frCaption?:string;enCaption?:string};
const approved=(x:Candidate)=>x.status==='candidate_needs_visual_review' &&
 x.visuallyVerified===true && x.commercialRightsCleared===true &&
 !x.visualQaWarning && Boolean(x.localPath?.startsWith('/images/travel/saint-jean-cap-ferrat-premium/')) &&
 Boolean(x.sourcePage?.startsWith('https://'));
const toPhoto=(x:Candidate,area:string):BodrumPremiumPhoto=>({
 src:x.localPath!,
 fr:x.frCaption||'Vue documentée : '+area,
 en:x.enCaption||'Documented photograph: '+area,
 sourcePage:x.sourcePage!,credit:x.credit||'Bosphoras · photographie sourcée'
});
const hotelKeys=['grand-hotel-cap-ferrat','royal-riviera','la-villa-cap-ferrat','brise-marine'] as const;
export const capFerratHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 saintJeanCapFerratDraftGuide.hotels.map((hotel,i)=>[
  hotel.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===hotelKeys[i]&&approved(x)).map(x=>toPhoto(x,hotel.name)),
  credit:hotel.name+' · source documentée',sourcePage:hotel.officialUrl,
  frBest:hotel.frWatch,enBest:hotel.enWatch,frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch}
 ])
);
const areaKeys=['scene-2','scene-5','scene-3','scene-9','scene-6'] as const;
export const capFerratAreaVisuals:(BodrumPremiumPhoto|null)[]=areaKeys.map((key,i)=>{
 const x=(media.destinationScenes as Candidate[]).find(x=>x.key===key);
 return x&&approved(x)?toPhoto(x,saintJeanCapFerratDraftGuide.areas[i].name):null;
});
export const confirmedCapFerratAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approved).map(x=>x.localPath!)
);
