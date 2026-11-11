/** Gangtey #83: 9 CC scenery and 3 exact-property Nuitée photos per hotel. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {gangteyDraftGuide} from './gangteyDraftGuide';
import manifest from './gangteyMediaCandidates.json';
const codes=['taj','tent','kichu','pinewood'] as const;
const frBest=[
 'Pour un séjour cinq étoiles, spa et piscine intérieure face à la vallée.',
 'Pour les tentes chauffées au cœur des prairies de Phobjikha.',
 'Pour une atmosphère traditionnelle de vallée et des chambres boisées.',
 'Pour un séjour sobre et calme, sans services de palace.'
];
const enBest=[
 'For a five-star stay, spa and indoor pool by the valley.',
 'For heated tents amid Phobjikha meadows.',
 'For a traditional valley atmosphere and timber-clad rooms.',
 'For a simple, quiet base rather than palace facilities.'
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée property gallery',sourcePage:p.sourcePage});
export const gangteyHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(gangteyDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const gangteyAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-3','scene-2','scene-5','scene-4','scene-9'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedGangteyPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const gangteySchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const gangteyPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
