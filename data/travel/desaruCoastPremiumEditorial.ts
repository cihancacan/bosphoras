/** Desaru Coast #88: verified local imagery and property galleries only. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {desaruCoastDraftGuide} from './desaruCoastDraftGuide';
import manifest from './desaruCoastMedia';
const codes=['mandarin','anantara','westin','hardrock'] as const;
const frBest=['Pour une retraite au cœur de la végétation.','Pour une villa en famille.','Pour un séjour balnéaire et bien-être.','Pour un séjour familial animé.'];
const enBest=['For a secluded tropical retreat.','For a family villa stay.','For a beach and wellness break.','For a lively family getaway.'];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée exact hotel gallery',sourcePage:p.sourcePage});
export const desaruCoastHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(desaruCoastDraftGuide.hotels.map((h,index)=>[
 h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}
]));
export const desaruCoastAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-1','scene-4','scene-5','scene-6'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit&&!!p.webpSHA256);
 return p?photo(p):null;
});
export const confirmedDesaruCoastPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const desaruCoastSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const desaruCoastPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
