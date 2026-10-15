/**
 * Bosphoras Luxury Stays batch-10 second-stage checks:
 * Original bilingual guides and exact property media provenance.
 * Passing does NOT equal verified photo rights, visual QA or public indexing.
 */
import assert from 'node:assert/strict';
import {existsSync,readFileSync,statSync} from 'node:fs';
const read=path=>readFileSync(path,'utf8');
const src=read('data/travel/destinations.ts');
const registry=read('data/travel/featuredCityGuides.ts');
const rows=[
 ['megeve','megeve'],
 ['jackson-hole','jacksonHole'],
 ['big-sky','bigSky'],
 ['val-disere','valDisere'],
 ['verbier','verbier']
];
function draft(path,constant){
 const txt=read(path),needle='export const '+constant+' = ',n=txt.indexOf(needle);
 assert(n>=0,'Missing export '+path);
 const json=txt.slice(n+needle.length).trim();
 assert(json.endsWith('as const;'),'Unexpected source footer '+path);
 return JSON.parse(json.slice(0,-'as const;'.length).trim());
}
let totalOriginalProfiles=0;
for(const [slug,stem] of rows){
 const guide=draft('data/travel/'+stem+'DraftGuide.ts',stem+'DraftGuide');
 const faq=draft('data/travel/'+stem+'DraftFaq.ts',stem+'DraftFaq');
 assert.equal(guide.slug,slug,slug+' slug mismatch');
 assert(src.includes('slug: "'+slug+'"'),slug+' absent from original 88-destination catalogue');
 assert(registry.includes("'"+slug+"': "+stem+"Guide"),slug+' must be staged for internal noindex review');
 assert(read('components/travel/FeaturedCityGuide.tsx').includes('alpineAvailablePhotoPathsByCity'),'Fail-closed alpine media gate missing');
 assert(read('components/travel/TravelPages.tsx').includes('schemaHeroIsCleared'),'Structured data must not expose unapproved photos');
 assert(read('components/travel/TravelPages.tsx').includes('robots: { index: ready'),'Robots noindex guard missing');
 assert.equal(guide.areas.length,5,slug+' requires five meaningful, real-world areas');
 assert(new Set(guide.areas.map(x=>x.name)).size===5,slug+' repeated area');
 assert(guide.experiences.length>=3,slug+' missing activities');
 assert.equal(guide.hotels.length,4,slug+' requires four real featured addresses');
 assert.equal(new Set(guide.hotels.map(x=>x.name.toLowerCase())).size,4,slug+' repeated hotel');
 assert.equal(new Set(guide.hotels.map(x=>x.officialUrl)).size,4,slug+' repeated official hotel link');
 assert.equal(Object.keys(guide.photos).length,0,slug+' source-only draft should not publish photos');
 assert(guide.introFr.length>220&&guide.introEn.length>220,slug+' thin introduction');
 assert(guide.editorialFr.length>360&&guide.editorialEn.length>360,slug+' thin area guidance');
 for(const hotel of guide.hotels){
  assert(hotel.officialUrl.startsWith('https://'),slug+' non-official hotel URL');
  assert(hotel.fr.length>220&&hotel.en.length>220,
    slug+' brief/generic hotel descriptions: '+hotel.name);
  assert(hotel.frWatch.length>55&&hotel.enWatch.length>55,
    slug+' lacks local booking caution: '+hotel.name);
 }
 for(const lang of ['fr','en']){
  assert.equal(faq[lang].length,7,slug+' requires seven FAQs in '+lang);
  for(const f of faq[lang])
   assert(f.q.length>=15&&f.a.length>=75,slug+' incomplete FAQ '+lang+' / '+f.q);
 }
 totalOriginalProfiles+=4;
 const manifestPath='data/travel/'+stem+'MediaCandidates.json';
 if(existsSync(manifestPath)){
  const manifest=JSON.parse(read(manifestPath));
  assert.equal(manifest.destination,slug,slug+' wrong-photo-region manifest');
  assert.equal(manifest.expectedHotelPhotos,12);
  assert.equal(manifest.expectedDestinationPhotos,9);
  assert.equal(manifest.hotels.length,12);
  assert.equal(manifest.destinationScenes.length,9);
  assert(manifest.visuallyVerified===false&&manifest.approvedForCommercialPublication===false,
    slug+' must stay blocked pending commercial rights review');
  const previewEditorial=read('data/travel/mountainBatchPremiumEditorial.ts');
  assert(previewEditorial.includes('commercialRightsCleared===true') &&
         previewEditorial.includes('visuallyVerified===true'),
    slug+' no unapproved photos allowed in galleries');
  assert(manifest.hotels.every((photo,i)=>photo.property===guide.hotels[Math.floor(i/3)].name),
    slug+' WRONG hotel/photograph assignment: do not mislabel one hotel as another');
  const sourceUrls=manifest.destinationScenes.filter(x=>x.status==='candidate_needs_visual_review').map(x=>(x.downloadUrl||'').split('?')[0]);
  assert.equal(new Set(sourceUrls).size,sourceUrls.length,slug+' same source scene used for multiple sectors');
  for(const item of manifest.hotels.concat(manifest.destinationScenes)){
   assert(['candidate_needs_visual_review','missing'].includes(item.status),'Unknown image QA status');
   if(item.status!=='candidate_needs_visual_review')continue;
   assert(item.commercialRightsCleared===true&&item.ownerRightsAuthorization?.includes('2026-10-15'),
     slug+' owner rights assertion must be recorded');
   assert(item.visuallyVerified!==true||!item.visualQaWarning,slug+' rejected image cannot enter premium gallery');
   assert(item.sourcePage?.startsWith('https://')&&item.downloadUrl?.startsWith('https://'),
     slug+' lacks provenance');
   assert(item.localPath?.startsWith('/images/travel/'+slug+'-premium/'),
     slug+' photo wrong city path');
   const physical='public'+item.localPath;
   assert(existsSync(physical)&&statSync(physical).size>12000,slug+' missing tiny WebP file '+physical);
  }
  console.log(' '+slug+': photos '+manifest.downloadedHotelCandidates+'/12 hotel & '+manifest.downloadedDestinationCandidates+'/9 destination candidates, rights user-affirmed; visual QA per image, site release still blocked.');
 } else console.log(' '+slug+': original draft done; photographs must still be collected.');
}
assert.equal(totalOriginalProfiles,20,'Five destinations x 4 genuine hotel profiles expected');
console.log('Next 5 draft content + true hotel photo-name mapping + no auto-index: OK');
