import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface MembershipCardPreviewProps {
  locale: Locale;
}

export function MembershipCardPreview({ locale }: MembershipCardPreviewProps) {
  const features = t(locale, 'membership.features').split(' · ');

  return (
    <section className="py-24 md:py-32 bg-[hsl(220,45%,12%)]" aria-labelledby="membership-heading">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-[hsl(42,65%,52%)] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              {locale === 'fr' ? 'Cercle Privé' : locale === 'en' ? 'Private Circle' : locale === 'ru' ? 'Частный Круг' : 'الدائرة الخاصة'}
            </p>
            <h2
              id="membership-heading"
              className="font-serif text-4xl md:text-5xl text-[hsl(45,30%,96%)] leading-tight mb-6"
            >
              {t(locale, 'membership.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-[hsl(220,10%,65%)] text-base md:text-lg leading-relaxed mb-8">
              {t(locale, 'membership.subtitle')}
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[hsl(220,10%,75%)]">
                  <span className="w-4 h-px bg-[hsl(42,65%,52%)] flex-shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={getLocalePath(locale, getSlugForPage('membership-card', locale) ?? '/')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[hsl(42,65%,52%)] text-[hsl(42,65%,60%)] text-sm tracking-[0.12em] uppercase font-medium hover:bg-[hsl(42,65%,52%)] hover:text-[hsl(220,45%,8%)] transition-all duration-300"
            >
              {t(locale, 'membership.cta')}
            </Link>

            <p className="mt-6 text-[hsl(220,10%,55%)] text-xs leading-relaxed max-w-md">
              {locale === 'fr'
                ? "Carte de membre privée. Ce n'est ni une carte bancaire ni un moyen de paiement."
                : locale === 'en'
                ? 'Private members card. Not a bank card. Not a payment instrument.'
                : locale === 'ru'
                ? 'Частная карта члена клуба. Не банковская карта. Не платёжный инструмент.'
                : 'بطاقة عضوية خاصة. ليست بطاقة بنكية ولا أداة دفع.'}
            </p>
          </div>

          {/* Membership card visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[hsl(220,35%,18%)] to-[hsl(220,45%,10%)] border border-[hsl(220,35%,25%)] p-10 shadow-luxury">
              {/* Card decoration */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/60 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/30 to-transparent" aria-hidden="true" />

              <div className="flex items-start justify-between mb-10">
                <div>
                  <p className="text-[hsl(42,65%,52%)] text-xs tracking-[0.3em] uppercase font-medium">
                    Bosphoras
                  </p>
                  <p className="text-[hsl(220,10%,60%)] text-xs tracking-[0.2em] uppercase mt-1">
                    {locale === 'fr' ? 'Membre Privé' : locale === 'en' ? 'Private Member' : locale === 'ru' ? 'Частный Участник' : 'عضو خاص'}
                  </p>
                </div>
                <div className="w-10 h-10 border border-[hsl(42,65%,52%)]/40 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[hsl(42,65%,52%)] to-[hsl(38,70%,38%)]" aria-hidden="true" />
                </div>
              </div>

              <div className="mb-10">
                <p className="text-[hsl(45,30%,96%)] font-serif text-2xl tracking-[0.05em] mb-1">
                  ████ ████ ████
                </p>
                <p className="text-[hsl(220,10%,50%)] text-xs tracking-[0.15em] uppercase">
                  {locale === 'fr' ? 'Numéro de membre' : locale === 'en' ? 'Member number' : locale === 'ru' ? 'Номер члена' : 'رقم العضوية'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[hsl(220,35%,22%)]">
                {[
                  {
                    label: locale === 'fr' ? 'Depuis' : locale === 'en' ? 'Since' : locale === 'ru' ? 'С' : 'منذ',
                    value: '2025',
                  },
                  {
                    label: locale === 'fr' ? 'Statut' : locale === 'en' ? 'Status' : locale === 'ru' ? 'Статус' : 'الحالة',
                    value: locale === 'fr' ? 'Actif' : locale === 'en' ? 'Active' : locale === 'ru' ? 'Активен' : 'نشط',
                  },
                  {
                    label: locale === 'fr' ? 'Accès' : locale === 'en' ? 'Access' : locale === 'ru' ? 'Доступ' : 'الوصول',
                    value: locale === 'fr' ? 'Prioritaire' : locale === 'en' ? 'Priority' : locale === 'ru' ? 'Приоритет' : 'أولوية',
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[hsl(220,10%,50%)] text-[0.6rem] tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-[hsl(45,30%,90%)] text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadow card behind */}
            <div
              className="absolute -bottom-3 -right-3 inset-0 border border-[hsl(42,65%,52%)]/20 -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
