import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, WalletCards } from 'lucide-react';
import type { MainPageContent } from '@/data/pages/types';
import { getPublishedProperties, propertyHubPaths } from '@/data/propertyDesk';
import { getLocalePath, siteUrl } from '@/lib/routes';
import { localeDir } from '@/lib/i18n';
import { faqSchema, organizationSchema, breadcrumbSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { PropertyDeskBrowser } from '@/components/PropertyDeskBrowser';

interface PropertyDeskPageProps {
  page: MainPageContent;
}

function copy(locale: MainPageContent['locale']) {
  if (locale === 'fr') {
    return {
      eyebrow: 'Bosphoras Property Desk',
      promise: 'Une sélection privée. Des chiffres lisibles. Une analyse du produit avant la vente.',
      browse: 'Voir la sélection',
      private: 'Décrire mon projet',
      capitalEyebrow: 'Commencer autrement',
      capitalTitle: 'Combien souhaitez-vous engager aujourd’hui ?',
      capitalText:
        'Nous séparons le prix total du capital nécessaire aujourd’hui. Cela permet de comparer les projets selon votre liquidité disponible et les échéanciers réellement proposés par les promoteurs.',
      capitalOptions: ['€25k–€50k', '€50k–€100k', '€100k–€250k', '€250k+'],
      selectionTitle: 'Trois niveaux de sélection',
      selected: 'Selected Investments',
      selectedText: 'Projets retenus pour une logique d’investissement claire, des conditions compréhensibles et un produit cohérent.',
      signature: 'Signature Collection',
      signatureText: 'Résidences et villas dont la localisation, l’usage ou la qualité justifient une lecture patrimoniale premium.',
      privateLabel: 'Private Opportunities',
      privateText: 'Opportunités non exposées publiquement, proposées uniquement lorsqu’elles correspondent réellement au profil du client.',
      technicalTitle: 'Nous regardons aussi ce que les brochures ne montrent pas.',
      technicalText:
        'La façade, les menuiseries, l’isolation, les plans, les parties communes, les équipements, les charges et la maintenance future comptent autant que le lobby et la piscine.',
      technicalCta: 'Comprendre la méthode Bosphoras',
      legal:
        'Bosphoras sélectionne, analyse, met en relation et coordonne. Les prestations réglementées de transaction immobilière, droit, fiscalité, évaluation et expertise sont réalisées ou validées par les professionnels autorisés concernés.',
      faqTitle: 'Questions avant d’investir',
      finalTitle: 'Ne commencez pas par une annonce. Commencez par votre stratégie.',
      finalText:
        'Indiquez-nous votre capital disponible, votre horizon, la ville recherchée et l’usage prévu. Nous vous dirons quelles opportunités méritent réellement d’être étudiées.',
    };
  }
  if (locale === 'ru') {
    return {
      eyebrow: 'Bosphoras Property Desk',
      promise: 'Частная подборка. Понятные цифры. Анализ продукта до продажи.',
      browse: 'Смотреть подборку',
      private: 'Описать мой проект',
      capitalEyebrow: 'Другой способ начать',
      capitalTitle: 'Какой капитал вы хотите вложить сегодня?',
      capitalText:
        'Мы отдельно показываем полную цену и сумму, необходимую сегодня. Так проекты можно сравнивать по доступной ликвидности и реальным графикам рассрочки от застройщиков.',
      capitalOptions: ['€25k–€50k', '€50k–€100k', '€100k–€250k', '€250k+'],
      selectionTitle: 'Три уровня отбора',
      selected: 'Selected Investments',
      selectedText: 'Проекты с понятной инвестиционной логикой, прозрачными условиями и качественным продуктом.',
      signature: 'Signature Collection',
      signatureText: 'Резиденции и виллы, где локация, качество и пользование оправдывают premium-позиционирование.',
      privateLabel: 'Private Opportunities',
      privateText: 'Непубличные возможности, которые предлагаются только при реальном соответствии профилю клиента.',
      technicalTitle: 'Мы смотрим и на то, чего нет в рекламной брошюре.',
      technicalText:
        'Фасад, окна, изоляция, планировки, общие зоны, оборудование, сервисные платежи и будущая эксплуатация важны не меньше бассейна и лобби.',
      technicalCta: 'Метод Bosphoras',
      legal:
        'Bosphoras отбирает, анализирует, знакомит и координирует. Регулируемые услуги по сделке, праву, налогам, оценке и экспертизе выполняют или подтверждают соответствующие уполномоченные специалисты.',
      faqTitle: 'Вопросы до инвестиции',
      finalTitle: 'Начните не с объявления, а со стратегии.',
      finalText:
        'Сообщите доступный капитал, горизонт, город и цель покупки. Мы покажем, какие возможности действительно заслуживают анализа.',
    };
  }
  if (locale === 'ar') {
    return {
      eyebrow: 'Bosphoras Property Desk',
      promise: 'اختيار خاص. أرقام واضحة. تحليل للعقار قبل البيع.',
      browse: 'عرض المجموعة',
      private: 'وصف مشروعي',
      capitalEyebrow: 'ابدأ بطريقة مختلفة',
      capitalTitle: 'كم تريد أن تستثمر اليوم؟',
      capitalText:
        'نفصل بين السعر الإجمالي ورأس المال المطلوب اليوم، حتى يمكن مقارنة المشاريع وفق السيولة المتاحة وخطط الدفع الحقيقية التي يقدمها المطور.',
      capitalOptions: ['€25k–€50k', '€50k–€100k', '€100k–€250k', '€250k+'],
      selectionTitle: 'ثلاثة مستويات للاختيار',
      selected: 'Selected Investments',
      selectedText: 'مشاريع ذات منطق استثماري واضح وشروط مفهومة ومنتج متوازن.',
      signature: 'Signature Collection',
      signatureText: 'إقامات وفلل يبرر موقعها وجودتها واستخدامها قراءة عقارية راقية.',
      privateLabel: 'Private Opportunities',
      privateText: 'فرص غير معروضة علناً، تُقترح فقط عندما تناسب ملف العميل فعلياً.',
      technicalTitle: 'نراجع أيضاً ما لا تظهره كتيبات البيع.',
      technicalText:
        'الواجهة والنوافذ والعزل والمخططات والمناطق المشتركة والتجهيزات والرسوم والصيانة المستقبلية مهمة بقدر اللوبي والمسبح.',
      technicalCta: 'منهج Bosphoras',
      legal:
        'يقوم Bosphoras بالاختيار والتحليل والتعريف والتنسيق. أما أعمال الوساطة المنظمة والقانون والضرائب والتقييم والخبرة فينفذها أو يعتمدها المهنيون المخولون.',
      faqTitle: 'أسئلة قبل الاستثمار',
      finalTitle: 'لا تبدأ بإعلان عقاري. ابدأ باستراتيجيتك.',
      finalText:
        'أخبرنا برأس المال المتاح والمدة والمدينة والهدف من الشراء. سنوضح أي الفرص تستحق الدراسة فعلاً.',
    };
  }
  return {
    eyebrow: 'Bosphoras Property Desk',
    promise: 'A private selection. Clear numbers. Product analysis before the sale.',
    browse: 'View the selection',
    private: 'Describe my project',
    capitalEyebrow: 'Start differently',
    capitalTitle: 'How much capital would you like to deploy today?',
    capitalText:
      'We separate total property value from the capital required today, so projects can be compared by available liquidity and the payment schedules actually offered by developers.',
    capitalOptions: ['€25k–€50k', '€50k–€100k', '€100k–€250k', '€250k+'],
    selectionTitle: 'Three levels of selection',
    selected: 'Selected Investments',
    selectedText: 'Projects retained for a clear investment case, understandable terms and a coherent underlying product.',
    signature: 'Signature Collection',
    signatureText: 'Residences and villas where location, quality or use justify a premium patrimonial reading.',
    privateLabel: 'Private Opportunities',
    privateText: 'Off-market or non-public opportunities presented only when they genuinely fit the client profile.',
    technicalTitle: 'We also look at what sales brochures do not show.',
    technicalText:
      'Façades, windows, insulation, layouts, common areas, equipment, service charges and future maintenance matter as much as the lobby and pool.',
    technicalCta: 'Understand the Bosphoras method',
    legal:
      'Bosphoras selects, analyses, introduces and coordinates. Regulated brokerage, legal, tax, valuation and technical work is performed or validated by the relevant authorised professionals.',
    faqTitle: 'Questions before investing',
    finalTitle: 'Do not start with a listing. Start with your strategy.',
    finalText:
      'Tell us your available capital, time horizon, target city and intended use. We will show you which opportunities genuinely deserve further review.',
  };
}

export function PropertyDeskPage({ page }: PropertyDeskPageProps) {
  const locale = page.locale;
  const c = copy(locale);
  const properties = getPublishedProperties();
  const assessmentHref = getLocalePath(locale, page.cta.href);
  const homeHref = getLocalePath(locale, '/');
  const hubHref = getLocalePath(locale, propertyHubPaths[locale]);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.h1,
    url: `${siteUrl}${hubHref}`,
    numberOfItems: properties.length,
    itemListElement: properties.map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: property.title[locale],
      url: `${siteUrl}${getLocalePath(locale, `${propertyHubPaths[locale]}/${property.slugs[locale].replace(/^\//, '')}`)}`,
    })),
  };

  const breadcrumbName =
    locale === 'fr' ? 'Immobilier Turquie' : locale === 'en' ? 'Property Turkey' : locale === 'ru' ? 'Недвижимость в Турции' : 'عقارات تركيا';
  const homeName = locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : locale === 'ru' ? 'Главная' : 'الرئيسية';

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#fbf7f0] text-[#121826]">
      <Header locale={locale} currentPath={hubHref} />
      <StructuredData data={organizationSchema()} />
      <StructuredData data={itemList} />
      <StructuredData
        data={breadcrumbSchema([
          { name: homeName, url: `${siteUrl}${homeHref}` },
          { name: breadcrumbName, url: `${siteUrl}${hubHref}` },
        ])}
      />
      {page.faqs && <StructuredData data={faqSchema(page.faqs)} />}

      <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[#101827] px-5 pb-20 pt-36 text-white md:px-8 md:pb-28 md:pt-44">
        <div className="absolute inset-0 opacity-[0.16]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 78% 18%, #c9a45d 0, transparent 27%), radial-gradient(circle at 10% 80%, #ffffff 0, transparent 23%)' }} />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d9b972]">{c.eyebrow}</p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[5.6rem]">
            {page.h1}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d9dce1] md:text-xl">{page.shortIntro}</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-9 text-[#e8d8b5]">{c.promise}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#selection" className="inline-flex min-h-[50px] items-center gap-3 bg-[#c9a45d] px-6 py-3 text-sm font-bold uppercase tracking-[0.13em] text-[#101827]">
              {c.browse}<ArrowRight size={17} />
            </a>
            <Link href={assessmentHref} className="inline-flex min-h-[50px] items-center gap-3 border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.13em] text-white hover:border-[#c9a45d] hover:text-[#e8d8b5]">
              {c.private}<ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.capitalEyebrow}</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">{c.capitalTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#4d5865]">{c.capitalText}</p>
          </div>
          <div className="grid gap-px bg-[#d8c7a1] sm:grid-cols-2">
            {c.capitalOptions.map((amount) => (
              <Link
                key={amount}
                href={`${assessmentHref}?subject=property-desk&capital=${encodeURIComponent(amount)}`}
                className="group bg-white p-7 transition hover:bg-[#101827] hover:text-white"
              >
                <WalletCards className="mb-8 text-[#8a6728] group-hover:text-[#d9b972]" size={24} strokeWidth={1.5} />
                <span className="font-serif text-3xl">{amount}</span>
                <span className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728] group-hover:text-[#d9b972]">
                  {c.private}<ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PropertyDeskBrowser locale={locale} properties={properties} />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Bosphoras Selection</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">{c.selectionTitle}</h2>
          <div className="mt-12 grid gap-px bg-[#d8c7a1] lg:grid-cols-3">
            {[
              [c.selected, c.selectedText, CheckCircle2],
              [c.signature, c.signatureText, ShieldCheck],
              [c.privateLabel, c.privateText, Wrench],
            ].map(([title, text, Icon]) => {
              const IconComponent = Icon as typeof CheckCircle2;
              return (
                <article key={title as string} className="bg-white p-8 md:p-10">
                  <IconComponent size={24} strokeWidth={1.5} className="text-[#8a6728]" />
                  <h3 className="mt-8 font-serif text-3xl">{title as string}</h3>
                  <p className="mt-4 text-base leading-7 text-[#58616d]">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="method" className="bg-[#101827] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d9b972]">Bosphoras Technical Notes</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">{c.technicalTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c8ccd3]">{c.technicalText}</p>
            <a href="#editorial" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#d9b972]">
              {c.technicalCta}<ArrowRight size={15} />
            </a>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {page.sections.slice(0, 4).map((section, index) => (
              <article key={section.heading} className="bg-[#131d2c] p-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d9b972]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{section.heading}</h3>
                <p className="mt-4 text-sm leading-7 text-[#b9c0ca]">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="editorial" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          {page.sections.slice(4).map((section) => (
            <article key={section.heading} className="border-t border-[#d8c7a1] py-10 first:border-t-0">
              <h2 className="font-serif text-3xl tracking-[-0.025em] md:text-4xl">{section.heading}</h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-[#4d5865]">{section.body}</p>
              {section.bullets && (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#4d5865]">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#8a6728]" />{bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
          <p className="mt-8 border-l-2 border-[#c9a45d] pl-5 text-sm leading-7 text-[#66707b]">{c.legal}</p>
        </div>
      </section>

      {page.faqs && page.faqs.length > 0 && (
        <section className="border-y border-[#d8c7a1] bg-[#f1e8db] px-5 py-20 md:px-8">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="font-serif text-4xl tracking-[-0.03em] md:text-5xl">{c.faqTitle}</h2>
            <div className="mt-10 divide-y divide-[#cfbea0]">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-2xl leading-snug">{faq.question}</summary>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#4d5865]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#c9a45d] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[#101827] md:text-6xl">{c.finalTitle}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#29313d]">{c.finalText}</p>
          <Link href={assessmentHref} className="mt-9 inline-flex min-h-[52px] items-center gap-3 bg-[#101827] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white">
            {c.private}<ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
