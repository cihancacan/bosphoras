/** Kyoto #68 image attribution, private rights-gated preview only. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {kyotoDraftGuide} from './kyotoDraftGuide';
import manifest from './kyotoMediaCandidates.json';
const ids=['aman','parkhyatt','ritz','fourseasons'] as const;
const frBest=["Pour les 26 hébergements au milieu de la forêt de Takagamine.","Pour Ninenzaka et les panoramas d'Higashiyama.","Pour les rives de Kamogawa et les restaurants du centre.","Pour le jardin historique de Shakusui-en à Higashiyama."];
const enBest=["For a 26-key sanctuary in Takagamine's forest.","For Ninenzaka walks and Higashiyama vistas.","For Kamogawa riverfront and central Kyoto dining.","For the Shakusui-en heritage pond garden in Higashiyama."];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const kyotoHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(kyotoDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===ids[i]&&p.property===hotel.name&&!p.commercialRightsCleared).map(toPhoto),
 credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
 frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
}]));
export const kyotoAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-6','scene-3','scene-7'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedKyotoPreviewAssets=new Set([...manifest.destinationScenes.map(p=>p.publicPreviewUrl),...manifest.hotels.map(p=>p.publicPreviewUrl)]);
export const kyotoSchemaSafePhotos=new Set<string>();
export const kyotoPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
