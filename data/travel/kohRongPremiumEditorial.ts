/** Koh Rong #85: 9 real local coastal images and three verified supplier photos per hotel. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {kohRongDraftGuide} from './kohRongDraftGuide';
import manifest from './kohRongMediaCandidates.json';
const codes=['royal','songsaa','longset','anaya'] as const;
const frBest=[
 'Pour une villa cinq étoiles sur une immense plage de sable.',
 'Pour le calme absolu d’une île privée de l’archipel.',
 'Pour une plage facile à vivre et une piscine en quatre étoiles.',
 'Pour le confort contemporain sur Pagoda Beach.'
];
const enBest=[
 'For a five-star villa on an expansive white-sand beach.',
 'For the seclusion of a private island in the archipelago.',
 'For an easygoing four-star beach and pool holiday.',
 'For contemporary comfort at Pagoda Beach.'
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée exact hotel gallery',sourcePage:p.sourcePage});
export const kohRongHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(kohRongDraftGuide.hotels.map((h,index)=>[
 h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}
]));
export const kohRongAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-4','scene-6','scene-5','scene-8'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedKohRongPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const kohRongSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const kohRongPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
