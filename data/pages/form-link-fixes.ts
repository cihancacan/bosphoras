import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

const formTargets: Record<Locale, { assessment: string; membership: string }> = {
  fr: { assessment: '/diagnostic-prive', membership: '/adhesion/demande-membre' },
  en: { assessment: '/private-assessment', membership: '/membership/application' },
  ru: { assessment: '/chastnaya-konsultatsiya', membership: '/chlenstvo/zayavka' },
  ar: { assessment: '/تقييم-خاص', membership: '/عضوية/طلب' },
};

function fixHref(locale: Locale, href?: string): string | undefined {
  if (!href) return href;

  const targets = formTargets[locale];

  const assessmentAliases = new Set([
    '/diagnostic-prive',
    '/private-assessment',
    '/chastnaya-konsultatsiya',
    '/تقييم-خاص',
    '/contact',
  ]);

  const membershipAliases = new Set([
    '/adhesion/demande-membre',
    '/membership/application',
    '/chlenstvo/zayavka',
    '/عضوية/طلب',
  ]);

  if (assessmentAliases.has(href)) return targets.assessment;
  if (membershipAliases.has(href)) return targets.membership;

  return href;
}

export function fixLocalizedFormLinks(locale: Locale, pages: MainPageContent[]): MainPageContent[] {
  return pages.map((page) => ({
    ...page,
    cta: {
      ...page.cta,
      href: fixHref(locale, page.cta.href) ?? page.cta.href,
      secondaryHref: fixHref(locale, page.cta.secondaryHref),
    },
  }));
}
