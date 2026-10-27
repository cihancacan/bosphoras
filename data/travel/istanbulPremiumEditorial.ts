
/** Reuse existing Istanbul local media; commercial photography permissions are NOT independently established.
 * /travel/hotels/istanbul remains on IstanbulFlagship, unchanged. */
import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {istanbulHotels} from './istanbulFlagship';
import {istanbulHotelPhotos} from './hotelPhotography';
import {istanbulCityScenes} from './istanbulCityScenes';
const photo=(p:{src:string;fr:string;en:string;sourcePage:string},credit:string):BodrumPremiumPhoto=>({
 src:p.src,fr:p.fr,en:p.en,sourcePage:p.sourcePage,credit
});
export const istanbulHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 istanbulHotels.map(h=>[h.name,{
  photos:(istanbulHotelPhotos[h.id]||[]).filter(p=>p.src.startsWith('/images/')).map(p=>photo(p,h.name+' · éditeur d’origine, droits à confirmer')),
  credit:'Existing local project gallery — see hotelPhotography.ts. Independent commercial licence not verified.',
  sourcePage:h.officialUrl,frBest:h.frBest,enBest:h.enBest,frStory:h.fr+' '+h.frWatch,enStory:h.en+' '+h.enWatch
 }])
);
const sectors=['karakoy','ciragan','kurucesme','sultanahmet','nisantasi'] as const;
export const istanbulAreaVisuals:(BodrumPremiumPhoto|null)[]=sectors.map(k=>{
 const p=istanbulCityScenes[k];return photo(p,p.author+' · '+p.license);
});
export const confirmedIstanbulPreviewAssets=new Set([
 ...Object.values(istanbulHotelPhotos).flat().filter(p=>p.src.startsWith('/images/')).map(p=>p.src),
 ...Object.values(istanbulCityScenes).map(p=>p.src)
]);
// Only explicitly CC-labelled city photos may appear in destination Article JSON-LD.
export const istanbulSchemaSafePhotos=new Set(
 Object.values(istanbulCityScenes).filter(p=>p.license.startsWith('CC BY')).map(p=>p.src)
);
