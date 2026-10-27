#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),anchor='export const '+n+' = ',i=s.indexOf(anchor);assert(i>=0);return JSON.parse(s.slice(i+anchor.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/ibizaDraftGuide.ts','ibizaDraftGuide');
const f=obj('data/travel/ibizaDraftFaq.ts','ibizaDraftFaq');
const m=JSON.parse(read('data/travel/ibizaMediaCandidates.json'));
assert.equal(g.slug,'ibiza');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1100&&g.editorialEn.length>1100);
assert(new Set(g.hotels.map(h=>h.officialUrl)).size===4);
for(const h of g.hotels){assert(h.fr.length>400&&h.en.length>400&&h.frWatch.length>60&&h.enWatch.length>60);assert(h.officialUrl.startsWith('https://'))}
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>15&&x.a.length>110))}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.visuallyVerified,true);assert.equal(m.approvedForCommercialPublication,false,'Ten-destination Preview and supplier distribution gate still applies');
const photos=[...m.hotels,...m.destinationScenes];
assert.equal(photos.filter(x=>x.localPath).length,21);
assert.equal(photos.filter(x=>x.visuallyVerified&&x.commercialRightsCleared).length,21);
const hashes=new Set(),urls=new Set();
for(const x of photos){
 assert(x.visualQaWarning===''&&x.status==='candidate_needs_visual_review');
 assert(x.localPath?.startsWith('/images/travel/ibiza-premium/'));
 assert(existsSync('public'+x.localPath), 'Missing WebP '+x.localPath);
 assert(statSync('public'+x.localPath).size>20000&&/^[a-f0-9]{64}$/.test(x.sha256));
 assert(!hashes.has(x.sha256),'Duplicate exact photo '+x.key);hashes.add(x.sha256);
 assert(x.sourcePage?.startsWith('https://')&&x.downloadUrl?.startsWith('https://'));
 assert(!urls.has(x.downloadUrl.split('?')[0]),'Duplicate original URL '+x.key);urls.add(x.downloadUrl.split('?')[0]);
 assert(x.frCaption?.length>50&&x.enCaption?.length>50&&x.credit?.length>8);
 assert(x.licenseUrl?.startsWith('https://')&&x.license?.length>2);
 assert(x.visualReviewedAt==='2026-10-27'&&x.visualReviewBasis?.length>120);
 assert(x.ownerRightsAuthorization?.includes('user attestation'));
 assert(x.rightsEvidenceType==='operator_self_attestation'||x.rightsEvidenceType==='source_creative_commons_with_operator_attestation');
}
assert(m.photoRightsBasis?.includes('operator attested'));

assert(read('data/travel/destinations.ts').includes('slug: "ibiza"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'ibiza': ibizaGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isIbiza'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedIbizaAssets'));
console.log(JSON.stringify({status:'IBIZA_EDITORIAL_QA_PASSED',hotels:4,areas:5,experiences:5,faqPerLanguage:7,imageSlots:21,downloaded:m.hotels.concat(m.destinationScenes).filter(x=>x.localPath).length,reviewed:21,noindex:true}));
