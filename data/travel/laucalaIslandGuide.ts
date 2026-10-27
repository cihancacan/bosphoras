import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {laucalaIslandDraftGuide} from './laucalaIslandDraftGuide';
import media from './laucalaIslandMediaCandidates.json';
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
export const approvedLaucalaIslandPhoto=(x:Candidate):boolean=>x.status==='candidate_needs_visual_review' && x.visuallyVerified===true&&x.commercialRightsCleared===true&&!x.visualQaWarning&&!!x.localPath?.startsWith('/images/travel/laucala-island-premium/')&&!!x.sourcePage?.startsWith('https://')&&!!x.frCaption&&!!x.enCaption;
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of media.destinationScenes as Candidate[])if(approvedLaucalaIslandPhoto(x)&&x.localPath&&x.sourcePage)photos[x.key]={src:x.localPath,fr:x.frCaption!,en:x.enCaption!,author:x.credit||'Original publisher',license:x.license||'Rights to verify',licenseUrl:x.licenseUrl||x.sourcePage,sourcePage:x.sourcePage};
const g=laucalaIslandDraftGuide;
export const laucalaIslandGuide:FeaturedCityGuideData={...g,areas:g.areas.map(x=>({...x})),experiences:g.experiences.map(x=>({...x})),hotels:g.hotels.map(x=>({...x})),checksFr:[...g.checksFr],checksEn:[...g.checksEn],photos};
// All photography is representative LAUCALA resort imagery only; not a confirmed exact historic villa.

// Laucala owner-preview QA: 21 unique original-site files, representative visual captions,
// 24-villa current portfolio, October 2027 reopening and 88 unchanged destination slugs.
