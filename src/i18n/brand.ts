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
  meaning: { term: string; text: string }[];
  meaningNote: string;
  storyTitle: string;
  story: string[];
  supportedServices: string[];
  closingStatement: string;
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
    ctaPrimary: "Request My Personalised Plan",
    ctaSecondary: "Explore Services",

    meetEyebrow: "The founder",
    meetTitle: "Meet Gözde Katipoğlu",
    meetLead: "Founder of TerraSu Living, based in Porto",
    meetStory: [
      "My professional life began in Türkiye and was shaped by more than fifteen years of academic and professional experience. With master's and doctoral degrees in mathematics education, my career was built around discipline, analytical thinking, education and working closely with people.",
      "In 2023, I chose to change the direction of my life and moved to Porto. I experienced first-hand that starting again in a new country is about far more than documents and official procedures. From finding a home and establishing an everyday rhythm to reaching the right people and finding your way through an unfamiliar system, every small detail carries real weight.",
      "Discipline is how I work. Honesty is a value I do not compromise on. I say clearly what can be done, and I am equally clear about what cannot. I believe good guidance begins with trust.",
      "But life, to me, is not made only of plans and lists. I value curiosity, enjoyment and making room for new possibilities. The world keeps moving, and sometimes we need to step beyond what we know and try a different possibility.",
      "Today, I follow every TerraSu Living service personally. From the first conversation and understanding what is needed to planning, communication and coordination, my clients work with me directly. I choose to keep TerraSu Living small, personal and boutique for exactly this reason.",
    ],
    meaning: [
      {
        term: "Terra",
        text: "Earth and land in Portuguese. Roots, foundations and the place where a new life begins.",
      },
      { term: "Su", text: "Water in Turkish. Life, movement, adaptability and new beginnings." },
    ],
    meaningNote: "Toprak and Su. Two names, two cultures and, for me, one story.",
    storyTitle: "The Story Behind TerraSu Living",
    story: [
      "TerraSu Living was not born simply from the idea of creating a consultancy. Its meaning is much more personal to me.",
      "Toprak and Su are the names of my two children.",
      "Terra expresses earth, land and the ground on which we build a life in Portuguese. Su carries its meaning in Turkish: life, movement, adaptability and new beginnings.",
      "The names of my children brought together, in one name, the two sides of my story: a life that began in Türkiye and became a new life in Portugal. TerraSu is therefore more than a brand name to me. It holds roots, change and the personal meaning of building a life somewhere new.",
      "That is the thought from which I created TerraSu Living.",
      "There are no ready-made formulas here, identical packages for everyone or processes treated as boxes to tick. Every person has a different reason, budget, family, expectation and way of living. That is why I approach every plan individually.",
      "I see relocation and visa guidance, NIF, NISS, health and banking, home research and rental, turnkey settlement, everyday support, business setup and private boutique experiences as parts of one considered life plan.",
      "The purpose is not simply to complete a list of tasks. It is to understand the life you want to build in Portugal and make its practical side as clear, organised and dependable as possible.",
      "TerraSu Living is boutique for this reason. It is personal for this reason. Every process begins, for me, with a person before it becomes a file.",
    ],
    supportedServices: [
      "Relocation & Visa Guidance",
      "NIF · NISS · Health · Banking",
      "Home Search · Rental · Settlement",
      "Business Setup & Practical Support",
      "Everyday Life",
      "Private Boutique Experiences",
    ],
    closingStatement:
      "Arriving in Portugal may be a process. Creating a life here that truly feels like yours is something far more personal.",

    whyEyebrow: "Why TerraSu Living",
    whyTitle: "A boutique consultancy, not a processing desk",
    whyLead:
      "You work with one person who knows your file, answers directly and stays with you well beyond the first appointment.",
    why: [
      {
        title: "Personal experience",
        text: "The same paperwork, queues and decisions, lived first hand in Portugal.",
      },
      {
        title: "Real relocation knowledge",
        text: "Practical detail that only comes from completing the process, not summarising it.",
      },
      {
        title: "Boutique consultancy",
        text: "A limited number of clients at a time so every file receives genuine attention.",
      },
      {
        title: "Transparent communication",
        text: "Clear scope, honest timelines and no promises about decisions we do not control.",
      },
      {
        title: "No generic packages",
        text: "Nothing is sold from a fixed menu. Your plan is written for your situation.",
      },
      {
        title: "Tailor-made solutions",
        text: "Family size, budget, work, schools and pace all shape the route we take.",
      },
      {
        title: "One dedicated contact",
        text: "You are never passed between departments or case handlers.",
      },
      {
        title: "Long-term support",
        text: "Support continues after arrival, through settlement and everyday life.",
      },
      {
        title: "Local expertise",
        text: "Based in Porto, working with trusted professionals across Portugal.",
      },
      {
        title: "Premium service",
        text: "Considered, discreet and organised from the first message to the last detail.",
      },
    ],

    pricingEyebrow: "Pricing",
    pricingTitle: "Every client has unique needs",
    pricingText: [
      "Every client has unique needs.",
      "For personalised service options and a customised quotation, please contact TerraSu Living directly.",
    ],
    pricingPrimary: "Request My Personalised Plan",
    pricingSecondary: "Contact Us",
  },

  tr: {
    heroTitle: "Portekiz'e Kişisel Yolculuğunuz Burada Başlıyor",
    heroSub:
      "Portekiz genelinde kişiye özel yerleşim danışmanlığı, vize planlaması, idari destek, emlak hizmetleri, iş kurulum rehberliği ve butik seyahat deneyimleri.",
    ctaPrimary: "Kişisel Planımı Talep Edin",
    ctaSecondary: "Hizmetleri Keşfedin",

    meetEyebrow: "Kurucu",
    meetTitle: "Gözde Katipoğlu ile Tanışın",
    meetLead: "TerraSu Living kurucusu, Porto merkezli",
    meetStory: [
      "Türkiye’de başlayan profesyonel hayatım, on beş yılı aşkın akademik ve iş deneyimiyle şekillendi. Matematik eğitimi alanında yüksek lisans ve doktora derecelerimi tamamladım; yıllar boyunca eğitim, analiz, disiplin ve insan ilişkilerinin merkezinde olduğum bir kariyer yürüttüm.",
      "2023 yılında hayatımın yönünü değiştirerek Porto’ya taşındım. Yeni bir ülkede sıfırdan hayat kurmanın yalnızca evraklardan ve resmi işlemlerden ibaret olmadığını bizzat deneyimledim. Bir ev bulmaktan günlük düzeni kurmaya, doğru insanlara ulaşmaktan hiç bilmediğiniz bir sistemin içinde yolunuzu bulmaya kadar her küçük detayın aslında büyük bir anlam taşıdığını gördüm.",
      "Disiplin benim için bir çalışma biçimi, dürüstlük ise vazgeçmediğim temel bir değer. Yapılabilecek olanı açıkça söylerim; yapılamayacak olanı da aynı açıklıkla ifade ederim. Çünkü iyi bir danışmanlığın önce güvenle başladığına inanıyorum.",
      "Ama hayat benim için yalnızca planlardan ve yapılacaklar listelerinden oluşmuyor. Hayattan keyif almayı, merak etmeyi ve yeni olasılıklara alan açmayı önemsiyorum. Dünya dönmeye devam ediyorsa, insanın da zaman zaman bildiği yerden çıkıp yeni bir ihtimali denemesi gerektiğine inanıyorum.",
      "Bugün TerraSu Living’de sunduğum hizmetlerin her birini doğrudan kendim takip ediyorum. İlk görüşmeden ihtiyaçların belirlenmesine, planlamadan iletişime ve sürecin koordinasyonuna kadar müşterilerim benimle birebir çalışıyor. TerraSu Living’i özellikle bu nedenle küçük, kişisel ve butik tutmayı seçiyorum.",
    ],
    meaning: [
      {
        term: "Terra",
        text: "Portekizcede toprak ve yeryüzü. Kökler, sağlam bir temel ve yeni bir hayatın kurulduğu yer.",
      },
      { term: "Su", text: "Türkçede yaşam ve hareket. Değişim, uyum ve yeni başlangıçlar." },
    ],
    meaningNote: "Toprak ve Su. İki isim, iki kültür ve benim için tek bir hikâye.",
    storyTitle: "TerraSu Living’in Hikâyesi",
    story: [
      "TerraSu Living, yalnızca bir danışmanlık markası yaratma fikriyle doğmadı. Benim için taşıdığı anlam çok daha kişisel.",
      "İki çocuğumun isimleri Toprak ve Su.",
      "‘Terra’, Portekizcede toprağı, yeri ve üzerinde hayat kurduğumuz zemini ifade ediyor. ‘Su’ ise Türkçedeki anlamını olduğu gibi taşıyor: yaşamı, hareketi, uyumu ve yeni başlangıçları.",
      "Çocuklarımın isimlerinden gelen Toprak ve Su; Türkiye’den başlayan ve Portekiz’de yeni bir hayata dönüşen hikâyemin iki tarafını aynı isimde buluşturdu. Böylece TerraSu benim için yalnızca bir marka adı değil; kökleri, değişimi ve yeni bir yerde hayat kurmayı temsil eden kişisel bir anlam kazandı.",
      "TerraSu Living’i de tam olarak bu düşünceyle kurdum.",
      "Burada hazır kalıplar, herkese sunulan aynı paketler ya da yalnızca tamamlanması gereken işlemler yok. Her insanın nedeni, bütçesi, ailesi, beklentisi ve yaşam biçimi farklı. Bu nedenle her planı kişiye özel ele alıyorum.",
      "Portekiz’e taşınma ve yerleşim danışmanlığından NIF, NISS, sağlık ve bankacılık süreçlerine; ev araştırması ve kiralamadan anahtar teslim yerleşime, günlük yaşam desteğinden iş kurulumu ve özel butik deneyimlere kadar süreçleri tek bir yaşam planının parçaları olarak görüyorum.",
      "Amaç yalnızca yapılacak işleri tamamlamak değil. Portekiz’de kurmak istediğiniz hayatı anlamak ve o hayatın pratik tarafını mümkün olduğunca açık, düzenli ve güvenilir hale getirmek.",
      "TerraSu Living bu yüzden butik. Bu yüzden kişisel. Ve bu yüzden her süreç benim için bir dosyadan önce bir insanla başlıyor.",
    ],
    supportedServices: [
      "Yerleşim & Vize Süreci",
      "NIF · NISS · Sağlık · Bankacılık",
      "Ev Bulma · Kiralama · Yerleşim",
      "İş Kurulumu & Pratik Destek",
      "Günlük Yaşam",
      "Özel Butik Deneyimler",
    ],
    closingStatement:
      "Portekiz’e gelmek bir işlem olabilir. Burada kendinize ait bir hayat kurmak ise çok daha kişisel bir yolculuk.",

    whyEyebrow: "Neden TerraSu Living",
    whyTitle: "İşlem masası değil, butik bir danışmanlık",
    whyLead:
      "Dosyanızı bilen, doğrudan yanıt veren ve ilk randevudan çok sonra da yanınızda kalan tek bir kişiyle çalışırsınız.",
    why: [
      {
        title: "Kişisel deneyim",
        text: "Aynı evraklar, aynı sıralar ve aynı kararlar; Portekiz'de bizzat yaşandı.",
      },
      {
        title: "Gerçek yerleşim bilgisi",
        text: "Süreci özetlemekten değil, bizzat tamamlamaktan gelen pratik detaylar.",
      },
      {
        title: "Butik danışmanlık",
        text: "Aynı anda sınırlı sayıda müşteri; böylece her dosyaya gerçek ilgi.",
      },
      {
        title: "Şeffaf iletişim",
        text: "Net kapsam, dürüst zaman planı ve kontrolümüzde olmayan konularda söz vermemek.",
      },
      {
        title: "Hazır paket yok",
        text: "Sabit bir menüden satış yapılmaz. Planınız sizin durumunuza göre yazılır.",
      },
      {
        title: "Kişiye özel çözümler",
        text: "Aile büyüklüğü, bütçe, iş, okullar ve tempo izlenecek yolu birlikte belirler.",
      },
      {
        title: "Tek muhatap",
        text: "Departmanlar veya dosya sorumluları arasında dolaştırılmazsınız.",
      },
      {
        title: "Uzun vadeli destek",
        text: "Destek gelişten sonra da, yerleşme ve günlük yaşam boyunca sürer.",
      },
      {
        title: "Yerel uzmanlık",
        text: "Porto merkezli; Portekiz genelinde güvenilir profesyonellerle çalışma.",
      },
      {
        title: "Premium hizmet",
        text: "İlk mesajdan son detaya kadar özenli, ölçülü ve düzenli bir süreç.",
      },
    ],

    pricingEyebrow: "Fiyatlandırma",
    pricingTitle: "Her müşterinin ihtiyacı farklıdır",
    pricingText: [
      "Her müşterinin ihtiyacı farklıdır.",
      "Kişiye özel hizmet seçenekleri ve size özel bir teklif için lütfen doğrudan TerraSu Living ile iletişime geçin.",
    ],
    pricingPrimary: "Kişisel Planımı Talep Edin",
    pricingSecondary: "İletişime Geçin",
  },
};
