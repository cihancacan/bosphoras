#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),marker='export const '+n+' = ',i=s.indexOf(marker);assert(i>=0);return JSON.parse(s.slice(i+marker.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/antiparosDraftGuide.ts','antiparosDraftGuide'),f=obj('data/travel/antiparosDraftFaq.ts','antiparosDraftFaq'),m=JSON.parse(read('data/travel/antiparosMediaCandidates.json'));
assert.equal(g.slug,'antiparos');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1050&&g.editorialEn.length>1050);
for(const h of g.hotels){assert(h.fr.length>360&&h.en.length>360&&h.frWatch.length>45&&h.enWatch.length>45&&h.officialUrl.startsWith('https://'));}
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>20&&x.a.length>125))}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
assert.equal(m.visuallyVerified,false);
assert(m.hotels.concat(m.destinationScenes).every(x=>!x.visuallyVerified&&!x.commercialRightsCleared));
assert(read('data/travel/featuredCityGuides.ts').includes("'antiparos': antiparosGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isAntiparos'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedAntiparosAssets'));
assert(read('data/travel/destinations.ts').includes('slug: "antiparos"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
console.log(JSON.stringify({status:'ANTIPAROS_DRAFT_QA_PASSED',hotel:4,areas:5,experiences:5,faqEach:7,slots:21,candidates:m.hotels.concat(m.destinationScenes).filter(x=>x.localPath).length,noindex:true}));
