/** Jaipur #77: property-exact hotel photos only if original, license and owner visual review all pass. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {jaipurDraftGuide} from './jaipurDraftGuide';
import manifest from './jaipurMediaCandidates.json';
const hotelCodes=['rambagh','oberoi','raffles','leela'] as const;
const frBest=[
 "Pour un séjour en véritable palais historique proche du centre de Jaipur.",
 "Pour une retraite dans les jardins de Goner Road, à l'est de la ville.",
 "Pour le raffinement d'un palais contemporain à Kukas, au nord de Jaipur.",
 "Pour un grand resort-palais près des collines d'Aravalli."
];
const enBest=[
 "For a genuine historic royal palace close to central Jaipur.",
 "For a landscaped retreat on Goner Road east of Jaipur.",
 "For a meticulously crafted contemporary palace in northern Kukas.",
 "For an expansive palace-style resort near the Aravalli Hills."
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||"Original source",sourcePage:p.sourcePage
});
export const jaipurHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(jaipurDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.key.startsWith(hotelCodes[index]+'-')&&p.previewVisualApproved&&p.visuallyVerified&&!!p.sourceResolvedUrl&&!!p.webpSHA256&&!!p.credit).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const jaipurAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-9','scene-3','scene-5','scene-6','scene-7'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedJaipurPreviewAssets=new Set([
 ...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath),
 ...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256&&!!p.credit).map(p=>p.localPath)
]);
export const jaipurSchemaSafePhotos=new Set<string>();
export const jaipurPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
