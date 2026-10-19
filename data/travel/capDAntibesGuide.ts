import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { capDAntibesDraftGuide } from './capDAntibesDraftGuide';
import manifest from './capDAntibesMediaCandidates.json';
/** Curated Cap d'Antibes guide. Noindex, no confirmed supplier or room availability. */
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;
 visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string;
 frCaption?:string;enCaption?:string};
export const approvedCapDAntibesPhoto=(x:Candidate):boolean =>
 x.status==='candidate_needs_visual_review' && x.visuallyVerified===true &&
 x.commercialRightsCleared===true && !x.visualQaWarning &&
 !!x.localPath?.startsWith('/images/travel/cap-dantibes-premium/') &&
 !!x.sourcePage?.startsWith('https://') && !!x.frCaption && !!x.enCaption;
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of manifest.destinationScenes as Candidate[]){
 if(!approvedCapDAntibesPhoto(x)||!x.localPath||!x.sourcePage)continue;
 photos[x.key]={src:x.localPath,fr:x.frCaption!,en:x.enCaption!,
 author:x.credit||'Bosphoras — original source',license:'Attribution et droits à contrôler',
 licenseUrl:x.sourcePage,sourcePage:x.sourcePage};
}
const draft=capDAntibesDraftGuide;
export const capDAntibesGuide:FeaturedCityGuideData={
 ...draft,areas:draft.areas.map(a=>({...a})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(h=>({...h})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos
};
