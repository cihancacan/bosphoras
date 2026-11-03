/** Galle #79: property-exact hotel photos only if original, license and owner visual review all pass. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {galleDraftGuide} from './galleDraftGuide';
import manifest from './galleMediaCandidates.json';
const hotelCodes=['aman','gfh','printers','jetwing'] as const;
const frBest=[
  "Pour un séjour patrimonial prestigieux au sein du fort historique de Galle.",
  "Pour une maison néerlandaise intimiste sur Church Street.",
  "Pour une ancienne imprimerie restaurée au cœur des ruelles du fort.",
  "Pour l'architecture de Geoffrey Bawa et le paysage océanique de Dadella."
];
const enBest=[
  "For an iconic historic stay within the UNESCO-listed ramparts.",
  "For an intimate Dutch mansion on Church Street.",
  "For a restored printing-house hotel within the old Fort.",
  "For Geoffrey Bawa architecture beside the Dadella coast."
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||"Original source",sourcePage:p.sourcePage
});
export const galleHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(galleDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.key.startsWith(hotelCodes[index]+'-')&&p.previewVisualApproved&&p.visuallyVerified&&!!p.sourceResolvedUrl&&!!p.webpSHA256&&!!p.credit).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const galleAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-9','scene-3','scene-5','scene-6','scene-7'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedGallePreviewAssets=new Set([
 ...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath),
 ...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&!!p.webpSHA256&&!!p.credit).map(p=>p.localPath)
]);
export const galleSchemaSafePhotos=new Set<string>();
export const gallePhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}])
);
