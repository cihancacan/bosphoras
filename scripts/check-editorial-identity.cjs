// Non-destructive editorial identity regression checks.
// Run: node scripts/check-editorial-identity.cjs
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');

const css=read('app/bosphoras-editorial.css');
const travel=read('components/travel/TravelPages.tsx');
const cities=read('components/travel/FeaturedCityGuide.tsx');
const flagship=read('components/travel/IstanbulFlagship.tsx');
const home=read('components/HomeHero.tsx');
const card=read('components/travel/EditorialHotelCard.tsx');
const detail=read('components/travel/HotelEditorialDetail.tsx');

assert(read('app/layout.tsx').includes("import './bosphoras-editorial.css'"));
assert(css.includes('--bosphoras-navy: #193344'));
assert(css.includes('--bosphoras-paper: #ffffff'));
assert(!css.includes('--bosphoras-sand'));
assert(travel.includes('travel-home-hero'));
assert(travel.includes("featuredCityGuide('istanbul')"));
assert(travel.includes('bosphoras-editorial min-h-screen'));
assert(cities.includes('guide-hero'));
assert(cities.includes('photo-attribution'));
assert(!cities.includes('<figcaption'));
assert(!cities.includes("padStart(2,'0')"));
assert(flagship.includes('istanbul-guide-hero'));
assert(!flagship.includes("padStart(2,'0')"));
assert(!card.includes("padStart(2, '0')"));
assert(!detail.includes('Agrandir'+"'} · {active + 1}"));
assert(home.includes('bosphoras-home-hero'));
assert(read('components/HomeProjectPaths.tsx').includes('home-paths-card'));
assert(read('components/Header.tsx').includes('corporate-editorial-header'));
assert(read('components/travel/HotelGuideExplorer.tsx').includes('s.cardBadge'));
assert(!read('components/travel/HotelGuideExplorer.tsx').includes('<span className={s.cardNumber}>'));

for(const p of [
  'app/travel/[[...slug]]/page.tsx',
  'app/[locale]/travel/[[...slug]]/page.tsx',
  'components/travel/TravelPages.tsx',
  'data/travel/featuredCityGuides.ts'
])assert(fs.existsSync(path.join(__dirname,'..',p)),p+' preserved');
console.log('Bosphoras editorial identity checks passed.');
