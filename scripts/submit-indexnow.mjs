import fs from 'node:fs';
const { host, key } = JSON.parse(fs.readFileSync(new URL('../data/indexnow.json', import.meta.url), 'utf8'));
const origin = `https://${host}`;
const keyLocation = `${origin}/${key}.txt`;
const proof = await fetch(keyLocation, { signal: AbortSignal.timeout(20000) });
if (!proof.ok || (await proof.text()).trim() !== key) throw new Error('The deployed IndexNow ownership file is not available yet.');
const response = await fetch(`${origin}/sitemap.xml`, { signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Sitemap HTTP ${response.status}`);
const xml = await response.text();
const urls = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&')))];
if (!urls.length || urls.some((url) => new URL(url).origin !== origin)) throw new Error('Unexpected or empty sitemap.');
// Run after a release that changes the shared metadata/templates, never on every request.
for (let offset = 0; offset < urls.length; offset += 10000) {
  const urlList = urls.slice(offset, offset + 10000);
  const result = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }), signal: AbortSignal.timeout(30000),
  });
  if (![200, 202].includes(result.status)) throw new Error(`IndexNow returned HTTP ${result.status}: ${await result.text()}`);
  console.log(`IndexNow HTTP ${result.status}: ${urlList.length} URLs submitted. Acceptance is not proof of indexing.`);
}
