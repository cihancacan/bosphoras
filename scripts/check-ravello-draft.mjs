#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),a='export const '+n+' = ',i=s.indexOf(a);assert(i>=0);return JSON.parse(s.slice(i+a.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/ravelloDraftGuide.ts','ravelloDraftGuide');
const f=obj('data/travel/ravelloDraftFaq.ts','ravelloDraftFaq');
const m=JSON.parse(read('data/travel/ravelloMediaCandidates.json'));
assert.equal(g.slug,'ravello');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>900 && g.editorialEn.length>900);
for(const h of g.hotels){assert(h.fr.length>530&&h.en.length>530&&h.frWatch.length>70&&h.enWatch.length>70);assert(h.officialUrl.startsWith('https://'));}
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>20&&x.a.length>160));}
assert(g.editorialFr.includes('13 avril 2027')&&g.editorialEn.includes('13 April 2027'));
assert(g.editorialFr.includes('uniquement à pied')&&g.editorialEn.includes('pedestrian-only'));
assert(m.hotels.length===12&&m.destinationScenes.length===9);
assert.equal(m.visuallyVerified,true);
assert.equal(m.approvedForCommercialPublication,false,'No public release without batch Preview and supplier approval');
const downloads=[...m.hotels,...m.destinationScenes];
assert.equal(downloads.length,21);
assert.equal(downloads.filter(x=>x.visuallyVerified&&x.commercialRightsCleared).length,21);
assert.equal(downloads.filter(x=>x.localPath).length,21);
assert.equal(new Set(downloads.map(x=>x.sha256)).size,21,'Repeated exact photo');
assert.equal(new Set(downloads.map(x=>x.downloadUrl.split('?')[0])).size,21,'Repeated download URL');
for(const x of downloads){
 assert.equal(x.status,'candidate_needs_visual_review');
 assert(x.localPath.startsWith('/images/travel/ravello-premium/'));
 assert(!x.visualQaWarning);
 assert(x.sourcePage.startsWith('https://'));
 assert(x.sha256.match(/^[a-f0-9]{64}$/));
 assert(x.frCaption.length>=58&&x.enCaption.length>=57);
 assert(x.credit.length>=9&&x.license.length>=5&&x.licenseUrl.startsWith('https://'));
 assert(x.visualReviewedAt==='2026-10-27'&&x.visualReviewBasis.length>=100);
 assert(['operator_self_attestation','source_specific_commons_license'].includes(x.rightsEvidenceType));
}
assert(read('data/travel/featuredCityGuides.ts').includes("'ravello': ravelloGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isRavello'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedRavelloAssets'));
assert(read('data/travel/destinations.ts').includes('slug: "ravello"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
console.log(JSON.stringify({status:'RAVELLO_DRAFT_PASSED',hotels:4,areas:5,experiences:5,faqPerLanguage:7,photoSlots:21,downloaded:21,approved:21,noindex:true}));
