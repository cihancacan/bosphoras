/**
 * Alpine editorial QA: checks rich, distinctive drafts without publishing them.
 * File existence and provenance are not proof of photo identity or image rights.
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const read=p=>readFileSync(p,'utf8');
const registry=read('data/travel/featuredCityGuides.ts');
const catalogue=read('data/travel/destinations.ts');
function parseDraft(path,marker){
 const body=read(path), n=body.indexOf(marker);
 assert(n>=0,'Missing draft export '+path);
 const contents=body.slice(n+marker.length).trim();
 assert(contents.endsWith('as const;'),'Unsupported draft footer '+path);
 return JSON.parse(contents.slice(0,-'as const;'.length).trim());
}
for(const [slug,key] of [['st-moritz','stMoritz'],['aspen','aspen'],['niseko','niseko']]){
 const guide=parseDraft('data/travel/'+key+'DraftGuide.ts','export const '+key+'DraftGuide = ');
 const faq=parseDraft('data/travel/'+key+'DraftFaq.ts','export const '+key+'DraftFaq = ');
 assert.equal(guide.slug,slug,'Canonical slug mismatch');
 assert(catalogue.includes('slug: "'+slug+'"'),'Catalogue entry missing');
 assert.equal(guide.areas.length,5,slug+' needs five distinct areas');
 assert(guide.experiences.length>=3,slug+' needs real experiences');
 assert.equal(guide.hotels.length,4,slug+' needs four authentic addresses');
 assert.equal(new Set(guide.hotels.map(x=>x.name.toLowerCase())).size,4,'Repeated hotel in '+slug);
 assert.equal(new Set(guide.hotels.map(x=>x.officialUrl)).size,4,'Repeated URL in '+slug);
 for(const hotel of guide.hotels){
  assert(hotel.officialUrl.startsWith('https://'),'Missing official hotel source '+slug);
  for(const field of ['fr','en','frWatch','enWatch'])assert(hotel[field]?.length>=35,'Thin hotel '+slug+' / '+hotel.name+' / '+field);
 }
 for(const [lang,suffix] of [['fr','Fr'],['en','En']]){
  assert(guide['intro'+suffix]?.length>200,'Thin intro '+slug+'/'+lang);
  assert(guide['editorial'+suffix]?.length>400,'Thin editorial '+slug+'/'+lang);
  assert.equal(faq[lang].length,7,'Seven FAQs required '+slug+'/'+lang);
  for(const item of faq[lang])assert(item.q.length>12&&item.a.length>55,'Thin FAQ '+slug+'/'+lang);
 }
 assert.equal(Object.keys(guide.photos).length,0,'Draft photos must stay hidden before visual QA '+slug);
 const manifestPath='data/travel/'+key+'MediaCandidates.json';
 if(existsSync(manifestPath)){
  const manifest=JSON.parse(read(manifestPath));
  assert.equal(manifest.destination,slug,'Media destination mismatch');
  assert.equal(manifest.expectedHotelPhotos,12);
  assert.equal(manifest.expectedDestinationPhotos,9);
  assert.equal(manifest.hotels.length,12);
  assert.equal(manifest.destinationScenes.length,9);
  assert(manifest.visuallyVerified===false&&manifest.approvedForCommercialPublication===false,'Illegal early media approval');
  for(const item of [...manifest.hotels,...manifest.destinationScenes]){
   assert(['candidate_needs_visual_review','missing'].includes(item.status),'Bad photo state');
   if(item.status==='candidate_needs_visual_review'){
    assert(item.commercialRightsCleared===true&&item.ownerRightsAuthorization?.includes('2026-10-15'),'Owner-confirmed commercial use provenance missing');
    assert(item.visuallyVerified!==true||!item.visualQaWarning,'An unfit photograph is incorrectly marked visually approved');
    assert(item.sourcePage?.startsWith('https://')&&item.downloadUrl?.startsWith('https://'),'Photo source incomplete');
    assert(item.localPath?.startsWith('/images/travel/'+slug+'-premium/'),'Photo path mismatch');
    const physical='public'+item.localPath;
    assert(existsSync(physical),'WebP file missing '+physical);
    assert(statSync(physical).size>12000,'Tiny photo candidate '+physical);
   }
  }
  console.log(' '+slug+': candidate photography '+manifest.downloadedHotelCandidates+'/12 hotels + '+manifest.downloadedDestinationCandidates+'/9 scenes, VISUAL QA REQUIRED');
 }
 assert(registry.includes("'"+slug+"':") || registry.includes(slug+":") || registry.includes('"'+slug+'":'),'Staged guide missing from feature registry: '+slug);
 console.log(' '+slug+': bilingual original guide; 5 areas, 4 hotels, >=3 experiences, 14 FAQs: STAGED NOINDEX, RIGHTS CHECK PENDING');
}
console.log('Alpine original-content and unpublished media QA: OK');
