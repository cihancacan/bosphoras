const assert=require('node:assert/strict');const fs=require('node:fs');
const {vinhHyBayDraftGuide:g}=require('../data/travel/vinhHyBayDraftGuide.ts');
const {vinhHyBayDraftFaq:f}=require('../data/travel/vinhHyBayDraftFaq.ts');
const {vinhHyBayGuide}=require('../data/travel/vinhHyBayGuide.ts');
const {vinhHyBayHotelEditorial,vinhHyBayAreaVisuals,confirmedVinhHyBayPreviewAssets,vinhHyBaySchemaSafePhotos}=require('../data/travel/vinhHyBayPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/vinhHyBayMediaCandidates.json'),all=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert.equal(Object.keys(featuredCityGuides).length,70);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'vinh-hy-bay');assert(g.editorialFr.length>5000&&g.editorialEn.length>5000);
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Amanoi','Swiss-Belvillas Solavita Binh Tien','Casa Maya Resort','Vinh Hy Resort']);
assert(g.hotels[1].enWatch.includes('17 km'));assert(g.hotels[2].frWatch.includes('5 étoiles'));
for(const l of ['fr','en']){assert.equal(f[l].length,8);assert.equal(new Set(f[l].map(x=>x.q)).size,8);assert(f[l].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,0);assert.equal(m.publicUseApproved,false);
for(const k of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(all.map(x=>x[k])).size,21,'dup '+k);
for(const p of all){assert(p.sourcePage.startsWith('https://'));assert(p.publicPreviewUrl.startsWith('https://'));assert.equal(p.sha256.length,64);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(vinhHyBayHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(vinhHyBayGuide.photos).length,9);assert.equal(vinhHyBayAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedVinhHyBayPreviewAssets.size,21);assert.equal(vinhHyBaySchemaSafePhotos.size,0);
for(const s of ['vinh-hy-bay','hakone','kyoto','tokyo','palawan','sumba','istanbul'])assert(featuredCityGuides[s],s);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(c.includes('panoramas-vinh-hy-bay'));assert(r.includes('isVinhHyBayGuide?vinhHyBayDraftFaq'));assert(r.includes('vinhHyBaySchemaSafePhotos'));assert(r.includes('robots: { index: ready'));
console.log('VINH_HY_70_QA_SUCCESS: 70 premium editorials, 88 slugs, four honest lodging tiers, 21 images, 16 FAQs, noindex.');
