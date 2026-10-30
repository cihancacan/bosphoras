/** Krabi #61 — source-gated private guide. Does not imply public photo rights or hotel distribution. */
import type { FeaturedCityGuideData, FeaturedCityPhoto } from './featuredCityGuides';
import { krabiDraftGuide } from './krabiDraftGuide';
import manifest from './krabiMediaCandidates.json';

export type KrabiDestinationPhoto = (typeof manifest.destinationScenes)[number];
export type KrabiHotelPhoto = (typeof manifest.hotels)[number];

export function approvedKrabiPhoto(p: KrabiDestinationPhoto): boolean {
  return p.rightsEvidenceType === 'wikimedia_license_metadata'
    && p.commercialRightsCleared === true
    && /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage)
    && /^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license)
    && p.status === 'source_identified_private_preview'
    && p.visuallyVerified === true
    && p.localPath.startsWith('/images/travel/krabi-premium/destination/')
    && p.sha256.length === 64 && p.bytes > 18000
    && Boolean(p.credit && p.licenseUrl && p.frCaption && p.enCaption);
}

export function approvedKrabiHotelPhoto(p: KrabiHotelPhoto, propertyKey: string, property: string): boolean {
  return p.propertyKey === propertyKey
    && p.property === property
    && p.rightsEvidenceType === 'hotel_official_publisher_not_licensed'
    && p.commercialRightsCleared === false
    && p.status === 'source_identified_private_preview'
    && p.visuallyVerified === true
    && p.localPath.startsWith('/images/travel/krabi-premium/' + propertyKey + '/')
    && p.sourcePage.startsWith('https://')
    && p.sha256.length === 64 && p.bytes > 18000
    && Boolean(p.credit && p.license && p.licenseUrl && p.frCaption && p.enCaption);
}

const photos: Record<string, FeaturedCityPhoto> = {};
for (const p of manifest.destinationScenes) {
  if (!approvedKrabiPhoto(p)) continue;
  photos[p.key] = {
    src: p.localPath,
    fr: p.frCaption, en: p.enCaption,
    author: p.credit, license: p.license, licenseUrl: p.licenseUrl,
    sourcePage: p.sourcePage,
  };
}

export const krabiGuide: FeaturedCityGuideData = { ...krabiDraftGuide, photos };

// Krabi FAQ discriminant deduplicated; rerun TypeScript and catalogue regression.
