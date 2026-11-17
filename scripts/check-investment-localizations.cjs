const assert=require('node:assert/strict');
const fs=require('node:fs');
const {pick,portalStatus,portalLocale,portalInstrument,portalPayment}=require('../lib/investmentPortalI18n');
const {translations}=require('../data/investmentVentureTranslations');
const {investmentVentures}=require('../data/investmentVentures');
for(const locale of ['ru','ar']){
 const script=locale==='ru'?/[\u0400-\u052f]/:/[\u0600-\u06ff]/;
 assert.ok(script.test(portalStatus(locale,'paid'))&&script.test(portalInstrument(locale,'loan'))&&script.test(portalPayment(locale,'interest')));
 for(const venture of investmentVentures)assert.ok(translations[venture.code][locale].every(x=>script.test(x)));
 for(const kind of ['access','dashboard']){
  const source=fs.readFileSync('app/'+locale+'/investment/'+kind+'/[type]/page.tsx','utf8');
  assert.ok(source.includes('locale="'+locale+'"')&&source.includes('index:false')&&source.includes('follow:false'));
  assert.ok(source.includes("type:'investor'")&&source.includes("type:'entrepreneur'"));
 }
}
assert.equal(pick('fr','FR','EN','RU','AR'),'FR');assert.equal(pick('en','FR','EN','RU','AR'),'EN');
assert.equal(portalLocale('ru'),'ru-RU');assert.equal(portalLocale('ar'),'ar');
console.log('Eight private RU/AR routes, localized financial statuses and venture descriptions verified; private robots retained.');
