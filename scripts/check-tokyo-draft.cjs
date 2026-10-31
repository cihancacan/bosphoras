/** Tokyo #67 draft gate: no active registration until 21 source-verified photos. */
const fs=require('node:fs');const assert=require('node:assert/strict');
const guide=fs.readFileSync('data/travel/tokyoDraftGuide.ts','utf8');
const faq=fs.readFileSync('data/travel/tokyoDraftFaq.ts','utf8');
const active=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8');
const geographic=fs.readFileSync('data/travel/destinations.ts','utf8');
for(const name of ['Aman Tokyo','Bvlgari Hotel Tokyo','Park Hyatt Tokyo','1 Hotel Tokyo'])assert(guide.includes(name));
assert((faq.match(/"q":/g)||[]).length===16);
assert(guide.includes('"slug": "tokyo"')&&geographic.includes('slug: "tokyo"'));
assert(!active.includes('tokyo: tokyoGuide')&&!active.includes("'tokyo': tokyoGuide"),'Tokyo must not activate without image QA');
assert(active.includes('palawanGuide'),'Palawan #66 must remain registered');
console.log('Tokyo #67 draft FR EN, four hotels, 16 FAQs, catalogue and no premature activation: OK');
