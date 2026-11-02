/** Sentosa #75: 3 genuine hotel photos/property; noindex private Preview only; commercial rights not cleared. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {sentosaDraftGuide} from './sentosaDraftGuide';
import manifest from './sentosaMediaCandidates.json';
const keys=['capella','raffles','barracks','w'] as const;
const frBest=["Pour un domaine tropical raffiné, l'héritage colonial et les villas de différentes catégories.","Pour une villa privée avec piscine et terrasse au sein de la forêt.","Pour un boutique-hôtel colonial très intime dans l'ancienne caserne.","Pour la marina, les restaurants, l'ambiance contemporaine et la piscine WET Deck."];
const enBest=["For a private heritage-and-forest estate with distinct room and villa categories.","For private pool villas with terraces amid tropical woodland.","For a discreet 40-room former military barracks with colonial charm.","For lively marina dining, contemporary design and the WET Deck pool."];
const photo=(p:{publicPreviewUrl:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.publicPreviewUrl,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const sentosaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(sentosaDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===h.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
}]));
export const sentosaAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-2','scene-5','scene-7','scene-4'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);return p?photo(p):null;});
export const confirmedSentosaPreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.publicPreviewUrl)]);
export const sentosaSchemaSafePhotos=new Set<string>();
export const sentosaPhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.publicPreviewUrl,{name:p.license,url:p.licenseUrl}]));
