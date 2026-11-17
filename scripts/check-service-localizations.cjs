const assert=require('node:assert/strict');
const {allPages}=require('../data/pages');
const {getPropertyPath,isInternationalProperty}=require('../data/propertyDesk');
const ids=['services','relocate','legal-tax','business-setup','health-insurance','offices','luxury-concierge','private-club','property','faq','private-assessment'];
for(const locale of ['fr','en','ru','ar'])for(const id of ids){const p=allPages[locale].find(x=>x.id===id);assert.ok(p,locale+' '+id);assert.ok(p.title&&p.h1&&p.metaDescription&&p.shortIntro&&p.cta.label,locale+' '+id);if(locale==='ru'||locale==='ar'){const re=locale==='ru'?/[\u0400-\u052f]/:/[\u0600-\u06ff]/;for(const value of [p.title,p.h1,p.metaDescription,p.shortIntro])assert.match(value,re);}}
const p={countryCode:'AE',countryName:'UAE',slugs:{fr:'al',en:'al',ru:'al',ar:'al'}};assert.ok(isInternationalProperty(p));assert.equal(getPropertyPath('ar',p),'/الاستثمار-العقاري-الدولي/al');assert.equal(getPropertyPath('fr',{...p,countryCode:'TR'}),'/immobilier-turquie/al');console.log('44 localized service variants and canonical property paths verified.');
