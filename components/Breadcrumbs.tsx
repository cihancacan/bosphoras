import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { breadcrumbSchema } from '@/lib/seo';
import { StructuredData } from './StructuredData';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: Locale;
}

export function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  const isRtl = localeDir[locale] === 'rtl';
  const ChevronIcon = isRtl ? ChevronRight : ChevronRight;

  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `${siteUrl}${item.href}`,
  }));

  return (
    <>
      <StructuredData data={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Fil d'Ariane"
        className="py-4"
        dir={localeDir[locale]}
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs tracking-[0.08em]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span
                    className="text-[hsl(220,45%,12%)] font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-[hsl(220,10%,55%)] hover:text-[hsl(42,65%,45%)] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <ChevronIcon
                      size={12}
                      strokeWidth={1.5}
                      className="text-[hsl(42,65%,52%)] flex-shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
