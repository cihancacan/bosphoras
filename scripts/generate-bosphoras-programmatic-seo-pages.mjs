import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataFiles = [
  path.join(root, 'data', 'bosphorasProgrammaticSeoPages.ts'),
  path.join(root, 'data', 'bosphorasAdditionalSeoPages.ts'),
];
const source = dataFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

const pageRegex = /key:\s*['"]([^'"]+)['"][\s\S]*?slugs:\s*\{\s*fr:\s*['"]([^'"]+)['"],\s*en:\s*['"]([^'"]+)['"],\s*ru:\s*['"]([^'"]+)['"],\s*ar:\s*['"]([^'"]+)['"]\s*\}/g;
const locales = ['fr', 'en', 'ru', 'ar'];
const pages = [];
const seenKeys = new Set();
let match;
while ((match = pageRegex.exec(source)) !== null) {
  const key = match[1];
  if (seenKeys.has(key)) continue;
  seenKeys.add(key);
  pages.push({ key, slugs: { fr: match[2], en: match[3], ru: match[4], ar: match[5] } });
}

if (pages.length < 60) {
  throw new Error(`[bosphoras seo] Expected at least 60 pages, found ${pages.length}. Check Bosphoras SEO data files.`);
}

function routeFileFromSlug(slug) {
  const clean = slug.replace(/^\//, '').replace(/\/$/, '');
  return path.join(root, 'app', clean, 'page.tsx');
}

function pageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS PROGRAMMATIC SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';\nimport { BosphorasProgrammaticSeoPage, getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\n\nconst page = allBosphorasSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasProgrammaticSeoPage page={page} locale="${locale}" />;\n}\n`;
}

let written = 0;
for (const page of pages) {
  for (const locale of locales) {
    const filePath = routeFileFromSlug(page.slugs[locale]);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, pageContent(page.key, locale));
    written += 1;
  }
}

console.log(`[bosphoras seo] FORCE regenerated: ${pages.length} subjects, ${written} files written`);
