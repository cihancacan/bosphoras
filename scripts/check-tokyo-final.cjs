/** Tokyo #67: validate bilingual editorial, authenticity, noindex, and previous guides. */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {tokyoDraftGuide:g}=require('../data/travel/tokyoDraftGuide.ts');
const {tokyoDraftFaq:faq}=require('../data/travel/tokyoDraftFaq.ts');
const {tokyoGuide}=require('../data/travel/tokyoGuide.ts');
const {tokyoHotelEditorial,tokyoAreaVisuals,confirmedTokyoPreviewAssets,tokyoSchemaSafePhotos}=require('../data/travel/tokyoPremiumEditorial.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const m=require('../data/travel/tokyoMediaCandidates.json');const all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=67,'Do not lose existing Tokyo and 66 prior premium guides');assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'tokyo');assert(g.editorialFr.length>3500&&g.editorialEn.length>3500);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Aman Tokyo','Bvlgari Hotel Tokyo','Park Hyatt Tokyo','1 Hotel Tokyo']);
for(const lang of ['fr','en']){assert.equal(faq[lang].length,8);assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);assert(faq[lang].every(x=>x.a.length>80));}
assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);assert.equal(m.publicUseApproved,false);assert.equal(m.internalReviewedPhotoCount,0);
for(const field of ['publicPreviewUrl','sha256','pixelFingerprint','localPath'])assert.equal(new Set(all.map(p=>p[field])).size,21,field);
for(const p of all){assert(p.sourcePage.startsWith('https://'));assert(p.publicPreviewUrl.startsWith('https://'));assert.equal(p.sha256.length,64);assert(!p.visuallyVerified);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(let i=0;i<4;i++){const h=g.hotels[i];assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(tokyoHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(tokyoGuide.photos).length,9);assert.equal(tokyoAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedTokyoPreviewAssets.size,21);assert.equal(tokyoSchemaSafePhotos.size,0);
for(const slug of ['tokyo','palawan','sumba','new-york','istanbul','niseko'])assert(featuredCityGuides[slug]);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),routes=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-tokyo'));assert(routes.includes('isTokyoGuide?tokyoDraftFaq'));assert(routes.includes('tokyoSchemaSafePhotos'));assert(routes.includes('robots: { index: ready'));
console.log('TOKYO_67_QA_SUCCESS: 67 guides/88 geographic slugs, four real hotels, 21 uniquely sourced photo references, 16 FAQs, noindex and previous guides preserved.');
