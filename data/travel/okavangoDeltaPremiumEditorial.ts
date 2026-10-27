import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {okavangoDeltaDraftGuide} from './okavangoDeltaDraftGuide';
import {previewOkavangoDeltaPhoto} from './okavangoDeltaGuide';
import media from './okavangoDeltaMediaCandidates.json';
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;sha256?:string;bytes?:number};
const render=(p:Candidate):BodrumPremiumPhoto=>({
 src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,
 sourcePage:p.sourcePage!,credit:p.credit||'Lodge image source — rights pending'
});
const propertyKeys=['mombo','jao','sandibe','eagle'];
export const okavangoDeltaHotelEditorial:Record<string,BodrumHotelEditorial>=
 Object.fromEntries(okavangoDeltaDraftGuide.hotels.map((h,i)=>[h.name,{
  photos:(media.hotels as Candidate[]).filter(p=>p.propertyKey===propertyKeys[i]&&previewOkavangoDeltaPhoto(p)).map(render),
  credit:'Hospitality publisher photos for private editorial review. Creator rights are NOT cleared for commercial publication.',
  sourcePage:h.officialUrl,
  frBest:h.frWatch,enBest:h.enWatch,
  frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }]));
const sceneKeys=['scene-1','scene-3','scene-4','scene-5','scene-7'];
export const okavangoDeltaAreaVisuals:(BodrumPremiumPhoto|null)[]=sceneKeys.map(k=>{
 const p=(media.destinationScenes as Candidate[]).find(x=>x.key===k);
 return p&&previewOkavangoDeltaPhoto(p)?render(p):null;
});
export const confirmedOkavangoDeltaPreviewAssets=new Set(
 ([...media.hotels,...media.destinationScenes] as Candidate[])
 .filter(previewOkavangoDeltaPhoto).map(p=>p.localPath!)
);
// Do not treat this preview-only asset set as approval for production publication.
