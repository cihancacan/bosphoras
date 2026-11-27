/** Kuala Lumpur #96 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {kualaLumpurDraftGuide} from './kualaLumpurDraftGuide';
import manifest from './kualaLumpurReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=['Pour le luxe classique près du parc KLCC.','Pour le luxe contemporain près des tours.','Pour le design malaisien et le repos.','Pour les vues panoramiques et les affaires.'];
const enBest=['For classic luxury by KLCC Park.','For contemporary luxury near the towers.','For Malaysian design and relaxation.','For panoramic views and business.'];
export const kualaLumpurHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(kualaLumpurDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const kualaLumpurAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-3','scene-5','scene-9','scene-8'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedKualaLumpurPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const kualaLumpurSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const kualaLumpurPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
