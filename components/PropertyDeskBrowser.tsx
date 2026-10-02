'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Building2, Globe2, MapPin, SlidersHorizontal, WalletCards } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import {
  formatEntryCapital,
  formatPropertyPrice,
  getEntryCapitalAmount,
  getPropertyPath,
  paymentBadge,
  propertyLocationLabel,
  type PropertyCollection,
  type PropertyListing,
} from '@/data/propertyDesk';

interface PropertyDeskBrowserProps {
  locale: Locale;
  properties: PropertyListing[];
  globalMode?: boolean;
}

const collectionLabels: Record<PropertyCollection, Record<Locale, string>> = {
  'selected-investment': { fr: 'Investissement', en: 'Investment', ru: 'Инвестиции', ar: 'استثمار' },
  signature: { fr: 'Signature', en: 'Signature', ru: 'Signature', ar: 'Signature' },
  private: { fr: 'Privé', en: 'Private', ru: 'Частное', ar: 'خاص' },
};

function labels(locale: Locale) {
  if (locale === 'fr') return {
    title: 'Opportunités immobilières',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'Tous les pays',
    allCities: 'Toutes les villes',
    allCollections: 'Toutes les sélections',
    currency: 'Devise',
    allCurrencies: 'Toutes les devises',
    capital: 'Capital disponible aujourd’hui',
    allCapital: 'Tous les budgets',
    price: 'Prix',
    entry: 'Capital aujourd’hui',
    view: 'Voir le dossier',
    results: 'opportunité(s)',
    emptyTitle: 'Aucun bien ne correspond à ces critères.',
    emptyText: 'Élargissez les filtres ou lancez une recherche privée.',
    privateCta: 'Recherche privée',
    privateHref: '/diagnostic-prive?subject=property-desk',
    filters: 'Filtres investisseurs',
    plan: 'Plan de paiement',
  };
  if (locale === 'ru') return {
    title: 'Инвестиционные объекты',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'Все страны',
    allCities: 'Все города',
    allCollections: 'Все подборки',
    currency: 'Валюта',
    allCurrencies: 'Все валюты',
    capital: 'Капитал сегодня',
    allCapital: 'Любой бюджет',
    price: 'Цена',
    entry: 'Капитал сегодня',
    view: 'Открыть досье',
    results: 'объект(ов)',
    emptyTitle: 'Нет объектов по выбранным критериям.',
    emptyText: 'Расширьте фильтры или запросите частный поиск.',
    privateCta: 'Частный поиск',
    privateHref: '/ru/chastnaya-konsultatsiya?subject=property-desk',
    filters: 'Фильтры инвестора',
    plan: 'График платежей',
  };
  if (locale === 'ar') return {
    title: 'فرص عقارية استثمارية',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'كل الدول',
    allCities: 'كل المدن',
    allCollections: 'كل الفئات',
    currency: 'العملة',
    allCurrencies: 'كل العملات',
    capital: 'رأس المال اليوم',
    allCapital: 'كل الميزانيات',
    price: 'السعر',
    entry: 'رأس المال اليوم',
    view: 'عرض الملف',
    results: 'فرصة',
    emptyTitle: 'لا توجد عقارات مطابقة لهذه المعايير.',
    emptyText: 'وسّع عوامل التصفية أو اطلب بحثاً خاصاً.',
    privateCta: 'بحث خاص',
    privateHref: '/ar/تقييم-خاص?subject=property-desk',
    filters: 'فلاتر المستثمر',
    plan: 'خطة الدفع',
  };
  return {
    title: 'Property opportunities',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'All countries',
    allCities: 'All cities',
    allCollections: 'All selections',
    currency: 'Currency',
    allCurrencies: 'All currencies',
    capital: 'Capital available today',
    allCapital: 'All budgets',
    price: 'Price',
    entry: 'Capital today',
    view: 'View investment file',
    results: 'opportunity(ies)',
    emptyTitle: 'No property matches these filters.',
    emptyText: 'Broaden the filters or request a private search.',
    privateCta: 'Private search',
    privateHref: '/en/private-assessment?subject=property-desk',
    filters: 'Investor filters',
    plan: 'Payment plan',
  };
}

function inCapitalRange(property: PropertyListing, range: string) {
  if (!range) return true;
  const value = getEntryCapitalAmount(property) ?? property.totalPrice ?? 0;
  if (range === 'under50') return value > 0 && value < 50000;
  if (range === '50-100') return value >= 50000 && value < 100000;
  if (range === '100-250') return value >= 100000 && value < 250000;
  if (range === '250plus') return value >= 250000;
  return true;
}

export function PropertyDeskBrowser({ locale, properties, globalMode = false }: PropertyDeskBrowserProps) {
  const copy = labels(locale);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [collection, setCollection] = useState('');
  const [currency, setCurrency] = useState('');
  const [capital, setCapital] = useState('');

  const countries = useMemo(() => {
    const map = new Map<string, string>();
    properties.forEach((property) => {
      const code = property.countryCode || property.countryName;
      const name = property.countryName || property.countryCode;
      if (code && name) map.set(code, name);
    });
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, [properties]);

  const cities = useMemo(() => {
    const list = properties
      .filter((property) => !country || (property.countryCode || property.countryName) === country)
      .map((property) => [property.city, property.cityName] as [string, string]);
    return Array.from(new Map(list).entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, [properties, country]);

  const currencies = useMemo(
    () => Array.from(new Set(properties.map((property) => property.currency).filter(Boolean))).sort(),
    [properties]
  );

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        if (country && (property.countryCode || property.countryName) !== country) return false;
        if (city && property.city !== city) return false;
        if (collection && property.collection !== collection) return false;
        if (currency && property.currency !== currency) return false;
        if (capital && !inCapitalRange(property, capital)) return false;
        return true;
      }),
    [properties, country, city, collection, currency, capital]
  );

  return (
    <section
      id="selection"
      className="bg-[#f5f3ef] py-14 text-[#1a1d22] md:py-20 [font-family:'Avenir_Next','Helvetica_Neue',Arial,sans-serif]"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-[#d8d4cc] pb-7">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9a7447]">{copy.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] md:text-5xl">{copy.title}</h2>
          </div>
          <span className="border border-[#d8d4cc] bg-white px-4 py-2 text-xs font-semibold text-[#656a72]">
            {filtered.length} {copy.results}
          </span>
        </div>

        <div className="mb-9 border border-[#d8d4cc] bg-white p-5 shadow-[0_12px_34px_rgba(18,22,28,0.045)]">
          <div className="mb-4 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#6f737a]">
            <SlidersHorizontal size={14} /> {copy.filters}
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <Filter label={copy.allCountries} icon={<Globe2 size={14}/>}>
              <select value={country} onChange={(e)=>{setCountry(e.target.value);setCity('');}} className="min-h-[46px] border border-[#d8d4cc] bg-white px-3 text-sm font-normal text-[#1a1d22] outline-none focus:border-[#9a7447]">
                <option value="">{copy.allCountries}</option>
                {countries.map(([code,name])=><option key={code} value={code}>{name}</option>)}
              </select>
            </Filter>

            <Filter label={copy.allCities} icon={<MapPin size={14}/>}>
              <select value={city} onChange={(e)=>setCity(e.target.value)} className="min-h-[46px] border border-[#d8d4cc] bg-white px-3 text-sm font-normal text-[#1a1d22] outline-none focus:border-[#9a7447]">
                <option value="">{copy.allCities}</option>
                {cities.map(([key,name])=><option key={key} value={key}>{name}</option>)}
              </select>
            </Filter>

            <Filter label={copy.allCollections} icon={<Building2 size={14}/>}>
              <select value={collection} onChange={(e)=>setCollection(e.target.value)} className="min-h-[46px] border border-[#d8d4cc] bg-white px-3 text-sm font-normal text-[#1a1d22] outline-none focus:border-[#9a7447]">
                <option value="">{copy.allCollections}</option>
                {(['selected-investment','signature','private'] as PropertyCollection[]).map((item)=><option key={item} value={item}>{collectionLabels[item][locale]}</option>)}
              </select>
            </Filter>

            <Filter label={copy.currency} icon={<WalletCards size={14}/>}>
              <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className="min-h-[46px] border border-[#d8d4cc] bg-white px-3 text-sm font-normal text-[#1a1d22] outline-none focus:border-[#9a7447]">
                <option value="">{copy.allCurrencies}</option>
                {currencies.map((item)=><option key={item} value={item}>{item}</option>)}
              </select>
            </Filter>

            <Filter label={copy.capital} icon={<WalletCards size={14}/>}>
              <select value={capital} onChange={(e)=>setCapital(e.target.value)} className="min-h-[46px] border border-[#d8d4cc] bg-white px-3 text-sm font-normal text-[#1a1d22] outline-none focus:border-[#9a7447]">
                <option value="">{copy.allCapital}</option>
                <option value="under50">25k–50k</option>
                <option value="50-100">50k–100k</option>
                <option value="100-250">100k–250k</option>
                <option value="250plus">250k+</option>
              </select>
            </Filter>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-[#d8d4cc] bg-white px-6 py-16 text-center">
            <h3 className="text-2xl font-semibold">{copy.emptyTitle}</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b7078]">{copy.emptyText}</p>
            <Link href={copy.privateHref} className="mt-7 inline-flex min-h-[46px] items-center gap-2 bg-[#1a1d22] px-5 text-sm font-semibold text-white">
              {copy.privateCta}<ArrowRight size={15}/>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property) => {
              const capitalLabel = formatEntryCapital(property, locale);
              const payBadge = paymentBadge(property, locale);
              const firstStep = property.paymentPlanEnabled !== false ? property.paymentPlan?.[0] : undefined;
              return (
                <article key={property.id} className="group overflow-hidden border border-[#d8d4cc] bg-white shadow-[0_12px_34px_rgba(18,22,28,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#bda77e] hover:shadow-[0_22px_55px_rgba(18,22,28,0.09)]">
                  <Link href={getLocalePath(locale, getPropertyPath(locale, property, globalMode))} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e5df]">
                      {property.heroImage || property.images[0] ? (
                        <img src={property.heroImage || property.images[0]} alt={property.title[locale]} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"/>
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-[#85888e]">Bosphoras Property Desk</div>
                      )}
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="bg-[#1a1d22]/92 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white">
                          {collectionLabels[property.collection][locale]}
                        </span>
                        {payBadge ? <span className="bg-[#f4ede1]/95 px-3 py-1.5 text-[0.62rem] font-semibold text-[#7e5c35]">{payBadge}</span> : null}
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#9a7447]">{propertyLocationLabel(property)}</p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em]">{property.title[locale]}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6b7078]">{property.summary[locale]}</p>

                      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#e6e2dc] pt-4">
                        <div>
                          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#85888e]">{copy.price}</span>
                          <strong className="mt-1 block text-base">{formatPropertyPrice(property, locale)}</strong>
                        </div>
                        <div>
                          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#85888e]">{copy.entry}</span>
                          <strong className="mt-1 block text-base">{capitalLabel ? capitalLabel.replace(/^.*?:\s*/,'') : '—'}</strong>
                        </div>
                      </div>

                      {firstStep ? (
                        <div className="mt-4 border-l-2 border-[#b28b5a] pl-3 text-xs leading-5 text-[#6b7078]">
                          <span className="font-semibold text-[#1a1d22]">{copy.plan} :</span>{' '}
                          {firstStep.label?.[locale] || firstStep.label?.fr || ''}
                          {firstStep.percentage ? ` · ${firstStep.percentage}%` : ''}
                        </div>
                      ) : null}

                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#8a683f]">
                        {copy.view}<ArrowRight size={14}/>
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function Filter({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-xs font-semibold text-[#555a61]">
      <span className="inline-flex items-center gap-2">{icon}{label}</span>
      {children}
    </label>
  );
}
