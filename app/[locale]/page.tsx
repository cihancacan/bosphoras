import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { buildMetadata, organizationSchema, faqSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NotRealEstate } from '@/components/NotRealEstate';
import { TrustBar } from '@/components/TrustBar';
import { ServiceCard } from '@/components/ServiceCard';
import { CityCard } from '@/components/CityCard';
import { MembershipCardPreview } from '@/components/MembershipCardPreview';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { PrivateAssessmentCTA } from '@/components/PrivateAssessmentCTA';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { faqs } from '@/data/faqs';
import { t } from '@/lib/i18n';

const homeMeta: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: 'Bosphoras — Votre Bureau Privé en Turquie',
    description:
      "Un appel. Un interlocuteur de confiance. Toute la Turquie. Bosphoras coordonne juridique, fiscal, entreprise, santé, immobilier, transport et accès privé à Istanbul, Bodrum et Antalya — avec discrétion.",
  },
  en: {
    title: 'Bosphoras — Your Private Desk in Turkey',
    description:
      'One call. One trusted desk. Everything Turkey. Bosphoras quietly coordinates legal, tax, business, healthcare, insurance, property, transport and private access in Istanbul, Bodrum and Antalya.',
  },
  ru: {
    title: 'Bosphoras — Ваш частный офис в Турции',
    description:
      'Один звонок. Один доверенный офис. Вся Турция. Bosphoras конфиденциально координирует юридические, налоговые, корпоративные и медицинские вопросы, недвижимость и частный доступ в Стамбуле, Бодруме и Анталье.',
  },
  ar: {
    title: 'بوسفوراس — مكتبكم الخاص في تركيا',
    description:
      'مكالمة واحدة. مكتب موثوق واحد. تركيا بأكملها. تنسّق بوسفوراس بسرية الشؤون القانونية والضريبية وتأسيس الشركات والرعاية الصحية والعقارات والوصول الخاص في إسطنبول وبودروم وأنطاليا.',
  },
};

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return locales
    .filter((l) => l !== 'fr')
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) return {};

  const meta = homeMeta[locale];
  return buildMetadata({
    locale,
    path: '/',
    title: meta.title,
    description: meta.description,
  });
}

export default function LocaleHomePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!locales.includes(locale) || locale === 'fr') notFound();

  const homeFaqs = faqs.slice(0, 5);

  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={faqSchema(homeFaqs.map((f) => ({ question: f.questions[locale], answer: f.answers[locale] })))} />

      <Header locale={locale} currentPath="/" />

      <main>
        <HeroSection locale={locale} />

        <NotRealEstate locale={locale} />

        <TrustBar locale={locale} />

        <section className="py-24 md:py-32 bg-[hsl(45,30%,96%)]" aria-labelledby="services-heading">
          <div className="container-editorial">
            <header className="mb-14 max-w-2xl">
              <p className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                {t(locale, 'nav.services')}
              </p>
              <h2
                id="services-heading"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(220,45%,12%)] leading-tight mb-4"
              >
                {t(locale, 'services.title').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-[hsl(220,10%,50%)] text-base md:text-lg leading-relaxed">
                {t(locale, 'services.subtitle')}
              </p>
            </header>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-[hsl(42,15%,88%)]">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white" aria-labelledby="cities-heading">
          <div className="container-editorial">
            <header className="mb-14 max-w-2xl">
              <p className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                {t(locale, 'nav.cities')}
              </p>
              <h2
                id="cities-heading"
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(220,45%,12%)] leading-tight mb-4"
              >
                {t(locale, 'cities.title')}
              </h2>
              <p className="text-[hsl(220,10%,50%)] text-base md:text-lg leading-relaxed">
                {t(locale, 'cities.subtitle')}
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <CityCard key={city.id} city={city} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        <MembershipCardPreview locale={locale} />

        <PrivateAssessmentCTA locale={locale} />

        <FAQSection faqs={homeFaqs} locale={locale} />

        <CTASection locale={locale} variant="dark" />
      </main>

      <Footer locale={locale} />
    </>
  );
}
