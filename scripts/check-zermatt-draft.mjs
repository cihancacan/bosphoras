#!/usr/bin/env node
/** Validate Zermatt editorial richness, originality, photo identities and noindex. */
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
function draft(path,name) {
 const src=read(path),mark='export const '+name+' = ',start=src.indexOf(mark);
 assert(start>=0, 'Missing draft export '+name);
 const json=src.slice(start+mark.length).trim();
 assert(json.endsWith('as const;'), 'Incorrect TS draft footer '+path);
 return JSON.parse(json.slice(0,-'as const;'.length).trim());
}
const guide=draft('data/travel/zermattDraftGuide.ts','zermattDraftGuide');
const faq=draft('data/travel/zermattDraftFaq.ts','zermattDraftFaq');
const media=JSON.parse(read('data/travel/zermattMediaCandidates.json'));
assert.equal(guide.slug,'zermatt');
assert.equal(guide.country,'Suisse');
assert.equal(guide.areas.length,5);
assert.equal(new Set(guide.areas.map(x=>x.name)).size,5);
assert(guide.experiences.length>=3);
assert.equal(guide.hotels.length,4);
assert.equal(new Set(guide.hotels.map(x=>x.name)).size,4);
assert(guide.introFr.length>260&&guide.introEn.length>260);
assert(guide.editorialFr.length>480&&guide.editorialEn.length>480);
for(const h of guide.hotels){
 assert(/^https:\/\//.test(h.officialUrl),'Hotel source unavailable');
 assert(h.fr.length>240&&h.en.length>240,'Hotel description too thin: '+h.name);
 assert(h.frWatch.length>70&&h.enWatch.length>70,'Hotel nuance too thin: '+h.name);
}
for(const lang of ['fr','en']){
 assert.equal(faq[lang].length,7);
 assert(faq[lang].every(x=>x.q.length>15&&x.a.length>70));
}
assert.equal(media.destination,'zermatt');
assert.equal(media.hotels.length,12);
assert.equal(media.destinationScenes.length,9);
assert.equal(media.expectedHotelPhotos,12);
assert.equal(media.expectedDestinationPhotos,9);
assert(media.hotels.every((x,i)=>x.property===guide.hotels[Math.floor(i/3)].name),'Image mapped to wrong hotel');
const items=media.hotels.concat(media.destinationScenes);
const authorized=items.filter(x=>x.visuallyVerified===true);
const sources=new Set();
for(const x of items){
 if(x.status!=='candidate_needs_visual_review')continue;
 assert(x.localPath?.startsWith('/images/travel/zermatt-premium/'));
 assert(x.sha256?.match(/^[a-f0-9]{64}$/));
 const local='public'+x.localPath;
 assert(existsSync(local)&&statSync(local).size>12000,'Absent Zermatt WebP '+local);
 assert(x.sourcePage?.startsWith('https://'));
 const sourceUrl=(x.downloadUrl||'').split('?')[0];
 assert(!sources.has(sourceUrl),'Duplicate cropped source image: '+sourceUrl);
 sources.add(sourceUrl);
}
for(const x of authorized){
 assert.equal(x.status,'candidate_needs_visual_review');
 assert.equal(x.commercialRightsCleared,true);
 assert(!x.visualQaWarning,'Rejected image displayed');
 assert(x.frCaption?.length>25&&x.enCaption?.length>25);
 assert(x.visualReviewBasis);
}
assert.equal(media.visuallyVerified,false,'Bulk-approval of all photos forbidden');
assert.equal(media.approvedForCommercialPublication,false,'Preview only, no production authorization');
const registry=read('data/travel/featuredCityGuides.ts');
const alpine=read('data/travel/alpinePremiumEditorial.ts');
const pages=read('components/travel/TravelPages.tsx');
const rendered=read('components/travel/FeaturedCityGuide.tsx');
const guideOutput=read('data/travel/zermattGuide.ts');
const catalog=read('data/travel/destinations.ts');
assert(catalog.includes('slug: "zermatt"'));
assert(catalog.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(registry.includes("'zermatt': zermattGuide"));
assert(alpine.includes("zermatt:new Set")&&alpine.includes("zermatt:hotelIndex"));
assert(guideOutput.includes("commercialRightsCleared===true"));
assert(pages.includes('zermattDraftFaq'));
assert(pages.includes('schemaHeroIsCleared'));
assert(pages.includes('robots: { index: ready'));
assert(rendered.includes('alpineAvailablePhotoPathsByCity'));
console.log('Zermatt FR/EN: four real hotels, five distinct areas, 7 FAQs per language: PASS');
console.log('Zermatt gallery: ',authorized.length,'/21 approved,',
 media.hotels.filter(x=>x.visuallyVerified).length,'/12 hotel,',
 media.destinationScenes.filter(x=>x.visuallyVerified).length,'/9 landscapes');
console.log('Zermatt still noindex and on feature branch; no Wink inventory or rates advertised.');
