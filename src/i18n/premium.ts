import type { Lang, ServiceSlug } from "./content";

/**
 * Premium content layer: founder message, personalised-enquiry CTAs, visa routes,
 * document checklist, end-to-end timeline, service intros, portfolio and contact form.
 * All official thresholds/legal details are kept as editable strings here.
 */

export type VisaRoute = {
  code: string;
  name: string;
  description: string;
  suits: string[];
  requirements: string[];
  documents: string[];
  support: string[];
  referrals: string;
  notice: string;
};

export type PortfolioEntry = {
  title: string;
  text: string;
  category: string;
  status: string;
};

export type PremiumContent = {
  founder: { eyebrow: string; title: string; paragraphs: string[]; signature: string };
  planCta: { title: string; text: string; button: string; note: string };
  serviceHeroAlt: Record<ServiceSlug, string>;
  serviceIntro: Record<ServiceSlug, { title: string; paragraphs: string[]; cta: string }>;
  consulting: {
    pageTitle: string;
    visaEyebrow: string;
    visaTitle: string;
    visaLead: string;
    labels: {
      suits: string;
      requirements: string;
      documents: string;
      support: string;
      referrals: string;
      notice: string;
      request: string;
      lastReviewed: string;
      officialSource: string;
    };
    lastReviewed: string;
    routes: VisaRoute[];
    checklist: { title: string; lead: string; items: string[]; notice: string };
    timeline: { eyebrow: string; title: string; steps: { title: string; text: string }[]; note: string };
    legalDisclaimer: string;
  };
  property: { sections: { title: string; items: string[] }[] };
  cleaning: { items: string[] };
  tours: { items: string[] };
  portfolio: { title: string; lead: string; entries: PortfolioEntry[] };
  contactForm: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    language: string;
    languageOptions: string[];
    service: string;
    people: string;
    destination: string;
    startDate: string;
    budget: string;
    budgetOptional: string;
    supportLevel: string;
    supportOptions: string[];
    message: string;
    consent: string;
    select: string;
    ctaTitle: string;
    ctaText: string;
    submit: string;
  };
};

const en: PremiumContent = {
  founder: {
    eyebrow: "Founder message",
    title: "A Personal Approach to Your Journey in Portugal",
    paragraphs: [
      "I am Gözde K., founder of TerraSu Living.",
      "I created TerraSu Living to provide a more personal, transparent and carefully managed experience for people building a new life, searching for a home, organising their documents or planning a private journey in Portugal.",
      "Your needs, priorities and expectations are unique. That is why every service is planned individually.",
      "From relocation and administrative preparation to property searches, professional cleaning and tailor-made boutique journeys, we will manage the process together with clear communication, thoughtful planning and trusted professional coordination.",
      "You will always know what the next step is, what support is included and which services require an appropriately licensed professional.",
      "TerraSu Living is not a volume-based service. It is a boutique support experience designed around you.",
    ],
    signature: "by Gözde K.",
  },
  planCta: {
    title: "Request Your Personalised Service Plan",
    text: "Every client journey is different. Tell us what you need and receive a personalised service proposal designed around your circumstances, timeline and priorities.",
    button: "Request Service & Pricing Information",
    note: "Service scope and pricing are prepared individually according to the client's needs, number of applicants, location and level of support required.",
  },
  serviceHeroAlt: {
    consulting: "Sunlit desk with documents overlooking Porto rooftops",
    property: "Elegant Porto residential street with azulejo facades at golden hour",
    cleaning: "Immaculately prepared Portuguese apartment interior in natural light",
    experiences: "Private table on a terrace overlooking the Douro Valley at sunset",
  },
  serviceIntro: {
    consulting: {
      title: "Visa, Relocation & Administrative Support",
      paragraphs: [
        "Relocating to Portugal requires more than a document list. It requires careful planning, organisation, realistic expectations and reliable local coordination.",
        "TerraSu Living provides personalised practical support from the first planning stage through arrival and settlement in Portugal.",
        "Your service plan is prepared according to your nationality, family structure, income profile, professional situation, destination and level of assistance required.",
      ],
      cta: "Request Your Personalised Service Plan",
    },
    property: {
      title: "A personal property search, not a listings feed",
      paragraphs: [
        "Finding the right home in Portugal requires more than browsing listings.",
        "I work with you to understand your preferred location, lifestyle, budget, family needs and priorities.",
        "We then build a personalised property-search plan and coordinate the process with clear communication and trusted professional support where required.",
      ],
      cta: "Request a Personalised Property Support Plan",
    },
    cleaning: {
      title: "Boutique preparation for homes and short-stay properties",
      paragraphs: [
        "A professionally prepared space creates comfort, trust and a strong first impression.",
        "Our cleaning and property-preparation services are planned according to the property type, condition, usage and required level of detail.",
      ],
      cta: "Request a Cleaning Assessment and Quote",
    },
    experiences: {
      title: "Tailor-Made Boutique Tours",
      paragraphs: [
        "No two groups travel in the same way.",
        "We design private and small-group journeys around your interests, preferred pace, dates, destination choices and special requests.",
        "From Portugal-focused experiences to Turkey–Portugal programmes and future international itineraries, every journey is created individually.",
      ],
      cta: "Request a Tailor-Made Journey Proposal",
    },
  },
  consulting: {
    pageTitle: "Visa, Relocation & Administrative Support",
    visaEyebrow: "Residence routes",
    visaTitle: "Officially verifiable residence routes",
    visaLead:
      "Each route below is presented as a general orientation. Requirements are confirmed for the year and consular jurisdiction of your application.",
    labels: {
      suits: "Who It May Suit",
      requirements: "General Requirements",
      documents: "Common Document Categories",
      support: "How TerraSu Living Can Support You",
      referrals: "Professional Referrals",
      notice: "Important Notice",
      request: "Request Personalised Support",
      lastReviewed: "Last reviewed",
      officialSource: "Official source: AIMA",
    },
    lastReviewed: "August 2026",
    routes: [
      {
        code: "D2",
        name: "Entrepreneur and Independent Professional Route",
        description:
          "Designed for people intending to establish an entrepreneurial activity, develop a business project or carry out an independent professional activity in Portugal.",
        suits: [
          "entrepreneurs",
          "independent professionals",
          "service providers",
          "business founders",
          "people presenting a viable business or professional activity plan",
        ],
        requirements: [
          "a viable business or independent professional activity plan",
          "documented means of subsistence for the stay",
          "proof of accommodation in Portugal",
          "Portuguese tax number (NIF) and banking preparation",
          "documents required by the competent consular jurisdiction",
        ],
        documents: [
          "business or professional activity documentation",
          "company or freelance registration evidence where applicable",
          "proof of funds and bank statements",
          "accommodation evidence",
          "criminal-record certificate",
          "insurance and passport documents",
        ],
        support: [
          "initial profile assessment",
          "business or professional activity document organisation",
          "business-plan coordination",
          "proof-of-funds preparation",
          "Portuguese NIF preparation",
          "bank-account preparation",
          "accommodation support",
          "document checklist",
          "referral to an accountant or lawyer where required",
          "arrival and activity setup support",
        ],
        referrals:
          "Company formation, tax structuring and legal submissions are handled by independent licensed accountants and lawyers.",
        notice:
          "TerraSu Living does not guarantee business, visa or residence approval. Decisions rest solely with the competent authorities.",
      },
      {
        code: "D7",
        name: "Retirees and People Living from Their Own Income",
        description:
          "Generally intended for retirees and applicants who can demonstrate stable and regular qualifying income allowing them to live in Portugal.",
        suits: [
          "retirees",
          "people living from pension income",
          "people living from rental income",
          "people living from dividends or interest",
          "people with other documented regular personal income",
        ],
        requirements: [
          "stable and regular qualifying income, where accepted by the competent authority",
          "proof of accommodation in Portugal",
          "Portuguese tax number (NIF) and a Portuguese bank account",
          "valid insurance and criminal-record documentation",
          "financial requirements confirmed for the year and consular jurisdiction of application",
        ],
        documents: [
          "pension or passive-income evidence",
          "bank statements",
          "property or rental income documents where relevant",
          "accommodation evidence",
          "family relationship documents where applicable",
        ],
        support: [
          "income-document organisation",
          "bank-statement preparation",
          "accommodation support",
          "NIF",
          "Portuguese bank-account support",
          "general document checklist",
          "arrival and settlement planning",
          "family document organisation where applicable",
        ],
        referrals:
          "Tax residency planning and legal submissions are referred to independent licensed tax advisers and lawyers.",
        notice:
          "Financial requirements may change and must be confirmed for the year and consular jurisdiction of application. No fixed figures are published here.",
      },
      {
        code: "D8",
        name: "Remote Work and Digital Nomad Route",
        description:
          "Designed for qualifying remote employees and independent professionals performing professional activity for clients or employers located outside Portugal.",
        suits: [
          "remote employees",
          "freelancers",
          "independent contractors",
          "digital professionals",
          "international service providers",
        ],
        requirements: [
          "employment or service relationship with clients or employers outside Portugal",
          "documented regular income, as accepted by the competent authority",
          "proof of accommodation in Portugal",
          "NIF and Portuguese bank account preparation",
          "insurance and criminal-record documentation",
        ],
        documents: [
          "remote-employment or service contracts",
          "income evidence and invoices",
          "bank statements",
          "accommodation evidence",
          "passport, photographs and insurance",
        ],
        support: [
          "remote-employment or service-contract documents",
          "income-document organisation",
          "bank statements",
          "accommodation support",
          "NIF",
          "Portuguese bank-account support",
          "document checklist",
          "arrival preparation",
          "local setup",
        ],
        referrals:
          "Freelance registration, invoicing and tax obligations are referred to independent licensed accountants.",
        notice:
          "No fixed income threshold is published here. Current thresholds must be verified from an official current source for your consular jurisdiction.",
      },
      {
        code: "Golden Visa / ARI",
        name: "Autorização de Residência para Atividade de Investimento",
        description:
          "The ARI programme is designed for eligible third-country nationals carrying out qualifying investment activity under current Portuguese law.",
        suits: [
          "eligible third-country nationals carrying out qualifying investment activity",
          "investors working with licensed legal, tax and investment professionals",
          "families requiring Portugal setup support alongside a regulated investment process",
        ],
        requirements: [
          "creation of at least 10 jobs",
          "qualifying scientific-research investment",
          "qualifying cultural or national-heritage support",
          "qualifying non-real-estate collective investment funds",
          "qualifying company capitalisation and employment creation or maintenance",
        ],
        documents: [
          "investment documentation prepared by licensed professionals",
          "proof of lawful source of funds",
          "Portuguese NIF and bank documentation",
          "passport, criminal-record certificate and insurance",
          "additional documents required by the competent authority",
        ],
        support: [
          "initial practical orientation",
          "Portugal setup support",
          "NIF and bank-account coordination",
          "accommodation and property-search support separate from the investment qualification",
          "arrival planning",
          "local settlement support",
          "coordination with independent licensed legal, tax and investment professionals",
        ],
        referrals:
          "Regulated investment, legal and financial work must be handled by appropriately licensed professionals. TerraSu Living does not advise on or arrange investments.",
        notice:
          "Property purchase alone is not a current qualifying route for ARI. Qualifying routes and conditions change; always confirm with the official AIMA source below before making any decision.",
      },
    ],
    checklist: {
      title: "Common Document Preparation Areas",
      lead: "A general preparation guide to the document areas most frequently requested.",
      items: [
        "valid passport",
        "completed application form",
        "passport photographs",
        "travel or health insurance",
        "criminal-record certificate",
        "authorisation for Portuguese criminal-record consultation where applicable",
        "proof of accommodation",
        "proof of financial means",
        "bank statements",
        "proof of income",
        "pension or passive-income evidence where relevant",
        "employment or service agreements where relevant",
        "business plan where relevant",
        "professional qualifications where relevant",
        "family relationship documents where relevant",
        "apostilles where required",
        "certified translations where required",
        "proof of tax and banking preparation where relevant",
        "additional consular documents",
      ],
      notice:
        "This is a general preparation guide. The exact list depends on nationality, country of application, consular jurisdiction, family profile and current legal requirements.",
    },
    timeline: {
      eyebrow: "End-to-end support",
      title: "From First Planning to Life in Portugal",
      steps: [
        { title: "Initial Consultation", text: "Understanding the client's situation, needs and priorities." },
        { title: "Personalised Roadmap", text: "Defining the service scope and preparation stages." },
        { title: "Document Checklist", text: "Creating a personalised preparation list." },
        { title: "Document Organisation", text: "Supporting the organisation and review of practical documents." },
        {
          title: "NIF, Banking and Administrative Preparation",
          text: "Coordinating practical setup support.",
        },
        {
          title: "Accommodation and Property Search",
          text: "Providing rental or purchase-search assistance where requested.",
        },
        {
          title: "Application Preparation Support",
          text: "Helping the client prepare for submission and appointments.",
        },
        { title: "Arrival Planning", text: "Creating a practical arrival and first-days plan." },
        { title: "Local Setup", text: "Supporting utilities, daily-life orientation and local organisation." },
        {
          title: "Ongoing Settlement Support",
          text: "Providing continued practical assistance after arrival where included.",
        },
      ],
      note: "End-to-end practical support throughout the preparation, relocation and settlement process.",
    },
    legalDisclaimer:
      "TerraSu Living provides practical consultancy, document-organisation and coordination support. It does not provide legal representation or guarantee visa, residence, banking, property or authority decisions. Regulated legal, tax, investment, property and tourism services are provided by appropriately licensed independent professionals.",
  },
  property: {
    sections: [
      {
        title: "Rental Support",
        items: [
          "needs assessment",
          "location research",
          "listing research",
          "property-owner or agency communication",
          "viewing coordination",
          "rental-file preparation",
          "move-in support",
        ],
      },
      {
        title: "Purchase Support",
        items: [
          "buyer-needs assessment",
          "property research",
          "location comparison",
          "viewing coordination",
          "communication with licensed agencies",
          "independent lawyer and mortgage-professional coordination",
          "document organisation",
          "purchase-process coordination",
        ],
      },
    ],
  },
  cleaning: {
    items: [
      "Residential Cleaning",
      "Office and Business Cleaning",
      "Airbnb and Alojamento Local Cleaning",
      "Move-In Cleaning",
      "Move-Out Cleaning",
      "Deep Cleaning",
      "Property Preparation",
      "Guest-Arrival Preparation",
      "Custom Cleaning Plans",
    ],
  },
  tours: {
    items: [
      "Private Portugal Tours",
      "Porto and Northern Portugal",
      "Lisbon and Central Portugal",
      "Douro Valley",
      "Cultural and Culinary Journeys",
      "Wellness and Yoga Groups",
      "Women's Private Groups",
      "Family Programmes",
      "Small Corporate Groups",
      "Portugal–Turkey Programmes",
      "Turkey–Portugal Programmes",
      "Tailor-Made International Journeys",
      "Multi-Destination Programmes",
    ],
  },
  portfolio: {
    title: "Selected Journeys & Service Areas",
    lead: "Selected areas of work, presented as scopes of service rather than client testimonials.",
    entries: [
      {
        title: "Relocation Journey Planning",
        text: "A personalised roadmap from first planning conversation to arrival, with a clear order of steps.",
        category: "Consulting",
        status: "Coordination",
      },
      {
        title: "Administrative Setup",
        text: "NIF, banking and everyday administrative preparation organised into one calm sequence.",
        category: "Consulting",
        status: "Completed",
      },
      {
        title: "Property Search",
        text: "Location research, listing evaluation and viewing coordination shaped around family priorities.",
        category: "Property Support",
        status: "Coordination",
      },
      {
        title: "Property Preparation",
        text: "Homes and short-stay properties prepared to a consistent, welcoming standard before handover.",
        category: "Cleaning",
        status: "Completed",
      },
      {
        title: "Private Group Design",
        text: "Small private groups with tailored pacing, interests and quiet, well-chosen places.",
        category: "Boutique Tours",
        status: "Planning",
      },
      {
        title: "Portugal Experience Planning",
        text: "Porto, Northern Portugal and Douro Valley itineraries built around the season and your rhythm.",
        category: "Boutique Tours",
        status: "Planning",
      },
      {
        title: "Turkey–Portugal Programme Development",
        text: "Multi-destination boutique programmes connecting Turkey and Portugal for private groups.",
        category: "Boutique Tours",
        status: "Concept",
      },
    ],
  },
  contactForm: {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    country: "Current Country",
    language: "Preferred Language",
    languageOptions: ["English", "Turkish", "Portuguese"],
    service: "Service Required",
    people: "Number of Applicants or Travellers",
    destination: "Preferred Location or Destination",
    startDate: "Approximate Start Date",
    budget: "Estimated Budget Range",
    budgetOptional: "optional",
    supportLevel: "Level of Support Required",
    supportOptions: [
      "Initial Consultation",
      "Document and Process Support",
      "Comprehensive End-to-End Support",
      "Premium Personalised Service",
      "Private Group Programme",
      "Not Sure — Please Advise",
    ],
    message: "Message",
    consent:
      "I agree that my details may be used to respond to this enquiry, in line with the Privacy Policy.",
    select: "Please select",
    ctaTitle: "Let's Create Your Personalised Plan",
    ctaText:
      "Share your goals, timeline and priorities. We will review your request and contact you with the most suitable service scope and pricing information.",
    submit: "Request My Personalised Plan",
  },
};

const tr: PremiumContent = {
  founder: {
    eyebrow: "Kurucudan mesaj",
    title: "Portekiz Yolculuğunuza Kişisel Bir Yaklaşım",
    paragraphs: [
      "Ben Gözde K., TerraSu Living'in kurucusuyum.",
      "TerraSu Living'i; Portekiz'de yeni bir hayat kuran, ev arayan, belgelerini hazırlayan veya kendine özel bir seyahat planlamak isteyen kişilere daha kişisel, şeffaf ve özenle yönetilen bir hizmet sunmak için kurdum.",
      "İhtiyaçlarınız, öncelikleriniz ve beklentileriniz size özeldir. Bu nedenle her hizmet planı kişiye özel hazırlanır.",
      "Yerleşim ve idari hazırlık süreçlerinden ev arama desteğine, profesyonel temizlikten kişiye özel butik turlara kadar tüm süreci açık iletişim, dikkatli planlama ve güvenilir profesyonel koordinasyonla birlikte yürüteceğiz.",
      "Her aşamada bir sonraki adımı, hizmet kapsamını ve hangi işlemlerde lisanslı bir profesyonelle çalışılması gerektiğini açıkça bileceksiniz.",
      "TerraSu Living standart ve yüksek hacimli bir hizmet modeli değildir. Size özel hazırlanan butik bir destek deneyimidir.",
    ],
    signature: "by Gözde K.",
  },
  planCta: {
    title: "Size Özel Hizmet Planınızı Talep Edin",
    text: "Her müşterinin süreci farklıdır. İhtiyacınızı, zaman planınızı ve önceliklerinizi paylaşın; durumunuza özel hazırlanmış hizmet kapsamı ve ücret bilgisi alın.",
    button: "Hizmet ve Ücret Bilgisi Talep Et",
    note: "Hizmet kapsamı ve ücretlendirme; müşterinin ihtiyacına, başvuru yapacak kişi sayısına, konuma ve talep edilen destek seviyesine göre özel olarak hazırlanır.",
  },
  serviceHeroAlt: {
    consulting: "Porto çatılarına bakan, belgelerin bulunduğu güneşli çalışma masası",
    property: "Altın saatte azulejo cepheli zarif bir Porto sokağı",
    cleaning: "Doğal ışıkta kusursuz hazırlanmış Portekiz daire içi",
    experiences: "Gün batımında Douro Vadisi'ne bakan terasta özel bir masa",
  },
  serviceIntro: {
    consulting: {
      title: "Vize, Yerleşim ve İdari Süreç Desteği",
      paragraphs: [
        "Portekiz'e yerleşmek yalnızca bir evrak listesi hazırlamaktan ibaret değildir. Dikkatli planlama, düzenli dosya hazırlığı, gerçekçi beklentiler ve güvenilir yerel koordinasyon gerekir.",
        "TerraSu Living, ilk planlama aşamasından Portekiz'e geliş ve yerleşim sürecine kadar kişiye özel pratik destek sunar.",
        "Hizmet planınız; uyruğunuza, aile yapınıza, gelir profilinize, mesleki durumunuza, tercih ettiğiniz bölgeye ve ihtiyaç duyduğunuz destek seviyesine göre hazırlanır.",
      ],
      cta: "Size Özel Hizmet Planınızı Talep Edin",
    },
    property: {
      title: "İlan listesi değil, kişiye özel bir ev arama süreci",
      paragraphs: [
        "Portekiz'de doğru evi bulmak yalnızca ilanlara bakmaktan ibaret değildir.",
        "Tercih ettiğiniz bölgeyi, yaşam tarzınızı, bütçenizi, aile ihtiyaçlarınızı ve önceliklerinizi birlikte belirleriz.",
        "Ardından size özel bir ev arama planı oluşturur; süreci açık iletişim ve gerektiğinde güvenilir profesyonel koordinasyonla yürütürüz.",
      ],
      cta: "Size Özel Emlak Destek Planı Talep Edin",
    },
    cleaning: {
      title: "Evler ve kısa dönem kiralamalar için butik hazırlık",
      paragraphs: [
        "Profesyonel şekilde hazırlanmış bir yaşam alanı; konfor, güven ve güçlü bir ilk izlenim yaratır.",
        "Temizlik ve mülk hazırlık hizmetlerimiz; mülkün türüne, durumuna, kullanım şekline ve ihtiyaç duyulan detay seviyesine göre planlanır.",
      ],
      cta: "Temizlik Değerlendirmesi ve Fiyat Teklifi Talep Edin",
    },
    experiences: {
      title: "Kişiye Özel Butik Turlar",
      paragraphs: [
        "Hiçbir grup aynı şekilde seyahat etmez.",
        "Özel ve küçük grup seyahatlerini; ilgi alanlarınıza, tercih ettiğiniz tempoya, tarihlerinize, destinasyon seçimlerinize ve özel taleplerinize göre tasarlıyoruz.",
        "Portekiz odaklı deneyimlerden Türkiye–Portekiz programlarına ve gelecekteki uluslararası rotalara kadar her seyahat programı kişiye ve gruba özel hazırlanır.",
      ],
      cta: "Size Özel Butik Tur Teklifi Talep Edin",
    },
  },
  consulting: {
    pageTitle: "Vize, Yerleşim ve İdari Süreç Desteği",
    visaEyebrow: "Oturum rotaları",
    visaTitle: "Resmî olarak doğrulanabilir oturum rotaları",
    visaLead:
      "Aşağıdaki rotalar genel bilgilendirme amaçlıdır. Koşullar, başvuru yılına ve konsolosluk yetki alanına göre teyit edilir.",
    labels: {
      suits: "Kimler İçin Uygun Olabilir",
      requirements: "Genel Koşullar",
      documents: "Yaygın Belge Kategorileri",
      support: "TerraSu Living Nasıl Destek Olabilir",
      referrals: "Profesyonel Yönlendirme",
      notice: "Önemli Bilgilendirme",
      request: "Kişiye Özel Destek Talep Et",
      lastReviewed: "Son güncelleme",
      officialSource: "Resmî kaynak: AIMA",
    },
    lastReviewed: "Ağustos 2026",
    routes: [
      {
        code: "D2",
        name: "Girişimci ve Bağımsız Profesyonel Rotası",
        description:
          "Portekiz'de girişimcilik faaliyeti kurmayı, bir iş projesi geliştirmeyi veya bağımsız profesyonel faaliyet yürütmeyi planlayan kişiler için tasarlanmıştır.",
        suits: [
          "girişimciler",
          "bağımsız profesyoneller",
          "hizmet sağlayıcılar",
          "şirket kurucuları",
          "uygulanabilir bir iş veya mesleki faaliyet planı sunabilen kişiler",
        ],
        requirements: [
          "uygulanabilir bir iş veya bağımsız mesleki faaliyet planı",
          "kalış süresi için belgelenmiş geçim kaynağı",
          "Portekiz'de konaklama belgesi",
          "Portekiz vergi numarası (NIF) ve banka hazırlığı",
          "ilgili konsolosluk yetki alanının talep ettiği belgeler",
        ],
        documents: [
          "iş veya mesleki faaliyet belgeleri",
          "varsa şirket veya serbest meslek kayıt belgeleri",
          "mali kaynak belgeleri ve banka hesap dökümleri",
          "konaklama belgesi",
          "adli sicil belgesi",
          "sigorta ve pasaport belgeleri",
        ],
        support: [
          "ilk profil değerlendirmesi",
          "iş veya mesleki faaliyet belgelerinin düzenlenmesi",
          "iş planı koordinasyonu",
          "mali kaynak belgelerinin hazırlanması",
          "Portekiz NIF hazırlığı",
          "banka hesabı hazırlığı",
          "konaklama desteği",
          "belge kontrol listesi",
          "gerektiğinde mali müşavir veya avukata yönlendirme",
          "geliş ve faaliyet kurulum desteği",
        ],
        referrals:
          "Şirket kuruluşu, vergi yapılandırması ve hukuki başvurular bağımsız lisanslı mali müşavir ve avukatlar tarafından yürütülür.",
        notice:
          "TerraSu Living iş, vize veya oturum onayı garantisi vermez. Karar yetkisi yalnızca ilgili resmî makamlara aittir.",
      },
      {
        code: "D7",
        name: "Emekliler ve Kendi Gelirinden Yaşayanlar",
        description:
          "Genel olarak emekliler ve Portekiz'de yaşamalarına imkân veren düzenli ve istikrarlı gelirini belgeleyebilen başvuru sahipleri içindir.",
        suits: [
          "emekliler",
          "emeklilik gelirinden yaşayanlar",
          "kira gelirinden yaşayanlar",
          "temettü veya faiz gelirinden yaşayanlar",
          "belgelenmiş diğer düzenli kişisel geliri olanlar",
        ],
        requirements: [
          "yetkili makam tarafından kabul edilen istikrarlı ve düzenli gelir",
          "Portekiz'de konaklama belgesi",
          "Portekiz vergi numarası (NIF) ve Portekiz banka hesabı",
          "geçerli sigorta ve adli sicil belgeleri",
          "başvuru yılına ve konsolosluk yetki alanına göre teyit edilen mali koşullar",
        ],
        documents: [
          "emeklilik veya pasif gelir belgeleri",
          "banka hesap dökümleri",
          "varsa mülk veya kira geliri belgeleri",
          "konaklama belgesi",
          "gerekli olduğunda aile bağı belgeleri",
        ],
        support: [
          "gelir belgelerinin düzenlenmesi",
          "banka hesap dökümü hazırlığı",
          "konaklama desteği",
          "NIF",
          "Portekiz banka hesabı desteği",
          "genel belge kontrol listesi",
          "geliş ve yerleşim planlaması",
          "gerekli olduğunda aile belgelerinin düzenlenmesi",
        ],
        referrals:
          "Vergi mukimliği planlaması ve hukuki başvurular bağımsız lisanslı vergi danışmanları ve avukatlara yönlendirilir.",
        notice:
          "Mali koşullar değişebilir ve başvuru yılına ile konsolosluk yetki alanına göre teyit edilmelidir. Burada sabit rakam yayınlanmaz.",
      },
      {
        code: "D8",
        name: "Uzaktan Çalışma ve Dijital Göçebe Rotası",
        description:
          "Portekiz dışındaki müşteri veya işverenler için mesleki faaliyet yürüten, koşulları sağlayan uzaktan çalışanlar ve bağımsız profesyoneller için tasarlanmıştır.",
        suits: [
          "uzaktan çalışanlar",
          "serbest çalışanlar",
          "bağımsız yükleniciler",
          "dijital profesyoneller",
          "uluslararası hizmet sağlayıcılar",
        ],
        requirements: [
          "Portekiz dışındaki müşteri veya işverenlerle çalışma ya da hizmet ilişkisi",
          "yetkili makamca kabul edilen belgelenmiş düzenli gelir",
          "Portekiz'de konaklama belgesi",
          "NIF ve Portekiz banka hesabı hazırlığı",
          "sigorta ve adli sicil belgeleri",
        ],
        documents: [
          "uzaktan çalışma veya hizmet sözleşmeleri",
          "gelir belgeleri ve faturalar",
          "banka hesap dökümleri",
          "konaklama belgesi",
          "pasaport, fotoğraf ve sigorta",
        ],
        support: [
          "uzaktan çalışma veya hizmet sözleşmesi belgeleri",
          "gelir belgelerinin düzenlenmesi",
          "banka hesap dökümleri",
          "konaklama desteği",
          "NIF",
          "Portekiz banka hesabı desteği",
          "belge kontrol listesi",
          "geliş hazırlığı",
          "yerel kurulum",
        ],
        referrals:
          "Serbest meslek kaydı, faturalandırma ve vergi yükümlülükleri bağımsız lisanslı mali müşavirlere yönlendirilir.",
        notice:
          "Burada sabit bir gelir eşiği yayınlanmaz. Güncel eşikler, başvuru yapılacak konsolosluk için resmî güncel kaynaktan doğrulanmalıdır.",
      },
      {
        code: "Golden Visa / ARI",
        name: "Autorização de Residência para Atividade de Investimento",
        description:
          "ARI programı, yürürlükteki Portekiz mevzuatı kapsamında uygun yatırım faaliyeti yürüten üçüncü ülke vatandaşları için tasarlanmıştır.",
        suits: [
          "uygun yatırım faaliyeti yürüten üçüncü ülke vatandaşları",
          "lisanslı hukuk, vergi ve yatırım profesyonelleriyle çalışan yatırımcılar",
          "düzenlenmiş yatırım sürecinin yanında Portekiz yerleşim desteğine ihtiyaç duyan aileler",
        ],
        requirements: [
          "en az 10 istihdam yaratılması",
          "uygun bilimsel araştırma yatırımı",
          "uygun kültürel veya ulusal miras desteği",
          "gayrimenkul dışı uygun kolektif yatırım fonları",
          "uygun şirket sermayelendirmesi ile istihdam yaratma veya sürdürme",
        ],
        documents: [
          "lisanslı profesyonellerce hazırlanan yatırım belgeleri",
          "fon kaynağının yasal olduğuna dair belgeler",
          "Portekiz NIF ve banka belgeleri",
          "pasaport, adli sicil belgesi ve sigorta",
          "yetkili makamın talep ettiği ek belgeler",
        ],
        support: [
          "ilk pratik yönlendirme",
          "Portekiz yerleşim kurulum desteği",
          "NIF ve banka hesabı koordinasyonu",
          "yatırım uygunluğundan bağımsız konaklama ve ev arama desteği",
          "geliş planlaması",
          "yerel yerleşim desteği",
          "bağımsız lisanslı hukuk, vergi ve yatırım profesyonelleriyle koordinasyon",
        ],
        referrals:
          "Düzenlenmiş yatırım, hukuk ve finans işlemleri yalnızca uygun lisansa sahip profesyoneller tarafından yürütülmelidir. TerraSu Living yatırım danışmanlığı vermez veya yatırım aracılığı yapmaz.",
        notice:
          "Yalnızca gayrimenkul satın alımı, ARI için güncel uygun rotalardan biri değildir. Uygun rotalar ve koşullar değişebilir; karar vermeden önce aşağıdaki resmî AIMA kaynağını mutlaka kontrol edin.",
      },
    ],
    checklist: {
      title: "Yaygın Belge Hazırlık Alanları",
      lead: "En sık talep edilen belge alanları için genel hazırlık rehberi.",
      items: [
        "geçerli pasaport",
        "doldurulmuş başvuru formu",
        "biyometrik fotoğraflar",
        "seyahat veya sağlık sigortası",
        "adli sicil belgesi",
        "gerekli olduğunda Portekiz adli sicil sorgusu için izin belgesi",
        "konaklama belgesi",
        "mali yeterlilik belgesi",
        "banka hesap dökümleri",
        "gelir belgesi",
        "ilgili olduğunda emeklilik veya pasif gelir belgeleri",
        "ilgili olduğunda çalışma veya hizmet sözleşmeleri",
        "ilgili olduğunda iş planı",
        "ilgili olduğunda mesleki yeterlilik belgeleri",
        "ilgili olduğunda aile bağı belgeleri",
        "gerekli olduğunda apostil",
        "gerekli olduğunda yeminli tercüme",
        "ilgili olduğunda vergi ve banka hazırlık belgeleri",
        "ek konsolosluk belgeleri",
      ],
      notice:
        "Bu liste genel hazırlık rehberidir. Kesin evrak listesi; uyruğa, başvuru ülkesine, konsolosluk yetki alanına, aile yapısına ve güncel mevzuata göre değişebilir.",
    },
    timeline: {
      eyebrow: "Uçtan uca destek",
      title: "İlk Planlamadan Portekiz'deki Yaşama",
      steps: [
        { title: "İlk Görüşme", text: "Müşterinin durumunu, ihtiyaçlarını ve önceliklerini anlamak." },
        { title: "Kişiye Özel Yol Haritası", text: "Hizmet kapsamının ve hazırlık aşamalarının belirlenmesi." },
        { title: "Belge Kontrol Listesi", text: "Kişiye özel bir hazırlık listesi oluşturulması." },
        { title: "Belge Düzenleme", text: "Pratik belgelerin düzenlenmesi ve gözden geçirilmesine destek." },
        { title: "NIF, Bankacılık ve İdari Hazırlık", text: "Pratik kurulum desteğinin koordinasyonu." },
        { title: "Konaklama ve Ev Arama", text: "Talep edildiğinde kiralama veya satın alma arama desteği." },
        { title: "Başvuru Hazırlık Desteği", text: "Başvuru ve randevulara hazırlık konusunda destek." },
        { title: "Geliş Planlaması", text: "Pratik bir geliş ve ilk günler planı oluşturulması." },
        { title: "Yerel Kurulum", text: "Faturalar, günlük yaşam oryantasyonu ve yerel düzenlemelere destek." },
        { title: "Yerleşim Sonrası Destek", text: "Kapsam dahilinde, gelişten sonra da süren pratik destek." },
      ],
      note: "Hazırlık, taşınma ve yerleşim sürecinin tamamında uçtan uca pratik destek.",
    },
    legalDisclaimer:
      "TerraSu Living pratik danışmanlık, belge düzenleme ve koordinasyon desteği sunar. Hukuki temsil sağlamaz; vize, oturum, bankacılık, gayrimenkul veya resmî makam kararlarını garanti etmez. Düzenlenmiş hukuk, vergi, yatırım, gayrimenkul ve turizm hizmetleri uygun lisansa sahip bağımsız profesyoneller tarafından sunulur.",
  },
  property: {
    sections: [
      {
        title: "Kiralama Desteği",
        items: [
          "ihtiyaç analizi",
          "bölge araştırması",
          "ilan araştırması",
          "mülk sahibi veya emlak ofisi ile iletişim",
          "görüntüleme koordinasyonu",
          "kira dosyası hazırlığı",
          "taşınma desteği",
        ],
      },
      {
        title: "Satın Alma Desteği",
        items: [
          "alıcı ihtiyaç analizi",
          "mülk araştırması",
          "bölge karşılaştırması",
          "görüntüleme koordinasyonu",
          "lisanslı emlak ofisleriyle iletişim",
          "bağımsız avukat ve kredi uzmanı koordinasyonu",
          "belge düzenleme",
          "satın alma süreci koordinasyonu",
        ],
      },
    ],
  },
  cleaning: {
    items: [
      "Ev Temizliği",
      "Ofis ve İşyeri Temizliği",
      "Airbnb ve Alojamento Local Temizliği",
      "Taşınma Öncesi Temizlik",
      "Taşınma Sonrası Temizlik",
      "Derinlemesine Temizlik",
      "Mülk Hazırlığı",
      "Misafir Karşılama Hazırlığı",
      "Kişiye Özel Temizlik Planları",
    ],
  },
  tours: {
    items: [
      "Özel Portekiz Turları",
      "Porto ve Kuzey Portekiz",
      "Lizbon ve Orta Portekiz",
      "Douro Vadisi",
      "Kültür ve Gastronomi Rotaları",
      "Wellness ve Yoga Grupları",
      "Kadınlara Özel Gruplar",
      "Aile Programları",
      "Küçük Kurumsal Gruplar",
      "Portekiz–Türkiye Programları",
      "Türkiye–Portekiz Programları",
      "Kişiye Özel Uluslararası Rotalar",
      "Çoklu Destinasyon Programları",
    ],
  },
  portfolio: {
    title: "Seçili Süreçler ve Hizmet Alanları",
    lead: "Müşteri yorumları yerine hizmet kapsamı olarak sunulan seçili çalışma alanları.",
    entries: [
      {
        title: "Yerleşim Süreci Planlaması",
        text: "İlk planlama görüşmesinden gelişe kadar net adım sıralamasıyla kişiye özel yol haritası.",
        category: "Danışmanlık",
        status: "Koordinasyon",
      },
      {
        title: "İdari Kurulum",
        text: "NIF, bankacılık ve günlük idari hazırlıkların tek ve sakin bir sıraya oturtulması.",
        category: "Danışmanlık",
        status: "Tamamlandı",
      },
      {
        title: "Ev Arama",
        text: "Aile önceliklerine göre şekillenen bölge araştırması, ilan değerlendirmesi ve görüntüleme koordinasyonu.",
        category: "Emlak Desteği",
        status: "Koordinasyon",
      },
      {
        title: "Mülk Hazırlığı",
        text: "Teslim öncesinde tutarlı ve davetkâr bir standarda hazırlanan evler ve kısa dönem kiralamalar.",
        category: "Temizlik",
        status: "Tamamlandı",
      },
      {
        title: "Özel Grup Tasarımı",
        text: "Tempo, ilgi alanları ve özenle seçilmiş sakin mekânlarla kurgulanan küçük özel gruplar.",
        category: "Butik Turlar",
        status: "Planlama",
      },
      {
        title: "Portekiz Deneyimi Planlaması",
        text: "Mevsime ve temponuza göre kurgulanan Porto, Kuzey Portekiz ve Douro Vadisi rotaları.",
        category: "Butik Turlar",
        status: "Planlama",
      },
      {
        title: "Türkiye–Portekiz Program Geliştirme",
        text: "Özel gruplar için Türkiye ve Portekiz'i birleştiren çoklu destinasyon butik programları.",
        category: "Butik Turlar",
        status: "Konsept",
      },
    ],
  },
  contactForm: {
    fullName: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    country: "Bulunduğunuz Ülke",
    language: "Tercih Ettiğiniz Dil",
    languageOptions: ["İngilizce", "Türkçe", "Portekizce"],
    service: "İhtiyaç Duyulan Hizmet",
    people: "Başvuru Sahibi veya Yolcu Sayısı",
    destination: "Tercih Edilen Bölge veya Destinasyon",
    startDate: "Yaklaşık Başlangıç Tarihi",
    budget: "Tahmini Bütçe Aralığı",
    budgetOptional: "isteğe bağlı",
    supportLevel: "İhtiyaç Duyulan Destek Seviyesi",
    supportOptions: [
      "İlk Danışmanlık",
      "Belge ve Süreç Desteği",
      "Kapsamlı Uçtan Uca Destek",
      "Premium Kişiye Özel Hizmet",
      "Özel Grup Programı",
      "Emin Değilim — Yönlendirme Rica Ederim",
    ],
    message: "Mesajınız",
    consent:
      "Bilgilerimin bu talebe yanıt verilmesi amacıyla, Gizlilik Politikası kapsamında kullanılmasını kabul ediyorum.",
    select: "Lütfen seçin",
    ctaTitle: "Kişisel Planınızı Birlikte Oluşturalım",
    ctaText:
      "Hedeflerinizi, zaman planınızı ve önceliklerinizi paylaşın. Talebinizi inceleyerek size en uygun hizmet kapsamı ve ücret bilgisiyle dönüş yapalım.",
    submit: "Kişisel Hizmet Planımı Talep Et",
  },
};

export const AIMA_ARI_URL =
  "https://aima.gov.pt/pt/viver/autorizacao-de-residencia-para-investimento-art-90-o-a";

export const premium: Record<Lang, PremiumContent> = { en, tr };
