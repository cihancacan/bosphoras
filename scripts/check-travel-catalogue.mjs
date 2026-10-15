/**
 * GitHub Actions preflight for curated Travel pages.
 * Keeps the catalogue intact and prevents a premium guide from silently
 * becoming an indexable generic route before approval.
 */
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = p => readFileSync(p, 'utf8');
const catalogue = read('data/travel/destinations.ts');
const slugs = [...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
assert.equal(slugs.length, 88, 'Expected original 88 destinations, update catalogue test intentionally if a genuine 89th is added.');
assert.equal(new Set(slugs).size, slugs.length, 'Duplicate destination slugs are not permitted.');
const registry = read('data/travel/featuredCityGuides.ts');
for (const slug of ['porto-cervo', 'mustique']) assert(registry.includes("'"+slug+"'"), slug + ' missing from premium guide registry');
const site = read('components/travel/TravelPages.tsx');
assert(site.includes('robots: { index: ready'), 'Keep noindex for non-approved pages.');
assert(site.includes('approvedCategorySlugs'), 'Publication approval gate was removed.');
const widgets = read('components/travel/FeaturedCityGuide.tsx');
assert(widgets.includes('confirmedMustiqueAssets'), 'Mustique media manifest filtering missing.');
for (const path of ['data/travel/mustiquePremiumImageSources.json','data/travel/mustiqueDestinationImageSources.json']) {
 const manifest = JSON.parse(read(path));
 assert.equal(manifest.downloaded, manifest.items.filter(x => x.status === 'downloaded').length, 'Mismatch in ' + path);
 assert.equal(manifest.expected, manifest.items.length, 'Expected-count mismatch in ' + path);
}
console.log('Travel catalogue, uniqueness, Mustique manifests and noindex safeguards: OK');
