/** Udaipur #76: four property-specific, three original photos each, commercial use not cleared. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {udaipurDraftGuide} from './udaipurDraftGuide';
import manifest from './udaipurMediaCandidates.json';
const keys=['taj','oberoi','leela','raffles'] as const;
const frBest=["Pour séjourner dans le palais de marbre de Jag Niwas, au milieu de Pichola.","Pour les jardins, les coupoles et le grand domaine de la rive ouest.","Pour les terrasses de style Mewar et les vues sur le City Palace.","Pour la retraite d'Udaisagar, entre île privée et aile Lakeshore."];
const enBest=["For a marble island palace in the centre of Lake Pichola.","For formal gardens, domes and a private estate on the western shore.","For Mewar-style terraces and City Palace views across Pichola.","For a Udaisagar retreat split between a private island and Lakeshore."];
const photo=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const udaipurHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(udaipurDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===h.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
}]));
export const udaipurAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-3','scene-4','scene-2','scene-9','scene-6'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);return p?photo(p):null;});
export const confirmedUdaipurPreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath)]);
export const udaipurSchemaSafePhotos=new Set<string>();
export const udaipurPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
