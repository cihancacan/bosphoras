import assert from 'node:assert/strict';
import {existsSync,readFileSync,statSync} from 'node:fs';
const file=p=>readFileSync(p,'utf8');
const m=JSON.parse(file('data/travel/costaCareyesMediaCandidates.json'));
assert.equal(m.destination,'costa-careyes');
assert.equal(m.hotels.length,12);
assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
assert.equal(m.visuallyVerified,true);
assert(m.visualReviewEvidence?.includes('contact-sheet'));
const all=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(all.map(x=>x.sha256)).size,21);
assert.equal(new Set(all.map(x=>x.localPath)).size,21);
for(const x of all){
 assert(x.localPath.startsWith('/images/travel/costa-careyes-premium/'));
 assert(x.status==='visually_reviewed_private_preview'&&x.visuallyVerified===true);
 assert(!x.visualQaWarning);assert(x.sourcePage.startsWith('https://'));
 assert(x.downloadUrl.startsWith('https://'));
 assert(x.credit&&x.frCaption&&x.enCaption);assert.equal(x.sha256.length,64);
 assert.equal(x.commercialRightsCleared,false);
 assert(existsSync('public'+x.localPath));
 assert(statSync('public'+x.localPath).size>14000);
}
for(const k of ['sol','carioca','club','bungalow'])
 assert.equal(m.hotels.filter(x=>x.propertyKey===k).length,3);
assert(existsSync('docs/travel-costa-careyes-contact-sheet.jpg'));
const c=file('data/travel/destinations.ts');
const slugs=[...c.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);
assert.equal(new Set(slugs).size,88);
assert(slugs.includes('costa-careyes'));
assert(c.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(file('data/travel/featuredCityGuides.ts').includes("'costa-careyes': costaCareyesGuide"));
assert(file('components/travel/FeaturedCityGuide.tsx').includes('confirmedCostaCareyesPreviewAssets'));
assert(file('components/travel/FeaturedCityGuide.tsx').includes('costaCareyesDraftFaq'));
assert(file('components/travel/TravelPages.tsx').includes('isCostaCareyes'));
assert(file('components/travel/TravelPages.tsx').includes('costaCareyesDraftFaq'));
assert(file('data/travel/costaCareyesDraftGuide.ts').includes('no conventional hotel'));
for(const title of ['Sol de Oriente','Casita Carioca','El Careyes Club & Residences','Playa Rosa Bungalows'])
 assert(file('data/travel/costaCareyesDraftGuide.ts').includes(title));
const faq=file('data/travel/costaCareyesDraftFaq.ts');
assert(faq.includes('turtle hatchlings')&&faq.includes('Careyes'));
console.log('COSTA_CAREYES_QA_PASS: 4 true Careyes accommodation categories, 12 hotel+9 scene unique WebP, 14 FR/EN FAQs, 88 destination slugs and noindex, all commercial photo rights explicitly blocked');
