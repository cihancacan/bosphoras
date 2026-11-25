'use client';

import { useEffect, useId, useState, type FormEvent, type KeyboardEvent } from 'react';
import { ArrowLeftRight, PlaneLanding, PlaneTakeoff, Search } from 'lucide-react';
import { getNuiteeFlightSearchHref, type FlightCabin, type FlightLeg, type FlightTrip, type SearchAirport } from '@/lib/travel/nuiteeFlightSearch';

import { bookingSearchCopy } from '@/lib/travel/bookingSearchCopy';
import { isTravelLocale } from '@/lib/travel/i18n';
import { FlightSearchDateField } from './FlightSearchDateField';
import { FlightSearchCabin, FlightSearchTravelers, type FlightPassengers } from './FlightSearchTravelers';

type Airport = [code: string, city: string, name: string];
type LegInput = { from: string; to: string; date: string };
const emptyLeg: LegInput = { from: '', to: '', date: '' };
const paris: Airport = ['PAR', 'Paris', 'Tous les aéroports'];

function normalize(value: string): string {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').trim().toLowerCase();
}

function findAirport(value: string, airports: Airport[]): SearchAirport | null {
  const input = value.trim();
  const query = normalize(input);
  const selectedCode = /\(([A-Z]{3})\)$/.exec(input)?.[1];
  const possibleCode = selectedCode ?? input.toUpperCase();
  const airport = airports.find(([code]) => code === possibleCode);
  if (airport) return { code: airport[0], name: airport[1] || airport[2] };

  if (query === 'paris') return { code: 'PAR', name: 'Paris' };
  if (!query) return null;
  const matches = airports.filter(([,city,name]) => normalize(city) === query || normalize(name) === query);
  if (matches.length === 1) return { code: matches[0][0], name: matches[0][1] || matches[0][2] };
  return matches.length === 0 && /^[A-Z]{3}$/.test(possibleCode) ? { code: possibleCode, name: possibleCode } : null;
}

function AirportField({ label, value, onChange, airports, fieldClass, labelClass, placeholder, arrival }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  airports: Airport[];
  fieldClass: string;
  labelClass: string;
  placeholder: string;
  arrival?: boolean;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [option, setOption] = useState(-1);
  const query = normalize(value);
  const suggestions = focused && query.length >= 2 && !/\([A-Z]{3}\)$/.test(value)
    ? airports.filter(airport => airport.some(word => normalize(word).includes(query)))
      .sort((a,b) => Number(normalize(b[0]) === query) - Number(normalize(a[0]) === query))
      .slice(0, 8)
    : [];
  const Icon = arrival ? PlaneLanding : PlaneTakeoff;
  const open = suggestions.length > 0;

  function select([code,city,name]: Airport) {
    onChange(`${city || name} (${code})`);
    setFocused(false);
    setOption(-1);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setFocused(false);
      setOption(-1);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOption(previous => event.key === 'ArrowDown' ? Math.min(previous + 1, suggestions.length - 1)
        : previous <= 0 ? suggestions.length - 1 : previous - 1);
    } else if (event.key === 'Enter' && suggestions[option]) {
      event.preventDefault();
      select(suggestions[option]);
    }
  }

  return (
    <div className="relative min-w-0">
      <label htmlFor={`${id}-airport`} className={labelClass}><Icon size={15} aria-hidden="true"/>{label}</label>
      <input id={`${id}-airport`} value={value} onChange={event => {onChange(event.target.value);setOption(-1);setFocused(true);}}
        onFocus={()=>setFocused(true)} onBlur={()=>{setFocused(false);setOption(-1);}} onKeyDown={onKeyDown}
        role="combobox" aria-expanded={open} aria-autocomplete="list" aria-controls={open?`${id}-results`:undefined}
        aria-activedescendant={suggestions[option]?`${id}-airport-${option}`:undefined}
        required maxLength={130} autoComplete="off" placeholder={placeholder} className={fieldClass}/>
      {open&&<ul id={`${id}-results`} role="listbox" aria-label={label}
        className="absolute inset-x-0 top-full z-30 mt-1.5 overflow-hidden rounded-xl border border-[#dce6ec] bg-white shadow-[0_12px_36px_rgba(17,42,59,0.16)]">
        {suggestions.map((airport,index)=>{
          const [code,city,name]=airport;
          return <li key={code} id={`${id}-airport-${index}`} role="option" aria-selected={index===option}
            onMouseDown={event=>event.preventDefault()} onClick={()=>select(airport)}
            className={`flex min-h-12 cursor-pointer items-center justify-between gap-3 border-b border-[#edf2f4] px-3 py-2 last:border-0 ${index===option?'bg-[#edf6f8]':'hover:bg-[#f3f8fa]'}`}>
            <span className="min-w-0"><span className="block truncate text-sm font-bold text-[#183341]">{city||name}</span>
              {city&&<span className="block truncate text-xs text-[#536d78]">{name}</span>}
            </span>
            <span className="text-xs font-bold tracking-wide text-[#376171]">{code}</span>
          </li>;
        })}
      </ul>}
    </div>
  );
}

export function NuiteeFlightSearch({ locale, trip, initialDestination, labels, fieldClass, labelClass, onSearch }: {
  locale: string;
  trip: FlightTrip;
  initialDestination: string;
  labels: {
    from: string; to: string; departure: string; returnDate: string; cabin: string; segment: string;
    add: string; remove: string; swap: string; economy: string; business: string; first: string;
  };
  fieldClass: string;
  labelClass: string;
  onSearch: () => void;
}) {
  const french = locale === 'fr';
  const copy = bookingSearchCopy[isTravelLocale(locale) ? locale : 'en'];
  const [airports, setAirports] = useState<Airport[]>([paris]);
  const [legs, setLegs] = useState<LegInput[]>([{ ...emptyLeg, to: initialDestination }, emptyLeg]);
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState<FlightPassengers>({ adults: 1, children: [], infants: 0 });
  const [cabin, setCabin] = useState<FlightCabin>('all');
  const [error, setError] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(new Date().toLocaleDateString('sv-SE'));
    const controller = new AbortController();
    fetch('/data/nuitee-flight-airports.json', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => {
        if (!Array.isArray(data?.airports)) return;
        const list: Airport[] = [paris, ...data.airports];
        setAirports(list);
        const arrival = list.find(([code]) => code === initialDestination);
        if (!arrival) return;
        const [code, city, name] = arrival;
        setLegs(previous => previous.map((leg, i) => i === 0 && leg.to === initialDestination
          ? { ...leg, to: `${city || name} (${code})` } : leg));
      })
      .catch(() => { /* IATA codes can still be entered if suggestions fail to load. */ });
    return () => controller.abort();
  }, [initialDestination]);

  function setLeg(index: number, changes: Partial<LegInput>) {
    setLegs(previous => previous.map((leg, i) => i === index ? { ...leg, ...changes } : leg));
    setError('');
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const childrenAges = passengers.children.filter((age): age is number => age !== null);
    if (childrenAges.length !== passengers.children.length) {
      setError(copy.childAgeRequired);
      return;
    }
    const resolved: FlightLeg[] = [];
    for (const leg of displayedLegs) {
      const from = findAirport(leg.from, airports);
      const to = findAirport(leg.to, airports);
      if (!from || !to) {
        setError(copy.airportRequired);
        return;
      }
      resolved.push({ from, to, date: leg.date });
    }
    if (trip === 'round') resolved.push({ from: resolved[0].to, to: resolved[0].from, date: returnDate });
    const href = getNuiteeFlightSearchHref({ locale, trip, legs: resolved, adults: passengers.adults, childrenAges, infants: passengers.infants, cabin });
    if (!href || resolved[0].date < today) {
      setError(copy.invalidFlight);
      return;
    }

    onSearch();
    window.location.assign(href);
  }

  const displayedLegs = trip === 'multi' ? legs : legs.slice(0, 1);
  const airportProps = { airports, fieldClass, labelClass, placeholder: copy.airportPlaceholder };

  return (
    <form onSubmit={search} className="space-y-4" aria-label={copy.flightSearch}>
      {displayedLegs.map((leg, index) => (
        <fieldset key={index} className="min-w-0 rounded-xl border border-[#dde6eb] bg-[#f8fafb] p-3 sm:p-4">
          {trip === 'multi'&&<legend className="px-1 text-sm font-semibold text-[#375264]">{labels.segment} {index + 1}</legend>}
          <div className={`grid min-w-0 items-end gap-3 sm:grid-cols-2 ${trip === 'round' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            <AirportField {...airportProps} label={labels.from} value={leg.from} onChange={from => setLeg(index, {from})}/>
            <AirportField {...airportProps} label={labels.to} value={leg.to} onChange={to => setLeg(index, {to})} arrival/>
            <FlightSearchDateField locale={locale} labelClass={labelClass} fieldClass={fieldClass}
              start={leg.date} end={trip === 'round' ? returnDate : undefined}
              min={index > 0 ? legs[index - 1].date || today : today}
              departureLabel={labels.departure} returnLabel={labels.returnDate}
              onChange={(date, nextReturn) => {
                setLeg(index, { date });
                if (nextReturn !== undefined) setReturnDate(nextReturn);
              }}/>
          </div>
          <button type="button" onClick={() => setLeg(index, {from: leg.to, to: leg.from})}
            className="mt-1 inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-xs font-medium text-[#076c9f] hover:bg-[#ecf6fa]">
            <ArrowLeftRight size={16} aria-hidden="true"/>{labels.swap}
          </button>
        </fieldset>
      ))}
      {trip === 'multi'&&(
        <div className="flex flex-wrap gap-2">
          {legs.length < 5&&<button type="button" onClick={() => setLegs(previous => [...previous, {...emptyLeg, from: previous[previous.length - 1].to}])}
            className="rounded-lg border border-[#b8d4e1] px-3 py-2 text-sm font-semibold text-[#026b9d]">+ {labels.add}</button>}
          {legs.length > 2&&<button type="button" onClick={() => setLegs(previous => previous.slice(0, -1))}
            className="rounded-lg border border-[#dde6ec] px-3 py-2 text-sm text-[#4e6473]">{labels.remove}</button>}
        </div>
      )}
      <div className="grid items-end gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
        <FlightSearchTravelers french={french} passengers={passengers} fieldClass={fieldClass} labelClass={labelClass}
          onChange={value => { setPassengers(value); setError(''); }}/>
        <FlightSearchCabin value={cabin} onChange={setCabin} label={labels.cabin} fieldClass={fieldClass} labelClass={labelClass}
          rtl={locale === 'ar'} options={{ all: french ? 'Toutes les classes' : 'All cabins',
            Economy: labels.economy, Business: labels.business, First: labels.first }}/>
        <button type="submit" className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-[#0071ad] px-6 py-3 text-sm font-semibold text-white hover:bg-[#005b90]">
          <Search size={18} aria-hidden="true"/>{copy.flightSearch}
        </button>
      </div>
      {error&&<p role="alert" className="text-sm text-[#a23121]">{error}</p>}
    </form>
  );
}
