/** Hakone #69 exact-property photo galleries. Publisher images restricted to protected private Preview. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {hakoneDraftGuide} from './hakoneDraftGuide';
import manifest from './hakoneMediaCandidates.json';
const ids=['gora','suishoen','ginyu','kinnotake'] as const;
const frBest=["Pour l'héritage de Gora, les suites traditionnelles et le kaiseki.","Pour ses 23 chambres, chacune avec bain extérieur privé à Kowakidani.","Pour le panorama sur la vallée de Hayakawa, à Miyanoshita.","Pour une retraite intimiste à Sengokuhara réservée aux 12 ans et plus."];
const enBest=["For Gora's heritage retreat, refined suites and kaiseki.","For 23 individual Kowakidani rooms, each with private outdoor onsen.","For wooded Hayakawa valley views in Miyanoshita.","For a secluded Sengokuhara retreat for guests aged 12 and above."];
const toPhoto=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const hakoneHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(hakoneDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===ids[i]&&p.property===hotel.name&&!p.commercialRightsCleared).map(toPhoto),
 credit:hotel.name,sourcePage:hotel.officialUrl,frBest:frBest[i],enBest:enBest[i],
 frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
}]));
export const hakoneAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-3','scene-5','scene-4','scene-9','scene-2'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared);return p?toPhoto(p):null;});
export const confirmedHakonePreviewAssets=new Set([...manifest.destinationScenes.map(p=>p.publicPreviewUrl),...manifest.hotels.map(p=>p.publicPreviewUrl)]);
export const hakoneSchemaSafePhotos=new Set<string>(); // Exclude external photo URLs from public structured image listings.
export const hakonePhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
