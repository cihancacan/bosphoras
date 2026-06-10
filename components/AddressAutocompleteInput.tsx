'use client';

import { useEffect, useId, useState } from 'react';

type GeoapifyResult = {
  formatted?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  county?: string;
  state?: string;
  country?: string;
  place_id?: string;
};

function formatSuggestion(item: GeoapifyResult) {
  const main = item.address_line1 || item.formatted || '';
  const city = item.city || item.county || '';
  const region = item.state || '';

  const parts = [main, city, region]
    .map((part) => part.trim())
    .filter(Boolean);

  return Array.from(new Set(parts)).join(', ');
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
  const listId = `geoapify-${generatedId}`;
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
    const query = value.trim();

    if (!apiKey || query.length < 3) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    const timer = window.setTimeout(async () => {
      try {
        const params = new URLSearchParams({
          text: query,
          filter: 'countrycode:tr',
          bias: 'proximity:28.9784,41.0082',
          limit: '8',
          format: 'json',
          apiKey,
        });

        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?${params.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          setSuggestions([]);
          return;
        }

        const data = (await response.json()) as { results?: GeoapifyResult[] };

        const nextSuggestions = Array.from(
          new Set(
            (data.results || [])
              .map(formatSuggestion)
              .filter(Boolean),
          ),
        ).slice(0, 8);

        setSuggestions(nextSuggestions);
      } catch {
        if (!controller.signal.aborted) {
          setSuggestions([]);
        }
      }
    }, 400);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [value]);

  return (
    <>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        list={listId}
        className={className}
        placeholder={placeholder}
        autoComplete="off"
      />

      <datalist id={listId}>
        {suggestions.map((suggestion) => (
          <option key={suggestion} value={suggestion} />
        ))}
      </datalist>
    </>
  );
}
