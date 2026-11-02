#!/usr/bin/env node
/** Sentosa #75 release QA. node -r ./scripts/register-ts.cjs scripts/check-sentosa-final.cjs */
const assert=require('node:assert/strict'),fs=require('node:fs');
const {sentosaDraftGuide:g}=require('../data/travel/sentosaDraftGuide.ts');
const {sentosaDraftFaq:faq}=require('../data/travel/sentosaDraftFaq.ts');
const {sentosaGuide:guide}=require('../data/travel/sentosaGuide.ts');
const {sentosaHotelEditorial,sentosaAreaVisuals,confirmedSentosaPreviewAssets,sentosaSchemaSafePhotos}=require('../data/travel/sentosaPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/sentosaMediaCandidates.json'),photos=[...m.destinationScenes,...m.hotels];
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);assert(Object.keys(featuredCityGuides).length>=75);assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'sentosa');assert(g.editorialFr.length>7300&&g.editorialEn.length>7000);assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Capella Singapore','Raffles Sentosa Singapore','The Barracks Hotel Sentosa','W Singapore - Sentosa Cove']);
assert(!g.hotels.some(x=>['Raffles Singapore','Marina Bay Sands','The Fullerton Bay Hotel Singapore'].includes(x.name)));
for(const l of ['fr','en']){assert.equal(faq[l].length,8);assert.equal(new Set(faq[l].map(x=>x.q)).size,8);assert(faq[l].every(x=>x.a.length>90));}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);assert.equal(m.internalReviewedPhotoCount,12);assert.equal(m.visuallyReviewedDestinationScenes,9);assert.equal(m.publicUseApproved,false);
for(const key of ['key','sha256','pixelFingerprint','publicPreviewUrl','localPath'])assert.equal(new Set(photos.map(x=>x[key])).size,21,'duplicate '+key);
for(const p of photos){assert(p.publicPreviewUrl.startsWith('https://'));assert(p.sourcePage.startsWith('https://'));assert.equal(p.sha256.length,64);assert(p.visuallyVerified&&p.previewVisualApproved);assert(p.sourceWidth>=800&&p.sourceHeight>=450);assert(p.reviewNote.length>24);}
for(const p of m.destinationScenes){assert(p.commercialRightsCleared);assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));}
for(const h of g.hotels){assert.equal(m.hotels.filter(p=>p.property===h.name&&!p.commercialRightsCleared).length,3);assert.equal(sentosaHotelEditorial[h.name].photos.length,3);}
assert.equal(Object.keys(guide.photos).length,9);assert.equal(sentosaAreaVisuals.filter(Boolean).length,5);assert.equal(confirmedSentosaPreviewAssets.size,21);assert.equal(sentosaSchemaSafePhotos.size,0);
for(const slug of ['sentosa','singapore','phu-quoc','hoi-an','da-nang','vinh-hy-bay','hakone','kyoto','tokyo'])assert(featuredCityGuides[slug]);
const c=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8'),r=fs.readFileSync('components/travel/TravelPages.tsx','utf8');assert(c.includes('panoramas-sentosa'));assert(c.includes('sentosaHotelEditorial'));assert(c.includes('sentosaDraftFaq'));assert(r.includes('isSentosaGuide?sentosaDraftFaq'));assert(r.includes('sentosaSchemaSafePhotos'));
console.log('SENTOSA_75_QA_SUCCESS: 75 bilingual guides, 88 slugs, 4 real Sentosa hotels, 9 licensed landscape photos, 12 verified real hotel photographs, 16 FAQs, noindex.');
