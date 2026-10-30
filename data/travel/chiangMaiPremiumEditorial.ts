import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {chiangMaiDraftGuide} from './chiangMaiDraftGuide';
import {approvedChiangMaiScene,approvedChiangMaiHotelImage,type ChiangMaiScene,type ChiangMaiHotelImage} from './chiangMaiGuide';
import manifest from './chiangMaiMediaCandidates.json';
const ids=['pillars','anantara','raya','four-seasons'] as const;
const frBest=[
 "Pour une maison de teck patrimoniale à Wat Gate, 30 suites intimistes et une histoire locale.",
 "Pour les terrasses riveraines en ville et l'accès aux marchés et ateliers urbains.",
 "Pour l'esthétique Lanna contemporaine et 38 suites au calme, enfants à partir de six ans.",
 "Pour les rizières de Mae Rim, les jardins et les villas à piscine selon catégorie."
];
const enBest=[
 "For a carefully restored teak residence in Wat Gate, thirty suites and genuine local heritage.",
 "For a contemporary riverside stay in town, close to urban markets and craft streets.",
 "For contemporary Lanna craftsmanship and 38 peaceful suites; children aged six and over.",
 "For Mae Rim rice paddies, mountain gardens and category-specific pool villas."
];
const toPhoto=(p:ChiangMaiScene|ChiangMaiHotelImage):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const chiangMaiHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 chiangMaiDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:manifest.hotels.filter(p=>approvedChiangMaiHotelImage(p,ids[i],hotel.name)).map(toPhoto),
  credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
// Old City stupa, real Wat Ket temple, urban Ping River, northern river valley, Mae Rim hills.
// Never imply an out-of-resort photograph represents a booked room view.
export const chiangMaiAreaVisuals:(BodrumPremiumPhoto|null)[]=[
 'scene-2','scene-5','scene-6','scene-7','scene-8'
].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key);
 return p&&approvedChiangMaiScene(p)?toPhoto(p):null;
});
export const confirmedChiangMaiAssets=new Set([
 ...manifest.destinationScenes.filter(approvedChiangMaiScene),
 ...manifest.hotels.filter(p=>{
  const i=ids.indexOf(p.propertyKey as typeof ids[number]);
  return i>=0&&approvedChiangMaiHotelImage(p,ids[i],chiangMaiDraftGuide.hotels[i].name);
 })
].map(p=>p.localPath));
export const chiangMaiSchemaSafePhotos=new Set(
 manifest.destinationScenes.filter(p=>approvedChiangMaiScene(p)&&p.commercialRightsCleared).map(p=>p.localPath)
);
export const chiangMaiPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 manifest.destinationScenes.filter(approvedChiangMaiScene).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}])
);

// Independent visual review completed: 9 Creative Commons local scenes and 12 authentic hotel publisher photographs; no public image-rights grant.
