/** Langkawi #87: 9 real local destination images and three verified supplier photos per hotel. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {langkawiDraftGuide} from './langkawiDraftGuide';
import manifest from './langkawiMediaCandidates.json';
const codes=['datai','fourseasons','ritz','stregis'] as const;
const frBest=['Pour un séjour au cœur de la forêt tropicale.','Pour une grande plage et les villas familiales.','Pour une baie abritée et les pavillons au-dessus de l’eau.','Pour les suites et le panorama sur la mer.'];
const enBest=['For a stay immersed in the rainforest.','For a broad beach and family villas.','For a sheltered bay and overwater pavilions.','For suites and sweeping sea views.'];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée exact hotel gallery',sourcePage:p.sourcePage});
export const langkawiHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(langkawiDraftGuide.hotels.map((h,index)=>[
 h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}
]));
export const langkawiAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-9','scene-5','scene-3','scene-4','scene-8'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedLangkawiPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const langkawiSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const langkawiPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
