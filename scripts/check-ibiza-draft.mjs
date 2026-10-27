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
assert(!m.approvedForCommercialPublication);
for(const x of [...m.hotels,...m.destinationScenes]){
 if(x.visuallyVerified||x.commercialRightsCleared){
  assert(x.visualQaWarning===''&&x.status==='candidate_needs_visual_review');
  assert(x.localPath?.startsWith('/images/travel/ibiza-premium/'));assert(existsSync('public'+x.localPath));
  assert(statSync('public'+x.localPath).size>20000&&x.sha256?.length===64);
  assert(x.frCaption?.length>40&&x.enCaption?.length>40&&x.sourcePage?.startsWith('https://'));
 }
}
assert(read('data/travel/destinations.ts').includes('slug: "ibiza"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'ibiza': ibizaGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isIbiza'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedIbizaAssets'));
console.log(JSON.stringify({status:'IBIZA_EDITORIAL_QA_PASSED',hotels:4,areas:5,experiences:5,faqPerLanguage:7,imageSlots:21,downloaded:m.hotels.concat(m.destinationScenes).filter(x=>x.localPath).length,reviewed:m.hotels.concat(m.destinationScenes).filter(x=>x.visuallyVerified).length,noindex:true}));
