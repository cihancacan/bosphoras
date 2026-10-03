import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Globe2, MapPin, ShieldCheck, WalletCards, Wrench } from 'lucide-react';
import type { MainPageContent } from '@/data/pages/types';
import { formatEntryCapital, formatPropertyPrice, getPropertyPath, paymentBadge, propertyHubPaths } from '@/data/propertyDesk';
import { fetchPublishedProperties } from '@/lib/propertyStore';
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
  if (locale === 'fr') return {
    label: 'BOSPHORAS PROPERTY DESK',
    heroTitle: 'Investir dans l’immobilier en Turquie, sans lire entre les lignes.',
    heroText: 'Une sélection courte de biens et projets avec prix, capital à mobiliser aujourd’hui, plan promoteur, qualité du produit et points de vigilance.',
    browse: 'Explorer les opportunités',
    private: 'Recherche privée',
    live: 'Opportunités actives',
    markets: 'Marchés suivis',
    entry: 'Capital d’entrée',
    featured: 'Opportunité à la une',
    featuredCta: 'Ouvrir le dossier',
    verified: 'Lecture structurée',
    verifiedText: 'Prix, apport, échéancier et informations techniques dans un même dossier.',
    payment: 'Conditions promoteur',
    paymentText: '0 %, taux, surcoût ou remise comptant affichés lorsqu’ils sont réellement renseignés.',
    selection: 'Sélection Bosphoras',
    selectionText: 'Nous privilégions un inventaire lisible et défendable plutôt qu’un catalogue interminable.',
    methodEyebrow: 'NOTRE MÉTHODE',
    methodTitle: 'Un achat immobilier traité comme un dossier d’investissement.',
    methodText: 'Sélection, lecture financière, revue technique, coordination de l’acquisition et suivi du dossier dans un même environnement.',
    selected: 'Sélection & comparaison',
    selectedText: 'Nous comparons le produit, le prix, le capital nécessaire et les conditions de paiement.',
    technical: 'Revue technique',
    technicalText: 'Plans, matériaux, livraison, maintenance, prestations et cohérence du prix avec le produit.',
    acquisition: 'Exécution coordonnée',
    acquisitionText: 'Avocat, partenaire immobilier autorisé, banque, évaluation, fiscalité et relocation selon le dossier.',
    capitalEyebrow: 'ACCÈS PAR CAPITAL',
    capitalTitle: 'Commencez par le capital que vous souhaitez engager aujourd’hui.',
    capitalText: 'Le prix total ne dit pas toujours combien il faut mobiliser au départ. Nous utilisons le capital disponible pour identifier les projets réellement accessibles.',
    capitalOptions: ['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology: 'Due diligence & méthode',
    faqTitle: 'Questions fréquentes',
    finalEyebrow: 'PRIVATE SEARCH',
    finalTitle: 'Vous avez un budget, un horizon et un objectif. Nous cherchons le bien qui correspond au dossier.',
    finalText: 'Indiquez votre capital disponible, la ville, l’usage et le délai. Bosphoras peut ensuite structurer une recherche privée et les vérifications nécessaires.',
    noFeatured: 'Nouvelle sélection en préparation',
    paymentPlan: 'Plan promoteur',
  };
  if (locale === 'ru') return {
    label: 'BOSPHORAS PROPERTY DESK',
    heroTitle: 'Инвестиции в недвижимость Турции без скрытых деталей.',
    heroText: 'Короткая подборка объектов с ценой, капиталом сегодня, условиями застройщика, качеством продукта и ключевыми рисками.',
    browse: 'Смотреть объекты', private: 'Частный поиск',
    live: 'Активные объекты', markets: 'Рынки', entry: 'Стартовый капитал',
    featured: 'Объект недели', featuredCta: 'Открыть досье',
    verified:'Структурированный анализ',verifiedText:'Цена, первый взнос, график и технические данные в одном досье.',
    payment:'Условия застройщика',paymentText:'0%, ставка, удорожание или скидка за наличные показываются только при наличии данных.',
    selection:'Отбор Bosphoras',selectionText:'Понятный отобранный инвентарь вместо бесконечного каталога.',
    methodEyebrow:'НАШ МЕТОД',methodTitle:'Покупка недвижимости как инвестиционный проект.',
    methodText:'Отбор, финансовый анализ, техническая проверка, координация сделки и сопровождение в одном процессе.',
    selected:'Отбор и сравнение',selectedText:'Сравниваем продукт, цену, необходимый капитал и условия оплаты.',
    technical:'Техническая проверка',technicalText:'Планы, материалы, сроки, обслуживание, комплектация и соответствие цены продукту.',
    acquisition:'Координация сделки',acquisitionText:'Юрист, лицензированный партнёр, банк, оценка, налоги и relocation по ситуации.',
    capitalEyebrow:'ВХОД ПО КАПИТАЛУ',capitalTitle:'Начните с капитала, который готовы вложить сегодня.',
    capitalText:'Полная цена не всегда показывает реальный первый взнос. Мы начинаем с доступной ликвидности.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'Due diligence и метод',faqTitle:'Частые вопросы',
    finalEyebrow:'PRIVATE SEARCH',finalTitle:'У вас есть бюджет, срок и цель. Мы подбираем объект под задачу.',
    finalText:'Укажите капитал, город, использование и срок — Bosphoras организует частный поиск и проверки.',
    noFeatured:'Новая подборка готовится',paymentPlan:'План застройщика',
  };
  if (locale === 'ar') return {
    label:'BOSPHORAS PROPERTY DESK',
    heroTitle:'الاستثمار العقاري في تركيا بدون تفاصيل مخفية.',
    heroText:'مجموعة مختارة من العقارات مع السعر ورأس المال المطلوب اليوم وخطة المطور وجودة المنتج ونقاط الحذر.',
    browse:'استعراض الفرص',private:'بحث خاص',
    live:'فرص نشطة',markets:'أسواق',entry:'رأس المال المبدئي',
    featured:'فرصة مميزة',featuredCta:'فتح الملف',
    verified:'قراءة منظمة',verifiedText:'السعر والدفعة الأولى وخطة الدفع والمعلومات الفنية في ملف واحد.',
    payment:'شروط المطور',paymentText:'0٪ أو معدل أو تكلفة إضافية أو خصم نقدي تظهر فقط عند توفر معلومات مؤكدة.',
    selection:'اختيار Bosphoras',selectionText:'مخزون مختار وواضح بدلاً من كتالوج لا ينتهي.',
    methodEyebrow:'منهجنا',methodTitle:'شراء العقار كملف استثماري.',
    methodText:'اختيار وتحليل مالي ومراجعة فنية وتنسيق عملية الشراء والمتابعة ضمن مسار واحد.',
    selected:'اختيار ومقارنة',selectedText:'نقارن المنتج والسعر ورأس المال المطلوب وشروط الدفع.',
    technical:'مراجعة فنية',technicalText:'المخططات والمواد والتسليم والصيانة والخدمات ومدى تناسب السعر مع المنتج.',
    acquisition:'تنفيذ منسق',acquisitionText:'محامٍ وشريك عقاري مرخص وبنك وتقييم وضرائب وانتقال حسب الملف.',
    capitalEyebrow:'الدخول حسب رأس المال',capitalTitle:'ابدأ بالمبلغ الذي تريد استثماره اليوم.',
    capitalText:'السعر الإجمالي لا يوضح دائماً المبلغ المطلوب في البداية، لذلك نبدأ بالسيولة المتاحة.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'الفحص والمنهج',faqTitle:'الأسئلة الشائعة',
    finalEyebrow:'PRIVATE SEARCH',finalTitle:'لديك ميزانية ومدة وهدف. نبحث عن العقار المناسب للملف.',
    finalText:'أخبرنا برأس المال والمدينة والاستخدام والمدة، ثم ننظم البحث الخاص والتحقق.',
    noFeatured:'يتم إعداد مجموعة جديدة',paymentPlan:'خطة المطور',
  };
  return {
    label:'BOSPHORAS PROPERTY DESK',
    heroTitle:'Property investment in Turkey, without the fine print.',
    heroText:'A concise selection of properties with price, capital required today, developer terms, product quality and watchpoints.',
    browse:'Explore opportunities',private:'Private search',
    live:'Active opportunities',markets:'Markets covered',entry:'Entry capital',
    featured:'Featured opportunity',featuredCta:'Open the investment file',
    verified:'Structured review',verifiedText:'Price, entry capital, payment schedule and technical data in one file.',
    payment:'Developer terms',paymentText:'0%, rate, premium or cash discount shown only when actually documented.',
    selection:'Bosphoras selection',selectionText:'A readable, defensible inventory rather than an endless catalogue.',
    methodEyebrow:'OUR METHOD',methodTitle:'Property acquisition treated as an investment file.',
    methodText:'Selection, financial review, technical reading, acquisition coordination and follow-up in one process.',
    selected:'Selection & comparison',selectedText:'We compare the product, price, entry capital and payment conditions.',
    technical:'Technical review',technicalText:'Layouts, materials, delivery, maintenance, amenities and price-to-product coherence.',
    acquisition:'Coordinated execution',acquisitionText:'Lawyer, authorised property partner, bank, valuation, tax and relocation as required.',
    capitalEyebrow:'ACCESS BY CAPITAL',capitalTitle:'Start with the capital you want to deploy today.',
    capitalText:'The headline price does not always show the cash required at entry. We start from available liquidity.',
    capitalOptions:['€25k–€50k','€50k–€100k','€100k–€250k','€250k+'],
    methodology:'Due diligence & method',faqTitle:'Frequently asked questions',
    finalEyebrow:'PRIVATE SEARCH',finalTitle:'You have a budget, horizon and objective. We find the property that fits the file.',
    finalText:'Share your available capital, target city, use and timing. Bosphoras can structure a private search and the required checks.',
    noFeatured:'A new selection is being prepared',paymentPlan:'Developer plan',
  };
}

function minEntry(properties: Awaited<ReturnType<typeof fetchPublishedProperties>>) {
  const values=properties.map((property)=>property.entryCapital).filter((value): value is number=>typeof value==='number'&&value>0);
  return values.length?Math.min(...values):null;
}

export async function PropertyDeskPage({ page }: PropertyDeskPageProps) {
  const locale=page.locale;
  const c=copy(locale);
  const allProperties=await fetchPublishedProperties();
  const properties=allProperties.filter((property)=>!property.countryCode || property.countryCode==='TR');
  const featured=properties.find((property)=>property.featured)||properties[0];
  const markets=new Set(properties.map((property)=>property.cityName||property.city).filter(Boolean));
  const entry=minEntry(properties);
  const assessmentHref=getLocalePath(locale,page.cta.href);
  const homeHref=getLocalePath(locale,'/');
  const hubHref=getLocalePath(locale,propertyHubPaths[locale]);
  const featuredHref=featured?getLocalePath(locale,getPropertyPath(locale,featured)):assessmentHref;
  const itemList={
    '@context':'https://schema.org',
    '@type':'ItemList',
    name:page.h1,
    url:siteUrl+hubHref,
    numberOfItems:properties.length,
    itemListElement:properties.map((property,index)=>({
      '@type':'ListItem',
      position:index+1,
      name:property.title[locale],
      url:siteUrl+getLocalePath(locale,getPropertyPath(locale,property)),
    })),
  };
  const breadcrumbName=locale==='fr'?'Immobilier Turquie':locale==='en'?'Property Turkey':locale==='ru'?'Недвижимость в Турции':'عقارات تركيا';
  const homeName=locale==='fr'?'Accueil':locale==='en'?'Home':locale==='ru'?'Главная':'الرئيسية';
  const formatter=new Intl.NumberFormat(locale==='fr'?'fr-FR':locale==='ru'?'ru-RU':locale==='ar'?'ar':'en-GB',{style:'currency',currency:featured?.currency||'EUR',maximumFractionDigits:0});

  return (
    <main dir={localeDir[locale]} className="min-h-screen bg-[#f4f5f2] text-[#10211d] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <Header locale={locale} currentPath={hubHref}/>
      <StructuredData data={organizationSchema()}/>
      <StructuredData data={itemList}/>
      <StructuredData data={breadcrumbSchema([{name:homeName,url:siteUrl+homeHref},{name:breadcrumbName,url:siteUrl+hubHref}])}/>
      {page.faqs?<StructuredData data={faqSchema(page.faqs)}/>:null}

      <section className="border-b border-[#d8d3c9] bg-[#fbfaf6] px-4 pb-6 pt-24 sm:px-6 sm:pb-7 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#58786d]"><span>{c.label}</span><span className="h-px w-10 bg-[#9baa9f]"/><span>{properties.length} {c.live.toLowerCase()}</span></div>
              <h1 className="mt-4 max-w-5xl font-serif text-[clamp(2.55rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.05em] text-[#17201d]">{c.heroTitle}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#68716c] sm:text-base">{c.heroText}</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <Link href={assessmentHref} className="inline-flex min-h-[46px] items-center gap-2 border border-[#244b3f] px-5 text-sm font-semibold text-[#244b3f]">{c.private}<ArrowRight size={14}/></Link>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 border-t border-[#e0dbd1] pt-4 text-xs text-[#717973]">
            <span><strong className="text-[#28312e]">{properties.length}</strong> {c.live.toLowerCase()}</span>
            <span><strong className="text-[#28312e]">{markets.size||1}</strong> {c.markets.toLowerCase()}</span>
            {entry?<span>{c.entry}: <strong className="text-[#315f52]">{new Intl.NumberFormat(locale==='fr'?'fr-FR':'en-GB',{style:'currency',currency:featured?.currency||'EUR',maximumFractionDigits:0,notation:'compact'}).format(entry)}</strong></span>:null}
          </div>
        </div>
      </section>

      <PropertyDeskBrowser locale={locale} properties={properties}/>

      <section className="bg-[#0f211c] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1540px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#d2b27c]">{c.methodEyebrow}</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl">{c.methodTitle}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#adbfba]">{c.methodText}</p>
              <Link href={assessmentHref} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#dfc793]">{c.private}<ArrowRight size={15}/></Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [CheckCircle2,'01',c.selected,c.selectedText],
                [Wrench,'02',c.technical,c.technicalText],
                [Globe2,'03',c.acquisition,c.acquisitionText],
              ].map(([Icon,num,title,text])=>{const I=Icon as typeof CheckCircle2;return <article key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-7"><div className="flex items-center justify-between"><I size={20} className="text-[#d2b27c]"/><span className="text-xs font-semibold text-[#657b73]">{num as string}</span></div><h3 className="mt-16 text-xl font-semibold tracking-[-0.025em]">{title as string}</h3><p className="mt-3 text-sm leading-7 text-[#9fb1ab]">{text as string}</p></article>;})}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7dfdc] bg-[#e9eeeb] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#87683c]">{c.capitalEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-5xl">{c.capitalTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#65736e]">{c.capitalText}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {c.capitalOptions.map((amount)=><Link key={amount} href={assessmentHref+'?subject=property-desk&capital='+encodeURIComponent(amount)} className="group rounded-2xl border border-[#c9d4cf] bg-white p-5 transition hover:-translate-y-1 hover:border-[#a48758] hover:shadow-[0_18px_50px_rgba(20,40,36,.08)]"><WalletCards size={18} className="text-[#87683c]"/><strong className="mt-9 block text-xl tracking-[-0.03em]">{amount}</strong><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#315d55]">{c.private}<ArrowRight size={13} className="transition group-hover:translate-x-1"/></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f2] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#87683c]">{c.methodology}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{page.h1}</h2></div>
            <Link href={assessmentHref} className="hidden items-center gap-2 text-sm font-semibold text-[#315d55] sm:inline-flex">{c.private}<ArrowRight size={14}/></Link>
          </div>
          <div className="mt-7 divide-y divide-[#d7dfdc] overflow-hidden rounded-3xl border border-[#d7dfdc] bg-white px-6 md:px-8">
            {page.sections.map((section)=><details key={section.heading} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold tracking-[-0.02em] md:text-xl"><span>{section.heading}</span><span className="text-[#87683c] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-4xl text-sm leading-7 text-[#65756f]">{section.body}</p>{section.bullets?<ul className="mt-5 grid gap-2 md:grid-cols-2">{section.bullets.map((bullet)=><li key={bullet} className="flex gap-2 text-sm leading-6 text-[#5d6d68]"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#2f6d59]"/>{bullet}</li>)}</ul>:null}</details>)}
          </div>
        </div>
      </section>

      {page.faqs?.length?<section className="border-t border-[#d7dfdc] bg-white px-5 py-16 md:px-8"><div className="mx-auto max-w-[1050px]"><h2 className="text-3xl font-semibold tracking-[-0.04em]">{c.faqTitle}</h2><div className="mt-6 divide-y divide-[#d7dfdc]">{page.faqs.map((faq)=><details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold"><span>{faq.question}</span><span className="text-[#87683c] transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-4xl text-sm leading-7 text-[#65756f]">{faq.answer}</p></details>)}</div></div></section>:null}

      <section className="bg-[#091713] px-5 py-20 text-white md:px-8 md:py-24"><div className="mx-auto max-w-[1050px] text-center"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#d2b27c]">{c.finalEyebrow}</p><h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-6xl">{c.finalTitle}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#adbfba]">{c.finalText}</p><Link href={assessmentHref} className="mt-9 inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-[#d2b27c] px-7 text-sm font-semibold text-[#0c1d19]">{c.private}<ArrowRight size={16}/></Link></div></section>

      <Footer locale={locale}/>
    </main>
  );
}
