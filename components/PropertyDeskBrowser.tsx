'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Building2, Globe2, MapPin, SlidersHorizontal, WalletCards } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import {
  formatEntryCapital,
  formatPropertyPrice,
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
    capital: 'Capital disponible aujourd’hui',
    allCapital: 'Tous les budgets',
    price: 'Prix',
    entry: 'Capital aujourd’hui',
    view: 'Voir le bien',
    results: 'opportunité(s)',
    emptyTitle: 'Aucun bien ne correspond à ces critères.',
    emptyText: 'Élargissez les filtres ou demandez une recherche privée.',
    privateCta: 'Lancer une recherche privée',
    privateHref: '/diagnostic-prive?subject=property-desk',
    filters: 'Filtres investisseurs',
    interest: 'Intérêt promoteur',
    interestFree: 'Sans intérêt',
  };
  if (locale === 'ru') return {
    title: 'Инвестиционные объекты',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'Все страны',
    allCities: 'Все города',
    allCollections: 'Все подборки',
    capital: 'Капитал сегодня',
    allCapital: 'Любой бюджет',
    price: 'Цена',
    entry: 'Капитал сегодня',
    view: 'Открыть объект',
    results: 'объект(ов)',
    emptyTitle: 'Нет объектов по выбранным критериям.',
    emptyText: 'Расширьте фильтры или запросите частный поиск.',
    privateCta: 'Запросить частный поиск',
    privateHref: '/ru/chastnaya-konsultatsiya?subject=property-desk',
    filters: 'Фильтры инвестора',
    interest: 'Ставка застройщика',
    interestFree: 'Без процентов',
  };
  if (locale === 'ar') return {
    title: 'فرص عقارية استثمارية',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'كل الدول',
    allCities: 'كل المدن',
    allCollections: 'كل الفئات',
    capital: 'رأس المال اليوم',
    allCapital: 'كل الميزانيات',
    price: 'السعر',
    entry: 'رأس المال اليوم',
    view: 'عرض العقار',
    results: 'فرصة',
    emptyTitle: 'لا توجد عقارات مطابقة لهذه المعايير.',
    emptyText: 'وسّع عوامل التصفية أو اطلب بحثاً خاصاً.',
    privateCta: 'طلب بحث خاص',
    privateHref: '/ar/تقييم-خاص?subject=property-desk',
    filters: 'فلاتر المستثمر',
    interest: 'فائدة المطور',
    interestFree: 'بدون فوائد',
  };
  return {
    title: 'Property opportunities',
    eyebrow: 'Bosphoras Property Desk',
    allCountries: 'All countries',
    allCities: 'All cities',
    allCollections: 'All selections',
    capital: 'Capital available today',
    allCapital: 'All budgets',
    price: 'Price',
    entry: 'Capital today',
    view: 'View property',
    results: 'opportunity(ies)',
    emptyTitle: 'No property matches these filters.',
    emptyText: 'Broaden the filters or request a private search.',
    privateCta: 'Request a private search',
    privateHref: '/en/private-assessment?subject=property-desk',
    filters: 'Investor filters',
    interest: 'Developer interest',
    interestFree: 'Interest-free',
  };
}

function inCapitalRange(property: PropertyListing, range: string) {
  if (!range) return true;
  const value = property.entryCapital ?? property.totalPrice ?? 0;
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
  const [capital, setCapital] = useState('');

  const countries = useMemo(() => {
    const map = new Map<string, string>();
    properties.forEach((property) => map.set(property.countryCode || property.countryName, property.countryName || property.countryCode));
    return Array.from(map.entries()).sort((a,b)=>a[1].localeCompare(b[1]));
  }, [properties]);

  const cities = useMemo(() => {
    const list = properties
      .filter((property) => !country || (property.countryCode || property.countryName) === country)
      .map((property) => [property.city, property.cityName] as [string,string]);
    return Array.from(new Map(list).entries()).sort((a,b)=>a[1].localeCompare(b[1]));
  }, [properties, country]);

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        if (country && (property.countryCode || property.countryName) !== country) return false;
        if (city && property.city !== city) return false;
        if (collection && property.collection !== collection) return false;
        return inCapitalRange(property, capital);
      }),
    [properties, country, city, collection, capital]
  );

  return (
    <section id="selection" className="bg-[#f2f5f4] py-14 md:py-20 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <div className="mx-auto max-w-[1540px] px-5 md:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8a6a45]">{copy.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#12221f] md:text-5xl">{copy.title}</h2>
          </div>
          <span className="rounded-full border border-[#d7dfdc] bg-white px-4 py-2 text-xs font-semibold text-[#596965]">{filtered.length} {copy.results}</span>
        </div>

        <div className="mb-8 rounded-2xl border border-[#d7dfdc] bg-white p-4 shadow-[0_18px_50px_rgba(20,40,36,0.06)]">
          <div className="mb-3 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#65756f]">
            <SlidersHorizontal size={14}/> {copy.filters}
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <label className="grid gap-2 text-xs font-semibold text-[#53625e]">
              <span className="inline-flex items-center gap-2"><Globe2 size={14}/>{copy.allCountries}</span>
              <select value={country} onChange={(e)=>{setCountry(e.target.value);setCity('');}} className="min-h-[46px] rounded-lg border border-[#d7dfdc] bg-white px-3 text-sm font-normal text-[#12221f]">
                <option value="">{copy.allCountries}</option>
                {countries.map(([code,name])=><option key={code} value={code}>{name}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-xs font-semibold text-[#53625e]">
              <span className="inline-flex items-center gap-2"><MapPin size={14}/>{copy.allCities}</span>
              <select value={city} onChange={(e)=>setCity(e.target.value)} className="min-h-[46px] rounded-lg border border-[#d7dfdc] bg-white px-3 text-sm font-normal text-[#12221f]">
                <option value="">{copy.allCities}</option>
                {cities.map(([key,name])=><option key={key} value={key}>{name}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-xs font-semibold text-[#53625e]">
              <span className="inline-flex items-center gap-2"><Building2 size={14}/>{copy.allCollections}</span>
              <select value={collection} onChange={(e)=>setCollection(e.target.value)} className="min-h-[46px] rounded-lg border border-[#d7dfdc] bg-white px-3 text-sm font-normal text-[#12221f]">
                <option value="">{copy.allCollections}</option>
                {(['selected-investment','signature','private'] as PropertyCollection[]).map((item)=><option key={item} value={item}>{collectionLabels[item][locale]}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-xs font-semibold text-[#53625e]">
              <span className="inline-flex items-center gap-2"><WalletCards size={14}/>{copy.capital}</span>
              <select value={capital} onChange={(e)=>setCapital(e.target.value)} className="min-h-[46px] rounded-lg border border-[#d7dfdc] bg-white px-3 text-sm font-normal text-[#12221f]">
                <option value="">{copy.allCapital}</option>
                <option value="under50">€25k–€50k</option>
                <option value="50-100">€50k–€100k</option>
                <option value="100-250">€100k–€250k</option>
                <option value="250plus">€250k+</option>
              </select>
            </label>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-[#d7dfdc] bg-white px-6 py-14 text-center">
            <h3 className="text-2xl font-semibold text-[#12221f]">{copy.emptyTitle}</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#65756f]">{copy.emptyText}</p>
            <Link href={copy.privateHref} className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-[#12221f] px-5 text-sm font-semibold text-white">{copy.privateCta}<ArrowRight size={15}/></Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property) => {
              const capitalLabel = formatEntryCapital(property, locale);
              const payBadge = paymentBadge(property, locale);
              const interestLabel = property.paymentInterestMode === 'interest_bearing'
                ? `${copy.interest}: ${property.paymentInterestRate !== undefined ? property.paymentInterestRate + '%' : '—'}`
                : property.paymentInterestMode === 'interest_free'
                  ? copy.interestFree
                  : '';
              return (
                <article key={property.id} className="group overflow-hidden rounded-2xl border border-[#d7dfdc] bg-white shadow-[0_18px_50px_rgba(20,40,36,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,40,36,0.10)]">
                  <Link href={getLocalePath(locale, getPropertyPath(locale, property, globalMode))} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#dce4e1]">
                      {property.heroImage || property.images[0] ? (
                        <img src={property.heroImage || property.images[0]} alt={property.title[locale]} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"/>
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-[#71817c]">Bosphoras Property Desk</div>
                      )}
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#12221f]/90 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-white">{collectionLabels[property.collection][locale]}</span>
                        {payBadge ? <span className="rounded-full bg-white/95 px-3 py-1.5 text-[0.64rem] font-semibold text-[#2f6d59]">{payBadge}</span> : null}
                        {interestLabel ? <span className="rounded-full bg-[#f7ead0]/95 px-3 py-1.5 text-[0.64rem] font-semibold text-[#6f5429]">{interestLabel}</span> : null}
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#8a6a45]">{propertyLocationLabel(property)}</p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#12221f]">{property.title[locale]}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#65756f]">{property.summary[locale]}</p>
                      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#e4e9e7] pt-4">
                        <div><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#7b8985]">{copy.price}</span><strong className="mt-1 block text-base text-[#12221f]">{formatPropertyPrice(property, locale)}</strong></div>
                        {capitalLabel ? <div><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#7b8985]">{copy.entry}</span><strong className="mt-1 block text-base text-[#12221f]">{capitalLabel.replace(/^.*?:\s*/,'')}</strong></div> : <div/>}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#2f6d59]">{copy.view}<ArrowRight size={14}/></span>
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
