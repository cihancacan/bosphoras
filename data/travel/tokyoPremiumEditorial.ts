/** Curated Tokyo photos: publisher images are protected-preview only, not public-redistribution licensed. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {tokyoDraftGuide} from './tokyoDraftGuide';
import manifest from './tokyoMediaCandidates.json';
const ids=['aman','bulgari','hyatt','onehotel'] as const;
const frBest=["Pour le calme japonais à Otemachi près de Tokyo Station.","Pour le luxe italien-japonais au-dessus de Yaesu et Ginza.","Pour les vues de Shinjuku dans une adresse restaurée en 2025.","Pour le design biophilique d'Akasaka dans une adresse ouverte en 2026."];
const enBest=["For Japanese tranquillity in Otemachi near Tokyo Station.","For Italian-Japanese luxury above Yaesu and Ginza.","For Shinjuku views from a landmark restored in 2025.","For Akasaka's nature-led design in a hotel opened in 2026."];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const tokyoHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 tokyoDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:manifest.hotels.filter(p=>p.propertyKey===ids[i]&&p.property===hotel.name&&!p.commercialRightsCleared).map(toPhoto),
  credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
export const tokyoAreaVisuals:(BodrumPremiumPhoto|null)[]=[
 'scene-1','scene-3','scene-4','scene-6','scene-7'
].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedTokyoPreviewAssets=new Set([...manifest.destinationScenes.map(p=>p.publicPreviewUrl),...manifest.hotels.map(p=>p.publicPreviewUrl)]);
export const tokyoSchemaSafePhotos=new Set<string>(); // Never publish external pictures in public structured image data.
export const tokyoPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
