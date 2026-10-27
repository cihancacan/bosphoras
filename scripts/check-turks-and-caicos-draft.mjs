#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const parse=(path,name)=>{const s=read(path),mark='export const '+name+' = ',i=s.indexOf(mark);assert(i>=0);return JSON.parse(s.slice(i+mark.length).trim().replace(/ as const;\s*$/,''));};
const g=parse('data/travel/turksAndCaicosDraftGuide.ts','turksAndCaicosDraftGuide');
const f=parse('data/travel/turksAndCaicosDraftFaq.ts','turksAndCaicosDraftFaq');
assert.equal(g.slug,'turks-and-caicos');
assert.deepEqual(g.hotels.map(x=>x.name),['Amanyara','COMO Parrot Cay','The Shore Club','Wymara Resort + Villas']);
assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1700&&g.editorialEn.length>1700);
for(const h of g.hotels)assert(h.fr.length>460&&h.en.length>460&&h.frWatch.length>70&&h.enWatch.length>70&&h.officialUrl.startsWith('https://'),h.name);
for(const l of ['fr','en']){assert.equal(f[l].length,7);assert(f[l].every(x=>x.q.length>22&&x.a.length>120));}
assert(g.editorialFr.includes('1er novembre 2026')&&g.editorialEn.includes('1 November 2026'));
assert(g.editorialFr.includes('Turtle Tail')&&g.editorialEn.includes('Turtle Tail'));
const c=read('data/travel/destinations.ts'),slugs=[...c.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('turks-and-caicos'));
assert(c.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(c.includes('approvedCategorySlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'turks-and-caicos': turksAndCaicosGuide"),'Curated Preview must be registered after photo QA');
console.log(JSON.stringify({status:'EDITORIAL_QA_PASSED_MEDIA_PENDING',destination:g.slug,hotels:g.hotels.length,faqFr:f.fr.length,faqEn:f.en.length,catalogue:slugs.length,noindex:true}));
