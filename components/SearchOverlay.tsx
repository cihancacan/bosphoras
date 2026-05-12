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
    title: 'Rechercher un guide',
    placeholder: 'Ex : Monaco, héritage, expatrié, dividendes...',
    empty: 'Tapez un mot-clé pour retrouver un article.',
    noResult: 'Aucun résultat trouvé.',
    close: 'Fermer',
    results: 'résultat(s)',
  },
  en: {
    title: 'Search guides',
    placeholder: 'Ex: Monaco, inheritance, expat, dividends...',
    empty: 'Type a keyword to find an article.',
    noResult: 'No results found.',
    close: 'Close',
    results: 'result(s)',
  },
  ru: {
    title: 'Поиск по гайдам',
    placeholder: 'Напр.: Монако, наследство, экспат, дивиденды...',
    empty: 'Введите ключевое слово, чтобы найти статью.',
    noResult: 'Ничего не найдено.',
    close: 'Закрыть',
    results: 'результат(ов)',
  },
  ar: {
    title: 'البحث في الأدلة',
    placeholder: 'مثال: Monaco, inheritance, expat, dividends...',
    empty: 'اكتب كلمة مفتاحية للعثور على مقال.',
    noResult: 'لا توجد نتائج.',
    close: 'إغلاق',
    results: 'نتيجة',
  },
} as const;

const staticItems: Record<Locale, SearchItem[]> = {
  fr: [
    { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale Turquie : revenus étrangers', keywords: 'exoneration impot revenus etrangers turquie fiscalite nouveaux residents expatrie' },
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie pour investisseurs étrangers', keywords: 'strategie fiscale investisseur etranger turquie patrimoine fiscalite' },
    { href: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', label: 'Exonération fiscale Turquie 20 ans : nouveaux résidents', keywords: '20 ans exoneration fiscalite nouveaux residents etrangers expatrie' },
    { href: '/family-office-turquie-istanbul', label: 'Family office Turquie Istanbul', keywords: 'family office patrimoine heritage succession banque privee istanbul' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence', keywords: 'monaco patrimoine fiscalite residence banque privee heritage' },
  ],
  en: [
    { href: '/en/turkey-tax-exemption-foreign-income', label: 'Turkey tax exemption for foreign income', keywords: 'tax exemption foreign income turkey new residents expat' },
    { href: '/en/turkey-tax-strategy-foreign-investors', label: 'Turkey tax strategy for foreign investors', keywords: 'tax strategy foreign investors wealth planning turkey' },
    { href: '/en/turkey-20-year-tax-exemption-new-residents', label: 'Turkey 20-year tax exemption for new residents', keywords: '20 year tax exemption new residents foreign income expat' },
    { href: '/en/family-office-turkey-istanbul', label: 'Family office Turkey Istanbul', keywords: 'family office wealth inheritance estate planning private banking istanbul' },
    { href: '/en/turkey-vs-monaco-family-office-residence', label: 'Turkey vs Monaco: family office and residence', keywords: 'monaco wealth tax residence private banking inheritance' },
  ],
  ru: [
    { href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', label: 'Налоговая льгота Турция : иностранные доходы', keywords: 'налоги иностранные доходы турция резиденция expat' },
    { href: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', label: 'Налоговая стратегия Турции для иностранных инвесторов', keywords: 'налоговая стратегия инвесторы капитал турция' },
    { href: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', label: 'Турция 20 лет налоговая льгота : новые резиденты', keywords: '20 лет налоговая льгота новые резиденты' },
    { href: '/ru/family-office-turtsiya-stambul', label: 'Family office Турция Стамбул', keywords: 'family office капитал наследство банки стамбул' },
    { href: '/ru/turtsiya-vs-monako-family-office-rezidentsiya', label: 'Турция vs Монако : family office и резиденция', keywords: 'монако капитал налоги резиденция private banking inheritance' },
  ],
  ar: [
    { href: '/ar/turkey-tax-exemption-foreign-income', label: 'الإعفاء الضريبي في تركيا للدخل الأجنبي', keywords: 'tax exemption foreign income turkey new residents expat' },
    { href: '/ar/turkey-tax-strategy-foreign-investors', label: 'استراتيجية الضرائب في تركيا للمستثمرين الأجانب', keywords: 'tax strategy foreign investors wealth planning turkey' },
    { href: '/ar/turkey-20-year-tax-exemption-new-residents', label: 'إعفاء ضريبي في تركيا لمدة 20 سنة', keywords: '20 year tax exemption new residents foreign income' },
    { href: '/ar/family-office-turkey-istanbul', label: 'Family office تركيا إسطنبول', keywords: 'family office wealth inheritance estate planning private banking istanbul' },
    { href: '/ar/turkey-vs-monaco-family-office-residence', label: 'تركيا vs موناكو : family office والإقامة', keywords: 'monaco wealth tax residence private banking inheritance' },
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
    <div className="fixed inset-0 z-[80] bg-black/70 px-4 py-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={labels.title}>
      <div className="mx-auto mt-20 max-w-3xl border border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[hsl(42,65%,52%)]">Bosphoras</p>
            <h2 className="mt-1 font-serif text-2xl text-[hsl(45,30%,96%)]">{labels.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 text-[hsl(45,30%,96%)] transition-colors hover:text-[hsl(42,65%,52%)]" aria-label={labels.close}>
            <X size={22} />
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3">
            <Search size={18} className="shrink-0 text-[hsl(42,65%,52%)]" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.placeholder}
              className="w-full bg-transparent text-sm text-[hsl(45,30%,96%)] outline-none placeholder:text-[hsl(220,10%,55%)]"
            />
          </div>
          <div className="mt-5 max-h-[52vh] overflow-y-auto pr-1">
            {!query.trim() && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.empty}</p>}
            {query.trim() && results.length === 0 && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.noResult}</p>}
            {results.length > 0 && (
              <>
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(220,10%,55%)]">{results.length} {labels.results}</p>
                <div className="grid gap-2">
                  {results.map((item) => (
                    <Link key={item.href} href={item.href} onClick={onClose} className="block border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-[hsl(42,65%,52%)]/45 hover:bg-white/[0.07]">
                      <span className="block text-sm font-semibold text-[hsl(45,30%,96%)]">{item.label}</span>
                      <span className="mt-1 block text-xs text-[hsl(220,10%,55%)]">{item.href}</span>
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
