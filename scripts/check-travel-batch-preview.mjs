import assert from 'node:assert/strict';
import {existsSync,readFileSync,statSync} from 'node:fs';
const fs=readFileSync;
const slugs=[['st-moritz','stMoritz'],['aspen','aspen'],['niseko','niseko'],
 ['megeve','megeve'],['jackson-hole','jacksonHole'],['big-sky','bigSky'],
 ['val-disere','valDisere'],['verbier','verbier']];
let approved=0;
for(const [slug,stem] of slugs){
 const m=JSON.parse(fs('data/travel/'+stem+'MediaCandidates.json','utf8'));
 assert.equal(m.destination,slug);
 assert.equal(m.hotels.length,12);
 assert.equal(m.destinationScenes.length,9);
 assert.equal(m.downloadedHotelCandidates,12);
 assert.equal(m.downloadedDestinationCandidates,9);
 assert.equal(m.approvedForCommercialPublication,false,'No bulk image approval without inspecting every individual image');
 const seenPaths=new Set();
 for(const p of m.hotels.concat(m.destinationScenes)){
  assert.equal(p.status,'candidate_needs_visual_review','Incomplete 21-photo manifest: '+slug);
  assert(p.localPath?.startsWith('/images/travel/'+slug+'-premium/'),'Wrong city asset path');
  assert(!seenPaths.has(p.localPath),'Repeated file in destination: '+slug+': '+p.localPath);
  seenPaths.add(p.localPath);
  const physical='public'+p.localPath;
  assert(existsSync(physical)&&statSync(physical).size>12000,'Unusable photo file: '+physical);
  assert(p.sourcePage?.startsWith('https://'),'Missing external provenance: '+slug);
  assert.equal(p.commercialRightsCleared,true,'Image rights authorization missing: '+slug);
  if(p.visuallyVerified){
   assert(!p.visualQaWarning,'Rejected or warned photo approved: '+slug+': '+p.key);
   approved++;
  }
 }
 const guide=fs('data/travel/'+stem+'Guide.ts','utf8');
 const photoAt=guide.lastIndexOf('photos:');
 const guideEnd=guide.lastIndexOf('\n};');
 assert(photoAt>0 && guideEnd>photoAt,slug+' photo registry missing');
 const guidePhotos=JSON.parse(guide.slice(photoAt+'photos:'.length,guideEnd).trim());
 const approvedKeys=m.destinationScenes.filter(x=>x.visuallyVerified===true&&x.commercialRightsCleared===true&&!x.visualQaWarning);
 for(const item of approvedKeys){
   assert(guidePhotos[item.key] && guidePhotos[item.key].src===item.localPath,
     slug+' approved scene not in guide photos: '+item.key);
 }

 const hero=guide.match(/hero:"(scene-\d+)"/)?.[1];
 const second=guide.match(/secondary:"(scene-\d+)"/)?.[1];
 assert(guidePhotos[hero]?.src && guidePhotos[second]?.src,slug+' requested hero/secondary is missing from page metadata');
 assert(hero&&second,slug+' missing staged hero/secondary');
 for(const key of [hero,second]){
  assert(m.destinationScenes.some(x=>x.key===key&&x.visuallyVerified===true&&!x.visualQaWarning),
    slug+' featured hero/secondary is not visibly approved: '+key);
 }
 for(const prop of new Set(m.hotels.map(x=>x.propertyKey))){
  assert(m.hotels.some(x=>x.propertyKey===prop&&x.visuallyVerified===true&&!x.visualQaWarning),
    slug+' property has no usable photo: '+prop);
 }
 console.log('READY FOR ONE INTERNAL PREVIEW: '+slug+', '+m.hotels.concat(m.destinationScenes).filter(x=>x.visuallyVerified).length+'/21 usable photographs, warned frames hidden');
}
const catalogue=fs('data/travel/destinations.ts','utf8');
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'),'Indexability guard weakened');
assert(catalogue.includes('approvedCategorySlugs: ReadonlySet<string> = new Set([])'),'Category indexability guard weakened');
const ui=fs('components/travel/FeaturedCityGuide.tsx','utf8');
assert(ui.includes('const approvedPhotos=')&&ui.includes('hero && (destinationAssets'),
  'Missing image fallback could crash the premium destination component');
const site=fs('components/travel/TravelPages.tsx','utf8');
assert(site.includes('robots: { index: ready'),'Robots noindex must remain');
assert(site.includes('schemaHeroPhoto')&&site.includes('schemaHeroIsCleared'),'Unapproved images must remain excluded from JSON-LD');
console.log('ALL EIGHT NEW GUIDES HAVE REAL UNIQUE SOURCE PHOTOS, APPROVED HERO AND FOUR NONEMPTY PROPERTY GALLERIES, INDEXABLE=false. Usable photos:',approved);
