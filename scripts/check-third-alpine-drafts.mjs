import { readFileSync, existsSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const text=p=>readFileSync(p,'utf8');
const catalog=text('data/travel/destinations.ts');
const registry=text('data/travel/featuredCityGuides.ts');
function load(path,key){
 const raw=text(path),marker='export const '+key+' = ',i=raw.indexOf(marker);
 assert(i>=0,'Export missing: '+path);
 const rest=raw.slice(i+marker.length).trim();
 assert(rest.endsWith('as const;'),'Malformed '+path);
 return JSON.parse(rest.slice(0,-'as const;'.length).trim());
}
for(const slug of ['megeve','gstaad','zermatt']){
 const g=load('data/travel/'+slug+'DraftGuide.ts',slug+'DraftGuide');
 const f=load('data/travel/'+slug+'DraftFaq.ts',slug+'DraftFaq');
 assert.equal(g.slug,slug);
 assert(catalog.includes('slug: "'+slug+'"'),'Destination is missing');
 assert.equal(g.areas.length,5);
 assert.equal(g.hotels.length,4);
 assert.equal(new Set(g.hotels.map(h=>h.officialUrl)).size,4);
 assert(g.experiences.length>=4);
 assert.equal(Object.keys(g.photos).length,0,'Unapproved photo in draft');
 for(const lang of ['fr','en']){
  const suffix=lang==='fr'?'Fr':'En';
  assert(g['editorial'+suffix].length>450,'Thin editorial');
  assert(g['intro'+suffix].length>250,'Thin introduction');
  assert.equal(f[lang].length,7,'Seven FAQs required');
  for(const x of f[lang])assert(x.q.length>15&&x.a.length>75,'Thin FAQ');
 }
 for(const h of g.hotels){
  assert(h.officialUrl.startsWith('https://'));
  for(const k of ['fr','en','frWatch','enWatch'])assert(h[k].length>55,'Thin property profile '+k);
 }
 const path='data/travel/'+slug+'MediaCandidates.json';
 if(existsSync(path)){
  const m=JSON.parse(text(path));
  assert.equal(m.destination,slug);
  assert.equal(m.hotels.length,12);
  assert.equal(m.destinationScenes.length,9);
  assert(m.visuallyVerified===false && m.approvedForCommercialPublication===false,'Media self-approved');
  for(const im of m.hotels.concat(m.destinationScenes)){
   assert(['missing','candidate_needs_visual_review'].includes(im.status));
   if(im.status==='candidate_needs_visual_review'){
    if(im.commercialRightsCleared===true)assert(im.ownerRightsAuthorization?.match(/2026-10-(15|17|19)/),"Owner-rights authorisation unrecorded");
    else assert(im.visuallyVerified===false,'Photo approved without rights confirmation');
    assert(im.visuallyVerified!==true||!im.visualQaWarning,'Flagged image self-approved');
    assert(im.sourcePage?.startsWith('https://')&&im.downloadUrl?.startsWith('https://'));
    assert(im.localPath?.startsWith('/images/travel/'+slug+'-premium/'));
    assert(existsSync('public'+im.localPath));
    assert(statSync('public'+im.localPath).size>12000);
   }
  }
  console.log(slug+': '+m.downloadedHotelCandidates+'/12 hotels + '+m.downloadedDestinationCandidates+'/9 scenes, review pending');
 }
 if(slug==='megeve'){
   assert(registry.includes("'megeve': megeveGuide"),'Megève guide is not staged for noindex review');
   assert(text('data/travel/alpinePremiumEditorial.ts').includes('commercialRightsCleared===true'),
     'Source image publication gate missing');
 } else assert(!registry.includes("'"+slug+"':")&&!registry.includes(slug+":"),'Unready alpine guide routed prematurely: '+slug);
 console.log(slug+': four documented hotels, five areas and 14 FR/EN FAQs — draft only');
}
console.log('Third Alpine editorial drafts, provenance and no-publication QA: OK');
