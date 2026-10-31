import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {sumbaDraftGuide} from './sumbaDraftGuide';
import {approvedSumbaScene,approvedSumbaHotelImage,type SumbaScene,type SumbaHotelImage} from './sumbaGuide';
import manifest from './sumbaMediaCandidates.json';
const ids=['nihi','cap-karoso','sanubari','lelewatu'] as const;
const frBest=[
 "Pour le domaine de villas emblématique de Nihiwatu, le surf, les chevaux et les expériences privées.",
 "Pour le design, la ferme, les résidences de créateurs et la plage de Karoso.",
 "Pour les villas à piscine plus épurées sur la longue plage de Kerewe.",
 "Pour les panoramas de falaise, la forêt et les villas suspendues de Wanokaka."
];
const enBest=[
 "For Nihiwatu’s landmark villa estate, riding, surfing and curated adventures.",
 "For Karoso Beach design, a productive farm and visiting creative residencies.",
 "For understated private-pool villas on the long shores of Kerewe.",
 "For Wanokaka’s cliff panoramas, forest sanctuary and hanging villas."
];
const toPhoto=(p:SumbaScene|SumbaHotelImage):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const sumbaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 sumbaDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:manifest.hotels.filter(p=>approvedSumbaHotelImage(p,ids[i],hotel.name)).map(toPhoto),
  credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
// Five locally distinct sectors, not views automatically guaranteed from any resort room.
export const sumbaAreaVisuals:(BodrumPremiumPhoto|null)[]=[
 'scene-2','scene-1','scene-8','scene-7','scene-3'
].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key);
 return p&&approvedSumbaScene(p)?toPhoto(p):null;
});
export const confirmedSumbaAssets=new Set([
 ...manifest.destinationScenes.filter(approvedSumbaScene),
 ...manifest.hotels.filter(p=>{
  const i=ids.indexOf(p.propertyKey as typeof ids[number]);
  return i>=0&&approvedSumbaHotelImage(p,ids[i],sumbaDraftGuide.hotels[i].name);
 })
].map(p=>p.localPath));
export const sumbaSchemaSafePhotos=new Set(
 manifest.destinationScenes.filter(p=>approvedSumbaScene(p)&&p.commercialRightsCleared).map(p=>p.localPath)
);
export const sumbaPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 manifest.destinationScenes.filter(approvedSumbaScene).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}])
);

// Hotel publisher photos must remain owner-protected, no public republication licence is implied.
