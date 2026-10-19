import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { zermattDraftGuide } from './zermattDraftGuide';
import zermattMedia from './zermattMediaCandidates.json';

/** Zermatt editorial guide, FR and EN, noindex.
 * Images excluded unless individually checked for real identity, uniqueness and rights.
 * This is NOT Wink inventory nor a commercial booking availability offer.
 */
type Candidate = {
 key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;
 visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string;
 frCaption?:string;enCaption?:string;
};
const safe=(x:Candidate)=>
 x.status==='candidate_needs_visual_review' && x.visuallyVerified===true &&
 x.commercialRightsCleared===true && !x.visualQaWarning &&
 Boolean(x.localPath?.startsWith('/images/travel/zermatt-premium/')) &&
 Boolean(x.sourcePage?.startsWith('https://'));
const photos:Record<string,FeaturedCityPhoto>={};
for(const shot of zermattMedia.destinationScenes as Candidate[]){
 if(!safe(shot)||!shot.localPath||!shot.sourcePage)continue;
 photos[shot.key]={
  src:shot.localPath,
  fr:shot.frCaption||'Paysage vérifié à Zermatt',
  en:shot.enCaption||'Verified Zermatt alpine scene',
  author:shot.credit||'Source photo documentée',
  license:'Droits déclarés par Bosphoras',
  licenseUrl:shot.sourcePage,
  sourcePage:shot.sourcePage
 };
}
const draft=zermattDraftGuide;
export const zermattGuide:FeaturedCityGuideData={
 ...draft,
 hero:'scene-1',
 secondary:'scene-8',
 areas:draft.areas.map(x=>({...x})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),
 checksFr:[...draft.checksFr],
 checksEn:[...draft.checksEn],
 photos
};
