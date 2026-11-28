/** Madrid #99 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {madridDraftGuide} from './madridDraftGuide';
import manifest from './madridReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour le patrimoine et les musées du Prado.','Pour les visites à pied depuis Canalejas.','Pour les boutiques de Salamanca et la détente.','Pour le design contemporain et la vie urbaine.'];
const enBest=['For heritage and the Prado museums.','For sightseeing on foot from Canalejas.','For Salamanca boutiques and relaxation.','For contemporary design and city life.'];
export const madridHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(madridDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const madridAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-5','scene-2','scene-3','scene-7','scene-8','scene-9'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedMadridPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const madridSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const madridPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
