#!/usr/bin/env node
/** Draft QA without approving images or starting a Vercel build. */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(p)=>readFileSync(p,'utf8');
function tsObject(file,constant){
 const s=read(file), marker='export const '+constant+' = ', start=s.indexOf(marker);
 assert(start>=0,'Missing export: '+constant);
 const data=s.slice(start+marker.length).trim().replace(/ as const;\s*$/,'');
 return JSON.parse(data);
}
const g=tsObject('data/travel/formenteraDraftGuide.ts','formenteraDraftGuide');
const faq=tsObject('data/travel/formenteraDraftFaq.ts','formenteraDraftFaq');
const media=JSON.parse(read('data/travel/formenteraMediaCandidates.json'));
assert.equal(g.slug,'formentera');
assert.equal(g.hotels.length,4);
assert.equal(new Set(g.hotels.map(x=>x.name)).size,4,'Duplicate hotel');
assert.equal(g.areas.length,5);
assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1400&&g.editorialEn.length>1400,'Editorial is insufficiently detailed');
for(const h of g.hotels){
 assert(h.fr.length>400&&h.en.length>400,'Hotel editorial too thin: '+h.name);
 assert(h.frWatch.length>60&&h.enWatch.length>60);
 assert(h.officialUrl.startsWith('https://'),'Missing official URL');
}
for(const lang of ['fr','en']){
 assert.equal(faq[lang].length,7);
 assert(faq[lang].every(x=>x.q.length>30&&x.a.length>140));
}
assert.equal(media.hotels.length,12);
assert.equal(media.destinationScenes.length,9);
const slots=[...media.hotels,...media.destinationScenes];
assert.equal(slots.length,21);
assert.equal(media.visuallyVerified,false);
assert.equal(media.approvedForCommercialPublication,false);
assert(slots.every(x=>x.status==='research_pending'&&!x.visuallyVerified&&!x.commercialRightsCleared&&!x.localPath));
assert(slots.every(x=>x.sourcePage.startsWith('https://')));
assert.equal(new Set(media.destinationScenes.map(x=>x.key)).size,9);
const catalog=read('data/travel/destinations.ts');
const slugs=[...catalog.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m=>m[1]);
assert.equal(slugs.length,88,'Never silently change original destination catalogue');
assert(slugs.includes('formentera'));
const featured=read('data/travel/featuredCityGuides.ts');
assert(!featured.includes("'formentera': formenteraGuide"),'Do not prematurely activate guide without validated images');
const pages=read('components/travel/TravelPages.tsx');
assert(pages.includes('approvedDestinationSlugs'),'Publication gate removed');
console.log(JSON.stringify({status:'FORMENTERA_EDITORIAL_DRAFT_PASSED',hotels:4,areas:5,experiences:5,faqPerLanguage:7,pendingImageSlots:21,catalogue:88,mediaApproved:0,previewReleased:false}));
