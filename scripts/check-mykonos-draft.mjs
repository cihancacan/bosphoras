#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),a='export const '+n+' = ',i=s.indexOf(a);assert(i>=0);return JSON.parse(s.slice(i+a.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/mykonosDraftGuide.ts','mykonosDraftGuide');
const f=obj('data/travel/mykonosDraftFaq.ts','mykonosDraftFaq');
const m=JSON.parse(read('data/travel/mykonosMediaCandidates.json'));
assert.equal(g.slug,'mykonos');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1050&&g.editorialEn.length>1050);
for(const h of g.hotels){assert(h.fr.length>450&&h.en.length>450&&h.frWatch.length>70&&h.enWatch.length>70)}
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>20&&x.a.length>130));}
assert(g.editorialFr.includes('15 mai au 14 octobre')&&g.editorialEn.includes('15 May until 14 October'));
assert(g.editorialFr.includes('été 2027')&&g.editorialEn.includes('summer 2027'));
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.visuallyVerified,true);
assert.equal(m.approvedForCommercialPublication,false,'No public release without ten-destination Preview and supplier rights');
const photos=[...m.hotels,...m.destinationScenes];
assert.equal(photos.length,21);
assert.equal(photos.filter(x=>x.visuallyVerified&&x.commercialRightsCleared).length,21);
assert.equal(photos.filter(x=>x.localPath).length,21);
assert.equal(new Set(photos.map(x=>x.sha256)).size,21);
assert.equal(new Set(photos.map(x=>x.downloadUrl.split('?')[0])).size,21);
for(const x of photos){
 assert.equal(x.status,'candidate_needs_visual_review');
 assert(x.localPath.startsWith('/images/travel/mykonos-premium/'));
 assert(x.frCaption?.length>45 && x.enCaption?.length>45);
 assert(x.credit?.length>9 && x.license?.length>6);
 assert(x.licenseUrl.startsWith('https://')&&x.sourcePage.startsWith('https://'));
 assert(x.visualReviewedAt && x.visualReviewBasis?.length>110);
 assert(['operator_self_attestation','source_specific_commons_license'].includes(x.rightsEvidenceType));
 assert(!x.visualQaWarning);
}
assert(read('data/travel/featuredCityGuides.ts').includes("'mykonos': mykonosGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isMykonos'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedMykonosAssets'));
assert(read('data/travel/destinations.ts').includes('slug: "mykonos"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
console.log(JSON.stringify({status:'MYKONOS_DRAFT_PASSED',hotels:4,areas:5,experiences:5,faqEach:7,slots:21,downloaded:21,approved:21,noindex:true}));
