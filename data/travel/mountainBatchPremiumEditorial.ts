import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { megeveGuide } from './megeveGuide';
import megeveManifest from './megeveMediaCandidates.json';
import { jacksonHoleGuide } from './jacksonHoleGuide';
import jacksonHoleManifest from './jacksonHoleMediaCandidates.json';
import { bigSkyGuide } from './bigSkyGuide';
import bigSkyManifest from './bigSkyMediaCandidates.json';
import { valDisereGuide } from './valDisereGuide';
import valDisereManifest from './valDisereMediaCandidates.json';
import { verbierGuide } from './verbierGuide';
import verbierManifest from './verbierMediaCandidates.json';
/** Asset manifests describe unapproved candidates. Empty gallery until BOTH visual and commercial-rights review flags are true.
 * A source URL, downloaded WebP and clean filename never imply a publishing licence.
 */
type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;candidateContext?:string;credit?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
const cityAreas={"megeve":["scene-1","scene-2","scene-3","scene-4","scene-8"],"jackson-hole":["scene-2","scene-3","scene-4","scene-5",null],"big-sky":["scene-2","scene-3","scene-4","scene-5",null],"val-disere":["scene-1","scene-4","scene-5","scene-6","scene-7"],"verbier":["scene-2","scene-3","scene-4","scene-6","scene-8"]} as const;
function approved(x:Candidate):x is Candidate & {localPath:string;sourcePage:string}{
 return x.status==='candidate_needs_visual_review' && x.visuallyVerified===true &&
  x.commercialRightsCleared===true && !!x.localPath && !!x.sourcePage && !x.visualQaWarning;
}
function mediaPhoto(c:Candidate & {localPath:string;sourcePage:string},label:string):BodrumPremiumPhoto {
 return {src:c.localPath,fr:'Photo vérifiée : '+label,en:'Verified image: '+label,
  sourcePage:c.sourcePage,credit:c.credit||label};
}
function hotelEntries(
 hotels:readonly {name:string;fr:string;en:string;frWatch:string;enWatch:string;officialUrl:string}[],
 media:readonly Candidate[]):Record<string,BodrumHotelEditorial>{
 const out:Record<string,BodrumHotelEditorial>={};
 for(let i=0;i<hotels.length;i++){
  const h=hotels[i],key=media[i*3]?.propertyKey;
  const photos=media.filter(approved).filter(x=>x.propertyKey===key).map(x=>mediaPhoto(x,h.name));
  out[h.name]={photos,sourcePage:h.officialUrl,credit:h.name+' · origine vérifiée',
   frBest:h.frWatch,enBest:h.enWatch,frStory:h.fr,enStory:h.en};
 }
 return out;
}
function areaEntries(
 guide:{areas:readonly {name:string}[]},media:readonly Candidate[],slug:keyof typeof cityAreas
):(BodrumPremiumPhoto|null)[]{
 return cityAreas[slug].map((key,i)=>{
  const item=media.find(x=>x.key===key);
  if(!item||!approved(item))return null;
  const label=slug==='megeve'&&key==='scene-4'?'Tête du Torraz · panorama du domaine Portes du Mont-Blanc'
   :slug==='megeve'&&key==='scene-8'?'Panorama estival de la vallée de Megève'
   :slug==='val-disere'&&key==='scene-6'?'Le Fornet en été, vue authentique du hameau'
   :slug==='verbier'&&key==='scene-2'?'Place Blanche, près des remontées de Médran'
   :guide.areas[i].name;
  return mediaPhoto(item,label);
 });
}
export const mountainBatchHotelEditorialByCity={
 "megeve":hotelEntries(megeveGuide.hotels,megeveManifest.hotels),
 "jackson-hole":hotelEntries(jacksonHoleGuide.hotels,jacksonHoleManifest.hotels),
 "big-sky":hotelEntries(bigSkyGuide.hotels,bigSkyManifest.hotels),
 "val-disere":hotelEntries(valDisereGuide.hotels,valDisereManifest.hotels),
 "verbier":hotelEntries(verbierGuide.hotels,verbierManifest.hotels)
} as const;
export const mountainBatchAreaVisualsByCity={
 "megeve":areaEntries(megeveGuide,megeveManifest.destinationScenes,"megeve"),
 "jackson-hole":areaEntries(jacksonHoleGuide,jacksonHoleManifest.destinationScenes,"jackson-hole"),
 "big-sky":areaEntries(bigSkyGuide,bigSkyManifest.destinationScenes,"big-sky"),
 "val-disere":areaEntries(valDisereGuide,valDisereManifest.destinationScenes,"val-disere"),
 "verbier":areaEntries(verbierGuide,verbierManifest.destinationScenes,"verbier")
} as const;
export const mountainBatchAvailablePhotoPathsByCity={
 "megeve":new Set([...megeveManifest.hotels,...megeveManifest.destinationScenes].filter(approved).map(x=>x.localPath)),
 "jackson-hole":new Set([...jacksonHoleManifest.hotels,...jacksonHoleManifest.destinationScenes].filter(approved).map(x=>x.localPath)),
 "big-sky":new Set([...bigSkyManifest.hotels,...bigSkyManifest.destinationScenes].filter(approved).map(x=>x.localPath)),
 "val-disere":new Set([...valDisereManifest.hotels,...valDisereManifest.destinationScenes].filter(approved).map(x=>x.localPath)),
 "verbier":new Set([...verbierManifest.hotels,...verbierManifest.destinationScenes].filter(approved).map(x=>x.localPath))
} as const;
