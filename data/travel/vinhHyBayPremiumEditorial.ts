/** Vinh Hy Bay exact-property galleries and honest luxury tiering. Owner protected Preview ONLY. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {vinhHyBayDraftGuide} from './vinhHyBayDraftGuide';
import manifest from './vinhHyBayMediaCandidates.json';
const keys=['amanoi','swiss','casa','vinhhy'] as const;
const frBest=["Seule adresse d'ultra-luxe de Vĩnh Hy, entre spa, collines et pavillons.","Villas premium et golf en famille à Bình Tiên, hors de la baie.","Base côtière confortable à Bãi Kinh, sans prétention palace.","Accès pratique au village, au port et aux excursions en bateau."];
const enBest=["The bay's genuine ultra-luxury retreat among forest, pavilions and spa.","Premium family villas and golf at nearby Binh Tien, outside the bay.","Comfortable Bãi Kinh coastal base, not a five-star palace.","Practical harbour and village base for local boat excursions."];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const vinhHyBayHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(vinhHyBayDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===hotel.name&&!p.commercialRightsCleared).map(toPhoto),
 credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
 frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
}]));
export const vinhHyBayAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-5','scene-2','scene-6','scene-4'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedVinhHyBayPreviewAssets=new Set([...manifest.destinationScenes.map(p=>p.publicPreviewUrl),...manifest.hotels.map(p=>p.publicPreviewUrl)]);
export const vinhHyBaySchemaSafePhotos=new Set<string>();
export const vinhHyBayPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
