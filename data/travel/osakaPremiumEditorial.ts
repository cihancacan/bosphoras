/** Osaka #97 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {osakaDraftGuide} from './osakaDraftGuide';
import manifest from './osakaReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour les panoramas de Nakanoshima.','Pour le design japonais contemporain.','Pour le luxe classique et les trains.','Pour le design urbain et le shopping.'];
const enBest=['For Nakanoshima views.','For contemporary Japanese design.','For classic luxury and rail connections.','For city design and shopping.'];
export const osakaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(osakaDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const osakaAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-7','scene-5','scene-1','scene-9','scene-8'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedOsakaPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const osakaSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const osakaPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
