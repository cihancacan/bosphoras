const assert=require('node:assert/strict');
const {travelDestinations}=require('../data/travel/destinations');
const {nativeTravelNames}=require('../data/travel/localizedNames');
const {indexedTravelUrls,indexedTravelAlternates,isTravelGuideIndexable}=require('../data/travel/guideIndexation');
const {travelPageMetadata}=require('../components/travel/TravelPages');
const {getLocalizedGuide}=require('../data/travel/localizedGuides');
const root='https://www.bosphoras.com';
assert.equal(Object.keys(nativeTravelNames).length,88);
for(const d of travelDestinations){const n=nativeTravelNames[d.slug];assert.ok(n&&/[\u0600-\u06ff]/.test(n.ar)&&/[\u0400-\u052f]/.test(n.ru),d.slug);}
let urls=indexedTravelUrls(root);assert.equal(urls.length,new Set(urls).size);
for(const d of travelDestinations)for(const locale of ['fr','en'])for(const variant of ['destinations','hotels']){assert.ok(isTravelGuideIndexable(d.slug,variant,locale),d.slug+'/'+locale);const meta=travelPageMetadata(locale,[variant,d.slug]);assert.equal(meta.robots.index,true);assert.ok(urls.includes(meta.alternates.canonical));}
for(const locale of ['fr','en','ar','ru'])for(const parts of [[],['destinations'],['hotels']])assert.equal(travelPageMetadata(locale,parts).robots.index,true);
for(const v of ['destinations','hotels'])for(const locale of ['fr','en','ru','ar']){
 const m=travelPageMetadata(locale,[v,'desaru-coast']);assert.equal(m.robots.index,true);assert.deepEqual(Object.keys(m.alternates.languages).sort(),['ar','en','fr','ru']);assert.equal(m.alternates.canonical,root+(locale==='fr'?'':'/'+locale)+'/travel/'+v+'/desaru-coast');assert.ok(urls.includes(m.alternates.canonical));
 if(locale==='ar'||locale==='ru'){assert.ok((locale==='ar'?/[\u0600-\u06ff]/:/[\u0400-\u052f]/).test(m.title));assert.ok(m.description.length<=160&&m.openGraph.images&&m.twitter);}
}
for(const d of travelDestinations)for(const locale of ['ar','ru'])for(const variant of ['destinations','hotels'])if(!isTravelGuideIndexable(d.slug,variant,locale))assert.ok(!urls.includes(root+'/'+locale+'/travel/'+variant+'/'+d.slug));
console.log('88 native names, reviewed-only sitemap, localized titles, canonical URLs and reciprocal hreflang verified.',urls.length,'URLs');
