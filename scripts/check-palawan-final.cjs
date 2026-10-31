/** Palawan #66 — 88-destination preservation, independent bilingual travel, 21 publisher and Commons sources, private noindex. */
const assert=require('node:assert/strict');
const {palawanDraftGuide:g}=require('../data/travel/palawanDraftGuide.ts');
const {palawanDraftFaq:faq}=require('../data/travel/palawanDraftFaq.ts');
const {palawanGuide}=require('../data/travel/palawanGuide.ts');
const {palawanHotelEditorial,palawanAreaVisuals,confirmedPalawanPreviewAssets,palawanSchemaSafePhotos}=require('../data/travel/palawanPremiumEditorial.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const scenes=require('../data/travel/palawanRemoteScenes.json');
const hotelphotos=require('../data/travel/palawanRemoteHotels.json');
assert.equal(travelDestinations.length,88);
assert.equal(new Set(travelDestinations.map(d=>d.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=66,'Do not lose pre-existing 66 premium guides');
assert.equal(approvedDestinationSlugs.size,0,'Private noindex protection');
assert.equal(g.slug,'palawan');
assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.equal(g.editorialFr.length>3500,true);assert.equal(g.editorialEn.length>3500,true);
for(const locale of ['fr','en']){
 assert.equal(faq[locale].length,8);
 assert.equal(new Set(faq[locale].map(f=>f.q)).size,8);
 assert(faq[locale].every(f=>f.q.length>20&&f.a.length>85));
}
assert.deepEqual(g.hotels.map(h=>h.name),[
 'El Nido Resorts Lagen Island','El Nido Resorts Pangulasian Island',
 'Cauayan Boutique Private Island','Discovery Coron'
]);
assert(!g.hotels.some(h=>/amanpulo/i.test(h.name)),'Never duplicate existing Pamalican destination');
assert.equal(new Set(g.hotels.map(h=>h.officialUrl)).size,4);
assert.equal(scenes.length,9);assert.equal(hotelphotos.length,12);
assert.equal(confirmedPalawanPreviewAssets.size,21);
assert.equal(palawanSchemaSafePhotos.size,0,'Do not put remote image in public JSON-LD');
const all=[...scenes,...hotelphotos];
for(const key of ['publicPreviewUrl','localPath','sha256']){
 assert.equal(new Set(all.map(p=>p[key])).size,21,'Duplicate '+key);
}
for(const p of scenes){
 assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'),'Location photo must be Commons');
 assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license),'Commercially valid Commons photo');
 assert.equal(p.commercialRightsCleared,true);
 assert.equal(p.visuallyVerified,false,'Do not misrepresent visual review');
 assert.equal(p.sha256.length,64);
 assert(p.publicPreviewUrl.startsWith('https://'));
}
const ids=['lagen','pangulasian','cauayan','discovery'];
for(let i=0;i<ids.length;i++){
 const p=hotelphotos.filter(x=>x.propertyKey===ids[i]);
 assert.equal(p.length,3,'three property-specific publisher images');
 assert(p.every(x=>x.property===g.hotels[i].name));
 assert(p.every(x=>x.commercialRightsCleared===false),'No independent hotel photo licensing');
 assert(p.every(x=>x.visuallyVerified===false));
 assert.equal(palawanHotelEditorial[g.hotels[i].name].photos.length,3);
}
assert.equal(Object.keys(palawanGuide.photos).length,9);
assert.equal(palawanAreaVisuals.filter(Boolean).length,5);
for(const slug of ['pamalican-island','sumba','chiang-mai','bangkok','istanbul','new-york','palawan'])assert(featuredCityGuides[slug], 'Missing original guide '+slug);
console.log('Palawan #66: 88 destinations, 66 guides, 21 source images, 16 FAQs, non-index and prior guides OK. Rights not cleared for public release.');
