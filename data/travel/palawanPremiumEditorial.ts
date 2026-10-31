/** 21 original Palawan media sources; hotel photos may appear only in owner-protected Preview. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {palawanDraftGuide} from './palawanDraftGuide';
import scenes from './palawanRemoteScenes.json';
import hotels from './palawanRemoteHotels.json';
const propertyKeys=['lagen','pangulasian','cauayan','discovery'] as const;
const frBest=[
  "Pour un refuge forestier rénové, ses villas sur l'eau et son calme en baie de Bacuit.",
  "Pour la plage de Pangulasian, les villas discrètes et les paysages calcaires d'El Nido.",
  "Pour l'intimité d'une île de trente villas et des catégories de piscine clairement identifiées.",
  "Pour Coron, les expériences marines de Busuanga et un séjour sur l'île de Dimakya."
];
const enBest=[
  "For the newly redesigned forest-and-cove retreat with overwater villas.",
  "For Pangulasian's beach, quiet island villas and Bacuit scenery.",
  "For the intimacy of a thirty-villa island and clearly differentiated pool categories.",
  "For northern Busuanga, marine experiences and the Dimakya Island setting."
];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({
  src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const palawanHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
  palawanDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
    photos:hotels.filter(p=>p.propertyKey===propertyKeys[i]&&p.property===hotel.name
      && p.commercialRightsCleared===false&&p.publicPreviewUrl.startsWith('https://')).map(toPhoto),
    credit:hotel.name,sourcePage:hotel.officialUrl,
    frBest:frBest[i],enBest:enBest[i],frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
  }])
);
export const palawanAreaVisuals:(BodrumPremiumPhoto|null)[]=[
  'scene-1','scene-8','scene-4','scene-6','scene-7'
].map(key=>{const p=scenes.find(p=>p.key===key&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedPalawanPreviewAssets=new Set([
 ...scenes.filter(p=>p.commercialRightsCleared).map(p=>p.publicPreviewUrl),
 ...hotels.filter(p=>p.commercialRightsCleared===false).map(p=>p.publicPreviewUrl)
]);
export const palawanSchemaSafePhotos=new Set<string>(); // No external or publisher images in JSON-LD until asset/licence QA.
export const palawanPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 scenes.filter(p=>p.commercialRightsCleared).map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}])
);
// These are external source URLs, not committed WebP binaries. Private Preview only; never assert public-use clearance.
