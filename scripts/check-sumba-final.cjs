/** Sumba #65 — data, photo provenance, rights, routing and no-regression QA. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {sumbaDraftGuide:g}=require('../data/travel/sumbaDraftGuide.ts');
const {sumbaDraftFaq:faq}=require('../data/travel/sumbaDraftFaq.ts');
const {sumbaGuide,approvedSumbaScene,approvedSumbaHotelImage}=require('../data/travel/sumbaGuide.ts');
const {sumbaHotelEditorial,sumbaAreaVisuals,confirmedSumbaAssets,sumbaSchemaSafePhotos}=require('../data/travel/sumbaPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/sumbaMediaCandidates.json');
assert.equal(travelDestinations.length,88);
assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert.equal(Object.keys(featuredCityGuides).length,64,'65 premium guides after Sumba');
assert.equal(approvedDestinationSlugs.size,0,'Do not index private preview');
for(const slug of ['sumba','chiang-mai','bangkok','krabi','koh-yao-noi','san-miguel-de-allende','mayakoba','los-angeles','miami','new-york','istanbul','monaco','gstaad'])assert(featuredCityGuides[slug],'lost guide: '+slug);
assert.equal(sumbaGuide.slug,'sumba');
assert.equal(g.areas.length,5);
assert.equal(g.experiences.length,5);
assert.equal(g.hotels.length,4);
assert.deepEqual(g.hotels.map(x=>x.name),[
 'NIHI Sumba','Cap Karoso','The Sanubari','Alamayah Boutique Retreat'
]);
assert.equal(new Set(g.hotels.map(x=>x.officialUrl)).size,4);
for(const lang of ['fr','en']){
 assert(g['editorial'+lang[0].toUpperCase()+lang.slice(1)].length>3000);
 assert.equal(faq[lang].length,8);
 assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);
 assert(faq[lang].every(x=>x.q.length>20&&x.a.length>75));
}
assert(g.hotels.find(h=>h.name==='NIHI Sumba').en.includes('31'),'NIHI distinct 31 villas');
assert(g.hotels.find(h=>h.name==='Cap Karoso').en.includes('42 sqm'),'Cap Karoso Studio category');
assert.equal(m.destination,'sumba');
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);
assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);
assert.equal(m.visualQA,'INTERNAL_21_OF_21_PHOTO_IDENTITY_VERIFIED_PRIVATE_NOT_PUBLIC_LICENSED');
assert.equal(m.internalReviewedPhotoCount,21);
assert.equal(m.publicUseApproved,false);
const fingerprints=new Set(),bytes=new Set(),files=new Set(),sources=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 assert.equal(p.visuallyVerified,true);
 assert.equal(p.status,'source_identified_private_preview');
 assert(p.visualReviewNote && p.frCaption && p.enCaption && p.credit && p.license && p.licenseUrl);
 assert(p.sourcePage.startsWith('https://') && p.downloadUrl.startsWith('https://'));
 assert(p.localPath.startsWith('/images/travel/sumba-premium/'));
 const b=fs.readFileSync('public'+p.localPath);
 assert.equal(b.toString('ascii',0,4),'RIFF');
 assert.equal(b.toString('ascii',8,12),'WEBP');
 assert.equal(b.length,p.bytes);assert(b.length>17000);
 assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.sha256);
 assert(!fingerprints.has(p.pixelFingerprint),'duplicate pixel identity');fingerprints.add(p.pixelFingerprint);
 assert(!bytes.has(p.sha256),'duplicate bytes');bytes.add(p.sha256);
 assert(!files.has(p.localPath),'duplicate photo path');files.add(p.localPath);
 assert(!sources.has(p.downloadUrl),'duplicate original image URL');sources.add(p.downloadUrl);
 assert(confirmedSumbaAssets.has(p.localPath),'whitelist missing media');
 if(p.property){
  assert.equal(p.commercialRightsCleared,false,'Hotel publisher rights must not be auto-cleared');
  assert.equal(p.rightsEvidenceType,'hotel_official_publisher_not_licensed');
  assert(g.hotels.some(h=>h.name===p.property));
  assert(!sumbaSchemaSafePhotos.has(p.localPath),'No hotel publisher photo in JSON-LD');
 }else{
  assert.equal(p.commercialRightsCleared,true);
  assert.equal(p.rightsEvidenceType,'wikimedia_license_metadata');
  assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage));
  assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));
  assert(approvedSumbaScene(p));
  assert(sumbaSchemaSafePhotos.has(p.localPath));
 }
}
for(const [key,name] of [
 ['nihi','NIHI Sumba'],
 ['cap-karoso','Cap Karoso'],
 ['sanubari','The Sanubari'],
 ['alamayah','Alamayah Boutique Retreat']
]){
 assert.equal(m.hotels.filter(p=>approvedSumbaHotelImage(p,key,name)).length,3);
 assert.equal(sumbaHotelEditorial[name].photos.length,3);
}
assert.equal(confirmedSumbaAssets.size,21);
assert.equal(sumbaSchemaSafePhotos.size,9);
assert.equal(Object.keys(sumbaGuide.photos).length,9);
assert.equal(sumbaAreaVisuals.filter(Boolean).length,5);
const visual=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');
const routes=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(visual.includes('panoramas-sumba'));
assert(visual.includes('sumbaHotelEditorial')&&visual.includes('sumbaAreaVisuals'));
assert(routes.includes('isSumbaGuide?sumbaDraftFaq'));
assert(routes.includes('sumbaSchemaSafePhotos'));
assert(routes.includes('robots: { index: ready'));
assert(!visual.includes('text-[#f3dfb9]\'>'),'Reject malformed quoted JSX attribute');
console.log('SUMBA_QA_SUCCESS: 65 premium guides, 88 original slugs, 21 unique WebP, 4 hotels, 5 sectors, 16 FAQ, protected noindex rights gates.');
