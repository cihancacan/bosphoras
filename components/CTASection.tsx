import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface CTASectionProps {
  locale: Locale;
  variant?: 'dark' | 'ivory' | 'gold';
}

export function CTASection({ locale, variant = 'dark' }: CTASectionProps) {
  const bgMap = {
    dark: 'bg-[hsl(220,45%,12%)]',
    ivory: 'bg-[hsl(45,30%,96%)]',
    gold: 'bg-[hsl(42,65%,52%)]',
  };

  const isDark = variant === 'dark';
  const isGold = variant === 'gold';

  return (
    <section
      className={`py-24 md:py-32 ${bgMap[variant]}`}
      aria-labelledby="cta-heading"
    >
      <div className="container-editorial text-center">
        {/* Gold rule */}
        <div className="w-12 h-px bg-[hsl(42,65%,52%)] mx-auto mb-8" aria-hidden="true" />

        <h2
          id="cta-heading"
          className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6 ${
            isDark ? 'text-[hsl(45,30%,96%)]' : isGold ? 'text-[hsl(220,45%,12%)]' : 'text-[hsl(220,45%,12%)]'
          }`}
        >
          {t(locale, 'assessment.title').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>

        <p className={`text-base md:text-lg leading-relaxed max-w-prose mx-auto mb-10 ${
          isDark ? 'text-[hsl(220,10%,70%)]' : isGold ? 'text-[hsl(220,45%,18%)]' : 'text-[hsl(220,10%,50%)]'
        }`}>
          {t(locale, 'assessment.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')}
            className={`inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.12em] uppercase font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-[hsl(42,65%,52%)] text-[hsl(220,45%,8%)] hover:bg-[hsl(42,65%,62%)]'
                : isGold
                ? 'bg-[hsl(220,45%,12%)] text-[hsl(45,30%,96%)] hover:bg-[hsl(220,35%,20%)]'
                : 'bg-[hsl(220,45%,12%)] text-[hsl(45,30%,96%)] hover:bg-[hsl(220,35%,20%)]'
            }`}
          >
            {t(locale, 'assessment.cta')}
          </Link>
          <Link
            href={getLocalePath(locale, getSlugForPage('about', locale) ?? '/')}
            className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-200 ${
              isDark
                ? 'text-[hsl(220,10%,65%)] hover:text-[hsl(45,30%,96%)]'
                : 'text-[hsl(220,10%,50%)] hover:text-[hsl(220,45%,12%)]'
            }`}
          >
            {t(locale, 'common.contact_us')}
          </Link>
        </div>

        <p className={`text-xs tracking-[0.2em] uppercase mt-10 ${
          isDark ? 'text-[hsl(220,10%,45%)]' : 'text-[hsl(220,10%,60%)]'
        }`}>
          {t(locale, 'common.confidential')}
        </p>
      </div>
    </section>
  );
}
