/** Rajasthan #78 private Preview media, subject-identified and geography-matched.
 * Nine regional photos + Taj palace have CC BY-SA sources. Nine other hotel
 * images have no independently verified public marketing rights and remain
 * prohibited from promotion to an indexed production environment.
 */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {rajasthanDraftGuide} from './rajasthanDraftGuide';
import manifest from './rajasthanMediaCandidates.json';
const hotelCodes=['taj','sujan','oberoi','sixsenses'] as const;
const frBest=[
  "Pour vivre dans un palais historique monumental au-dessus de Jodhpur.",
  "Pour l'immersion dans le désert du Thar et le calme du campement.",
  "Pour un séjour au bord des paysages de Ranthambore.",
  "Pour les suites et le bien-être d'un fort royal restauré."
];
const enBest=[
  "For a monumental historic palace high above Jodhpur.",
  "For a serene luxury camp in the Thar Desert.",
  "For an immersive stay near the landscapes of Ranthambore.",
  "For heritage suites and wellbeing inside a restored royal fort."
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({
  src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const rajasthanHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(rajasthanDraftGuide.hotels.map((h,index)=>[
  h.name,{
    photos:manifest.hotels.filter(p=>p.key.startsWith(hotelCodes[index]+'-')&&p.previewVisualApproved&&p.visuallyVerified).map(photo),
    credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],
    frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
  }
]));
export const rajasthanAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-6','scene-9','scene-2','scene-4','scene-5'].map(key=>{
  const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared);
  return p?photo(p):null;
});
export const confirmedRajasthanPreviewAssets=new Set([
  ...manifest.destinationScenes.filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared).map(p=>p.localPath),
  ...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath)
]);
export const rajasthanSchemaSafePhotos=new Set<string>();
export const rajasthanPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
  [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.commercialRightsCleared&&p.licenseUrl).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl||''}])
);
