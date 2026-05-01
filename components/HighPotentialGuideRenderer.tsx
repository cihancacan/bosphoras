import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import type { HighPotentialGuide } from '@/data/highPotentialPages';
import { localeDir } from '@/lib/i18n';
import { getCanonicalUrl } from '@/lib/routes';

function guideLabels(locale: HighPotentialGuide['locale']) {
  return {
    answer: locale === 'fr' ? 'Réponse courte' : locale === 'en' ? 'Short answer' : locale === 'ru' ? 'Краткий ответ' : 'إجابة مختصرة',
    toc: locale === 'fr' ? 'Sommaire' : locale === 'en' ? 'Table of contents' : locale === 'ru' ? 'Содержание' : 'الفهرس',
    verify: locale === 'fr' ? 'Ce qu’il faut vérifier avant de décider' : locale === 'en' ? 'What to verify before deciding' : locale === 'ru' ? 'Что проверить до решения' : 'ما يجب التحقق منه قبل القرار',
    cities: locale === 'fr' ? 'Pertinence ville / service' : locale === 'en' ? 'City and service relevance' : locale === 'ru' ? 'Связь города и услуги' : 'صلة المدينة والخدمة',
    help: locale === 'fr' ? 'Comment Bosphoras peut vous accompagner' : locale === 'en' ? 'How Bosphoras can help' : locale === 'ru' ? 'Как Bosphoras может помочь' : 'كيف يمكن لـ Bosphoras المساعدة',
    caution: locale === 'fr' ? 'Important' : locale === 'en' ? 'Important' : locale === 'ru' ? 'Важно' : 'مهم',
    process: locale === 'fr' ? 'Processus en 5 étapes' : locale === 'en' ? 'Process in 5 steps' : locale === 'ru' ? 'Процесс в 5 шагов' : 'العملية في 5 خطوات',
    faq: locale === 'fr' ? 'FAQ' : locale === 'en' ? 'FAQ' : locale === 'ru' ? 'Вопросы' : 'الأسئلة الشائعة',
    links: locale === 'fr' ? 'Liens utiles' : locale === 'en' ? 'Useful links' : locale === 'ru' ? 'Полезные ссылки' : 'روابط مفيدة',
    cta: locale === 'fr' ? 'Demander un diagnostic privé' : locale === 'en' ? 'Request Private Assessment' : locale === 'ru' ? 'Получить частную консультацию' : 'طلب تقييم خاص',
    updated: locale === 'fr' ? 'Mis à jour le' : locale === 'en' ? 'Last updated' : locale === 'ru' ? 'Обновлено' : 'آخر تحديث',
  };
}

function generatedSections(guide: HighPotentialGuide) {
  const locale = guide.locale;
  if (locale === 'fr') {
    return [
      { id: 'comprendre', title: 'Comprendre le sujet', body: `Le sujet « ${guide.serviceFocus} » doit être abordé avec méthode. En Turquie, une décision apparemment simple peut toucher la résidence, la fiscalité, la banque, la santé, l’immobilier, la famille et la confidentialité. Bosphoras part toujours du profil réel du client avant d’activer un contact.` },
      { id: 'etrangers', title: 'Pourquoi cela intéresse les étrangers', body: `Les clients internationaux regardent la Turquie pour sa position entre Europe, Asie centrale et Moyen-Orient, mais aussi pour Istanbul, Bodrum et Antalya. ${guide.cityFocus}` },
      { id: 'verifier', title: 'Ce qu’il faut vérifier avant de décider', body: 'Avant toute décision, il faut vérifier les règles applicables, la cohérence fiscale, les documents, le calendrier, les coûts réels, les obligations bancaires et les limites réglementaires.', bullets: ['résidence et statut personnel', 'impact fiscal dans plusieurs pays', 'documents et traductions', 'qualité des professionnels impliqués', 'confidentialité et gestion des données'] },
      { id: 'villes', title: 'Istanbul, Bodrum ou Antalya', body: 'Istanbul convient souvent aux sujets business, banque, droit, santé privée et bureaux. Bodrum attire les profils villas, yachts, marina et résidence secondaire discrète. Antalya peut être plus rationnelle pour les familles, la santé, le climat et une vie plus stable à l’année.' },
      { id: 'processus', title: 'Processus en 5 étapes', body: 'La méthode Bosphoras suit une logique simple : diagnostic privé, analyse des documents et objectifs, sélection des professionnels, exécution locale ou à distance, puis support long terme.', bullets: ['diagnostic privé', 'revue des objectifs et documents', 'coordination des professionnels', 'visites ou exécution à distance', 'suivi Private Desk ou Private Access'] },
    ];
  }
  if (locale === 'ru') {
    return [
      { id: 'ponyat', title: 'Понять тему', body: `Тема «${guide.serviceFocus}» требует методичного подхода. В Турции даже простое решение может затрагивать резиденцию, налоги, банк, здоровье, недвижимость, семью и конфиденциальность. Bosphoras начинает с реального профиля клиента.` },
      { id: 'inostrantsy', title: 'Почему это важно для иностранцев', body: `Международные клиенты рассматривают Турцию из-за ее позиции между Европой, Центральной Азией и Ближним Востоком, а также из-за Стамбула, Бодрума и Антальи. ${guide.cityFocus}` },
      { id: 'proverit', title: 'Что проверить до решения', body: 'Перед решением нужно проверить применимые правила, налоговую логику, документы, сроки, реальные расходы, банковские требования и регуляторные ограничения.', bullets: ['резиденция и личный статус', 'налоговое влияние в нескольких странах', 'документы и переводы', 'качество привлеченных специалистов', 'конфиденциальность и обработка данных'] },
      { id: 'goroda', title: 'Стамбул, Бодрум или Анталья', body: 'Стамбул часто подходит для бизнеса, банков, права, частной медицины и офисов. Бодрум привлекает виллами, яхтами, маринами и дискретной второй резиденцией. Анталья может быть рациональнее для семьи, здоровья, климата и жизни круглый год.' },
      { id: 'process', title: 'Процесс в 5 шагов', body: 'Метод Bosphoras прост: частная консультация, анализ документов и целей, выбор профессионалов, локальное или дистанционное исполнение, затем долгосрочная поддержка.', bullets: ['частная консультация', 'анализ целей и документов', 'координация специалистов', 'визиты или дистанционное исполнение', 'сопровождение Private Desk или Private Access'] },
    ];
  }
  if (locale === 'ar') {
    return [
      { id: 'understand', title: 'فهم الموضوع', body: `موضوع ${guide.serviceFocus} يجب أن يُدار بمنهجية. في تركيا، قرار يبدو بسيطاً قد يمس الإقامة والضرائب والبنوك والصحة والعقارات والعائلة والسرية. يبدأ Bosphoras من الملف الحقيقي للعميل.` },
      { id: 'foreigners', title: 'لماذا يهم الأجانب', body: `ينظر العملاء الدوليون إلى تركيا بسبب موقعها بين أوروبا وآسيا الوسطى والشرق الأوسط، وبسبب إسطنبول وبودروم وأنطاليا. ${guide.cityFocus}` },
      { id: 'verify', title: 'ما يجب التحقق منه قبل القرار', body: 'قبل أي قرار يجب التحقق من القواعد المطبقة، الاتساق الضريبي، المستندات، الجدول الزمني، التكاليف الحقيقية، الالتزامات البنكية والحدود التنظيمية.', bullets: ['الإقامة والوضع الشخصي', 'الأثر الضريبي بين عدة دول', 'المستندات والترجمات', 'جودة المهنيين المشاركين', 'السرية وإدارة البيانات'] },
      { id: 'cities', title: 'إسطنبول، بودروم أو أنطاليا', body: 'إسطنبول تناسب غالباً الأعمال والبنوك والقانون والصحة الخاصة والمكاتب. بودروم تجذب ملفات الفيلات واليخوت والمارينات والإقامة الثانية السرية. أنطاليا قد تكون أكثر عقلانية للعائلة والصحة والمناخ والحياة المستقرة طوال العام.' },
      { id: 'process', title: 'العملية في 5 خطوات', body: 'منهج Bosphoras بسيط: تقييم خاص، مراجعة الوثائق والأهداف، اختيار المهنيين، التنفيذ محلياً أو عن بُعد، ثم دعم طويل الأمد.', bullets: ['تقييم خاص', 'مراجعة الأهداف والمستندات', 'تنسيق المهنيين', 'زيارات أو تنفيذ عن بُعد', 'متابعة Private Desk أو Private Access'] },
    ];
  }
  return [
    { id: 'understand', title: 'Understanding the subject', body: `The topic of ${guide.serviceFocus} must be approached methodically. In Turkey, a decision that appears simple may touch residence, tax, banking, healthcare, property, family and confidentiality. Bosphoras starts from the client’s real profile before activating any contact.` },
    { id: 'foreigners', title: 'Why it matters for foreigners', body: `International clients look at Turkey because of its position between Europe, Central Asia and the Middle East, but also because of Istanbul, Bodrum and Antalya. ${guide.cityFocus}` },
    { id: 'verify', title: 'What to verify before deciding', body: 'Before any decision, verify applicable rules, tax consistency, documents, timeline, real costs, banking obligations and regulatory limits.', bullets: ['residence and personal status', 'tax impact across several countries', 'documents and translations', 'quality of involved professionals', 'confidentiality and data handling'] },
    { id: 'cities', title: 'Istanbul, Bodrum or Antalya', body: 'Istanbul often fits business, banking, legal, private healthcare and office needs. Bodrum attracts villa, yacht, marina and discreet second-residence profiles. Antalya may be more rational for families, healthcare, climate and stable year-round living.' },
    { id: 'process', title: 'Process in 5 steps', body: 'The Bosphoras method follows a simple structure: private assessment, document and objective review, professional selection, local or remote execution, then long-term support.', bullets: ['private assessment', 'review of objectives and documents', 'professional coordination', 'visits or remote execution', 'Private Desk or Private Access follow-up'] },
  ];
}

export function HighPotentialGuideRenderer({ guide }: { guide: HighPotentialGuide }) {
  const labels = guideLabels(guide.locale);
  const sections = generatedSections(guide);
  const assessmentHref = guide.locale === 'fr' ? '/private-assessment' : `/${guide.locale}/private-assessment`;
  const canonical = getCanonicalUrl(guide.locale, guide.slug);
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: guide.h1, description: guide.metaDescription, dateModified: guide.updatedAt, datePublished: guide.updatedAt, mainEntityOfPage: canonical, publisher: { '@type': 'Organization', name: 'Bosphoras' } };
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Bosphoras', item: getCanonicalUrl(guide.locale, '/') }, { '@type': 'ListItem', position: 2, name: guide.h1, item: canonical }] };

  return (
    <main className="bg-[#f8f1e7] text-[#101827]" dir={localeDir[guide.locale]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]"><Clock size={15} /> {labels.updated} {guide.updatedAt}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{guide.h1}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#3e4857]">{guide.subtitle}</p>
            <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_18px_60px_rgba(16,24,39,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">{labels.answer}</p>
              <p className="mt-3 text-lg leading-8 text-[#172032]">{guide.shortAnswer}</p>
            </div>
            <Link href={assessmentHref} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">{labels.cta}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 md:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-6 lg:sticky lg:top-28">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{labels.toc}</p>
            <nav className="space-y-3">
              {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block text-sm leading-6 text-[#3e4857] hover:text-[#8a6728]">{section.title}</a>)}
              <a href="#bosphoras" className="block text-sm leading-6 text-[#3e4857] hover:text-[#8a6728]">{labels.help}</a>
              <a href="#faq" className="block text-sm leading-6 text-[#3e4857] hover:text-[#8a6728]">{labels.faq}</a>
            </nav>
          </aside>

          <article className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9">
                <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">{section.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#3e4857]">{section.body}</p>
                {section.bullets && <ul className="mt-6 grid gap-3 md:grid-cols-2">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{bullet}</li>)}</ul>}
              </section>
            ))}

            <section id="caution" className="border border-[#d8c7a1] bg-[#121826] p-7 text-[#fffaf0] md:p-9">
              <h2 className="flex items-center gap-3 font-serif text-3xl tracking-[-0.03em]"><AlertTriangle className="text-[#d2a863]" />{labels.caution}</h2>
              <p className="mt-5 text-base leading-8 text-[#d8cfbf]">{guide.legalCaution}</p>
            </section>

            <section id="bosphoras" className="border border-[#d8c7a1] bg-white p-7 md:p-9">
              <h2 className="flex items-center gap-3 font-serif text-3xl tracking-[-0.03em] text-[#121826]"><ShieldCheck className="text-[#8a6728]" />{labels.help}</h2>
              <p className="mt-5 text-base leading-8 text-[#3e4857]">{guide.bosphorasHelp}</p>
              <Link href={assessmentHref} className="mt-7 inline-flex items-center justify-center gap-3 border border-[#8a6728] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#8a6728] transition hover:bg-[#fffaf0]">{labels.cta}<ArrowRight size={15} /></Link>
            </section>

            <section id="faq" className="border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-9">
              <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#121826]">{labels.faq}</h2>
              <div className="mt-6 space-y-5">
                {guide.faqs.map((faq) => <div key={faq.question} className="border-t border-[#d8c7a1] pt-5"><h3 className="font-serif text-2xl text-[#121826]">{faq.question}</h3><p className="mt-3 text-base leading-8 text-[#3e4857]">{faq.answer}</p></div>)}
              </div>
            </section>

            <section className="border border-[#d8c7a1] bg-white p-7 md:p-9">
              <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#121826]">{labels.links}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {guide.internalLinks.map((link) => <Link key={link.href} href={link.href} className="border border-[#d8c7a1] px-4 py-3 text-sm font-semibold text-[#8a6728] hover:bg-[#fffaf0]">{link.label}</Link>)}
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
