import type { Lang } from "./content";

/* ------------------------------------------------------------------ */
/* Editable placeholders                                               */
/* ------------------------------------------------------------------ */

export const YOUTUBE_URL = "https://youtube.com/@gozdek3101?si=O9XDg-nEW9cbHxlb";
export const INSTAGRAM_URL = "https://www.instagram.com/ggozde_k/";
export const INSTAGRAM_HANDLE = "@ggozde_k";
export const EMAIL = "info@terrasuliving.com";
export const LAST_REVIEWED = "2026";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type PageSection = {
  id?: string;
  title: string;
  text?: string;
  items?: string[];
  groups?: { title: string; items: string[] }[];
  note?: string;
};

export type PageDoc = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  sections: PageSection[];
  notices?: string[];
  source?: { label: string; url: string };
  cta: string;
};

export type PageKey =
  | "relocation"
  | "visas"
  | "completeSetup"
  | "administrative"
  | "nif"
  | "niss"
  | "health"
  | "cmd"
  | "bank"
  | "property"
  | "rental"
  | "purchase"
  | "homeSetup"
  | "cleaning"
  | "business"
  | "tours"
  | "transfers"
  | "everyday"
  | "expatGuide";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavItem = { to: string; hash?: string; label: Record<Lang, string> };
export type NavGroup = { to: string; label: Record<Lang, string>; children?: NavItem[] };

const L = (en: string, tr: string): Record<Lang, string> => ({ en, tr });

export const navigation: NavGroup[] = [
  { to: "/", label: L("Home", "Ana Sayfa") },
  { to: "/about", label: L("About Gözde", "Gözde ile Tanışın") },
  {
    to: "/relocation",
    label: L("Relocation", "Yerleşim"),
    children: [
      { to: "/relocation/visas", hash: "d2", label: L("D2 Visa", "D2 Vizesi") },
      { to: "/relocation/visas", hash: "d7", label: L("D7 Visa", "D7 Vizesi") },
      { to: "/relocation/visas", hash: "d9", label: L("D9 Visa", "D9 Vizesi") },
      { to: "/relocation/visas", hash: "golden", label: L("Golden Visa", "Golden Vize") },
      { to: "/relocation/visas", label: L("All Visa Routes", "Tüm Vize Yolları") },
      {
        to: "/relocation",
        hash: "planning",
        label: L("Relocation Planning", "Yerleşim Planlaması"),
      },
      { to: "/complete-setup", label: L("End-to-End Support", "Baştan Sona Destek") },
      {
        to: "/relocation",
        hash: "arrival",
        label: L("Arrival and Settlement", "Varış ve Yerleşme"),
      },
    ],
  },
  {
    to: "/administrative",
    label: L("Administrative Services", "İdari Hizmetler"),
    children: [
      { to: "/administrative/nif", label: L("NIF", "NIF") },
      { to: "/administrative/niss", label: L("NISS", "NISS") },
      {
        to: "/administrative/health",
        label: L("Utente, Health Number", "Utente, Sağlık Numarası"),
      },
      { to: "/administrative/bank", label: L("Portuguese Bank Account", "Portekiz Banka Hesabı") },
      {
        to: "/administrative",
        hash: "aima",
        label: L("AIMA and Document Preparation", "AIMA ve Evrak Hazırlığı"),
      },
      { to: "/administrative/cmd", label: L("Chave Móvel Digital", "Chave Móvel Digital") },
      {
        to: "/administrative",
        hash: "activity",
        label: L("Activity Registration", "Faaliyet Kaydı"),
      },
    ],
  },
  {
    to: "/property",
    label: L("Property", "Emlak"),
    children: [
      { to: "/property/rental", label: L("Property Rental Assistance", "Kiralama Desteği") },
      { to: "/property/purchase", label: L("Property Purchase Assistance", "Satın Alma Desteği") },
      {
        to: "/property",
        hash: "movein",
        label: L("Move-In and Home Setup", "Taşınma ve Ev Kurulumu"),
      },
      { to: "/property/cleaning", label: L("Professional Cleaning", "Profesyonel Temizlik") },
      { to: "/property", hash: "area", label: L("Area Research", "Bölge Araştırması") },
      {
        to: "/property",
        hash: "viewings",
        label: L("Viewing Coordination", "Görüntüleme Koordinasyonu"),
      },
    ],
  },
  {
    to: "/business",
    label: L("Business Setup", "İş Kurulumu"),
    children: [
      {
        to: "/business",
        hash: "self",
        label: L("Self-Employment Guidance", "Serbest Çalışma Rehberliği"),
      },
      {
        to: "/business",
        hash: "setup",
        label: L("Business Formation Support", "Şirket Kurulum Desteği"),
      },
      {
        to: "/business",
        hash: "market",
        label: L("Business Opportunity Research", "İş Fırsatı Araştırması"),
      },
      {
        to: "/business",
        hash: "location",
        label: L("Market and Location Research", "Pazar ve Lokasyon Araştırması"),
      },
      {
        to: "/business",
        hash: "coordination",
        label: L("Practical Setup Coordination", "Pratik Kurulum Koordinasyonu"),
      },
      {
        to: "/business",
        hash: "referrals",
        label: L("Professional Referrals", "Profesyonel Yönlendirme"),
      },
    ],
  },
  {
    to: "/tours",
    label: L("Private Boutique Experiences", "Özel Butik Deneyimler"),
    children: [
      {
        to: "/tours",
        hash: "portugal",
        label: L("Private Portugal Programmes", "Özel Portekiz Programları"),
      },
      {
        to: "/tours",
        hash: "turkey",
        label: L("Portugal and Türkiye Journeys", "Portekiz ve Türkiye Yolculukları"),
      },
      {
        to: "/tours",
        hash: "international",
        label: L("International Custom Programmes", "Uluslararası Özel Programlar"),
      },
      { to: "/transfers", label: L("Private Transfers", "Özel Transferler") },
      { to: "/tours", hash: "groups", label: L("Small Private Groups", "Küçük Özel Gruplar") },
    ],
  },
  { to: "/portfolio", label: L("Portfolio", "Portföy") },
  { to: "/contact", label: L("Contact", "İletişim") },
];

/* ------------------------------------------------------------------ */
/* Site-wide copy                                                      */
/* ------------------------------------------------------------------ */

export type SiteCopy = {
  base: string;
  coreMessage: string;
  coreSupport: string;
  coreAlt: string;
  heroTitle: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaInstagram: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesLead: string;
  services: { title: string; text: string; to: string; hash?: string }[];
  founderEyebrow: string;
  founderTitle: string;
  founderText: string[];
  founderPortraitNote: string;
  socialTitle: string;
  socialText: string;
  socialReels: string;
  socialDm: string;
  socialYoutube: string;
  socialYoutubePending: string;
  packagesEyebrow: string;
  packagesTitle: string;
  packagesLead: string;
  packages: string[];
  packagesNote: string;
  packagesCta: string;
  legalTitle: string;
  legal: string[];
  lastReviewedLabel: string;
  officialSource: string;
  readMore: string;
  enquire: string;
  combineNote: string;
};

export const siteCopy: Record<Lang, SiteCopy> = {
  en: {
    base: "Based in Porto, supporting clients across Portugal",
    coreMessage:
      "From your first plan to your new life in Portugal, we coordinate the practical details with you.",
    coreSupport:
      "Relocation, visa preparation, administrative setup, home search, cleaning, key handover, transfer coordination and everyday settlement support are organised through one personalised service plan.",
    coreAlt:
      "Professional support from the preparation stage to your arrival, home setup and daily life in Portugal.",
    heroTitle: "Plan Your New Life in Portugal with Personal, Professional Support",
    heroSub:
      "Relocation consulting, visa preparation, administrative services, property support, cleaning, transfer coordination, business setup guidance and private boutique programmes across Portugal.",
    ctaPrimary: "Request Personalised Support",
    ctaSecondary: "Explore All Services",
    ctaInstagram: "Instagram DM",
    servicesEyebrow: "What we do",
    servicesTitle: "Personal Support for Your New Life in Portugal",
    servicesLead:
      "From paperwork to finding a home, from your first arrival to everyday life — every journey is different. At TerraSu Living, support begins with your individual needs, not a standard package.",
    services: [
      {
        title: "Visa & Relocation Guidance",
        text: "I turn the move to Portugal from an uncertain process into a clear, personal roadmap, from visa preparation to the first steps of settling in.",
        to: "/relocation",
      },
      {
        title: "NIF, NISS, Health Registration & Banking",
        text: "I organise the essential formalities of your new life in one process, including preparation, guidance and follow-up for NIF, NISS, health registration and banking.",
        to: "/administrative",
      },
      {
        title: "Home Search, Rental & Turnkey Relocation",
        text: "I help you find the right place to live through area and listing research, viewing coordination, rental preparation, move-in planning, home setup and key handover.",
        to: "/property",
      },
      {
        title: "Business & Practical Setup",
        text: "I make the practical steps of establishing work or daily life in Portugal clearer and more manageable, with support shaped around your situation.",
        to: "/business",
      },
      {
        title: "Airport & Private Transfer Coordination",
        text: "A more comfortable first arrival through carefully selected, licensed transport providers coordinated for individuals, families and private groups.",
        to: "/transfers",
      },
      {
        title: "Private Boutique Experiences",
        text: "Portugal experienced personally, through private routes shaped around gastronomy, wine, culture and local life for small groups and private guests.",
        to: "/tours",
      },
      {
        title: "Everyday Life & Settlement Support",
        text: "Personal support with the small local details that make a real difference, helping Portugal feel more familiar and more like home.",
        to: "/everyday-life",
      },
    ],
    founderEyebrow: "Founder",
    founderTitle: "Personally Guided by Gözde Katipoğlu",
    founderText: [
      "I am Gözde Katipoğlu, founder of TerraSu Living.",
      "I live in Portugal and personally experienced the process of relocating, finding a home, completing administrative procedures and establishing everyday life in a new country.",
      "That experience became the foundation of TerraSu Living.",
      "I work directly with each client and personally oversee the planning, communication and coordination included in their service.",
      "My role is to make the process clearer, more organised and more manageable while connecting clients with appropriately qualified professionals whenever regulated expertise is required.",
      "I am based in Porto, but TerraSu Living supports clients across Portugal according to the service, location and project requirements.",
    ],
    founderPortraitNote: "Portrait of Gözde Katipoğlu, founder of TerraSu Living.",
    socialTitle: "Real Life and Practical Information from Portugal",
    socialText:
      "Follow Gözde for practical observations, real relocation experiences, property-search insights and everyday life in Portugal.",
    socialReels: "View Latest Reels",
    socialDm: "Send Instagram DM",
    socialYoutube: "Watch on YouTube",
    socialYoutubePending: "Channel address to be added",
    packagesEyebrow: "Support formats",
    packagesTitle: "Enquiry categories",
    packagesLead:
      "Service scope and pricing depend on location, number of people, timeline, complexity and level of assistance.",
    packages: [
      "Essential Setup",
      "Administrative Preparation",
      "Home Search and Arrival",
      "Complete Relocation Support",
      "Home Ready Package",
      "Business Setup Research",
      "Private Group Programme",
      "Comprehensive Portugal Support",
    ],
    packagesNote: "Contact us for a personalised service scope and quotation.",
    packagesCta: "Request a quotation",
    legalTitle: "Legal position",
    legal: [
      "TerraSu Living provides practical information, preparation, research and coordination support. It does not provide regulated legal, accounting, financial, investment, real-estate brokerage, transport or tourism services unless expressly stated after the relevant licence or registration has been obtained.",
      "Regulated services are provided by appropriately licensed independent professionals.",
      "TerraSu Living does not guarantee decisions by consulates, AIMA, banks, public authorities, landlords, property sellers or other third parties.",
    ],
    lastReviewedLabel: "Last reviewed in",
    officialSource: "Official source",
    readMore: "Read more",
    enquire: "Request Personalised Support",
    combineNote:
      "Support may be selected as individual services or combined in a comprehensive relocation package.",
  },
  tr: {
    base: "Porto merkezli, Portekiz genelinde hizmet",
    coreMessage:
      "İlk planınızdan Portekiz'deki yeni yaşamınıza kadar tüm pratik süreci sizinle birlikte koordine ediyoruz.",
    coreSupport:
      "Yerleşim planlaması, vize hazırlığı, idari işlemler, ev arama, temizlik, anahtar teslimi, transfer koordinasyonu ve günlük yaşam kurulumu tek bir kişisel hizmet planı içinde organize edilir.",
    coreAlt:
      "Hazırlık aşamasından Portekiz'e gelişinize, evinizin kurulumundan günlük yaşamınıza kadar profesyonel destek.",
    heroTitle: "Portekiz'deki Yeni Hayatınızı Kişisel ve Profesyonel Destekle Planlayın",
    heroSub:
      "Portekiz genelinde yerleşim danışmanlığı, vize hazırlığı, idari hizmetler, emlak desteği, temizlik, transfer koordinasyonu, iş kurulum rehberliği ve özel butik programlar.",
    ctaPrimary: "Kişisel Destek Talep Edin",
    ctaSecondary: "Tüm Hizmetleri İnceleyin",
    ctaInstagram: "Instagram DM",
    servicesEyebrow: "Kişisel destek",
    servicesTitle: "Portekiz’de Yeni Hayatınız İçin Kişisel Destek",
    servicesLead:
      "Evraklardan eve, ilk adımdan günlük yaşama… Her süreç aynı değildir. Bu nedenle TerraSu Living’de hizmetler hazır paketlerden değil, sizin ihtiyaçlarınızdan başlar.",
    services: [
      {
        title: "Vize & Yerleşim Danışmanlığı",
        text: "Portekiz’e taşınma sürecinizi belirsizlikten çıkarıp planlı, anlaşılır ve kişisel bir yol haritasına dönüştürüyorum. Vize sürecinden yerleşimin ilk adımlarına kadar ihtiyacınıza özel rehberlik.",
        to: "/relocation",
      },
      {
        title: "NIF, NISS, Sağlık Kaydı & Bankacılık",
        text: "Portekiz’de yeni hayatınızın temel resmi işlemlerini tek bir süreçte organize ediyorum. NIF, NISS, sağlık kullanıcı kaydı ve banka hesabı sürecinde hazırlık, yönlendirme ve takip desteği.",
        to: "/administrative",
      },
      {
        title: "Ev Bulma, Kiralama & Anahtar Teslim Yerleşim",
        text: "Sadece bir ev aramıyorum; Portekiz’de yaşayacağınız doğru alanı bulmanıza yardımcı oluyorum. Bölge ve ev araştırması, ilan değerlendirmesi, kiralama süreci, taşınma hazırlığı, ev kurulumu ve anahtar teslim yerleşim desteğini tek noktada koordine ediyorum.",
        to: "/property",
      },
      {
        title: "İş Kurulumu & Pratik Destek",
        text: "Portekiz’de iş veya günlük yaşam düzeninizi kurarken ihtiyaç duyacağınız pratik süreçleri daha anlaşılır ve yönetilebilir hale getiriyorum. İhtiyacınıza göre kişiselleştirilmiş, yerel ve çözüm odaklı destek.",
        to: "/business",
      },
      {
        title: "Havalimanı & Özel Transfer Koordinasyonu",
        text: "Portekiz’e ilk adımınızdan itibaren rahat bir başlangıç. Bireyler, aileler ve özel gruplar için güvenilir transfer ve ulaşım koordinasyonu.",
        to: "/transfers",
      },
      {
        title: "Özel Butik Deneyimler",
        text: "Portekiz’i standart bir turist gibi değil, size özel hazırlanmış bir deneyimle keşfedin. Küçük gruplar ve özel misafirler için gastronomi, şarap, kültür ve yerel yaşam odaklı seçkin rotalar.",
        to: "/tours",
      },
      {
        title: "Günlük Yaşam & Yerleşim Desteği",
        text: "Yeni bir ülkede küçük detaylar büyük fark yaratır. Günlük yaşamdan yerel ihtiyaçlara kadar Portekiz’de kendinizi daha hızlı evinizde hissetmenizi sağlayacak kişisel destek.",
        to: "/everyday-life",
      },
    ],
    founderEyebrow: "Kurucu",
    founderTitle: "Gözde Katipoğlu ile Birebir Yönetilen Hizmet",
    founderText: [
      "Ben Gözde Katipoğlu, TerraSu Living'in kurucusuyum.",
      "Portekiz'e taşınma, ev bulma, idari işlemleri tamamlama ve yeni bir ülkede günlük yaşam kurma sürecini bizzat deneyimledim.",
      "Bu deneyim TerraSu Living'in temelini oluşturdu.",
      "Her müşterimle doğrudan çalışıyor, hizmet planındaki hazırlık, iletişim ve koordinasyon süreçlerini bizzat takip ediyorum.",
      "Amacım süreci daha açık, düzenli ve yönetilebilir hâle getirmek; yetki gerektiren işlemlerde müşterileri uygun ve lisanslı profesyonellerle buluşturmaktır.",
      "Porto'da yaşıyorum. TerraSu Living ise hizmetin türüne, konuma ve proje ihtiyaçlarına göre Portekiz genelinde destek sunar.",
    ],
    founderPortraitNote: "TerraSu Living kurucusu Gözde Katipoğlu'nun portresi.",
    socialTitle: "Portekiz'den Gerçek Yaşam ve Pratik Bilgiler",
    socialText:
      "Portekiz'de gerçek yaşam, taşınma deneyimleri, ev arama süreçleri ve günlük hayat için Gözde'yi takip edin.",
    socialReels: "Son Reels İçeriklerini İzleyin",
    socialDm: "Instagram DM Gönderin",
    socialYoutube: "YouTube'da İzleyin",
    socialYoutubePending: "Kanal adresi eklenecek",
    packagesLead:
      "Evraklardan eve, ilk adımdan günlük yaşama… Her süreç aynı değildir. Bu nedenle TerraSu Living’de hizmetler hazır paketlerden değil, sizin ihtiyaçlarınızdan başlar.",
    packages: [
      "Temel Kurulum",
      "Kapsamlı Yerleşim Desteği",
      "Eve Hazır Paketi",
      "İş Kurulumu Araştırması",
      "Özel Grup Programı",
      "Kapsamlı Portekiz Desteği",
    ],
    packagesNote: "Size özel hizmet kapsamı ve fiyat teklifi için iletişime geçin.",
    packagesCta: "Teklif talep edin",
    legalTitle: "Hukuki çerçeve",
    legal: [
      "TerraSu Living pratik bilgi, hazırlık, araştırma ve koordinasyon desteği sunar. Lisans veya kayıt gerektiren hukuki, mali, yatırım, emlak aracılığı, ulaşım veya turizm hizmetlerini sunmaz.",
      "Düzenlemeye tabi hizmetler uygun lisansa sahip bağımsız profesyoneller tarafından verilir.",
      "TerraSu Living konsolosluklar, AIMA, bankalar, kamu kurumları, ev sahipleri veya üçüncü tarafların kararlarını garanti etmez.",
    ],
    lastReviewedLabel: "Son gözden geçirme",
    officialSource: "Resmî kaynak",
    readMore: "Daha fazla",
    enquire: "Kişisel Destek Talep Edin",
    combineNote:
      "Destekleri ayrı ayrı seçebilir veya kapsamlı bir yerleşim planında birleştirebilirsiniz.",
  },
};

/* ------------------------------------------------------------------ */

export type PortfolioEntry = {
  key: string;
  category: Record<Lang, string>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  status: Record<Lang, string>;
  to?: string;
};

export const portfolioEntries: PortfolioEntry[] = [
  {
    key: "relocation",
    category: L("Consulting", "Danışmanlık"),
    title: L("Relocation Planning", "Yerleşim Planlaması"),
    text: L(
      "A written plan covering route options, document stages, timing and the order in which each step is prepared.",
      "Seçenekler, evrak aşamaları, zamanlama ve her adımın hangi sırayla hazırlanacağını içeren yazılı bir plan.",
    ),
    status: L("Service Area", "Hizmet Alanı"),
    to: "/relocation",
  },
  {
    key: "admin",
    category: L("Administration", "İdari İşlemler"),
    title: L("Administrative Setup", "İdari Kurulum"),
    text: L(
      "Preparation and follow up across the public offices involved in registering a new resident in Portugal.",
      "Portekiz'de yeni bir sakinin kaydı sırasında ilgili kamu kurumlarında hazırlık ve takip.",
    ),
    status: L("Coordination", "Koordinasyon"),
    to: "/administrative",
  },
  {
    key: "nifniss",
    category: L("Administration", "İdari İşlemler"),
    title: L("NIF and NISS Preparation", "NIF ve NISS Hazırlığı"),
    text: L(
      "Document checks, application guidance and status follow up for the tax and social security numbers.",
      "Vergi ve sosyal güvenlik numaraları için evrak kontrolü, başvuru rehberliği ve durum takibi.",
    ),
    status: L("Service Area", "Hizmet Alanı"),
    to: "/administrative/nif",
  },
  {
    key: "rental",
    category: L("Property", "Emlak"),
    title: L("Rental Search", "Kiralık Ev Arama"),
    text: L(
      "Area shortlists, listing review, landlord and agency communication and a complete rental file.",
      "Bölge listeleri, ilan değerlendirmesi, ev sahibi ve acente iletişimi ve eksiksiz bir kiralama dosyası.",
    ),
    status: L("Coordination", "Koordinasyon"),
    to: "/property/rental",
  },
  {
    key: "purchase",
    category: L("Property", "Emlak"),
    title: L("Property Purchase Coordination", "Satın Alma Koordinasyonu"),
    text: L(
      "Market comparison, viewing coordination and scheduling with the independent professionals involved.",
      "Piyasa karşılaştırması, görüntüleme koordinasyonu ve sürece dahil bağımsız profesyonellerle planlama.",
    ),
    status: L("Coordination", "Koordinasyon"),
    to: "/property/purchase",
  },
  {
    key: "homesetup",
    category: L("Home", "Ev"),
    title: L("Move-In, Home Setup and Key Handover", "Taşınma, Ev Kurulumu ve Anahtar Teslimi"),
    text: L(
      "Key collection, condition photographs, first day essentials and a property that is ready on arrival.",
      "Anahtar teslim alma, durum fotoğrafları, ilk gün ihtiyaçları ve varışta hazır bir ev.",
    ),
    status: L("Service Area", "Hizmet Alanı"),
    to: "/property",
  },
  {
    key: "cleaning",
    category: L("Cleaning", "Temizlik"),
    title: L("Professional Cleaning", "Profesyonel Temizlik"),
    text: L(
      "Residential, office, short stay and post renovation cleaning planned around arrival or handover dates.",
      "Konut, ofis, kısa dönem ve tadilat sonrası temizlik; varış veya teslim tarihine göre planlanır.",
    ),
    status: L("Service Area", "Hizmet Alanı"),
    to: "/property/cleaning",
  },
  {
    key: "transfer",
    category: L("Transport", "Ulaşım"),
    title: L("Transfer Coordination", "Transfer Koordinasyonu"),
    text: L(
      "Airport arrivals, intercity journeys and group transport arranged with licensed providers.",
      "Havalimanı karşılamaları, şehirlerarası yolculuklar ve grup ulaşımı lisanslı sağlayıcılarla düzenlenir.",
    ),
    status: L("Coordination", "Koordinasyon"),
    to: "/transfers",
  },
  {
    key: "business",
    category: L("Business", "İş"),
    title: L("Business Concept Research", "İş Fikri Araştırması"),
    text: L(
      "Local demand indicators, competition, location options and a realistic setup roadmap.",
      "Yerel talep göstergeleri, rekabet, lokasyon seçenekleri ve gerçekçi bir kurulum yol haritası.",
    ),
    status: L("Concept", "Konsept"),
    to: "/business",
  },
  {
    key: "groups",
    category: L("Groups", "Gruplar"),
    title: L("Private Group Planning", "Özel Grup Planlaması"),
    text: L(
      "Dates, pace, accommodation style and transport planned around the character of a small group.",
      "Tarihler, tempo, konaklama tarzı ve ulaşım; küçük grubun karakterine göre planlanır.",
    ),
    status: L("Planning", "Planlama"),
    to: "/tours",
  },
  {
    key: "tours",
    category: L("Tours", "Turlar"),
    title: L("Private Boutique Experiences", "Özel Butik Deneyimler"),
    text: L(
      "Cultural, culinary and landscape programmes designed for a specific group rather than a fixed itinerary.",
      "Sabit bir güzergâh yerine belirli bir gruba göre tasarlanan kültür, gastronomi ve doğa programları.",
    ),
    status: L("Planning", "Planlama"),
    to: "/tours",
  },
  {
    key: "expat",
    category: L("Settlement", "Yerleşme"),
    title: L("Portugal Expat Support", "Portekiz Expat Desteği"),
    text: L(
      "Ongoing help with utilities, local services, appointments and the questions that follow the first month.",
      "Abonelikler, yerel hizmetler, randevular ve ilk aydan sonra gelen sorular için sürekli destek.",
    ),
    status: L("Service Area", "Hizmet Alanı"),
    to: "/everyday-life",
  },
];
