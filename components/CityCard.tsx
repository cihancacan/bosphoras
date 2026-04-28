import Link from 'next/link';
import type { City } from '@/data/cities';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface CityCardProps {
  city: City;
  locale: Locale;
}

export function CityCard({ city, locale }: CityCardProps) {
  const targetSlug = getSlugForPage(city.slug, locale) ?? `/destinations/${city.slug}`;
  const href = getLocalePath(locale, targetSlug);

  return (
    <article className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
      {/* Image */}
      <img
        src={city.image}
        alt={city.names[locale]}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,45%,8%)]/90 via-[hsl(220,45%,8%)]/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" aria-hidden="true" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <p className="text-[hsl(42,65%,60%)] text-xs tracking-[0.25em] uppercase mb-2">
          {city.taglines[locale]}
        </p>
        <h3 className="text-[hsl(45,30%,96%)] font-serif text-3xl mb-3 leading-tight">
          {city.names[locale]}
        </h3>
        <p className="text-[hsl(220,10%,75%)] text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 line-clamp-3">
          {city.descriptions[locale]}
        </p>

        {/* Highlights */}
        <ul className="flex flex-wrap gap-2 mb-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {city.highlights[locale]?.slice(0, 2).map((highlight, i) => (
            <li
              key={i}
              className="text-[0.65rem] tracking-[0.12em] uppercase text-[hsl(42,65%,60%)] border border-[hsl(42,65%,52%)]/40 px-2.5 py-1"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[hsl(45,30%,96%)] hover:text-[hsl(42,65%,60%)] transition-colors duration-200 font-medium"
          aria-label={`${t(locale, 'common.discover')} ${city.names[locale]}`}
        >
          {t(locale, 'common.discover')}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
