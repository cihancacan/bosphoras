/** Phu Quoc #73: actual hotel photography, owner Preview only. Independent commercial rights not established. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {phuQuocDraftGuide} from './phuQuocDraftGuide';
import manifest from './phuQuocMediaCandidates.json';
const keys=['regent','jw','premier','veranda'] as const;
const frBest=["Pour un séjour contemporain et une suite ou villa sur la côte ouest.","Pour l'architecture spectaculaire de Bill Bensley et la baie de Khem.","Pour les villas familiales privées avec piscine au cap Ong Doi.","Pour une demeure balnéaire intime et les jardins près de Duong Dong."];
const enBest=["For contemporary luxury suites and villas on the west coast.","For Bill Bensley's dramatic architecture and Khem Beach.","For family-friendly private-pool villas on Ong Doi Cape.","For an intimate heritage-inspired house and gardens near Duong Dong."];
const photo=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const phuQuocHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(phuQuocDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===h.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
}]));
export const phuQuocAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-5','scene-8','scene-9','scene-6'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);return p?photo(p):null;});
export const confirmedPhuQuocPreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl)]);
export const phuQuocSchemaSafePhotos=new Set<string>();
export const phuQuocPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
