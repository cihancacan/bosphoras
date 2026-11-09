const test=require('node:test');
const assert=require('node:assert/strict');
const {NextRequest}=require('next/server');
const {middleware}=require('../middleware.ts');
const {preferredSiteLanguage}=require('../lib/siteLanguage.ts');

test('browser language preferences support all four site languages and regional variants',()=>{
  for(const language of ['fr','en','ru','ar'])assert.equal(preferredSiteLanguage(language+'-XX'),language);
  assert.equal(preferredSiteLanguage('de-DE,de;q=0.9,ru;q=0.8,en;q=0.7'),'ru');
  assert.equal(preferredSiteLanguage('en;q=0.3,ar;q=0.9'),'ar');
  assert.equal(preferredSiteLanguage('ru;q=0,en;q=0.5'),'en');
  assert.equal(preferredSiteLanguage('ru;q=bad,ar;q=2,en;q=.7'),'en');
  assert.equal(preferredSiteLanguage(null),'fr');
  assert.equal(preferredSiteLanguage('zh,ja'),'fr');
});
test('a valid manual choice takes priority over browser detection',()=>{
  for(const language of ['fr','en','ru','ar'])assert.equal(preferredSiteLanguage('ru-RU',language),language);
  assert.equal(preferredSiteLanguage('ru-RU','invalid'),'ru');
});
function run(path='/',language='ru-RU',cookie='',method='GET'){
  return middleware(new NextRequest('https://www.bosphoras.com'+path,{method,headers:{'accept-language':language,cookie}}));
}
test('home redirects are temporary and preserve query parameters',()=>{
  for(const language of ['en','ru','ar']){
    const result=run('/?utm_source=test',language);
    assert.equal(result.status,307);assert.equal(result.headers.get('location'),'https://www.bosphoras.com/'+language+'?utm_source=test');
    assert(result.headers.get('cache-control').includes('no-store'));
    assert(result.headers.get('vary').includes('Cookie'));
  }
  assert.equal(run('/','fr-FR').headers.get('location'),null);
  assert.equal(run('/','ru','bosphoras_language=fr').headers.get('location'),null);
});
test('explicit pages, forms, APIs and non-navigation methods are untouched',()=>{
  for(const path of ['/ru','/en','/ar','/carrieres','/ru/carrieres','/api/careers/apply','/_next/static/file.js']){
    assert.equal(run(path).headers.get('location'),null);
  }
  assert.equal(run('/','ru','','POST').headers.get('location'),null);
  assert.equal(run('/','ar','','HEAD').status,307);
});
