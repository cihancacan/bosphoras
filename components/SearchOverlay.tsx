'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { longTailTaxFooterLinks } from '@/data/longTailTaxRoutes';

interface SearchOverlayProps { locale: Locale; open: boolean; onClose: () => void; }
type SearchItem = { href: string; label: string; keywords: string; summary?: string };

const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, ' ');

const ui = {
  fr: { title: 'Rechercher', placeholder: 'Monaco, héritage, expatrié...', empty: 'Tapez un mot-clé pour retrouver un article.', noResult: 'Aucun résultat trouvé.', close: 'Fermer', results: 'résultat(s)' },
  en: { title: 'Search', placeholder: 'Monaco, inheritance, expat...', empty: 'Type a keyword to find an article.', noResult: 'No results found.', close: 'Close', results: 'result(s)' },
  ru: { title: 'Поиск', placeholder: 'Монако, наследство, экспат...', empty: 'Введите ключевое слово, чтобы найти статью.', noResult: 'Ничего не найдено.', close: 'Закрыть', results: 'результат(ов)' },
  ar: { title: 'بحث', placeholder: 'Monaco, inheritance, expat...', empty: 'اكتب كلمة مفتاحية للعثور على مقال.', noResult: 'لا توجد نتائج.', close: 'إغلاق', results: 'نتيجة' },
} as const;

const conceptSynonyms: Record<Locale, Record<string, string[]>> = {
  fr: {
    heritage: ['heritage', 'succession', 'transmission', 'heritiers', 'patrimoine', 'testament', 'donation', 'deces', 'famille patrimoniale'],
    expatrie: ['expatrie', 'expatriation', 's installer', 'quitter la france', 'nouveau resident', 'resident etranger', 'residence fiscale', '183 jours'],
    impot: ['impot', 'fiscalite', 'taxe', 'exoneration', 'regime fiscal', 'revenus etrangers', 'non dom'],
    banque: ['banque', 'compte bancaire', 'banque privee', 'origine des fonds', 'justificatifs', 'transfert', 'conformite', 'kyc'],
    dividendes: ['dividendes', 'actionnaire', 'holding', 'societe etrangere', 'distribution', 'participation'],
    plusvalues: ['plus value', 'plus values', 'capital gain', 'actions', 'portefeuille', 'vente societe', 'cession'],
    immobilier: ['immobilier', 'logement', 'acheter', 'residence principale', 'investissement locatif', 'location', 'propriete'],
    retraite: ['retraite', 'pension', 'rentier', 'vivre en turquie', 'sante', 'assurance sante'],
    monaco: ['monaco', 'monegasque', 'principaute', 'banque privee', 'patrimoine', 'fortune', 'resident monaco', 'fiscalite monaco'],
    suisse: ['suisse', 'geneve', 'zurich', 'lausanne', 'zug', 'banque suisse', 'banque privee', 'wealth management'],
    uk: ['royaume uni', 'londres', 'uk', 'non dom', 'fig', 'foreign income gains', 'remittance', 'angleterre'],
    dubai: ['dubai', 'dubai', 'emirats', 'uae', 'dubaï', 'emirats arabes unis', 'zero impot'],
    portugal: ['portugal', 'lisbonne', 'nhr', 'rnh', 'resident non habituel'],
    malte: ['malte', 'malta', 'non dom', 'remittance', 'union europeenne'],
    chypre: ['chypre', 'cyprus', 'non dom', 'limassol', 'larnaca'],
  },
  en: {
    inheritance: ['inheritance', 'estate', 'succession', 'heirs', 'wealth transfer', 'will', 'donation', 'family wealth'],
    expat: ['expat', 'expatriation', 'relocation', 'new resident', 'foreign resident', 'tax residence', '183 days'],
    tax: ['tax', 'taxation', 'exemption', 'foreign income', 'non dom', 'tax regime'],
    banking: ['bank', 'banking', 'private banking', 'source of funds', 'compliance', 'transfer', 'kyc'],
    dividends: ['dividends', 'shareholder', 'holding', 'foreign company', 'distribution'],
    gains: ['capital gains', 'gains', 'shares', 'portfolio', 'company sale'],
    property: ['property', 'real estate', 'housing', 'main residence', 'rental investment'],
    pension: ['pension', 'retirement', 'rentier', 'healthcare', 'insurance'],
    monaco: ['monaco', 'private banking', 'wealth', 'tax residence', 'estate planning'],
    switzerland: ['switzerland', 'geneva', 'zurich', 'private banking', 'wealth management'],
    uk: ['uk', 'united kingdom', 'london', 'non dom', 'fig', 'foreign income gains'],
  },
  ru: {
    inheritance: ['наследство', 'succession', 'капитал', 'семья', 'завещание', 'передача капитала'],
    expat: ['экспат', 'переезд', 'резиденция', 'налоговая резиденция', '183 дня', 'новый резидент'],
    tax: ['налоги', 'налог', 'льгота', 'иностранные доходы', 'non dom'],
    banking: ['банк', 'банки', 'private banking', 'источник средств', 'compliance', 'перевод'],
    dividends: ['дивиденды', 'акционер', 'holding', 'иностранная компания'],
    gains: ['gains', 'capital gains', 'акции', 'портфель', 'продажа компании'],
    monaco: ['монако', 'monaco', 'капитал', 'private banking', 'резиденция'],
  },
  ar: {
    inheritance: ['inheritance', 'estate', 'succession', 'wealth', 'family', 'الميراث', 'الثروة'],
    expat: ['expat', 'relocation', 'new resident', 'tax residence', 'الإقامة'],
    tax: ['tax', 'taxation', 'exemption', 'foreign income', 'الضرائب'],
    banking: ['bank', 'banking', 'private banking', 'source of funds', 'compliance', 'البنك'],
    dividends: ['dividends', 'shareholder', 'holding', 'foreign company'],
    gains: ['capital gains', 'portfolio', 'shares', 'company sale'],
    monaco: ['monaco', 'private banking', 'wealth', 'tax residence'],
  },
};

const staticItems: Record<Locale, SearchItem[]> = {
  fr: [
    { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale Turquie : revenus étrangers', keywords: 'exoneration impot revenus etrangers turquie fiscalite nouveaux residents expatrie expatriation dividendes plus values pension loyers source etrangere' },
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie pour investisseurs étrangers', keywords: 'strategie fiscale investisseur etranger turquie patrimoine banque societe holding fiscalite internationale' },
    { href: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', label: 'Exonération fiscale Turquie 20 ans : nouveaux résidents', keywords: '20 ans exoneration fiscalite nouveaux residents etrangers expatrie revenus etrangers residence fiscale' },
    { href: '/family-office-turquie-istanbul', label: 'Family office Turquie Istanbul', keywords: 'family office patrimoine heritage succession transmission banque privee istanbul famille patrimoniale gestion patrimoine' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence', keywords: 'monaco patrimoine fiscalite residence banque privee heritage succession fortune securite principaute' },
  ],
  en: [
    { href: '/en/turkey-tax-exemption-foreign-income', label: 'Turkey tax exemption for foreign income', keywords: 'tax exemption foreign income turkey new residents expat dividends capital gains pension rental income' },
    { href: '/en/turkey-tax-strategy-foreign-investors', label: 'Turkey tax strategy for foreign investors', keywords: 'tax strategy foreign investors wealth planning banking company holding' },
    { href: '/en/turkey-20-year-tax-exemption-new-residents', label: 'Turkey 20-year tax exemption for new residents', keywords: '20 year tax exemption new residents foreign income expat' },
    { href: '/en/family-office-turkey-istanbul', label: 'Family office Turkey Istanbul', keywords: 'family office wealth inheritance estate planning private banking istanbul family wealth' },
    { href: '/en/turkey-vs-monaco-family-office-residence', label: 'Turkey vs Monaco: family office and residence', keywords: 'monaco wealth tax residence private banking inheritance estate planning' },
  ],
  ru: [
    { href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', label: 'Налоговая льгота Турция : иностранные доходы', keywords: 'налоги иностранные доходы турция резиденция дивиденды капитал экспат' },
    { href: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', label: 'Налоговая стратегия Турции для иностранных инвесторов', keywords: 'налоговая стратегия инвесторы капитал турция банк компания holding' },
    { href: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', label: 'Турция 20 лет налоговая льгота : новые резиденты', keywords: '20 лет налоговая льгота новые резиденты иностранные доходы' },
    { href: '/ru/family-office-turtsiya-stambul', label: 'Family office Турция Стамбул', keywords: 'family office капитал наследство банки стамбул семья' },
    { href: '/ru/turtsiya-vs-monako-family-office-rezidentsiya', label: 'Турция vs Монако : family office и резиденция', keywords: 'монако капитал налоги резиденция private banking наследство' },
  ],
  ar: [
    { href: '/ar/turkey-tax-exemption-foreign-income', label: 'الإعفاء الضريبي في تركيا للدخل الأجنبي', keywords: 'tax exemption foreign income turkey new residents expat dividends capital gains' },
    { href: '/ar/turkey-tax-strategy-foreign-investors', label: 'استراتيجية الضرائب في تركيا للمستثمرين الأجانب', keywords: 'tax strategy foreign investors wealth planning banking company' },
    { href: '/ar/turkey-20-year-tax-exemption-new-residents', label: 'إعفاء ضريبي في تركيا لمدة 20 سنة', keywords: '20 year tax exemption new residents foreign income' },
    { href: '/ar/family-office-turkey-istanbul', label: 'Family office تركيا إسطنبول', keywords: 'family office wealth inheritance estate planning private banking istanbul' },
    { href: '/ar/turkey-vs-monaco-family-office-residence', label: 'تركيا vs موناكو : family office والإقامة', keywords: 'monaco wealth tax residence private banking inheritance estate' },
  ],
};

function relatedKeywordsForItem(item: { href: string; label: string }, locale: Locale) {
  const base = normalize(`${item.href} ${item.label}`);
  const groups = conceptSynonyms[locale];
  const matched: string[] = [];
  Object.values(groups).forEach((terms) => {
    if (terms.some((term) => base.includes(normalize(term)))) matched.push(...terms);
  });
  if (base.includes('vs') || base.includes('turquie-vs') || base.includes('turkey-vs') || base.includes('turtsiya-vs')) matched.push('comparaison alternative choisir avantages inconvenients residence fiscalite banque patrimoine famille cout de vie');
  if (base.includes('monaco') || base.includes('monako')) matched.push(...(groups.monaco || []), ...(groups.inheritance || []), ...(groups.banking || []));
  if (base.includes('herit') || base.includes('succession') || base.includes('nasled')) matched.push(...(groups.inheritance || []));
  if (base.includes('expat') || base.includes('resident') || base.includes('residence') || base.includes('rezidents')) matched.push(...(groups.expatrie || groups.expat || []));
  if (base.includes('dividend')) matched.push(...(groups.dividendes || groups.dividends || []));
  if (base.includes('plus') || base.includes('capital-gains') || base.includes('gains')) matched.push(...(groups.plusvalues || groups.gains || []));
  return matched.join(' ');
}

function tokenAlternatives(token: string, locale: Locale) {
  const groups = conceptSynonyms[locale];
  const alternatives = new Set([token]);
  Object.values(groups).forEach((terms) => {
    const normalizedTerms = terms.map(normalize);
    if (normalizedTerms.some((term) => term.includes(token) || token.includes(term))) normalizedTerms.forEach((term) => alternatives.add(term));
  });
  return Array.from(alternatives);
}

export function SearchOverlay({ locale, open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const labels = ui[locale];

  const items = useMemo<SearchItem[]>(() => {
    const footerItems = longTailTaxFooterLinks[locale].map((item) => ({ href: item.href, label: item.label, keywords: `${item.label} ${item.href.replace(/[/-]/g, ' ')} ${relatedKeywordsForItem(item, locale)}` }));
    const unique = new Map<string, SearchItem>();
    [...staticItems[locale], ...footerItems].forEach((item) => unique.set(item.href, item));
    return Array.from(unique.values());
  }, [locale]);

  const results = useMemo(() => {
    const value = normalize(query.trim());
    if (!value) return [];
    const tokens = value.split(/\s+/).filter((word) => word.length > 1);
    return items
      .map((item) => {
        const searchable = normalize(`${item.label} ${item.keywords} ${item.href}`);
        const exact = searchable.includes(value) ? 4 : 0;
        const score = tokens.reduce((total, token) => total + (tokenAlternatives(token, locale).some((alt) => searchable.includes(alt)) ? 1 : 0), exact);
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
      .map(({ item }) => item)
      .slice(0, 12);
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
            {!query.trim() && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.empty}</p>}
            {query.trim() && results.length === 0 && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.noResult}</p>}
            {results.length > 0 && <><p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(220,10%,55%)]">{results.length} {labels.results}</p><div className="grid gap-2">{results.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="block min-w-0 border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-[hsl(42,65%,52%)]/45 hover:bg-white/[0.07]"><span className="block text-sm font-semibold leading-6 text-[hsl(45,30%,96%)]">{item.label}</span><span className="mt-1 block break-all text-xs text-[hsl(220,10%,55%)]">{item.href}</span></Link>)}</div></>}
          </div>
        </div>
      </div>
    </div>
  );
}
