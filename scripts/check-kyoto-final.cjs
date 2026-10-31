/** Kyoto #68: validate four hotels, original bilingual guides, distinct photo sources, noindex and preserved catalogue. */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {kyotoDraftGuide:g}=require('../data/travel/kyotoDraftGuide.ts');
const {kyotoDraftFaq:f}=require('../data/travel/kyotoDraftFaq.ts');
const {kyotoGuide}=require('../data/travel/kyotoGuide.ts');
const {kyotoHotelEditorial,kyotoAreaVisuals,confirmedKyotoPreviewAssets,kyotoSchemaSafePhotos}=require('../data/travel/kyotoPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/kyotoMediaCandidates.json');const all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert.equal(Object.keys(featuredCityGuides).length,68);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'kyoto');assert(g.editorialFr.length>4200&&g.editorialEn.length>4200);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Aman Kyoto','Park Hyatt Kyoto','The Ritz-Carlton, Kyoto','Four Seasons Hotel Kyoto']);
for(const l of ['fr','en']){assert.equal(f[l].length,8);assert.equal(new Set(f[l].map(x=>x.q)).size,8);assert(f[l].every(x=>x.a.length>80));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,0);assert.equal(m.publicUseApproved,false);
for(const k of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[k])).size,21,'image duplicates '+k);
for(const p of all){assert(p.sourcePage.startsWith('https://'));assert(p.publicPreviewUrl.startsWith('https://'));assert.equal(p.sha256.length,64);assert(!p.visuallyVerified);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(kyotoHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(kyotoGuide.photos).length,9);assert.equal(kyotoAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedKyotoPreviewAssets.size,21);assert.equal(kyotoSchemaSafePhotos.size,0);
for(const s of ['kyoto','tokyo','palawan','sumba','new-york','istanbul','niseko'])assert(featuredCityGuides[s],s);
const comp=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),routes=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(comp.includes('panoramas-kyoto'));assert(routes.includes('isKyotoGuide?kyotoDraftFaq'));assert(routes.includes('kyotoSchemaSafePhotos'));assert(routes.includes('robots: { index: ready'));
console.log('KYOTO_68_QA_SUCCESS: 68 guides, 88 slugs, 4 hotels, 9 Commons +12 publisher refs, 16 FAQs, noindex and previous guides preserved.');
