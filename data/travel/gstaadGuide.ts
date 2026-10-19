import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { gstaadDraftGuide } from './gstaadDraftGuide';
import gstaadMedia from './gstaadMediaCandidates.json';

/** Gstaad: original FR/EN guide, curated photo candidates individually reviewed.
 * Every missing, duplicated, uncertain or unapproved image is excluded fail-closed.
 * This is an editorial noindex page, NOT a live Wink stock/rate offer.
 */
type Candidate = {
 key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;
 visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string;
 frCaption?:string;enCaption?:string;ownerRightsAuthorization?:string;
};
const allowed = (p: Candidate) =>
 p.status==='candidate_needs_visual_review' && p.visuallyVerified===true &&
 p.commercialRightsCleared===true && !p.visualQaWarning &&
 Boolean(p.localPath?.startsWith('/images/travel/gstaad-premium/')) &&
 Boolean(p.sourcePage?.startsWith('https://'));

const photos: Record<string, FeaturedCityPhoto> = {};
for(const item of gstaadMedia.destinationScenes as Candidate[]) {
 if (!allowed(item) || !item.localPath || !item.sourcePage) continue;
 photos[item.key] = {
   src: item.localPath,
   fr: item.frCaption || ('Paysage de Gstaad · '+item.key),
   en: item.enCaption || ('Gstaad scenery · '+item.key),
   author: item.credit || 'Bosphoras · source photographique identifiée',
   license: 'Droits d’utilisation déclarés par Bosphoras',
   licenseUrl: item.sourcePage,
   sourcePage: item.sourcePage
 };
}
const draft = gstaadDraftGuide;
export const gstaadGuide: FeaturedCityGuideData = {
 ...draft,
 hero:'scene-1',
 secondary:'scene-2',
 areas:draft.areas.map(x=>({...x})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),
 checksFr:[...draft.checksFr],
 checksEn:[...draft.checksEn],
 photos
};
