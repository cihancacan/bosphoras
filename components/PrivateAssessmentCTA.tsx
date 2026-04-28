import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface PrivateAssessmentCTAProps {
  locale: Locale;
  compact?: boolean;
}

export function PrivateAssessmentCTA({ locale, compact = false }: PrivateAssessmentCTAProps) {
  if (compact) {
    return (
      <aside className="border border-[hsl(42,65%,52%)]/30 p-6 bg-white">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center border border-[hsl(42,65%,52%)]/40 flex-shrink-0 mt-0.5">
            <Lock size={14} strokeWidth={1.5} className="text-[hsl(42,65%,45%)]" />
          </div>
          <div>
            <p className="text-[hsl(220,45%,12%)] font-serif text-base mb-1">
              {t(locale, 'assessment.title').split('\n').join(' ')}
            </p>
            <p className="text-[hsl(220,10%,55%)] text-sm mb-4 leading-relaxed">
              {t(locale, 'assessment.subtitle')}
            </p>
            <Link
              href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')}
              className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[hsl(42,65%,45%)] hover:text-[hsl(42,65%,35%)] font-medium transition-colors duration-200"
            >
              {t(locale, 'assessment.cta')}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <section className="py-20 bg-white border-y border-[hsl(42,15%,88%)]" aria-labelledby="assessment-cta-heading">
      <div className="container-editorial">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-10 h-10 flex items-center justify-center border border-[hsl(42,65%,52%)]/40 mb-6">
              <Lock size={18} strokeWidth={1.5} className="text-[hsl(42,65%,45%)]" />
            </div>
            <p className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              {t(locale, 'common.confidential')}
            </p>
            <h2
              id="assessment-cta-heading"
              className="font-serif text-3xl md:text-4xl text-[hsl(220,45%,12%)] leading-tight mb-4"
            >
              {t(locale, 'assessment.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-[hsl(220,10%,50%)] leading-relaxed">
              {t(locale, 'assessment.subtitle')}
            </p>
          </div>

          <div className="bg-[hsl(45,30%,96%)] p-8 border border-[hsl(42,15%,88%)]">
            <ul className="space-y-4 mb-8">
              {[
                locale === 'fr' ? 'Entretien confidentiel sans engagement' : locale === 'en' ? 'Confidential consultation, no commitment' : locale === 'ru' ? 'Конфиденциальная консультация без обязательств' : 'استشارة سرية بدون التزام',
                locale === 'fr' ? 'Analyse personnalisée de votre situation' : locale === 'en' ? 'Personalised analysis of your situation' : locale === 'ru' ? 'Персонализированный анализ вашей ситуации' : 'تحليل مخصص لوضعكم',
                locale === 'fr' ? 'Recommandations sur mesure' : locale === 'en' ? 'Bespoke recommendations' : locale === 'ru' ? 'Индивидуальные рекомендации' : 'توصيات مخصصة',
                locale === 'fr' ? 'Réseau de partenaires qualifiés' : locale === 'en' ? 'Network of qualified partners' : locale === 'ru' ? 'Сеть квалифицированных партнёров' : 'شبكة من الشركاء المؤهلين',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[hsl(220,15%,35%)]">
                  <span className="text-[hsl(42,65%,52%)] mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')}
              className="btn-primary w-full justify-center"
            >
              {t(locale, 'assessment.cta')}
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
