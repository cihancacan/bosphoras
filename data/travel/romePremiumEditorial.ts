/** Rome #91 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {romeDraftGuide} from './romeDraftGuide';
import manifest from './romeReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour le design italien contemporain.','Pour une oasis de verdure au centre.','Pour la vue au-dessus de Piazza di Spagna.','Pour une adresse classique près de Villa Borghese.'];
const enBest=['For contemporary Italian design.','For a green retreat in the centre.','For views above Piazza di Spagna.','For classic luxury near Villa Borghese.'];
export const romeHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(romeDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const romeAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-9','scene-1','scene-11','scene-10'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedRomePreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const romeSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const romePhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
