'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { longTailTaxFooterLinks } from '@/data/longTailTaxRoutes';

interface SearchOverlayProps {
  locale: Locale;
  open: boolean;
  onClose: () => void;
}

type SearchItem = {
  href: string;
  label: string;
  keywords: string;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ');

const ui = {
  fr: {
    title: 'Rechercher',
    placeholder: 'Monaco, héritage, expatrié...',
    empty: 'Tapez un mot-clé pour retrouver un article.',
    noResult: 'Aucun résultat trouvé.',
    close: 'Fermer',
    results: 'résultat(s)',
  },
  en: {
    title: 'Search',
    placeholder: 'Monaco, inheritance, expat...',
    empty: 'Type a keyword to find an article.',
    noResult: 'No results found.',
    close: 'Close',
    results: 'result(s)',
  },
  ru: {
    title: 'Поиск',
    placeholder: 'Монако, наследство, экспат...',
    empty: 'Введите ключевое слово, чтобы найти статью.',
    noResult: 'Ничего не найдено.',
    close: 'Закрыть',
    results: 'результат(ов)',
  },
  ar: {
    title: 'بحث',
    placeholder: 'Monaco, inheritance, expat...',
    empty: 'اكتب كلمة مفتاحية للعثور على مقال.',
    noResult: 'لا توجد نتائج.',
    close: 'إغلاق',
    results: 'نتيجة',
  },
} as const;

const staticItems: Record<Locale, SearchItem[]> = {
  fr: [
    { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale Turquie : revenus étrangers', keywords: 'exoneration impot revenus etrangers turquie fiscalite nouveaux residents expatrie expatriation' },
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie pour investisseurs étrangers', keywords: 'strategie fiscale investisseur etranger turquie patrimoine fiscalite' },
    { href: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', label: 'Exonération fiscale Turquie 20 ans : nouveaux résidents', keywords: '20 ans exoneration fiscalite nouveaux residents etrangers expatrie' },
    { href: '/family-office-turquie-istanbul', label: 'Family office Turquie Istanbul', keywords: 'family office patrimoine heritage héritage succession banque privee istanbul' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence', keywords: 'monaco patrimoine fiscalite residence banque privee heritage héritage succession' },
  ],
  en: [
    { href: '/en/turkey-tax-exemption-foreign-income', label: 'Turkey tax exemption for foreign income', keywords: 'tax exemption foreign income turkey new residents expat expatriation' },
    { href: '/en/turkey-tax-strategy-foreign-investors', label: 'Turkey tax strategy for foreign investors', keywords: 'tax strategy foreign investors wealth planning turkey' },
    { href: '/en/turkey-20-year-tax-exemption-new-residents', label: 'Turkey 20-year tax exemption for new residents', keywords: '20 year tax exemption new residents foreign income expat' },
    { href: '/en/family-office-turkey-istanbul', label: 'Family office Turkey Istanbul', keywords: 'family office wealth inheritance estate planning private banking istanbul' },
    { href: '/en/turkey-vs-monaco-family-office-residence', label: 'Turkey vs Monaco: family office and residence', keywords: 'monaco wealth tax residence private banking inheritance estate' },
  ],
  ru: [
    { href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', label: 'Налоговая льгота Турция : иностранные доходы', keywords: 'налоги иностранные доходы турция резиденция expat' },
    { href: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', label: 'Налоговая стратегия Турции для иностранных инвесторов', keywords: 'налоговая стратегия инвесторы капитал турция' },
    { href: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', label: 'Турция 20 лет налоговая льгота : новые резиденты', keywords: '20 лет налоговая льгота новые резиденты' },
    { href: '/ru/family-office-turtsiya-stambul', label: 'Family office Турция Стамбул', keywords: 'family office капитал наследство банки стамбул' },
    { href: '/ru/turtsiya-vs-monako-family-office-rezidentsiya', label: 'Турция vs Монако : family office и резиденция', keywords: 'монако капитал налоги резиденция private banking inheritance наследство' },
  ],
  ar: [
    { href: '/ar/turkey-tax-exemption-foreign-income', label: 'الإعفاء الضريبي في تركيا للدخل الأجنبي', keywords: 'tax exemption foreign income turkey new residents expat' },
    { href: '/ar/turkey-tax-strategy-foreign-investors', label: 'استراتيجية الضرائب في تركيا للمستثمرين الأجانب', keywords: 'tax strategy foreign investors wealth planning turkey' },
    { href: '/ar/turkey-20-year-tax-exemption-new-residents', label: 'إعفاء ضريبي في تركيا لمدة 20 سنة', keywords: '20 year tax exemption new residents foreign income' },
    { href: '/ar/family-office-turkey-istanbul', label: 'Family office تركيا إسطنبول', keywords: 'family office wealth inheritance estate planning private banking istanbul' },
    { href: '/ar/turkey-vs-monaco-family-office-residence', label: 'تركيا vs موناكو : family office والإقامة', keywords: 'monaco wealth tax residence private banking inheritance estate' },
  ],
};

export function SearchOverlay({ locale, open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const labels = ui[locale];

  const items = useMemo<SearchItem[]>(() => {
    const footerItems = longTailTaxFooterLinks[locale].map((item) => ({
      href: item.href,
      label: item.label,
      keywords: `${item.label} ${item.href.replace(/[/-]/g, ' ')}`,
    }));
    const unique = new Map<string, SearchItem>();
    [...staticItems[locale], ...footerItems].forEach((item) => unique.set(item.href, item));
    return Array.from(unique.values());
  }, [locale]);

  const results = useMemo(() => {
    const value = normalize(query.trim());
    if (!value) return [];
    const words = value.split(/\s+/).filter(Boolean);
    return items
      .filter((item) => {
        const searchable = normalize(`${item.label} ${item.keywords} ${item.href}`);
        return words.every((word) => searchable.includes(word));
      })
      .slice(0, 12);
  }, [items, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/70 p-0 backdrop-blur-sm sm:px-4 sm:py-5" role="dialog" aria-modal="true" aria-label={labels.title}>
      <div className="flex h-full w-full flex-col border-0 border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:mx-auto sm:mt-16 sm:h-auto sm:max-h-[82vh] sm:max-w-3xl sm:border">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <p className="text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[hsl(42,65%,52%)] sm:text-[0.62rem]">Bosphoras</p>
            <h2 className="mt-1 truncate font-serif text-xl text-[hsl(45,30%,96%)] sm:text-2xl">{labels.title}</h2>
          </div>
          <button onClick={onClose} className="shrink-0 p-2 text-[hsl(45,30%,96%)] transition-colors hover:text-[hsl(42,65%,52%)]" aria-label={labels.close}>
            <X size={22} />
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
          <div className="flex shrink-0 items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-3 sm:gap-3 sm:px-4">
            <Search size={18} className="shrink-0 text-[hsl(42,65%,52%)]" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.placeholder}
              className="w-full min-w-0 bg-transparent text-base text-[hsl(45,30%,96%)] outline-none placeholder:text-[hsl(220,10%,55%)] sm:text-sm"
            />
          </div>
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-0 sm:mt-5 sm:max-h-[52vh] sm:pr-1">
            {!query.trim() && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.empty}</p>}
            {query.trim() && results.length === 0 && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.noResult}</p>}
            {results.length > 0 && (
              <>
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(220,10%,55%)]">{results.length} {labels.results}</p>
                <div className="grid gap-2">
                  {results.map((item) => (
                    <Link key={item.href} href={item.href} onClick={onClose} className="block min-w-0 border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-[hsl(42,65%,52%)]/45 hover:bg-white/[0.07]">
                      <span className="block text-sm font-semibold leading-6 text-[hsl(45,30%,96%)]">{item.label}</span>
                      <span className="mt-1 block break-all text-xs text-[hsl(220,10%,55%)]">{item.href}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
