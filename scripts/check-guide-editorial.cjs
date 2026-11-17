// Repository-only guide audit. No external services or secrets required.
const fs = require('node:fs');
const { highPotentialGuides, getEditorialGuideForSeoKey, getGuideAlternateUrls } = require('../data/highPotentialPages');
const { allBosphorasSeoPages } = require('../data/bosphorasSeoRegistry');
const { getCanonicalUrl } = require('../lib/routes');
const { buildMetadata } = require('../lib/seo');
const redirects = require('../data/seo-redirects.json');
const locales = ['fr','en','ru','ar'];
const paths = new Set(highPotentialGuides.map(g => new URL(getCanonicalUrl(g.locale,g.slug)).pathname));
const redirectSources = new Set(redirects.map(r => r.source));
const errors = [], observations = [];
const ids = new Set(), titles = new Set(), urls = new Set();
const editorial = highPotentialGuides.filter(g => g.sections);
for (const g of editorial) {
 const id = g.id + ':' + g.locale;
 const canonical = getCanonicalUrl(g.locale,g.slug);
 const key = g.locale + ':' + g.title;
 if (ids.has(id)) errors.push('Duplicate edition: '+id); ids.add(id);
 if (titles.has(key)) errors.push('Duplicate title: '+id); titles.add(key);
 if (urls.has(canonical)) errors.push('Duplicate canonical: '+id); urls.add(canonical);
 if (![g.title,g.metaDescription,g.shortAnswer,g.bosphorasHelp].every(Boolean) || !g.sections.length || !g.faqs.length) errors.push('Incomplete copy: '+id);
 if ((g.locale==='ar' && !/[\u0600-\u06ff]/.test(g.title+' '+g.metaDescription)) || (g.locale==='ru' && !/[\u0400-\u052f]/.test(g.title+' '+g.metaDescription))) errors.push('Metadata script: '+id);
 if (g.metaDescription.length > 160) observations.push('Long description: '+id+' ('+g.metaDescription.length+')');
 const alternates=getGuideAlternateUrls(g);
 if (!locales.every(l => alternates[l]) || alternates['x-default']!==alternates.fr || alternates[g.locale]!==canonical) errors.push('Incomplete alternate cluster: '+id);
 const meta=buildMetadata({locale:g.locale,path:g.slug,title:g.title,description:g.metaDescription,alternates});
 if (!meta.robots.index || meta.alternates.canonical!==canonical) errors.push('Indexability/metadata: '+id);
 if (redirectSources.has(decodeURI(new URL(canonical).pathname))) errors.push('Canonical redirects: '+id);
 const sections = new Set();
 for (const s of g.sections) {
  if (sections.has(s.id) || !s.body || !s.title) errors.push('Section: '+id+'/'+s.id); sections.add(s.id);
  if (s.table && s.table.rows.some(r=>r.length!==s.table.headers.length)) errors.push('Table shape: '+id+'/'+s.id);
 }
 for (const l of g.internalLinks) {
  const path = new URL(l.href,canonical).pathname;
  if (path===new URL(canonical).pathname || !paths.has(path) || redirectSources.has(decodeURI(path))) errors.push('Related link: '+id+' -> '+l.href);
 }
}
const missing = allBosphorasSeoPages.filter(p => !locales.every(l => !!getEditorialGuideForSeoKey(p.key,l))).map(p=>p.key);
const chartSource = fs.readFileSync('components/GuideDataChart.tsx','utf8');
const charts = JSON.parse(chartSource.match(/const charts: Record<string, ChartSpec \| undefined> = ({[\s\S]*?});\nconst captions/)[1]);
let chartEditions=0;
for(const [id,spec] of Object.entries(charts)) {
 for(const l of locales) {
  const g=editorial.find(g=>g.id===id&&g.locale===l);
  const t=g?.sections.find(s=>s.id===spec.section)?.table;
  if (!t||spec.series.some(s=>!t.headers[s.column]||s.values.length!==t.rows.length||s.values.some(v=>!Number.isFinite(v)||v<0))) errors.push('Chart shape: '+id+':'+l);
  else chartEditions++;
 }
}
console.log('[guide-audit]',JSON.stringify({registrySubjects:allBosphorasSeoPages.length,editorialSubjects:new Set(editorial.map(g=>g.id)).size,editorialEditions:editorial.length,chartEditions,missingEditorialKeys:missing,errors,observations}));
if(process.argv.includes('--strict')&&errors.length) process.exitCode=1;
