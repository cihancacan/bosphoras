/** Da Nang #71: fail-closed private preview galleries for genuine, manually inspected hotel photographs. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {daNangDraftGuide} from './daNangDraftGuide';
import manifest from './daNangMediaCandidates.json';
const keys=['inter','tia','hyatt','naman'] as const;
const frBest=["Pour la jungle privée de Sơn Trà, les suites et La Maison 1888.","Pour les villas avec piscines et une retraite de bien-être intégrée.","Pour les familles, les résidences et les piscines de Non Nuoc.","Pour l'architecture de bambou et une parenthèse spa contemporaine."];
const enBest=["For Son Tra forest seclusion, imaginative suites and La Maison 1888.","For private-pool villas and integrated, structured wellness.","For family residences and the extensive pools of Non Nuoc.","For bamboo-led architecture, beachfront calm and modern spa."];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const daNangHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(daNangDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===hotel.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(toPhoto),
 credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
 frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
}]));
export const daNangAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-6','scene-1','scene-3','scene-2','scene-4'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedDaNangPreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared).map(p=>p.publicPreviewUrl),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl)]);
export const daNangSchemaSafePhotos=new Set<string>();
export const daNangPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
