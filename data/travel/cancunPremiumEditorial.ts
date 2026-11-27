/** Cancun #93 — exact-property photos and area views. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {cancunDraftGuide} from './cancunDraftGuide';
import manifest from './cancunReviewedMedia.json';
const rows=[...manifest.destinationScenes,...manifest.hotels];
const ready=(p:typeof rows[number])=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256;
const photo=(p:typeof rows[number]):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const frBest=["Pour l’intimité et le repos.","Pour les couples et le bien-être.","Pour les vacances en famille.","Pour les familles qui recherchent des suites."];
const enBest=["For privacy and relaxation.","For couples and wellness.","For family holidays.","For families looking for suites."];
export const cancunHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(cancunDraftGuide.hotels.map((h,i)=>[h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&ready(p)).map(photo),credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}]));
export const cancunAreaVisuals:(BodrumPremiumPhoto|null)[]=["scene-5","scene-13","scene-2","scene-14",null].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&ready(p));return p?photo(p):null;});
export const confirmedCancunPreviewAssets=new Set(rows.filter(ready).map(p=>p.localPath));
export const cancunSchemaSafePhotos=new Set(manifest.destinationScenes.filter(ready).map(p=>p.localPath));
export const cancunPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(rows.filter(ready).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
