export type Lang = "en" | "tr";

export const serviceSlugs = ["consulting", "property", "cleaning", "experiences"] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export const servicePaths: Record<ServiceSlug, string> = {
  consulting: "/services/consulting",
  property: "/services/property",
  cleaning: "/services/cleaning",
  experiences: "/services/experiences",
};

type ServiceContent = {
  title: string;
  subtitle: string;
  preview: string;
  intro: string;
  items: { name: string; text: string }[];
  disclaimer?: string;
  metaTitle: string;
  metaDescription: string;
};

export type Content = {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    menu: string;
    close: string;
  };
  common: {
    brand: string;
    founder: string;
    signature: string;
    base: string;
    learnMore: string;
    allServices: string;
    disclaimer: string;
    backToServices: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    heroSlogan: string;
    heroSub: string;
    ctaServices: string;
    ctaContact: string;
    introTitle: string;
    introText: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesText: string;
    whyEyebrow: string;
    whyTitle: string;
    why: { title: string; text: string }[];
    founderEyebrow: string;
    founderTitle: string;
    founderText: string;
    portfolioEyebrow: string;
    portfolioTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    storyTitle: string;
    story: string[];
    founderTitle: string;
    founderText: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
    baseTitle: string;
    baseText: string;
  };
  services: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
  };
  service: Record<ServiceSlug, ServiceContent>;
  portfolio: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    items: { title: string; text: string; points: string[] }[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    email: string;
    phone: string;
    phoneOptional: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    submit: string;
    sent: string;
    options: string[];
    detailsTitle: string;
    instagram: string;
    emailLabel: string;
    location: string;
    locationValue: string;
    responseTitle: string;
    responseText: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    legalTitle: string;
    privacy: string;
    cookies: string;
    terms: string;
    disclaimer: string;
    language: string;
    rights: string;
  };
  legal: {
    privacy: { title: string; body: string[] };
    cookies: { title: string; body: string[] };
    terms: { title: string; body: string[] };
    disclaimer: { title: string; body: string[] };
  };
};

const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  common: {
    brand: "TerraSu Living",
    founder: "Gözde K.",
    signature: "by Gözde K.",
    base: "Porto, Portugal",
    learnMore: "Learn more",
    allServices: "All services",
    disclaimer: "Please note",
    backToServices: "Back to services",
  },
  home: {
    metaTitle: "TerraSu Living | Portugal Relocation & Lifestyle Support",
    metaDescription:
      "Personalised consulting, relocation support, property guidance, professional cleaning and curated Portugal experiences — created and managed by Gözde K. in Porto.",
    heroSlogan: "Start Your New Life in Portugal with Confidence",
    heroSub:
      "Personalised consulting, relocation support, property guidance, professional cleaning and curated Portugal experiences — all under one trusted brand.",
    ctaServices: "Explore Services",
    ctaContact: "Contact Gözde K.",
    introTitle: "TerraSu Living",
    introText:
      "TerraSu Living is a Portugal-based support and lifestyle brand created and managed by Gözde K. We help individuals, families and small businesses navigate their journey in Portugal with trusted guidance, practical support and carefully curated local solutions.",
    servicesEyebrow: "What we do",
    servicesTitle: "Support, refined for every step",
    servicesText:
      "Four focused service areas, each with its own dedicated page and a clear, personal process.",
    whyEyebrow: "Why TerraSu Living",
    whyTitle: "Considered care, from first question to settled home",
    why: [
      {
        title: "Personal Approach",
        text: "Every journey is different. Your plan is shaped around your timeline, your family and your priorities.",
      },
      {
        title: "Local Experience",
        text: "Based in Porto, with first-hand knowledge of how things actually work day to day in Portugal.",
      },
      {
        title: "Transparent Communication",
        text: "Clear steps, honest expectations and no hidden costs — you always know what happens next.",
      },
      {
        title: "Trusted Professional Network",
        text: "When a licensed specialist is needed, you are introduced to professionals we genuinely trust.",
      },
    ],
    founderEyebrow: "Founder",
    founderTitle: "Meet Gözde K.",
    founderText:
      "TerraSu Living was created by Gözde K. to offer a more personal, trustworthy and refined support experience for people building a life in Portugal. With a warm communication style and a practical approach, Gözde K. helps clients feel more confident, prepared and supported through every step of the process.",
    portfolioEyebrow: "Selected support areas",
    portfolioTitle: "Example client journeys",
    ctaTitle: "Let's Talk About Your Portugal Journey",
    ctaText:
      "Tell us what kind of support you need, and we will guide you toward the most suitable next step.",
  },
  about: {
    metaTitle: "About TerraSu Living | Created & Managed by Gözde K.",
    metaDescription:
      "The story, values and founder behind TerraSu Living — a Portugal-based lifestyle and support brand based in Porto.",
    eyebrow: "About",
    title: "A boutique brand for life in Portugal",
    lead: "Created and managed by Gözde K., based in Porto, Portugal.",
    storyTitle: "Our story",
    story: [
      "TerraSu Living began with a simple observation: moving to a new country is rarely about paperwork alone. It is about feeling understood, knowing who to ask, and having someone reliable beside you while everything is still unfamiliar.",
      "The name brings together terra — the land that welcomes you — and su, the Turkish word for water: two elements that shape both Portugal and the way we work. Grounded, calm and adaptable.",
      "Today TerraSu Living supports individuals, families and small businesses across consulting, property search, professional cleaning and curated Portugal experiences, with the same personal attention from the first message to long after settling in.",
    ],
    founderTitle: "Meet Gözde K.",
    founderText:
      "Gözde K. built TerraSu Living around the kind of support she looked for herself: warm, honest and practical. She works closely with each client, translating processes into plain language and staying reachable throughout — so no one has to navigate a new country alone.",
    valuesTitle: "Brand values",
    values: [
      { title: "Trust", text: "Honest timelines and realistic expectations, always." },
      { title: "Warmth", text: "A human, calm and unhurried way of working together." },
      { title: "Precision", text: "Careful preparation so nothing is missed along the way." },
      { title: "Discretion", text: "Your information and your story stay private." },
    ],
    baseTitle: "Based in Porto",
    baseText:
      "Porto is our home base, with support extended across Northern Portugal and beyond. Being local means real knowledge of neighbourhoods, services and the rhythms of everyday life here.",
  },
  services: {
    metaTitle: "Services | TerraSu Living Portugal Support",
    metaDescription:
      "Consulting, property support, cleaning and Portugal experiences — four dedicated service areas from TerraSu Living in Porto.",
    eyebrow: "Services",
    title: "Four ways we support your life in Portugal",
    lead: "Choose the area you need most. Each service has its own dedicated page with the full scope of support.",
  },
  service: {
    consulting: {
      title: "Consulting",
      subtitle: "Practical and personalised support for your life in Portugal.",
      preview:
        "NIF, NISS, bank account, relocation and residence document support with clear, step-by-step guidance.",
      intro:
        "From your first administrative step to feeling genuinely settled, consulting is about turning unfamiliar procedures into a clear plan you can follow with confidence.",
      items: [
        {
          name: "NIF – Número de Identificação Fiscal",
          text: "Guidance and document preparation support for your Portuguese tax number application.",
        },
        {
          name: "NISS – Número de Identificação da Segurança Social",
          text: "Support with the social security number process and the paperwork it requires.",
        },
        {
          name: "Portuguese Bank Account Support",
          text: "Preparation, appointment guidance and accompaniment for opening a local bank account.",
        },
        {
          name: "Relocation Support",
          text: "A structured plan for your arrival: priorities, timing and the practical essentials.",
        },
        {
          name: "Residence Document Support",
          text: "Help organising and preparing the documents required in your residence process.",
        },
        {
          name: "Personal Consultation",
          text: "A one-to-one session to review your situation and define your most suitable next step.",
        },
      ],
      disclaimer:
        "TerraSu Living does not provide legal representation, legal advice, or guaranteed visa or residence outcomes.",
      metaTitle: "Consulting | TerraSu Living Portugal",
      metaDescription:
        "NIF, NISS, bank account, relocation and residence document support in Portugal — personalised consulting by Gözde K.",
    },
    property: {
      title: "Property Support",
      subtitle: "Property Search and Relocation Assistance.",
      preview:
        "Rental and purchase search support, viewing coordination and local area guidance.",
      intro:
        "Finding a home in a new country takes local reading of listings, neighbourhoods and communication. We stand beside you through the search, not in place of licensed professionals.",
      items: [
        { name: "Rental property search support", text: "Shortlisting suitable listings based on your budget, area and needs." },
        { name: "Property purchase support", text: "Practical assistance and orientation throughout your purchase journey." },
        { name: "Listing and area evaluation", text: "An honest read of what a listing and its location really offer." },
        { name: "Viewing coordination", text: "Scheduling and organising viewings so your time is used well." },
        { name: "Communication support with landlords or licensed agencies", text: "Language and communication support in every exchange." },
        { name: "Document preparation support", text: "Help gathering and organising the documents commonly requested." },
        { name: "Local area guidance", text: "Neighbourhood insight: transport, daily life, schools and services." },
      ],
      disclaimer:
        "TerraSu Living is not a real estate agency and does not provide regulated real estate brokerage or legal services. When necessary, clients are referred to licensed professionals.",
      metaTitle: "Property Support | TerraSu Living Portugal",
      metaDescription:
        "Property search and relocation assistance in Portugal: rental and purchase support, viewing coordination and local area guidance.",
    },
    cleaning: {
      title: "Cleaning",
      subtitle: "Professional cleaning and property preparation.",
      preview:
        "Residential, business, short-stay, move-in/move-out and deep cleaning, delivered with care.",
      intro:
        "A well-prepared home makes everything else easier. Our cleaning service is reliable, detailed and respectful of your space.",
      items: [
        { name: "Residential Cleaning", text: "Regular or one-off cleaning for apartments and houses." },
        { name: "Business Cleaning", text: "Offices and small commercial spaces kept consistently presentable." },
        { name: "Airbnb and Alojamento Local Cleaning", text: "Turnover cleaning and preparation between guest stays." },
        { name: "Move-In / Move-Out Cleaning", text: "A thorough reset before you arrive or after you leave." },
        { name: "Deep Cleaning", text: "Detailed, top-to-bottom cleaning for a complete refresh." },
      ],
      metaTitle: "Cleaning Services | TerraSu Living Porto",
      metaDescription:
        "Residential, business, Alojamento Local, move-in/move-out and deep cleaning services in Porto by TerraSu Living.",
    },
    experiences: {
      title: "Portugal Experiences",
      subtitle: "Portugal Experiences and Local Coordination.",
      preview:
        "Porto, Northern Portugal and Douro Valley planning, plus coordination with licensed providers.",
      intro:
        "Beyond the obvious routes: thoughtful planning and coordination so your time in Portugal feels personal, calm and memorable.",
      items: [
        { name: "Porto and Northern Portugal recommendations", text: "Curated places to see, taste and slow down in." },
        { name: "Douro Valley planning", text: "Day plans shaped around the season, the light and your pace." },
        { name: "Local experience suggestions", text: "Authentic experiences chosen with care, not from a catalogue." },
        { name: "Small group coordination", text: "Planning support for families and small private groups." },
        { name: "Restaurant and culture recommendations", text: "Tables and cultural stops worth your evening." },
        { name: "Coordination with licensed transfer, guide and activity providers", text: "Bookings arranged with trusted, independent licensed providers." },
      ],
      disclaimer:
        "TerraSu Living provides planning and coordination support. Transportation, tours, accommodation, guiding and regulated tourism services are provided directly by independent licensed providers.",
      metaTitle: "Portugal Experiences | TerraSu Living",
      metaDescription:
        "Portugal experiences and local coordination: Porto, Northern Portugal and Douro Valley planning with licensed independent providers.",
    },
  },
  portfolio: {
    metaTitle: "Portfolio | TerraSu Living Support Areas",
    metaDescription:
      "Selected support areas and example client journeys: relocation, property search, home preparation and curated Portugal lifestyle planning.",
    eyebrow: "Portfolio",
    title: "Selected support areas",
    lead: "A look at the kind of journeys we accompany — presented as example scopes of work rather than testimonials.",
    note: "These are illustrative examples of our scope of work. Client details always remain private.",
    items: [
      {
        title: "Relocation & setup support",
        text: "Arriving in Portugal with a clear order of steps instead of a long list of unknowns.",
        points: ["First-month priority plan", "NIF, NISS and bank appointments", "Everyday practical orientation"],
      },
      {
        title: "Property search journey",
        text: "From shortlist to signed contract, with local reading of listings and neighbourhoods.",
        points: ["Area and listing evaluation", "Viewing coordination", "Communication with landlords or licensed agencies"],
      },
      {
        title: "Home and rental preparation",
        text: "Homes and short-stay properties prepared to a consistent, welcoming standard.",
        points: ["Move-in and move-out cleaning", "Turnover preparation", "Deep cleaning before handover"],
      },
      {
        title: "Curated Portugal lifestyle planning",
        text: "Time in Portugal planned around your pace, interests and the season.",
        points: ["Porto and Douro Valley day plans", "Restaurant and culture selections", "Coordination with licensed providers"],
      },
    ],
  },
  contact: {
    metaTitle: "Contact Gözde K. | TerraSu Living Porto",
    metaDescription:
      "Get in touch with TerraSu Living in Porto, Portugal for consulting, property support, cleaning and Portugal experiences.",
    eyebrow: "Contact",
    title: "Contact Gözde K.",
    lead: "Tell us about your needs and we will help you identify the right service and next step.",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    phoneOptional: "optional",
    service: "Service Needed",
    servicePlaceholder: "Select a service",
    message: "Message",
    submit: "Send message",
    sent: "Thank you — your email draft is ready. We reply within one business day.",
    options: [
      "Consulting",
      "NIF / NISS / Bank Account",
      "Property Support",
      "Cleaning",
      "Portugal Experiences",
      "Other",
    ],
    detailsTitle: "Direct contact",
    instagram: "Instagram",
    emailLabel: "Email",
    location: "Location",
    locationValue: "Porto, Portugal",
    responseTitle: "Response time",
    responseText: "Messages are usually answered within one business day, in English or Turkish.",
  },
  footer: {
    tagline: "A Portugal-based lifestyle and support brand, created and managed by Gözde K.",
    quickLinks: "Navigate",
    servicesTitle: "Services",
    legalTitle: "Legal",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Terms of Service",
    disclaimer: "Disclaimer",
    language: "Language",
    rights: "All rights reserved.",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      body: [
        "TerraSu Living collects only the personal information you choose to share with us — such as your name, email address, phone number and the details of your request — in order to respond to your enquiry and deliver the services you ask for.",
        "Your information is never sold or shared for marketing purposes. It may be shared with independent licensed professionals only when this is necessary to deliver a service you have requested, and only with your knowledge.",
        "You may request access to, correction of, or deletion of your personal data at any time by writing to info@terrasuliving.com.",
      ],
    },
    cookies: {
      title: "Cookie Policy",
      body: [
        "This website uses only the minimum technical storage required for it to function, such as remembering your selected language.",
        "We do not use advertising cookies or third-party tracking profiles.",
        "You can clear this storage at any time through your browser settings.",
      ],
    },
    terms: {
      title: "Terms of Service",
      body: [
        "TerraSu Living provides consulting, relocation support, property search assistance, cleaning services and experience planning and coordination.",
        "TerraSu Living does not provide legal representation or legal advice, is not a real estate agency, and is not a travel agency or tour operator. Regulated services are delivered by independent licensed providers.",
        "Service scope, timing and pricing are agreed individually before any work begins. Outcomes that depend on public authorities or third parties cannot be guaranteed.",
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      body: [
        "The information published on this website is general in nature and is provided for orientation only. It does not constitute legal, tax, immigration, financial or real-estate advice.",
        "Requirements, procedures and processing times set by Portuguese authorities, including AIMA, Finanças, Segurança Social and the consular network, can change without notice. Current requirements are confirmed from the official source when your plan is prepared.",
        "TerraSu Living provides coordination and personal support. Regulated services, such as legal representation, real-estate brokerage, accountancy and licensed transport, are carried out by independent licensed professionals.",
        "No outcome that depends on a public authority or a third party can be guaranteed.",
      ],
    },
  },
};

const tr: Content = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    portfolio: "Portföy",
    contact: "İletişim",
    menu: "Menü",
    close: "Kapat",
  },
  common: {
    brand: "TerraSu Living",
    founder: "Gözde K.",
    signature: "by Gözde K.",
    base: "Porto, Portekiz",
    learnMore: "Detaylı bilgi",
    allServices: "Tüm hizmetler",
    disclaimer: "Önemli bilgi",
    backToServices: "Hizmetlere dön",
  },
  home: {
    metaTitle: "TerraSu Living | Portekiz'de Yerleşim ve Yaşam Desteği",
    metaDescription:
      "Kişiye özel danışmanlık, yerleşim desteği, ev arama süreçleri, profesyonel temizlik ve özenle planlanan Portekiz deneyimleri — Porto'da Gözde K. tarafından yönetilir.",
    heroSlogan: "Portekiz'deki Yeni Hayatınıza Güvenle Başlayın",
    heroSub:
      "Kişiye özel danışmanlık, yerleşim desteği, ev arama süreçleri, profesyonel temizlik ve özenle planlanmış Portekiz deneyimleri — hepsi tek bir güvenilir marka altında.",
    ctaServices: "Hizmetleri Keşfedin",
    ctaContact: "Gözde K. ile İletişime Geçin",
    introTitle: "TerraSu Living",
    introText:
      "TerraSu Living, Gözde K. tarafından kurulan ve yönetilen, Portekiz merkezli bir destek ve yaşam markasıdır. Bireylerin, ailelerin ve küçük işletmelerin Portekiz'deki yolculuklarını güvenilir rehberlik, pratik destek ve özenle seçilmiş yerel çözümlerle kolaylaştırıyoruz.",
    servicesEyebrow: "Ne yapıyoruz",
    servicesTitle: "Her adımda incelikli destek",
    servicesText:
      "Dört odaklı hizmet alanı; her biri kendi sayfasında, net ve kişisel bir süreçle anlatılıyor.",
    whyEyebrow: "Neden TerraSu Living",
    whyTitle: "İlk sorudan yerleşmiş bir eve kadar özenli takip",
    why: [
      {
        title: "Kişiye Özel Yaklaşım",
        text: "Her yolculuk farklıdır. Planınız takviminize, ailenize ve önceliklerinize göre şekillenir.",
      },
      {
        title: "Yerel Deneyim",
        text: "Porto merkezliyiz; Portekiz'de işlerin günlük hayatta gerçekten nasıl yürüdüğünü biliyoruz.",
      },
      {
        title: "Şeffaf İletişim",
        text: "Net adımlar, dürüst beklentiler ve gizli maliyet yok — bir sonraki adımı her zaman bilirsiniz.",
      },
      {
        title: "Güvenilir Profesyonel Ağı",
        text: "Lisanslı bir uzman gerektiğinde, gerçekten güvendiğimiz profesyonellerle tanıştırılırsınız.",
      },
    ],
    founderEyebrow: "Kurucu",
    founderTitle: "Gözde K. ile Tanışın",
    founderText:
      "TerraSu Living, Portekiz'de bir hayat kuran insanlara daha kişisel, güvenilir ve incelikli bir destek deneyimi sunmak için Gözde K. tarafından kuruldu. Sıcak iletişim tarzı ve pratik yaklaşımıyla Gözde K., müşterilerinin sürecin her adımında kendini daha güvende, hazırlıklı ve desteklenmiş hissetmesini sağlıyor.",
    portfolioEyebrow: "Seçilmiş destek alanları",
    portfolioTitle: "Örnek müşteri yolculukları",
    ctaTitle: "Portekiz Yolculuğunuzu Konuşalım",
    ctaText:
      "Nasıl bir desteğe ihtiyacınız olduğunu paylaşın, sizi en uygun bir sonraki adıma yönlendirelim.",
  },
  about: {
    metaTitle: "Hakkımızda | TerraSu Living — Gözde K.",
    metaDescription:
      "TerraSu Living'in hikâyesi, değerleri ve kurucusu — Porto merkezli Portekiz yaşam ve destek markası.",
    eyebrow: "Hakkımızda",
    title: "Portekiz'deki hayat için butik bir marka",
    lead: "Porto, Portekiz merkezli; Gözde K. tarafından kuruldu ve yönetiliyor.",
    storyTitle: "Hikâyemiz",
    story: [
      "TerraSu Living basit bir gözlemle başladı: yeni bir ülkeye taşınmak nadiren sadece evraktan ibarettir. Anlaşıldığınızı hissetmek, kime soracağınızı bilmek ve her şey hâlâ yabancıyken yanınızda güvenilir birinin olması demektir.",
      "İsim, sizi karşılayan toprağı ifade eden terra ile Türkçedeki su kelimesini bir araya getiriyor: hem Portekiz'i hem de çalışma biçimimizi tanımlayan iki unsur. Sağlam, sakin ve uyum sağlayan.",
      "Bugün TerraSu Living; danışmanlık, ev arama, profesyonel temizlik ve özenle planlanan Portekiz deneyimleri alanlarında bireylere, ailelere ve küçük işletmelere ilk mesajdan yerleşme sonrasına kadar aynı kişisel ilgiyle destek veriyor.",
    ],
    founderTitle: "Gözde K. ile Tanışın",
    founderText:
      "Gözde K., TerraSu Living'i kendi aradığı destek anlayışı üzerine kurdu: sıcak, dürüst ve pratik. Her müşteriyle yakından çalışıyor, süreçleri sade bir dile çeviriyor ve baştan sona ulaşılabilir kalıyor — böylece kimse yeni bir ülkede yalnız kalmıyor.",
    valuesTitle: "Marka değerlerimiz",
    values: [
      { title: "Güven", text: "Her zaman dürüst zaman planı ve gerçekçi beklentiler." },
      { title: "Sıcaklık", text: "İnsani, sakin ve acele etmeyen bir çalışma biçimi." },
      { title: "Titizlik", text: "Hiçbir detayın atlanmaması için özenli hazırlık." },
      { title: "Gizlilik", text: "Bilgileriniz ve hikâyeniz size özel kalır." },
    ],
    baseTitle: "Porto merkezli",
    baseText:
      "Porto ana üssümüz; desteğimiz Kuzey Portekiz ve ötesine uzanıyor. Yerel olmak; semtleri, hizmetleri ve buradaki günlük yaşamın ritmini gerçekten bilmek demek.",
  },
  services: {
    metaTitle: "Hizmetler | TerraSu Living Portekiz Desteği",
    metaDescription:
      "Danışmanlık, ev desteği, temizlik ve Portekiz deneyimleri — TerraSu Living'in dört ayrı hizmet alanı.",
    eyebrow: "Hizmetler",
    title: "Portekiz'deki hayatınıza dört alanda destek",
    lead: "İhtiyacınız olan alanı seçin. Her hizmetin kapsamını anlatan kendi sayfası var.",
  },
  service: {
    consulting: {
      title: "Danışmanlık",
      subtitle: "Portekiz'deki hayatınız için pratik ve kişiye özel destek.",
      preview:
        "NIF, NISS, banka hesabı, yerleşim ve ikamet belgeleri süreçlerinde adım adım rehberlik.",
      intro:
        "İlk resmi adımınızdan gerçekten yerleşmiş hissetmenize kadar; danışmanlık, yabancı gelen prosedürleri güvenle takip edebileceğiniz net bir plana dönüştürmektir.",
      items: [
        {
          name: "NIF – Número de Identificação Fiscal",
          text: "Portekiz vergi numarası başvurunuz için süreç ve belge hazırlık desteği.",
        },
        {
          name: "NISS – Número de Identificação da Segurança Social",
          text: "Sosyal güvenlik numarası süreci ve gerekli evraklarda destek.",
        },
        {
          name: "Portekiz Banka Hesabı Desteği",
          text: "Yerel banka hesabı açılışı için hazırlık, randevu yönlendirmesi ve eşlik.",
        },
        {
          name: "Yerleşim Desteği",
          text: "Varışınız için yapılandırılmış bir plan: öncelikler, zamanlama ve pratik ihtiyaçlar.",
        },
        {
          name: "İkamet Belgeleri Desteği",
          text: "İkamet sürecinizde istenen belgelerin düzenlenmesi ve hazırlanmasında destek.",
        },
        {
          name: "Kişisel Danışmanlık",
          text: "Durumunuzu değerlendirip en uygun bir sonraki adımı belirlediğimiz birebir görüşme.",
        },
      ],
      disclaimer:
        "TerraSu Living hukuki temsil, hukuki danışmanlık ya da garantili vize veya ikamet sonucu sağlamaz.",
      metaTitle: "Danışmanlık | TerraSu Living Portekiz",
      metaDescription:
        "Portekiz'de NIF, NISS, banka hesabı, yerleşim ve ikamet belgeleri desteği — Gözde K. ile kişiye özel danışmanlık.",
    },
    property: {
      title: "Ev Desteği",
      subtitle: "Ev Arama ve Yerleşim Desteği.",
      preview:
        "Kiralık ve satılık ev arama desteği, görüntüleme koordinasyonu ve yerel bölge rehberliği.",
      intro:
        "Yeni bir ülkede ev bulmak; ilanları, semtleri ve iletişimi yerel gözle okumayı gerektirir. Süreçte yanınızdayız — lisanslı profesyonellerin yerine değil, onlarla birlikte.",
      items: [
        { name: "Kiralık ev arama desteği", text: "Bütçenize, bölgenize ve ihtiyaçlarınıza uygun ilanların seçilmesi." },
        { name: "Ev satın alma desteği", text: "Satın alma yolculuğunuz boyunca pratik destek ve yönlendirme." },
        { name: "İlan ve bölge değerlendirmesi", text: "Bir ilanın ve konumunun gerçekte ne sunduğuna dair dürüst değerlendirme." },
        { name: "Görüntüleme koordinasyonu", text: "Zamanınızı verimli kullanmanız için randevuların planlanması." },
        { name: "Ev sahipleri veya lisanslı acentelerle iletişim desteği", text: "Her görüşmede dil ve iletişim desteği." },
        { name: "Belge hazırlık desteği", text: "Sıkça istenen belgelerin toplanması ve düzenlenmesinde yardım." },
        { name: "Yerel bölge rehberliği", text: "Semt bilgisi: ulaşım, günlük yaşam, okullar ve hizmetler." },
      ],
      disclaimer:
        "TerraSu Living bir emlak acentesi değildir; düzenlemeye tabi emlak aracılık hizmeti veya hukuki hizmet sunmaz. Gerektiğinde müşteriler lisanslı profesyonellere yönlendirilir.",
      metaTitle: "Ev Desteği | TerraSu Living Portekiz",
      metaDescription:
        "Portekiz'de ev arama ve yerleşim desteği: kiralama ve satın alma desteği, görüntüleme koordinasyonu ve bölge rehberliği.",
    },
    cleaning: {
      title: "Temizlik",
      subtitle: "Profesyonel temizlik ve ev hazırlığı.",
      preview:
        "Konut, işyeri, kısa dönem kiralama, taşınma öncesi/sonrası ve derin temizlik hizmetleri.",
      intro:
        "İyi hazırlanmış bir ev her şeyi kolaylaştırır. Temizlik hizmetimiz güvenilir, detaycı ve yaşam alanınıza saygılıdır.",
      items: [
        { name: "Konut Temizliği", text: "Daireler ve evler için düzenli ya da tek seferlik temizlik." },
        { name: "İşyeri Temizliği", text: "Ofisler ve küçük ticari alanlar için düzenli bakım." },
        { name: "Airbnb ve Alojamento Local Temizliği", text: "Misafir dönüşlerinde temizlik ve hazırlık." },
        { name: "Taşınma Öncesi / Sonrası Temizlik", text: "Girmeden önce ya da çıktıktan sonra kapsamlı temizlik." },
        { name: "Derin Temizlik", text: "Baştan sona, detaylı ve yenileyici temizlik." },
      ],
      metaTitle: "Temizlik Hizmetleri | TerraSu Living Porto",
      metaDescription:
        "Porto'da konut, işyeri, Alojamento Local, taşınma ve derin temizlik hizmetleri — TerraSu Living.",
    },
    experiences: {
      title: "Portekiz Deneyimleri",
      subtitle: "Portekiz Deneyimleri ve Yerel Koordinasyon.",
      preview:
        "Porto, Kuzey Portekiz ve Douro Vadisi planlaması ile lisanslı sağlayıcılarla koordinasyon.",
      intro:
        "Alışılmış rotaların ötesinde: Portekiz'deki zamanınızın kişisel, sakin ve akılda kalıcı olması için özenli planlama ve koordinasyon.",
      items: [
        { name: "Porto ve Kuzey Portekiz önerileri", text: "Görülecek, tadılacak ve yavaşlanacak seçilmiş yerler." },
        { name: "Douro Vadisi planlaması", text: "Mevsime, ışığa ve temponuza göre şekillenen gün planları." },
        { name: "Yerel deneyim önerileri", text: "Katalogdan değil, özenle seçilmiş otantik deneyimler." },
        { name: "Küçük grup koordinasyonu", text: "Aileler ve küçük özel gruplar için planlama desteği." },
        { name: "Restoran ve kültür önerileri", text: "Akşamınıza değecek masalar ve kültürel duraklar." },
        { name: "Lisanslı transfer, rehber ve aktivite sağlayıcılarıyla koordinasyon", text: "Güvenilir bağımsız lisanslı sağlayıcılarla düzenlenen rezervasyonlar." },
      ],
      disclaimer:
        "TerraSu Living planlama ve koordinasyon desteği sunar. Ulaşım, tur, konaklama, rehberlik ve düzenlemeye tabi turizm hizmetleri doğrudan bağımsız lisanslı sağlayıcılar tarafından verilir.",
      metaTitle: "Portekiz Deneyimleri | TerraSu Living",
      metaDescription:
        "Portekiz deneyimleri ve yerel koordinasyon: Porto, Kuzey Portekiz ve Douro Vadisi planlaması, lisanslı bağımsız sağlayıcılarla.",
    },
  },
  portfolio: {
    metaTitle: "Portföy | TerraSu Living Destek Alanları",
    metaDescription:
      "Seçilmiş destek alanları ve örnek müşteri yolculukları: yerleşim, ev arama, ev hazırlığı ve Portekiz yaşam planlaması.",
    eyebrow: "Portföy",
    title: "Seçilmiş destek alanları",
    lead: "Eşlik ettiğimiz yolculuklara bir bakış — yorum ya da referans değil, örnek çalışma kapsamları olarak sunuluyor.",
    note: "Bunlar çalışma kapsamımızı gösteren örneklerdir. Müşteri bilgileri her zaman gizli kalır.",
    items: [
      {
        title: "Yerleşim ve kurulum desteği",
        text: "Portekiz'e uzun bir bilinmeyenler listesiyle değil, net bir adım sırasıyla varmak.",
        points: ["İlk ay öncelik planı", "NIF, NISS ve banka randevuları", "Günlük pratik oryantasyon"],
      },
      {
        title: "Ev arama yolculuğu",
        text: "Seçilmiş ilanlardan imzalı sözleşmeye, semtleri yerel gözle okuyarak.",
        points: ["Bölge ve ilan değerlendirmesi", "Görüntüleme koordinasyonu", "Ev sahipleri veya lisanslı acentelerle iletişim"],
      },
      {
        title: "Ev ve kiralama hazırlığı",
        text: "Evlerin ve kısa dönem kiralamaların istikrarlı, davetkâr bir standartta hazırlanması.",
        points: ["Taşınma öncesi ve sonrası temizlik", "Misafir dönüşü hazırlığı", "Teslim öncesi derin temizlik"],
      },
      {
        title: "Özel Portekiz yaşam planlaması",
        text: "Portekiz'deki zamanın temponuza, ilgi alanlarınıza ve mevsime göre planlanması.",
        points: ["Porto ve Douro Vadisi gün planları", "Restoran ve kültür seçkileri", "Lisanslı sağlayıcılarla koordinasyon"],
      },
    ],
  },
  contact: {
    metaTitle: "İletişim | TerraSu Living Porto",
    metaDescription:
      "Danışmanlık, ev desteği, temizlik ve Portekiz deneyimleri için Porto'daki TerraSu Living ile iletişime geçin.",
    eyebrow: "İletişim",
    title: "Gözde K. ile İletişime Geçin",
    lead: "İhtiyaçlarınızı paylaşın, size en uygun hizmeti ve bir sonraki adımı birlikte belirleyelim.",
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    phoneOptional: "opsiyonel",
    service: "İhtiyaç Duyulan Hizmet",
    servicePlaceholder: "Bir hizmet seçin",
    message: "Mesajınız",
    submit: "Mesajı gönder",
    sent: "Teşekkürler — e-posta taslağınız hazır. Bir iş günü içinde dönüş yapıyoruz.",
    options: [
      "Danışmanlık",
      "NIF / NISS / Banka Hesabı",
      "Ev Desteği",
      "Temizlik",
      "Portekiz Deneyimleri",
      "Diğer",
    ],
    detailsTitle: "Doğrudan iletişim",
    instagram: "Instagram",
    emailLabel: "E-posta",
    location: "Konum",
    locationValue: "Porto, Portekiz",
    responseTitle: "Yanıt süresi",
    responseText: "Mesajlar genellikle bir iş günü içinde Türkçe veya İngilizce yanıtlanır.",
  },
  footer: {
    tagline: "Portekiz merkezli bir yaşam ve destek markası; Gözde K. tarafından kuruldu ve yönetiliyor.",
    quickLinks: "Menü",
    servicesTitle: "Hizmetler",
    legalTitle: "Yasal",
    privacy: "Gizlilik Politikası",
    cookies: "Çerez Politikası",
    terms: "Kullanım Koşulları",
    disclaimer: "Sorumluluk Reddi",
    language: "Dil",
    rights: "Tüm hakları saklıdır.",
  },
  legal: {
    privacy: {
      title: "Gizlilik Politikası",
      body: [
        "TerraSu Living yalnızca sizin paylaşmayı seçtiğiniz kişisel bilgileri — adınız, e-posta adresiniz, telefon numaranız ve talebinizin detayları gibi — talebinizi yanıtlamak ve istediğiniz hizmeti sunmak amacıyla toplar.",
        "Bilgileriniz hiçbir zaman satılmaz veya pazarlama amacıyla paylaşılmaz. Yalnızca talep ettiğiniz bir hizmetin sunulması için gerekli olduğunda ve bilginiz dahilinde bağımsız lisanslı profesyonellerle paylaşılabilir.",
        "Kişisel verilerinize erişim, düzeltme veya silme talebinizi dilediğiniz zaman info@terrasuliving.com adresine iletebilirsiniz.",
      ],
    },
    cookies: {
      title: "Çerez Politikası",
      body: [
        "Bu web sitesi yalnızca çalışması için gereken asgari teknik depolamayı kullanır; örneğin seçtiğiniz dili hatırlamak gibi.",
        "Reklam çerezleri veya üçüncü taraf takip profilleri kullanmıyoruz.",
        "Bu depolamayı tarayıcı ayarlarınızdan dilediğiniz zaman temizleyebilirsiniz.",
      ],
    },
    terms: {
      title: "Kullanım Koşulları",
      body: [
        "TerraSu Living; danışmanlık, yerleşim desteği, ev arama desteği, temizlik hizmetleri ile deneyim planlama ve koordinasyonu sunar.",
        "TerraSu Living hukuki temsil veya hukuki danışmanlık sağlamaz, bir emlak acentesi değildir, seyahat acentesi veya tur operatörü değildir. Düzenlemeye tabi hizmetler bağımsız lisanslı sağlayıcılar tarafından verilir.",
        "Hizmet kapsamı, zamanlama ve fiyatlandırma çalışma başlamadan önce bireysel olarak kararlaştırılır. Kamu kurumlarına veya üçüncü taraflara bağlı sonuçlar garanti edilemez.",
      ],
    },
    disclaimer: {
      title: "Sorumluluk Reddi",
      body: [
        "Bu web sitesinde yayımlanan bilgiler genel niteliktedir ve yalnızca yönlendirme amacıyla sunulur. Hukuki, vergisel, göçmenlik, finansal veya emlak danışmanlığı niteliği taşımaz.",
        "AIMA, Finanças, Segurança Social ve konsolosluk ağı dâhil olmak üzere Portekiz kurumlarının belirlediği koşullar, süreçler ve işlem süreleri önceden haber verilmeksizin değişebilir. Güncel koşullar, planınız hazırlanırken resmî kaynaktan teyit edilir.",
        "TerraSu Living koordinasyon ve kişisel destek sunar. Hukuki temsil, emlak aracılığı, muhasebe ve lisanslı taşımacılık gibi düzenlemeye tabi hizmetler bağımsız lisanslı profesyoneller tarafından yürütülür.",
        "Kamu kurumlarına veya üçüncü taraflara bağlı hiçbir sonuç garanti edilemez.",
      ],
    },
  },
};

export const content: Record<Lang, Content> = { en, tr };
