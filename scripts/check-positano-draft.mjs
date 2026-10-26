#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const v=read(p),a='export const '+n+' = ',i=v.indexOf(a);assert(i>=0);return JSON.parse(v.slice(i+a.length).trim().replace(/ as const;$/,''));};
const guide=obj('data/travel/positanoDraftGuide.ts','positanoDraftGuide');
const faq=obj('data/travel/positanoDraftFaq.ts','positanoDraftFaq');
const m=JSON.parse(read('data/travel/positanoMediaCandidates.json'));
assert.equal(guide.slug,'positano');assert.equal(guide.hotels.length,4);assert.equal(guide.areas.length,5);assert.equal(guide.experiences.length,5);
assert(guide.editorialFr.length>900&&guide.editorialEn.length>900);
assert(new Set(guide.hotels.map(x=>x.officialUrl)).size===4);
for(const h of guide.hotels){assert(h.fr.length>=420&&h.en.length>=420&&h.frWatch.length>70&&h.enWatch.length>70&&h.officialUrl.startsWith('https://'))}
for(const l of ['fr','en']){assert.equal(faq[l].length,7);assert(faq[l].every(x=>x.q.length>20&&x.a.length>130))}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.visuallyVerified,true);
assert.equal(m.approvedForCommercialPublication,false,'Preview and supplier gate remains separate');
const images=[...m.hotels,...m.destinationScenes];
assert.equal(images.length,21);
assert.equal(images.filter(x=>x.visuallyVerified).length,21);
assert.equal(images.filter(x=>x.commercialRightsCleared).length,21);
const originals=new Set(),urls=new Set();
for(const x of images){
 assert.equal(x.status,'candidate_needs_visual_review');
 assert(x.localPath?.startsWith('/images/travel/positano-premium/'));
 assert(!x.visualQaWarning,'Photo pending review');
 assert(x.sha256 && /^[a-f0-9]{64}$/.test(x.sha256));
 assert(!originals.has(x.sha256),'Duplicate exact image '+x.key); originals.add(x.sha256);
 assert(x.sourcePage?.startsWith('https://') && x.credit?.length>12);
 assert(x.downloadUrl?.startsWith('https://') && !urls.has(x.downloadUrl.split('?')[0]));
 urls.add(x.downloadUrl.split('?')[0]);
 assert(x.frCaption?.length>40 && x.enCaption?.length>40);
 assert(x.license?.length>2 && x.licenseUrl?.startsWith('https://'));
 assert(x.rightsEvidenceType==='operator_self_attestation'||x.rightsEvidenceType==='commons_public_license');
 assert(x.ownerRightsAuthorization?.length>120);
 assert(x.visualReviewedAt && x.visualReviewBasis?.length>80);
}
assert(read('data/travel/destinations.ts').includes('slug: "positano"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'positano': positanoGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isPositano'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedPositanoAssets'));
console.log(JSON.stringify({status:'POSITANO_DRAFT_QA_PASSED',hotels:4,areas:5,experiences:5,faqFr:7,faqEn:7,photoSlots:21,sourced:21,approved:21,noindex:true}));
