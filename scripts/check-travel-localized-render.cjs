const assert=require('node:assert/strict');
process.env.__NEXT_IMAGE_OPTS=JSON.stringify({unoptimized:true});
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');
const {ImageConfigContext}=require('next/dist/shared/lib/image-config-context.shared-runtime');
const {imageConfigDefault}=require('next/dist/shared/lib/image-config');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const {getLocalizedGuide}=require('../data/travel/localizedGuides');
const {LocalizedFeaturedCityGuide,LocalizedGuideSchema}=require('../components/travel/LocalizedFeaturedCityGuide');
let pages=0;
for(const [slug,city] of Object.entries(featuredCityGuides))for(const locale of ['ru','ar'])for(const variant of ['destination','hotels']){
 const data=getLocalizedGuide(slug,locale),id=slug+'/'+locale+'/'+variant;
 assert.ok(data,id);
 const element=React.createElement(ImageConfigContext.Provider,{value:{...imageConfigDefault,unoptimized:true}},React.createElement(LocalizedFeaturedCityGuide,{city,data,locale,variant}));
 const html=renderToStaticMarkup(element);
 assert.ok(html.includes('lang="'+locale+'"')&&html.includes('dir="'+(locale==='ar'?'rtl':'ltr')+'"'),id+' language direction');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,id+' H1');
 for(const section of ['quartiers','selection','experiences','conseils'])assert.ok(html.includes('id="'+section+'"'),id+' '+section);
 if(data.faq.length)assert.ok(html.includes('id="faq"'),id+' FAQ');
 assert.ok(!html.includes('[object Object]'),id+' invalid render');
 const schema=renderToStaticMarkup(React.createElement(LocalizedGuideSchema,{city,data,locale,path:(variant==='hotels'?'hotels':'destinations')+'/'+slug}));
 assert.ok(schema.includes('"inLanguage":"'+locale+'"'),id+' structured data');pages++;
}
assert.equal(pages,352);
console.log(pages+' localized destination/hotel page variants rendered on server with direction, section ids and structured data.');
