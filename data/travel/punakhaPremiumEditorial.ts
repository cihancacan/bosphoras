/** Punakha #82: exact-property galleries, owner granted publication rights 2026-11-11. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {punakhaDraftGuide} from './punakhaDraftGuide';
import manifest from './punakhaMediaCandidates.json';
const codes=['pemako','dhensa','rkpo','zhingkham'] as const;
const frBest=[
 'Pour les villas-tentes raffinées et, selon la réservation, leur bassin privatif.',
 'Pour l’atmosphère boutique et les vues sur les collines de Wolakha.',
 'Pour l’architecture traditionnelle et les rizières autour de Lobesa.',
 'Pour sa position surplombant Punakha Dzong, dans une catégorie trois étoiles.'
];
const enBest=[
 'For refined tented villas and a private plunge pool in selected categories.',
 'For a boutique atmosphere and views across the hills of Wolakha.',
 'For traditional architecture and rice fields around Lobesa.',
 'For a hillside setting above Punakha Dzong, in the three-star category.'
];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string|null;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit||'Original source',sourcePage:p.sourcePage});
export const punakhaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(punakhaDraftGuide.hotels.map((h,index)=>[
 h.name,{
  photos:manifest.hotels.filter(p=>p.hotel===h.name&&p.key.startsWith(codes[index]+'-')&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&!!p.sourceResolvedUrl&&!!p.webpSHA256).slice(0,3).map(photo),
  credit:h.name,sourcePage:h.officialUrl,frBest:frBest[index],enBest:enBest[index],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }
]));
export const punakhaAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-3','scene-2','scene-5','scene-4','scene-9'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key&&p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.licenseUrl&&!!p.credit);
 return p?photo(p):null;
});
export const confirmedPunakhaPreviewAssets=new Set([...manifest.destinationScenes,...manifest.hotels].filter(p=>p.visuallyVerified&&p.previewVisualApproved&&p.commercialRightsCleared&&!!p.webpSHA256).map(p=>p.localPath));
export const punakhaPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.licenseUrl&&p.license).map(p=>[p.localPath,{name:p.license||'',url:p.licenseUrl||''}]));
