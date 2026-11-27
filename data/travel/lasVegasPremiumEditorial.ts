/** Las Vegas #90 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {lasVegasDraftGuide} from './lasVegasDraftGuide';
import manifest from './lasVegasReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour le Strip central et les fontaines.','Pour un resort de luxe.','Pour des suites généreuses et une architecture vénitienne.','Pour une architecture contemporaine et un séjour resort.'];
const enBest=['For central Strip access and fountains.','For a luxury resort stay.','For spacious suites and Venetian architecture.','For contemporary design and a resort-led stay.'];
export const lasVegasHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(lasVegasDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const lasVegasAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-8','scene-3','scene-7','scene-14','scene-10'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedLasVegasPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const lasVegasSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const lasVegasPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
