import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { saintJeanCapFerratDraftGuide } from './saintJeanCapFerratDraftGuide';
import manifest from './saintJeanCapFerratMediaCandidates.json';

/** Curated local Saint-Jean-Cap-Ferrat guide — noindex, no provider inventory.
 * Do not expose any photo unless its exact hotel or location is individually verified.
 */
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;
  credit?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;
  visualQaWarning?:string;frCaption?:string;enCaption?:string};
export function approvedCapFerratPhoto(x:Candidate):boolean {
  return x.status==='candidate_needs_visual_review' && x.visuallyVerified===true &&
    x.commercialRightsCleared===true && !x.visualQaWarning &&
    Boolean(x.localPath?.startsWith('/images/travel/saint-jean-cap-ferrat-premium/')) &&
    Boolean(x.sourcePage?.startsWith('https://'));
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of manifest.destinationScenes as Candidate[]){
 if(!approvedCapFerratPhoto(x)||!x.localPath||!x.sourcePage)continue;
 photos[x.key]={src:x.localPath,
  fr:x.frCaption||'Saint-Jean-Cap-Ferrat : paysage photographié et vérifié',
  en:x.enCaption||'Saint-Jean-Cap-Ferrat: verified location photograph',
  author:x.credit||'Source photographique',
  license:'Autorisation d’utilisation Bosphoras, crédits photographiques conservés',
  licenseUrl:x.sourcePage,sourcePage:x.sourcePage};
}
const guide=saintJeanCapFerratDraftGuide;
export const saintJeanCapFerratGuide:FeaturedCityGuideData={
 ...guide,
 areas:guide.areas.map(x=>({...x})),
 experiences:guide.experiences.map(x=>({...x})),
 hotels:guide.hotels.map(x=>({...x})),
 checksFr:[...guide.checksFr],checksEn:[...guide.checksEn],
 photos
};
