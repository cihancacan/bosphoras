/** Barcelona #92 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {barcelonaDraftGuide} from './barcelonaDraftGuide';
import manifest from './barcelonaReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=["Pour le modernisme et le design contemporain.","Pour le séjour en bord de mer.","Pour l’élégance classique de l’Eixample.","Pour le patrimoine architectural."];
const enBest=["For Modernisme and contemporary design.","For a waterfront stay.","For classic Eixample elegance.","For architectural heritage."];
export const barcelonaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(barcelonaDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const barcelonaAreaVisuals:(BodrumPremiumPhoto|null)[]=["scene-2","scene-7","scene-9","scene-10","scene-4"].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedBarcelonaPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const barcelonaSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const barcelonaPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
