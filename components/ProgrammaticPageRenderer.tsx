import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import type { ProgrammaticPage } from '@/data/programmatic/pages';
import { localeDir } from '@/lib/i18n';
import { getCanonicalUrl } from '@/lib/routes';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';

function labels(locale: ProgrammaticPage['locale']) {
  return {
    answer: locale === 'fr' ? 'Réponse directe' : locale === 'en' ? 'Direct answer' : locale === 'ru' ? 'Краткий ответ' : 'إجابة مباشرة',
    toc: locale === 'fr' ? 'Sommaire' : locale === 'en' ? 'Table of contents' : locale === 'ru' ? 'Содержание' : 'الفهرس',
    market: locale === 'fr' ? 'Pourquoi ce service compte pour ce marché' : locale === 'en' ? 'Why this service matters for this market' : locale === 'ru' ? 'Почему эта услуга важна для рынка' : 'لماذا تهم هذه الخدمة لهذا السوق',
    city: locale === 'fr' ? 'Pourquoi cette ville compte' : locale === 'en' ? 'Why this city matters' : locale === 'ru' ? 'Почему важен этот город' : 'لماذا هذه المدينة مهمة',
    coordinates: locale === 'fr' ? 'Ce que Bosphoras coordonne' : locale === 'en' ? 'What Bosphoras coordinates' : locale === 'ru' ? 'Что координирует Bosphoras' : 'ما ينسقه Bosphoras',
    caution: locale === 'fr' ? 'Prudence et limites' : locale === 'en' ? 'Caution and boundaries' : locale === 'ru' ? 'Осторожность и границы' : 'الحذر والحدود',
    process: locale === 'fr' ? 'Processus en 5 étapes' : locale === 'en' ? 'Process in 5 steps' : locale === 'ru' ? 'Процесс в 5 шагов' : 'العملية في 5 خطوات',
    related: locale === 'fr' ? 'Services liés' : locale === 'en' ? 'Related services' : locale === 'ru' ? 'Связанные услуги' : 'خدمات مرتبطة',
    faq: locale === 'fr' ? 'FAQ' : locale === 'en' ? 'FAQ' : locale === 'ru' ? 'Вопросы' : 'الأسئلة الشائعة',
    cta: locale === 'fr' ? 'Demander un diagnostic privé' : locale === 'en' ? 'Request Private Assessment' : locale === 'ru' ? 'Получить частную консультацию' : 'طلب تقييم خاص',
  };
}

function privateAssessmentPath(locale: ProgrammaticPage['locale']) {
  return locale === 'fr' ? '/private-assessment' : `/${locale}/private-assessment`;
}

function directAnswer(page: ProgrammaticPage) {
  const l = page.locale;
  const service = page.service.name[l];
  const city = page.city.name[l];
  const market = page.market.countryName;
  if (l === 'fr') return `${service} à ${city} pour ${market} demande une coordination structurée : analyse du besoin, vérification des limites, sélection des professionnels et suivi local. Bosphoras agit comme bureau privé, sans remplacer les experts réglementés.`;
  if (l === 'ru') return `${service} в ${city} для ${market} требует структурированной координации: анализ задачи, проверка ограничений, выбор специалистов и локальное сопровождение. Bosphoras действует как частный офис, не заменяя регулируемых экспертов.`;
  if (l === 'ar') return `${service} في ${city} لعملاء ${market} يتطلب تنسيقاً منظماً: تحليل الحاجة، التحقق من الحدود، اختيار المهنيين والمتابعة المحلية. يعمل Bosphoras كمكتب خاص ولا يحل محل الخبراء المنظمين.`;
  return `${service} in ${city} for ${market} requires structured coordination: needs analysis, boundary checks, selected professionals and local follow-up. Bosphoras acts as a private desk without replacing regulated experts.`;
}

function complianceText(page: ProgrammaticPage) {
  const l = page.locale;
  const base = {
    fr: 'Bosphoras coordonne l’accès à des professionnels sélectionnés. Les décisions juridiques, fiscales, médicales, d’assurance, bancaires ou immobilières doivent être confirmées directement avec des professionnels qualifiés.',
    en: 'Bosphoras coordinates access to selected professionals. Legal, tax, medical, insurance, banking and property decisions must be confirmed directly with licensed or qualified professionals.',
    ru: 'Bosphoras координирует доступ к выбранным специалистам. Юридические, налоговые, медицинские, страховые, банковские и имущественные решения должны подтверждаться напрямую с квалифицированными профессионалами.',
    ar: 'ينسق Bosphoras الوصول إلى مهنيين مختارين. القرارات القانونية والضريبية والطبية والتأمينية والمصرفية والعقارية يجب تأكيدها مباشرة مع مهنيين مؤهلين.',
  };
  return base[l];
}

function processSteps(locale: ProgrammaticPage['locale']) {
  if (locale === 'fr') return ['Diagnostic privé', 'Revue des objectifs et documents', 'Coordination des professionnels', 'Visite ou exécution à distance', 'Suivi long terme'];
  if (locale === 'ru') return ['Частная консультация', 'Анализ целей и документов', 'Координация специалистов', 'Визит или дистанционное исполнение', 'Долгосрочное сопровождение'];
  if (locale === 'ar') return ['تقييم خاص', 'مراجعة الأهداف والمستندات', 'تنسيق المهنيين', 'زيارة أو تنفيذ عن بُعد', 'متابعة طويلة الأمد'];
  return ['Private assessment', 'Objective and document review', 'Professional coordination', 'Visit or remote execution', 'Long-term support'];
}

function buildFaqs(page: ProgrammaticPage) {
  const l = page.locale;
  const service = page.service.name[l];
  const city = page.city.name[l];
  const market = page.market.countryName;
  const seeds = page.service.faqSeeds[l].slice(0, 4);
  const generic = {
    fr: [
      { question: `${service} à ${city} convient-il aux clients ${market} ?`, answer: `Oui, si le besoin est structuré et si les limites juridiques, fiscales, médicales ou opérationnelles sont vérifiées selon votre profil.` },
      { question: `Pourquoi choisir ${city} ?`, answer: page.city.positioning[l] },
      { question: 'Bosphoras remplace-t-il les professionnels réglementés ?', answer: complianceText(page) },
    ],
    en: [
      { question: `Is ${service} in ${city} relevant for ${market} clients?`, answer: 'Yes, when the need is structured and the legal, tax, medical or operational boundaries are verified according to the client profile.' },
      { question: `Why choose ${city}?`, answer: page.city.positioning[l] },
      { question: 'Does Bosphoras replace regulated professionals?', answer: complianceText(page) },
    ],
    ru: [
      { question: `${service} в ${city} актуально для ${market}?`, answer: 'Да, если задача структурирована и юридические, налоговые, медицинские или операционные границы проверены по профилю клиента.' },
      { question: `Почему ${city}?`, answer: page.city.positioning[l] },
      { question: 'Bosphoras заменяет регулируемых специалистов?', answer: complianceText(page) },
    ],
    ar: [
      { question: `هل ${service} في ${city} مناسب لعملاء ${market}؟`, answer: 'نعم، إذا كانت الحاجة منظمة وتم التحقق من الحدود القانونية أو الضريبية أو الطبية أو التشغيلية حسب ملف العميل.' },
      { question: `لماذا ${city}؟`, answer: page.city.positioning[l] },
      { question: 'هل يحل Bosphoras محل المهنيين المنظمين؟', answer: complianceText(page) },
    ],
  };
  return [
    ...seeds.map((question) => ({ question, answer: page.service.bosphorasSolution[l] })),
    ...generic[l],
  ].slice(0, 7);
}

export function ProgrammaticPageRenderer({ page }: { page: ProgrammaticPage }) {
  const l = labels(page.locale);
  const locale = page.locale;
  const faqs = buildFaqs(page);
  const canonical = getCanonicalUrl(locale, page.slug);
  const schemas = [
    serviceSchema({ name: page.title, description: page.metaDescription, url: canonical }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Bosphoras', url: getCanonicalUrl(locale, '/') },
      { name: page.service.name[locale], url: canonical },
    ]),
  ];

  return (
    <main className="bg-[#f8f1e7] text-[#101827]" dir={localeDir[locale]}>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]"><MapPin size={15} /> {page.city.name[locale]} · {page.market.countryName}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{page.title.replace(' | Bosphoras', '')}</h1>
            <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_18px_60px_rgba(16,24,39,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">{l.answer}</p>
              <p className="mt-3 text-lg leading-8 text-[#172032]">{directAnswer(page)}</p>
            </div>
            <Link href={privateAssessmentPath(locale)} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">{l.cta}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-6 lg:sticky lg:top-28">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{l.toc}</p>
            {[l.market, l.city, l.coordinates, l.caution, l.process, l.related, l.faq].map((item, index) => <a key={item} href={`#section-${index}`} className="block py-2 text-sm leading-6 text-[#3e4857] hover:text-[#8a6728]">{item}</a>)}
          </aside>

          <article className="space-y-8">
            <section id="section-0" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.market}</h2><p className="mt-5 text-base leading-8 text-[#3e4857]">{page.market.audienceProfile} {page.market.culturalAngle}</p><p className="mt-4 text-base leading-8 text-[#3e4857]">{page.market.taxAngle} {page.market.relocationAngle}</p></section>
            <section id="section-1" className="border border-[#d8c7a1] bg-white p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.city}</h2><p className="mt-5 text-base leading-8 text-[#3e4857]">{page.city.intro[locale]} {page.city.relocationAngle[locale]}</p><p className="mt-4 text-base leading-8 text-[#3e4857]">{page.city.businessAngle[locale]} {page.city.healthAngle[locale]} {page.city.luxuryAngle[locale]}</p></section>
            <section id="section-2" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.coordinates}</h2><p className="mt-5 text-base leading-8 text-[#3e4857]">{page.service.shortDescription[locale]}</p><p className="mt-4 text-base leading-8 text-[#3e4857]">{page.service.userPainPoint[locale]}</p><p className="mt-4 text-base leading-8 text-[#3e4857]">{page.service.bosphorasSolution[locale]}</p></section>
            <section id="section-3" className="border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9"><h2 className="flex items-center gap-3 font-serif text-3xl"><AlertTriangle className="text-[#d2a863]" />{l.caution}</h2><p className="mt-5 text-base leading-8 text-[#d8cfbf]">{complianceText(page)}</p></section>
            <section id="section-4" className="border border-[#d8c7a1] bg-white p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.process}</h2><ul className="mt-6 grid gap-3 md:grid-cols-2">{processSteps(locale).map((step) => <li key={step} className="flex gap-3 text-sm leading-6 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{step}</li>)}</ul></section>
            <section id="section-5" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.related}</h2><div className="mt-6 flex flex-wrap gap-3">{page.service.relatedServices.length ? page.service.relatedServices.map((item) => <span key={item} className="border border-[#d8c7a1] px-4 py-3 text-sm text-[#8a6728]">{item}</span>) : page.city.bestFor[locale].map((item) => <span key={item} className="border border-[#d8c7a1] px-4 py-3 text-sm text-[#8a6728]">{item}</span>)}</div></section>
            <section id="section-6" className="border border-[#d8c7a1] bg-white p-7 md:p-9"><h2 className="font-serif text-3xl text-[#121826]">{l.faq}</h2><div className="mt-6 space-y-5">{faqs.map((faq) => <div key={faq.question} className="border-t border-[#d8c7a1] pt-5"><h3 className="font-serif text-2xl text-[#121826]">{faq.question}</h3><p className="mt-3 text-base leading-8 text-[#3e4857]">{faq.answer}</p></div>)}</div></section>
            <section className="border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9"><h2 className="flex items-center gap-3 font-serif text-3xl"><ShieldCheck className="text-[#d2a863]" />Bosphoras Private Desk</h2><p className="mt-5 text-base leading-8 text-[#d8cfbf]">{page.service.bosphorasSolution[locale]} {page.market.ctaWording}</p><Link href={privateAssessmentPath(locale)} className="mt-7 inline-flex items-center justify-center gap-3 border border-[#d2a863] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#d2a863] transition hover:bg-[#d2a863] hover:text-[#121826]">{l.cta}<ArrowRight size={15} /></Link></section>
          </article>
        </div>
      </section>
    </main>
  );
}
