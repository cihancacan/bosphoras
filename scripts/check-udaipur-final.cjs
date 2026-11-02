#!/usr/bin/env node
/** Udaipur #76 complete private Preview QA; node -r ./scripts/register-ts.cjs scripts/check-udaipur-final.cjs */
const assert=require('node:assert/strict'),fs=require('node:fs');
const {udaipurDraftGuide:g}=require('../data/travel/udaipurDraftGuide.ts');
const {udaipurDraftFaq:faq}=require('../data/travel/udaipurDraftFaq.ts');
const {udaipurGuide:guide}=require('../data/travel/udaipurGuide.ts');
const {udaipurHotelEditorial,udaipurAreaVisuals,confirmedUdaipurPreviewAssets,udaipurSchemaSafePhotos}=require('../data/travel/udaipurPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/udaipurMediaCandidates.json'),photos=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);assert.equal(Object.keys(featuredCityGuides).length,76);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'udaipur');assert(g.editorialFr.length>7000&&g.editorialEn.length>6400);assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Taj Lake Palace, Udaipur','The Oberoi Udaivilas, Udaipur','The Leela Palace Udaipur','Raffles Udaipur']);
for(const l of ['fr','en']){assert.equal(faq[l].length,8);assert.equal(new Set(faq[l].map(x=>x.q)).size,8);assert(faq[l].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const key of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(photos.map(x=>x[key])).size,21,'duplicate '+key);
for(const p of photos){assert(p.publicPreviewUrl.startsWith('https://'));assert(p.sourcePage.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=800&&p.sourceHeight>=450);assert(p.reviewNote.length>24);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(udaipurHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(guide.photos).length,9);assert.equal(udaipurAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedUdaipurPreviewAssets.size,21);assert.equal(udaipurSchemaSafePhotos.size,0);
for(const slug of ['udaipur','sentosa','singapore','phu-quoc','hoi-an','da-nang','vinh-hy-bay','hakone','kyoto','tokyo'])assert(featuredCityGuides[slug]);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');assert(c.includes('panoramas-udaipur'));assert(c.includes('udaipurHotelEditorial'));assert(c.includes('udaipurDraftFaq'));assert(r.includes('isUdaipurGuide?udaipurDraftFaq'));assert(r.includes('udaipurSchemaSafePhotos'));
assert(g.editorialEn.includes('101 on the private island')&&g.editorialEn.includes('36 at Raffles Lakeshore'));
console.log('UDAIPUR_76_QA_SUCCESS: 76 premium bilingual guides, 88 slugs, 4 real hotels, 9 licensed landscapes, 12 property-specific hotel images, 16 FAQs, noindex.');
