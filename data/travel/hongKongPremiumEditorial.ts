/** Hong Kong #95 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {hongKongDraftGuide} from './hongKongDraftGuide';
import manifest from './hongKongReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour le luxe contemporain sur la baie.','Pour Central et la gastronomie.','Pour l’élégance historique.','Pour le luxe classique et les affaires.'];
const enBest=['For contemporary waterfront luxury.','For Central and dining.','For historic elegance.','For classic luxury and business.'];
export const hongKongHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(hongKongDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const hongKongAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-4','scene-1','scene-5','scene-8','scene-6','scene-7'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedHongKongPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const hongKongSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const hongKongPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
