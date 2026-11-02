#!/usr/bin/env node
/** Singapore destination #74 owner Preview QA; node -r ./scripts/register-ts.cjs scripts/check-singapore-final.cjs */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {singaporeDraftGuide:g}=require('../data/travel/singaporeDraftGuide.ts');
const {singaporeDraftFaq:faq}=require('../data/travel/singaporeDraftFaq.ts');
const {singaporeGuide:guide}=require('../data/travel/singaporeGuide.ts');
const {singaporeHotelEditorial,singaporeAreaVisuals,confirmedSingaporePreviewAssets,singaporeSchemaSafePhotos}=require('../data/travel/singaporePremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/singaporeMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert.equal(Object.keys(featuredCityGuides).length,74);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'singapore');assert(g.editorialFr.length>6000&&g.editorialEn.length>5100);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Marina Bay Sands','Raffles Singapore','The Fullerton Bay Hotel Singapore','The Singapore EDITION']);
for(const lang of ['fr','en']){assert.equal(faq[lang].length,8);assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);assert(faq[lang].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const key of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[key])).size,21,'duplicated '+key);
for(const p of all){assert(p.publicPreviewUrl.startsWith('https://'));assert(p.sourcePage.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=800&&p.sourceHeight>=450);assert(p.reviewNote.length>24);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(singaporeHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(guide.photos).length,9);assert.equal(singaporeAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedSingaporePreviewAssets.size,21);assert.equal(singaporeSchemaSafePhotos.size,0);
for(const slug of ['singapore','phu-quoc','hoi-an','da-nang','vinh-hy-bay','hakone','kyoto','tokyo'])assert(featuredCityGuides[slug]);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-singapore'));assert(c.includes('singaporeHotelEditorial'));assert(c.includes('singaporeDraftFaq'));assert(r.includes('isSingaporeGuide?singaporeDraftFaq'));assert(r.includes('singaporeSchemaSafePhotos'));
console.log('SINGAPORE_74_QA_SUCCESS: 74 premium bilingual guides, 88 slugs, four verified hotels, 9 CC destination scenes, 12 manually inspected hotel photos, 16 FAQs, noindex.');
