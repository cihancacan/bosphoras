/** Luang Prabang #86: 9 real local destination images and three verified supplier photos per hotel. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {luangPrabangDraftGuide} from './luangPrabangDraftGuide';
import manifest from './luangPrabangMediaCandidates.json';
const codes=['luangsay','rosewood','threenagas','avani'] as const;
const frBest=['Pour des suites de caractère et des jardins.','Pour la tranquillité d’une vallée boisée.','Pour les maisons patrimoniales du centre historique.','Pour une piscine en plein centre.'];
const enBest=['For characterful suites and gardens.','For the tranquility of a wooded valley.','For heritage houses in the historic centre.','For a pool in the heart of town.'];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée exact hotel gallery',sourcePage:p.sourcePage});
export const luangPrabangHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(luangPrabangDraftGuide.hotels.map((h,index)=>[
 h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}
]));
export const luangPrabangAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-4','scene-8','scene-6','scene-1','scene-9'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedLuangPrabangPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const luangPrabangSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const luangPrabangPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
