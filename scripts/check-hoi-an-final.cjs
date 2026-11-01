/** Hoi An #72: strict hotel image and editorial release checks. */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {hoiAnDraftGuide:g}=require('../data/travel/hoiAnDraftGuide.ts');
const {hoiAnDraftFaq:f}=require('../data/travel/hoiAnDraftFaq.ts');
const {hoiAnGuide}=require('../data/travel/hoiAnGuide.ts');
const {hoiAnHotelEditorial,hoiAnAreaVisuals,confirmedHoiAnPreviewAssets,hoiAnSchemaSafePhotos}=require('../data/travel/hoiAnPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/hoiAnMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=72);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'hoi-an');assert(g.editorialFr.length>5300&&g.editorialEn.length>5400);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Four Seasons Resort The Nam Hai','Namia River Retreat','Anantara Hoi An Resort','NHAAN Resort & Spa Hoi An, Tapestry Collection by Hilton']);
for(const l of ['fr','en']){assert.equal(f[l].length,8);assert.equal(new Set(f[l].map(x=>x.q)).size,8);assert(f[l].every(x=>x.a.length>95));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const k of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[k])).size,21,'duplicate '+k);
for(const p of all){assert(p.publicPreviewUrl.startsWith('https://'));assert(p.sourcePage.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=850&&p.sourceHeight>=480);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(hoiAnHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(hoiAnGuide.photos).length,9);assert.equal(hoiAnAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedHoiAnPreviewAssets.size,21);assert.equal(hoiAnSchemaSafePhotos.size,0);
for(const slug of ['hoi-an','da-nang','vinh-hy-bay','hakone','kyoto','tokyo','palawan','sumba'])assert(featuredCityGuides[slug],slug);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-hoi-an'));assert(r.includes('isHoiAnGuide?hoiAnDraftFaq'));assert(r.includes('hoiAnSchemaSafePhotos'));assert(r.includes('robots: { index: ready'));
console.log('HOI_AN_72_QA_SUCCESS: 72 guides, 88 slugs, 4 hotels, 9 CC scenes, 12 manually-reviewed hotel photos, 16 FAQs, noindex.');
