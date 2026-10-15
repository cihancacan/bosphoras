/**
 * GitHub Actions preflight for curated Travel pages.
 * Keeps the catalogue intact and prevents a premium guide from silently
 * becoming an indexable generic route before approval.
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = p => readFileSync(p, 'utf8');
const catalogue = read('data/travel/destinations.ts');
const slugs = [...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
assert.equal(slugs.length, 88, 'Expected original 88 destinations, update catalogue test intentionally if a genuine 89th is added.');
assert.equal(new Set(slugs).size, slugs.length, 'Duplicate destination slugs are not permitted.');
const registry = read('data/travel/featuredCityGuides.ts');
for (const slug of ['porto-cervo', 'mustique','courchevel-1850']) assert(registry.includes("'"+slug+"'"), slug + ' missing from premium guide registry');
const site = read('components/travel/TravelPages.tsx');
assert(site.includes('robots: { index: ready'), 'Keep noindex for non-approved pages.');
assert(site.includes('approvedCategorySlugs'), 'Publication approval gate was removed.');
const widgets = read('components/travel/FeaturedCityGuide.tsx');
assert(widgets.includes('confirmedMustiqueAssets'), 'Mustique media manifest filtering missing.');
for (const path of ['data/travel/mustiquePremiumImageSources.json','data/travel/mustiqueDestinationImageSources.json','data/travel/courchevel1850PremiumImageSources.json','data/travel/courchevel1850DestinationImageSources.json']) {
 const manifest = JSON.parse(read(path));
 assert.equal(manifest.downloaded, manifest.items.filter(x => x.status === 'downloaded').length, 'Mismatch in ' + path);
 assert.equal(manifest.expected, manifest.items.length, 'Expected-count mismatch in ' + path);
 assert.equal(manifest.downloaded, manifest.expected, 'Destination still has incomplete photography: ' + path);
 for (const item of manifest.items) {
   if (item.status === 'downloaded') {
     assert(item.localPath?.startsWith('/images/'), 'Image URLs must be web paths, not /public: '+item.localPath);
     assert(item.sourcePage?.startsWith('https://'), 'Image source page missing for ' + item.localPath);
     assert(item.downloadUrl?.startsWith('https://'), 'Image download URL missing for ' + item.localPath);
     assert(existsSync('public' + item.localPath), 'Downloaded media file not present: ' + item.localPath);
     assert(statSync('public' + item.localPath).size >= 12000, 'Image file suspiciously small: ' + item.localPath);
   }
 }
}
console.log('Travel catalogue, uniqueness, Mustique manifests and noindex safeguards: OK');
