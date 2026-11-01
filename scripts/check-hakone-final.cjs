/** Hakone #69 — exact ryokans, age restrictions, 21 image identities and previously completed guides. */
const assert=require('node:assert/strict');const fs=require('node:fs');
const {hakoneDraftGuide:g}=require('../data/travel/hakoneDraftGuide.ts');
const {hakoneDraftFaq:f}=require('../data/travel/hakoneDraftFaq.ts');
const {hakoneGuide}=require('../data/travel/hakoneGuide.ts');
const {hakoneHotelEditorial,hakoneAreaVisuals,confirmedHakonePreviewAssets,hakoneSchemaSafePhotos}=require('../data/travel/hakonePremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/hakoneMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=69,'Preserve Hakone and all prior city guides');assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'hakone');assert(g.editorialFr.length>4400&&g.editorialEn.length>4400);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Gora Kadan','Hakone Suishoen','Hakone Ginyu','Kinnotake Sengokuhara']);
assert(g.hotels[3].frWatch.includes('12 ans')&&g.hotels[3].enWatch.includes('12'));
for(const l of ['fr','en']){assert.equal(f[l].length,8);assert.equal(new Set(f[l].map(x=>x.q)).size,8);assert(f[l].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,0);assert.equal(m.publicUseApproved,false);
for(const k of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[k])).size,21,'duplicate '+k);
for(const p of all){assert(p.sourcePage.startsWith('https://'));assert(p.publicPreviewUrl.startsWith('https://'));assert.equal(p.sha256.length,64);assert(!p.visuallyVerified);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(hakoneHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(hakoneGuide.photos).length,9);assert.equal(hakoneAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedHakonePreviewAssets.size,21);assert.equal(hakoneSchemaSafePhotos.size,0);
for(const slug of ['hakone','kyoto','tokyo','palawan','sumba','istanbul','new-york'])assert(featuredCityGuides[slug],slug);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-hakone'));assert(r.includes('isHakoneGuide?hakoneDraftFaq'));assert(r.includes('hakoneSchemaSafePhotos'));assert(r.includes('robots: { index: ready'));
console.log('HAKONE_69_QA_SUCCESS: 69 guides, 88 slugs, 4 verified ryokans, 9 Commons + 12 publisher refs, 16 FAQ, strict 12+ rule, noindex and regressions.');
