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
assert(!m.visuallyVerified&&!m.approvedForCommercialPublication);
for(const x of [...m.hotels,...m.destinationScenes]){assert(!x.visuallyVerified&&!x.commercialRightsCleared);if(x.localPath)assert(x.localPath.startsWith('/images/travel/positano-premium/'));}
assert(read('data/travel/destinations.ts').includes('slug: "positano"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'positano': positanoGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isPositano'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedPositanoAssets'));
console.log(JSON.stringify({status:'POSITANO_DRAFT_QA_PASSED',hotels:4,areas:5,experiences:5,faqFr:7,faqEn:7,photoSlots:21,sourced:m.hotels.concat(m.destinationScenes).filter(x=>x.localPath).length,noindex:true}));
