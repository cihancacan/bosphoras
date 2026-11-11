/** Siem Reap #84: verified exact-property Nuitée galleries, no third-party hotel photos. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {siemReapDraftGuide} from './siemReapDraftGuide';
import manifest from './siemReapMediaCandidates.json';
const codes=['zannier','raffles','hyatt','shinta'] as const;
const frBest=[
 'Pour les villas au calme et les jardins inspirés d’un village khmer.',
 'Pour les salons historiques, les jardins et la grande piscine.',
 'Pour la centralité urbaine et un design contemporain.',
 'Pour un boutique-hôtel créatif à l’échelle plus intime.'
];
const enBest=[
 'For secluded villas and Khmer-village-inspired gardens.',
 'For historic salons, gardens and its grand pool.',
 'For a walkable city-centre base and contemporary design.',
 'For creative boutique hospitality on a more intimate scale.'
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Nuitée exact-property gallery',sourcePage:p.sourcePage});
export const siemReapHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(siemReapDraftGuide.hotels.map((h,index)=>[
 h.name,{photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch}
]));
export const siemReapAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-3','scene-8','scene-6','scene-7','scene-5'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedSiemReapPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const siemReapSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath));
export const siemReapPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
