'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, BadgePercent, MapPin, RotateCcw } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import {
  formatEntryCapital,
  formatPropertyPrice,
  getPropertyPath,
  paymentBadge,
  propertyLocationLabel,
  type PropertyListing,
} from '@/data/propertyDesk';

interface PropertyDeskBrowserProps {
  locale: Locale;
  properties: PropertyListing[];
  globalMode?: boolean;
}

function labels(locale:Locale){
  if(locale==='fr')return{
    title:'Biens disponibles',
    count:'bien(s)',
    country:'Pays',
    city:'Ville',
    type:'Type',
    capital:'Budget d’entrée',
    all:'Tous',
    reset:'Réinitialiser',
    price:'Prix',
    entry:'Capital aujourd’hui',
    view:'Voir le bien',
    empty:'Aucun bien ne correspond à ces filtres.',
    private:'Recherche privée',
    privateHref:'/diagnostic-prive?subject=property-desk',
    terms:'Plan promoteur',
  };
  if(locale==='ru')return{
    title:'Доступные объекты',count:'объект(ов)',country:'Страна',city:'Город',type:'Тип',capital:'Стартовый капитал',all:'Все',reset:'Сбросить',price:'Цена',entry:'Капитал сегодня',view:'Открыть объект',empty:'Нет объектов по выбранным фильтрам.',private:'Частный поиск',privateHref:'/ru/chastnaya-konsultatsiya?subject=property-desk',terms:'Условия застройщика'
  };
  if(locale==='ar')return{
    title:'العقارات المتاحة',count:'عقار',country:'الدولة',city:'المدينة',type:'النوع',capital:'رأس المال المبدئي',all:'الكل',reset:'إعادة ضبط',price:'السعر',entry:'رأس المال اليوم',view:'عرض العقار',empty:'لا توجد عقارات مطابقة للفلاتر.',private:'بحث خاص',privateHref:'/ar/تقييم-خاص?subject=property-desk',terms:'خطة المطور'
  };
  return{
    title:'Available properties',count:'property(ies)',country:'Country',city:'City',type:'Type',capital:'Entry budget',all:'All',reset:'Reset',price:'Price',entry:'Capital today',view:'View property',empty:'No property matches these filters.',private:'Private search',privateHref:'/en/private-assessment?subject=property-desk',terms:'Developer plan'
  };
}

function inCapitalRange(property:PropertyListing,range:string){
  if(!range)return true;
  const value=property.entryCapital??property.totalPrice??0;
  if(range==='under50')return value>0&&value<50000;
  if(range==='50-100')return value>=50000&&value<100000;
  if(range==='100-250')return value>=100000&&value<250000;
  if(range==='250plus')return value>=250000;
  return true;
}

function typeLabel(value:string,locale:Locale){
  const map:any={
    apartment:{fr:'Appartement',en:'Apartment',ru:'Квартира',ar:'شقة'},
    residence:{fr:'Résidence',en:'Residence',ru:'Резиденция',ar:'مجمع سكني'},
    villa:{fr:'Villa',en:'Villa',ru:'Вилла',ar:'فيلا'},
    penthouse:{fr:'Penthouse',en:'Penthouse',ru:'Пентхаус',ar:'بنتهاوس'},
    commercial:{fr:'Commercial',en:'Commercial',ru:'Коммерческая',ar:'تجاري'},
  };
  return map[value]?.[locale]||value.replace(/[-_]/g,' ').replace(/\b\w/g,(x)=>x.toUpperCase());
}

export function PropertyDeskBrowser({locale,properties,globalMode=false}:PropertyDeskBrowserProps){
  const c=labels(locale);
  const [country,setCountry]=useState('');
  const [city,setCity]=useState('');
  const [type,setType]=useState('');
  const [capital,setCapital]=useState('');

  const countries=useMemo(()=>{
    const map=new Map<string,string>();
    properties.forEach((p)=>map.set(p.countryCode||p.countryName,p.countryName||p.countryCode));
    return Array.from(map.entries()).sort((a,b)=>a[1].localeCompare(b[1]));
  },[properties]);

  const cities=useMemo(()=>{
    const pairs=properties
      .filter((p)=>!country||(p.countryCode||p.countryName)===country)
      .map((p)=>[p.city,p.cityName||p.city] as [string,string]);
    return Array.from(new Map(pairs).entries()).sort((a,b)=>a[1].localeCompare(b[1]));
  },[properties,country]);

  const types=useMemo(()=>Array.from(new Set(properties.map((p)=>p.propertyType).filter(Boolean))).sort(),[properties]);

  const filtered=useMemo(()=>properties.filter((p)=>{
    if(country&&(p.countryCode||p.countryName)!==country)return false;
    if(city&&p.city!==city)return false;
    if(type&&p.propertyType!==type)return false;
    return inCapitalRange(p,capital);
  }),[properties,country,city,type,capital]);

  const hasFilters=Boolean(country||city||type||capital);
  const selectClass='h-11 w-full border border-[#d7d2c8] bg-white px-3 text-sm font-medium text-[#27302d] outline-none focus:border-[#557d70]';

  return <section id="selection" className="bg-[#f5f2eb] px-4 pb-12 pt-6 sm:px-6 md:pb-16 lg:px-8">
    <div className="mx-auto max-w-[1280px]">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#d7d2c8] pb-4">
        <div><p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#5a796f]">Bosphoras Property Desk</p><h2 className="mt-1 font-serif text-3xl tracking-[-0.035em] text-[#1a211f] sm:text-4xl">{c.title}</h2></div>
        <span className="text-xs font-semibold text-[#6d756f]">{filtered.length} {c.count}</span>
      </div>

      <div className="sticky top-[4.8rem] z-30 -mx-4 border-b border-[#d9d4ca] bg-[#f5f2eb]/95 px-4 py-3 backdrop-blur-md sm:mx-0 sm:px-0">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          <select aria-label={c.country} value={country} onChange={(e)=>{setCountry(e.target.value);setCity('');}} className={selectClass}>
            <option value="">{c.country} · {c.all}</option>
            {countries.map(([code,name])=><option key={code} value={code}>{name}</option>)}
          </select>
          <select aria-label={c.city} value={city} onChange={(e)=>setCity(e.target.value)} className={selectClass}>
            <option value="">{c.city} · {c.all}</option>
            {cities.map(([key,name])=><option key={key} value={key}>{name}</option>)}
          </select>
          <select aria-label={c.type} value={type} onChange={(e)=>setType(e.target.value)} className={selectClass}>
            <option value="">{c.type} · {c.all}</option>
            {types.map((item)=><option key={item} value={item}>{typeLabel(item,locale)}</option>)}
          </select>
          <select aria-label={c.capital} value={capital} onChange={(e)=>setCapital(e.target.value)} className={selectClass}>
            <option value="">{c.capital} · {c.all}</option>
            <option value="under50">&lt; €50k</option>
            <option value="50-100">€50k–€100k</option>
            <option value="100-250">€100k–€250k</option>
            <option value="250plus">€250k+</option>
          </select>
          {hasFilters?<button type="button" onClick={()=>{setCountry('');setCity('');setType('');setCapital('');}} className="col-span-2 inline-flex h-11 items-center justify-center gap-2 border border-[#c8c2b8] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#65706b] md:col-span-4 lg:col-span-1"><RotateCcw size={13}/>{c.reset}</button>:null}
        </div>
      </div>

      {filtered.length===0?<div className="border-b border-[#d7d2c8] py-14 text-center"><h3 className="font-serif text-2xl">{c.empty}</h3><Link href={c.privateHref} className="mt-5 inline-flex items-center gap-2 bg-[#244b3f] px-5 py-3 text-sm font-semibold text-white">{c.private}<ArrowRight size={14}/></Link></div>:
      <div className="mt-6 grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((property)=>{
          const capitalLabel=formatEntryCapital(property,locale);
          const payBadge=paymentBadge(property,locale);
          return <article key={property.id} className="group min-w-0 border-b border-[#cfc9bf] pb-6">
            <Link href={getLocalePath(locale,getPropertyPath(locale,property,globalMode))} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dfddd7]">
                {property.heroImage||property.images?.[0]?<img src={property.heroImage||property.images[0]} alt={property.title[locale]} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"/>:<div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.16em] text-[#787b77]">Bosphoras</div>}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12 text-white">
                  <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em]"><MapPin size={12}/>{propertyLocationLabel(property)}</span>
                  {payBadge?<span className="bg-white/90 px-2 py-1 text-[0.62rem] font-semibold text-[#315f52] backdrop-blur-sm">{payBadge}</span>:null}
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="min-w-0 font-serif text-[1.55rem] leading-[1.08] tracking-[-0.025em] text-[#1b211f]">{property.title[locale]}</h3>
                  <ArrowRight size={17} className="mt-1 shrink-0 text-[#6b847b] transition group-hover:translate-x-1"/>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#69716d]">{property.summary[locale]}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#ddd8ce] pt-3">
                  <div><span className="block text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#85847d]">{c.price}</span><strong className="mt-1 block text-sm text-[#242b28]">{formatPropertyPrice(property,locale)}</strong></div>
                  <div><span className="block text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#85847d]">{c.entry}</span><strong className="mt-1 block text-sm text-[#315f52]">{capitalLabel?capitalLabel.replace(/^.*?:\s*/,''):'—'}</strong></div>
                </div>
                {property.paymentPlanEnabled&&property.paymentInterestMode!=='not_specified'?<div className="mt-3 inline-flex items-center gap-2 text-[0.67rem] font-semibold uppercase tracking-[0.07em] text-[#55756a]"><BadgePercent size={13}/>{c.terms} · {property.paymentInterestMode==='interest_free'?(locale==='fr'?'0 % sans intérêt':locale==='ru'?'0% без процентов':locale==='ar'?'0٪ بدون فائدة':'0% interest-free'):property.paymentInterestRate!==undefined?`${property.paymentInterestRate}%`:payBadge}</div>:null}
              </div>
            </Link>
          </article>;
        })}
      </div>}
    </div>
  </section>;
}
