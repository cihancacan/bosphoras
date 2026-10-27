import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {puntaMitaDraftGuide} from './puntaMitaDraftGuide';
import {approvedPuntaMitaPreviewPhoto} from './puntaMitaGuide';
import media from './puntaMitaMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;license?:string;frCaption?:string;enCaption?:string;sha256?:string;bytes?:number};
const photo=(p:Candidate):BodrumPremiumPhoto=>({src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,credit:p.credit!,sourcePage:p.sourcePage!});
const hotelKeys=['four-seasons','st-regis','conrad','susurros'];
export const puntaMitaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 puntaMitaDraftGuide.hotels.map((h,i)=>[h.name,{
  photos:(media.hotels as Candidate[]).filter(p=>p.propertyKey===hotelKeys[i]&&approvedPuntaMitaPreviewPhoto(p)).map(photo),
  credit:'Named-property publisher images for restricted owner Preview. Independent photographer commercial licence not confirmed.',
  sourcePage:h.officialUrl,frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }])
);
const areaKeys=['scene-1','scene-2','scene-4','scene-3','scene-5'];
export const puntaMitaAreaVisuals:(BodrumPremiumPhoto|null)[]=areaKeys.map(k=>{
 const p=(media.destinationScenes as Candidate[]).find(x=>x.key===k);
 return p&&approvedPuntaMitaPreviewPhoto(p)?photo(p):null;
});
export const confirmedPuntaMitaPreviewAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[])
 .filter(approvedPuntaMitaPreviewPhoto).map(p=>p.localPath!)
);
// Caution: preview asset set does not constitute commercially cleared images.
