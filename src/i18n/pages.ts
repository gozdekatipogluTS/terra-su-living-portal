import type { Lang } from "./content";
import type { PageDoc, PageKey } from "./site";

const AIMA = { label: "AIMA", url: "https://aima.gov.pt/" };
const FINANCAS = { label: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt/" };
const SEG = { label: "Segurança Social", url: "https://www.seg-social.pt/" };
const SNS = { label: "SNS", url: "https://www.sns.gov.pt/" };
const CMD = { label: "Chave Móvel Digital", url: "https://www.autenticacao.gov.pt/cmd-pedido-chave" };
const VISTOS = { label: "Vistos, Portal Diplomático", url: "https://vistos.mne.gov.pt/" };

const CTA_EN = "Request My Personalised Plan";
const CTA_TR = "Kişisel Planımı Talep Edin";

export const pages: Record<PageKey, Record<Lang, PageDoc>> = {
  /* ------------------------------------------------------------- */
  relocation: {
    en: {
      metaTitle: "Relocation Support in Portugal | TerraSu Living",
      metaDescription:
        "Relocation planning, visa route orientation, document preparation and arrival support across Portugal, coordinated personally by Gözde K.",
      eyebrow: "Relocation",
      title: "Relocation Planning and Support in Portugal",
      lead: "One written plan that connects your visa route, documents, housing, arrival and first weeks in Portugal.",
      intro: [
        "Most people arrive in Portugal with a list of separate tasks and no clear order. A consulate wants one set of documents, a landlord wants another, and several steps only become possible after the previous one is complete.",
        "TerraSu Living starts by reviewing your profile, timing and destination, then sets out the sequence in writing so you always know what comes next and who is responsible for it.",
      ],
      sections: [
        {
          id: "planning",
          title: "Relocation planning",
          text: "The planning stage produces a document you can work from, not a general information sheet.",
          items: [
            "Profile review covering household, income type, work situation and timing",
            "Route comparison based on officially published requirements",
            "Personalised document checklist by applicant",
            "Realistic sequence for consulate, housing and administrative steps",
            "Regional options according to budget, work and family needs",
            "Identification of the stages that require a lawyer or accountant",
          ],
        },
        {
          id: "arrival",
          title: "Arrival and settlement",
          text: "The weeks after landing decide how quickly ordinary life begins.",
          items: [
            "Airport or private transfer coordination",
            "Key collection and property handover",
            "Cleaning and preparation of the home before arrival",
            "NIF, NISS and health registration preparation",
            "Bank account appointment preparation",
            "Utility, internet and mobile service guidance",
            "Local orientation in the chosen neighbourhood",
          ],
        },
        {
          title: "Who this suits",
          items: [
            "Non-EU citizens preparing a residence application",
            "EU citizens relocating within Europe",
            "Families moving with children",
            "Retirees and people living from qualifying personal income",
            "Remote workers and independent professionals",
            "Entrepreneurs and investors reviewing options in Portugal",
          ],
        },
      ],
      notices: [
        "TerraSu Living prepares, researches and coordinates. Decisions by consulates, AIMA, banks and landlords are made by those bodies alone.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Yerleşim Desteği | TerraSu Living",
      metaDescription:
        "Portekiz genelinde yerleşim planlaması, vize seçenekleri yönlendirmesi, evrak hazırlığı ve varış desteği; Gözde K. tarafından bizzat koordine edilir.",
      eyebrow: "Yerleşim",
      title: "Portekiz'de Yerleşim Planlaması ve Destek",
      lead: "Vize seçeneğinizi, evraklarınızı, konutunuzu, varışınızı ve ilk haftalarınızı birbirine bağlayan tek bir yazılı plan.",
      intro: [
        "Çoğu kişi Portekiz'e birbirinden kopuk bir görev listesiyle gelir. Konsolosluk bir evrak seti ister, ev sahibi başka bir set ister ve bazı adımlar ancak bir öncekisi tamamlandığında mümkün olur.",
        "TerraSu Living önce profilinizi, zaman planınızı ve hedef bölgenizi değerlendirir; ardından sıralamayı yazılı olarak belirler. Böylece hangi adımın sırada olduğunu ve kimin sorumlu olduğunu her zaman bilirsiniz.",
      ],
      sections: [
        {
          id: "planning",
          title: "Yerleşim planlaması",
          text: "Planlama aşaması, genel bir bilgi notu değil, üzerinde çalışabileceğiniz bir belge üretir.",
          items: [
            "Hane yapısı, gelir türü, çalışma durumu ve zamanlamayı kapsayan profil değerlendirmesi",
            "Resmî olarak yayımlanmış koşullara göre seçeneklerin karşılaştırılması",
            "Başvuran kişi bazında kişisel evrak listesi",
            "Konsolosluk, konut ve idari adımlar için gerçekçi sıralama",
            "Bütçe, iş ve aile ihtiyaçlarına göre bölge seçenekleri",
            "Avukat veya muhasebeci gerektiren aşamaların belirlenmesi",
          ],
        },
        {
          id: "arrival",
          title: "Varış ve yerleşme",
          text: "Gelişten sonraki haftalar, günlük hayatın ne kadar hızlı başlayacağını belirler.",
          items: [
            "Havalimanı veya özel transfer koordinasyonu",
            "Anahtar teslim alma ve ev teslimi",
            "Gelişten önce evin temizliği ve hazırlanması",
            "NIF, NISS ve sağlık kaydı hazırlığı",
            "Banka hesabı randevusu hazırlığı",
            "Abonelik, internet ve mobil hat yönlendirmesi",
            "Seçilen mahallede yerel oryantasyon",
          ],
        },
        {
          title: "Kimler için uygun",
          items: [
            "Oturum başvurusu hazırlayan AB dışı vatandaşlar",
            "Avrupa içinde taşınan AB vatandaşları",
            "Çocuklarıyla taşınan aileler",
            "Emekliler ve kişisel gelirle yaşayanlar",
            "Uzaktan çalışanlar ve bağımsız profesyoneller",
            "Portekiz'deki seçenekleri değerlendiren girişimciler ve yatırımcılar",
          ],
        },
      ],
      notices: [
        "TerraSu Living hazırlık, araştırma ve koordinasyon yapar. Konsoloslukların, AIMA'nın, bankaların ve ev sahiplerinin kararları yalnızca o kurumlara aittir.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  visas: {
    en: {
      metaTitle: "Portugal Visa and Residence Routes | TerraSu Living",
      metaDescription:
        "Practical orientation for the D2, D7, D8 and D9 visas, Golden Visa investment residence and family related routes, with document preparation and referrals.",
      eyebrow: "Visa information",
      title: "Visa and Residence Routes",
      lead: "General information on the officially published routes, and the practical preparation TerraSu Living can carry out for each of them.",
      intro: [
        "Portugal publishes its residence routes through the consular network and AIMA. Requirements, income references and document lists are set by those authorities and can be revised during the year.",
        "The sections below describe each route in general terms. Figures are not published here because they change and because consular jurisdiction affects what a specific consulate asks for. Current values are confirmed from the official source when your plan is prepared.",
      ],
      sections: [
        {
          id: "d2",
          title: "D2, entrepreneurs and independent professionals",
          items: [
            "May suit business owners, freelancers and independent service providers",
            "General purpose is an independent professional or business activity in Portugal",
            "Common document categories include identity, criminal record, accommodation, health insurance, business or service documentation and financial means",
            "Preparation covers concept documentation, activity registration questions and appointment scheduling",
            "Company formation, tax structure and contracts require an independent lawyer or accountant",
          ],
        },
        {
          id: "d7",
          title: "D7, retirees and qualifying personal income",
          items: [
            "May suit retirees and people living from pensions, rental income or other recognised passive income",
            "General purpose is residence based on stable personal income",
            "Common document categories include proof of income, bank statements, accommodation, health insurance and criminal record",
            "Preparation covers income evidence organisation, accommodation documentation and checklist review",
            "Tax residence questions require an independent accountant",
          ],
        },
        {
          id: "d8",
          title: "D8, remote workers and digital nomads",
          items: [
            "May suit employees of foreign companies and independent professionals with foreign clients",
            "General purpose is remote professional activity carried out from Portugal",
            "Common document categories include employment or service contracts, income evidence, accommodation, health insurance and criminal record",
            "Preparation covers contract and income document organisation and housing arrangements",
            "Employment law and cross border tax matters require qualified professionals",
          ],
        },
        {
          id: "d9",
          title: "D9, residence for investment activity",
          items: [
            "The visa category used for qualifying investment activity, commonly known together with the Golden Visa framework",
            "Eligible activity categories are defined by law and have been revised in recent years",
            "Common document categories include identity, criminal record, proof of the investment activity and tax registration",
            "Preparation covers document organisation, scheduling and coordination with the professionals handling the file",
            "The investment structure and application submission are handled by licensed lawyers",
          ],
        },
        {
          id: "golden",
          title: "Golden Visa, Autorização de Residência para Atividade de Investimento, ARI",
          items: [
            "May suit applicants pursuing a qualifying investment activity as defined by the current legal framework",
            "Eligible activity categories are set by law and have been revised in recent years",
            "Common document categories include identity, criminal record, proof of the investment activity and tax registration",
            "Preparation covers document organisation, scheduling and coordination with the professionals handling the file",
            "The investment structure, legal review and application submission are handled by licensed lawyers",
          ],
        },
        {
          title: "Family related routes",
          items: [
            "Family reunification and accompanying family member routes apply where officially provided for",
            "Requirements depend on the status of the main applicant and on the family relationship",
            "Civil documents usually require legalisation or apostille and certified translation",
            "Preparation covers document collection, translation coordination and appointment planning",
          ],
        },
        {
          title: "How support is provided",
          items: [
            "Route orientation based on your profile and the current official requirements",
            "Personalised document checklist and organisation of the file",
            "Translation, legalisation and certification coordination",
            "Appointment scheduling support and communication follow up",
            "Referral to independent lawyers and accountants for regulated matters",
            "Accommodation, arrival and settlement planning alongside the application",
          ],
        },
      ],
      notices: [
        "Income and investment figures are not reproduced on this page. Current values are confirmed from the official source at the time your plan is prepared, and requirements can change.",
        "Consular jurisdiction affects the document list. The consulate responsible for your place of residence may request additional items.",
        "TerraSu Living does not promise visa approval, residence approval, appointment availability, processing times or any authority decision.",
      ],
      source: VISTOS,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz Vize ve Oturum Seçenekleri | TerraSu Living",
      metaDescription:
        "D2, D7, D8 ve D9 vizeleri, Golden Visa yatırım oturumu ve aile birleşimi seçenekleri için pratik yönlendirme, evrak hazırlığı ve profesyonel yönlendirme.",
      eyebrow: "Vize bilgileri",
      title: "Vize ve Oturum Seçenekleri",
      lead: "Resmî olarak yayımlanan seçenekler hakkında genel bilgi ve TerraSu Living'in her biri için yapabileceği pratik hazırlık.",
      intro: [
        "Portekiz oturum seçeneklerini konsolosluk ağı ve AIMA aracılığıyla yayımlar. Koşullar, gelir referansları ve evrak listeleri bu kurumlar tarafından belirlenir ve yıl içinde güncellenebilir.",
        "Aşağıdaki bölümler her seçeneği genel hatlarıyla açıklar. Tutarlar burada yayımlanmaz; çünkü değişebilir ve hangi konsolosluğun yetkili olduğu istenen evrakları etkiler. Güncel değerler, planınız hazırlanırken resmî kaynaktan teyit edilir.",
      ],
      sections: [
        {
          id: "d2",
          title: "D2, girişimciler ve bağımsız profesyoneller",
          items: [
            "İşletme sahipleri, serbest çalışanlar ve bağımsız hizmet sağlayıcılar için uygun olabilir",
            "Genel amaç, Portekiz'de bağımsız bir mesleki veya ticari faaliyettir",
            "Yaygın evrak kategorileri: kimlik, adli sicil, konaklama, sağlık sigortası, iş veya hizmet belgeleri ve mali kaynak",
            "Hazırlık; konsept belgeleri, faaliyet kaydı soruları ve randevu planlamasını kapsar",
            "Şirket kuruluşu, vergi yapısı ve sözleşmeler bağımsız bir avukat veya muhasebeci gerektirir",
          ],
        },
        {
          id: "d7",
          title: "D7, emekliler ve kişisel gelir sahipleri",
          items: [
            "Emekliler ve emeklilik, kira geliri veya tanınan diğer pasif gelirle yaşayanlar için uygun olabilir",
            "Genel amaç, istikrarlı kişisel gelire dayalı oturumdur",
            "Yaygın evrak kategorileri: gelir belgesi, banka hesap özetleri, konaklama, sağlık sigortası ve adli sicil",
            "Hazırlık; gelir belgelerinin düzenlenmesi, konaklama belgeleri ve liste kontrolünü kapsar",
            "Vergi mükellefiyeti konuları bağımsız bir muhasebeci gerektirir",
          ],
        },
        {
          id: "d8",
          title: "D8, uzaktan çalışanlar ve dijital göçebeler",
          items: [
            "Yurt dışı şirket çalışanları ve yabancı müşterileri olan bağımsız profesyoneller için uygun olabilir",
            "Genel amaç, Portekiz'den yürütülen uzaktan mesleki faaliyettir",
            "Yaygın evrak kategorileri: iş veya hizmet sözleşmeleri, gelir belgeleri, konaklama, sağlık sigortası ve adli sicil",
            "Hazırlık; sözleşme ve gelir belgelerinin düzenlenmesi ile konut planlamasını kapsar",
            "İş hukuku ve sınır ötesi vergi konuları yetkili profesyoneller gerektirir",
          ],
        },
        {
          id: "d9",
          title: "D9, yatırım faaliyeti için oturum",
          items: [
            "Nitelikli yatırım faaliyeti için kullanılan vize kategorisidir; genellikle Golden Visa çerçevesiyle birlikte anılır",
            "Uygun faaliyet kategorileri kanunla belirlenir ve son yıllarda güncellenmiştir",
            "Genel evrak başlıkları kimlik, adli sicil, yatırım faaliyetinin belgelenmesi ve vergi kaydını içerir",
            "Hazırlık; evrak düzeni, randevu planlaması ve dosyayı yürüten profesyonellerle koordinasyonu kapsar",
            "Yatırım yapısı ve başvurunun sunulması lisanslı avukatlar tarafından yürütülür",
          ],
        },
        {
          id: "golden",
          title: "Golden Visa, Autorização de Residência para Atividade de Investimento, ARI",
          items: [
            "Yürürlükteki mevzuata göre nitelikli yatırım faaliyeti yürütecek başvuranlar için uygun olabilir",
            "Uygun faaliyet kategorileri kanunla belirlenir ve son yıllarda değişmiştir",
            "Yaygın evrak kategorileri: kimlik, adli sicil, yatırım faaliyetinin belgelenmesi ve vergi kaydı",
            "Hazırlık; evrak düzeni, planlama ve dosyayı yürüten profesyonellerle koordinasyonu kapsar",
            "Yatırım yapısı, hukuki inceleme ve başvurunun sunulması lisanslı avukatlar tarafından yürütülür",
          ],
        },
        {
          title: "Aile ile ilgili seçenekler",
          items: [
            "Aile birleşimi ve aile bireyi seçenekleri, resmen öngörüldüğü hâllerde uygulanır",
            "Koşullar, ana başvuranın statüsüne ve aile bağına göre değişir",
            "Nüfus belgeleri genellikle apostil veya tasdik ile yeminli tercüme gerektirir",
            "Hazırlık; belge toplama, tercüme koordinasyonu ve randevu planlamasını kapsar",
          ],
        },
        {
          title: "Destek nasıl sağlanır",
          items: [
            "Profilinize ve güncel resmî koşullara göre seçenek yönlendirmesi",
            "Kişisel evrak listesi ve dosyanın düzenlenmesi",
            "Tercüme, apostil ve tasdik koordinasyonu",
            "Randevu planlaması desteği ve iletişim takibi",
            "Yetki gerektiren konularda bağımsız avukat ve muhasebecilere yönlendirme",
            "Başvuruyla birlikte konaklama, varış ve yerleşme planlaması",
          ],
        },
      ],
      notices: [
        "Gelir ve yatırım tutarları bu sayfada yayımlanmaz. Güncel değerler, planınız hazırlanırken resmî kaynaktan teyit edilir ve koşullar değişebilir.",
        "Yetkili konsolosluk, evrak listesini etkiler. İkamet yerinizden sorumlu konsolosluk ek belge isteyebilir.",
        "TerraSu Living vize onayı, oturum onayı, randevu bulunabilirliği, işlem süresi veya herhangi bir kurum kararı vaat etmez.",
      ],
      source: VISTOS,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  completeSetup: {
    en: {
      metaTitle: "Complete Portugal Setup Support | TerraSu Living",
      metaDescription:
        "One personalised plan covering visa preparation, documents, housing, arrival, transfer, home setup and daily life in Portugal.",
      eyebrow: "End-to-end support",
      title: "Complete Portugal Setup Support",
      lead: "A single plan for the whole move, from the first consultation to the first months of ordinary life.",
      intro: [
        "Moving to Portugal involves several connected processes. Visa preparation, documentation, housing, arrival, transport and home setup should not be treated as unrelated tasks.",
        "TerraSu Living creates one personalised support plan based on the client's profile, location, timing and needs.",
      ],
      sections: [
        {
          title: "Possible service stages",
          items: [
            "Initial Consultation",
            "Visa and Route Preparation",
            "Personalised Document Checklist",
            "NIF and Administrative Preparation",
            "Portuguese Bank Account Preparation",
            "Home Search and Rental File",
            "Viewing and Communication Coordination",
            "Contract and Payment Process Coordination",
            "Airport or Private Transfer Arrangement",
            "Key Collection and Property Handover",
            "Professional Cleaning and Property Preparation",
            "Utility and Everyday Setup Guidance",
            "NISS and Health Registration Support",
            "Local Orientation",
            "Ongoing Settlement Assistance",
          ],
        },
        {
          title: "How the plan is built",
          items: [
            "A first conversation to understand the household, timing and destination",
            "A written scope listing the stages included and the stages handled by others",
            "A schedule that respects the order in which each step becomes possible",
            "One point of contact throughout, with Gözde K. following the file personally",
          ],
          note: "Support may be selected as individual services or combined in a comprehensive relocation package.",
        },
      ],
      notices: [
        "Regulated legal, accounting and brokerage work within the plan is carried out by appropriately licensed independent professionals.",
      ],
      cta: "Request a Complete Portugal Setup Plan",
    },
    tr: {
      metaTitle: "Portekiz'de Baştan Sona Kurulum Desteği | TerraSu Living",
      metaDescription:
        "Vize hazırlığı, evraklar, konut, varış, transfer, ev kurulumu ve günlük yaşamı kapsayan tek bir kişisel plan.",
      eyebrow: "Baştan sona destek",
      title: "Portekiz'de Baştan Sona Kurulum Desteği",
      lead: "İlk görüşmeden günlük hayatın ilk aylarına kadar tüm taşınma süreci için tek bir plan.",
      intro: [
        "Portekiz'e taşınmak birbirine bağlı birçok süreç içerir. Vize hazırlığı, evraklar, konut, ulaşım ve ev kurulumu birbirinden bağımsız işlemler olarak değerlendirilmemelidir.",
        "TerraSu Living; müşterinin profiline, konumuna, zaman planına ve ihtiyaçlarına göre tek bir kişisel destek planı oluşturur.",
      ],
      sections: [
        {
          title: "Olası hizmet aşamaları",
          items: [
            "İlk Görüşme",
            "Vize ve Seçenek Hazırlığı",
            "Kişisel Evrak Listesi",
            "NIF ve İdari Hazırlık",
            "Portekiz Banka Hesabı Hazırlığı",
            "Ev Arama ve Kiralama Dosyası",
            "Görüntüleme ve İletişim Koordinasyonu",
            "Sözleşme ve Ödeme Süreci Koordinasyonu",
            "Havalimanı veya Özel Transfer Düzenlemesi",
            "Anahtar Teslim Alma ve Ev Teslimi",
            "Profesyonel Temizlik ve Ev Hazırlığı",
            "Abonelik ve Günlük Kurulum Rehberliği",
            "NISS ve Sağlık Kaydı Desteği",
            "Yerel Oryantasyon",
            "Sürekli Yerleşme Desteği",
          ],
        },
        {
          title: "Plan nasıl oluşturulur",
          items: [
            "Hane yapısını, zaman planını ve hedef bölgeyi anlamak için ilk görüşme",
            "Dahil olan aşamaları ve başkaları tarafından yürütülecek aşamaları listeleyen yazılı kapsam",
            "Her adımın hangi sırayla mümkün olduğunu gözeten bir takvim",
            "Süreç boyunca tek iletişim noktası; dosyayı Gözde K. bizzat takip eder",
          ],
          note: "Hizmetler ayrı ayrı seçilebilir veya kapsamlı bir yerleşim paketi içinde birleştirilebilir.",
        },
      ],
      notices: [
        "Plan içindeki hukuki, muhasebe ve emlak aracılığı işleri, ilgili lisansa sahip bağımsız profesyoneller tarafından yürütülür.",
      ],
      cta: "Kapsamlı Portekiz Kurulum Planı Talep Edin",
    },
  },

  /* ------------------------------------------------------------- */
  administrative: {
    en: {
      metaTitle: "Administrative Services in Portugal | TerraSu Living",
      metaDescription:
        "Support with NIF, NISS, Número Nacional de Utente, Portuguese bank accounts, Chave Móvel Digital and activity registration.",
      eyebrow: "Administrative services",
      title: "Administrative Registration and Support",
      lead: "The registrations that make ordinary life possible, prepared in the right order and followed until they are complete.",
      intro: [
        "Almost everything in Portugal, from a rental contract to a mobile subscription, depends on a small set of registrations. Each has its own office, document list and sequence.",
        "TerraSu Living checks what applies to your situation, prepares the documents, guides the application and follows the outcome.",
      ],
      sections: [
        {
          title: "Registrations covered",
          items: [
            "Número de Identificação Fiscal, NIF",
            "Número de Identificação da Segurança Social, NISS",
            "Número Nacional de Utente do Serviço Nacional de Saúde",
            "Portuguese bank account preparation",
            "Chave Móvel Digital, CMD",
            "Abertura de atividade nas Finanças",
          ],
        },
        {
          id: "aima",
          title: "AIMA and document preparation support",
          text: "Residence files are prepared before they are submitted, so appointments are not lost to a missing certificate.",
          items: [
            "Review of the document list that applies to your route",
            "Collection plan for civil, criminal record and financial documents",
            "Apostille, legalisation and certified translation coordination",
            "AIMA appointment scheduling and rescheduling support",
            "Preparation of the file in the order the appointment requires",
            "Accompaniment to appointments where useful and available",
            "Follow-up on notifications, requests for further documents and next steps",
          ],
          note: "AIMA decisions, appointment availability and eligibility remain with the authority. Legal representation is provided by independent licensed lawyers.",
        },
        {
          id: "activity",
          title: "Activity registration",
          text: "General preparation for people who will work independently in Portugal.",
          items: [
            "Abertura de atividade nas Finanças, general preparation",
            "Trabalhador independente status and what it involves in practice",
            "Recibos verdes and how invoicing is issued",
            "Código de Atividade Económica, CAE, selection questions to raise with an accountant",
            "Código do IRS, CIRS, and Segurança Social obligations to review with a professional",
          ],
          note: "Registration choices with tax consequences are confirmed with an independent accountant before submission.",
        },
        {
          id: "other",
          title: "Other administrative support",
          items: [
            "Portal das Finanças and Segurança Social Direta orientation",
            "Address and contact data updates",
            "Appointment scheduling and rescheduling support",
            "Translation and certification coordination",
            "Correspondence review and next-step guidance",
            "Accompaniment to appointments where useful and available",
          ],
        },
      ],
      notices: [
        "Issuance, approval and eligibility decisions remain with the responsible Portuguese authority.",
      ],
      source: FINANCAS,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de İdari Hizmetler | TerraSu Living",
      metaDescription:
        "NIF, NISS, Número Nacional de Utente, Portekiz banka hesabı, Chave Móvel Digital ve faaliyet kaydı desteği.",
      eyebrow: "İdari hizmetler",
      title: "İdari Kayıtlar ve Destek",
      lead: "Günlük hayatı mümkün kılan kayıtlar, doğru sırayla hazırlanır ve tamamlanana kadar takip edilir.",
      intro: [
        "Portekiz'de kira sözleşmesinden mobil hatta kadar hemen her şey birkaç temel kayda bağlıdır. Her birinin kendi kurumu, evrak listesi ve sıralaması vardır.",
        "TerraSu Living durumunuza hangi kayıtların uygun olduğunu belirler, evrakları hazırlar, başvuruya rehberlik eder ve sonucu takip eder.",
      ],
      sections: [
        {
          title: "Kapsanan kayıtlar",
          items: [
            "Número de Identificação Fiscal, NIF",
            "Número de Identificação da Segurança Social, NISS",
            "Número Nacional de Utente do Serviço Nacional de Saúde",
            "Portekiz banka hesabı hazırlığı",
            "Chave Móvel Digital, CMD",
            "Abertura de atividade nas Finanças",
          ],
        },
        {
          id: "aima",
          title: "AIMA ve evrak hazırlığı desteği",
          text: "Oturum dosyaları sunulmadan önce hazırlanır; böylece eksik bir belge yüzünden randevu kaybedilmez.",
          items: [
            "Seçtiğiniz yola uygun evrak listesinin gözden geçirilmesi",
            "Nüfus, adli sicil ve mali belgeler için toplama planı",
            "Apostil, tasdik ve yeminli tercüme koordinasyonu",
            "AIMA randevusu alma ve değiştirme desteği",
            "Dosyanın randevunun gerektirdiği düzende hazırlanması",
            "Uygun ve mümkün olduğunda randevulara eşlik",
            "Bildirimlerin, ek belge taleplerinin ve sonraki adımların takibi",
          ],
          note: "AIMA kararları, randevu uygunluğu ve yeterlilik değerlendirmesi kuruma aittir. Hukuki temsil bağımsız lisanslı avukatlar tarafından sağlanır.",
        },
        {
          id: "activity",
          title: "Faaliyet kaydı",
          text: "Portekiz'de bağımsız çalışacak kişiler için genel hazırlık.",
          items: [
            "Abertura de atividade nas Finanças, genel hazırlık",
            "Trabalhador independente statüsü ve pratikte ne anlama geldiği",
            "Recibos verdes ve faturalandırmanın nasıl yapıldığı",
            "Código de Atividade Económica, CAE, seçiminde muhasebeciye sorulacak konular",
            "Código do IRS, CIRS ve Segurança Social yükümlülüklerinin profesyonelle değerlendirilmesi",
          ],
          note: "Vergisel sonuç doğuran kayıt tercihleri, başvuru öncesinde bağımsız bir muhasebeciyle teyit edilir.",
        },
        {
          id: "other",
          title: "Diğer idari destek",
          items: [
            "Portal das Finanças ve Segurança Social Direta yönlendirmesi",
            "Adres ve iletişim bilgisi güncellemeleri",
            "Randevu alma ve değiştirme desteği",
            "Tercüme ve tasdik koordinasyonu",
            "Gelen yazışmaların değerlendirilmesi ve sonraki adım rehberliği",
            "Uygun ve mümkün olduğunda randevulara eşlik",
          ],
        },
      ],
      notices: ["Verilme, onay ve uygunluk kararları ilgili Portekiz kurumuna aittir."],
      source: FINANCAS,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  nif: {
    en: {
      metaTitle: "NIF, Número de Identificação Fiscal | TerraSu Living",
      metaDescription:
        "Support with the Portuguese tax identification number: eligibility check, document preparation, application guidance and follow up.",
      eyebrow: "Administrative services",
      title: "NIF, Número de Identificação Fiscal",
      lead: "The Portuguese tax identification number, and the practical preparation behind obtaining it.",
      intro: [
        "The NIF is the tax identification number issued by the Autoridade Tributária e Aduaneira. It identifies a person in the Portuguese tax system and is requested in most formal transactions.",
        "Whether a fiscal representative is required depends on your residence status. That question is reviewed before any application is prepared.",
      ],
      sections: [
        {
          title: "Where the NIF is used",
          items: [
            "Contracts of most kinds",
            "Employment",
            "Bank accounts",
            "Rental agreements",
            "Property purchase",
            "Utilities",
            "Tax matters",
            "Business activity",
          ],
        },
        {
          title: "Support scope",
          items: [
            "Eligibility and needs check",
            "Document checklist",
            "Document organisation",
            "Appointment or application guidance",
            "Communication support",
            "Status follow-up",
            "Next-step guidance",
          ],
        },
      ],
      notices: [
        "Issuance and approval remain with the Portuguese Tax and Customs Authority, the Autoridade Tributária e Aduaneira.",
      ],
      source: FINANCAS,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "NIF, Número de Identificação Fiscal | TerraSu Living",
      metaDescription:
        "Portekiz vergi kimlik numarası için destek: uygunluk kontrolü, evrak hazırlığı, başvuru rehberliği ve takip.",
      eyebrow: "İdari hizmetler",
      title: "NIF, Número de Identificação Fiscal",
      lead: "Portekiz vergi kimlik numarası ve edinme sürecinin pratik hazırlığı.",
      intro: [
        "NIF, Autoridade Tributária e Aduaneira tarafından verilen vergi kimlik numarasıdır. Kişiyi Portekiz vergi sisteminde tanımlar ve resmî işlemlerin çoğunda istenir.",
        "Mali temsilci gerekip gerekmediği ikamet durumunuza bağlıdır. Bu konu, herhangi bir başvuru hazırlanmadan önce değerlendirilir.",
      ],
      sections: [
        {
          title: "NIF nerelerde kullanılır",
          items: [
            "Sözleşmelerin çoğunda",
            "İstihdamda",
            "Banka hesaplarında",
            "Kira sözleşmelerinde",
            "Gayrimenkul alımında",
            "Aboneliklerde",
            "Vergi işlemlerinde",
            "Ticari faaliyette",
          ],
        },
        {
          title: "Destek kapsamı",
          items: [
            "Uygunluk ve ihtiyaç kontrolü",
            "Evrak listesi",
            "Evrakların düzenlenmesi",
            "Randevu veya başvuru rehberliği",
            "İletişim desteği",
            "Durum takibi",
            "Sonraki adım rehberliği",
          ],
        },
      ],
      notices: [
        "Numaranın verilmesi ve onay, Portekiz Vergi ve Gümrük İdaresi Autoridade Tributária e Aduaneira'ya aittir.",
      ],
      source: FINANCAS,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  niss: {
    en: {
      metaTitle: "NISS, Número de Identificação da Segurança Social | TerraSu Living",
      metaDescription:
        "Support with the Portuguese social security identification number: document preparation, application guidance and follow up.",
      eyebrow: "Administrative services",
      title: "NISS, Número de Identificação da Segurança Social",
      lead: "The social security identification number used to access rights and fulfil obligations within the Portuguese Social Security system.",
      intro: [
        "The NISS identifies a person within Segurança Social. It is generally required for employment, independent activity and contributions, and for certain benefits and family related processes.",
        "Not every visitor or resident automatically qualifies. Your situation is reviewed against the current published rules before an application is prepared.",
      ],
      sections: [
        {
          title: "Support scope",
          items: [
            "Document preparation",
            "Application guidance",
            "Online process guidance",
            "Follow-up support",
            "Segurança Social Direta orientation",
            "Next-step guidance",
          ],
        },
        {
          title: "Commonly requested documents",
          items: [
            "Identification document or passport",
            "Residence document or proof of legal status where applicable",
            "NIF",
            "Proof of address in Portugal",
            "Employment or activity documentation where applicable",
          ],
          note: "The exact list depends on your status and on the office handling the request.",
        },
      ],
      notices: [
        "Eligibility and registration decisions are made by Segurança Social.",
      ],
      source: SEG,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "NISS, Número de Identificação da Segurança Social | TerraSu Living",
      metaDescription:
        "Portekiz sosyal güvenlik kimlik numarası için destek: evrak hazırlığı, başvuru rehberliği ve takip.",
      eyebrow: "İdari hizmetler",
      title: "NISS, Número de Identificação da Segurança Social",
      lead: "Portekiz Sosyal Güvenlik sistemi içinde haklara erişmek ve yükümlülükleri yerine getirmek için kullanılan kimlik numarası.",
      intro: [
        "NISS, kişiyi Segurança Social sisteminde tanımlar. Genellikle istihdam, bağımsız faaliyet ve primler ile bazı yardımlar ve aile ile ilgili süreçler için gereklidir.",
        "Her ziyaretçi veya sakin otomatik olarak hak sahibi olmaz. Durumunuz, başvuru hazırlanmadan önce güncel kurallara göre değerlendirilir.",
      ],
      sections: [
        {
          title: "Destek kapsamı",
          items: [
            "Evrak hazırlığı",
            "Başvuru rehberliği",
            "Çevrim içi süreç rehberliği",
            "Takip desteği",
            "Segurança Social Direta yönlendirmesi",
            "Sonraki adım rehberliği",
          ],
        },
        {
          title: "Sık istenen belgeler",
          items: [
            "Kimlik belgesi veya pasaport",
            "Uygun hâllerde oturum belgesi veya yasal statü kanıtı",
            "NIF",
            "Portekiz'de adres belgesi",
            "Uygun hâllerde istihdam veya faaliyet belgeleri",
          ],
          note: "Kesin liste, statünüze ve talebi işleyen kuruma göre değişir.",
        },
      ],
      notices: ["Uygunluk ve kayıt kararları Segurança Social tarafından verilir."],
      source: SEG,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  health: {
    en: {
      metaTitle: "Número de Utente do SNS, Health Registration | TerraSu Living",
      metaDescription:
        "Support with health registration in Portugal: eligibility guidance, documents, health centre registration and SNS 24 orientation.",
      eyebrow: "Administrative services",
      title: "Número Nacional de Utente do Serviço Nacional de Saúde",
      lead: "Health registration within Portugal's Serviço Nacional de Saúde, referred to in short as the Número de Utente do SNS.",
      intro: [
        "The Número de Utente is the health user number used within the Serviço Nacional de Saúde. It is requested at health centres, in hospitals and for most public health services.",
        "Registration is normally made at the health centre responsible for your address. Eligibility depends on your residence status.",
      ],
      sections: [
        {
          title: "Support scope",
          items: [
            "Eligibility guidance",
            "Document preparation",
            "Health-centre registration guidance",
            "Número de Utente process support",
            "SNS 24 orientation",
            "Local health-service information",
          ],
        },
        {
          title: "Commonly requested documents",
          items: [
            "Identification document or passport",
            "Residence document or proof of legal status where applicable",
            "NIF",
            "Proof of address in the area of the health centre",
          ],
        },
      ],
      notices: [
        "Assignment of a family doctor is not guaranteed and depends on capacity at the health centre.",
        "Eligibility and registration decisions are made by the Serviço Nacional de Saúde.",
      ],
      source: SNS,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Número de Utente do SNS, Sağlık Kaydı | TerraSu Living",
      metaDescription:
        "Portekiz'de sağlık kaydı desteği: uygunluk rehberliği, belgeler, sağlık merkezi kaydı ve SNS 24 yönlendirmesi.",
      eyebrow: "İdari hizmetler",
      title: "Número Nacional de Utente do Serviço Nacional de Saúde",
      lead: "Portekiz Serviço Nacional de Saúde içinde sağlık kaydı; kısa adıyla Número de Utente do SNS.",
      intro: [
        "Número de Utente, Serviço Nacional de Saúde içinde kullanılan sağlık kullanıcı numarasıdır. Sağlık merkezlerinde, hastanelerde ve kamu sağlık hizmetlerinin çoğunda istenir.",
        "Kayıt genellikle adresinizden sorumlu sağlık merkezinde yapılır. Uygunluk, ikamet statünüze bağlıdır.",
      ],
      sections: [
        {
          title: "Destek kapsamı",
          items: [
            "Uygunluk rehberliği",
            "Evrak hazırlığı",
            "Sağlık merkezi kayıt rehberliği",
            "Número de Utente süreç desteği",
            "SNS 24 yönlendirmesi",
            "Yerel sağlık hizmetleri bilgisi",
          ],
        },
        {
          title: "Sık istenen belgeler",
          items: [
            "Kimlik belgesi veya pasaport",
            "Uygun hâllerde oturum belgesi veya yasal statü kanıtı",
            "NIF",
            "Sağlık merkezinin bölgesinde adres belgesi",
          ],
        },
      ],
      notices: [
        "Aile hekimi atanması garanti edilmez; sağlık merkezinin kapasitesine bağlıdır.",
        "Uygunluk ve kayıt kararları Serviço Nacional de Saúde tarafından verilir.",
      ],
      source: SNS,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  cmd: {
    en: {
      metaTitle: "Chave Móvel Digital, CMD Setup Support | TerraSu Living",
      metaDescription:
        "Practical setup guidance for the Chave Móvel Digital, the Portuguese digital authentication method used for public and private online services.",
      eyebrow: "Administrative services",
      title: "Chave Móvel Digital, CMD",
      lead: "A digital authentication method used to access participating public and private digital services in Portugal.",
      intro: [
        "The Chave Móvel Digital links your identity to a mobile number and a personal code, allowing you to sign in to participating online services and to sign documents digitally.",
        "Activation methods differ depending on your documents and status, and some routes require attendance at a counter.",
      ],
      sections: [
        {
          title: "Support scope",
          items: [
            "Check of whether CMD is available for your documents and status",
            "Explanation of the activation options",
            "Preparation of the details required during activation",
            "Guidance through the online steps",
            "Orientation for using CMD with Portal das Finanças and Segurança Social Direta",
            "Help when a code, phone number or device needs to be changed",
          ],
        },
      ],
      notices: [
        "Activation is performed by the responsible public service. TerraSu Living provides preparation and guidance only, and never holds your personal access codes.",
      ],
      source: CMD,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Chave Móvel Digital, CMD Kurulum Desteği | TerraSu Living",
      metaDescription:
        "Portekiz'de kamu ve özel çevrim içi hizmetlerde kullanılan Chave Móvel Digital için pratik kurulum rehberliği.",
      eyebrow: "İdari hizmetler",
      title: "Chave Móvel Digital, CMD",
      lead: "Portekiz'de katılımcı kamu ve özel dijital hizmetlere erişmek için kullanılan dijital kimlik doğrulama yöntemi.",
      intro: [
        "Chave Móvel Digital, kimliğinizi bir cep telefonu numarası ve kişisel bir kodla ilişkilendirir; böylece katılımcı çevrim içi hizmetlere giriş yapabilir ve belgeleri dijital olarak imzalayabilirsiniz.",
        "Aktivasyon yöntemleri belgelerinize ve statünüze göre değişir; bazı yollar bir kuruma şahsen başvuruyu gerektirir.",
      ],
      sections: [
        {
          title: "Destek kapsamı",
          items: [
            "CMD'nin belgeleriniz ve statünüz için uygun olup olmadığının kontrolü",
            "Aktivasyon seçeneklerinin açıklanması",
            "Aktivasyon sırasında gereken bilgilerin hazırlanması",
            "Çevrim içi adımlarda rehberlik",
            "CMD'nin Portal das Finanças ve Segurança Social Direta ile kullanımı",
            "Kod, telefon numarası veya cihaz değişikliğinde destek",
          ],
        },
      ],
      notices: [
        "Aktivasyon ilgili kamu hizmeti tarafından yapılır. TerraSu Living yalnızca hazırlık ve rehberlik sunar, kişisel erişim kodlarınızı asla saklamaz.",
      ],
      source: CMD,
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  bank: {
    en: {
      metaTitle: "Portuguese Bank Account Preparation | TerraSu Living",
      metaDescription:
        "Preparation and coordination for opening a Portuguese bank account: documents, bank selection guidance, appointment preparation and follow up.",
      eyebrow: "Administrative services",
      title: "Portuguese Bank Account Preparation and Support",
      lead: "Documents in order, the right bank for your situation and a prepared appointment.",
      intro: [
        "Banks in Portugal apply their own compliance rules. Two branches of the same bank can ask for slightly different evidence, and an incomplete file is the most common reason for delay.",
        "Preparation focuses on presenting a complete, consistent file and on choosing a bank that fits how you will actually use the account.",
      ],
      sections: [
        {
          title: "What is prepared",
          items: [
            "NIF check",
            "Identification documents",
            "Proof of address",
            "Income documents",
            "Employment or service documents",
            "Bank selection guidance based on client needs",
            "Appointment preparation",
            "Branch communication",
            "Process coordination",
            "Follow-up guidance",
          ],
        },
      ],
      notices: [
        "Account approval and compliance decisions remain entirely with the bank.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz Banka Hesabı Hazırlığı | TerraSu Living",
      metaDescription:
        "Portekiz'de banka hesabı açmak için hazırlık ve koordinasyon: belgeler, banka seçimi rehberliği, randevu hazırlığı ve takip.",
      eyebrow: "İdari hizmetler",
      title: "Portekiz Banka Hesabı Hazırlığı ve Desteği",
      lead: "Düzenlenmiş belgeler, durumunuza uygun banka ve hazırlanmış bir randevu.",
      intro: [
        "Portekiz'deki bankalar kendi uyum kurallarını uygular. Aynı bankanın iki şubesi farklı belgeler isteyebilir ve gecikmelerin en yaygın nedeni eksik dosyadır.",
        "Hazırlık; eksiksiz ve tutarlı bir dosya sunmaya ve hesabı gerçekte nasıl kullanacağınıza uygun bir banka seçmeye odaklanır.",
      ],
      sections: [
        {
          title: "Neler hazırlanır",
          items: [
            "NIF kontrolü",
            "Kimlik belgeleri",
            "Adres belgesi",
            "Gelir belgeleri",
            "İstihdam veya hizmet belgeleri",
            "İhtiyaca göre banka seçimi rehberliği",
            "Randevu hazırlığı",
            "Şube ile iletişim",
            "Süreç koordinasyonu",
            "Takip ve sonraki adım rehberliği",
          ],
        },
      ],
      notices: ["Hesap onayı ve uyum kararları tamamen bankaya aittir."],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  property: {
    en: {
      metaTitle: "Rental and Property Support Across Portugal | TerraSu Living",
      metaDescription:
        "Property search and relocation assistance across Portugal: area research, listing review, viewing coordination, rental files and purchase coordination.",
      eyebrow: "Property",
      title: "Rental and Property Support Across Portugal",
      lead: "Particularly experienced in Porto and Northern Portugal, with support available across Portugal depending on the project.",
      intro: [
        "Finding a home from abroad is mostly a problem of information and timing. Listings move quickly, some are already gone, and landlords rarely wait for a file to be completed.",
        "TerraSu Living researches the areas, reviews the listings, speaks to landlords and licensed agencies, and prepares your file so that you can decide quickly when the right property appears.",
      ],
      sections: [
        {
          id: "area",
          title: "Area research",
          items: [
            "Neighbourhood comparison by budget, commute, schools and daily needs",
            "Practical notes on transport, parking, noise and services",
            "Comparison between city, coastal and inland options",
            "Guidance on realistic price ranges in the chosen areas",
          ],
        },
        {
          id: "viewings",
          title: "Viewing coordination",
          items: [
            "Scheduling of viewings around your travel dates",
            "Attendance at viewings where agreed, with photographs and notes",
            "Video walkthroughs when you cannot attend",
            "Questions raised with the landlord or agency on your behalf",
          ],
        },
        {
          id: "movein",
          title: "Move-in support",
          items: [
            "Contract stage coordination with a qualified professional",
            "Deposit and payment condition clarification",
            "Key handover and property condition photographs",
            "Cleaning and preparation before the first night",
            "Electricity, water, gas and internet setup guidance",
            "Furniture, appliance and household equipment recommendations",
            "Move-in scheduling and delivery coordination",
            "Household essentials for the first week",
          ],
        },
      ],
      notices: [
        "TerraSu Living does not provide regulated real-estate brokerage or legal services. These services are carried out by appropriately licensed independent professionals.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz Genelinde Kiralama ve Gayrimenkul Desteği | TerraSu Living",
      metaDescription:
        "Portekiz genelinde ev arama ve yerleşim desteği: bölge araştırması, ilan değerlendirmesi, görüntüleme koordinasyonu, kiralama dosyası ve satın alma koordinasyonu.",
      eyebrow: "Emlak",
      title: "Portekiz Genelinde Kiralama ve Gayrimenkul Desteği",
      lead: "Porto ve Kuzey Portekiz konusunda güçlü yerel deneyim; projeye göre Portekiz genelinde destek.",
      intro: [
        "Yurt dışından ev bulmak büyük ölçüde bilgi ve zamanlama meselesidir. İlanlar hızla değişir, bazıları çoktan gitmiştir ve ev sahipleri dosyanın tamamlanmasını beklemez.",
        "TerraSu Living bölgeleri araştırır, ilanları değerlendirir, ev sahipleri ve lisanslı acentelerle görüşür ve dosyanızı hazırlar; böylece doğru ev çıktığında hızla karar verebilirsiniz.",
      ],
      sections: [
        {
          id: "area",
          title: "Bölge araştırması",
          items: [
            "Bütçe, ulaşım, okullar ve günlük ihtiyaçlara göre mahalle karşılaştırması",
            "Ulaşım, otopark, gürültü ve hizmetler hakkında pratik notlar",
            "Şehir, kıyı ve iç bölge seçeneklerinin karşılaştırılması",
            "Seçilen bölgelerde gerçekçi fiyat aralıkları hakkında rehberlik",
          ],
        },
        {
          id: "viewings",
          title: "Görüntüleme koordinasyonu",
          items: [
            "Seyahat tarihlerinize göre görüntüleme planlaması",
            "Anlaşıldığında görüntülemelere katılım, fotoğraf ve notlar",
            "Katılamadığınızda video ile gezinti",
            "Ev sahibi veya acenteye sizin adınıza sorular iletilmesi",
          ],
        },
        {
          id: "movein",
          title: "Taşınma desteği",
          items: [
            "Yetkili bir profesyonelle sözleşme aşaması koordinasyonu",
            "Depozito ve ödeme koşullarının netleştirilmesi",
            "Anahtar teslimi ve evin durum fotoğrafları",
            "İlk geceden önce temizlik ve hazırlık",
            "Abonelik ve internet kurulumu rehberliği",
          ],
        },
      ],
      notices: [
        "TerraSu Living, düzenlemeye tabi emlak aracılığı veya hukuki hizmet sunmaz. Bu hizmetler ilgili lisansa sahip bağımsız profesyoneller tarafından yürütülür.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  rental: {
    en: {
      metaTitle: "Rental Support in Portugal | TerraSu Living",
      metaDescription:
        "Rental search support in Portugal: needs assessment, listing research, landlord communication, viewings, rental file preparation and move-in.",
      eyebrow: "Property",
      title: "Rental Support",
      lead: "From the first shortlist to the keys, with a complete rental file behind every application.",
      intro: [
        "In competitive areas the tenant with the clearest file usually wins the property, not the one who offers most. Income evidence, references and identification are prepared before viewings begin.",
      ],
      sections: [
        {
          title: "What is included",
          items: [
            "Needs assessment",
            "Budget planning",
            "Location research",
            "Listing research",
            "Listing evaluation",
            "Landlord communication",
            "Licensed agency communication",
            "Viewing coordination",
            "Rental file preparation",
            "Income-document organisation",
            "Deposit and payment-condition clarification",
            "Contract coordination with a qualified professional",
            "Key handover",
            "Move-in coordination",
            "Utility setup guidance",
          ],
        },
        {
          title: "How the search is personalised",
          text: "Nothing is shortlisted before we understand how you actually want to live. Budget, family size, commute, school run and the pace of the neighbourhood all narrow the map before the first listing is opened.",
          items: [
            "Budget and realistic monthly running costs",
            "Lifestyle, routine and preferred pace of the area",
            "Family size and space requirements",
            "Location preferences and shortlisted districts",
            "Work location and commuting time",
            "Schools, nurseries and catchment considerations",
            "Transport links, parking and walkability",
            "Long-term rental",
            "Short-term rental",
            "Luxury rental",
          ],
        },
        {
          title: "After the contract is signed",
          text: "The search does not end at the signature. The first fortnight in a new home is usually where the practical questions appear.",
          items: [
            "Electricity, water and gas activation",
            "Internet and mobile provider comparison",
            "Furniture and appliance recommendations",
            "Move-in preparation and delivery scheduling",
            "Household essentials for the first week",
            "Neighbourhood guidance and local orientation",
            "School and nursery recommendations",
            "Lifestyle recommendations, from markets to clinics",
          ],
        },
      ],
      notices: [
        "TerraSu Living does not provide regulated real-estate brokerage or legal services. These services are carried out by appropriately licensed independent professionals.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Kiralama Desteği | TerraSu Living",
      metaDescription:
        "Portekiz'de kiralık ev desteği: ihtiyaç analizi, ilan araştırması, ev sahibi iletişimi, görüntülemeler, dosya hazırlığı ve taşınma.",
      eyebrow: "Emlak",
      title: "Kiralama Desteği",
      lead: "İlk liste hazırlığından anahtar teslimine kadar, her başvurunun arkasında eksiksiz bir kiralama dosyası.",
      intro: [
        "Rekabetin yüksek olduğu bölgelerde evi genellikle en yüksek teklifi veren değil, dosyası en net olan kiracı alır. Gelir belgeleri, referanslar ve kimlik evrakları görüntülemeler başlamadan hazırlanır.",
      ],
      sections: [
        {
          title: "Kapsam",
          items: [
            "İhtiyaç analizi",
            "Bütçe planlaması",
            "Lokasyon araştırması",
            "İlan araştırması",
            "İlan değerlendirmesi",
            "Ev sahibi ile iletişim",
            "Lisanslı acente ile iletişim",
            "Görüntüleme koordinasyonu",
            "Kiralama dosyası hazırlığı",
            "Gelir belgelerinin düzenlenmesi",
            "Depozito ve ödeme koşullarının netleştirilmesi",
            "Yetkili profesyonelle sözleşme koordinasyonu",
            "Anahtar teslimi",
            "Taşınma koordinasyonu",
            "Abonelik kurulumu rehberliği",
          ],
        },
        {
          title: "Arama nasıl kişiselleştirilir",
          text: "Nasıl yaşamak istediğinizi anlamadan hiçbir ilan listeye alınmaz. Bütçe, aile büyüklüğü, işe ulaşım, okul yolu ve mahallenin temposu daha ilk ilan açılmadan haritayı daraltır.",
          items: [
            "Bütçe ve gerçekçi aylık yaşam giderleri",
            "Yaşam tarzı, günlük rutin ve tercih edilen bölge temposu",
            "Aile büyüklüğü ve alan ihtiyacı",
            "Lokasyon tercihleri ve öne çıkan semtler",
            "İş yeri konumu ve ulaşım süresi",
            "Okullar, kreşler ve bölge değerlendirmesi",
            "Toplu taşıma, otopark ve yürünebilirlik",
            "Uzun dönem kiralama",
            "Kısa dönem kiralama",
            "Lüks kiralama",
          ],
        },
        {
          title: "Sözleşme imzalandıktan sonra",
          text: "Süreç imzayla bitmez. Yeni evdeki ilk iki hafta, pratik soruların ortaya çıktığı dönemdir.",
          items: [
            "Elektrik, su ve doğalgaz aboneliği",
            "İnternet ve mobil operatör karşılaştırması",
            "Mobilya ve beyaz eşya önerileri",
            "Taşınma hazırlığı ve teslimat planlaması",
            "İlk hafta için temel ev ihtiyaçları",
            "Mahalle rehberliği ve yerel oryantasyon",
            "Okul ve kreş önerileri",
            "Pazarlardan kliniklere yaşam önerileri",
          ],
        },
      ],
      notices: [
        "TerraSu Living, düzenlemeye tabi emlak aracılığı veya hukuki hizmet sunmaz. Bu hizmetler ilgili lisansa sahip bağımsız profesyoneller tarafından yürütülür.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  purchase: {
    en: {
      metaTitle: "Property Purchase Support in Portugal | TerraSu Living",
      metaDescription:
        "Property search and relocation assistance for buyers in Portugal: market research, viewings, coordination with licensed professionals and handover.",
      eyebrow: "Property",
      title: "Property Purchase Support",
      lead: "Property search and relocation assistance for buyers, alongside the licensed professionals who handle the transaction.",
      intro: [
        "Buying property in Portugal involves an estate agency, a lawyer, often a mortgage professional and a technical inspection. Each works on a different timetable.",
        "TerraSu Living keeps the process moving between them, organises what you need to provide and makes sure nothing waits on an email that was never answered.",
      ],
      sections: [
        {
          title: "What is included",
          items: [
            "Buyer profile assessment",
            "Location and market research",
            "Listing review",
            "Area comparison",
            "Viewing coordination",
            "Communication with licensed estate agencies",
            "Coordination with an independent lawyer",
            "Mortgage-professional referral",
            "Technical inspection referral",
            "Document organisation",
            "Transaction-stage coordination",
            "Property handover",
            "Cleaning and move-in preparation",
          ],
        },
        {
          title: "Search shaped by your goals",
          text: "A holiday base, a family home and a yield-focused investment lead to three different shortlists. The brief is agreed before any viewing is arranged.",
          items: [
            "Investment goals and intended use of the property",
            "Personal and family requirements",
            "Area comparisons across districts and price bands",
            "Renovation potential and realistic condition assessment",
            "Rental-demand context where relevant",
            "Long-term suitability and resale considerations",
          ],
        },
        {
          title: "Settling into the property",
          text: "Once the deed is signed the practical work begins, and it is coordinated with the same continuity as the search.",
          items: [
            "Settlement planning and timeline",
            "Furniture and interior recommendations",
            "Trusted local professionals for works and maintenance",
            "Utility transfer and activation",
            "Move-in planning and delivery coordination",
            "Neighbourhood and everyday-life orientation",
          ],
        },
      ],
      notices: [
        "TerraSu Living is not an estate agency. It does not provide regulated real-estate brokerage or legal services, which are carried out by appropriately licensed independent professionals.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Gayrimenkul Satın Alma Desteği | TerraSu Living",
      metaDescription:
        "Portekiz'de alıcılar için ev arama ve yerleşim desteği: piyasa araştırması, görüntülemeler, lisanslı profesyonellerle koordinasyon ve teslim.",
      eyebrow: "Emlak",
      title: "Gayrimenkul Satın Alma Desteği",
      lead: "İşlemi yürüten lisanslı profesyonellerin yanında, alıcılar için ev arama ve yerleşim desteği.",
      intro: [
        "Portekiz'de gayrimenkul almak; emlak acentesi, avukat, çoğu zaman bir kredi uzmanı ve teknik inceleme içerir. Her biri farklı bir takvimle çalışır.",
        "TerraSu Living süreci bu taraflar arasında ilerletir, sizden istenenleri düzenler ve hiçbir adımın yanıtsız kalan bir e-postada beklememesini sağlar.",
      ],
      sections: [
        {
          title: "Kapsam",
          items: [
            "Alıcı profili değerlendirmesi",
            "Lokasyon ve piyasa araştırması",
            "İlan değerlendirmesi",
            "Bölge karşılaştırması",
            "Görüntüleme koordinasyonu",
            "Lisanslı emlak acenteleriyle iletişim",
            "Bağımsız avukatla koordinasyon",
            "Kredi uzmanına yönlendirme",
            "Teknik inceleme yönlendirmesi",
            "Evrak düzeni",
            "İşlem aşaması koordinasyonu",
            "Gayrimenkul teslimi",
            "Temizlik ve taşınma hazırlığı",
          ],
        },
        {
          title: "Hedeflerinize göre şekillenen arama",
          text: "Tatil evi, aile evi ve getiri odaklı yatırım birbirinden tamamen farklı listeler doğurur. Brief, hiçbir görüntüleme ayarlanmadan önce netleştirilir.",
          items: [
            "Yatırım hedefleri ve gayrimenkulün kullanım amacı",
            "Kişisel ve ailevi ihtiyaçlar",
            "Semtler ve fiyat aralıkları arasında bölge karşılaştırması",
            "Tadilat potansiyeli ve gerçekçi durum değerlendirmesi",
            "İlgili durumlarda kiralama talebi analizi",
            "Uzun vadeli uygunluk ve yeniden satış değerlendirmesi",
          ],
        },
        {
          title: "Eve yerleşme",
          text: "Tapu imzalandıktan sonra pratik iş başlar ve bu süreç aramayla aynı süreklilikte koordine edilir.",
          items: [
            "Yerleşim planı ve zaman çizelgesi",
            "Mobilya ve iç mekân önerileri",
            "Tadilat ve bakım için güvenilir yerel profesyoneller",
            "Abonelik devri ve aktivasyonu",
            "Taşınma planlaması ve teslimat koordinasyonu",
            "Mahalle ve günlük yaşam oryantasyonu",
          ],
        },
      ],
      notices: [
        "TerraSu Living bir emlak acentesi değildir. Düzenlemeye tabi emlak aracılığı veya hukuki hizmet sunmaz; bu hizmetler ilgili lisansa sahip bağımsız profesyoneller tarafından yürütülür.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  homeSetup: {
    en: {
      metaTitle: "Home Setup and Key Handover in Portugal | TerraSu Living",
      metaDescription:
        "Property preparation before or after arrival: key collection, cleaning, utility activation guidance, condition photographs and handover coordination.",
      eyebrow: "Home setup",
      title: "Home Setup and Key Handover",
      lead: "Practical preparation of the property before or after you arrive, so the first day is calm.",
      intro: [
        "A property is rarely ready on the day it is handed over. Keys must be collected, the place cleaned, services activated and deliveries received, often before anyone has landed in the country.",
        "This service covers that gap, with photographs and written confirmation at each stage.",
      ],
      sections: [
        {
          id: "handover",
          title: "Access and key handover",
          items: [
            "Property access coordination",
            "Key collection coordination",
            "Move-in inspection support",
            "Property condition photographs",
            "Handover appointment coordination",
          ],
        },
        {
          id: "preparation",
          title: "Property preparation",
          items: [
            "Cleaning before arrival",
            "Deep cleaning",
            "Basic property preparation",
            "Furniture-delivery coordination",
            "Essential first-day preparation",
          ],
        },
        {
          id: "utilities",
          title: "Utility coordination",
          items: [
            "Utility activation guidance",
            "Internet and service-provider coordination",
            "Meter readings recorded at handover",
            "Guidance on contracts, billing and payment methods",
          ],
        },
        {
          id: "guest",
          title: "Guest arrival preparation",
          items: [
            "Preparation before guests or owners arrive",
            "Linen and consumables organised on request",
            "Arrival checks and confirmation photographs",
            "Coordination with cleaning and maintenance providers",
          ],
        },
      ],
      notices: [
        "This service does not include regulated property management. Such activity would require separate authorisation and is not offered unless expressly stated.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Ev Kurulumu ve Anahtar Teslimi | TerraSu Living",
      metaDescription:
        "Gelişten önce veya sonra evin hazırlanması: anahtar teslim alma, temizlik, abonelik rehberliği, durum fotoğrafları ve teslim koordinasyonu.",
      eyebrow: "Ev kurulumu",
      title: "Ev Kurulumu ve Anahtar Teslim Desteği",
      lead: "Siz gelmeden önce veya geldikten sonra evin pratik hazırlığı; böylece ilk gün sakin geçer.",
      intro: [
        "Bir ev, teslim edildiği gün nadiren hazırdır. Anahtarların alınması, temizlik, aboneliklerin açılması ve teslimatların kabulü gerekir; çoğu zaman siz ülkeye varmadan önce.",
        "Bu hizmet o boşluğu kapatır; her aşamada fotoğraf ve yazılı teyit sunulur.",
      ],
      sections: [
        {
          id: "handover",
          title: "Erişim ve anahtar teslimi",
          items: [
            "Eve erişim koordinasyonu",
            "Anahtar teslim alma koordinasyonu",
            "Taşınma öncesi kontrol desteği",
            "Evin durum fotoğrafları",
            "Teslim randevusu koordinasyonu",
          ],
        },
        {
          id: "preparation",
          title: "Ev hazırlığı",
          items: [
            "Gelişten önce temizlik",
            "Derin temizlik",
            "Temel ev hazırlığı",
            "Mobilya teslimat koordinasyonu",
            "İlk gün için temel hazırlık",
          ],
        },
        {
          id: "utilities",
          title: "Abonelik koordinasyonu",
          items: [
            "Abonelik açılışı rehberliği",
            "İnternet ve hizmet sağlayıcı koordinasyonu",
            "Teslimde sayaç değerlerinin kaydı",
            "Sözleşme, faturalandırma ve ödeme yöntemleri hakkında bilgi",
          ],
        },
        {
          id: "guest",
          title: "Misafir karşılama hazırlığı",
          items: [
            "Misafirler veya ev sahibi gelmeden önce hazırlık",
            "Talebe göre nevresim ve sarf malzemelerinin düzenlenmesi",
            "Varış kontrolleri ve teyit fotoğrafları",
            "Temizlik ve bakım sağlayıcılarıyla koordinasyon",
          ],
        },
      ],
      notices: [
        "Bu hizmet, düzenlemeye tabi mülk yönetimini kapsamaz. Böyle bir faaliyet ayrı yetki gerektirir ve açıkça belirtilmedikçe sunulmaz.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  cleaning: {
    en: {
      metaTitle: "Professional Cleaning Services in Portugal | TerraSu Living",
      metaDescription:
        "Residential, office, short stay, move-in, move-out, deep and post-renovation cleaning, coordinated around your dates.",
      eyebrow: "Home setup",
      title: "Professional Cleaning",
      lead: "Cleaning planned around handover dates, guest arrivals and moving days.",
      intro: [
        "Cleaning is rarely just cleaning. It has to happen before a handover, between two guests or after a renovation, and usually on a fixed date that cannot move.",
        "Each plan is agreed in advance with a defined scope, so you know exactly what will be done and when.",
      ],
      sections: [
        {
          title: "Categories",
          items: [
            "Residential Cleaning",
            "Office Cleaning",
            "Small Business Cleaning",
            "Alojamento Local Cleaning",
            "Short-Stay Property Cleaning",
            "Move-In Cleaning",
            "Move-Out Cleaning",
            "Deep Cleaning",
            "Post-Renovation Cleaning",
            "Property Preparation",
            "Guest Arrival Preparation",
            "Custom Cleaning Plans",
          ],
        },
        {
          title: "How it works",
          items: [
            "Property details and date confirmed in advance",
            "Written scope agreed before the visit",
            "Photographs after completion when the client is abroad",
            "Repeat schedules for short stay and office properties",
          ],
        },
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Profesyonel Temizlik Hizmetleri | TerraSu Living",
      metaDescription:
        "Konut, ofis, kısa dönem, taşınma öncesi ve sonrası, derin ve tadilat sonrası temizlik; tarihlerinize göre koordine edilir.",
      eyebrow: "Ev kurulumu",
      title: "Profesyonel Temizlik",
      lead: "Teslim tarihlerine, misafir girişlerine ve taşınma günlerine göre planlanan temizlik.",
      intro: [
        "Temizlik nadiren sadece temizliktir. Bir teslimden önce, iki misafir arasında veya tadilat sonrasında ve genellikle değişmeyen sabit bir tarihte yapılması gerekir.",
        "Her plan, kapsamı önceden belirlenerek kararlaştırılır; böylece neyin ne zaman yapılacağını tam olarak bilirsiniz.",
      ],
      sections: [
        {
          title: "Kategoriler",
          items: [
            "Konut Temizliği",
            "Ofis Temizliği",
            "Küçük İşletme Temizliği",
            "Alojamento Local Temizliği",
            "Kısa Dönem Kiralama Temizliği",
            "Taşınma Öncesi Temizlik",
            "Çıkış Temizliği",
            "Derin Temizlik",
            "Tadilat Sonrası Temizlik",
            "Ev Hazırlığı",
            "Misafir Karşılama Hazırlığı",
            "Özel Temizlik Planları",
          ],
        },
        {
          title: "Nasıl işler",
          items: [
            "Ev bilgileri ve tarih önceden teyit edilir",
            "Ziyaret öncesinde yazılı kapsam belirlenir",
            "Müşteri yurt dışındaysa tamamlanma sonrası fotoğraflar paylaşılır",
            "Kısa dönem ve ofis mülkleri için tekrarlayan program",
          ],
        },
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  business: {
    en: {
      metaTitle: "Business Setup and Opportunity Research in Portugal | TerraSu Living",
      metaDescription:
        "Practical research, concept development and local setup coordination for people considering a business or independent activity in Portugal.",
      eyebrow: "Business",
      title: "Business Opportunities in Portugal",
      lead: "Practical research, concept development and local setup coordination for people considering a business or independent activity in Portugal.",
      intro: [
        "Every business concept is personally reviewed with Gözde K. The purpose is not to sell a ready-made idea, but to understand the client's experience, resources and expectations before researching realistic options.",
        "Support is available whether you have a clear plan, several competing ideas or no defined idea yet.",
      ],
      sections: [
        {
          title: "Who this suits",
          items: [
            "Clients with a clear business idea",
            "Clients comparing several ideas",
            "Clients without a defined idea",
            "Independent professionals and freelancers",
            "Small service businesses and cleaning businesses",
            "Tourism related and food or boutique product concepts",
            "E-commerce concepts and international entrepreneurs",
          ],
        },
        {
          id: "idea",
          title: "Business idea review and concept development",
          items: [
            "Evaluation of your goals, experience, resources and preferred working model",
            "Turning an early idea into a clearer service concept, audience, offer and operating model",
            "Honest review of what the concept requires in time, capital and language",
          ],
        },
        {
          id: "market",
          title: "Opportunity and market research",
          items: [
            "Practical research into local needs, competition, demand indicators and service gaps",
            "Comparison of comparable activities already operating in the area",
            "Seasonality and demand patterns where relevant",
          ],
        },
        {
          id: "location",
          title: "Location research",
          items: [
            "Identifying suitable Portuguese regions, neighbourhoods or commercial areas according to the activity",
            "Practical notes on footfall, access, parking and neighbouring businesses",
            "Coordination with commercial property professionals",
          ],
        },
        {
          id: "setup",
          title: "Business setup roadmap",
          items: [
            "A step-by-step practical setup plan",
            "Order of registrations, professional appointments and preparations",
            "Realistic timeline with the dependencies made visible",
          ],
        },
        {
          id: "activity",
          title: "Activity registration guidance",
          items: [
            "Abertura de atividade nas Finanças",
            "Trabalhador independente",
            "Recibos verdes",
            "Código de Atividade Económica, CAE",
            "Código do IRS, CIRS",
            "Segurança Social",
            "NIF and NISS",
            "Business bank-account preparation",
          ],
          note: "These are general preparation topics. Registration choices are confirmed with an independent accountant.",
        },
        {
          id: "self",
          title: "Self-employment guidance",
          text: "For people who will work independently in Portugal, whether as a freelancer, consultant or small service provider.",
          items: [
            "What trabalhador independente status involves in everyday practice",
            "Activity opening at Finanças, general preparation and sequence",
            "Invoicing through recibos verdes and the records to keep",
            "Social security registration questions to raise with an accountant",
            "Insurance, banking and payment-collection practicalities",
          ],
          note: "Tax rates, exemptions and contribution schedules are confirmed with an independent accountant.",
        },
        {
          id: "coordination",
          title: "Practical setup coordination",
          text: "Once the direction is agreed, the practical steps are organised in the right order and followed until they are done.",
          items: [
            "Sequencing of registrations, appointments and deadlines",
            "Premises search, viewings and landlord communication",
            "Utilities, internet and basic equipment for the premises",
            "Supplier, contractor and service-provider introductions",
            "Document preparation and translation coordination",
            "Progress follow-up and a single point of contact throughout",
          ],
        },
        {
          id: "referrals",
          title: "Professional referrals and launch coordination",
          items: [
            "Accountants, lawyers and insurance professionals",
            "Licensed estate agents and commercial-property professionals",
            "Marketing and website providers",
            "Other specialised professionals as the concept requires",
            "General research into publicly available programmes and business-support information",
            "Practical coordination relating to location, suppliers and early-stage organisation",
          ],
          note: "Eligibility for any support programme is decided by the responsible organisation. No eligibility or approval is promised.",
        },
      ],
      notices: [
        "TerraSu Living provides practical research, planning and coordination. It does not provide regulated legal, accounting, financial or investment advice.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de İş Kurulumu ve Fırsat Araştırması | TerraSu Living",
      metaDescription:
        "Portekiz'de iş kurmayı veya bağımsız faaliyet yürütmeyi düşünenler için pratik araştırma, konsept geliştirme ve yerel kurulum koordinasyonu.",
      eyebrow: "İş",
      title: "İş Kurulumu ve Fırsat Araştırması",
      lead: "Portekiz'de iş kurmayı veya bağımsız faaliyet yürütmeyi düşünenler için pratik araştırma, konsept geliştirme ve yerel kurulum koordinasyonu.",
      intro: [
        "Her iş fikri Gözde K. ile birebir değerlendirilir. Amaç hazır bir fikir satmak değil; müşterinin deneyimini, kaynaklarını ve beklentilerini anlayarak gerçekçi seçenekleri araştırmaktır.",
        "Net bir planınız da olsa, birkaç fikir arasında karar veriyor da olsanız, henüz belirlenmiş bir fikriniz olmasa da destek alabilirsiniz.",
      ],
      sections: [
        {
          title: "Kimler için uygun",
          items: [
            "Net bir iş fikri olanlar",
            "Birkaç fikri karşılaştıranlar",
            "Henüz belirlenmiş bir fikri olmayanlar",
            "Bağımsız profesyoneller ve serbest çalışanlar",
            "Küçük hizmet işletmeleri ve temizlik işletmeleri",
            "Turizmle ilgili konseptler, gıda ve butik ürün fikirleri",
            "E-ticaret konseptleri ve uluslararası girişimciler",
          ],
        },
        {
          id: "idea",
          title: "İş fikri değerlendirmesi ve konsept geliştirme",
          items: [
            "Hedeflerinizin, deneyiminizin, kaynaklarınızın ve tercih ettiğiniz çalışma modelinin değerlendirilmesi",
            "Erken aşamadaki fikrin daha net bir hizmet konsepti, hedef kitle, teklif ve işleyiş modeline dönüştürülmesi",
            "Konseptin zaman, sermaye ve dil açısından gerektirdiklerinin açıkça konuşulması",
          ],
        },
        {
          id: "market",
          title: "Fırsat ve pazar araştırması",
          items: [
            "Yerel ihtiyaçlar, rekabet, talep göstergeleri ve hizmet boşlukları üzerine pratik araştırma",
            "Bölgede faaliyette olan benzer işlerin karşılaştırılması",
            "İlgili durumlarda mevsimsellik ve talep dalgalanmaları",
          ],
        },
        {
          id: "location",
          title: "Lokasyon araştırması",
          items: [
            "Faaliyete göre uygun Portekiz bölgelerinin, mahallelerin veya ticari alanların belirlenmesi",
            "Yaya trafiği, erişim, otopark ve komşu işletmeler hakkında pratik notlar",
            "Ticari gayrimenkul profesyonelleriyle koordinasyon",
          ],
        },
        {
          id: "setup",
          title: "İş kurulumu yol haritası",
          items: [
            "Adım adım pratik kurulum planı",
            "Kayıtların, profesyonel görüşmelerin ve hazırlıkların sırası",
            "Bağımlılıkların görünür olduğu gerçekçi bir takvim",
          ],
        },
        {
          id: "activity",
          title: "Faaliyet kaydı rehberliği",
          items: [
            "Abertura de atividade nas Finanças",
            "Trabalhador independente",
            "Recibos verdes",
            "Código de Atividade Económica, CAE",
            "Código do IRS, CIRS",
            "Segurança Social",
            "NIF ve NISS",
            "İşletme banka hesabı hazırlığı",
          ],
          note: "Bunlar genel hazırlık konularıdır. Kayıt tercihleri bağımsız bir muhasebeciyle teyit edilir.",
        },
        {
          id: "self",
          title: "Serbest çalışma rehberliği",
          text: "Portekiz'de serbest çalışan, danışman veya küçük hizmet sağlayıcı olarak bağımsız çalışacak kişiler için.",
          items: [
            "Trabalhador independente statüsünün günlük pratikte anlamı",
            "Finanças'ta faaliyet açılışı, genel hazırlık ve sıralama",
            "Recibos verdes ile faturalandırma ve tutulması gereken kayıtlar",
            "Sosyal güvenlik kaydı konusunda muhasebeciye sorulacak sorular",
            "Sigorta, bankacılık ve tahsilat pratikleri",
          ],
          note: "Vergi oranları, istisnalar ve prim takvimi bağımsız bir muhasebeciyle teyit edilir.",
        },
        {
          id: "coordination",
          title: "Pratik kurulum koordinasyonu",
          text: "Yön belirlendikten sonra pratik adımlar doğru sırayla düzenlenir ve tamamlanana kadar takip edilir.",
          items: [
            "Kayıtların, randevuların ve sürelerin sıralanması",
            "İş yeri araştırması, görüntülemeler ve mal sahibiyle iletişim",
            "İş yeri için abonelikler, internet ve temel ekipman",
            "Tedarikçi, müteahhit ve hizmet sağlayıcı yönlendirmeleri",
            "Evrak hazırlığı ve tercüme koordinasyonu",
            "Süreç takibi ve baştan sona tek muhatap",
          ],
        },
        {
          id: "referrals",
          title: "Profesyonel yönlendirme ve başlangıç koordinasyonu",
          items: [
            "Muhasebeciler, avukatlar ve sigorta uzmanları",
            "Lisanslı emlak danışmanları ve ticari gayrimenkul uzmanları",
            "Pazarlama ve web sitesi sağlayıcıları",
            "Konseptin gerektirdiği diğer uzmanlar",
            "Kamuya açık programlar ve iş destek bilgileri üzerine genel araştırma",
            "Lokasyon, tedarikçiler ve başlangıç dönemi organizasyonuna ilişkin pratik koordinasyon",
          ],
          note: "Herhangi bir destek programına uygunluk, ilgili kurum tarafından belirlenir. Uygunluk veya onay vaat edilmez.",
        },
      ],
      notices: [
        "TerraSu Living pratik araştırma, planlama ve koordinasyon sunar. Düzenlemeye tabi hukuki, muhasebe, finans veya yatırım danışmanlığı vermez.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  tours: {
    en: {
      metaTitle: "Tailor-Made Boutique Tours | TerraSu Living",
      metaDescription:
        "Private programme design in Portugal and beyond: cultural, culinary, wellness, family and small corporate group programmes.",
      eyebrow: "Boutique tours",
      title: "Private Boutique Experiences",
      lead: "Programmes built around a specific group, its pace and its interests, rather than a fixed itinerary.",
      intro: [
        "Portugal is a principal area of expertise. Private programmes may also be created for Turkey, Portugal and other destinations according to group preferences and operational availability.",
        "Planning begins with the group itself, its size, ages, pace and reason for travelling, and the route follows from there.",
      ],
      sections: [
        {
          id: "portugal",
          title: "Private Portugal programmes",
          items: [
            "Porto and Northern Portugal",
            "Lisbon and Central Portugal",
            "Douro Valley",
            "Cultural programmes",
            "Culinary programmes",
            "Wellness and yoga groups",
            "Women's private groups",
            "Family programmes",
            "Small corporate groups",
          ],
        },
        {
          id: "turkey",
          title: "Portugal and Turkey programmes",
          items: [
            "Combined Portugal and Turkey itineraries",
            "Programmes for groups travelling between the two countries",
            "Cultural and culinary themes in both destinations",
          ],
        },
        {
          id: "international",
          title: "International custom programmes",
          items: [
            "Multi-destination programmes on request",
            "Planning subject to operational availability",
            "Coordination with registered local providers in each destination",
          ],
        },
        {
          id: "groups",
          title: "Group planning variables",
          items: [
            "Dates",
            "Group size",
            "Age profile",
            "Travel pace",
            "Interests",
            "Accessibility needs",
            "Food preferences",
            "Accommodation style",
            "Budget",
            "Transport requirements",
            "Special requests",
          ],
          note: "Private transfers are coordinated as part of the programme and are described in detail on the transfer page.",
        },
      ],
      notices: [
        "TerraSu Living provides programme design, research and coordination. Regulated transport, accommodation, guiding and tourism services are supplied by appropriately registered independent providers.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Kişiye Özel Butik Turlar | TerraSu Living",
      metaDescription:
        "Portekiz'de ve ötesinde özel program tasarımı: kültür, gastronomi, wellness, aile ve küçük kurumsal grup programları.",
      eyebrow: "Butik turlar",
      title: "Özel Butik Deneyimler",
      lead: "Sabit bir güzergâh yerine belirli bir grubun temposuna ve ilgi alanlarına göre kurulan programlar.",
      intro: [
        "Portekiz temel uzmanlık alanıdır. Grup tercihlerine ve operasyonel uygunluğa göre Türkiye, Portekiz ve diğer destinasyonlar için de özel programlar oluşturulabilir.",
        "Planlama grubun kendisiyle başlar: kişi sayısı, yaşlar, tempo ve seyahatin amacı. Güzergâh bunların ardından şekillenir.",
      ],
      sections: [
        {
          id: "portugal",
          title: "Özel Portekiz programları",
          items: [
            "Porto ve Kuzey Portekiz",
            "Lizbon ve Orta Portekiz",
            "Douro Vadisi",
            "Kültür programları",
            "Gastronomi programları",
            "Wellness ve yoga grupları",
            "Kadınlara özel gruplar",
            "Aile programları",
            "Küçük kurumsal gruplar",
          ],
        },
        {
          id: "turkey",
          title: "Portekiz ve Türkiye programları",
          items: [
            "Portekiz ve Türkiye'yi birleştiren güzergâhlar",
            "İki ülke arasında seyahat eden gruplar için programlar",
            "Her iki destinasyonda kültür ve gastronomi temaları",
          ],
        },
        {
          id: "international",
          title: "Uluslararası özel programlar",
          items: [
            "Talebe göre çok destinasyonlu programlar",
            "Planlama operasyonel uygunluğa bağlıdır",
            "Her destinasyonda kayıtlı yerel sağlayıcılarla koordinasyon",
          ],
        },
        {
          id: "groups",
          title: "Grup planlama değişkenleri",
          items: [
            "Tarihler",
            "Grup büyüklüğü",
            "Yaş profili",
            "Seyahat temposu",
            "İlgi alanları",
            "Erişilebilirlik ihtiyaçları",
            "Beslenme tercihleri",
            "Konaklama tarzı",
            "Bütçe",
            "Ulaşım ihtiyaçları",
            "Özel talepler",
          ],
          note: "Özel transferler programın parçası olarak koordine edilir ve transfer sayfasında ayrıntılı olarak açıklanır.",
        },
      ],
      notices: [
        "TerraSu Living program tasarımı, araştırma ve koordinasyon sunar. Düzenlemeye tabi ulaşım, konaklama, rehberlik ve turizm hizmetleri, gerekli kayıtlara sahip bağımsız sağlayıcılar tarafından verilir.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  transfers: {
    en: {
      metaTitle: "Private Transfer and Vehicle Coordination | TerraSu Living",
      metaDescription:
        "Coordination of licensed transport providers for airport arrivals, families, groups, viewings and intercity travel in Portugal.",
      eyebrow: "Transport",
      title: "Private Transfer and Vehicle Coordination",
      lead: "Suitable licensed transport providers identified, briefed and coordinated around your arrival.",
      intro: [
        "TerraSu Living can assist clients and private groups in identifying and coordinating suitable licensed transport providers.",
        "Coordenação de transferes privados e contratação de viaturas com prestadores devidamente licenciados.",
      ],
      sections: [
        {
          title: "Coordination areas",
          items: [
            "Airport transfer coordination",
            "Private chauffeur vehicle sourcing",
            "Family transfer",
            "Group transfer",
            "Luggage-compatible vehicle sourcing",
            "Intercity transfer",
            "Porto and Lisbon airport coordination",
            "Property viewing transport coordination",
            "Tour and event transport coordination",
            "Minivan and small bus sourcing",
            "Special arrival coordination",
          ],
        },
      ],
      notices: [
        "Transportation is provided by appropriately licensed independent transport providers. TerraSu Living provides planning, supplier research and coordination support.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Özel Transfer ve Araç Temini Koordinasyonu | TerraSu Living",
      metaDescription:
        "Portekiz'de havalimanı karşılamaları, aileler, gruplar, ev görüntülemeleri ve şehirlerarası yolculuklar için lisanslı taşıma sağlayıcılarının koordinasyonu.",
      eyebrow: "Ulaşım",
      title: "Özel Transfer ve Araç Temini Koordinasyonu",
      lead: "Uygun lisanslı taşıma sağlayıcıları belirlenir, bilgilendirilir ve varışınıza göre koordine edilir.",
      intro: [
        "TerraSu Living, müşterilere ve özel gruplara uygun lisanslı taşıma sağlayıcılarının belirlenmesi ve koordinasyonu konusunda yardımcı olabilir.",
        "Coordenação de transferes privados e contratação de viaturas com prestadores devidamente licenciados.",
      ],
      sections: [
        {
          title: "Koordinasyon alanları",
          items: [
            "Havalimanı transfer koordinasyonu",
            "Özel şoförlü araç temini",
            "Aile transferi",
            "Grup transferi",
            "Bagaja uygun araç temini",
            "Şehirlerarası transfer",
            "Porto ve Lizbon havalimanı koordinasyonu",
            "Ev görüntüleme ulaşım koordinasyonu",
            "Tur ve etkinlik ulaşım koordinasyonu",
            "Minivan ve küçük otobüs temini",
            "Özel karşılama koordinasyonu",
          ],
        },
      ],
      notices: [
        "Taşıma hizmeti, ilgili lisansa sahip bağımsız taşıma sağlayıcıları tarafından verilir. TerraSu Living planlama, tedarikçi araştırması ve koordinasyon desteği sunar.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  everyday: {
    en: {
      metaTitle: "Everyday Life Support in Portugal | TerraSu Living",
      metaDescription:
        "Practical coordination and information on utilities, internet, transport, local services, health centres, schools and daily life in Portugal.",
      eyebrow: "Settlement",
      title: "Everyday Life Support in Portugal",
      lead: "The practical questions that appear after the paperwork is done.",
      intro: [
        "The first months usually bring a long series of small tasks: a contract to change, a bill to understand, an appointment to book, a service provider to find.",
        "This service covers those tasks so they do not accumulate into a difficult week.",
      ],
      sections: [
        {
          title: "Coordination and information",
          items: [
            "Utilities, electricity, water and gas where applicable",
            "Internet and mobile services",
            "Public transport and travel passes",
            "Local services and provider research",
            "Health-centre orientation",
            "School and family information",
            "Shopping and local areas",
            "Postal and delivery services",
            "Home maintenance referrals",
            "General arrival orientation",
          ],
        },
      ],
      notices: [
        "Provider approvals and public-service decisions are made by the organisations concerned. TerraSu Living has no authority over them.",
      ],
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz'de Günlük Yaşam Desteği | TerraSu Living",
      metaDescription:
        "Portekiz'de abonelikler, internet, ulaşım, yerel hizmetler, sağlık merkezleri, okullar ve günlük yaşam için pratik koordinasyon ve bilgi.",
      eyebrow: "Yerleşme",
      title: "Portekiz'de Günlük Yaşam Desteği",
      lead: "Evraklar tamamlandıktan sonra ortaya çıkan pratik sorular.",
      intro: [
        "İlk aylar genellikle uzun bir küçük işler dizisi getirir: değiştirilecek bir sözleşme, anlaşılması gereken bir fatura, alınacak bir randevu, bulunması gereken bir usta.",
        "Bu hizmet, söz konusu işlerin birikip zor bir haftaya dönüşmesini önler.",
      ],
      sections: [
        {
          title: "Koordinasyon ve bilgi",
          items: [
            "Abonelikler; elektrik, su ve uygun hâllerde doğal gaz",
            "İnternet ve mobil hizmetler",
            "Toplu taşıma ve ulaşım kartları",
            "Yerel hizmetler ve sağlayıcı araştırması",
            "Sağlık merkezi yönlendirmesi",
            "Okul ve aile bilgileri",
            "Alışveriş ve yerel bölgeler",
            "Posta ve kargo hizmetleri",
            "Ev bakım ve tamir yönlendirmeleri",
            "Genel varış oryantasyonu",
          ],
        },
      ],
      notices: [
        "Sağlayıcı onayları ve kamu hizmeti kararları ilgili kurumlara aittir. TerraSu Living bu kararlar üzerinde yetki sahibi değildir.",
      ],
      cta: CTA_TR,
    },
  },

  /* ------------------------------------------------------------- */
  expatGuide: {
    en: {
      metaTitle: "Portugal Expat Guide | TerraSu Living",
      metaDescription:
        "A practical orientation for new residents in Portugal: registrations, housing, health, transport, working independently and settling in.",
      eyebrow: "Guide",
      title: "Portugal Expat Guide",
      lead: "A short, practical orientation for people preparing to live in Portugal.",
      intro: [
        "This guide summarises how the main processes fit together. It is general information, kept deliberately brief, and it is reviewed against official sources.",
        "Individual circumstances change what applies, so anything you plan to act on should be confirmed for your own case.",
      ],
      sections: [
        {
          title: "Before you arrive",
          items: [
            "Confirm which residence route matches your situation and income type",
            "Collect civil documents early, since apostille and translation take time",
            "Obtain a NIF, which is required for almost everything that follows",
            "Understand how consular jurisdiction affects your document list",
          ],
        },
        {
          title: "In the first weeks",
          items: [
            "Register your address and open a Portuguese bank account",
            "Apply for a NISS if your status and activity require one",
            "Register at the health centre for your area and request the Número de Utente",
            "Set up Chave Móvel Digital for access to online public services",
          ],
        },
        {
          title: "Working and daily life",
          items: [
            "Independent work usually involves abertura de atividade and recibos verdes",
            "Tax and social security obligations should be reviewed with an accountant",
            "Rental contracts, deposits and notice periods vary, so read before signing",
            "Public transport passes are often cheaper as monthly subscriptions",
          ],
        },
      ],
      notices: [
        "This guide is general information, not legal, tax or immigration advice. Rules change and official sources take precedence.",
      ],
      source: AIMA,
      cta: CTA_EN,
    },
    tr: {
      metaTitle: "Portekiz Expat Rehberi | TerraSu Living",
      metaDescription:
        "Portekiz'de yeni yaşayanlar için pratik rehber: kayıtlar, konut, sağlık, ulaşım, bağımsız çalışma ve yerleşme.",
      eyebrow: "Rehber",
      title: "Portekiz Expat Rehberi",
      lead: "Portekiz'de yaşamaya hazırlananlar için kısa ve pratik bir rehber.",
      intro: [
        "Bu rehber ana süreçlerin birbirine nasıl bağlandığını özetler. Bilinçli olarak kısa tutulmuş genel bilgidir ve resmî kaynaklarla karşılaştırılarak gözden geçirilir.",
        "Kişisel koşullar neyin geçerli olduğunu değiştirir; bu nedenle harekete geçmeden önce kendi durumunuz için teyit almanız gerekir.",
      ],
      sections: [
        {
          title: "Gelmeden önce",
          items: [
            "Durumunuza ve gelir türünüze hangi oturum seçeneğinin uyduğunu netleştirin",
            "Nüfus belgelerini erken toplayın; apostil ve tercüme zaman alır",
            "NIF alın; sonraki neredeyse her adım için gereklidir",
            "Yetkili konsolosluğun evrak listenizi nasıl etkilediğini öğrenin",
          ],
        },
        {
          title: "İlk haftalarda",
          items: [
            "Adresinizi kaydettirin ve Portekiz banka hesabı açın",
            "Statünüz ve faaliyetiniz gerektiriyorsa NISS başvurusu yapın",
            "Bölgenizdeki sağlık merkezine kaydolun ve Número de Utente talep edin",
            "Çevrim içi kamu hizmetleri için Chave Móvel Digital kurun",
          ],
        },
        {
          title: "Çalışma ve günlük yaşam",
          items: [
            "Bağımsız çalışma genellikle abertura de atividade ve recibos verdes içerir",
            "Vergi ve sosyal güvenlik yükümlülükleri bir muhasebeciyle değerlendirilmelidir",
            "Kira sözleşmeleri, depozitolar ve fesih süreleri değişir; imzalamadan önce okuyun",
            "Toplu taşıma kartları aylık abonelik olarak genellikle daha uygundur",
          ],
        },
      ],
      notices: [
        "Bu rehber genel bilgidir; hukuki, vergisel veya göçmenlik danışmanlığı değildir. Kurallar değişir ve resmî kaynaklar esas alınır.",
      ],
      source: AIMA,
      cta: CTA_TR,
    },
  },
};
