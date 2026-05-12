'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { longTailTaxFooterLinks } from '@/data/longTailTaxRoutes';

type SearchOverlayProps = { locale: Locale; open: boolean; onClose: () => void };
type SearchItem = { href: string; label: string; text: string; loading?: boolean };
type IndexedItem = SearchItem & { fullText: string; loaded: boolean };
type RankedItem = IndexedItem & { score: number; matchedTerms: string[] };

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const ui = {
  fr: { title: 'Rechercher', placeholder: 'Chercher une phrase ou un mot : Monaco, foyer disponible...', empty: 'Tapez un mot-clé ou une phrase. La recherche analyse les titres, URLs et le texte chargé des pages.', noResult: 'Aucun résultat trouvé.', close: 'Fermer', results: 'résultat(s)', loading: 'Indexation des articles en cours...' },
  en: { title: 'Search', placeholder: 'Search a phrase or word: Monaco, former country...', empty: 'Type a keyword or phrase. Search scans titles, URLs and loaded page text.', noResult: 'No results found.', close: 'Close', results: 'result(s)', loading: 'Indexing articles...' },
  ru: { title: 'Поиск', placeholder: 'Фраза или слово: Монако, наследство...', empty: 'Введите слово или фразу. Поиск сканирует заголовки, URL и текст страниц.', noResult: 'Ничего не найдено.', close: 'Закрыть', results: 'результат(ов)', loading: 'Индексация статей...' },
  ar: { title: 'بحث', placeholder: 'Search a phrase or word: Monaco, inheritance...', empty: 'اكتب كلمة أو جملة. البحث يفحص العناوين والروابط ونص الصفحات.', noResult: 'لا توجد نتائج.', close: 'إغلاق', results: 'نتيجة', loading: 'تحميل فهرس المقالات...' },
} as const;

const stopWords: Record<Locale, string[]> = {
  fr: ['le','la','les','un','une','des','du','de','d','et','ou','a','en','au','aux','pour','par','avec','sans','dans','sur','ce','cet','cette','ces','votre','vos','notre','nos','que','qui','quoi','dont','est','sont','etre','être','il','elle','ils','elles','vous','nous','se','sa','son','ses','plus','moins','comme','peut','peuvent','si','cela','ne','pas','avant','apres','après'],
  en: ['the','a','an','and','or','of','to','in','on','for','with','without','your','our','is','are','be','can','may','this','that','these','those','from','by','as','if','not','before','after'],
  ru: ['и','или','в','во','на','для','с','со','без','это','как','что','кто','где','если','не','ваш','ваша','ваши','наш','может','могут'],
  ar: ['في','من','إلى','على','عن','مع','بدون','هذا','هذه','ذلك','التي','الذي','او','أو','و','هل','لا','قد'],
};

const synonyms: Record<Locale, string[]> = {
  fr: ['héritage heritage succession transmission héritiers patrimoine testament donation décès famille patrimoniale', 'expatrié expatrie expatriation installation résident residence fiscale nouveau résident quitter france sortie fiscale 183 jours', 'impôt impot fiscalité fiscalite taxe exonération exoneration régime fiscal revenus étrangers source étrangère non dom', 'banque compte bancaire banque privée origine des fonds source de richesse justificatifs transfert conformité kyc bénéficiaires effectifs', 'dividendes actionnaire holding société étrangère distribution participation', 'plus-value plus-values capital gain actions portefeuille vente société cession titres financiers', 'immobilier logement résidence principale investissement locatif location propriété revente', 'retraite pension rentier santé assurance santé hôpitaux médecine privée', 'monaco monégasque principauté banque privée fortune fiscalité monaco convention franco-monégasque impôt sur le revenu', 'pays origine foyer disponible famille société dirigée principaux revenus actifs temps résident fiscal vie réelle'],
  en: ['inheritance estate succession heirs wealth transfer will donation estate planning', 'expat expatriation relocation new resident foreign resident tax residence exit planning 183 days', 'tax taxation exemption foreign income non dom tax regime', 'bank banking private banking source of funds source of wealth compliance transfer kyc beneficial owners', 'dividends shareholder holding foreign company distribution', 'capital gains shares portfolio company sale property real estate healthcare insurance monaco wealth'],
  ru: ['наследство капитал семья завещание передача капитала', 'экспат переезд резиденция налоговая резиденция новый резидент', 'налоги налог льгота иностранные доходы банк источник средств дивиденды монако'],
  ar: ['inheritance estate wealth family tax exemption foreign income bank source of funds private banking monaco residence'],
};

const staticItems: Record<Locale, SearchItem[]> = {
  fr: [
    { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale Turquie : revenus étrangers', text: 'revenus étrangers nouveaux résidents dividendes plus-values pension revenus locatifs exonération résidence fiscale expatriation' },
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie pour investisseurs étrangers', text: 'investisseur étranger patrimoine société holding banque fiscalité internationale organisation patrimoniale' },
    { href: '/family-office-turquie-istanbul', label: 'Family office Turquie Istanbul', text: 'family office patrimoine héritage succession banque privée Istanbul famille patrimoniale transmission' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence', text: 'Monaco patrimoine fiscalité résidence banque privée héritage succession fortune sécurité principauté' },
  ],
  en: [
    { href: '/en/turkey-tax-exemption-foreign-income', label: 'Turkey tax exemption for foreign income', text: 'tax exemption foreign income new residents expat dividends capital gains pension rental income' },
    { href: '/en/family-office-turkey-istanbul', label: 'Family office Turkey Istanbul', text: 'family office wealth inheritance estate planning private banking Istanbul family wealth' },
    { href: '/en/turkey-vs-monaco-family-office-residence', label: 'Turkey vs Monaco: family office and residence', text: 'Monaco wealth tax residence private banking inheritance estate planning' },
  ],
  ru: [
    { href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', label: 'Налоговая льгота Турция : иностранные доходы', text: 'налоги иностранные доходы турция резиденция дивиденды капитал экспат' },
    { href: '/ru/family-office-turtsiya-stambul', label: 'Family office Турция Стамбул', text: 'family office капитал наследство банки стамбул семья' },
  ],
  ar: [
    { href: '/ar/turkey-tax-exemption-foreign-income', label: 'الإعفاء الضريبي في تركيا للدخل الأجنبي', text: 'tax exemption foreign income turkey new residents expat dividends capital gains' },
    { href: '/ar/family-office-turkey-istanbul', label: 'Family office تركيا إسطنبول', text: 'family office wealth inheritance estate planning private banking' },
  ],
};

function tokens(value: string, locale: Locale) {
  const stop = new Set(stopWords[locale].map(normalize));
  return normalize(value).split(' ').filter((word) => word.length > 2 && !stop.has(word));
}

function expandToken(token: string, locale: Locale) {
  const out = new Set([token]);
  synonyms[locale].forEach((group) => {
    const words = normalize(group).split(' ');
    if (words.some((word) => word.includes(token) || token.includes(word))) words.forEach((word) => out.add(word));
  });
  return Array.from(out);
}

function extractPageText(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('script,style,noscript,svg,header,footer,nav').forEach((node) => node.remove());
  return doc.body?.innerText || '';
}

export function SearchOverlay({ locale, open, onClose }: SearchOverlayProps) {
  const labels = ui[locale];
  const [query, setQuery] = useState('');
  const [pageText, setPageText] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const baseItems = useMemo<SearchItem[]>(() => {
    const footerItems = longTailTaxFooterLinks[locale].map((item) => ({ href: item.href, label: item.label, text: `${item.label} ${item.href.replace(/[/-]/g, ' ')}` }));
    const unique = new Map<string, SearchItem>();
    [...staticItems[locale], ...footerItems].forEach((item) => unique.set(item.href, item));
    return Array.from(unique.values());
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    const missing = baseItems.filter((item) => !pageText[item.href]).slice(0, 35);
    if (missing.length === 0) return;
    let cancelled = false;
    setLoading(true);
    Promise.allSettled(
      missing.map(async (item) => {
        const res = await fetch(item.href, { cache: 'force-cache' });
        if (!res.ok) return [item.href, ''] as const;
        return [item.href, extractPageText(await res.text())] as const;
      })
    ).then((results) => {
      if (cancelled) return;
      const next: Record<string, string> = {};
      results.forEach((result) => {
        if (result.status === 'fulfilled') next[result.value[0]] = result.value[1];
      });
      setPageText((current) => ({ ...current, ...next }));
      setLoading(false);
    }).catch(() => setLoading(false));
    return () => { cancelled = true; };
  }, [open, baseItems, pageText]);

  const items = useMemo<IndexedItem[]>(() => baseItems.map((item) => ({ ...item, fullText: `${item.label} ${item.text} ${pageText[item.href] || ''}`, loaded: Boolean(pageText[item.href]) })), [baseItems, pageText]);

  const results = useMemo<RankedItem[]>(() => {
    const clean = normalize(query);
    const queryTokens = tokens(query, locale);
    if (!clean || queryTokens.length === 0) return [];
    return items
      .map((item) => {
        const haystack = normalize(item.fullText);
        const matchedTerms = queryTokens.filter((token) => expandToken(token, locale).some((alt) => haystack.includes(alt)));
        const exact = haystack.includes(clean) ? 30 : 0;
        const labelScore = queryTokens.filter((token) => normalize(item.label).includes(token)).length * 12;
        const urlScore = queryTokens.filter((token) => normalize(item.href).includes(token)).length * 8;
        const bodyScore = matchedTerms.length * (item.loaded ? 6 : 3);
        const coverage = matchedTerms.length / queryTokens.length;
        const coverageScore = coverage >= 0.8 ? 25 : coverage >= 0.5 ? 12 : coverage >= 0.25 ? 5 : 0;
        const score = exact + labelScore + urlScore + bodyScore + coverageScore;
        return { ...item, score, matchedTerms };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || Number(b.loaded) - Number(a.loaded) || a.label.localeCompare(b.label))
      .slice(0, 20);
  }, [items, query, locale]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/70 p-0 backdrop-blur-sm sm:px-4 sm:py-5" role="dialog" aria-modal="true" aria-label={labels.title}>
      <div className="flex h-full w-full flex-col border-0 border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:mx-auto sm:mt-16 sm:h-auto sm:max-h-[82vh] sm:max-w-3xl sm:border">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
          <div className="min-w-0"><p className="text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[hsl(42,65%,52%)] sm:text-[0.62rem]">Bosphoras</p><h2 className="mt-1 truncate font-serif text-xl text-[hsl(45,30%,96%)] sm:text-2xl">{labels.title}</h2></div>
          <button onClick={onClose} className="shrink-0 p-2 text-[hsl(45,30%,96%)] transition-colors hover:text-[hsl(42,65%,52%)]" aria-label={labels.close}><X size={22} /></button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
          <div className="flex shrink-0 items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-3 sm:gap-3 sm:px-4"><Search size={18} className="shrink-0 text-[hsl(42,65%,52%)]" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.placeholder} className="w-full min-w-0 bg-transparent text-base text-[hsl(45,30%,96%)] outline-none placeholder:text-[hsl(220,10%,55%)] sm:text-sm" /></div>
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-0 sm:mt-5 sm:max-h-[52vh] sm:pr-1">
            {loading && <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(42,65%,52%)]">{labels.loading}</p>}
            {!query.trim() && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.empty}</p>}
            {query.trim() && results.length === 0 && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.noResult}</p>}
            {results.length > 0 && <><p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(220,10%,55%)]">{results.length} {labels.results}</p><div className="grid gap-2">{results.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="block min-w-0 border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-[hsl(42,65%,52%)]/45 hover:bg-white/[0.07]"><span className="block text-sm font-semibold leading-6 text-[hsl(45,30%,96%)]">{item.label}</span><span className="mt-1 block text-xs leading-5 text-[hsl(220,10%,65%)]">{item.loaded ? 'Texte de page indexé' : 'Titre et URL indexés'} · {item.matchedTerms.slice(0, 6).join(', ')}</span><span className="mt-1 block break-all text-xs text-[hsl(220,10%,55%)]">{item.href}</span></Link>)}</div></>}
          </div>
        </div>
      </div>
    </div>
  );
}
