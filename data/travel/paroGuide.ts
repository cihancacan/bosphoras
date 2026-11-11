/** Paro #81: publicly usable destination photography is CC-licensed with creator attribution.
 * Property marketing photos are handled separately and are never placed in public destination hero metadata. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {paroDraftGuide} from './paroDraftGuide';
import manifest from './paroMediaCandidates.json';
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes){
 if(!p.commercialRightsCleared||!p.visuallyVerified||!p.previewVisualApproved||!p.licenseUrl||!p.credit||!p.license)continue;
 if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'))continue;
 if(!/^(CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain)/.test(p.license))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const paroGuide:FeaturedCityGuideData={...paroDraftGuide,photos};
