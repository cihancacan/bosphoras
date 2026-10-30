import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {kohYaoNoiDraftGuide} from './kohYaoNoiDraftGuide';
import {approvedKohYaoNoiScene,approvedKohYaoNoiHotelImage,type KohYaoNoiScene,type KohYaoNoiHotelImage} from './kohYaoNoiGuide';
import manifest from './kohYaoNoiMediaCandidates.json';
const ids=['six-senses','cape-kudu','treehouse','nine-hornbills'] as const;
const bestFr=[
 "Pour les villas avec piscine privée et les vues spectaculaires sur les îles calcaires de Phang Nga.",
 "Pour un séjour boutique chic près de Pasai, facile à combiner avec la vie de l’île.",
 "Pour le nord sauvage et la canopée, dès 16 ans et avec transfert maritime organisé.",
 "Pour une retraite à deux, dans une villa sous toile avec piscine à débordement et panorama."
];
const bestEn=[
 "For private-pool villas and dramatic Phang Nga limestone-island panoramas.",
 "For a polished boutique stay near Pasai with easier access to island life.",
 "For the remote northern canopy, guests aged 16 and over, and planned boat access.",
 "For an adults-only retreat in a panoramic tented infinity-pool villa."
];
const toPhoto=(p:KohYaoNoiScene|KohYaoNoiHotelImage):BodrumPremiumPhoto=>({
 src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage
});
export const kohYaoNoiHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 kohYaoNoiDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:manifest.hotels.filter(p=>approvedKohYaoNoiHotelImage(p,ids[i],hotel.name)).map(toPhoto),
 credit:hotel.name,sourcePage:hotel.officialUrl,
 frBest:bestFr[i],enBest:bestEn[i],frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
// Five sector images — island-only, not recycled Phuket or Krabi imagery.
// Do not represent the exact hotel as a photo of a geographical sector.
export const kohYaoNoiAreaVisuals:(BodrumPremiumPhoto|null)[]=[
 'scene-1','scene-4','scene-6','scene-9','scene-5'
].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key);
 return p&&approvedKohYaoNoiScene(p)?toPhoto(p):null;
});
export const confirmedKohYaoNoiAssets=new Set([
 ...manifest.destinationScenes.filter(approvedKohYaoNoiScene),
 ...manifest.hotels.filter(p=>{
  const i=ids.indexOf(p.propertyKey as typeof ids[number]);
  return i>=0&&approvedKohYaoNoiHotelImage(p,ids[i],kohYaoNoiDraftGuide.hotels[i].name)
 })
].map(p=>p.localPath));
export const kohYaoNoiSchemaSafePhotos=new Set(
 manifest.destinationScenes.filter(p=>approvedKohYaoNoiScene(p)&&p.commercialRightsCleared).map(p=>p.localPath)
);
export const kohYaoNoiPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(
 manifest.destinationScenes.filter(approvedKohYaoNoiScene).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}])
);

// Completed private 21/21 photo inspection; never confer commercial rights on hotel images.
