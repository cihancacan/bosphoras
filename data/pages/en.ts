import type { MainPageContent } from "./types";

export const enPages: MainPageContent[] = [
  {
    id: "home",
    locale: "en",
    slug: "/",
    title: "Bosphoras: Private Office for Turkey | Bosphoras",
    h1: "A discreet private office for those choosing Turkey",
    metaDescription:
      "Bosphoras is a premium private office in Turkey, offering bespoke guidance on relocation, property, business and family life through a trusted network.",
    shortIntro:
      "Bosphoras is a premium private office serving international investors, families and entrepreneurs who consider Turkey as a chapter in their lives. We coordinate sensitive matters with discretion, working alongside vetted lawyers, advisors and partners. Our role is quiet, structured and accountable.",
    sections: [
      {
        heading: "A single point of trust in Turkey",
        body:
          "From the first conversation to long after you settle, Bosphoras serves as a single point of contact across legal, fiscal, residential and lifestyle matters. We do not replace your existing advisors; we coordinate with them, translate context and ensure that every decision in Turkey is made with full information.",
      },
      {
        heading: "Bespoke, never templated",
        body:
          "No two families, no two operating companies and no two estates are alike. Each engagement begins with a private assessment, where we listen carefully before suggesting any direction. The recommendations that follow are tailored, time-stamped and always reviewed by qualified professionals.",
        bullets: [
          "Personal coordination with a dedicated private office lead",
          "Independent introductions to lawyers, accountants and notaries",
          "Discreet handling of family, residential and corporate matters",
          "Clear written briefings in your preferred language",
        ],
      },
      {
        heading: "Quietly present across the country",
        body:
          "Our trusted network spans Istanbul, Bodrum, Antalya and the wider Aegean and Mediterranean coasts. Whether you require a year-round residence, a seasonal home, an operating headquarters or a family medical pathway, our local relationships make introductions credible and unhurried.",
      },
    ],
    faqs: [
      {
        question: "Is Bosphoras a law firm or a real estate agency?",
        answer:
          "Neither. Bosphoras is a private office that coordinates trusted independent professionals. Legal opinions are issued by licensed lawyers, tax positions by certified accountants, and property transactions by regulated brokers. We orchestrate, document and verify.",
      },
      {
        question: "Do you guarantee residency or citizenship outcomes?",
        answer:
          "No. Immigration and citizenship matters depend entirely on Turkish authorities and your individual file. We provide guidance, prepare documents with qualified counsel and accompany you through the process; we never promise an outcome.",
      },
      {
        question: "How do we begin?",
        answer:
          "Most clients begin with a confidential private assessment. We listen, understand your priorities and only then suggest whether and how a Turkish chapter could make sense for your family or business.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "WebSite",
    internalLinks: [
      { pageId: "about", label: "About Bosphoras" },
      { pageId: "services", label: "Our services" },
      { pageId: "private-club", label: "Private Access Club" },
    ],
  },
  {
    id: "about",
    locale: "en",
    slug: "/about",
    title: "About Bosphoras: A Private Office in Turkey | Bosphoras",
    h1: "A private office shaped by discretion and craft",
    metaDescription:
      "Discover Bosphoras: an independent private office in Turkey curating bespoke guidance for international families and entrepreneurs through a vetted network.",
    shortIntro:
      "Bosphoras was created to answer a recurring question among international clients: who do I trust in Turkey? Our answer is a private office that values discretion above visibility, craft above scale, and continuity above transactions. We work for a small number of families and principals at any given time.",
    sections: [
      {
        heading: "Origins and intent",
        body:
          "Bosphoras was founded by professionals who have lived between several jurisdictions and learned that the difference between a successful relocation and a complicated one rarely lies in the law itself. It lies in coordination, cultural translation and the ability to anticipate. Our office exists to provide exactly that.",
      },
      {
        heading: "How we work",
        body:
          "We accept a limited number of mandates. Each begins with a private assessment, continues with a structured plan and is reviewed at quiet milestones. Communication is written, calm and traceable. We prefer fewer meetings and clearer documents.",
        bullets: [
          "A single, named lead for every engagement",
          "Independent professionals, vetted and rotated as needed",
          "Encrypted document handling and conservative data practices",
          "Multilingual coordination across English, French, Russian, Turkish and Arabic",
        ],
      },
      {
        heading: "What we are not",
        body:
          "We are not a marketing channel for property developers, not a citizenship agency and not a concierge that promises every wish. Our value lies in honest counsel and quiet introductions. When something falls outside our remit, we say so plainly.",
      },
    ],
    faqs: [
      {
        question: "Are you regulated?",
        answer:
          "Bosphoras itself is a private office, not a regulated profession. The lawyers, accountants and brokers we coordinate are each regulated by their respective Turkish bodies. We document this transparently in every engagement.",
      },
      {
        question: "Where are you based?",
        answer:
          "Our private office maintains a presence in Istanbul, with curated relationships in Bodrum, Antalya and the wider Aegean and Mediterranean regions. Meetings are typically arranged at our private rooms or at locations of your choosing.",
      },
    ],
    cta: {
      label: "Speak with our private office",
      href: "/private-assessment",
    },
    jsonLdType: "AboutPage",
    internalLinks: [
      { pageId: "compliance", label: "Compliance and trust" },
      { pageId: "partners", label: "Our partner network" },
      { pageId: "services", label: "Our services" },
    ],
  },
  {
    id: "services",
    locale: "en",
    slug: "/services",
    title: "Bespoke Services for International Clients | Bosphoras",
    h1: "Services curated around your Turkish chapter",
    metaDescription:
      "Explore the Bosphoras services: relocation, legal and tax advisory, business setup, property, offices, health, transport and discreet membership.",
    shortIntro:
      "Our services are designed for clients who value silence and structure. From your first arrival in Turkey to the long-term coordination of your interests, each service is delivered through trusted independent professionals and quietly orchestrated by your dedicated private office lead.",
    sections: [
      {
        heading: "Establishing your presence",
        body:
          "Whether you intend to settle, hold a seasonal residence or open a regional headquarters, Bosphoras coordinates the steps that allow you to operate from Turkey with confidence. Each step is sequenced to avoid surprises and aligned with the counsel of qualified professionals.",
        bullets: [
          "Relocation guidance for individuals and families",
          "Property identification and acquisition support",
          "Business setup and corporate structuring",
        ],
      },
      {
        heading: "Protecting your interests",
        body:
          "We pay particular attention to legal, tax and compliance topics. Documents are reviewed carefully, deadlines are tracked and your written record is preserved with strict confidentiality. We work only with qualified counsel for legal opinions and never substitute their advice.",
        bullets: [
          "Legal and tax advisory through independent firms",
          "Health and insurance pathways for the whole family",
          "Compliance assistance and document custody",
        ],
      },
      {
        heading: "Living and working with discretion",
        body:
          "Beyond paperwork, daily life in Turkey requires a quietly competent network. Our offices, transport and private access services exist for precisely this. They are not flashy; they are reliable.",
        bullets: [
          "Private offices and meeting rooms in central locations",
          "VIP transport with vetted drivers and protocols",
          "Curated membership and private access experiences",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we engage you for only one service?",
        answer:
          "Yes. Many clients begin with a single concern, such as property or business setup, and expand the engagement only if it serves them. We never bundle services that you do not need.",
      },
      {
        question: "How are fees structured?",
        answer:
          "Fees are typically fixed for defined deliverables or based on a private office retainer for ongoing coordination. They are agreed in writing before any work begins, with full transparency on third-party costs.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "CollectionPage",
    internalLinks: [
      { pageId: "relocate", label: "Relocate to Turkey" },
      { pageId: "legal-tax", label: "Legal and tax advisory" },
      { pageId: "private-club", label: "Private Access Club" },
    ],
  },
  {
    id: "relocate",
    locale: "en",
    slug: "/services/relocate-to-turkey",
    title: "Relocate to Turkey with Quiet Guidance | Bosphoras",
    h1: "Relocating to Turkey, gently and carefully",
    metaDescription:
      "Bespoke relocation guidance for families and entrepreneurs choosing Turkey. Coordination of legal, residential and family steps through a trusted private office.",
    shortIntro:
      "Relocation is rarely only an administrative matter. It is a series of personal choices about schools, neighbourhoods, healthcare, professional continuity and family rhythm. Bosphoras accompanies these decisions with patience, structure and the right introductions, while qualified counsel handles regulated matters.",
    sections: [
      {
        heading: "A staged, reversible approach",
        body:
          "We rarely advise an abrupt move. Our preferred approach is staged: an initial discovery visit, a working stay of several weeks, and only then a structured relocation plan. This protects your decisions and reduces avoidable costs.",
      },
      {
        heading: "What we coordinate",
        body:
          "Bosphoras coordinates the elements that make a relocation feel composed rather than chaotic, while keeping all regulated work with qualified professionals.",
        bullets: [
          "Initial discovery itineraries in Istanbul, Bodrum or Antalya",
          "Introductions to immigration counsel and accountants",
          "School shortlists and family integration support",
          "Residential search through vetted independent brokers",
        ],
      },
      {
        heading: "What we do not promise",
        body:
          "We do not guarantee residency permits, citizenship outcomes or specific tax results. Such matters depend on Turkish authorities and your individual file. We work with qualified professionals to prepare your documents accurately and to keep your expectations realistic.",
      },
    ],
    faqs: [
      {
        question: "How long does a relocation typically take?",
        answer:
          "From initial conversation to a settled household, most engagements run between three and twelve months, depending on the complexity of family, professional and property arrangements. We do not rush milestones.",
      },
      {
        question: "Can you support a partial relocation?",
        answer:
          "Yes. Many clients maintain a primary residence elsewhere and use Turkey as a seasonal or working base. We adapt the plan to your real life rather than to a fixed template.",
      },
      {
        question: "Do you advise on schools?",
        answer:
          "We share shortlists of internationally accredited schools and coordinate visits, while final admission decisions remain entirely with the schools themselves.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "istanbul", label: "Istanbul as a base" },
      { pageId: "legal-tax", label: "Legal and tax advisory" },
      { pageId: "property", label: "Property and residential search" },
    ],
  },
  {
    id: "istanbul",
    locale: "en",
    slug: "/destinations/istanbul",
    title: "Istanbul: A Considered Base in Turkey | Bosphoras",
    h1: "Istanbul, between continents and conversations",
    metaDescription:
      "Discover Istanbul as a base for international families and entrepreneurs: neighbourhoods, schools, healthcare and discreet introductions through Bosphoras.",
    shortIntro:
      "Istanbul rewards those who take the time to read it carefully. Beyond the obvious skyline, it is a layered city of neighbourhoods, professional circles and quiet routines. Bosphoras helps clients choose the right base within it, with respect for cultural codes and family priorities.",
    sections: [
      {
        heading: "Reading the neighbourhoods",
        body:
          "Choosing a district in Istanbul is choosing a daily rhythm. Bebek and Etiler offer waterside calm and proximity to international schools; Nisantasi and Tesvikiye provide an elegant urban density; Kandilli and Cengelkoy on the Asian side bring villages within a global city. We share honest perspectives on each, never pushing a fixed answer.",
      },
      {
        heading: "What we coordinate in Istanbul",
        body:
          "Our private office maintains long-standing relationships in the city, which translates into faster, more accurate introductions for our clients.",
        bullets: [
          "Residential and family-friendly neighbourhood guidance",
          "Introductions to international schools and tutors",
          "Trusted medical contacts and private clinics",
          "Discreet meeting rooms and private offices",
        ],
      },
      {
        heading: "A working city, not a postcard",
        body:
          "Many clients use Istanbul as a regional base for the wider Mediterranean, the Caucasus and the Gulf. We help structure that working life with offices, transport and curated memberships, leaving regulated matters to qualified counsel.",
      },
    ],
    faqs: [
      {
        question: "Is Istanbul suitable for families with children?",
        answer:
          "Yes, with careful neighbourhood selection. Several districts offer green spaces, international schools and reliable healthcare. We share an honest reading of each option, including its trade-offs.",
      },
      {
        question: "Can Bosphoras assist with rentals as well as purchases?",
        answer:
          "Yes. Many clients begin with a long-term rental in a chosen neighbourhood before deciding whether to acquire. All transactions are coordinated through regulated independent brokers.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Place",
    internalLinks: [
      { pageId: "property", label: "Property and residential search" },
      { pageId: "offices", label: "Private offices in Istanbul" },
      { pageId: "transport", label: "VIP transport in Istanbul" },
    ],
  },
  {
    id: "bodrum",
    locale: "en",
    slug: "/destinations/bodrum",
    title: "Bodrum: A Discreet Aegean Chapter | Bosphoras",
    h1: "Bodrum, a coastline read with care",
    metaDescription:
      "Discover Bodrum as a private base on the Aegean: villages, residences, marinas and discreet introductions for international families through Bosphoras.",
    shortIntro:
      "Bodrum is no longer a single town but a chain of villages along the Aegean, each with its own character. Yalikavak, Turkbuku, Golturkbuku, Gumusluk and others suit different sensibilities. Bosphoras helps clients understand these subtleties before any commitment is made.",
    sections: [
      {
        heading: "Choosing your village, not just your villa",
        body:
          "The most common mistake we observe in Bodrum is choosing a property before choosing a village. Each cove has its own atmosphere, season and community. We accompany discovery visits and share candid perspectives on what fits a family and what does not.",
      },
      {
        heading: "What we coordinate on the peninsula",
        body:
          "Bodrum requires a steady, local network for everything from estate maintenance to medical access. Bosphoras curates and verifies that network for you.",
        bullets: [
          "Residential search through vetted brokers",
          "Estate, household and seasonal staff coordination",
          "Marina, yacht and charter introductions",
          "Discreet medical and family contacts",
        ],
      },
      {
        heading: "A seasonal base done well",
        body:
          "Many clients use Bodrum as a several-month base each year, alongside Istanbul or another residence. The right structure prevents the property from becoming a burden and keeps each return effortless.",
      },
    ],
    faqs: [
      {
        question: "Is Bodrum suitable year-round?",
        answer:
          "Some villages remain animated outside the summer season, while others quiet considerably. We share a realistic monthly rhythm before any decision, and we do not romanticise what is in fact a seasonal coast.",
      },
      {
        question: "Can you help with property maintenance when we are away?",
        answer:
          "Yes. Bosphoras coordinates trusted estate managers, household staff and security partners so that the property is cared for in your absence. Contracts remain directly between you and the providers.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Place",
    internalLinks: [
      { pageId: "property", label: "Property and residential search" },
      { pageId: "transport", label: "VIP transport on the Aegean" },
      { pageId: "private-club", label: "Private Access Club" },
    ],
  },
  {
    id: "antalya",
    locale: "en",
    slug: "/destinations/antalya",
    title: "Antalya: Mediterranean Living, Carefully Curated | Bosphoras",
    h1: "Antalya, a coastline of considered choices",
    metaDescription:
      "Antalya as a base for families and investors: neighbourhoods, healthcare, schools and discreet introductions, coordinated by the Bosphoras private office.",
    shortIntro:
      "Antalya offers a Mediterranean climate, mature healthcare infrastructure and a range of residential options from city centre to coastal villages such as Kalkan, Kas and Kemer. Bosphoras helps clients distinguish between holiday romanticism and the realities of living year-round.",
    sections: [
      {
        heading: "From city to coast",
        body:
          "Antalya itself is a working city with international schools, private hospitals and direct flight connections. Its surrounding villages offer quieter rhythms. We help you weigh both, depending on whether the priority is family infrastructure or seasonal calm.",
      },
      {
        heading: "What we coordinate in Antalya",
        body:
          "Our network on the southern coast extends across legal, residential, medical and lifestyle matters, with all regulated services entrusted to qualified professionals.",
        bullets: [
          "Residential search in Antalya, Kalkan, Kas and Kemer",
          "Introductions to private hospitals and clinicians",
          "School shortlists and family settling support",
          "Discreet transport and household staff coordination",
        ],
      },
      {
        heading: "A pragmatic, not idealised, picture",
        body:
          "We are candid about traffic, seasonality and the differences between marketing brochures and daily life. Our purpose is to help you choose well, not to flatter the choice.",
      },
    ],
    faqs: [
      {
        question: "Is Antalya appropriate for retirees and semi-retirees?",
        answer:
          "Many international clients use Antalya as a partial-year base in semi-retirement. Healthcare access, climate and direct flights are common reasons. We share an honest picture of practicalities before any commitment.",
      },
      {
        question: "Can Bosphoras coordinate medical appointments?",
        answer:
          "Yes, through our trusted clinicians and private hospitals. We arrange introductions and logistics; medical decisions remain entirely between you and the practitioners.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Place",
    internalLinks: [
      { pageId: "health-insurance", label: "Health and insurance" },
      { pageId: "property", label: "Property and residential search" },
      { pageId: "transport", label: "VIP transport on the coast" },
    ],
  },
  {
    id: "legal-tax",
    locale: "en",
    slug: "/services/legal-tax-advisory",
    title: "Legal and Tax Advisory in Turkey | Bosphoras",
    h1: "Legal and tax matters, handled by qualified counsel",
    metaDescription:
      "Coordinated legal and tax advisory in Turkey through vetted independent firms. Bosphoras orchestrates without ever replacing qualified professional opinions.",
    shortIntro:
      "Legal and tax topics deserve calm precision. Bosphoras does not issue legal opinions itself; instead, we coordinate independent law firms and certified accountants whose work we have observed over time. Our role is to translate context, ensure deadlines and keep your written record clean.",
    sections: [
      {
        heading: "How counsel is selected",
        body:
          "We maintain working relationships with several Turkish law firms and accounting practices. The right partner for a given mandate depends on the subject matter, the personalities involved and the documents already in place. We propose, you decide, and the engagement letter is signed directly with the firm.",
        bullets: [
          "Independent law firms regulated by the Istanbul Bar",
          "Certified accountants for tax positions and filings",
          "Notaries for authentications and translations",
          "Family lawyers for matters involving minors and inheritance",
        ],
      },
      {
        heading: "What we typically coordinate",
        body:
          "Our role is to keep matters orderly, not to substitute professional judgment. The professionals we coordinate retain full responsibility for the opinions they issue.",
        bullets: [
          "Residency and immigration files prepared by qualified counsel",
          "Corporate structuring reviews",
          "Property due diligence and title work",
          "Family, inheritance and estate planning conversations",
        ],
      },
      {
        heading: "What we do not do",
        body:
          "We do not promise tax savings, residency outcomes or favourable rulings. Tax positions are ultimately determined by Turkish authorities and the courts. Our discipline is to set realistic expectations from the first meeting onwards.",
      },
    ],
    faqs: [
      {
        question: "Can you coordinate with our existing advisors abroad?",
        answer:
          "Yes. Many engagements involve close coordination with your existing lawyers, accountants and family offices in other jurisdictions. We facilitate that dialogue with written summaries and shared timelines.",
      },
      {
        question: "Are conversations confidential?",
        answer:
          "Yes. Confidentiality is foundational. We use encrypted channels, conservative document handling and, where appropriate, non-disclosure agreements with each professional we introduce.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "compliance", label: "Compliance and trust" },
      { pageId: "business-setup", label: "Business setup" },
      { pageId: "relocate", label: "Relocate to Turkey" },
    ],
  },
  {
    id: "business-setup",
    locale: "en",
    slug: "/services/business-setup",
    title: "Business Setup in Turkey for Founders | Bosphoras",
    h1: "Establishing a Turkish entity, with foresight",
    metaDescription:
      "Discreet guidance on business setup and corporate structuring in Turkey, coordinated through trusted independent counsel and accountants.",
    shortIntro:
      "Establishing a business in Turkey can be straightforward; making sure it is the right structure for your wider interests requires foresight. Bosphoras helps founders ask the harder questions before incorporation, and coordinates qualified counsel for the formal steps.",
    sections: [
      {
        heading: "Beginning with the right questions",
        body:
          "Before any formation, we explore the broader picture: the activities planned, the relationships with foreign group entities, the expected workforce and the tax residency of decision-makers. Only then do we discuss form, capitalisation and governance with qualified counsel.",
      },
      {
        heading: "What we coordinate",
        body:
          "Each step is delivered by qualified independent professionals; Bosphoras orchestrates and documents.",
        bullets: [
          "Choice of entity through legal and tax counsel",
          "Incorporation, registrations and bank introductions",
          "Accounting, payroll and reporting setup",
          "Office, address and operational arrangements",
        ],
      },
      {
        heading: "A long-term relationship, not just a registration",
        body:
          "An entity is born easily and operated patiently. Bosphoras can remain involved as a private office lead, ensuring that filings, audits and governance reviews are handled without surprises.",
      },
    ],
    faqs: [
      {
        question: "Can a foreign founder hold all shares?",
        answer:
          "In most common entity types, yes. Specifics depend on activity and applicable regulations and must be confirmed by qualified counsel for your situation. We coordinate that confirmation.",
      },
      {
        question: "Do you guarantee bank account opening?",
        answer:
          "No. Banks apply their own onboarding criteria and exercise full discretion. We prepare the file carefully with counsel and accompany you through introductions, while never promising a specific outcome.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "legal-tax", label: "Legal and tax advisory" },
      { pageId: "offices", label: "Private offices" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
  {
    id: "health-insurance",
    locale: "en",
    slug: "/services/health-insurance",
    title: "Health and Insurance Pathways in Turkey | Bosphoras",
    h1: "Health and insurance, considered for the whole family",
    metaDescription:
      "Discreet introductions to private hospitals, clinicians and insurers in Turkey, coordinated by Bosphoras through a trusted independent network.",
    shortIntro:
      "Healthcare and insurance shape a family's daily peace of mind. Bosphoras coordinates trusted clinicians, hospitals and insurers across Istanbul, Antalya and other cities, while medical decisions remain entirely between you and your practitioners.",
    sections: [
      {
        heading: "A network we have observed over time",
        body:
          "Our medical introductions come from years of careful observation. We do not work on commissions from clinics; we share contacts that have served clients well. The relationship between you and the practitioner remains direct and confidential.",
      },
      {
        heading: "What we coordinate",
        body:
          "We organise the practical side, leaving clinical and underwriting decisions to qualified professionals.",
        bullets: [
          "Introductions to private hospitals and clinicians",
          "Family check-up itineraries and second opinions",
          "Private health insurance reviews with regulated brokers",
          "Travel and emergency support coordination",
        ],
      },
      {
        heading: "Honest boundaries",
        body:
          "We do not make medical recommendations. We do not promise insurance acceptance. Insurers and clinicians retain full discretion. Our role is purely organisational, with strict confidentiality.",
      },
    ],
    faqs: [
      {
        question: "Can you arrange medical second opinions?",
        answer:
          "Yes. Many clients benefit from a second opinion across different clinics or jurisdictions. We facilitate the logistics and document handling; the medical view remains entirely with the clinicians.",
      },
      {
        question: "Do you advise on which insurer to choose?",
        answer:
          "We do not recommend a specific insurer. We introduce regulated brokers who present options for you to compare, with full disclosure of fees and exclusions.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "relocate", label: "Relocate to Turkey" },
      { pageId: "antalya", label: "Antalya as a healthcare base" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
  {
    id: "property",
    locale: "en",
    slug: "/services/property-relocation",
    title: "Property Search and Residential Relocation | Bosphoras",
    h1: "Choosing a residence in Turkey, without haste",
    metaDescription:
      "Discreet, broker-independent guidance on property search and residential relocation in Turkey. Coordinated by Bosphoras through vetted partners.",
    shortIntro:
      "A residence is a long conversation between geography, family and intention. Bosphoras accompanies that conversation calmly and works only with regulated, independent brokers. We do not represent developers and we do not earn commissions on transactions we coordinate.",
    sections: [
      {
        heading: "Search, not sales",
        body:
          "Our approach begins with understanding how you actually intend to live: full year, seasonal, working from home, hosting family. Only then do we frame the search. We are willing to advise against a property when something is off, even if it is the easier path.",
      },
      {
        heading: "What we coordinate",
        body:
          "From the first viewings to the long after-care of a residence, every step is sequenced and documented.",
        bullets: [
          "Independent broker shortlists across Istanbul, Bodrum and Antalya",
          "Legal due diligence by qualified counsel",
          "Notary, translation and registration steps",
          "Estate, household and seasonal management",
        ],
      },
      {
        heading: "Renting before buying",
        body:
          "We frequently suggest a long-term rental in the preferred neighbourhood before committing to a purchase. This protects your decision and reveals what brochures cannot.",
      },
    ],
    faqs: [
      {
        question: "Do you receive commissions from sellers or developers?",
        answer:
          "No. Bosphoras is paid by the client only, on transparent terms agreed in writing. This independence is essential to the integrity of our advice.",
      },
      {
        question: "Can a property purchase support a residency or citizenship file?",
        answer:
          "Property may be relevant to certain immigration pathways, but outcomes depend entirely on Turkish authorities and your overall file. We coordinate with qualified counsel and never promise a specific result.",
      },
      {
        question: "What if we change our minds during the search?",
        answer:
          "That is welcome. A search that ends with no purchase and a clearer view of your priorities is still a successful engagement.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "istanbul", label: "Istanbul neighbourhoods" },
      { pageId: "bodrum", label: "Bodrum villages" },
      { pageId: "legal-tax", label: "Legal and tax advisory" },
    ],
  },
  {
    id: "offices",
    locale: "en",
    slug: "/services/offices",
    title: "Private Offices and Meeting Rooms in Turkey | Bosphoras",
    h1: "A composed working environment in Turkey",
    metaDescription:
      "Discreet private offices and meeting rooms in Istanbul and beyond, coordinated by Bosphoras for international principals and family businesses.",
    shortIntro:
      "Some conversations require a private room, a reliable connection and a setting that is calm rather than impressive. Bosphoras provides access to discreet offices and meeting rooms in central locations, suitable for principals, family offices and visiting teams.",
    sections: [
      {
        heading: "Considered settings, not co-working",
        body:
          "Our offices are quiet, traditional in feel and adapted to confidential work. They are not branded co-working spaces. Each location is selected for its silence, its address and the discretion of its staff.",
      },
      {
        heading: "What we offer",
        body:
          "Spaces are made available on a flexible basis, by the day, week or month, with full operational support.",
        bullets: [
          "Private offices with secure access",
          "Meeting and board rooms with translation support on request",
          "Confidential mail and document handling",
          "Coordinated reception in your name where appropriate",
        ],
      },
      {
        heading: "Aligned with your wider engagement",
        body:
          "Office access integrates naturally with our other services, from private transport to legal coordination, so that a working day in Turkey unfolds without friction.",
      },
    ],
    faqs: [
      {
        question: "Are these offices suitable as a registered company address?",
        answer:
          "In some configurations, yes, subject to qualified legal review of your structure and activity. We coordinate that review before any commitment is made.",
      },
      {
        question: "Can family or staff use the space alongside us?",
        answer:
          "Yes, within agreed limits. We define access protocols at the start of each engagement to keep the experience composed and private.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "business-setup", label: "Business setup" },
      { pageId: "transport", label: "VIP transport" },
      { pageId: "private-club", label: "Private Access Club" },
    ],
  },
  {
    id: "transport",
    locale: "en",
    slug: "/services/vip-transport",
    title: "Discreet VIP Transport in Turkey | Bosphoras",
    h1: "Private transport, consistently calm",
    metaDescription:
      "Discreet VIP transport across Turkey, with vetted drivers and protocols. Coordinated by Bosphoras for principals, families and visiting partners.",
    shortIntro:
      "Movement in Turkish cities is rarely simple. Bosphoras coordinates private transport with vetted drivers, carefully maintained vehicles and clear protocols, so that arrivals and departures are calm rather than improvised.",
    sections: [
      {
        heading: "A network of vetted drivers",
        body:
          "Our drivers are selected for their experience, discretion and language ability. They understand the city, the routes and the cadence of a private engagement. Vehicles are maintained to a consistent standard.",
      },
      {
        heading: "What we coordinate",
        body:
          "Whether for a single arrival or a sustained programme, transport is matched to your timetable.",
        bullets: [
          "Airport arrivals and departures with private liaison",
          "Daily transport for working visits and family agendas",
          "Inter-city transfers, including coastal regions",
          "Coordination with security partners when appropriate",
        ],
      },
      {
        heading: "Discretion is the priority",
        body:
          "Vehicles are unmarked, communications are minimal and itineraries are shared only with those who need them. The objective is invisibility, not visibility.",
      },
    ],
    faqs: [
      {
        question: "Do you provide armoured vehicles?",
        answer:
          "We can introduce regulated security partners who provide such vehicles when warranted. The decision to use them is made carefully, in conjunction with qualified security advisors.",
      },
      {
        question: "Can transport be arranged for family members travelling separately?",
        answer:
          "Yes, with the same standards of discretion. We define communication and identification protocols in advance to keep arrivals smooth and private.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "istanbul", label: "Istanbul" },
      { pageId: "bodrum", label: "Bodrum" },
      { pageId: "private-club", label: "Private Access Club" },
    ],
  },
  {
    id: "private-club",
    locale: "en",
    slug: "/private-access-club",
    title: "The Bosphoras Private Access Club | Bosphoras",
    h1: "A quiet circle of considered access",
    metaDescription:
      "The Bosphoras Private Access Club: a curated, discreet circle offering access to trusted partners, places and experiences across Turkey.",
    shortIntro:
      "The Private Access Club is the heart of our network. It exists for clients who want a sustained relationship with Turkey beyond a single transaction: a quiet circle of trusted partners, addresses and experiences, accessed by introduction and protected by discretion.",
    sections: [
      {
        heading: "Membership by introduction",
        body:
          "We do not advertise places in the Club. Membership is offered after a private assessment, when there is a clear fit between the client's intentions and the spirit of the circle. We prefer a smaller, more attentive group to a wider, looser one.",
      },
      {
        heading: "What members appreciate",
        body:
          "Access is curated, not exhaustive. Each introduction reflects relationships maintained over time.",
        bullets: [
          "Vetted private clinicians, lawyers and accountants",
          "Discreet hospitality, residences and seasonal venues",
          "Cultural, family and educational experiences",
          "A dedicated lead for sensitive coordination",
        ],
      },
      {
        heading: "What it is not",
        body:
          "It is not a loyalty programme. It is not a directory. It is not a guarantee of outcomes. It is a quietly maintained relationship, paced by trust.",
      },
    ],
    faqs: [
      {
        question: "How is membership offered?",
        answer:
          "Following a private assessment, we may extend an invitation if the engagement and our network are well aligned. We do not invite clients we cannot serve well.",
      },
      {
        question: "Is there a public price list?",
        answer:
          "No. Terms are discussed privately and adapted to the scope of the relationship. Transparency on fees is provided in writing before any commitment.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "membership-card", label: "The membership card" },
      { pageId: "premium-cardholders", label: "Premium cardholders" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
  {
    id: "membership-card",
    locale: "en",
    slug: "/membership/card",
    title: "The Bosphoras Membership Card | Bosphoras",
    h1: "A discreet sign of a sustained relationship",
    metaDescription:
      "The Bosphoras membership card: a discreet, personal token of a sustained relationship with our private office and trusted network in Turkey.",
    shortIntro:
      "The Bosphoras membership card is not a marketing object. It is a discreet, personal token of a sustained relationship between the cardholder and our private office. It signals continuity and certain pre-arranged conventions, never automatic privileges.",
    sections: [
      {
        heading: "What the card represents",
        body:
          "The card identifies you to our internal coordination only. It signals that your file, your preferences and your trusted contacts are known to us, allowing us to respond more quickly and more accurately when you reach out.",
      },
      {
        heading: "How it is used",
        body:
          "The card is used in the background of the relationship, not as a public credential.",
        bullets: [
          "Faster recognition by your private office lead",
          "Access to pre-arranged protocols across our network",
          "Discreet coordination of recurring services",
          "A consistent point of contact across cities",
        ],
      },
      {
        heading: "Boundaries we keep",
        body:
          "The card is not a payment instrument, not a public membership badge and not a claim to legal status of any kind. It serves only the relationship between you and our office.",
      },
    ],
    faqs: [
      {
        question: "Can the card be issued to family members?",
        answer:
          "Within agreed limits, yes. Each cardholder is recorded individually, and access protocols are defined to protect the family's confidentiality.",
      },
      {
        question: "What happens if a card is lost?",
        answer:
          "It can be cancelled discreetly and reissued. As the card carries no payment function, the operational risk is limited and the procedure is simple.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "private-club", label: "Private Access Club" },
      { pageId: "premium-cardholders", label: "Premium cardholders" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
  {
    id: "premium-cardholders",
    locale: "en",
    slug: "/membership/premium-cardholders",
    title: "Premium Cardholders at Bosphoras | Bosphoras",
    h1: "An attentive relationship for premium cardholders",
    metaDescription:
      "Premium cardholders at Bosphoras enjoy a sustained, attentive relationship with our private office and curated partners across Turkey.",
    shortIntro:
      "Premium cardholders are clients with a long-term engagement, where our private office is a steady presence in their Turkish chapter. The relationship is paced patiently and adjusted as priorities evolve, always with discretion and accountability.",
    sections: [
      {
        heading: "A sustained, named relationship",
        body:
          "Premium cardholders work with a dedicated private office lead and a small backup team that knows the file. Continuity matters: it is what allows us to anticipate rather than merely react.",
      },
      {
        heading: "What is typically arranged",
        body:
          "Each engagement is defined privately, but several themes recur for premium cardholders.",
        bullets: [
          "Annual review of legal, fiscal and family arrangements with qualified counsel",
          "Coordinated property and household management",
          "Curated cultural, educational and family experiences",
          "Discreet introductions across cities and seasons",
        ],
      },
      {
        heading: "Limits we observe",
        body:
          "Even for premium cardholders, we do not promise residency, citizenship or specific tax outcomes. Our discipline is to protect your decisions through honest counsel, not to embellish them.",
      },
    ],
    faqs: [
      {
        question: "Is premium membership renewed automatically?",
        answer:
          "No. Each cycle is reviewed in conversation, and we are equally comfortable suggesting that a relationship pause if the engagement no longer serves the client.",
      },
      {
        question: "How is privacy preserved across a long relationship?",
        answer:
          "Through narrow access internally, encrypted document handling, written briefings and regular destruction of documents that are no longer needed. Privacy is treated as an ongoing practice, not a one-time setting.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "Service",
    internalLinks: [
      { pageId: "private-club", label: "Private Access Club" },
      { pageId: "membership-card", label: "The membership card" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
  {
    id: "compliance",
    locale: "en",
    slug: "/compliance-trust",
    title: "Compliance and Trust at Bosphoras | Bosphoras",
    h1: "Trust built on disciplined compliance",
    metaDescription:
      "How Bosphoras approaches compliance, confidentiality and ethical boundaries in its private office work with international clients in Turkey.",
    shortIntro:
      "Discretion and compliance are not in tension at Bosphoras; they reinforce each other. We accept only mandates that we can serve cleanly, and we are equally comfortable declining work that does not fit. Trust is built one careful decision at a time.",
    sections: [
      {
        heading: "Onboarding with care",
        body:
          "Each engagement begins with a structured onboarding, including identity verification, source-of-funds discussion with qualified counsel and a clear written engagement letter. We treat these steps as a sign of respect rather than a formality.",
      },
      {
        heading: "Ongoing disciplines",
        body:
          "Compliance is sustained through habits we maintain throughout the relationship.",
        bullets: [
          "Independent counsel for every regulated topic",
          "Encrypted document handling with strict access controls",
          "Conflict checks and rotation of professionals where appropriate",
          "Regular review of engagements and termination clauses",
        ],
      },
      {
        heading: "Boundaries we will not cross",
        body:
          "We do not advise on or facilitate arrangements designed to circumvent applicable laws or sanctions. We do not promise residency or citizenship outcomes. We decline introductions that would conflict with our standards, even if profitable.",
      },
    ],
    faqs: [
      {
        question: "What due diligence do you carry out on prospective clients?",
        answer:
          "We carry out reasonable identity and source-of-funds checks with qualified counsel before any engagement. The depth of checks is proportionate to the mandate. The process is conducted respectfully and confidentially.",
      },
      {
        question: "How do you handle sensitive documents?",
        answer:
          "Documents are stored on encrypted systems, access is granted on a need-to-know basis and material is securely destroyed when no longer required. Written briefings replace ad hoc messaging wherever possible.",
      },
    ],
    cta: {
      label: "Speak with our private office",
      href: "/private-assessment",
    },
    jsonLdType: "AboutPage",
    internalLinks: [
      { pageId: "about", label: "About Bosphoras" },
      { pageId: "legal-tax", label: "Legal and tax advisory" },
      { pageId: "partners", label: "Partner network" },
    ],
  },
  {
    id: "partners",
    locale: "en",
    slug: "/partners-network",
    title: "Our Partner Network in Turkey | Bosphoras",
    h1: "A trusted network, quietly maintained",
    metaDescription:
      "The Bosphoras partner network: independent lawyers, accountants, brokers and clinicians, observed over time and curated with care.",
    shortIntro:
      "Our partner network is the foundation of what we do. It is composed of independent professionals we have observed over time and clients we have served patiently. We do not earn commissions from these partners; integrity of the introduction is paramount.",
    sections: [
      {
        heading: "How partners are selected",
        body:
          "We add partners slowly. Each is observed across several mandates before becoming a recommended introduction. Specialisation, character and reliability matter equally.",
      },
      {
        heading: "Categories within the network",
        body:
          "The network covers the disciplines our clients most often need, while remaining intentionally narrow in each category.",
        bullets: [
          "Independent law firms and notaries",
          "Certified accountants and tax advisors",
          "Regulated property brokers and surveyors",
          "Clinicians, schools and family service providers",
        ],
      },
      {
        heading: "Independence above convenience",
        body:
          "When a partner no longer meets our standards, the relationship is paused or ended. We are willing to lose a convenient referral to preserve the credibility of the network.",
      },
    ],
    faqs: [
      {
        question: "Can clients choose their own partners outside the network?",
        answer:
          "Of course. Many clients have existing professionals abroad and locally. We work alongside them rather than replacing them, with written summaries to keep everyone aligned.",
      },
      {
        question: "Do you publish a list of partners?",
        answer:
          "No. Introductions are made privately and only when relevant to the engagement. This protects both the partners and the discretion that makes the network valuable.",
      },
    ],
    cta: {
      label: "Speak with our private office",
      href: "/private-assessment",
    },
    jsonLdType: "AboutPage",
    internalLinks: [
      { pageId: "compliance", label: "Compliance and trust" },
      { pageId: "legal-tax", label: "Legal and tax advisory" },
      { pageId: "about", label: "About Bosphoras" },
    ],
  },
  {
    id: "faq",
    locale: "en",
    slug: "/faq",
    title: "Frequently Asked Questions | Bosphoras",
    h1: "Honest answers to recurring questions",
    metaDescription:
      "Frequently asked questions about Bosphoras, our private office, compliance, fees and the way we coordinate trusted professionals across Turkey.",
    shortIntro:
      "These are the questions clients ask most often before a first conversation. The answers reflect how we actually work, with the same calm and the same boundaries we maintain throughout an engagement.",
    sections: [
      {
        heading: "About the private office",
        body:
          "Bosphoras is a private office: a coordinator of trusted independent professionals. We do not issue legal opinions, file tax returns or sell property. We orchestrate, document and verify, with discretion as our default setting.",
      },
      {
        heading: "About engagements",
        body:
          "Each engagement begins with a private assessment and is governed by a written agreement. Fees, scope and duration are clear before any work begins, and revisited at quiet milestones thereafter.",
      },
      {
        heading: "About expectations",
        body:
          "We are deliberate about what we promise. Outcomes that depend on Turkish authorities, banks or counterparties are presented as such, with realistic timelines and a candid view of risk.",
      },
    ],
    faqs: [
      {
        question: "Do you guarantee residency or citizenship in Turkey?",
        answer:
          "No. Such matters depend entirely on Turkish authorities and your individual file. We provide guidance, prepare documents with qualified counsel and accompany you through the process, without ever promising an outcome.",
      },
      {
        question: "How are fees structured?",
        answer:
          "Fees are typically fixed for defined deliverables or based on a private office retainer for ongoing coordination. Third-party costs are passed through transparently. Everything is agreed in writing before any work begins.",
      },
      {
        question: "How is confidentiality preserved?",
        answer:
          "Through encrypted document handling, narrow internal access, written briefings and, where appropriate, non-disclosure agreements with each professional we introduce. Confidentiality is treated as an ongoing practice.",
      },
      {
        question: "Can we engage you for a single matter?",
        answer:
          "Yes. Many relationships begin with one specific concern, such as a property search or a corporate review. They expand only if it serves the client, never because we suggest it.",
      },
      {
        question: "Can we work in a language other than English?",
        answer:
          "Yes. Our private office coordinates in English, French, Russian, Turkish and Arabic, with written summaries available in your preferred language for clarity and record.",
      },
      {
        question: "What if our needs change during an engagement?",
        answer:
          "Engagements are reviewed periodically, and adjustments are common. We are equally comfortable expanding the scope, narrowing it, or pausing the relationship if priorities have shifted.",
      },
    ],
    cta: {
      label: "Request a private assessment",
      href: "/private-assessment",
    },
    jsonLdType: "FAQPage",
    internalLinks: [
      { pageId: "compliance", label: "Compliance and trust" },
      { pageId: "services", label: "Our services" },
      { pageId: "private-assessment", label: "Private assessment" },
    ],
  },
  {
    id: "private-assessment",
    locale: "en",
    slug: "/private-assessment",
    title: "Request a Private Assessment | Bosphoras",
    h1: "A confidential first conversation",
    metaDescription:
      "Begin a confidential conversation with the Bosphoras private office. Share a few details and we will respond personally, with discretion and care.",
    shortIntro:
      "A private assessment is the natural way to begin. It is a confidential conversation, free of any commitment, in which we listen carefully before suggesting whether and how we can be useful. There is no obligation to proceed and no pressure to decide.",
    sections: [
      {
        heading: "How the assessment unfolds",
        body:
          "After your initial message, we respond personally, propose a few times for a private call or in-person meeting, and ask the questions that allow us to understand your situation. If we are not the right fit, we will say so plainly and may suggest someone better suited.",
      },
      {
        heading: "What to share at this stage",
        body:
          "There is no need to send sensitive documents at the first contact. A short overview of your situation and your wishes is enough.",
        bullets: [
          "Your reasons for considering Turkey",
          "The composition of your family or business",
          "The cities or regions of interest",
          "The horizon over which you are considering decisions",
        ],
      },
      {
        heading: "What follows",
        body:
          "If, after the conversation, you wish to engage, we prepare a written proposal with scope, fees and timing. If not, the exchange remains confidential and our archives reflect that the conversation was for orientation only.",
      },
    ],
    faqs: [
      {
        question: "Is the assessment chargeable?",
        answer:
          "The initial conversation is offered without fee. If a deeper assessment requiring substantive professional time is needed, we agree the terms in writing before proceeding.",
      },
      {
        question: "How quickly do you respond?",
        answer:
          "We aim to acknowledge enquiries within one working day, with substantive responses typically within two to three. Urgent matters are flagged and addressed accordingly.",
      },
      {
        question: "Is everything we share confidential?",
        answer:
          "Yes. Confidentiality applies from the first message, whether or not an engagement follows. Documents and notes related to a conversation that does not lead to engagement are securely destroyed in due course.",
      },
    ],
    cta: {
      label: "Begin a confidential conversation",
      href: "/private-assessment",
    },
    jsonLdType: "ContactPage",
    internalLinks: [
      { pageId: "about", label: "About Bosphoras" },
      { pageId: "services", label: "Our services" },
      { pageId: "compliance", label: "Compliance and trust" },
    ],
  },
];
