/** Hoi An #72 honest property-specific hotel galleries: manual visual review, no public image rights. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {hoiAnDraftGuide} from './hoiAnDraftGuide';
import manifest from './hoiAnMediaCandidates.json';
const keys=['fs','namia','anantara','nhaan'] as const;
const frBest=["Pour l'ultra-luxe balnéaire, les grandes villas et la plage Ha My.","Pour l'intimité des villas avec piscine et les soins en bord de rivière.","Pour les suites de charme et la visite à pied de la vieille ville UNESCO.","Pour l'architecture contemporaine de Võ Trọng Nghĩa à Cẩm Thanh."];
const enBest=["For genuine high-end beachfront villas and Ha My Beach.","For intimate private-pool river villas and wellness.","For charming riverside suites and walkable UNESCO Old Town.","For Vo Trong Nghia's modern resort architecture in Cam Thanh."];
const photo=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const hoiAnHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(hoiAnDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===h.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
}]));
export const hoiAnAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-7','scene-3','scene-9','scene-1','scene-8'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);return p?photo(p):null;});
export const confirmedHoiAnPreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl)]);
export const hoiAnSchemaSafePhotos=new Set<string>();
export const hoiAnPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
