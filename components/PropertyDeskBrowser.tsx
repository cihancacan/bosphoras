'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Building2, MapPin, WalletCards } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import {
  formatEntryCapital,
  formatPropertyPrice,
  getPropertyPath,
  type PropertyCity,
  type PropertyCollection,
  type PropertyListing,
} from '@/data/propertyDesk';

interface PropertyDeskBrowserProps {
  locale: Locale;
  properties: PropertyListing[];
}

const cityLabels: Record<PropertyCity, Record<Locale, string>> = {
  istanbul: { fr: 'Istanbul', en: 'Istanbul', ru: 'Стамбул', ar: 'إسطنبول' },
  bodrum: { fr: 'Bodrum', en: 'Bodrum', ru: 'Бодрум', ar: 'بودروم' },
  antalya: { fr: 'Antalya', en: 'Antalya', ru: 'Анталья', ar: 'أنطاليا' },
};

const collectionLabels: Record<PropertyCollection, Record<Locale, string>> = {
  'selected-investment': {
    fr: 'Investissements sélectionnés',
    en: 'Selected investments',
    ru: 'Отобранные инвестиции',
    ar: 'استثمارات مختارة',
  },
  signature: {
    fr: 'Signature Collection',
    en: 'Signature Collection',
    ru: 'Signature Collection',
    ar: 'Signature Collection',
  },
  private: {
    fr: 'Opportunités privées',
    en: 'Private opportunities',
    ru: 'Частные предложения',
    ar: 'فرص خاصة',
  },
};

function labels(locale: Locale) {
  if (locale === 'fr') {
    return {
      title: 'Projets et biens sélectionnés',
      eyebrow: 'Bosphoras Selection',
      allCities: 'Toutes les villes',
      allCollections: 'Toutes les sélections',
      capital: 'Capital disponible aujourd’hui',
      allCapital: 'Tous les budgets',
      price: 'Prix total',
      view: 'Voir l’opportunité',
      emptyTitle: 'La sélection publique est en cours de constitution.',
      emptyText:
        'Nous préférons publier peu de biens et documenter correctement chacun d’eux. Les premières opportunités sont actuellement analysées avec nos partenaires.',
      privateCta: 'Recevoir les opportunités privées',
      privateHref: '/diagnostic-prive?subject=property-desk',
    };
  }
  if (locale === 'ru') {
    return {
      title: 'Отобранные проекты и объекты',
      eyebrow: 'Bosphoras Selection',
      allCities: 'Все города',
      allCollections: 'Все подборки',
      capital: 'Капитал доступный сегодня',
      allCapital: 'Любой бюджет',
      price: 'Полная цена',
      view: 'Открыть предложение',
      emptyTitle: 'Публичная подборка сейчас формируется.',
      emptyText:
        'Мы предпочитаем публиковать меньше объектов, но подробно проверять каждый. Первые предложения сейчас анализируются вместе с партнёрами.',
      privateCta: 'Получить частные предложения',
      privateHref: '/ru/chastnaya-konsultatsiya?subject=property-desk',
    };
  }
  if (locale === 'ar') {
    return {
      title: 'مشاريع وعقارات مختارة',
      eyebrow: 'Bosphoras Selection',
      allCities: 'كل المدن',
      allCollections: 'كل المجموعات',
      capital: 'رأس المال المتاح اليوم',
      allCapital: 'كل الميزانيات',
      price: 'السعر الإجمالي',
      view: 'عرض الفرصة',
      emptyTitle: 'يتم حالياً إعداد المجموعة العامة.',
      emptyText:
        'نفضل نشر عدد أقل من العقارات مع توثيق كل فرصة بعناية. يتم حالياً تحليل أول المشاريع مع شركائنا.',
      privateCta: 'الحصول على الفرص الخاصة',
      privateHref: '/ar/تقييم-خاص?subject=property-desk',
    };
  }
  return {
    title: 'Selected projects and properties',
    eyebrow: 'Bosphoras Selection',
    allCities: 'All cities',
    allCollections: 'All collections',
    capital: 'Capital available today',
    allCapital: 'All budgets',
    price: 'Total price',
    view: 'View opportunity',
    emptyTitle: 'The public selection is being built.',
    emptyText:
      'We prefer to publish fewer properties and document each one properly. The first opportunities are currently under review with our partners.',
    privateCta: 'Receive private opportunities',
    privateHref: '/en/private-assessment?subject=property-desk',
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

export function PropertyDeskBrowser({ locale, properties }: PropertyDeskBrowserProps) {
  const copy = labels(locale);
  const [city, setCity] = useState('');
  const [collection, setCollection] = useState('');
  const [capital, setCapital] = useState('');

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        if (city && property.city !== city) return false;
        if (collection && property.collection !== collection) return false;
        return inCapitalRange(property, capital);
      }),
    [properties, city, collection, capital]
  );

  return (
    <section id="selection" className="border-y border-[#d8c7a1] bg-[#f7f1e8] py-16 md:py-24">
      <div className="container-editorial">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#8a6728]">
            {copy.eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[#121826] md:text-5xl">
            {copy.title}
          </h2>
        </div>

        <div className="mb-10 grid gap-3 border border-[#d8c7a1] bg-white p-4 md:grid-cols-3">
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5b6470]">
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> {copy.allCities}</span>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm normal-case tracking-normal text-[#121826]">
              <option value="">{copy.allCities}</option>
              {(['istanbul', 'bodrum', 'antalya'] as PropertyCity[]).map((item) => (
                <option key={item} value={item}>{cityLabels[item][locale]}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5b6470]">
            <span className="inline-flex items-center gap-2"><Building2 size={14} /> {copy.allCollections}</span>
            <select value={collection} onChange={(e) => setCollection(e.target.value)} className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm normal-case tracking-normal text-[#121826]">
              <option value="">{copy.allCollections}</option>
              {(['selected-investment', 'signature', 'private'] as PropertyCollection[]).map((item) => (
                <option key={item} value={item}>{collectionLabels[item][locale]}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5b6470]">
            <span className="inline-flex items-center gap-2"><WalletCards size={14} /> {copy.capital}</span>
            <select value={capital} onChange={(e) => setCapital(e.target.value)} className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm normal-case tracking-normal text-[#121826]">
              <option value="">{copy.allCapital}</option>
              <option value="under50">€25k–€50k</option>
              <option value="50-100">€50k–€100k</option>
              <option value="100-250">€100k–€250k</option>
              <option value="250plus">€250k+</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-[#d8c7a1] bg-white px-6 py-14 text-center md:px-12">
            <h3 className="font-serif text-3xl text-[#121826]">{copy.emptyTitle}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#58616d]">{copy.emptyText}</p>
            <Link href={copy.privateHref} className="mt-8 inline-flex min-h-[48px] items-center gap-3 bg-[#121826] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#263246]">
              {copy.privateCta}<ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property) => {
              const capitalLabel = formatEntryCapital(property, locale);
              return (
                <article key={property.id} className="overflow-hidden border border-[#d8c7a1] bg-white">
                  <Link href={getPropertyPath(locale, property)} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8dfd1]">
                      {property.heroImage || property.images[0] ? (
                        <img
                          src={property.heroImage || property.images[0]}
                          alt={property.title[locale]}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#8a7f70]">Bosphoras Property Desk</div>
                      )}
                      <span className="absolute left-4 top-4 bg-[#121826] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                        {collectionLabels[property.collection][locale]}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6728]">
                        {cityLabels[property.city][locale]} · {property.district}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-[#121826]">{property.title[locale]}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#58616d]">{property.summary[locale]}</p>
                      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e8dfd1] pt-5">
                        <div>
                          <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8a7f70]">{copy.price}</span>
                          <strong className="mt-1 block text-base text-[#121826]">{formatPropertyPrice(property, locale)}</strong>
                        </div>
                        {capitalLabel && (
                          <div>
                            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8a7f70]">{copy.capital}</span>
                            <strong className="mt-1 block text-base text-[#121826]">{capitalLabel.replace(/^.*?:\s*/, '')}</strong>
                          </div>
                        )}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728]">
                        {copy.view}<ArrowRight size={14} />
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
