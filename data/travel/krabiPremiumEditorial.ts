import type {BodrumHotelEditorial, BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {krabiDraftGuide} from './krabiDraftGuide';
import {approvedKrabiPhoto, approvedKrabiHotelPhoto, type KrabiDestinationPhoto, type KrabiHotelPhoto} from './krabiGuide';
import manifest from './krabiMediaCandidates.json';

/** No hotel photo in this private editorial Preview has independent commercial republication clearance. */
const ids = ['rayavadee','phulay-bay','banyan-tree','tubkaak'] as const;
const bestFr = [
  "Pour l’arrivée en bateau et les falaises de Phra Nang, avec de véritables contraintes d’accès.",
  "Pour l’architecture thaïlandaise, l’espace et une retraite personnalisée sur Nong Thale.",
  "Pour des suites et villas avec bassins privés au bord de Tubkaek, catégories et vues à comparer.",
  "Pour un refuge intimiste face aux îles de la mer d’Andaman, plutôt qu’un grand resort.",
];
const bestEn = [
  "For a boat arrival and the Phra Nang cliffs, with genuine access considerations.",
  "For Thai architecture, generous spaces and personalised service on Nong Thale.",
  "For private-pool suites and villas on Tubkaek, with room-specific views and facilities.",
  "For a smaller Andaman-facing retreat rather than a large destination resort.",
];
const toPhoto = (p: KrabiDestinationPhoto | KrabiHotelPhoto): BodrumPremiumPhoto => ({
  src: p.localPath, fr: p.frCaption, en: p.enCaption, credit: p.credit, sourcePage: p.sourcePage
});
export const krabiHotelEditorial: Record<string, BodrumHotelEditorial> = Object.fromEntries(
  krabiDraftGuide.hotels.map((hotel, i) => [hotel.name, {
    photos: manifest.hotels.filter(p => approvedKrabiHotelPhoto(p, ids[i], hotel.name)).map(toPhoto),
    credit: hotel.name, sourcePage: hotel.officialUrl,
    frBest: bestFr[i], enBest: bestEn[i],
    frStory: hotel.fr + ' ' + hotel.frWatch,
    enStory: hotel.en + ' ' + hotel.enWatch,
  }])
);
// Index follows the original five actual Krabi sectors. No photograph of Hong is called Nong Thale.
// A Hong photo illustrates the offshore islands visible from Tubkaek.
export const krabiAreaVisuals: (BodrumPremiumPhoto | null)[] = [
  'scene-6', 'scene-3', 'scene-7', 'scene-4', 'scene-5'
].map(key => {
  const p = manifest.destinationScenes.find(p => p.key === key);
  return p && approvedKrabiPhoto(p) ? toPhoto(p) : null;
});
export const confirmedKrabiAssets = new Set([
  ...manifest.destinationScenes.filter(approvedKrabiPhoto),
  ...manifest.hotels.filter(p => {
    const i=ids.indexOf(p.propertyKey as typeof ids[number]);
    return i>=0 && approvedKrabiHotelPhoto(p, ids[i], krabiDraftGuide.hotels[i].name);
  }),
].map(p => p.localPath));
export const krabiSchemaSafePhotos = new Set(
  manifest.destinationScenes.filter(p => approvedKrabiPhoto(p) && p.commercialRightsCleared).map(p=>p.localPath)
);
export const krabiPhotoLicenses: Record<string, {name:string;url:string}> = Object.fromEntries(
  manifest.destinationScenes.filter(approvedKrabiPhoto).map(p=>[p.localPath,{name:p.license,url:p.licenseUrl}])
);
