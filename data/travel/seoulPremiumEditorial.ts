/** Seoul #98 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {seoulDraftGuide} from './seoulDraftGuide';
import manifest from './seoulReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour les palais et le centre historique.','Pour les panoramas et les loisirs de Jamsil.','Pour le luxe contemporain et les affaires.','Pour le luxe classique et la détente.'];
const enBest=['For palaces and the historic centre.','For skyline views and Jamsil attractions.','For contemporary luxury and business.','For classic luxury and relaxation.'];
export const seoulHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(seoulDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const seoulAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-8','scene-5','scene-10','scene-7','scene-6'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedSeoulPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const seoulSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const seoulPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
