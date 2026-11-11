/** Tangalle #80: photo sources visually matched for owner Preview; hotel marketing rights not cleared for production. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {tangalleDraftGuide} from './tangalleDraftGuide';
import manifest from './tangalleMediaCandidates.json';
const hotelCodes=['aman','anantara','kayaam','buckingham'] as const;
const frBest=[
  "Pour l'architecture épurée, le calme et les suites à bassin privé dans la baie de Godellawela.",
  "Pour un resort avec villas à piscine, restaurants et équipements pour les familles.",
  "Pour une parenthèse ayurvédique intimiste et un séjour consacré au bien-être.",
  "Pour un boutique-hôtel indépendant avec jardins près de la lagune de Rekawa."
];
const enBest=[
  "For understated architecture, tranquil Godellawela and private plunge-pool suites.",
  "For a full-service resort with pool villas, dining and family facilities.",
  "For intimate Ayurveda and a retreat devoted to restorative wellness.",
  "For a garden-set independent boutique stay beside Rekawa lagoon."
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||"Original source",sourcePage:p.sourcePage
});
export const tangalleHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(tangalleDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(hotelCodes[index]+'-')&&p.previewVisualApproved&&p.visuallyVerified&&!!p.sourceResolvedUrl&&!!p.webpSHA256&&!!p.credit).slice(0,3).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const tangalleAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-1','scene-7','scene-4','scene-5','scene-6'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedTangallePreviewAssets=new Set([
 ...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath),
 ...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256&&!!p.credit).map(p=>p.localPath)
]);
export const tangalleSchemaSafePhotos=new Set<string>();
export const tangallePhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
