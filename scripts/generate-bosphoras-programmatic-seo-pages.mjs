import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataPath = path.join(root, 'data', 'bosphorasProgrammaticSeoPages.ts');
const source = fs.readFileSync(dataPath, 'utf8');

const pageRegex = /key:\s*'([^']+)'[\s\S]*?slugs:\s*\{\s*fr:\s*'([^']+)',\s*en:\s*'([^']+)',\s*ru:\s*'([^']+)',\s*ar:\s*'([^']+)'\s*\}/g;
const locales = ['fr', 'en', 'ru', 'ar'];
const pages = [];
let match;
while ((match = pageRegex.exec(source)) !== null) {
  pages.push({ key: match[1], slugs: { fr: match[2], en: match[3], ru: match[4], ar: match[5] } });
}

if (pages.length < 25) {
  throw new Error(`[bosphoras seo] Expected at least 25 pages, found ${pages.length}. Check data/bosphorasProgrammaticSeoPages.ts`);
}

function routeFileFromSlug(slug) {
  const clean = slug.replace(/^\//, '').replace(/\/$/, '');
  return path.join(root, 'app', clean, 'page.tsx');
}

function pageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS PROGRAMMATIC SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { bosphorasProgrammaticSeoPages } from '@/data/bosphorasProgrammaticSeoPages';\nimport { BosphorasProgrammaticSeoPage, getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\n\nconst page = bosphorasProgrammaticSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasProgrammaticSeoPage page={page} locale="${locale}" />;\n}\n`;
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
