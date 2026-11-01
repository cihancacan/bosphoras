/** Da Nang #71: editorial, image identity, licensing and prior-destination regression. */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {daNangDraftGuide:g}=require('../data/travel/daNangDraftGuide.ts');
const {daNangDraftFaq:f}=require('../data/travel/daNangDraftFaq.ts');
const {daNangGuide}=require('../data/travel/daNangGuide.ts');
const {daNangHotelEditorial,daNangAreaVisuals,confirmedDaNangPreviewAssets,daNangSchemaSafePhotos}=require('../data/travel/daNangPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/daNangMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=71,'Keep Da Nang and all earlier premium guides');assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'da-nang');assert(g.editorialFr.length>6500&&g.editorialEn.length>6500);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['InterContinental Danang Sun Peninsula Resort','TIA Wellness Resort','Hyatt Regency Danang Resort and Spa','Naman Retreat']);
assert(g.hotels[1].frWatch.includes('80 minutes'));assert(g.hotels[2].frWatch.includes('toboggan'));
for(const l of ['fr','en']){assert.equal(f[l].length,8);assert.equal(new Set(f[l].map(x=>x.q)).size,8);assert(f[l].every(x=>x.a.length>95));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const k of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[k])).size,21,'duplicate '+k);
for(const p of all){assert(p.sourcePage.startsWith('https://'));assert(p.publicPreviewUrl.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=900&&p.sourceHeight>=500);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(daNangHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(daNangGuide.photos).length,9);assert.equal(daNangAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedDaNangPreviewAssets.size,21);assert.equal(daNangSchemaSafePhotos.size,0);
for(const slug of ['da-nang','vinh-hy-bay','hakone','kyoto','tokyo','palawan','sumba','istanbul'])assert(featuredCityGuides[slug],slug);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-da-nang'));assert(r.includes('isDaNangGuide?daNangDraftFaq'));assert(r.includes('daNangSchemaSafePhotos'));assert(r.includes('robots: { index: ready'));
console.log('DA_NANG_71_QA_SUCCESS: 71 premium guides, 88 slugs, 4 hotels, 9 licensed scenes, 12 real visually-reviewed hotel photos, 16 FAQ, noindex.');
