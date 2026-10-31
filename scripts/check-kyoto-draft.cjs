/** Kyoto #68 draft integrity gate: prevent premature activation before photo QA. */
const fs=require('node:fs');const assert=require('node:assert/strict');
const g=fs.readFileSync('data/travel/kyotoDraftGuide.ts','utf8'),q=fs.readFileSync('data/travel/kyotoDraftFaq.ts','utf8');
const reg=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8'),dest=fs.readFileSync('data/travel/destinations.ts','utf8');
assert(g.includes('"slug": "kyoto"')&&dest.includes('slug: "kyoto"'));assert((q.match(/"q":/g)||[]).length===16);
for(const h of ['Aman Kyoto','Park Hyatt Kyoto','The Ritz-Carlton, Kyoto','Four Seasons Hotel Kyoto'])assert(g.includes(h));
assert(reg.includes('tokyoGuide')&&reg.includes('palawanGuide'));assert(!reg.includes('kyoto: kyotoGuide')&&!reg.includes("'kyoto': kyotoGuide"),'Cannot register before all photo sources are identified');
console.log('Kyoto 68 longform source-and-FAQ draft ready; images and activation pending');
