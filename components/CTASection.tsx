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
    dark: 'bg-[#193344]',
    ivory: 'bg-[#f5f5f3]',
    gold: 'bg-white',
  };

  const isDark = variant === 'dark';
  const isGold = variant === 'gold';

  return (
    <section
      className={`py-24 md:py-32 ${bgMap[variant]}`}
      aria-labelledby="cta-heading"
    >
      <div className="container-editorial text-center">

        <h2
          id="cta-heading"
          className={`font-sans font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6 ${
            isDark ? 'text-white' : isGold ? 'text-[#202629]' : 'text-[#202629]'
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
          isDark ? 'text-[#e0e9ee]' : isGold ? 'text-[#53616b]' : 'text-[#53616b]'
        }`}>
          {t(locale, 'assessment.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')}
            className={`inline-flex items-center gap-2 px-10 py-4 text-sm font-medium tracking-normal transition-colors duration-200 ${
              isDark
                ? 'bg-white text-[#193344] hover:bg-[#f5f5f3]'
                : isGold
                ? 'bg-[#193344] text-white hover:bg-[#25485e]'
                : 'bg-[#193344] text-white hover:bg-[#25485e]'
            }`}
          >
            {t(locale, 'assessment.cta')}
          </Link>
          <Link
            href={getLocalePath(locale, getSlugForPage('about', locale) ?? '/')}
            className={`text-sm tracking-normal font-medium transition-colors duration-200 ${
              isDark
                ? 'text-[#e0e9ee] hover:text-white'
                : 'text-[#53616b] hover:text-[#193344]'
            }`}
          >
            {t(locale, 'common.contact_us')}
          </Link>
        </div>

        <p className={`text-xs tracking-[0.2em] uppercase mt-10 ${
          isDark ? 'text-[#d5e0e6]' : 'text-[#647078]'
        }`}>
          {t(locale, 'common.confidential')}
        </p>
      </div>
    </section>
  );
}
