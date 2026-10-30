/** Krabi #61 candidate gate. No source fetch and no deployment. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {krabiDraftGuide:guide}=require('../data/travel/krabiDraftGuide.ts');
const {krabiDraftFaq:faq}=require('../data/travel/krabiDraftFaq.ts');
const registry=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8');
const catalogue=fs.readFileSync('data/travel/destinations.ts','utf8');
const slugs=[...catalogue.matchAll(/slug:\\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);
assert(slugs.includes('krabi'),'Krabi missing from preserved 88 geography');
assert(!registry.includes("'krabi'"),'Do not register or publish Krabi before full photo QA');
assert(registry.includes("'san-miguel-de-allende'"),'Retain premium #60');
assert.match(catalogue,/approvedDestinationSlugs[^;]*new Set\\(\\[\\]\\)/);
assert.equal(guide.slug,'krabi');assert.equal(guide.areas.length,5);assert.equal(guide.experiences.length,5);
assert.equal(guide.hotels.length,4);assert.deepEqual(guide.hotels.map(x=>x.name),[
 'Rayavadee','Phulay Bay, a Ritz-Carlton Reserve','Banyan Tree Krabi','The Tubkaak Krabi Boutique Resort'
]);
assert.equal(new Set(guide.hotels.map(x=>x.officialUrl)).size,4);
assert(guide.hotels.every(x=>x.officialUrl.startsWith('https://')&&x.fr.length>100&&x.en.length>100));
for(const lang of ['fr','en']){
 assert(guide['editorial'+lang.toUpperCase()[0]+lang.slice(1)].length>1700);
 assert.equal(faq[lang].length,8);assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);
 assert(faq[lang].every(x=>x.q.length>20&&x.a.length>70));
}
const path='data/travel/krabiMediaCandidates.json';
if(!fs.existsSync(path)){
 console.log('KRABI_DRAFT_PASSED: bilingual content and 88+60 safeguards; images not yet acquired.');
 process.exit(0);
}
const m=JSON.parse(fs.readFileSync(path,'utf8'));
assert.equal(m.destination,'krabi');assert.equal(m.visualQA,'PENDING_MANUAL_REVIEW_NO_IMAGES_APPROVED');
assert.equal(m.cityCount,m.destinationScenes.length);assert.equal(m.hotelCount,m.hotels.length);
assert(m.cityCount<=9&&m.hotelCount<=12);
const hashes=new Set(),pixels=new Set(),keys=new Set(),urls=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 assert(p.localPath.startsWith('/images/travel/krabi-premium/'));
 assert(p.sourcePage.startsWith('https://')&&p.downloadUrl.startsWith('https://'));
 assert(p.license&&p.licenseUrl&&p.credit&&p.frCaption&&p.enCaption);
 assert.equal(p.visuallyVerified,false,'Automated source selection never counts as visual approval');
 assert.equal(p.status,'source_identified_pending_individual_visual_review');
 const blob=fs.readFileSync('public'+p.localPath);
 assert.equal(blob.toString('ascii',0,4),'RIFF');
 assert.equal(blob.toString('ascii',8,12),'WEBP');
 assert.equal(blob.length,p.bytes);
 assert(blob.length>18000);
 assert.equal(crypto.createHash('sha256').update(blob).digest('hex'),p.sha256);
 assert(!hashes.has(p.sha256),'Duplicate byte images');hashes.add(p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'Duplicate resized images');pixels.add(p.pixelFingerprint);
 assert(!keys.has(p.localPath));keys.add(p.localPath);
 assert(!urls.has(p.downloadUrl));urls.add(p.downloadUrl);
 if(p.property){
  assert.equal(p.commercialRightsCleared,false,'Hotel publisher image must not be auto-cleared');
  assert.equal(p.rightsEvidenceType,'hotel_official_publisher_not_licensed');
  assert(guide.hotels.some(h=>h.name===p.property));
 }else{
  assert.equal(p.rightsEvidenceType,'wikimedia_license_metadata');
  assert.match(p.sourcePage,/^https:\/\/commons\\.wikimedia\\.org\/wiki\/File:/);
  assert.match(p.license,/^(CC BY(?:-SA)? [234]\\.0|CC0|Public domain)/i);
 }
}
console.log('KRABI_DRAFT_PASSED: 88 geographic slugs retained, 60 live editorial guides retained; candidates '+m.cityCount+'/9 landscape + '+m.hotelCount+'/12 hotel, visual QA pending.');
