'use client';

import { useEffect, useId, useRef, useState } from 'react';

type GeoapifyResult = {
  formatted?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  county?: string;
  state?: string;
  country?: string;
  place_id?: string;
  result_type?: string;
  category?: string;
};

type Suggestion = {
  key: string;
  label: string;
  title: string;
  subtitle: string;
  icon: string;
};

const PRIORITY_AIRPORTS: Suggestion[] = [
  {
    key: 'priority-istanbul-airport-ist',
    label: 'Istanbul Airport (IST), Tayakadın, Arnavutköy, Istanbul, Türkiye',
    title: 'Istanbul Airport (IST)',
    subtitle: 'Tayakadın, Arnavutköy, Istanbul',
    icon: '✈',
  },
  {
    key: 'priority-sabiha-gokcen-saw',
    label: 'Sabiha Gökçen International Airport (SAW), Pendik, Istanbul, Türkiye',
    title: 'Sabiha Gökçen International Airport (SAW)',
    subtitle: 'Pendik, Istanbul',
    icon: '✈',
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ç/g, 'c')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u');
}

function cleanParts(parts: Array<string | undefined>) {
  return Array.from(
    new Set(
      parts
        .map((part) => (part || '').trim())
        .filter(Boolean),
    ),
  );
}

function isAirportText(value: string) {
  return (
    /(^|[^a-z0-9])(ist|saw)([^a-z0-9]|$)/i.test(value) ||
    value.includes('airport') ||
    value.includes('aeroport') ||
    value.includes('havaliman') ||
    value.includes('sabiha gokcen') ||
    value.includes('istanbul airport')
  );
}

function getPriorityAirportSuggestions(query: string) {
  const value = normalize(query.trim());
  if (value.length < 2) return [];

  const wantsIstanbulAirport =
    'istanbul airport'.includes(value) ||
    'ist'.startsWith(value) ||
    value.includes('ist') ||
    value.includes('istanbul airport') ||
    value.includes('havaliman') ||
    value.includes('airport') ||
    value.includes('aeroport');

  const wantsSabihaAirport =
    'sabiha gokcen international airport'.includes(value) ||
    'saw'.startsWith(value) ||
    value.includes('saw') ||
    value.includes('sabiha') ||
    value.includes('gokcen') ||
    value.includes('havaliman') ||
    value.includes('airport') ||
    value.includes('aeroport');

  return PRIORITY_AIRPORTS.filter((airport) => {
    if (airport.key.includes('istanbul-airport')) return wantsIstanbulAirport;
    return wantsSabihaAirport;
  });
}

function getIcon(item: GeoapifyResult) {
  const value = normalize(
    `${item.formatted || ''} ${item.address_line1 || ''} ${item.address_line2 || ''} ${item.result_type || ''} ${item.category || ''}`,
  );

  if (
    value.includes('hotel') ||
    value.includes('otel') ||
    value.includes('resort') ||
    value.includes('suite') ||
    value.includes('palace') ||
    value.includes('kempinski') ||
    value.includes('hilton') ||
    value.includes('marriott') ||
    value.includes('radisson') ||
    value.includes('ritz') ||
    value.includes('sheraton') ||
    value.includes('hyatt') ||
    value.includes('intercontinental') ||
    value.includes('four seasons') ||
    value.includes('swissotel') ||
    value.includes('mandarin') ||
    value.includes('raffles') ||
    value.includes('conrad') ||
    value.includes('wyndham')
  ) {
    return '🏨';
  }

  if (isAirportText(value)) {
    return '✈';
  }

  if (
    value.includes('restaurant') ||
    value.includes('restoran') ||
    value.includes('lokanta') ||
    value.includes('cafe') ||
    value.includes('bar') ||
    value.includes('food') ||
    value.includes('dining') ||
    value.includes('pub') ||
    value.includes('bistro') ||
    value.includes('grill') ||
    value.includes('steakhouse') ||
    value.includes('bakery') ||
    value.includes('patisserie')
  ) {
    return '🍽';
  }

  return '📍';
}

function formatSuggestion(item: GeoapifyResult): Suggestion | null {
  const title = (item.address_line1 || item.formatted || '').trim();

  if (!title) return null;

  const subtitle = cleanParts([
    item.address_line2,
    item.city || item.county,
    item.state,
    item.country,
  ])
    .filter((part) => part.toLowerCase() !== title.toLowerCase())
    .join(', ');

  const label = item.formatted || cleanParts([title, subtitle]).join(', ');

  return {
    key: item.place_id || label,
    label,
    title,
    subtitle,
    icon: getIcon(item),
  };
}

function mergeSuggestions(prioritySuggestions: Suggestion[], apiSuggestions: Suggestion[]) {
  const seen = new Set<string>();

  return [...prioritySuggestions, ...apiSuggestions]
    .filter((suggestion) => {
      const key = normalize(suggestion.label);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 6);
}

export function AddressAutocompleteInput({
  value,
  onChange,
  className,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}) {
  const generatedId = useId().replace(/:/g, '-');
  const resultsId = `geoapify-${generatedId}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const cacheRef = useRef<Record<string, Suggestion[]>>({});
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
    const query = value.trim();
    const cacheKey = query.toLowerCase();
    const prioritySuggestions = getPriorityAirportSuggestions(query);

    if (!apiKey || query.length < 2) {
      setSuggestions(prioritySuggestions);
      setIsLoading(false);
      return;
    }

    const cached = cacheRef.current[cacheKey];
    if (cached) {
      setSuggestions(mergeSuggestions(prioritySuggestions, cached));
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);

    const timer = window.setTimeout(async () => {
      try {
        const params = new URLSearchParams({
          text: query,
          filter: 'countrycode:tr',
          bias: 'proximity:28.9784,41.0082',
          limit: '6',
          format: 'json',
          apiKey,
        });

        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?${params.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          setSuggestions(prioritySuggestions);
          return;
        }

        const data = (await response.json()) as { results?: GeoapifyResult[] };
        const apiSuggestions = (data.results || [])
          .map(formatSuggestion)
          .filter((suggestion): suggestion is Suggestion => Boolean(suggestion));

        cacheRef.current[cacheKey] = apiSuggestions;
        setSuggestions(mergeSuggestions(prioritySuggestions, apiSuggestions));
      } catch {
        if (!controller.signal.aborted) {
          setSuggestions(prioritySuggestions);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 180);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [value]);

  const showPanel = isOpen && (suggestions.length > 0 || isLoading);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(value.trim().length >= 2)}
        onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
        className={className}
        placeholder={placeholder}
        autoComplete="off"
        role="combobox"
        aria-expanded={showPanel}
        aria-controls={resultsId}
      />

      {value ? (
        <button
          type="button"
          aria-label="Effacer l'adresse"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            onChange('');
            setSuggestions([]);
            setIsOpen(false);
            inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-base font-black text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          ×
        </button>
      ) : null}

      {showPanel ? (
        <div
          id={resultsId}
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
        >
          {isLoading && suggestions.length === 0 ? (
            <div className="px-4 py-3 text-sm font-semibold text-slate-500">Recherche en cours…</div>
          ) : null}

          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.key}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                onChange(suggestion.label);
                setIsOpen(false);
              }}
              className={`flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-slate-50 ${
                index > 0 ? 'border-t border-slate-100' : ''
              }`}
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700">
                {suggestion.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-black text-slate-950">{suggestion.title}</span>
                {suggestion.subtitle ? (
                  <span className="mt-0.5 block line-clamp-2 text-xs font-semibold leading-5 text-slate-500">
                    {suggestion.subtitle}
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
