/** Bangkok #63: source/licence/visual gates and complete preservation of 88 geographic items. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {bangkokDraftGuide:g}=require('../data/travel/bangkokDraftGuide.ts');
const {bangkokDraftFaq:faq}=require('../data/travel/bangkokDraftFaq.ts');
const {bangkokGuide,approvedBangkokScene,approvedBangkokHotelImage}=require('../data/travel/bangkokGuide.ts');
const {bangkokHotelEditorial,bangkokAreaVisuals,confirmedBangkokAssets,bangkokSchemaSafePhotos}=require('../data/travel/bangkokPremiumEditorial.ts');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const m=require('../data/travel/bangkokMediaCandidates.json');
assert.equal(travelDestinations.length,88);
assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert.equal(Object.keys(featuredCityGuides).length,63);
assert.equal(approvedDestinationSlugs.size,0,'No public index or distribution until licensed');
for(const slug of ['bangkok','krabi','koh-yao-noi','san-miguel-de-allende','mayakoba','los-angeles','miami','new-york','istanbul','monaco','gstaad']){
 assert(featuredCityGuides[slug],slug+' missing');
}
assert.equal(bangkokGuide.slug,'bangkok');
assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);assert.equal(g.hotels.length,4);
assert.deepEqual(g.hotels.map(x=>x.name),['Mandarin Oriental, Bangkok','Capella Bangkok','The Siam Bangkok','Aman Nai Lert Bangkok']);
assert.equal(new Set(g.hotels.map(x=>x.officialUrl)).size,4);
for(const lang of ['fr','en']){
 assert(g['editorial'+lang[0].toUpperCase()+lang.slice(1)].length>2000);
 assert.equal(faq[lang].length,8);
 assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);
 assert(faq[lang].every(x=>x.q.length>15&&x.a.length>65));
}
assert.equal(m.cityCount,9);assert.equal(m.hotelCount,12);
assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);
assert.equal(m.visualQA,'INTERNAL_21_OF_21_PHOTO_IDENTITY_VERIFIED_PRIVATE_NOT_PUBLIC_LICENSED');
assert.equal(m.internalReviewedPhotoCount,21);
assert.equal(m.publicUseApproved,false);
const pixels=new Set(),bytes=new Set(),urls=new Set(),paths=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 assert.equal(p.status,'source_identified_private_preview');
 assert.equal(p.visuallyVerified,true,'Unreviewed image is never approved');
 assert(p.visualReviewNote&&p.frCaption&&p.enCaption&&p.credit&&p.license&&p.licenseUrl);
 assert(p.sourcePage.startsWith('https://')&&p.downloadUrl.startsWith('https://'));
 assert(p.localPath.startsWith('/images/travel/bangkok-premium/'));
 const raw=fs.readFileSync('public'+p.localPath);
 assert.equal(raw.toString('ascii',0,4),'RIFF');assert.equal(raw.toString('ascii',8,12),'WEBP');
 assert.equal(raw.length,p.bytes);assert(raw.length>17000);
 assert.equal(crypto.createHash('sha256').update(raw).digest('hex'),p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'same photo via different crops');pixels.add(p.pixelFingerprint);
 assert(!bytes.has(p.sha256),'byte-identical media');bytes.add(p.sha256);
 assert(!urls.has(p.downloadUrl),'reused source URL');urls.add(p.downloadUrl);
 assert(!paths.has(p.localPath),'photo path collision');paths.add(p.localPath);
 assert(confirmedBangkokAssets.has(p.localPath),'approved photo missing from whitelist');
 if(!p.property){
  assert(p.commercialRightsCleared&&p.rightsEvidenceType==='wikimedia_license_metadata');
  assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage));
  assert(approvedBangkokScene(p));
  assert(bangkokSchemaSafePhotos.has(p.localPath));
 }else{
  assert(g.hotels.some(x=>x.name===p.property));
  assert(!bangkokSchemaSafePhotos.has(p.localPath),'hotel images outside schema until rights safely confirmed');
  if(p.propertyKey==='mandarin-oriental'){
   assert(p.commercialRightsCleared===true,'Mandarin archival images are CC Commons');
   assert(p.rightsEvidenceType==='wikimedia_license_metadata');
   assert(p.originalAlt.includes('Bangkok')||p.originalAlt.includes('Oriental'));
   assert(p.frCaption.includes('historique')||p.frCaption.includes('archive')||p.frCaption.includes('d’archive'));
  }else{
   assert.equal(p.rightsEvidenceType,'hotel_official_publisher_not_licensed');
   assert.equal(p.commercialRightsCleared,false,'No assumption that publisher photos are commercially cleared');
  }
 }
}
for(const [id,name] of [['mandarin-oriental','Mandarin Oriental, Bangkok'],['capella','Capella Bangkok'],['the-siam','The Siam Bangkok'],['aman-nai-lert','Aman Nai Lert Bangkok']]){
 const items=m.hotels.filter(p=>approvedBangkokHotelImage(p,id,name));
 assert.equal(items.length,3,'Missing hotel photo or identity: '+name);
 assert.equal(bangkokHotelEditorial[name].photos.length,3);
}
assert.equal(confirmedBangkokAssets.size,21);
assert.equal(bangkokSchemaSafePhotos.size,9);
assert.equal(Object.keys(bangkokGuide.photos).length,9);
assert.equal(bangkokAreaVisuals.length,5);
assert.equal(bangkokAreaVisuals.filter(Boolean).length,5);
const visual=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');
const routes=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert(visual.includes("panoramas-bangkok")&&visual.includes('bangkokHotelEditorial')&&visual.includes('bangkokAreaVisuals'));
assert(routes.includes('isBangkokGuide?bangkokDraftFaq')&&routes.includes('bangkokSchemaSafePhotos'));
assert(routes.includes('robots: { index: ready'),'noindex protection unchanged');
console.log('BANGKOK_SUCCESS: 63 premium guides, 88 geography entries, 21 authentic nonduplicate photos, 4 hotels, 5 sectors, FR/EN FAQ and noindex rights-safe.');
