import Link from 'next/link';
import {
  MapPin, Scale, Building2, Home, TrendingUp, Heart, Star, Briefcase, type LucideProps,
} from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { Service } from '@/data/services';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Scale,
  Building2,
  Home,
  TrendingUp,
  Heart,
  Star,
  Briefcase,
};

interface ServiceCardProps {
  service: Service;
  locale: Locale;
}

export function ServiceCard({ service, locale }: ServiceCardProps) {
  const Icon: LucideIcon = iconMap[service.icon] ?? Briefcase;
  const targetSlug = getSlugForPage(service.pageId, locale) ?? '/';
  const href = getLocalePath(locale, targetSlug);

  return (
    <article className="card-service">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[hsl(42,65%,52%)]/30 group-hover:border-[hsl(42,65%,52%)] transition-colors duration-300">
          <Icon
            size={18}
            strokeWidth={1.5}
            className="text-[hsl(42,65%,45%)] group-hover:text-[hsl(42,65%,38%)] transition-colors duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[hsl(220,45%,12%)] font-serif text-lg mb-2 leading-snug">
            {service.titles[locale]}
          </h3>
          <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed mb-5">
            {service.descriptions[locale]}
          </p>
          <Link
            href={href}
            className="btn-ghost text-xs"
            aria-label={`${t(locale, 'common.learn_more')} — ${service.titles[locale]}`}
          >
            {t(locale, 'common.learn_more')}
            <span className="text-[hsl(42,65%,52%)] ml-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
