import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';

interface TrustBarProps {
  locale: Locale;
  variant?: 'light' | 'dark';
}

export function TrustBar({ locale, variant = 'light' }: TrustBarProps) {
  const stats = [
    {
      value: t(locale, 'trust.clients'),
      label: t(locale, 'trust.clients_label'),
    },
    {
      value: t(locale, 'trust.years'),
      label: t(locale, 'trust.years_label'),
    },
    {
      value: t(locale, 'trust.cities'),
      label: t(locale, 'trust.cities_label'),
    },
    {
      value: t(locale, 'trust.confidential'),
      label: t(locale, 'trust.confidential_label'),
    },
  ];

  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 border-y ${
        isDark
          ? 'bg-[hsl(220,45%,12%)] border-[hsl(220,35%,20%)]'
          : 'bg-white border-[hsl(42,15%,88%)]'
      }`}
      aria-label="Chiffres clés Bosphoras"
    >
      <div className="container-editorial">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center lg:border-r last:border-r-0 lg:pr-4 ${
                isDark
                  ? 'border-[hsl(220,35%,20%)]'
                  : 'border-[hsl(42,15%,88%)]'
              }`}
            >
              <dt className={`text-4xl md:text-5xl font-serif font-light mb-2 ${
                isDark ? 'text-[hsl(42,65%,60%)]' : 'text-[hsl(42,65%,45%)]'
              }`}>
                {stat.value}
              </dt>
              <dd className={`text-xs tracking-[0.15em] uppercase ${
                isDark ? 'text-[hsl(220,10%,65%)]' : 'text-[hsl(220,10%,55%)]'
              }`}>
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
