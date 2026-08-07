import type { Lang } from "./content";

/**
 * Founder-voice brand copy: homepage hero, the "Meet Gözde" story,
 * the reasons to work with TerraSu Living and the pricing position.
 * Kept separate from the service data layer so tone can be edited in one place.
 */
export type BrandCopy = {
  heroTitle: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  meetEyebrow: string;
  meetTitle: string;
  meetLead: string;
  meetStory: string[];
  meaningTitle: string;
  meaning: { term: string; text: string }[];
  meaningNote: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  why: { title: string; text: string }[];
  pricingEyebrow: string;
  pricingTitle: string;
  pricingText: string[];
  pricingPrimary: string;
  pricingSecondary: string;
};

export const brand: Record<Lang, BrandCopy> = {
  en: {
    heroTitle: "Your Personal Journey to Portugal Starts Here",
    heroSub:
      "Personalised relocation consultancy, visa planning, administrative assistance, property services, business guidance and boutique travel experiences across Portugal.",
    ctaPrimary: "Request Personal Consultation",
    ctaSecondary: "Explore Services",

    meetEyebrow: "The founder",
    meetTitle: "Meet Gözde",
    meetLead:
      "A boutique consultancy built on a relocation that was lived personally, not read about in a guide.",
    meetStory: [
      "My name is Gözde.",
      "I founded TerraSu Living with one purpose: to provide personalised support for people who want to discover Portugal, relocate to Portugal, establish a new life, start a business, invest, purchase or rent property, or simply experience Portugal through authentic boutique experiences.",
      "After experiencing my own relocation journey, I realised every client deserves honest, personalised and professional guidance instead of generic consultancy.",
      "That is why TerraSu Living was created.",
      "Every client receives a completely personalised journey. No two relocation plans are ever the same.",
    ],
    meaningTitle: "The name TerraSu reflects my philosophy",
    meaning: [
      { term: "Terra", text: "Earth in Portuguese. Strong foundations." },
      { term: "Su", text: "Water in Turkish. Flexibility, growth and new beginnings." },
    ],
    meaningNote: "Together they symbolise building a successful life in Portugal.",

    whyEyebrow: "Why TerraSu Living",
    whyTitle: "A boutique consultancy, not a processing desk",
    whyLead:
      "You work with one person who knows your file, answers directly and stays with you well beyond the first appointment.",
    why: [
      { title: "Personal experience", text: "The same paperwork, queues and decisions, lived first hand in Portugal." },
      { title: "Real relocation knowledge", text: "Practical detail that only comes from completing the process, not summarising it." },
      { title: "Boutique consultancy", text: "A limited number of clients at a time so every file receives genuine attention." },
      { title: "Transparent communication", text: "Clear scope, honest timelines and no promises about decisions we do not control." },
      { title: "No generic packages", text: "Nothing is sold from a fixed menu. Your plan is written for your situation." },
      { title: "Tailor-made solutions", text: "Family size, budget, work, schools and pace all shape the route we take." },
      { title: "One dedicated contact", text: "You are never passed between departments or case handlers." },
      { title: "Long-term support", text: "Support continues after arrival, through settlement and everyday life." },
      { title: "Local expertise", text: "Based in Porto, working with trusted professionals across Portugal." },
      { title: "Premium service", text: "Considered, discreet and organised from the first message to the last detail." },
    ],

    pricingEyebrow: "Pricing",
    pricingTitle: "Every client has unique needs",
    pricingText: [
      "Every client has unique needs.",
      "For personalised service options and a customised quotation, please contact TerraSu Living directly.",
    ],
    pricingPrimary: "Request Personal Consultation",
    pricingSecondary: "Contact Us",
  },

  tr: {
    heroTitle: "Portekiz'e Kişisel Yolculuğunuz Burada Başlıyor",
    heroSub:
      "Portekiz genelinde kişiye özel yerleşim danışmanlığı, vize planlaması, idari destek, emlak hizmetleri, iş kurulum rehberliği ve butik seyahat deneyimleri.",
    ctaPrimary: "Kişisel Danışmanlık Talep Edin",
    ctaSecondary: "Hizmetleri Keşfedin",

    meetEyebrow: "Kurucu",
    meetTitle: "Gözde ile Tanışın",
    meetLead:
      "Kitaptan okunmuş değil, bizzat yaşanmış bir yerleşim sürecinin üzerine kurulmuş butik bir danışmanlık.",
    meetStory: [
      "Adım Gözde.",
      "TerraSu Living'i tek bir amaçla kurdum: Portekiz'i keşfetmek, Portekiz'e taşınmak, yeni bir hayat kurmak, iş kurmak, yatırım yapmak, ev satın almak veya kiralamak ya da Portekiz'i özgün butik deneyimlerle yaşamak isteyen kişilere kişiye özel destek sunmak.",
      "Kendi yerleşim yolculuğumu deneyimledikten sonra, her müşterinin genel geçer bir danışmanlık yerine dürüst, kişiselleştirilmiş ve profesyonel bir rehberliği hak ettiğini gördüm.",
      "TerraSu Living tam da bu nedenle kuruldu.",
      "Her müşteri tamamen kişiye özel bir yolculuk yaşar. Hiçbir yerleşim planı bir diğerinin aynısı değildir.",
    ],
    meaningTitle: "TerraSu ismi felsefemi yansıtır",
    meaning: [
      { term: "Terra", text: "Portekizcede toprak. Sağlam temeller." },
      { term: "Su", text: "Türkçede su. Esneklik, büyüme ve yeni başlangıçlar." },
    ],
    meaningNote: "İkisi bir arada, Portekiz'de başarılı bir hayat kurmayı simgeler.",

    whyEyebrow: "Neden TerraSu Living",
    whyTitle: "İşlem masası değil, butik bir danışmanlık",
    whyLead:
      "Dosyanızı bilen, doğrudan yanıt veren ve ilk randevudan çok sonra da yanınızda kalan tek bir kişiyle çalışırsınız.",
    why: [
      { title: "Kişisel deneyim", text: "Aynı evraklar, aynı sıralar ve aynı kararlar; Portekiz'de bizzat yaşandı." },
      { title: "Gerçek yerleşim bilgisi", text: "Süreci özetlemekten değil, bizzat tamamlamaktan gelen pratik detaylar." },
      { title: "Butik danışmanlık", text: "Aynı anda sınırlı sayıda müşteri; böylece her dosyaya gerçek ilgi." },
      { title: "Şeffaf iletişim", text: "Net kapsam, dürüst zaman planı ve kontrolümüzde olmayan konularda söz vermemek." },
      { title: "Hazır paket yok", text: "Sabit bir menüden satış yapılmaz. Planınız sizin durumunuza göre yazılır." },
      { title: "Kişiye özel çözümler", text: "Aile büyüklüğü, bütçe, iş, okullar ve tempo izlenecek yolu birlikte belirler." },
      { title: "Tek muhatap", text: "Departmanlar veya dosya sorumluları arasında dolaştırılmazsınız." },
      { title: "Uzun vadeli destek", text: "Destek gelişten sonra da, yerleşme ve günlük yaşam boyunca sürer." },
      { title: "Yerel uzmanlık", text: "Porto merkezli; Portekiz genelinde güvenilir profesyonellerle çalışma." },
      { title: "Premium hizmet", text: "İlk mesajdan son detaya kadar özenli, ölçülü ve düzenli bir süreç." },
    ],

    pricingEyebrow: "Fiyatlandırma",
    pricingTitle: "Her müşterinin ihtiyacı farklıdır",
    pricingText: [
      "Her müşterinin ihtiyacı farklıdır.",
      "Kişiye özel hizmet seçenekleri ve size özel bir teklif için lütfen doğrudan TerraSu Living ile iletişime geçin.",
    ],
    pricingPrimary: "Kişisel Danışmanlık Talep Edin",
    pricingSecondary: "İletişime Geçin",
  },
};
