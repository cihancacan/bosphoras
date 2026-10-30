/** Koh Yao Noi #62 — 21 authentic photographs, sourced, private-owner review only. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {kohYaoNoiDraftGuide:g}=require('../data/travel/kohYaoNoiDraftGuide.ts');
const {kohYaoNoiDraftFaq:faq}=require('../data/travel/kohYaoNoiDraftFaq.ts');
const {kohYaoNoiGuide,approvedKohYaoNoiScene,approvedKohYaoNoiHotelImage}=require('../data/travel/kohYaoNoiGuide.ts');
const {kohYaoNoiHotelEditorial,kohYaoNoiAreaVisuals,confirmedKohYaoNoiAssets,kohYaoNoiSchemaSafePhotos}=require('../data/travel/kohYaoNoiPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const manifest=require('../data/travel/kohYaoNoiMediaCandidates.json');

assert.equal(travelDestinations.length,88,'Preserve all 88 geographic destinations');
assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=62,'Preserve Koh Yao Noi when later destination guides are added');
assert.equal(approvedDestinationSlugs.size,0,'All Travel preview pages must remain noindex');
assert(featuredCityGuides.krabi,'Krabi #61 missing');
assert.equal(featuredCityGuides['koh-yao-noi'].slug,'koh-yao-noi');
assert.equal(kohYaoNoiGuide.slug,'koh-yao-noi');
assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);assert.equal(g.hotels.length,4);
assert.deepEqual(g.hotels.map(x=>x.name),[
 'Six Senses Yao Noi','Cape Kudu Hotel','TreeHouse Villas Koh Yao','9 Hornbills Tented Camp'
]);
assert.equal(new Set(g.hotels.map(x=>x.officialUrl)).size,4);
for(const lang of ['fr','en']){
 assert(g['editorial'+lang[0].toUpperCase()+lang.slice(1)].length>1700);
 assert.equal(faq[lang].length,8);
 assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);
 assert(faq[lang].every(x=>x.q.length>20&&x.a.length>70));
}
assert.equal(manifest.destination,'koh-yao-noi');
assert.equal(manifest.cityCount,9);assert.equal(manifest.hotelCount,12);
assert.equal(manifest.destinationScenes.length,9);assert.equal(manifest.hotels.length,12);
assert.equal(manifest.visualQA,'INTERNAL_21_OF_21_SOURCE_AND_VISUAL_REVIEW_PASSED_NOT_PUBLIC_LICENSED');
assert.equal(manifest.internalReviewedPhotoCount,21);
assert.equal(manifest.publicUseApproved,false);
const bytes=new Set(),pixels=new Set(),paths=new Set(),urls=new Set();
for(const p of [...manifest.destinationScenes,...manifest.hotels]){
 assert(p.localPath.startsWith('/images/travel/koh-yao-noi-premium/'));
 assert(p.sourcePage.startsWith('https://')&&p.downloadUrl.startsWith('https://'));
 assert(p.credit&&p.license&&p.licenseUrl&&p.frCaption&&p.enCaption&&p.visualReviewNote);
 assert.equal(p.visuallyVerified,true,'21/21 visual review is mandatory');
 assert.equal(p.status,'source_identified_private_preview');
 assert.equal(p.sha256.length,64);
 const raw=fs.readFileSync('public'+p.localPath);
 assert.equal(raw.toString('ascii',0,4),'RIFF');
 assert.equal(raw.toString('ascii',8,12),'WEBP');
 assert.equal(raw.length,p.bytes);
 assert(raw.length>17000);
 assert.equal(crypto.createHash('sha256').update(raw).digest('hex'),p.sha256);
 assert(!bytes.has(p.sha256),'Duplicate WebP bytes');bytes.add(p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'Duplicate image pixels');pixels.add(p.pixelFingerprint);
 assert(!paths.has(p.localPath),'Duplicate photo path');paths.add(p.localPath);
 assert(!urls.has(p.downloadUrl),'Duplicate photo URL');urls.add(p.downloadUrl);
 assert(confirmedKohYaoNoiAssets.has(p.localPath));
 if(p.property){
   assert.equal(p.commercialRightsCleared,false,'Hotel publisher photo cannot be commercially cleared automatically');
   assert.equal(p.rightsEvidenceType,'hotel_official_publisher_not_licensed');
   assert(g.hotels.some(h=>h.name===p.property));
   assert(!kohYaoNoiSchemaSafePhotos.has(p.localPath),'Unlicensed hotel image in JSON-LD');
 }else{
   assert.equal(p.rightsEvidenceType,'wikimedia_license_metadata');
   assert.equal(p.commercialRightsCleared,true);
   assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage));
   assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));
   assert(approvedKohYaoNoiScene(p));
 }
}
for(const [key,name] of [
 ['six-senses','Six Senses Yao Noi'],
 ['cape-kudu','Cape Kudu Hotel'],
 ['treehouse','TreeHouse Villas Koh Yao'],
 ['nine-hornbills','9 Hornbills Tented Camp']
]){
 const sources=manifest.hotels.filter(p=>approvedKohYaoNoiHotelImage(p,key,name));
 assert.equal(sources.length,3,name+' must have three true hotel images');
 assert.equal(kohYaoNoiHotelEditorial[name].photos.length,3,name+' gallery mismatch');
}
assert.equal(Object.keys(kohYaoNoiGuide.photos).length,9);
assert.equal(kohYaoNoiAreaVisuals.length,5);
assert.equal(kohYaoNoiAreaVisuals.filter(Boolean).length,5);
assert.equal(confirmedKohYaoNoiAssets.size,21);
assert.equal(kohYaoNoiSchemaSafePhotos.size,9);
const pages=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
const visual=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');
assert(pages.includes('isKohYaoNoiGuide?kohYaoNoiDraftFaq'));
assert(pages.includes('kohYaoNoiSchemaSafePhotos'));
assert(pages.includes('robots: { index: ready'));
assert(visual.includes('kohYaoNoiHotelEditorial')&&visual.includes('kohYaoNoiAreaVisuals'));
assert(visual.includes('panoramas-koh-yao-noi'));
assert(!visual.includes("city.slug==='koh-yao-noi'||city.slug==='krabi'||city.slug==='koh-yao-noi'"));
console.log('KOH_YAO_NOI_PASSED: 62 premium guides, 88 destinations, 21 unique verified WebPs, 5 sectors, 4 hotels, 16 FAQs, commercial rights gate and noindex intact.');
