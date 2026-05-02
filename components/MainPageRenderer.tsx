import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { t, localeDir } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import {
  faqSchema,
  serviceSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/seo';
import { siteUrl } from '@/lib/routes';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import { StructuredData } from './StructuredData';
import { BosphorasForm } from './BosphorasForms';
import type { MainPageContent } from '@/data/pages/types';
import { getPage } from '@/data/pages';

interface MainPageRendererProps {
  page: MainPageContent;
}

export function MainPageRenderer({ page }: MainPageRendererProps) {
  const { locale } = page;
  const isRtl = localeDir[locale] === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const isFormPage = page.id === 'private-assessment' || page.id === 'membership-application';

  const breadcrumbHomeName =
    locale === 'fr'
      ? 'Accueil'
      : locale === 'en'
      ? 'Home'
      : locale === 'ru'
      ? 'Главная'
      : 'الرئيسية';

  const breadcrumbItems =
    page.id === 'home'
      ? [{ name: breadcrumbHomeName, href: getLocalePath(locale, '/') }]
      : [
          { name: breadcrumbHomeName, href: getLocalePath(locale, '/') },
          { name: page.h1, href: getLocalePath(locale, page.slug) },
        ];

  const fullUrl = `${siteUrl}${getLocalePath(locale, page.slug)}`;

  const internalLinks = page.internalLinks
    .map((link) => {
      const linked = getPage(locale, link.pageId);
      if (!linked) return null;
      return {
        label: link.label,
        href: getLocalePath(locale, linked.slug),
        intro: linked.shortIntro,
      };
    })
    .filter((l): l is { label: string; href: string; intro: string } => l !== null);

  const ctaHref = page.cta.href.startsWith('http')
    ? page.cta.href
    : getLocalePath(locale, page.cta.href);

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[hsl(45,30%,98%)]">
      <Header locale={locale} currentPath={getLocalePath(locale, page.slug)} />

      <StructuredData data={organizationSchema()} />
      {page.id === 'home' && <StructuredData data={websiteSchema()} />}

      {page.jsonLdType === 'Service' && (
        <StructuredData
          data={serviceSchema({
            name: page.h1,
            description: page.metaDescription,
            url: fullUrl,
          })}
        />
      )}

      {page.faqs && page.faqs.length > 0 && (
        <StructuredData data={faqSchema(page.faqs)} />
      )}

      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[hsl(42,15%,88%)]">
        <div className="container-editorial">
          {page.id !== 'home' && (
            <Breadcrumbs items={breadcrumbItems} locale={locale} />
          )}

          <div className="max-w-4xl mt-6">
            <p className="text-[hsl(42,65%,45%)] text-[0.7rem] tracking-[0.35em] uppercase font-medium mb-6">
              {locale === 'fr' && 'Bosphoras · Bureau Privé'}
              {locale === 'en' && 'Bosphoras · Private Office'}
              {locale === 'ru' && 'Bosphoras · Частный офис'}
              {locale === 'ar' && 'بوسفوراس · مكتب خاص'}
            </p>
            <h1 className="text-[hsl(220,45%,12%)] font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight mb-8">
              {page.h1}
            </h1>
            <p className="text-[hsl(220,15%,30%)] text-lg md:text-xl leading-relaxed max-w-3xl font-light">
              {page.shortIntro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-14">
              {page.sections.map((section, idx) => (
                <article key={idx} className="prose-editorial">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] font-medium">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-8 h-px bg-[hsl(42,65%,52%)]/50" aria-hidden="true" />
                  </div>
                  <h2 className="text-[hsl(220,45%,12%)] font-serif text-2xl md:text-3xl leading-tight tracking-tight mb-5">
                    {section.heading}
                  </h2>
                  <p className="text-[hsl(220,15%,28%)] text-base md:text-lg leading-relaxed mb-5">
                    {section.body}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 mt-4">
                      {section.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className={`flex gap-3 text-[hsl(220,15%,30%)] text-base leading-relaxed ${
                            isRtl ? 'flex-row-reverse text-right' : ''
                          }`}
                        >
                          <span
                            className="text-[hsl(42,65%,52%)] mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[hsl(42,65%,52%)]"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <aside className="lg:col-span-4 space-y-10">
              <div className="bg-[hsl(220,45%,10%)] text-[hsl(45,30%,96%)] p-8">
                <p className="text-[hsl(42,65%,68%)] text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-4">
                  {t(locale, 'common.confidential')}
                </p>
                <h3 className="font-serif text-xl leading-snug mb-4">
                  {locale === 'fr' && 'Un entretien privé avec notre bureau'}
                  {locale === 'en' && 'A private conversation with our office'}
                  {locale === 'ru' && 'Частная беседа с нашим бюро'}
                  {locale === 'ar' && 'محادثة خاصة مع مكتبنا'}
                </h3>
                <p className="text-[hsl(220,10%,72%)] text-sm leading-relaxed mb-6">
                  {locale === 'fr' &&
                    'Échange confidentiel, sans engagement. Nous évaluons votre situation et vous guidons sur les prochaines étapes.'}
                  {locale === 'en' &&
                    'Confidential exchange, with no commitment. We assess your situation and guide you through the next steps.'}
                  {locale === 'ru' &&
                    'Конфиденциальный обмен, без обязательств. Мы оцениваем вашу ситуацию и направляем вас на следующие шаги.'}
                  {locale === 'ar' &&
                    'تبادل سري دون التزام. نقيّم وضعكم ونرشدكم في الخطوات التالية.'}
                </p>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-[hsl(42,65%,68%)] text-xs tracking-[0.2em] uppercase font-semibold hover:text-[hsl(42,65%,78%)] transition-colors duration-200 border-b border-[hsl(42,65%,68%)]/40 pb-1"
                >
                  {page.cta.label}
                  <ArrowIcon size={14} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>

              {internalLinks.length > 0 && (
                <div>
                  <p className="text-[hsl(42,65%,45%)] text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-5">
                    {locale === 'fr' && 'À explorer également'}
                    {locale === 'en' && 'Also worth exploring'}
                    {locale === 'ru' && 'Также рекомендуем'}
                    {locale === 'ar' && 'يستحق الاستكشاف أيضاً'}
                  </p>
                  <ul className="space-y-4">
                    {internalLinks.map((link) => (
                      <li key={link.href} className="border-t border-[hsl(42,15%,88%)] pt-4">
                        <Link
                          href={link.href}
                          className="group block text-[hsl(220,45%,12%)] hover:text-[hsl(42,65%,45%)] transition-colors duration-200"
                        >
                          <span className="font-serif text-lg leading-snug block mb-1">
                            {link.label}
                          </span>
                          <span className="text-[hsl(220,15%,45%)] text-sm leading-relaxed line-clamp-2">
                            {link.intro}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {isFormPage && (
        <BosphorasForm
          locale={locale}
          kind={page.id === 'membership-application' ? 'membership-application' : 'private-assessment'}
        />
      )}

      {page.faqs && page.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-[hsl(45,25%,94%)] border-y border-[hsl(42,15%,86%)]">
          <div className="container-editorial">
            <div className="max-w-3xl mb-12">
              <p className="text-[hsl(42,65%,45%)] text-[0.7rem] tracking-[0.3em] uppercase font-medium mb-4">
                {t(locale, 'faq.title')}
              </p>
              <h2 className="text-[hsl(220,45%,12%)] font-serif text-3xl md:text-4xl leading-tight tracking-tight">
                {locale === 'fr' && 'Questions fréquentes'}
                {locale === 'en' && 'Frequently asked questions'}
                {locale === 'ru' && 'Часто задаваемые вопросы'}
                {locale === 'ar' && 'الأسئلة الشائعة'}
              </h2>
            </div>
            <div className="max-w-3xl divide-y divide-[hsl(42,15%,82%)]">
              {page.faqs.map((faq, idx) => (
                <details key={idx} className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="font-serif text-lg md:text-xl text-[hsl(220,45%,12%)] leading-snug">
                      {faq.question}
                    </h3>
                    <span
                      className="text-[hsl(42,65%,45%)] text-2xl leading-none mt-1 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[hsl(220,15%,28%)] text-base leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 md:py-32 bg-[hsl(220,45%,10%)]">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <div className="w-12 h-px bg-[hsl(42,65%,52%)] mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-[hsl(45,30%,96%)] font-serif text-3xl md:text-5xl leading-tight tracking-tight mb-6">
            {locale === 'fr' && 'Un échange confidentiel pour commencer.'}
            {locale === 'en' && 'Begin with a confidential conversation.'}
            {locale === 'ru' && 'Начнём с конфиденциальной беседы.'}
            {locale === 'ar' && 'لنبدأ بمحادثة سرية.'}
          </h2>
          <p className="text-[hsl(220,10%,72%)] text-base md:text-lg leading-relaxed max-w-prose mx-auto mb-10">
            {locale === 'fr' &&
              "Partagez votre situation avec notre équipe. Nous évaluons les meilleures options selon vos priorités, en toute discrétion."}
            {locale === 'en' &&
              'Share your situation with our team. We assess the best options according to your priorities, in complete discretion.'}
            {locale === 'ru' &&
              'Поделитесь своей ситуацией с нашей командой. Мы оцениваем лучшие варианты в соответствии с вашими приоритетами — с полной конфиденциальностью.'}
            {locale === 'ar' &&
              'شاركوا وضعكم مع فريقنا. نُقيّم أفضل الخيارات وفقاً لأولوياتكم، بسرية تامة.'}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-10 py-4 bg-[hsl(42,65%,52%)] text-[hsl(220,45%,8%)] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[hsl(42,65%,62%)] transition-all duration-300"
          >
            {page.cta.label}
            <ArrowIcon size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <p className="text-[hsl(220,10%,45%)] text-xs tracking-[0.25em] uppercase mt-10">
            {t(locale, 'common.confidential')}
          </p>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
