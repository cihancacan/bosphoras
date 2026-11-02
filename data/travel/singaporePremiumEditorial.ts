/** Singapore #74: four actual hotel galleries, three real photographs per property, private noindex Preview only. */
import type {BodrumPremiumPhoto,BodrumHotelEditorial} from './bodrumPremiumEditorial';
import {singaporeDraftGuide} from './singaporeDraftGuide';
import manifest from './singaporeMediaCandidates.json';
const keys=['mbs','raffles','fullerton','edition'] as const;
const frBest=["Pour une vue spectaculaire, l'architecture du SkyPark et un choix précis entre Sands et Paiza.","Pour l'héritage de 1887, les galeries coloniales et le service de majordome.","Pour un établissement plus intime, directement au bord de Marina Bay.","Pour le design contemporain, les boutiques d'Orchard et un séjour à Tanglin."];
const enBest=["For iconic SkyPark architecture and category-specific Sands or Paiza room experiences.","For 1887 colonial heritage, gracious verandas and butler service.","For an intimate waterfront base directly on Marina Bay.","For contemporary design, Orchard shopping and leafy Tanglin."];
const photo=(p:{localPath:string;frCaption:string;enCaption:string;credit:string;sourcePage:string}):BodrumPremiumPhoto=>({src:p.localPath,fr:p.frCaption,en:p.enCaption,credit:p.credit,sourcePage:p.sourcePage});
export const singaporeHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(singaporeDraftGuide.hotels.map((h,i)=>[h.name,{
 photos:manifest.hotels.filter(p=>p.propertyKey===keys[i]&&p.property===h.name&&p.visuallyVerified&&p.previewVisualApproved&&!p.commercialRightsCleared&&p.reviewNote.length>24).map(photo),
 credit:h.name,sourcePage:h.officialUrl,frBest:frBest[i],enBest:enBest[i],frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
}]));
export const singaporeAreaVisuals:(BodrumPremiumPhoto|null)[]=['scene-1','scene-4','scene-2','scene-5','scene-7'].map(key=>{const p=manifest.destinationScenes.find(p=>p.key===key&&p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);return p?photo(p):null;});
export const confirmedSingaporePreviewAssets=new Set([...manifest.destinationScenes.filter(p=>p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath),...manifest.hotels.filter(p=>p.visuallyVerified&&p.previewVisualApproved).map(p=>p.localPath)]);
export const singaporeSchemaSafePhotos=new Set<string>();
export const singaporePhotoLicenses:Record<string,{name:string;url:string}>=Object.fromEntries(manifest.destinationScenes.map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}]));
