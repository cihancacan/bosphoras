const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const sitemap = require('../app/sitemap').default;
const robots = require('../app/robots').default;
const { allPages } = require('../data/pages');
const { highPotentialGuides } = require('../data/highPotentialPages');
const { programmaticPages } = require('../data/programmatic/pages');
const { allBosphorasSeoPages } = require('../data/bosphorasSeoRegistry');
const { getCanonicalUrl, siteUrl } = require('../lib/routes');
const { buildMetadata, serviceSchema, websiteSchema } = require('../lib/seo');
const { transferLocales, transferKeywordClusters, getTransferKeywordHref, transferMainPaths } = require('../lib/transferKeywordSeo');
const redirects = require('../data/seo-redirects.json');
const normalize = (url) => decodeURI(new URL(url, siteUrl).pathname);
const known = new Set();
for (const [locale, pages] of Object.entries(allPages)) for (const page of pages) known.add(normalize(getCanonicalUrl(locale, page.slug)));
for (const page of [...highPotentialGuides, ...programmaticPages]) known.add(normalize(getCanonicalUrl(page.locale, page.slug)));
for (const page of allBosphorasSeoPages) for (const slug of Object.values(page.slugs)) known.add(slug);
for (const locale of transferLocales) {
  known.add(transferMainPaths[locale]);
  for (const cluster of transferKeywordClusters[locale]) for (const term of cluster.terms) known.add(getTransferKeywordHref(locale, term));
}
function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name);
    if (item.isDirectory()) walk(file);
    else if (item.name === 'page.tsx' && !file.includes('[')) known.add('/' + path.dirname(file).replace(/^app\/?/, ''));
  }
}
walk('app');
for (const locale of ['en', 'ru', 'ar']) { known.add(`/${locale}/contact`); known.add(`/${locale}/peninsula-istanbul`); }
const redirectMap = new Map(redirects.map(({ source, destination }) => [source, destination]));
assert.equal(redirectMap.size, redirects.length, 'Duplicate redirect source');
for (const [source, destination] of redirectMap) {
  assert(!source.includes(':path'), `Unsafe wildcard ${source}`);
  assert(!redirectMap.has(destination), `Redirect chain: ${source}`);
  assert(known.has(destination), `Unknown redirect destination: ${destination}`);
}
const entries = sitemap();
assert.equal(entries.length, new Set(entries.map((entry) => entry.url)).size, 'Duplicate sitemap URLs');
for (const entry of entries) {
  assert.equal(new URL(entry.url).origin, siteUrl);
  assert(known.has(normalize(entry.url)), `Unknown sitemap URL: ${entry.url}`);
  assert(!redirectMap.has(normalize(entry.url)), `Redirect in sitemap: ${entry.url}`);
  if (entry.lastModified) assert(new Date(entry.lastModified) <= new Date(), 'Future sitemap modification date');
}
let alternates = 0;
for (const [locale, pages] of Object.entries(allPages)) for (const page of pages) {
  const meta = buildMetadata({ locale, path: page.slug, title: page.title, description: page.metaDescription });
  assert.equal(meta.alternates.canonical, getCanonicalUrl(locale, page.slug));
  for (const url of Object.values(meta.alternates.languages || {})) {
    assert(known.has(normalize(url)), `Unknown hreflang: ${url}`);
    alternates++;
  }
}
assert(!JSON.stringify(robots()).includes('/_next/'), 'Static assets are blocked');
assert(!JSON.stringify(serviceSchema({ name: 'Legal coordination', description: 'Test', url: siteUrl })).includes('AggregateRating'), 'Transport reviews leaked into other services');
assert(!websiteSchema().potentialAction, 'Nonexistent public search route');
assert(!fs.readFileSync('app/layout.tsx', 'utf8').includes('bosphoras-transfer-back-lock'), 'Back navigation trap reintroduced');
console.log(`SEO checks passed: ${entries.length} sitemap URLs, ${alternates} language links, ${redirects.length} exact redirects.`);
