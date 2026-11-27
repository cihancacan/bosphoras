/** London #89 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {londonDraftGuide} from './londonDraftGuide';
import manifest from './londonReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour les boutiques et le luxe historique de Mayfair.','Pour le théâtre et les séjours de célébration.','Pour le luxe contemporain près de Hyde Park.','Pour les panoramas en hauteur.'];
const enBest=['For classic Mayfair luxury and shopping.','For theatre and celebrations.','For contemporary luxury near Hyde Park.','For high-rise views.'];
export const londonHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(londonDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const londonAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-12','scene-8','scene-4','scene-9','scene-10',null].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedLondonPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const londonSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const londonPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
