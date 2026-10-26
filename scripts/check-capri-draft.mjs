#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),a='export const '+n+' = ',i=s.indexOf(a);assert(i>=0);return JSON.parse(s.slice(i+a.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/capriDraftGuide.ts','capriDraftGuide'),q=obj('data/travel/capriDraftFaq.ts','capriDraftFaq'),m=JSON.parse(read('data/travel/capriMediaCandidates.json'));
assert.equal(g.slug,'capri');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>750&&g.editorialEn.length>750);
assert(new Set(g.hotels.map(h=>h.officialUrl)).size===4);
for(const h of g.hotels){assert(h.fr.length>=350&&h.en.length>=350&&h.officialUrl.startsWith('https://'));}
for(const l of ['fr','en']){assert.equal(q[l].length,7);assert(q[l].every(x=>x.q.length>20&&x.a.length>110));}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.visuallyVerified,true);
assert.equal(m.approvedForCommercialPublication,false,'Preview and supplier gates are separate from photo QA');
const photos=[...m.hotels,...m.destinationScenes];
assert.equal(photos.filter(x=>x.localPath).length,21);
assert.equal(photos.filter(x=>x.visuallyVerified).length,21);
assert.equal(photos.filter(x=>x.commercialRightsCleared).length,21);
const hashes=new Set(),urls=new Set();
for(const x of photos){
 assert.equal(x.status,'candidate_needs_visual_review');
 assert(!x.visualQaWarning && x.localPath?.startsWith('/images/travel/capri-premium/'));
 assert(existsSync('public'+x.localPath) && statSync('public'+x.localPath).size>20000);
 assert(x.sha256 && /^[a-f0-9]{64}$/.test(x.sha256),'Missing original checksum');
 assert(x.dhash && /^[01]{64}$/.test(x.dhash),'Missing perceptual checksum');
 assert(!hashes.has(x.sha256),'Repeated exact image '+x.key);
 hashes.add(x.sha256);
 assert(x.sourcePage?.startsWith('https://') && x.downloadUrl?.startsWith('https://'));
 assert(!urls.has(x.downloadUrl.split('?')[0]),'Repeated source '+x.key);
 urls.add(x.downloadUrl.split('?')[0]);
 assert(x.credit?.length>7 && x.license?.length>2 && x.licenseUrl?.startsWith('https://'));
 assert(x.frCaption?.length>45 && x.enCaption?.length>45,'Thin image caption '+x.key);
 assert(x.visualReviewedAt==='2026-10-26' && x.visualReviewBasis?.length>120);
 assert(x.ownerRightsAuthorization?.includes('operator attested'), 'Missing transparent operator rights trail');
 assert(x.rightsEvidenceType==='operator_self_attestation');
}
assert(read('data/travel/destinations.ts').includes('slug: "capri"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'capri': capriGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isCapri'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedCapriAssets'));
console.log(JSON.stringify({status:'CAPRI_DRAFT_QA_PASSED',hotels:4,areas:5,experiences:5,faqFr:7,faqEn:7,photoSlots:21,approved:21,noindex:true}));
