
import type { BodrumHotelEditorial,BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { lakeComoDraftGuide } from './lakeComoDraftGuide';
import media from './lakeComoMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const approved=(x:Candidate):boolean=>x.status==='candidate_needs_visual_review' && x.visuallyVerified===true && x.commercialRightsCleared===true &&
 !x.visualQaWarning && !!x.localPath?.startsWith('/images/travel/lake-como-premium/') && !!x.sourcePage?.startsWith('https://') &&
 !!x.frCaption && !!x.enCaption;
const photo=(x:Candidate):BodrumPremiumPhoto=>({src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,sourcePage:x.sourcePage!,credit:x.credit||'Source originale'});
const keys=['villa-d-este','grand-hotel-tremezzo','passalacqua','il-sereno'];
export const lakeComoHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 lakeComoDraftGuide.hotels.map((hotel,i)=>[hotel.name,{photos:(media.hotels as Candidate[]).filter(x=>x.propertyKey===keys[i]&&approved(x)).map(photo),
 credit:hotel.name+' · photographies d’origine',sourcePage:hotel.officialUrl,
 frBest:hotel.frWatch,enBest:hotel.enWatch,frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch}])
);
const scenes=['scene-2','scene-9','scene-1','scene-4','scene-5'];
export const lakeComoAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(k=>{
 const item=(media.destinationScenes as Candidate[]).find(x=>x.key===k);
 return item&&approved(item)?photo(item):null;
});
export const confirmedLakeComoAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[]).filter(approved).map(x=>x.localPath!)
);
