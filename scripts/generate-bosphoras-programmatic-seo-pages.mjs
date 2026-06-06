import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const visaResidenceFile = path.join(root, 'data', 'bosphorasVisaResidenceSeoPages.ts');
const countryVisaFile = path.join(root, 'data', 'bosphorasCountryVisaSeoPages.ts');
const visaTypeFile = path.join(root, 'data', 'bosphorasVisaTypeSeoPages.ts');
const dataFiles = [
  path.join(root, 'data', 'bosphorasProgrammaticSeoPages.ts'),
  path.join(root, 'data', 'bosphorasAdditionalSeoPages.ts'),
  visaResidenceFile,
  countryVisaFile,
  visaTypeFile,
];
const source = dataFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const visaResidenceSource = fs.readFileSync(visaResidenceFile, 'utf8');
const countryVisaSource = fs.readFileSync(countryVisaFile, 'utf8');
const visaTypeSource = fs.readFileSync(visaTypeFile, 'utf8');

const pageRegex = /key:\s*['"]([^'"]+)['"][\s\S]*?slugs:\s*\{\s*fr:\s*['"]([^'"]+)['"],\s*en:\s*['"]([^'"]+)['"],\s*ru:\s*['"]([^'"]+)['"],\s*ar:\s*['"]([^'"]+)['"]\s*\}/g;
const locales = ['fr', 'en', 'ru', 'ar'];
const pages = [];
const seenKeys = new Set();
const visaResidenceKeys = new Set();
const countryVisaKeys = new Set();
const visaTypeKeys = new Set();
let match;

while ((match = pageRegex.exec(visaResidenceSource)) !== null) {
  visaResidenceKeys.add(match[1]);
}

pageRegex.lastIndex = 0;
while ((match = pageRegex.exec(countryVisaSource)) !== null) {
  countryVisaKeys.add(match[1]);
}

pageRegex.lastIndex = 0;
while ((match = pageRegex.exec(visaTypeSource)) !== null) {
  visaTypeKeys.add(match[1]);
}

pageRegex.lastIndex = 0;
while ((match = pageRegex.exec(source)) !== null) {
  const key = match[1];
  if (seenKeys.has(key)) continue;
  seenKeys.add(key);
  pages.push({ key, slugs: { fr: match[2], en: match[3], ru: match[4], ar: match[5] } });
}

if (pages.length < 120) {
  throw new Error(`[bosphoras seo] Expected at least 120 pages, found ${pages.length}. Check Bosphoras SEO data files.`);
}

function routeFileFromSlug(slug) {
  const clean = slug.replace(/^\//, '').replace(/\/$/, '');
  return path.join(root, 'app', clean, 'page.tsx');
}

function genericPageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS PROGRAMMATIC SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';\nimport { BosphorasProgrammaticSeoPage, getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\n\nconst page = allBosphorasSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasProgrammaticSeoPage page={page} locale="${locale}" />;\n}\n`;
}

function visaResidencePageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS VISA RESIDENCE SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';\nimport { getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\nimport { BosphorasVisaResidenceSeoPage } from '@/components/seo/BosphorasVisaResidenceSeoPage';\n\nconst page = allBosphorasSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasVisaResidenceSeoPage page={page} locale="${locale}" />;\n}\n`;
}

function countryVisaPageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS COUNTRY VISA SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';\nimport { getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\nimport { BosphorasCountryVisaSeoPage } from '@/components/seo/BosphorasCountryVisaSeoPage';\n\nconst page = allBosphorasSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasCountryVisaSeoPage page={page} locale="${locale}" />;\n}\n`;
}

function visaTypePageContent(key, locale) {
  return `// AUTO-GENERATED BOSPHORAS VISA TYPE SEO PAGE\n// This file is intentionally regenerated before every Vercel build.\nimport { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';\nimport { getBosphorasProgrammaticSeoMetadata } from '@/components/seo/BosphorasProgrammaticSeoPage';\nimport { BosphorasVisaTypeSeoPageV2 } from '@/components/seo/BosphorasVisaTypeSeoPageV2';\n\nconst page = allBosphorasSeoPages.find((item) => item.key === '${key}')!;\n\nexport const metadata = getBosphorasProgrammaticSeoMetadata(page, '${locale}');\n\nexport default function Page() {\n  return <BosphorasVisaTypeSeoPageV2 page={page} locale="${locale}" allPages={allBosphorasSeoPages} />;\n}\n`;
}

function pageContent(key, locale) {
  if (visaTypeKeys.has(key)) return visaTypePageContent(key, locale);
  if (countryVisaKeys.has(key)) return countryVisaPageContent(key, locale);
  if (visaResidenceKeys.has(key)) return visaResidencePageContent(key, locale);
  return genericPageContent(key, locale);
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

console.log(`[bosphoras seo] FORCE regenerated: ${pages.length} subjects, ${written} files written, ${visaTypeKeys.size} visa type subjects use V2 content, ${visaResidenceKeys.size} visa/residence subjects and ${countryVisaKeys.size} country visa subjects use dedicated content`);
