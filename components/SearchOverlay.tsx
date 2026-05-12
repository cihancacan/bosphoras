'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { longTailTaxFooterLinks } from '@/data/longTailTaxRoutes';

interface SearchOverlayProps { locale: Locale; open: boolean; onClose: () => void; }
type SearchItem = { href: string; label: string; keywords: string; summary?: string };
type RankedItem = SearchItem & { score: number; matchedTerms: string[] };

const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, ' ').replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim();

const ui = {
  fr: { title: 'Rechercher', placeholder: 'Ex : votre pays d’origine, Monaco, héritage...', empty: 'Tapez un mot-clé ou une phrase pour retrouver un article.', noResult: 'Aucun résultat trouvé.', close: 'Fermer', results: 'résultat(s)' },
  en: { title: 'Search', placeholder: 'Ex: former country, Monaco, inheritance...', empty: 'Type a keyword or phrase to find an article.', noResult: 'No results found.', close: 'Close', results: 'result(s)' },
  ru: { title: 'Поиск', placeholder: 'Напр.: Монако, наследство, банк...', empty: 'Введите слово или фразу, чтобы найти статью.', noResult: 'Ничего не найдено.', close: 'Закрыть', results: 'результат(ов)' },
  ar: { title: 'بحث', placeholder: 'Ex: former country, Monaco, inheritance...', empty: 'اكتب كلمة أو جملة للعثور على مقال.', noResult: 'لا توجد نتائج.', close: 'إغلاق', results: 'نتيجة' },
} as const;

const stopWords: Record<Locale, string[]> = {
  fr: ['le','la','les','un','une','des','du','de','d','et','ou','a','à','en','au','aux','pour','par','avec','sans','dans','sur','ce','cet','cette','ces','votre','vos','notre','nos','que','qui','quoi','dont','est','sont','être','etre','il','elle','ils','elles','vous','nous','se','sa','son','ses','plus','moins','comme','peut','peuvent','si','cela','ne','pas'],
  en: ['the','a','an','and','or','of','to','in','on','for','with','without','your','our','is','are','be','can','may','this','that','these','those','from','by','as','if','not'],
  ru: ['и','или','в','во','на','для','с','со','без','это','как','что','кто','где','если','не','ваш','ваша','ваши','наш','может','могут'],
  ar: ['في','من','إلى','على','عن','مع','بدون','هذا','هذه','ذلك','التي','الذي','او','أو','و','هل','لا','قد'],
};

const commonCorpus: Record<Locale, string> = {
  fr: 'la vraie question est quel pays correspond réellement à votre patrimoine vos revenus vos banques votre famille votre résidence fiscale et votre mode de vie. votre pays d origine peut continuer à vous considérer résident fiscal si votre foyer reste disponible si votre famille vit encore dans le pays d origine si votre société y est dirigée si vos principaux revenus viennent de ce pays si vos actifs principaux y sont situés ou si vous y passez beaucoup de temps. une installation internationale doit être cohérente sortie claire du pays d origine installation réelle dans le nouveau pays. erreurs à éviter choisir uniquement selon la fiscalité négliger banque origine des fonds assurance santé immobilier famille succession coût de vie société sans substance réelle résidence sans vie réelle. bosphoras coordonne analyse privée fiscalité banque immobilier assurance santé famille succession installation en turquie partenaires locaux.',
  en: 'the real question is which country fits your wealth income banks family tax residence and lifestyle. former country may still treat you as tax resident if home family company management main income major assets or time remain there. international relocation requires clear exit from former country and real installation in the new country. mistakes to avoid choosing only by tax headline ignoring banking source of funds healthcare property family estate planning cost of living company substance real residence. bosphoras coordinates private review tax banking property healthcare family estate planning relocation to turkey local partners.',
  ru: 'реальный вопрос какая страна подходит капиталу доходам банкам семье налоговой резиденции и образу жизни. прежняя страна может продолжать считать вас налоговым резидентом если дом семья управление компанией основные доходы активы или время остаются там. международный переезд требует ясного выхода из прежней страны и реальной установки в новой стране. ошибки выбирать только по налогам игнорировать банки источник средств медицину недвижимость семью наследство стоимость жизни substance реальную резиденцию.',
  ar: 'the real question is which country fits wealth income banks family tax residence and lifestyle. former country may still treat you as tax resident if home family company income assets or time remain there. relocation requires exit planning real residence banking source of funds healthcare property family estate planning.',
};

const conceptSynonyms: Record<Locale, Record<string, string[]>> = {
  fr: {
    heritage: ['heritage', 'héritage', 'succession', 'transmission', 'heritiers', 'héritiers', 'patrimoine', 'testament', 'donation', 'deces', 'décès', 'famille patrimoniale', 'transmettre le patrimoine', 'organisation familiale'],
    expatrie: ['expatrie', 'expatrié', 'expatriation', 's installer', 'installation', 'quitter la france', 'nouveau resident', 'nouveau résident', 'resident etranger', 'résident étranger', 'residence fiscale', 'résidence fiscale', '183 jours', 'changer de residence', 'sortie fiscale'],
    impot: ['impot', 'impôt', 'fiscalite', 'fiscalité', 'taxe', 'exoneration', 'exonération', 'regime fiscal', 'régime fiscal', 'revenus etrangers', 'revenus étrangers', 'source étrangère', 'non dom', 'fig regime'],
    banque: ['banque', 'compte bancaire', 'banque privee', 'banque privée', 'origine des fonds', 'source de richesse', 'justificatifs', 'transfert', 'conformite', 'conformité', 'kyc', 'documents bancaires', 'beneficiaires effectifs', 'bénéficiaires effectifs'],
    dividendes: ['dividendes', 'actionnaire', 'holding', 'societe etrangere', 'société étrangère', 'distribution', 'participation', 'revenus distribués'],
    plusvalues: ['plus value', 'plus values', 'plus-value', 'plus-values', 'capital gain', 'actions', 'portefeuille', 'vente societe', 'vente société', 'cession', 'titres financiers'],
    immobilier: ['immobilier', 'logement', 'acheter', 'achat', 'residence principale', 'résidence principale', 'residence secondaire', 'investissement locatif', 'location', 'propriete', 'propriété', 'revente', 'zones balneaires'],
    retraite: ['retraite', 'pension', 'rentier', 'vivre en turquie', 'sante', 'santé', 'assurance sante', 'assurance santé', 'hopitaux', 'hôpitaux', 'medecine privee', 'médecine privée'],
    monaco: ['monaco', 'monegasque', 'monégasque', 'principaute', 'principauté', 'banque privee', 'banque privée', 'patrimoine', 'fortune', 'resident monaco', 'résident monaco', 'fiscalite monaco', 'fiscalité monaco', 'impot sur le revenu', 'impôt sur le revenu', 'franco monegasque', 'franco-monégasque'],
    suisse: ['suisse', 'geneve', 'genève', 'zurich', 'lausanne', 'zug', 'zoug', 'banque suisse', 'banque privee', 'wealth management', 'gestion de patrimoine'],
    uk: ['royaume uni', 'royaume-uni', 'londres', 'uk', 'non dom', 'fig', 'foreign income gains', 'remittance', 'angleterre', 'ancien régime non-dom'],
    dubai: ['dubai', 'dubaï', 'emirats', 'émirats', 'uae', 'emirats arabes unis', 'zero impot', 'zéro impôt'],
    portugal: ['portugal', 'lisbonne', 'nhr', 'rnh', 'resident non habituel', 'résident non habituel'],
    malte: ['malte', 'malta', 'non dom', 'remittance', 'union europeenne', 'union européenne'],
    chypre: ['chypre', 'cyprus', 'non dom', 'limassol', 'larnaca'],
  },
  en: {
    inheritance: ['inheritance', 'estate', 'succession', 'heirs', 'wealth transfer', 'will', 'donation', 'family wealth', 'estate planning'],
    expat: ['expat', 'expatriation', 'relocation', 'new resident', 'foreign resident', 'tax residence', '183 days', 'exit planning'],
    tax: ['tax', 'taxation', 'exemption', 'foreign income', 'non dom', 'tax regime', 'foreign income and gains'],
    banking: ['bank', 'banking', 'private banking', 'source of funds', 'source of wealth', 'compliance', 'transfer', 'kyc', 'beneficial owners'],
    dividends: ['dividends', 'shareholder', 'holding', 'foreign company', 'distribution'],
    gains: ['capital gains', 'gains', 'shares', 'portfolio', 'company sale'],
    property: ['property', 'real estate', 'housing', 'main residence', 'rental investment', 'resale'],
    pension: ['pension', 'retirement', 'rentier', 'healthcare', 'insurance'],
    monaco: ['monaco', 'private banking', 'wealth', 'tax residence', 'estate planning', 'personal income tax'],
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
    { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale Turquie : revenus étrangers', summary: 'Revenus étrangers, nouveaux résidents, dividendes, plus-values, pension, revenus locatifs, exonération et résidence fiscale.', keywords: 'exoneration impot revenus etrangers turquie fiscalite nouveaux residents expatrie expatriation dividendes plus values pension loyers source etrangere' },
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie pour investisseurs étrangers', summary: 'Investisseur étranger, patrimoine, société, holding, banque, fiscalité internationale et organisation patrimoniale.', keywords: 'strategie fiscale investisseur etranger turquie patrimoine banque societe holding fiscalite internationale' },
    { href: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', label: 'Exonération fiscale Turquie 20 ans : nouveaux résidents', summary: 'Nouveau régime fiscal, durée, nouveaux résidents, revenus étrangers, installation réelle et analyse privée.', keywords: '20 ans exoneration fiscalite nouveaux residents etrangers expatrie revenus etrangers residence fiscale' },
    { href: '/family-office-turquie-istanbul', label: 'Family office Turquie Istanbul', summary: 'Family office, patrimoine, héritage, succession, banque privée, Istanbul, famille patrimoniale et transmission.', keywords: 'family office patrimoine heritage succession transmission banque privee istanbul famille patrimoniale gestion patrimoine' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence', summary: 'Monaco, patrimoine, fiscalité, résidence, banque privée, héritage, succession, fortune et sécurité patrimoniale.', keywords: 'monaco patrimoine fiscalite residence banque privee heritage succession fortune securite principaute' },
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
  const matched: string[] = [commonCorpus[locale]];
  Object.values(groups).forEach((terms) => { if (terms.some((term) => base.includes(normalize(term)))) matched.push(...terms); });
  if (base.includes('vs') || base.includes('turquie-vs') || base.includes('turkey-vs') || base.includes('turtsiya-vs')) matched.push('comparaison alternative choisir avantages inconvenients residence fiscalite banque patrimoine famille cout de vie qualite de vie mode de vie pays d origine sortie fiscale');
  if (base.includes('monaco') || base.includes('monako')) matched.push(...(groups.monaco || []), ...(groups.inheritance || []), ...(groups.banking || []), 'cout de vie tres eleve immobilier tres cher marche immobilier limite resident monaco ressortissants francais convention franco monegasque absence impot revenu fortune taxe fonciere habitation principaute securite discretion environnement exclusif');
  if (base.includes('suisse') || base.includes('switzerland') || base.includes('shveyts')) matched.push(...(groups.suisse || groups.switzerland || []), 'stabilite securite juridique banque privee gestion patrimoine cout de vie eleve assurance sante canton geneve zurich lausanne zug');
  if (base.includes('royaume') || base.includes('uk') || base.includes('velikobrit')) matched.push(...(groups.uk || []), 'ancien regime non dom foreign income and gains fig regime londres banque privee ecoles universites remittance basis');
  if (base.includes('herit') || base.includes('succession') || base.includes('nasled')) matched.push(...(groups.inheritance || groups.heritage || []));
  if (base.includes('expat') || base.includes('resident') || base.includes('residence') || base.includes('rezidents')) matched.push(...(groups.expatrie || groups.expat || []));
  if (base.includes('dividend')) matched.push(...(groups.dividendes || groups.dividends || []));
  if (base.includes('plus') || base.includes('capital-gains') || base.includes('gains')) matched.push(...(groups.plusvalues || groups.gains || []));
  return matched.join(' ');
}

function queryTokens(value: string, locale: Locale) {
  const stop = new Set(stopWords[locale].map(normalize));
  return normalize(value).split(/\s+/).filter((word) => word.length > 2 && !stop.has(word));
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

function matchedTermsForSearch(searchable: string, tokens: string[], locale: Locale) {
  return tokens.filter((token) => tokenAlternatives(token, locale).some((alt) => searchable.includes(alt)));
}

export function SearchOverlay({ locale, open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const labels = ui[locale];

  const items = useMemo<SearchItem[]>(() => {
    const footerItems = longTailTaxFooterLinks[locale].map((item) => ({ href: item.href, label: item.label, summary: item.label, keywords: `${item.label} ${item.href.replace(/[/-]/g, ' ')} ${relatedKeywordsForItem(item, locale)}` }));
    const unique = new Map<string, SearchItem>();
    [...staticItems[locale], ...footerItems].forEach((item) => unique.set(item.href, item));
    return Array.from(unique.values());
  }, [locale]);

  const results = useMemo<RankedItem[]>(() => {
    const value = normalize(query.trim());
    if (!value) return [];
    const tokens = queryTokens(value, locale);
    if (tokens.length === 0) return [];
    return items
      .map((item) => {
        const searchable = normalize(`${item.label} ${item.summary || ''} ${item.keywords} ${item.href}`);
        const matchedTerms = matchedTermsForSearch(searchable, tokens, locale);
        const exact = searchable.includes(value) ? 8 : 0;
        const labelBoost = tokens.filter((token) => normalize(item.label).includes(token)).length * 3;
        const hrefBoost = tokens.filter((token) => normalize(item.href).includes(token)).length * 2;
        const coverage = matchedTerms.length / tokens.length;
        const score = exact + labelBoost + hrefBoost + matchedTerms.length + (coverage >= 0.65 ? 4 : coverage >= 0.35 ? 2 : 0);
        return { ...item, score, matchedTerms };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || b.matchedTerms.length - a.matchedTerms.length || a.label.localeCompare(b.label))
      .slice(0, 12);
  }, [items, query, locale]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/70 p-0 backdrop-blur-sm sm:px-4 sm:py-5" role="dialog" aria-modal="true" aria-label={labels.title}>
      <div className="flex h-full w-full flex-col border-0 border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:mx-auto sm:mt-16 sm:h-auto sm:max-h-[82vh] sm:max-w-3xl sm:border">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5"><div className="min-w-0"><p className="text-[0.56rem] font-bold uppercase tracking-[0.22em] text-[hsl(42,65%,52%)] sm:text-[0.62rem]">Bosphoras</p><h2 className="mt-1 truncate font-serif text-xl text-[hsl(45,30%,96%)] sm:text-2xl">{labels.title}</h2></div><button onClick={onClose} className="shrink-0 p-2 text-[hsl(45,30%,96%)] transition-colors hover:text-[hsl(42,65%,52%)]" aria-label={labels.close}><X size={22} /></button></div>
        <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5"><div className="flex shrink-0 items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-3 sm:gap-3 sm:px-4"><Search size={18} className="shrink-0 text-[hsl(42,65%,52%)]" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.placeholder} className="w-full min-w-0 bg-transparent text-base text-[hsl(45,30%,96%)] outline-none placeholder:text-[hsl(220,10%,55%)] sm:text-sm" /></div>
          <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-0 sm:mt-5 sm:max-h-[52vh] sm:pr-1">
            {!query.trim() && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.empty}</p>}
            {query.trim() && results.length === 0 && <p className="py-8 text-center text-sm text-[hsl(220,10%,60%)]">{labels.noResult}</p>}
            {results.length > 0 && <><p className="mb-3 text-xs uppercase tracking-[0.16em] text-[hsl(220,10%,55%)]">{results.length} {labels.results}</p><div className="grid gap-2">{results.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="block min-w-0 border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors hover:border-[hsl(42,65%,52%)]/45 hover:bg-white/[0.07]"><span className="block text-sm font-semibold leading-6 text-[hsl(45,30%,96%)]">{item.label}</span>{item.summary && <span className="mt-1 block text-xs leading-5 text-[hsl(220,10%,65%)]">{item.summary}</span>}<span className="mt-1 block break-all text-xs text-[hsl(220,10%,55%)]">{item.href}</span></Link>)}</div></>}
          </div></div>
      </div>
    </div>
  );
}
