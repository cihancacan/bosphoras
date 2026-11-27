const assert=require('node:assert/strict');
const {travelDestinations}=require('../data/travel/destinations');
const {nativeTravelNames}=require('../data/travel/localizedNames');
const {indexedTravelUrls,isTravelGuideIndexable,editorialTravelLocales}=require('../data/travel/guideIndexation');
const {travelPageMetadata}=require('../components/travel/TravelPages');
const {getLocalizedGuide,reviewedLocalizedGuides}=require('../data/travel/localizedGuides');
const {travelText,travelHref}=require('../lib/travel/i18n');
const root='https://www.bosphoras.com';
const expectedAlternates=(slug,variant)=>Object.fromEntries(editorialTravelLocales.filter(locale=>isTravelGuideIndexable(slug,variant,locale)).map(locale=>[travelText(locale).hreflang,root+travelHref(locale,variant+'/'+slug)]));
assert.equal(Object.keys(nativeTravelNames).length,88);
assert.equal(travelDestinations.length,88);
assert.equal(reviewedLocalizedGuides.size,251);
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
  assert.deepEqual(m.alternates.languages,expectedAlternates(d.slug,variant),id);
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
assert.equal(urls.filter(u=>/\/travel\/(destinations|hotels)\/[^/]+$/.test(u)).length,854);
assert.equal(travelPageMetadata('ru',['destinations','nonexistent']).robots.index,false);
for(const locale of ['tr','de','es','it','pt','zh'])for(const d of travelDestinations)for(const variant of ['destinations','hotels']){const m=travelPageMetadata(locale,[variant,d.slug]),ready=reviewedLocalizedGuides.has(d.slug+'/'+locale);assert.equal(m.robots.index,ready,d.slug+'/'+locale+'/'+variant);if(ready){assert.ok(known.has(m.alternates.canonical));assert.deepEqual(m.alternates.languages,expectedAlternates(d.slug,variant));assert.equal(m.alternates.languages[travelText(locale).hreflang],m.alternates.canonical);assert.ok(m.title&&m.description&&m.description.length<=160&&m.openGraph&&m.twitter);}}
const pilot=getLocalizedGuide('istanbul','tr');assert.equal(pilot.areas.length,5);assert.equal(pilot.hotels.length,9);assert.equal(pilot.experiences.length,6);assert.equal(pilot.faq.length,8);
console.log('854 public guide and hotel routes, including Istanbul, Paris, Dubai, New York, Maldives, Bali, Phuket, Tokyo, Miami, Los Angeles, Bodrum and Antalya in ten languages: robots, sitemap, reciprocal hreflang, localized metadata and image URLs verified.',urls.length,'travel URLs');
