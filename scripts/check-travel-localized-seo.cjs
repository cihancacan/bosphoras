const assert=require('node:assert/strict');
const {travelDestinations}=require('../data/travel/destinations');
const {nativeTravelNames}=require('../data/travel/localizedNames');
const {indexedTravelUrls,isTravelGuideIndexable}=require('../data/travel/guideIndexation');
const {travelPageMetadata}=require('../components/travel/TravelPages');
const {getLocalizedGuide,reviewedLocalizedGuides}=require('../data/travel/localizedGuides');
const root='https://www.bosphoras.com';
assert.equal(Object.keys(nativeTravelNames).length,88);
assert.equal(travelDestinations.length,88);
assert.equal(reviewedLocalizedGuides.size,184);
const urls=indexedTravelUrls(root), known=new Set(urls);
assert.equal(urls.length,known.size);
const titles=new Set();
for(const d of travelDestinations){
 const n=nativeTravelNames[d.slug];assert.ok(n&&/[\u0600-\u06ff]/.test(n.ar)&&/[\u0400-\u052f]/.test(n.ru),d.slug);
 for(const locale of ['fr','en','ru','ar'])for(const variant of ['destinations','hotels']){
  const id=d.slug+'/'+locale+'/'+variant;
  assert.ok(isTravelGuideIndexable(d.slug,variant,locale),id);
  const m=travelPageMetadata(locale,[variant,d.slug]);
  assert.equal(m.robots.index,true,id);assert.ok(known.has(m.alternates.canonical),id);
  assert.ok(typeof m.title==='string'&&m.title.length>0&&typeof m.description==='string'&&m.description.length>0&&m.description.length<=160,id+' complete metadata');
  assert.ok(m.openGraph&&m.twitter,id+' social metadata');
  assert.equal(m.alternates.canonical,root+(locale==='fr'?'':'/'+locale)+'/travel/'+variant+'/'+d.slug,id);
  assert.deepEqual(Object.keys(m.alternates.languages).sort(),['istanbul','bodrum','antalya','paris','dubai','bali','phuket','new-york'].includes(d.slug)?['ar','en','fr','ru','tr']:['ar','en','fr','ru'],id);
  for(const [lang,url] of Object.entries(m.alternates.languages))assert.equal(url,root+(lang==='fr'?'':'/'+lang)+'/travel/'+variant+'/'+d.slug,id);
  if(locale==='ar'||locale==='ru'){
   const script=locale==='ar'?/[\u0600-\u06ff]/:/[\u0400-\u052f]/;
   assert.ok(script.test(m.title)&&script.test(m.description),id+' metadata language');
   assert.ok(m.description.length<=160&&m.description.length>0&&m.openGraph.images&&m.twitter,id);
   assert.ok(!titles.has(m.title),id+' duplicate title');titles.add(m.title);
   for(const image of m.openGraph.images){const u=new URL(typeof image==='string'?image:image.url);assert.equal(u.protocol,'https:',id);assert.ok(!u.pathname.includes('https://'),id+' malformed image URL');}
   assert.ok(getLocalizedGuide(d.slug,locale),id);
  }
 }
}
for(const locale of ['fr','en','ar','ru'])for(const parts of [[],['destinations'],['hotels']])assert.equal(travelPageMetadata(locale,parts).robots.index,true);
assert.equal(titles.size,352);
assert.equal(urls.filter(u=>/\/travel\/(destinations|hotels)\/[^/]+$/.test(u)).length,720);
assert.equal(travelPageMetadata('ru',['destinations','nonexistent']).robots.index,false);
for(const slug of ['istanbul','bodrum','antalya','paris','dubai','bali','phuket','new-york'])for(const variant of ['destinations','hotels']){const m=travelPageMetadata('tr',[variant,slug]);assert.equal(m.robots.index,true);assert.ok(known.has(m.alternates.canonical));assert.deepEqual(Object.keys(m.alternates.languages).sort(),['ar','en','fr','ru','tr']);assert.equal(m.alternates.languages.tr,m.alternates.canonical);assert.equal(travelPageMetadata('tr',[variant,'miami']).robots.index,false);}
const pilot=getLocalizedGuide('istanbul','tr');assert.equal(pilot.areas.length,5);assert.equal(pilot.hotels.length,9);assert.equal(pilot.experiences.length,6);assert.equal(pilot.faq.length,8);
console.log('720 public guide and hotel routes, including eight reviewed Turkish destinations: robots, sitemap, reciprocal hreflang, localized metadata and image URLs verified.',urls.length,'travel URLs');
