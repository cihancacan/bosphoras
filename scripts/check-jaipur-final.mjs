#!/usr/bin/env node
/** Jaipur #77 acceptance: verified private Preview only; never a public release. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const read=p=>fs.readFileSync(p,'utf8');
const media=JSON.parse(read('data/travel/jaipurMediaCandidates.json'));
const plan=JSON.parse(read('data/travel/jaipurPhotoProductionPlan.json'));
const all=[...media.destinationScenes,...media.hotels];
assert.equal(media.destination,'jaipur');
assert.equal(media.destinationNumber,77);
assert.equal(media.destinationScenes.length,9);
assert.equal(media.hotels.length,12);
assert.equal(all.length,21);
assert.equal(new Set(all.map(x=>x.key)).size,21);
assert.equal(new Set(all.map(x=>x.webpSHA256)).size,21);
assert.equal(new Set(all.map(x=>x.sourcePage)).size,21);
assert.equal(plan.photoSlots.length,21);
assert.equal(plan.productionApproved,false);
assert.equal(media.publicUseApproved,false);
assert.equal(media.photosVisuallyApprovedByOwner,0);
assert.equal(media.photosVerifiedByAssistantOnContactSheet,21);
assert.equal(plan.previewApproved,true);
assert.equal(media.scope,'private_owner_noindex_preview');
let total=0;
for(const p of all){
  assert(p.visuallyVerified && p.previewVisualApproved, 'Visual identity not approved for private QA: '+p.key);
  assert(p.sourceSHA256 && p.webpSHA256 && p.sourcePage && p.credit, 'Missing provenance: '+p.key);
  const local=path.join('public',p.localPath.slice(1));
  assert(fs.existsSync(local),'Missing source photo file: '+local);
  const bytes=fs.readFileSync(local);total+=bytes.length;
  assert.equal(bytes.toString('ascii',0,4),'RIFF');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');
  assert(bytes.length>=5000 && bytes.length<=350000, 'WebP quality bound '+p.key);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),p.webpSHA256);
  assert.equal(p.publicUseApproved,false);
  if(p.commercialRightsCleared){
    assert(p.license && p.licenseUrl && p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'), 'Commons credit needed '+p.key);
  }
}
assert(total<5000000,'Jaipur image pack exceeds 5 MB');
assert.equal(all.filter(p=>p.commercialRightsCleared).length,14,'Attribution count unexpected');
assert.equal(media.hotels.filter(p=>!p.commercialRightsCleared).length,7,'Seven third-party hotel photos must remain blocked for public use');
const cats=new Set(media.hotels.map(p=>p.key.split('-')[0]));
assert.deepEqual([...cats].sort(),['leela','oberoi','raffles','rambagh']);
for(const code of cats)assert.equal(media.hotels.filter(p=>p.key.startsWith(code+'-')).length,3);
assert(fs.existsSync('public/images/travel/jaipur-premium/source-review-contact-sheet.webp'));
const guide=read('data/travel/jaipurDraftGuide.ts');
const faq=read('data/travel/jaipurDraftFaq.ts');
for(const h of ['Rambagh Palace','The Oberoi Rajvilas','Raffles Jaipur','The Leela Palace Jaipur'])assert(guide.includes(h),'Missing hotel '+h);
assert.equal((faq.match(/"q":/g)||[]).length,16,'Jaipur must contain 8 FR and 8 EN FAQs');
const registry=read('data/travel/featuredCityGuides.ts');
assert(registry.includes("'jaipur': jaipurGuide"),'Jaipur missing integrated guide');
const page=read('components/travel/TravelPages.tsx');
assert(page.includes('isJaipurGuide?jaipurDraftFaq'),'Jaipur FAQ schema missing');
assert(page.includes("kohGuide?.slug==='jaipur' ? jaipurSchemaSafePhotos"),'Jaipur photo JSON-LD suppression missing');
assert(page.includes('robots: { index: ready'),'Unapproved pages must be noindex');
const ui=read('components/travel/FeaturedCityGuide.tsx');
assert(ui.includes('jaipurHotelEditorial') && ui.includes('confirmedJaipurPreviewAssets') && ui.includes('jaipurDraftFaq'),'Jaipur visual integration missing');
console.log('JAIPUR_77_PRIVATE_PREVIEW_QA_GREEN: 21 local WebPs, four exact hotels, 9 local scenes, FR/EN guide, 8+8 FAQs, rights restricted; '+total+' WebP bytes');
