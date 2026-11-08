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
// Check the integrated guide registry, not just the 88 discovery slugs.
// A slug existing in the catalogue does not mean its full guide is finished.
const guideType = registry.match(/export type FeaturedCitySlug\s*=\s*([^;]+);/);
assert(guideType, 'Premium guide slug type missing.');
const guideSlugs = [...guideType[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
assert.equal(new Set(guideSlugs).size, guideSlugs.length, 'Duplicate integrated premium guides.');
for (const slug of guideSlugs) assert(slugs.includes(slug), 'Unknown integrated guide: ' + slug);
for (const slug of ['rajasthan', 'galle']) assert(guideSlugs.includes(slug), 'Previously integrated guide missing: ' + slug);

// Jaipur #77 has a deliberate photo-rights gate. Do not silently convert its
// unapproved bilingual drafts into a finished guide or expose hotel placeholders.
if (guideSlugs.includes('jaipur')) {
  const jaipur = JSON.parse(read('data/travel/jaipurPhotoProductionPlan.json'));
  const slots = jaipur.photoSlots || [];
  assert(jaipur.previewApproved, 'Jaipur integrated without approved private Preview media.');
  assert.equal(slots.length, 21, 'Jaipur guide needs 9 scenes and 12 hotel photos.');
  assert.equal(slots.filter(p => p.category === 'landscape').length, 9);
  assert.equal(slots.filter(p => p.category === 'hotel').length, 12);
  for (const photo of slots) {
    assert(photo.photoIdentityVisuallyApproved && photo.webpValidated && photo.originalSha256,
      'Jaipur image lacks identity, conversion or source verification: ' + photo.key);
    assert(photo.localWebpPath?.startsWith('/images/travel/jaipur-premium/'),
      'Jaipur image path is not a local asset: ' + photo.key);
    assert(existsSync('public' + photo.localWebpPath), 'Jaipur WebP missing: ' + photo.key);
    if (photo.category === 'hotel') {
      assert(photo.rightsPermissionEvidence, 'Jaipur hotel image permission missing: ' + photo.key);
    }
  }
}
const missingGuides = slugs.filter(slug => !guideSlugs.includes(slug));
console.log('Travel premium guides integrated: ' + guideSlugs.length + '/' + slugs.length);
console.log('Not integrated (do not claim finished): ' + (missingGuides.join(', ') || 'none'));
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
