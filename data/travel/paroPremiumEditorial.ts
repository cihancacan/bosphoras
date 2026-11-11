/** Paro #81: 9 CC-licensed scenes and 3 authentic hotel photos per property.
 * The Bosphoras site owner explicitly confirmed publication rights for all listed hotel photos on 2026-11-11. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {paroDraftGuide} from './paroDraftGuide';
import manifest from './paroMediaCandidates.json';
const allowUnlicensedOwnerPreview=process.env.VERCEL_ENV==='preview'||(!process.env.VERCEL_ENV&&process.env.NODE_ENV==='development');
const hotelCodes=['como','zhiwaling','spirit','meridien'] as const;
const frBest=[
  "Pour les villas, les vues sur la vallée et l'espace COMO Shambhala sur les hauteurs de Paro.",
  "Pour l'artisanat bhoutanais et les jardins à proximité de Satsam Chorten.",
  "Pour un programme de retraite axé sur le bien-être à Neyphu.",
  "Pour une expérience hôtelière internationale et l'accès au secteur de Shaba."
];
const enBest=[
  "For hillside villas, valley views and COMO Shambhala wellness.",
  "For Bhutanese craftsmanship and Satsam Chorten heritage.",
  "For an immersive wellness retreat in Neyphu Valley.",
  "For full-service international hospitality around Shaba and the river."
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||"Image source",sourcePage:p.sourcePage
});
export const paroHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(paroDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(hotelCodes[index]+'-')&&p.previewVisualApproved&&p.visuallyVerified&&!!p.sourceResolvedUrl&&!!p.webpSHA256&&!!p.credit&&(p.commercialRightsCleared||allowUnlicensedOwnerPreview)).slice(0,3).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const paroAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-3','scene-5','scene-4','scene-8'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedParoPreviewAssets=new Set([
 ...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath),
 ...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&(p.commercialRightsCleared||allowUnlicensedOwnerPreview)&&!!p.webpSHA256&&!!p.credit).map(p=>p.localPath)
]);
export const paroSchemaSafePhotos=new Set<string>(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const paroPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
