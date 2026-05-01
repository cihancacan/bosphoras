import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export function applyPageOverrides(base: MainPageContent[], overrides: MainPageContent[]): MainPageContent[] {
  const byId = new Map(overrides.map((page) => [page.id, page]));
  const replaced = base.map((page) => byId.get(page.id) ?? page);
  const existing = new Set(replaced.map((page) => page.id));
  return [...replaced, ...overrides.filter((page) => !existing.has(page.id))];
}

const privateAssessment = '/private-assessment';
const membershipApplication = '/membership/application';
const contact = '/contact';

const en = (page: MainPageContent): MainPageContent => page;

export const privateDeskOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  en: [
    en({
      id: 'services',
      locale: 'en',
      slug: '/services',
      title: 'Services | Bosphoras Private Desk Turkey',
      h1: 'One private desk for everything Turkey',
      metaDescription: 'Bosphoras coordinates relocation, legal and tax, company formation, healthcare, insurance, property, VIP transport, luxury concierge and private access in Turkey.',
      shortIntro: 'Bosphoras is not a simple agency. It is a private desk for investors, families and entrepreneurs who need one trusted point of contact in Turkey. We coordinate the right professionals, protect confidentiality and keep every step structured.',
      sections: [
        { heading: 'A 360° private desk', body: 'Your project may begin with one subject, but Turkey usually requires a wider view: residence, taxation, company, accounting, property, health, insurance, private banking, transport and lifestyle. Bosphoras keeps those decisions aligned.', bullets: ['Relocation and family installation in Istanbul, Bodrum and Antalya', 'Legal and tax coordination with qualified professionals', 'Company formation, accounting, offices and operational setup', 'Property search, private banking introductions and concierge services'] },
        { heading: 'Two ways to work with Bosphoras', body: 'Classic Private Desk support starts from 6,000 USD for one year. Bosphoras Private Access is reserved for selected members: 10,000 USD annual admission plus 1,000 USD monthly retainer.' },
        { heading: 'Luxury concierge, handled discreetly', body: 'Members may access priority coordination for private dinners, discreet events, clubs, restaurants, ticketing, private jets, helicopters, yachts, private drivers, villas and hotels.' },
      ],
      faqs: [
        { question: 'Can I use only one service?', answer: 'Yes. A client may request one structured mission or a complete Private Desk support package.' },
        { question: 'Is Bosphoras a law firm or real estate agency?', answer: 'No. Bosphoras coordinates and introduces selected professionals but does not replace regulated experts.' },
      ],
      cta: { label: 'Request Private Desk support', href: privateAssessment, secondaryLabel: 'Apply for private membership', secondaryHref: membershipApplication },
      jsonLdType: 'CollectionPage',
      internalLinks: [{ pageId: 'relocate', label: 'Relocation' }, { pageId: 'legal-tax', label: 'Legal & tax' }, { pageId: 'private-club', label: 'Private Access Club' }],
    }),
    en({
      id: 'relocate', locale: 'en', slug: '/services/relocate-to-turkey', title: 'Relocate to Turkey | Bosphoras Private Desk', h1: 'Relocate to Turkey with structure and discretion', metaDescription: 'Private relocation support in Turkey: residence strategy, family installation, housing, schools, banking, healthcare and daily coordination.', shortIntro: 'Relocating to Turkey is not only an administrative file. It is a family, tax, property, banking, healthcare and lifestyle decision. Bosphoras coordinates the journey before, during and after arrival.',
      sections: [
        { heading: 'Before arrival', body: 'We clarify your objectives, country of residence, family situation, budget, timing and preferred city before activating the right professionals.', bullets: ['Istanbul, Bodrum or Antalya selection', 'Rental before purchase strategy', 'Administrative and residence roadmap', 'School, healthcare and insurance orientation'] },
        { heading: 'Local execution', body: 'Bosphoras coordinates visits, appointments, documents, translations, transport, professionals and private services so you do not lose time with unreliable contacts.' },
        { heading: 'After installation', body: 'The support can continue through Private Desk or Private Access membership for ongoing requests, concierge, introductions and family needs.' },
      ],
      faqs: [{ question: 'Can you guarantee residence approval?', answer: 'No. Authorities decide. Bosphoras coordinates preparation with qualified professionals and keeps expectations realistic.' }, { question: 'Can we start with a discovery trip?', answer: 'Yes. A discovery trip is often the safest way to compare cities and neighborhoods.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'istanbul', label: 'Istanbul' }, { pageId: 'bodrum', label: 'Bodrum' }, { pageId: 'antalya', label: 'Antalya' }],
    }),
    en({
      id: 'legal-tax', locale: 'en', slug: '/services/legal-tax-advisory', title: 'Legal & Tax Advisory Turkey | Bosphoras', h1: 'Legal and tax coordination without improvisation', metaDescription: 'Bosphoras coordinates lawyers, tax advisors, accountants and compliance professionals for international clients in Turkey.', shortIntro: 'Bosphoras does not replace lawyers or tax advisors. We coordinate the right professionals, prepare the right questions and help you understand the consequences before making decisions.',
      sections: [
        { heading: 'Coordinated professionals', body: 'Depending on the case, Bosphoras may coordinate lawyers, tax advisors, accountants, notaries, private bankers and other qualified specialists.', bullets: ['Residence and tax residence analysis', 'Company, property and succession structuring', 'Contracts, compliance and document preparation'] },
        { heading: 'Conservative approach', body: 'We prefer stable, documented and compliant solutions. No tax result, administrative approval or legal outcome is promised.' },
        { heading: 'International coordination', body: 'Bosphoras can coordinate with your existing advisors in France, Kazakhstan, Dubai, the UK or other jurisdictions to avoid contradictions.' },
      ],
      faqs: [{ question: 'Do you give legal advice?', answer: 'No. Legal advice is given by qualified lawyers. Bosphoras coordinates the mission.' }, { question: 'Can you work with my own lawyer?', answer: 'Yes. We can coordinate with existing advisors.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'business-setup', label: 'Company formation' }, { pageId: 'compliance', label: 'Compliance & trust' }, { pageId: 'private-assessment', label: 'Private assessment' }],
    }),
    en({
      id: 'business-setup', locale: 'en', slug: '/services/business-setup', title: 'Company Formation in Turkey | Bosphoras', h1: 'Company formation in Turkey, built properly from day one', metaDescription: 'Private support for company formation in Turkey: legal structure, accounting, banking, offices, insurance and operational setup.', shortIntro: 'Creating a company is easy. Creating the right structure for an international founder, investor or family group requires planning. Bosphoras coordinates the professionals and operational steps.',
      sections: [
        { heading: 'Structure before registration', body: 'Before incorporation, we clarify activity, shareholders, management, tax exposure, banking needs and future operations.', bullets: ['Limited company or joint-stock company analysis', 'Accounting and payroll setup', 'Banking and private banking introductions', 'Registered office or premium office solutions'] },
        { heading: 'Operational setup', body: 'Bosphoras can coordinate accountants, lawyers, offices, insurers and local providers so the company is usable, not just registered.' },
        { heading: 'Compliance discipline', body: 'We encourage documented flows, clean accounting, careful onboarding and professional advice before sensitive decisions.' },
      ],
      faqs: [{ question: 'Can a foreigner own a Turkish company?', answer: 'Often yes, depending on activity and regulatory rules. Counsel must confirm the specific case.' }, { question: 'Do you guarantee bank account opening?', answer: 'No. Banks decide independently. We help prepare and coordinate the file.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'legal-tax', label: 'Legal & tax' }, { pageId: 'offices', label: 'Offices' }, { pageId: 'compliance', label: 'Compliance' }],
    }),
    en({
      id: 'health-insurance', locale: 'en', slug: '/services/health-insurance', title: 'Health & Insurance in Turkey | Bosphoras', h1: 'Health and insurance support for international families', metaDescription: 'Bosphoras coordinates healthcare, insurance, clinics, doctors and family protection solutions in Turkey.', shortIntro: 'For a family, healthcare and insurance are not secondary details. Bosphoras helps you build a clear, discreet and reliable framework with selected professionals.',
      sections: [
        { heading: 'Healthcare access', body: 'We can coordinate introductions to private hospitals, doctors, specialists and preventive check-up pathways in Istanbul, Antalya and beyond.' },
        { heading: 'Insurance structure', body: 'Depending on your status, Bosphoras may coordinate international or local insurance options with selected brokers.', bullets: ['Family health insurance', 'International coverage review', 'Doctor and clinic introductions', 'Emergency and travel coordination'] },
        { heading: 'Strict boundaries', body: 'Bosphoras does not make medical decisions and does not replace licensed healthcare professionals or regulated brokers.' },
      ],
      faqs: [{ question: 'Do you choose the doctor for me?', answer: 'No. We introduce options and coordinate logistics; medical decisions remain between you and the practitioner.' }, { question: 'Can this be part of relocation?', answer: 'Yes. Healthcare and insurance are often included in the relocation roadmap.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'relocate', label: 'Relocation' }, { pageId: 'antalya', label: 'Antalya' }, { pageId: 'private-assessment', label: 'Private assessment' }],
    }),
    en({
      id: 'property', locale: 'en', slug: '/services/property-relocation', title: 'Property & Relocation Turkey | Bosphoras', h1: 'Property and relocation without pressure', metaDescription: 'Private property search and relocation support in Turkey with selected agents, legal due diligence and family coordination.', shortIntro: 'Bosphoras helps clients understand where to live before deciding what to buy. We coordinate agents, lawyers, private bankers, visits and practical installation.',
      sections: [
        { heading: 'Rent before buying when needed', body: 'For many clients, a secure rental period is wiser than an immediate purchase. Bosphoras helps compare neighborhoods, lifestyle and long-term suitability.' },
        { heading: 'Selected introductions', body: 'We can coordinate real estate agents, lawyers, notaries, private bankers, insurers and property managers.', bullets: ['Istanbul apartments and family residences', 'Bodrum villas and seasonal homes', 'Antalya coastal and family bases', 'Due diligence and transaction coordination'] },
        { heading: 'No aggressive sales logic', body: 'Bosphoras is positioned as a private desk. The objective is clarity, discretion and protection of the client, not pressure.' },
      ],
      faqs: [{ question: 'Do you sell property directly?', answer: 'No. We coordinate selected agents and professionals.' }, { question: 'Can you help after purchase?', answer: 'Yes. Property management, staff, insurance and concierge can be coordinated.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'istanbul', label: 'Istanbul' }, { pageId: 'bodrum', label: 'Bodrum' }, { pageId: 'legal-tax', label: 'Legal & tax' }],
    }),
    en({
      id: 'transport', locale: 'en', slug: '/services/vip-transport', title: 'VIP Transport Turkey | Bosphoras', h1: 'VIP transport and private mobility in Turkey', metaDescription: 'Bosphoras coordinates VIP transfers, private drivers, jets, helicopters, yachts and discreet travel logistics in Turkey.', shortIntro: 'For members and selected Private Desk clients, mobility is part of the service experience. Bosphoras coordinates discreet, reliable and premium travel logistics.',
      sections: [
        { heading: 'Ground transport', body: 'Private drivers, airport transfers, secure routes, family transport, business appointments and event logistics can be coordinated through selected providers.' },
        { heading: 'Air and sea coordination', body: 'For eligible requests, Bosphoras may coordinate private jets, helicopters, yachts, marinas and VIP arrival protocols.', bullets: ['Private drivers and executive vehicles', 'Airport VIP transfers', 'Private jet and helicopter coordination', 'Yacht, marina and coastal logistics'] },
        { heading: 'For members', body: 'Private Access members receive priority handling for recurring travel, restaurant, club, ticketing and event requests.' },
      ],
      faqs: [{ question: 'Is transport available without membership?', answer: 'Yes, for a structured Private Desk mission or on a tailored quote.' }, { question: 'Can you coordinate international trips?', answer: 'Yes, depending on destination, timing, compliance and provider availability.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'membership-application', label: 'Membership application' }, { pageId: 'bodrum', label: 'Bodrum' }],
    }),
    en({
      id: 'istanbul', locale: 'en', slug: '/destinations/istanbul', title: 'Istanbul Private Desk | Bosphoras', h1: 'Istanbul for business, family and private life', metaDescription: 'Bosphoras supports international clients in Istanbul: relocation, company setup, legal-tax coordination, healthcare, property, offices and concierge.', shortIntro: 'Istanbul is the natural entry point for many international clients in Turkey: business, banking, law, private healthcare, premium offices and lifestyle. Bosphoras helps you read the city before committing.',
      sections: [
        { heading: 'A city of precise choices', body: 'Bebek, Etiler, Nişantaşı, Levent, Maslak, Zekeriyaköy or the Asian side do not offer the same lifestyle. Bosphoras helps compare neighborhoods by family, work and privacy needs.' },
        { heading: 'What Bosphoras coordinates', body: 'Relocation, lawyers, accountants, private bankers, real estate agents, doctors, schools, offices, drivers, restaurants and private access.', bullets: ['Business and legal infrastructure', 'International schools and clinics', 'Premium offices and meeting rooms', 'Private drivers, clubs and restaurants'] },
        { heading: 'Modernity with heritage', body: 'Istanbul combines historical depth and modern towers, making it a strong base for investors looking beyond Dubai while remaining connected to Europe, Central Asia and the Gulf.' },
      ],
      faqs: [{ question: 'Is Istanbul better for business?', answer: 'For many projects, yes. It concentrates banks, lawyers, offices, hospitals and international networks.' }, { question: 'Can you compare Istanbul with Bodrum or Antalya?', answer: 'Yes. The private assessment is designed for this decision.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Place', internalLinks: [{ pageId: 'relocate', label: 'Relocation' }, { pageId: 'business-setup', label: 'Company formation' }, { pageId: 'property', label: 'Property' }],
    }),
    en({
      id: 'bodrum', locale: 'en', slug: '/destinations/bodrum', title: 'Bodrum Private Desk | Bosphoras', h1: 'Bodrum for villas, yachts and discreet Mediterranean living', metaDescription: 'Bosphoras supports international clients in Bodrum: villas, yachts, relocation, property, concierge, drivers, private dinners and seasonal living.', shortIntro: 'Bodrum is not just a resort. For the right profile, it is a discreet Mediterranean base with villas, marinas, private clubs, yachts and family lifestyle. Bosphoras helps choose the right area and network.',
      sections: [
        { heading: 'Choose the bay before the villa', body: 'Yalıkavak, Türkbükü, Göltürkbükü, Gümüşlük and Bodrum center each have a different rhythm, privacy level and seasonality.' },
        { heading: 'Private lifestyle coordination', body: 'Bosphoras can coordinate real estate agents, villa managers, chauffeurs, yacht providers, restaurants, clubs, private dinners and discreet events.', bullets: ['Villas and seasonal residences', 'Yachts, marinas and drivers', 'Private dinners and member activities', 'Household and estate coordination'] },
        { heading: 'Seasonal or long-term', body: 'Some clients combine Istanbul for business and Bodrum for lifestyle. Bosphoras can structure both.' },
      ],
      faqs: [{ question: 'Is Bodrum suitable year-round?', answer: 'For some clients yes, but seasonality must be understood clearly.' }, { question: 'Can you manage villa services?', answer: 'We can coordinate selected providers and property managers.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Place', internalLinks: [{ pageId: 'property', label: 'Property' }, { pageId: 'transport', label: 'VIP transport' }, { pageId: 'private-club', label: 'Private Access Club' }],
    }),
    en({
      id: 'antalya', locale: 'en', slug: '/destinations/antalya', title: 'Antalya Private Desk | Bosphoras', h1: 'Antalya for family life, healthcare and Mediterranean stability', metaDescription: 'Bosphoras supports international clients in Antalya: family relocation, healthcare, insurance, property, VIP transport and private coordination.', shortIntro: 'Antalya offers climate, sea, private healthcare, direct flights and a more rational cost of living for many families. Bosphoras helps evaluate it without exaggeration.',
      sections: [
        { heading: 'A practical Mediterranean base', body: 'Antalya can suit families, semi-retired clients and investors looking for comfort, healthcare and international access.' },
        { heading: 'What we coordinate', body: 'Housing, healthcare, insurance, schools, private transport, legal-tax professionals and property search through selected contacts.', bullets: ['Private hospitals and doctors', 'Family relocation support', 'Property and rental search', 'VIP transport and travel logistics'] },
        { heading: 'Different from Bodrum', body: 'Antalya is generally more urban and functional year-round, while Bodrum is more lifestyle and seasonal. Bosphoras helps compare both.' },
      ],
      faqs: [{ question: 'Is Antalya good for families?', answer: 'It can be, depending on schooling, healthcare and lifestyle expectations.' }, { question: 'Can Bosphoras coordinate medical access?', answer: 'Yes, through selected clinics and doctors. Medical decisions remain with professionals.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'Place', internalLinks: [{ pageId: 'health-insurance', label: 'Health & insurance' }, { pageId: 'property', label: 'Property' }, { pageId: 'transport', label: 'VIP transport' }],
    }),
    en({
      id: 'about', locale: 'en', slug: '/about', title: 'About Bosphoras | Private Desk Turkey', h1: 'Bosphoras, a private desk for international clients in Turkey', metaDescription: 'Bosphoras is a private desk operated by Panorama Grup for international investors, families and entrepreneurs in Turkey.', shortIntro: 'Bosphoras is a brand operated by Panorama Grup. It was created for clients who need discretion, coordination and a single trusted point of contact in Turkey.',
      sections: [{ heading: 'Our role', body: 'Bosphoras coordinates lawyers, tax advisors, accountants, insurers, doctors, private bankers, real estate agents, offices, transport providers and luxury concierge partners.' }, { heading: 'Our standard', body: 'We do not promise what depends on authorities, banks, doctors, lawyers or markets. We coordinate seriously, document clearly and protect confidentiality.', bullets: ['Discretion', 'Compliance', 'Selected network', 'Premium execution'] }, { heading: 'Our presence', body: 'Bosphoras works between Paris, Istanbul, London, Almaty, Moscow and Dubai, with a strong focus on Istanbul, Bodrum and Antalya.' }],
      faqs: [{ question: 'Who operates Bosphoras?', answer: 'Bosphoras is a brand operated by Panorama Grup.' }, { question: 'Is Bosphoras a concierge?', answer: 'It is more than concierge: a private desk combining coordination, introductions, relocation, business and lifestyle services.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'AboutPage', internalLinks: [{ pageId: 'compliance', label: 'Compliance & trust' }, { pageId: 'services', label: 'Services' }, { pageId: 'private-club', label: 'Private Access Club' }],
    }),
    en({
      id: 'compliance', locale: 'en', slug: '/compliance-trust', title: 'Compliance & Trust | Bosphoras', h1: 'Trust begins with clear limits', metaDescription: 'Bosphoras compliance and trust principles: confidentiality, KYC, source of funds, regulated professionals and no false promises.', shortIntro: 'Bosphoras works with international clients on sensitive subjects. That requires discretion, but also compliance, clarity and professional boundaries.',
      sections: [{ heading: 'Confidentiality', body: 'Access to sensitive information is limited and shared only when necessary for the mission.' }, { heading: 'Compliance checks', body: 'Some requests may require identity verification, source of funds, background information, legal checks or refusal if the request is not compatible with our standards.', bullets: ['KYC and source of funds when required', 'No unlawful or opaque missions', 'No promise of legal, tax, medical or administrative result'] }, { heading: 'Regulated professionals', body: 'Lawyers, tax advisors, accountants, doctors, insurers, bankers and real estate agents remain responsible for their own regulated services.' }],
      faqs: [{ question: 'Can Bosphoras refuse a client?', answer: 'Yes. We may refuse any request that is unclear, unlawful, risky or incompatible with our standards.' }, { question: 'Are introductions confidential?', answer: 'Yes, subject to legal obligations and necessary compliance checks.' }],
      cta: { label: 'Request a private assessment', href: privateAssessment }, jsonLdType: 'AboutPage', internalLinks: [{ pageId: 'about', label: 'About' }, { pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'private-assessment', label: 'Private assessment' }],
    }),
    en({
      id: 'private-club', locale: 'en', slug: '/private-access-club', title: 'Private Access Club | Bosphoras', h1: 'Bosphoras Private Access: one membership, one level of service', metaDescription: 'Bosphoras Private Access membership: 10,000 USD annual admission plus 1,000 USD monthly retainer, with priority Private Desk and luxury concierge.', shortIntro: 'Private Access is for selected clients who want permanent access to Bosphoras throughout the year. There is no hierarchy inside the club: one membership, one standard.',
      sections: [{ heading: 'Membership terms', body: 'Annual admission is 10,000 USD. Monthly retainer is 1,000 USD in addition to the annual admission. The cycle runs for 12 months and conditions may be reviewed annually.' }, { heading: 'Member benefits', body: 'Members receive priority handling, qualified introductions and luxury concierge coordination.', bullets: ['Priority access to the Bosphoras desk', 'Lawyers, tax advisors, insurers, doctors, private bankers and real estate agents', 'Private dinners, discreet evenings and activities between members', 'Priority access to clubs, restaurants, ticketing, jets, helicopters, yachts and drivers'] }, { heading: 'Selection', body: 'Membership is by sponsorship, recommendation or profile validation. Bosphoras may refuse applications without justification.' }],
      faqs: [{ question: 'Is the 1,000 USD monthly retainer included in the 10,000 USD?', answer: 'No. It is paid every month in addition to the annual admission.' }, { question: 'Can I request services without membership?', answer: 'Yes. Private Desk support starts from 6,000 USD for one year, or by tailored quote.' }],
      cta: { label: 'Apply for private membership', href: membershipApplication, secondaryLabel: 'Request Private Desk support', secondaryHref: privateAssessment }, jsonLdType: 'Service', internalLinks: [{ pageId: 'membership-application', label: 'Membership application' }, { pageId: 'private-assessment', label: 'Private Desk' }, { pageId: 'compliance', label: 'Compliance' }],
    }),
    en({
      id: 'membership-application', locale: 'en', slug: '/membership/application', title: 'Membership Application | Bosphoras', h1: 'Apply for Bosphoras Private Access', metaDescription: 'Apply for Bosphoras Private Access membership: private profile, sponsor, business, annual income level, project and confidentiality review.', shortIntro: 'Membership is selective. The form helps us understand profile, sponsor if any, business activity, annual resources, countries of interest and the level of service expected.',
      sections: [{ heading: 'Information reviewed', body: 'Bosphoras may review identity, residence, sponsor, professional activity, company, family context, annual income level, project type, urgency and expected services.', bullets: ['Sponsor or referral if any', 'Business and role', 'Country of residence and target city', 'Expected annual level of services'] }, { heading: 'Pricing reminder', body: 'Private Access membership: 10,000 USD annual admission plus 1,000 USD monthly retainer. Private Desk without membership starts from 6,000 USD for one year.' }, { heading: 'Selection process', body: 'Submitting an application does not guarantee acceptance. Bosphoras can request additional information or decline a profile.' }],
      faqs: [{ question: 'Do I need a sponsor?', answer: 'A sponsor helps, but a strong profile may also be reviewed without one.' }, { question: 'Is membership a status symbol?', answer: 'No. It is an operational access to the Bosphoras private desk.' }],
      cta: { label: 'Apply for private membership', href: contact, secondaryLabel: 'Request Private Desk support', secondaryHref: privateAssessment }, jsonLdType: 'ContactPage', internalLinks: [{ pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'compliance', label: 'Compliance' }, { pageId: 'private-assessment', label: 'Private Desk' }],
    }),
    en({
      id: 'private-assessment', locale: 'en', slug: '/private-assessment', title: 'Private Assessment | Bosphoras', h1: 'Request a confidential Private Desk assessment', metaDescription: 'Request a Bosphoras private assessment for relocation, business, legal-tax, property, health, insurance, VIP transport or membership in Turkey.', shortIntro: 'A private assessment is the first step before any serious mission. It helps us understand your objective, profile, timing, budget, city and confidentiality requirements.',
      sections: [{ heading: 'What we review', body: 'We review your country of residence, family context, business interests, target city, expected timeline and the kind of coordination needed.', bullets: ['Relocation to Turkey', 'Company setup or legal-tax coordination', 'Property, healthcare or insurance', 'Concierge, transport or membership'] }, { heading: 'Private Desk support', body: 'Classic support starts from 6,000 USD for one year, depending on the mission. More complex requests are quoted separately.' }, { heading: 'Confidentiality', body: 'Information is treated with reinforced discretion and shared only when needed for the mission.' }],
      faqs: [{ question: 'Is the assessment a contract?', answer: 'No. It is a first confidential review before any agreement.' }, { question: 'Can I apply for membership from here?', answer: 'Yes. If your profile fits Private Access, we can redirect you to the membership process.' }],
      cta: { label: 'Request a private assessment', href: contact, secondaryLabel: 'Apply for private membership', secondaryHref: membershipApplication }, jsonLdType: 'ContactPage', internalLinks: [{ pageId: 'services', label: 'Services' }, { pageId: 'private-club', label: 'Private Access Club' }, { pageId: 'compliance', label: 'Compliance' }],
    }),
  ],
};
