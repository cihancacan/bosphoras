import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { mountainBatchHotelEditorialByCity,mountainBatchAreaVisualsByCity,mountainBatchAvailablePhotoPathsByCity } from './mountainBatchPremiumEditorial';
import { stMoritzGuide } from './stMoritzGuide';
import stMoritzManifest from './stMoritzMediaCandidates.json';
import { aspenGuide } from './aspenGuide';
import aspenManifest from './aspenMediaCandidates.json';
import { nisekoGuide } from './nisekoGuide';
import nisekoManifest from './nisekoMediaCandidates.json';

/** Images are candidate media, not verified rights. Media with editorial warnings MUST stay hidden.
 * These guides are staged on an unbuilt branch, noindex and not approved for commercial publication.
 */
type Candidate={key:string;localPath?:string;sourcePage?:string;status:string;visualQaWarning?:string;candidateContext?:string;propertyKey?:string;credit?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;frCaption?:string;enCaption?:string};
type AlpinePlace = {name:string;enName:string};
const areaNames={
 'st-moritz':['scene-2','scene-3','scene-4','scene-5','scene-7'],
 aspen:['scene-3','scene-4','scene-5','scene-6','scene-8'],
 niseko:['scene-2','scene-3','scene-4','scene-5','scene-6']
} as const;
function sourcePhoto(x:Candidate,place:string,locale:'fr'|'en'):BodrumPremiumPhoto{
  const context=(x.candidateContext||'').replace(/<[^>]*>/g,'').trim();
  const generic = locale==='fr' ? 'Photographie de '+place : 'Photograph of '+place;
  const detail=context && !/^File:/.test(context) ? ' · '+context.slice(0,110) : '';
  return {src:x.localPath!, fr:x.frCaption||generic+detail, en:x.enCaption||('Photograph of '+place+detail),
    sourcePage:x.sourcePage!,credit: (x.credit||place)+' · source photographique'};
}
function valid(c:Candidate):boolean{
 return c.status==='candidate_needs_visual_review' && c.visuallyVerified===true && c.commercialRightsCleared===true && !!c.localPath && !!c.sourcePage && !c.visualQaWarning;
}
function hotelIndex(city:{hotels:readonly {name:string;officialUrl:string;fr:string;en:string;frWatch:string;enWatch:string}[]},
  media:readonly Candidate[]):Record<string,BodrumHotelEditorial>{
 const out:Record<string,BodrumHotelEditorial>={};
 for(let i=0;i<city.hotels.length;i++){
  const hotel=city.hotels[i];
  const code=media[i*3]?.propertyKey;
  const photoList=media.filter(x=>x.propertyKey===code&&valid(x)).map(x=>sourcePhoto(x,hotel.name,'fr'));
  out[hotel.name]={photos:photoList,credit:hotel.name+' · photographie attribuée, droits à confirmer',sourcePage:hotel.officialUrl,
   frBest:hotel.frWatch,enBest:hotel.enWatch,
   frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch};
 }
 return out;
}
function areaIndex(city:{areas:readonly AlpinePlace[]},media:readonly Candidate[],slug:keyof typeof areaNames):(BodrumPremiumPhoto|null)[]{
 return areaNames[slug].map((key,i)=>{
  const x=media.find(x=>x.key===key);
  return x&&valid(x)?sourcePhoto(x,city.areas[i].name,'fr'):null;
 });
}
export const alpineHotelEditorialByCity={
 'st-moritz':hotelIndex(stMoritzGuide,stMoritzManifest.hotels),
 aspen:hotelIndex(aspenGuide,aspenManifest.hotels),
 niseko:hotelIndex(nisekoGuide,nisekoManifest.hotels),
  ...mountainBatchHotelEditorialByCity
} as const;
export const alpineAreaVisualsByCity={
 'st-moritz':areaIndex(stMoritzGuide,stMoritzManifest.destinationScenes,'st-moritz'),
 aspen:areaIndex(aspenGuide,aspenManifest.destinationScenes,'aspen'),
 niseko:areaIndex(nisekoGuide,nisekoManifest.destinationScenes,'niseko'),
  ...mountainBatchAreaVisualsByCity
} as const;
export const alpineAvailablePhotoPathsByCity={
 'st-moritz':new Set([...stMoritzManifest.hotels,...stMoritzManifest.destinationScenes].filter(valid).map(x=>x.localPath!)),
 aspen:new Set([...aspenManifest.hotels,...aspenManifest.destinationScenes].filter(valid).map(x=>x.localPath!)),
 niseko:new Set([...nisekoManifest.hotels,...nisekoManifest.destinationScenes].filter(valid).map(x=>x.localPath!)),
  ...mountainBatchAvailablePhotoPathsByCity
} as const;
