/** Krabi #61: independent editorial, 21 authentic source files and rights-safe private QA. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {krabiDraftGuide:g}=require('../data/travel/krabiDraftGuide.ts');
const {krabiDraftFaq:faq}=require('../data/travel/krabiDraftFaq.ts');
const {krabiGuide,approvedKrabiPhoto,approvedKrabiHotelPhoto}=require('../data/travel/krabiGuide.ts');
const {krabiHotelEditorial,krabiAreaVisuals,confirmedKrabiAssets,krabiSchemaSafePhotos}=require('../data/travel/krabiPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const manifest=require('../data/travel/krabiMediaCandidates.json');

assert.equal(travelDestinations.length,88,'Never modify original geographic catalogue');
assert.equal(new Set(travelDestinations.map(p=>p.slug)).size,88);
assert(travelDestinations.some(p=>p.slug==='krabi'),'Krabi must exist in the original catalogue');
assert(Object.keys(featuredCityGuides).length>=61,'Preserve Krabi and allow future premium guides');
assert.equal(approvedDestinationSlugs.size,0,'Unlicensed material must never become publicly indexable');
assert.deepEqual(featuredCityGuides.krabi.slug,'krabi');
for(const slug of ['san-miguel-de-allende','mayakoba','los-angeles','miami','new-york','istanbul','monaco','gstaad'])assert(featuredCityGuides[slug],'Historical guide lost: '+slug);
assert.equal(g.slug,'krabi');assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.equal(g.hotels.length,4);
assert.deepEqual(g.hotels.map(x=>x.name),[
 'Rayavadee','Phulay Bay, a Ritz-Carlton Reserve','Banyan Tree Krabi','The Tubkaak Krabi Boutique Resort'
]);
assert.equal(new Set(g.hotels.map(x=>x.officialUrl)).size,4);
for(const locale of ['fr','en']){
 assert(g['editorial'+locale[0].toUpperCase()+locale.slice(1)].length>1700);
 assert.equal(faq[locale].length,8);
 assert.equal(new Set(faq[locale].map(x=>x.q)).size,8);
 assert(faq[locale].every(x=>x.q.length>20&&x.a.length>70));
}
assert.equal(manifest.destinationScenes.length,9);
assert.equal(manifest.hotels.length,12);
assert.equal(manifest.cityCount,9);assert.equal(manifest.hotelCount,12);
const hashes=new Set(),pixels=new Set(),paths=new Set(),downloads=new Set();
for(const p of [...manifest.destinationScenes,...manifest.hotels]){
 assert(p.localPath.startsWith('/images/travel/krabi-premium/'));
 assert(p.sourcePage.startsWith('https://')&&p.downloadUrl.startsWith('https://'));
 assert(p.license&&p.licenseUrl&&p.credit&&p.frCaption&&p.enCaption);
 assert(p.visualReviewNote);
 const blob=fs.readFileSync('public'+p.localPath);
 assert.equal(blob.toString('ascii',0,4),'RIFF');assert.equal(blob.toString('ascii',8,12),'WEBP');
 assert.equal(blob.length,p.bytes);assert(blob.length>18000);
 assert.equal(crypto.createHash('sha256').update(blob).digest('hex'),p.sha256);
 assert(!hashes.has(p.sha256),'Duplicate photo bytes');hashes.add(p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'Duplicate photo pixels');pixels.add(p.pixelFingerprint);
 assert(!paths.has(p.localPath),'Duplicate output path');paths.add(p.localPath);
 assert(!downloads.has(p.downloadUrl),'Duplicate source URL');downloads.add(p.downloadUrl);
 if(p.property){
  assert.equal(p.commercialRightsCleared,false,'Official hotel source cannot establish commercial use permission');
  assert.equal(p.rightsEvidenceType,'hotel_official_publisher_not_licensed');
  assert(g.hotels.some(h=>h.name===p.property));
  assert(!krabiSchemaSafePhotos.has(p.localPath),'No unlicensed hotel photo in JSON-LD');
 }else{
  assert.equal(p.rightsEvidenceType,'wikimedia_license_metadata');
  assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage));
  assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license));
 }
 if(!p.visuallyVerified)assert(!confirmedKrabiAssets.has(p.localPath),'Never expose photo rejected in visual review');
 else assert(confirmedKrabiAssets.has(p.localPath),'Reviewed image missing from gallery whitelist');
}
const approved=manifest.destinationScenes.filter(approvedKrabiPhoto);
const hotelGroups=[['rayavadee','Rayavadee'],['phulay-bay','Phulay Bay, a Ritz-Carlton Reserve'],['banyan-tree','Banyan Tree Krabi'],['tubkaak','The Tubkaak Krabi Boutique Resort']];
for(const [key,name] of hotelGroups){
 const items=manifest.hotels.filter(p=>approvedKrabiHotelPhoto(p,key,name));
 assert.equal(items.length,3,name+' must have 3 verified unique photographs');
 assert.equal(krabiHotelEditorial[name].photos.length,3,name+' gallery must have 3 photographs');
}
assert.equal(confirmedKrabiAssets.size,approved.length+12);
assert.equal(krabiSchemaSafePhotos.size,approved.length);
assert.equal(Object.keys(krabiGuide.photos).length,approved.length);
assert.equal(krabiAreaVisuals.length,5);
const source=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
const visual=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');
assert(source.includes('isKrabiGuide?krabiDraftFaq'));
assert(source.includes('krabiSchemaSafePhotos'));
assert(visual.includes('krabiHotelEditorial')&&visual.includes('krabiAreaVisuals'));
assert(source.includes('robots: { index: ready'),'Preserve noindex gating');
const photos=[...manifest.destinationScenes,...manifest.hotels];
const total=photos.filter(p=>p.visuallyVerified).length;
assert.equal(total,manifest.internalReviewedPhotoCount);
if(total===21){
 assert.equal(approved.length,9);assert.equal(krabiAreaVisuals.filter(Boolean).length,5);
 assert.equal(manifest.visualQA,'INTERNAL_21_OF_21_PHOTO_REVIEW_PASSED_NOT_PUBLIC_LICENSED');
 console.log('KRABI_INTERNAL_QA_PASSED: 61 guides, 88 geographic destinations, 21/21 source images, 4 properties, 5 areas, 16 FAQs, licensed source controls and noindex');
}else{
 assert(total<21,'Invalid photo review count');
 assert(manifest.visualQA.includes('REPLACEMENT_REQUIRED'));
 assert.equal(total,20);
 assert.equal(krabiAreaVisuals.filter(Boolean).length,4);
 console.log('KRABI_PARTIAL_QA_PASSED: 61 guides, 20/21 source images ready; one rejected scene withheld, no Preview release or indexing authorized');
}
