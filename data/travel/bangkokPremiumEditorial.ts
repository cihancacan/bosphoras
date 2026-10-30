import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {bangkokDraftGuide} from './bangkokDraftGuide';
import {approvedBangkokScene,approvedBangkokHotelImage,type BangkokScene,type BangkokHotelImage} from './bangkokGuide';
import manifest from './bangkokMediaCandidates.json';

const ids=['mandarin-oriental','capella','the-siam','aman-nai-lert'] as const;
const frBest=[
  "Pour l'héritage historique du fleuve, la grande tradition de service et des ailes à distinguer.",
  "Pour un sanctuaire contemporain à Charoen Krung, avec chambres, suites et villas bien distinctes.",
  "Pour la collection d'art et les jardins Art déco de Dusit, avec pool villas réellement privatives.",
  "Pour une retraite de ville dans Nai Lert Park, le wellness et la centralité de Pathum Wan."
];
const enBest=[
  "For riverside heritage, traditional service and individually distinct accommodation wings.",
  "For a low-rise contemporary river sanctuary at Charoen Krung, with genuinely different room classes.",
  "For art, Art Deco gardens and true pool villas in Dusit, upriver from the commercial centre.",
  "For Nai Lert Park's central city-garden sanctuary and wellness culture in Pathum Wan."
];
const toPhoto=(p:BangkokScene|BangkokHotelImage):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const bangkokHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 bangkokDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:manifest.hotels.filter(p=>approvedBangkokHotelImage(p,ids[i],hotel.name)).map(toPhoto),
  credit:hotel.name,sourcePage:hotel.officialUrl,
  frBest:frBest[i],enBest:enBest[i],
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
// District-specific imagery: scene-6 shows LUMPHINI, near central Pathum Wan;
// it must never be captioned as an image of Nai Lert Park itself.
export const bangkokAreaVisuals:(BodrumPremiumPhoto|null)[]=[
 'scene-8','scene-4','scene-5','scene-6','scene-2'
].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key);
 return p&&approvedBangkokScene(p)?toPhoto(p):null;
});
export const confirmedBangkokAssets=new Set([
 ...manifest.destinationScenes.filter(approvedBangkokScene),
 ...manifest.hotels.filter(p=>{
  const i=ids.indexOf(p.propertyKey as typeof ids[number]);
  return i>=0&&approvedBangkokHotelImage(p,ids[i],bangkokDraftGuide.hotels[i].name);
 })
].map(p=>p.localPath));
export const bangkokSchemaSafePhotos=new Set(
 manifest.destinationScenes.filter(p=>approvedBangkokScene(p)&&p.commercialRightsCleared).map(p=>p.localPath)
);
export const bangkokPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 manifest.destinationScenes.filter(approvedBangkokScene).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}])
);

// Bangkok 9 city photographs CC-licensed; 3 Mandarin historic CC; other publisher photos only in protected owner noindex Preview.

// Compilation regression: verified JSX hero photo credit and preserved 63 guide types.
