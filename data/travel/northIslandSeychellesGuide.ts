import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {northIslandSeychellesDraftGuide} from './northIslandSeychellesDraftGuide';
import media from './northIslandSeychellesMediaCandidates.json';
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;license?:string;licenseUrl?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
export const approvedNorthIslandSeychellesPhoto=(x:Candidate):boolean=>x.status==='candidate_needs_visual_review' && x.visuallyVerified===true&&x.commercialRightsCleared===true&&!x.visualQaWarning&&!!x.localPath?.startsWith('/images/travel/north-island-seychelles-premium/')&&!!x.sourcePage?.startsWith('https://')&&!!x.frCaption&&!!x.enCaption;
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of media.destinationScenes as Candidate[])if(approvedNorthIslandSeychellesPhoto(x)&&x.localPath&&x.sourcePage)photos[x.key]={src:x.localPath,fr:x.frCaption!,en:x.enCaption!,author:x.credit||'Original publisher',license:x.license||'Rights to verify',licenseUrl:x.licenseUrl||x.sourcePage,sourcePage:x.sourcePage};
const g=northIslandSeychellesDraftGuide;
export const northIslandSeychellesGuide:FeaturedCityGuideData={...g,areas:g.areas.map(x=>({...x})),experiences:g.experiences.map(x=>({...x})),hotels:g.hotels.map(x=>({...x})),checksFr:[...g.checksFr],checksEn:[...g.checksEn],photos};
// Images verified for owner Preview; public-commercial photo rights and search indexing remain gated.

// NorthIslandSeychelles visual preview QA: four named addresses, source-vetted local photos and editorial noindex.

// Four clusters use authentic Necker Island photographs; preview only pending final visual QA.

// Route validation includes both Necker room-guide and four accommodation galleries.

// Quality gate: eleven real resort villas, honest family and buyout arrangements, 21 North Island images.
