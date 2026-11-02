#!/usr/bin/env node
/** Phu Quoc destination #73 complete noindex Preview release gate. Run with node -r ./scripts/register-ts.cjs scripts/check-phu-quoc-final.cjs */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {phuQuocDraftGuide:g}=require('../data/travel/phuQuocDraftGuide.ts');
const {phuQuocDraftFaq:faq}=require('../data/travel/phuQuocDraftFaq.ts');
const {phuQuocGuide:guide}=require('../data/travel/phuQuocGuide.ts');
const {phuQuocHotelEditorial,phuQuocAreaVisuals,confirmedPhuQuocPreviewAssets,phuQuocSchemaSafePhotos}=require('../data/travel/phuQuocPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/phuQuocMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=73);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'phu-quoc');assert(g.editorialFr.length>5500&&g.editorialEn.length>5100);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Regent Phu Quoc','JW Marriott Phu Quoc Emerald Bay Resort & Spa','Premier Village Phu Quoc Resort — Managed by Accor','La Veranda Resort Phu Quoc — MGallery Collection']);
for(const lang of ['fr','en']){assert.equal(faq[lang].length,8);assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);assert(faq[lang].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const key of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[key])).size,21,'duplicated '+key);
for(const p of all){assert(p.publicPreviewUrl.startsWith('https://'));assert(p.sourcePage.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=800&&p.sourceHeight>=450);assert(p.reviewNote.length>24);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(phuQuocHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(guide.photos).length,9);assert.equal(phuQuocAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedPhuQuocPreviewAssets.size,21);assert.equal(phuQuocSchemaSafePhotos.size,0);
for(const slug of ['phu-quoc','hoi-an','da-nang','vinh-hy-bay','hakone','kyoto','tokyo'])assert(featuredCityGuides[slug]);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-phu-quoc'));assert(c.includes('phuQuocHotelEditorial'));assert(c.includes('phuQuocDraftFaq'));assert(r.includes('isPhuQuocGuide?phuQuocDraftFaq'));assert(r.includes('phuQuocSchemaSafePhotos'));assert(r.includes('robots: { index: ready'));
console.log('PHU_QUOC_73_QA_SUCCESS: 73 bilingual guides, 88 slugs, four real hotels, 9 CC scenes, 12 real approved-for-private-preview hotel photos, 16 FAQs, noindex.');
