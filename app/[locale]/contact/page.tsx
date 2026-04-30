import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, BriefcaseBusiness, Building2, Globe2, Lock, Mail, MapPin, Phone, ShieldCheck, UserRound } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

type SupportedLocale = 'en' | 'ru' | 'ar';
const supportedLocales: SupportedLocale[] = ['en', 'ru', 'ar'];

type Copy = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  formTitle: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    country: string;
    profile: string;
    city: string;
    budget: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    country: string;
    profile: string;
    city: string;
    budget: string;
    message: string;
  };
  submit: string;
  confidentiality: string;
  directContact: string;
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
  privateDeskCta: string;
  membershipCta: string;
  sideTitle: string;
  sideItems: string[];
};

const copy: Record<SupportedLocale, Copy> = {
  en: {
    path: '/en/contact',
    metaTitle: 'Contact Bosphoras | Private Desk Turkey',
    metaDescription: 'Contact Bosphoras for a private assessment in Turkey: relocation, investment, legal, tax, property, concierge and private access.',
    eyebrow: 'Private contact',
    title: 'Tell us what you need. We will route the request discreetly.',
    intro: 'A short form is enough to understand the context and direct your request to the right Bosphoras desk.',
    formTitle: 'Private request',
    fields: { name: 'Full name', email: 'Email', phone: 'Phone / WhatsApp', country: 'Country of residence', profile: 'Profile', city: 'Target city', budget: 'Annual budget / project level', message: 'Your request' },
    placeholders: { name: 'First name, last name', email: 'you@email.com', phone: '+...', country: 'France, Kazakhstan, UAE...', profile: 'Investor, family, entrepreneur, executive...', city: 'Istanbul, Bodrum, Antalya or several cities', budget: 'Indicative range if relevant', message: 'Relocation, company, legal/tax, property, concierge, membership...' },
    submit: 'Send my private request',
    confidentiality: 'Information is handled with reinforced confidentiality.',
    directContact: 'Direct contact',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Paris office',
    privateDeskCta: 'Request a private assessment',
    membershipCta: 'Apply for membership',
    sideTitle: 'Bosphoras can coordinate',
    sideItems: ['Relocation to Turkey', 'Legal and tax coordination', 'Company setup and accounting', 'Property and private banking introductions', 'Healthcare, insurance and family support', 'Luxury concierge, travel, jets, yachts and private drivers'],
  },
  ru: {
    path: '/ru/contact',
    metaTitle: 'Контакт Bosphoras | Частный офис Турция',
    metaDescription: 'Свяжитесь с Bosphoras для частной консультации по Турции: relocation, инвестиции, право, налоги, недвижимость, concierge и private access.',
    eyebrow: 'Частный контакт',
    title: 'Опишите ваш запрос. Мы направим его конфиденциально.',
    intro: 'Короткой формы достаточно, чтобы понять контекст и передать запрос в правильный desk Bosphoras.',
    formTitle: 'Частный запрос',
    fields: { name: 'Имя и фамилия', email: 'Email', phone: 'Телефон / WhatsApp', country: 'Страна проживания', profile: 'Профиль', city: 'Целевой город', budget: 'Годовой бюджет / уровень проекта', message: 'Ваш запрос' },
    placeholders: { name: 'Имя, фамилия', email: 'you@email.com', phone: '+...', country: 'Франция, Казахстан, ОАЭ...', profile: 'Инвестор, семья, предприниматель, руководитель...', city: 'Стамбул, Бодрум, Анталья или несколько городов', budget: 'Ориентировочный диапазон, если уместно', message: 'Relocation, компания, право/налоги, недвижимость, concierge, членство...' },
    submit: 'Отправить частный запрос',
    confidentiality: 'Информация обрабатывается с усиленной конфиденциальностью.',
    directContact: 'Прямой контакт',
    phoneLabel: 'Телефон',
    emailLabel: 'Email',
    addressLabel: 'Офис в Париже',
    privateDeskCta: 'Получить частную консультацию',
    membershipCta: 'Подать заявку на членство',
    sideTitle: 'Bosphoras может координировать',
    sideItems: ['Переезд в Турцию', 'Юридическая и налоговая координация', 'Создание компании и бухгалтерия', 'Недвижимость и знакомства с private bankers', 'Здоровье, страхование и поддержка семьи', 'Luxury concierge, поездки, джеты, яхты и личные водители'],
  },
  ar: {
    path: '/ar/contact',
    metaTitle: 'تواصل مع Bosphoras | مكتب خاص تركيا',
    metaDescription: 'تواصل مع Bosphoras للحصول على تقييم خاص في تركيا: انتقال، استثمار، قانون، ضرائب، عقارات، كونسيرج ووصول خاص.',
    eyebrow: 'تواصل خاص',
    title: 'أخبرونا بما تحتاجون. سنوجّه الطلب بسرية.',
    intro: 'نموذج قصير يكفي لفهم السياق وتوجيه طلبكم إلى المكتب المناسب داخل Bosphoras.',
    formTitle: 'طلب خاص',
    fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف / واتساب', country: 'بلد الإقامة', profile: 'الملف الشخصي', city: 'المدينة المستهدفة', budget: 'الميزانية السنوية / مستوى المشروع', message: 'طلبكم' },
    placeholders: { name: 'الاسم واللقب', email: 'you@email.com', phone: '+...', country: 'فرنسا، كازاخستان، الإمارات...', profile: 'مستثمر، عائلة، رائد أعمال، مدير...', city: 'إسطنبول، بودروم، أنطاليا أو عدة مدن', budget: 'نطاق تقريبي إن كان مناسباً', message: 'انتقال، شركة، قانون/ضرائب، عقارات، كونسيرج، عضوية...' },
    submit: 'إرسال طلبي الخاص',
    confidentiality: 'تتم معالجة المعلومات بسرية معززة.',
    directContact: 'تواصل مباشر',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    addressLabel: 'مكتب باريس',
    privateDeskCta: 'طلب تقييم خاص',
    membershipCta: 'طلب عضوية',
    sideTitle: 'يمكن لـ Bosphoras تنسيق',
    sideItems: ['الانتقال إلى تركيا', 'التنسيق القانوني والضريبي', 'تأسيس الشركة والمحاسبة', 'العقارات والتعارف مع مصرفيين خاصين', 'الصحة والتأمين ودعم العائلة', 'كونسيرج فاخر، سفر، طائرات خاصة، يخوت وسائقون خاصون'],
  },
};

function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}

interface PageProps { params: { locale: string } }

export function generateStaticParams() { return supportedLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isSupportedLocale(params.locale)) return {};
  const c = copy[params.locale];
  return buildMetadata({ locale: params.locale, path: '/contact', title: c.metaTitle, description: c.metaDescription });
}

export default function ContactPage({ params }: PageProps) {
  if (!isSupportedLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = copy[locale];
  const isRtl = localeDir[locale] === 'rtl';
  const privateAssessmentHref = getLocalePath(locale, getSlugForPage('private-assessment', locale as Locale) ?? '/private-assessment');
  const membershipHref = getLocalePath(locale, getSlugForPage('membership-application', locale as Locale) ?? '/membership/application');

  return (
    <>
      <Header locale={locale} currentPath={c.path} />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(196,151,84,0.2),transparent_30%),linear-gradient(135deg,#f8f1e7,#fffaf0_55%,#efe4d2)] px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">{c.eyebrow}</p>
              <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.045em] text-[#121826] md:text-6xl">{c.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#3e4857]">{c.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={privateAssessmentHref} className="inline-flex items-center justify-center bg-[#121826] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#fffaf0] transition hover:bg-[#263246]">{c.privateDeskCta}</Link>
                <Link href={membershipHref} className="inline-flex items-center justify-center border border-[#8a6728] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#8a6728] transition hover:bg-[#fffaf0]">{c.membershipCta}</Link>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-[#3e4857] sm:grid-cols-2">
                <div className="border border-[#d8c7a1] bg-white/60 p-5"><Phone className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="font-bold">{c.phoneLabel}</p><p className="mt-1">+33 1 88 84 22 22</p></div>
                <div className="border border-[#d8c7a1] bg-white/60 p-5"><Mail className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="font-bold">{c.emailLabel}</p><p className="mt-1">contact@bosphoras.com</p></div>
                <div className="border border-[#d8c7a1] bg-white/60 p-5 sm:col-span-2"><MapPin className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="font-bold">{c.addressLabel}</p><p className="mt-1">88 Avenue des Ternes, 75017 Paris</p></div>
              </div>
            </div>

            <div className="border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_30px_100px_rgba(16,24,39,0.10)] md:p-8">
              <p className="font-serif text-3xl text-[#121826]">{c.formTitle}</p>
              <form className="mt-7 grid gap-4" action={`mailto:contact@bosphoras.com`} method="post" encType="text/plain">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#3e4857]"><UserRound className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.name}<input name="name" placeholder={c.placeholders.name} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                  <label className="text-sm font-semibold text-[#3e4857]"><Mail className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.email}<input name="email" type="email" placeholder={c.placeholders.email} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#3e4857]"><Phone className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.phone}<input name="phone" placeholder={c.placeholders.phone} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                  <label className="text-sm font-semibold text-[#3e4857]"><Globe2 className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.country}<input name="country" placeholder={c.placeholders.country} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#3e4857]"><BriefcaseBusiness className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.profile}<input name="profile" placeholder={c.placeholders.profile} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                  <label className="text-sm font-semibold text-[#3e4857]"><Building2 className="mb-2 h-4 w-4 text-[#8a6728]" />{c.fields.city}<input name="city" placeholder={c.placeholders.city} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                </div>
                <label className="text-sm font-semibold text-[#3e4857]">{c.fields.budget}<input name="budget" placeholder={c.placeholders.budget} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                <label className="text-sm font-semibold text-[#3e4857]">{c.fields.message}<textarea name="message" rows={5} placeholder={c.placeholders.message} className="mt-2 w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a6728]" /></label>
                <button type="submit" className="inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">{c.submit}<ArrowRight size={15} /></button>
                <p className="inline-flex items-center gap-2 text-sm text-[#3e4857]"><Lock className="h-4 w-4 text-[#8a6728]" />{c.confidentiality}</p>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="font-serif text-3xl md:text-5xl">{c.sideTitle}</p>
            <div className="mt-10 grid gap-px bg-[#d2a863]/25 md:grid-cols-3">
              {c.sideItems.map((item) => <div key={item} className="bg-[#121826] p-6 text-sm leading-7 text-[#d8cfbf]"><ShieldCheck className="mb-5 h-6 w-6 text-[#d2a863]" />{item}</div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale as Locale} />
    </>
  );
}
