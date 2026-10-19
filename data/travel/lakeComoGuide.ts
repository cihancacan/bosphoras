import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { lakeComoDraftGuide } from './lakeComoDraftGuide';
import manifest from './lakeComoMediaCandidates.json';
/** Lake Como editorial guide; all pictures fail-closed until separately visual-reviewed. */
type Candidate={key:string;status:string;localPath?:string;sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;visuallyVerified?:boolean;commercialRightsCleared?:boolean;visualQaWarning?:string};
export const approvedLakeComoPhoto=(x:Candidate):boolean=>
 x.status==='candidate_needs_visual_review' && x.visuallyVerified===true && x.commercialRightsCleared===true &&
 !x.visualQaWarning && !!x.localPath?.startsWith('/images/travel/lake-como-premium/') &&
 !!x.sourcePage?.startsWith('https://') && !!x.frCaption && !!x.enCaption;
const photos:Record<string,FeaturedCityPhoto>={};
for(const x of manifest.destinationScenes as Candidate[]){
 if(!approvedLakeComoPhoto(x)||!x.localPath||!x.sourcePage)continue;
 photos[x.key]={src:x.localPath,fr:x.frCaption!,en:x.enCaption!,
 author:x.credit||'Source originale à créditer',license:'Attribution et licence propres à la source',
 licenseUrl:x.sourcePage,sourcePage:x.sourcePage};
}
const g=lakeComoDraftGuide;
export const lakeComoGuide:FeaturedCityGuideData={...g,
 areas:g.areas.map(x=>({...x})),experiences:g.experiences.map(x=>({...x})),
 hotels:g.hotels.map(x=>({...x})),checksFr:[...g.checksFr],checksEn:[...g.checksEn],
 photos};
