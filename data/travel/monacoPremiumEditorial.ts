import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
import { monacoDraftGuide } from './monacoDraftGuide';
import monacoManifest from './monacoMediaCandidates.json';

type Candidate={key:string;propertyKey?:string;status:string;localPath?:string;sourcePage?:string;
 credit?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string;
 frCaption?:string;enCaption?:string};
const valid=(p:Candidate)=>p.status==='candidate_needs_visual_review' &&
 p.visuallyVerified===true && p.commercialRightsCleared===true &&
 !p.visualQaWarning && Boolean(p.localPath?.startsWith('/images/travel/monaco-premium/')) &&
 Boolean(p.sourcePage?.startsWith('https://'));
const photo=(p:Candidate,hotel:string):BodrumPremiumPhoto=>({
 src:p.localPath!,
 fr:p.frCaption||'Photographie exacte de '+hotel,
 en:p.enCaption||'Authentic photograph of '+hotel,
 sourcePage:p.sourcePage!, credit:p.credit||hotel+' · source originale'
});
const hotelKeys=['hotel-de-paris','hotel-hermitage','hotel-metropole','monte-carlo-bay'] as const;
export const monacoHotelEditorial:Record<string,BodrumHotelEditorial>=
 Object.fromEntries(monacoDraftGuide.hotels.map((hotel,i)=>{
  const checked=(monacoManifest.hotels as Candidate[])
    .filter(x=>x.propertyKey===hotelKeys[i]&&valid(x)).map(x=>photo(x,hotel.name));
  return [hotel.name,{photos:checked,credit:hotel.name+' · Bosphoras photo authorization',
    sourcePage:hotel.officialUrl,frBest:hotel.frWatch,enBest:hotel.enWatch,
    frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch}];
 }));
const areaKeys=['scene-1','scene-6','scene-2','scene-4','scene-3'] as const;
export const monacoAreaVisuals:(BodrumPremiumPhoto|null)[]=areaKeys.map((key,i)=>{
 const x=(monacoManifest.destinationScenes as Candidate[]).find(x=>x.key===key);
 return x&&valid(x)?photo(x,monacoDraftGuide.areas[i].name):null;
});
export const confirmedMonacoAssets=new Set(
 [...monacoManifest.hotels,...monacoManifest.destinationScenes].filter(valid).map(x=>x.localPath!)
);
