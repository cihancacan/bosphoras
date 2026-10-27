import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {canouanDraftGuide} from './canouanDraftGuide';
import media from './canouanMediaCandidates.json';
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
export const approvedCanouanPhoto=(x:Candidate):boolean=>x.status==='candidate_needs_visual_review' && x.visuallyVerified===true&&x.commercialRightsCleared===true&&!x.visualQaWarning&&!!x.localPath?.startsWith('/images/travel/canouan-premium/')&&!!x.sourcePage?.startsWith('https://')&&!!x.frCaption&&!!x.enCaption;
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of media.destinationScenes as Candidate[])if(approvedCanouanPhoto(x)&&x.localPath&&x.sourcePage)photos[x.key]={src:x.localPath,fr:x.frCaption!,en:x.enCaption!,author:x.credit||'Original publisher',license:x.license||'Rights to verify',licenseUrl:x.licenseUrl||x.sourcePage,sourcePage:x.sourcePage};
const g=canouanDraftGuide;
export const canouanGuide:FeaturedCityGuideData={...g,areas:g.areas.map(x=>({...x})),experiences:g.experiences.map(x=>({...x})),hotels:g.hotels.map(x=>({...x})),checksFr:[...g.checksFr],checksEn:[...g.checksEn],photos};
// Images verified for owner Preview; public-commercial photo rights and search indexing remain gated.

// Canouan visual preview QA: four named addresses, source-vetted local photos and editorial noindex.
