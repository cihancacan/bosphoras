/** Source-verified imagery for the private San Miguel de Allende guide. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {sanMiguelDeAllendeDraftGuide} from './sanMiguelDeAllendeDraftGuide';
import manifest from './sanMiguelDeAllendeMediaCandidates.json';
export type SanMiguelPhoto = (typeof manifest.destinationScenes)[number];
const destinationSources = new Set([
 'https://www.visitsanmiguel.travel/en',
 'https://www.belmond.com/hotels/north-america/mexico/san-miguel-de-allende/belmond-casa-de-sierra-nevada/',
 'https://elcharco.org.mx/area-natural-protegida/'
]);
export function approvedSanMiguelPhoto(p:SanMiguelPhoto):boolean {
 const licensed = p.rightsEvidenceType==='wikimedia_cc_attribution' && p.commercialRightsCleared===true
  && p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')
  && (p.license.startsWith('CC BY') || p.license==='Public domain' || p.license==='CC0')
  && !!p.licenseUrl;
 const publisher = p.commercialRightsCleared===false
  && p.rightsEvidenceType==='official_destination_publisher_not_commercially_cleared'
  && destinationSources.has(p.sourcePage);
 return (licensed||publisher) && p.status==='source_identified_private_preview'
  && p.visuallyVerified===true && p.localPath.startsWith('/images/travel/san-miguel-de-allende-premium/destination/')
  && !!p.credit && !!p.frCaption && !!p.enCaption && p.sha256.length===64 && p.bytes>18000;
}
const photos:Record<string,FeaturedCityPhoto>={};
for(const p of manifest.destinationScenes) {
 if(!approvedSanMiguelPhoto(p))continue;
 photos[p.key]={src:p.localPath,fr:p.frCaption,en:p.enCaption,author:p.credit,license:p.license,licenseUrl:p.licenseUrl,sourcePage:p.sourcePage};
}
export const sanMiguelDeAllendeGuide:FeaturedCityGuideData={...sanMiguelDeAllendeDraftGuide,photos};
