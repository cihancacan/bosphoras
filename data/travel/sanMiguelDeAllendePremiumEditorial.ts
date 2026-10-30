import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {sanMiguelDeAllendeDraftGuide} from './sanMiguelDeAllendeDraftGuide';
import {approvedSanMiguelPhoto,type SanMiguelPhoto} from './sanMiguelDeAllendeGuide';
import manifest from './sanMiguelDeAllendeMediaCandidates.json';
const ids=['rosewood','belmond','matilda','live-aqua'] as const;
const sourcePages=[
 'https://www.rosewoodhotels.com/en/san-miguel-de-allende/gallery',
 'https://www.belmond.com/hotels/north-america/mexico/san-miguel-de-allende/belmond-casa-de-sierra-nevada/',
 'https://hotelmatilda.com/',
 'https://www.fiestamericanatravelty.com/en/live-aqua/hotels/live-aqua-san-miguel-de-allende'
];
const toPhoto=(p:SanMiguelPhoto):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
const isHotelPhoto=(p:(typeof manifest.hotels)[number],i:number):boolean=>
 p.propertyKey===ids[i] && p.property===sanMiguelDeAllendeDraftGuide.hotels[i].name
 && p.sourcePage.startsWith(sourcePages[i]) && p.visuallyVerified===true
 && p.status==='source_identified_private_preview' && p.commercialRightsCleared===false
 && p.rightsEvidenceType==='official_hotel_publisher_not_commercially_cleared'
 && p.localPath.startsWith('/images/travel/san-miguel-de-allende-premium/'+ids[i]+'/')
 && p.sha256.length===64 && p.bytes>18000 && !!p.credit && !!p.frCaption && !!p.enCaption;
const bestFr=['Les jardins et l’espace d’une grande maison près du Parque Juárez.','L’atmosphère des demeures historiques et des patios au cœur de la ville.','L’art contemporain et une adresse à taille intime sur la rue Aldama.','Les espaces d’un resort urbain près de la Presa del Obraje.'];
const bestEn=['Gardens and the space of a grand house near Parque Juárez.','Historic houses and courtyards in the heart of town.','Contemporary art and a more intimate Calle Aldama address.','Urban resort spaces beside Presa del Obraje.'];
export const sanMiguelHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 sanMiguelDeAllendeDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:manifest.hotels.filter(p=>isHotelPhoto(p,i)).map(toPhoto),credit:hotel.name,
  sourcePage:hotel.officialUrl,frBest:bestFr[i],enBest:bestEn[i],
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
export const sanMiguelAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-2','scene-3','scene-4','scene-5','scene-6'].map(key=>{
 const p=manifest.destinationScenes.find(p=>p.key===key);
 return p && approvedSanMiguelPhoto(p) ? toPhoto(p) : null;
});
export const confirmedSanMiguelAssets=new Set([
 ...manifest.destinationScenes.filter(approvedSanMiguelPhoto),
 ...manifest.hotels.filter(p=>{const i=ids.indexOf(p.propertyKey as typeof ids[number]);return i>=0 && isHotelPhoto(p,i);})
].map(p=>p.localPath));
export const sanMiguelSchemaSafePhotos=new Set(manifest.destinationScenes.filter(p=>approvedSanMiguelPhoto(p)&&p.commercialRightsCleared).map(p=>p.localPath));

export const sanMiguelPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.filter(p=>p.commercialRightsCleared).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
