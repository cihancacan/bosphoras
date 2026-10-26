#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),a='export const '+n+' = ',i=s.indexOf(a);assert(i>=0);return JSON.parse(s.slice(i+a.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/capriDraftGuide.ts','capriDraftGuide'),q=obj('data/travel/capriDraftFaq.ts','capriDraftFaq'),m=JSON.parse(read('data/travel/capriMediaCandidates.json'));
assert.equal(g.slug,'capri');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>750&&g.editorialEn.length>750);
assert(new Set(g.hotels.map(h=>h.officialUrl)).size===4);
for(const h of g.hotels){assert(h.fr.length>=350&&h.en.length>=350&&h.officialUrl.startsWith('https://'));}
for(const l of ['fr','en']){assert.equal(q[l].length,7);assert(q[l].every(x=>x.q.length>20&&x.a.length>110));}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert(!m.visuallyVerified&&!m.approvedForCommercialPublication);
for(const x of [...m.hotels,...m.destinationScenes])assert(!x.visuallyVerified&&!x.commercialRightsCleared);
assert(read('data/travel/destinations.ts').includes('slug: "capri"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'capri': capriGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isCapri'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedCapriAssets'));
console.log(JSON.stringify({status:'CAPRI_DRAFT_QA_PASSED',hotels:4,areas:5,experiences:5,faqFr:7,faqEn:7,photoSlots:21,approved:0,noindex:true}));
