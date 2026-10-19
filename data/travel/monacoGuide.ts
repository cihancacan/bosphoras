import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { monacoDraftGuide } from './monacoDraftGuide';
import monacoManifest from './monacoMediaCandidates.json';

/** Curated Monaco guide: real, manually verified destination photos only.
 * Rights confirmation does not bypass the source/visual QA gates.
 * Noindex editorial copy, without supplier inventory or price promises.
 */
type MediaCandidate = {key:string;status:string;localPath?:string;sourcePage?:string;
  credit?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;
  visualQaWarning?:string;frCaption?:string;enCaption?:string};
export function approvedMonacoCandidate(x:MediaCandidate):boolean {
 return x.status==='candidate_needs_visual_review' && x.visuallyVerified===true &&
   x.commercialRightsCleared===true && !x.visualQaWarning &&
   Boolean(x.localPath?.startsWith('/images/travel/monaco-premium/')) &&
   Boolean(x.sourcePage?.startsWith('https://'));
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of monacoManifest.destinationScenes as MediaCandidate[]){
 if(!approvedMonacoCandidate(x)||!x.localPath||!x.sourcePage)continue;
 photos[x.key]={
  src:x.localPath,
  fr:x.frCaption||'Paysage authentique à Monaco',
  en:x.enCaption||'Authentic Monaco location photograph',
  author:x.credit||'Auteur documenté',
  license:'Autorisation Bosphoras déclarée, crédits conservés',
  licenseUrl:x.sourcePage,
  sourcePage:x.sourcePage
 };
}
const draft=monacoDraftGuide;
export const monacoGuide:FeaturedCityGuideData={
 ...draft,
 areas:draft.areas.map(x=>({...x})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),
 checksFr:[...draft.checksFr],
 checksEn:[...draft.checksEn],
 photos
};
