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

// Strict photo release gate: genuine hotel imagery only; no promo icon, generic landscape, or boat tour in hotel gallery.
const permittedSubjects=new Set(['hotel-exterior-and-pool','hotel-villa-interior','hotel-guest-room','hotel-pool-residence','hotel-pool-villa','hotel-wellness','hotel-property-facility']);
assert.equal(m.internalReviewedPhotoCount,12,'All 12 hotel photos must receive actual contact-sheet identity review');
assert.equal(m.publicUseApproved,false,'Preview image review must NOT imply publisher rights');
for(const p of m.hotels){
 assert.equal(p.visuallyVerified,true,p.key+' visually unreviewed');
 assert.equal(p.previewVisualApproved,true,p.key+' not accepted for private preview');
 assert(permittedSubjects.has(p.subjectClass),'Non-hotel subject: '+p.key+':'+p.subjectClass);
 assert(p.reviewNote.length>24,'Missing evidence of manual visual review '+p.key);
 assert.equal(p.visualReviewDate,'2026-11-01');
 assert.equal(p.commercialRightsCleared,false,'No hotel commercial photo rights established');
 assert(!/trang-chu-163\.jpg|dich-vu-tau-day-kinh-tham-quan-vinh-ngam-san-ho/i.test(p.publicPreviewUrl),'Generic clipart or tourist boat group incorrectly classified as hotel');
 assert(!/tour group|travel banner|glob[e]?|suitcase|poster|mockup|stock illustration/i.test(p.enCaption),'Generic imagery as hotel photograph');
}
assert(m.hotels.find(p=>p.key==='casa-1').publicPreviewUrl.includes('khach-san-casa-maya-ninh-thuan-be-boi'),'Casa Maya must show identifiable facade/pool not travel icon');
assert(m.hotels.find(p=>p.key==='casa-1').sourcePage.startsWith('https://phetravel.com/'),'Correct third-party photo attribution');
assert(m.hotels.find(p=>p.key==='casa-1').rightsEvidenceType==='third_party_publisher_not_licensed');
assert(m.hotels.find(p=>p.key==='swiss-1').publicPreviewUrl.includes('01-GARDEN-VILLA.'),'Swiss-1 should depict real villa instead of generic beach');
assert(m.hotels.find(p=>p.key==='vinhhy-3').publicPreviewUrl.includes('DELUXE-ROOM-331-5'),"No boat excursion in Vinh Hy hotel gallery");
console.log('BOSPHORAS_IMAGE_QA_STRICT_SUCCESS: 12 real hotel photographs manually reviewed, correct Casa Maya and property identities; four off-topic items replaced.');
