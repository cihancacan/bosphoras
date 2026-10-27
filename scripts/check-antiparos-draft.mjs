#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),marker='export const '+n+' = ',i=s.indexOf(marker);assert(i>=0);return JSON.parse(s.slice(i+marker.length).trim().replace(/ as const;$/,''));};
const g=obj('data/travel/antiparosDraftGuide.ts','antiparosDraftGuide'),f=obj('data/travel/antiparosDraftFaq.ts','antiparosDraftFaq'),m=JSON.parse(read('data/travel/antiparosMediaCandidates.json'));
assert.equal(g.slug,'antiparos');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1050&&g.editorialEn.length>1050);
for(const h of g.hotels){assert(h.fr.length>360&&h.en.length>360&&h.frWatch.length>45&&h.enWatch.length>45&&h.officialUrl.startsWith('https://'));}
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>20&&x.a.length>125))}
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
assert.equal(m.visuallyVerified,true);
const photos=m.hotels.concat(m.destinationScenes);assert.equal(photos.length,21);
const checksums=new Set();
for(const p of photos){assert(p.localPath?.startsWith('/images/travel/antiparos-premium/'));
 assert(existsSync('public'+p.localPath)&&statSync('public'+p.localPath).size>25000);
 assert(p.status==='candidate_needs_visual_review'&&p.visuallyVerified&&p.commercialRightsCleared&&!p.visualQaWarning);
 assert(p.sha256&&/^[0-9a-f]{64}$/.test(p.sha256)&&!checksums.has(p.sha256));checksums.add(p.sha256);
 assert(p.frCaption?.length>25&&p.enCaption?.length>25);
 assert(p.credit?.length>15&&p.sourcePage?.startsWith('https://')&&p.licenseUrl?.startsWith('https://'));
 assert(p.ownerRightsAuthorization?.includes('Operator states project-wide photograph permissions'));
}
const ed=read('data/travel/antiparosPremiumEditorial.ts');
for(const key of ['the-rooster','the-beach-house','soros-beach','kastro-boutique'])assert(ed.includes(key),'Missing property '+key);
for(const key of ['kalesma','santa-marina','cavo-tagoo','antiparos-blu'])assert(!ed.includes(key),'Incorrect Mykonos property key '+key);
assert(ed.includes("const scenes=['scene-1','scene-4','scene-5','scene-6','scene-8']"),'Wrong area photographs');
assert(read('data/travel/featuredCityGuides.ts').includes("'antiparos': antiparosGuide"));
assert(read('components/travel/TravelPages.tsx').includes('isAntiparos'));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedAntiparosAssets'));
assert(read('data/travel/destinations.ts').includes('slug: "antiparos"'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
console.log(JSON.stringify({status:'ANTIPAROS_DRAFT_QA_PASSED',hotel:4,areas:5,experiences:5,faqEach:7,slots:21,candidates:21,approved:21,noindex:true}));
