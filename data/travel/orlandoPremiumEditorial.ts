/** Orlando #94 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {orlandoDraftGuide} from './orlandoDraftGuide';
import manifest from './orlandoReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour les familles et Disney.','Pour un séjour calme à proximité de Disney.','Pour la détente au bord des lacs.','Pour visiter Universal.'];
const enBest=['For families visiting Disney.','For a quiet stay near Disney.','For lakeside relaxation.','For Universal visits.'];
export const orlandoHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(orlandoDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const orlandoAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-11','scene-7','scene-8',null,'scene-9','scene-1'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedOrlandoPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const orlandoSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const orlandoPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
