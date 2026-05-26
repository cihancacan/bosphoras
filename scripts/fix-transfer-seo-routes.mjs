import fs from 'node:fs';

const keywordFile = 'lib/transferKeywordSeo.ts';
if (fs.existsSync(keywordFile)) {
  let content = fs.readFileSync(keywordFile, 'utf8');
  content = content.replace("fr: '',", "fr: '/transfer-istanbul',");
  fs.writeFileSync(keywordFile, content);
  console.log('[transfer seo] French keyword URLs stay under /transfer-istanbul to avoid 404');
}

const nextConfigFile = 'next.config.js';
if (fs.existsSync(nextConfigFile)) {
  let content = fs.readFileSync(nextConfigFile, 'utf8');
  content = content.replace("      { source: '/transfer-istanbul/transfert-aeroport-saw', destination: '/transfert-aeroport-saw', permanent: true },\n", '');
  content = content.replace("      { source: '/transfer-istanbul/:path*', destination: '/:path*', permanent: true },\n", '');
  fs.writeFileSync(nextConfigFile, content);
  console.log('[transfer seo] removed unsafe wildcard redirects from /transfer-istanbul');
}
