import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import logo from "@/assets/terrasu-logo.png";
import heroImage from "@/assets/hero-porto.jpg";

const title = "TerraSu Living — Portekiz'de Güvenilir Yaşam Desteği | Porto";
const description =
  "Portekiz'de danışmanlık, yerleşim desteği, ev arama süreçleri, profesyonel temizlik ve yerel deneyim koordinasyonu. Gözde K. tarafından Porto'da yönetilmektedir.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "TerraSu Living",
          founder: { "@type": "Person", name: "Gözde K." },
          areaServed: "Portugal",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto",
            addressCountry: "PT",
          },
          url: "https://terrasuliving.com",
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Danışmanlık", href: "#danismanlik" },
  { label: "Emlak Desteği", href: "#emlak" },
  { label: "Temizlik", href: "#temizlik" },
  { label: "Portekiz Deneyimleri", href: "#deneyimler" },
  { label: "İletişim", href: "#iletisim" },
];

const consultingItems = [
  {
    name: "NIF – Número de Identificação Fiscal",
    text: "Portekiz vergi numarası başvurusu için süreç ve belge desteği.",
  },
  {
    name: "NISS – Número de Identificação da Segurança Social",
    text: "Portekiz sosyal güvenlik numarası başvurusu için yönlendirme ve belge hazırlık desteği.",
  },
  {
    name: "Portuguese Bank Account Support",
    text: "Portekiz'de bireysel banka hesabı açılışı için gerekli belgeler ve süreç hakkında destek.",
  },
  {
    name: "Relocation Support",
    text: "Portekiz'e geliş öncesi ve sonrası yerleşim süreci, günlük yaşam ve idari işlemler için pratik yardım.",
  },
  {
    name: "Residence Document Support",
    text: "Oturum süreçleri için belge düzenleme ve genel hazırlık desteği.",
  },
  {
    name: "Personal Consultation",
    text: "Kişinin ihtiyaçlarına ve mevcut durumuna göre hazırlanan birebir danışmanlık görüşmesi.",
  },
];

const realEstateItems = [
  "Kiralık ev araştırması",
  "Satın alınacak mülkler için ön araştırma",
  "İlan ve bölge değerlendirmesi",
  "Ev ziyaretlerinin koordinasyonu",
  "Ev sahibi veya lisanslı emlak ofisiyle iletişim desteği",
  "Talep edilen belgelerin düzenlenmesi",
  "Mahalle, ulaşım, okul ve günlük yaşam hakkında yerel bilgi",
];

const cleaningItems = [
  "Düzenli ev temizliği",
  "Taşınma öncesi ve sonrası derin temizlik",
  "Kısa dönem kiralık daire hazırlığı",
  "Ofis ve küçük işletme temizliği",
  "İhtiyaca göre planlanan özel temizlik programları",
];

const experienceItems = [
  "Porto ve çevresinde rehberli keşif günleri",
  "Douro Vadisi ve bağ ziyaretlerinin organizasyonu",
  "Yeni gelenler için şehir oryantasyonu",
  "Yerel esnaf, pazar ve gastronomi rotaları",
  "Küçük gruplar ve aileler için özel program koordinasyonu",
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#ana-sayfa" className="flex items-center">
            <img
              src={logo}
              alt="TerraSu Living — by Gözde K."
              width={915}
              height={1024}
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>


          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.82rem] font-light tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border transition-colors hover:bg-secondary lg:hidden"
          >
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </button>
        </div>

        {open && (
          <nav className="border-t border-border/60 bg-background px-5 pb-6 pt-2 lg:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/40 py-3 text-sm font-light tracking-wide text-muted-foreground transition-colors last:border-0 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="ana-sayfa" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
            <div>
              <p className="eyebrow">Porto · Portekiz</p>
              <h1 className="mt-5 font-serif text-[2.35rem] leading-[1.12] text-foreground sm:text-5xl lg:text-[3.4rem]">
                Portekiz'de Yeni Hayatınıza Güvenilir ve Kişisel Destek
              </h1>
              <p className="mt-6 max-w-xl text-[1.02rem] font-light leading-relaxed text-muted-foreground">
                Danışmanlık, yerleşim desteği, ev arama süreçleri, profesyonel temizlik ve yerel
                deneyim koordinasyonu tek bir çatı altında.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#danismanlik"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Hizmetleri İncele
                </a>
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-accent/40 px-7 py-3.5 text-sm font-medium tracking-wide text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                >
                  Gözde K. ile İletişime Geç
                </a>
              </div>

              <p className="mt-8 text-xs font-light tracking-wide text-muted-foreground">
                TerraSu Living, Gözde K. tarafından kurulmuş ve yönetilmektedir.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full bg-sand/70 blur-2xl lg:block" />
              <img
                src={heroImage}
                alt="Porto'da azulejo duvarlı, zeytin ağaçlı sakin bir balkon"
                width={1536}
                height={1024}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="divider-leaf" />
        </div>

        {/* ABOUT */}
        <section id="hakkimizda" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Hakkımızda</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                TerraSu Living Hakkında
              </h2>
              <div className="mt-8 rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft">
                <img
                  src={logo}
                  alt="TerraSu Living logosu"
                  loading="lazy"
                  width={915}
                  height={1024}
                  className="mx-auto h-32 w-auto object-contain"
                />

                <span className="my-6 divider-leaf" />
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Founder</p>
                <p className="mt-1 font-serif text-2xl text-foreground">Gözde K.</p>
                <p className="mt-1 text-sm font-light text-muted-foreground">Porto, Portugal</p>
              </div>
            </div>

            <div className="space-y-6 text-[1.02rem] font-light leading-relaxed text-muted-foreground">
              <p>
                TerraSu Living; Portekiz'e taşınmak, burada yeni bir yaşam kurmak, ev aramak veya
                güvenilir yerel desteğe ulaşmak isteyen bireyler, aileler ve küçük işletmeler için
                Gözde K. tarafından oluşturuldu.
              </p>
              <p>
                Amacımız süreçleri sadeleştirmek, ihtiyaçlarınıza uygun pratik çözümler sunmak ve
                gerektiğinde sizi doğru, lisanslı ve kayıtlı profesyonellere yönlendirmektir.
              </p>
              <p>
                Ana hizmet bölgemiz Porto ve çevresidir. Bazı hizmetler Portekiz genelinde
                sunulabilir.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-cream/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Hizmetlerimiz</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Tek bir çatı altında, ihtiyacınıza göre
              </h2>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-2">
              <ServiceCard
                id="danismanlik"
                index="01"
                title="Danışmanlık ve Yerleşim Desteği"
                description="Portekiz'de yaşam kurma süreciniz için kişisel yönlendirme, belge hazırlığı ve pratik destek."
                disclaimer="TerraSu Living hukuki danışmanlık, resmi temsil veya vize ve oturum sonucu garantisi sunmaz."
              >
                <ul className="space-y-5">
                  {consultingItems.map((item) => (
                    <li key={item.name}>
                      <p className="text-[0.92rem] font-medium text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </ServiceCard>

              <ServiceCard
                id="emlak"
                index="02"
                title="Ev Kiralama ve Satın Alma Desteği"
                description="Portekiz'de ev arama sürecinizde araştırma, iletişim, belge hazırlığı ve yerel koordinasyon desteği."
                disclaimer="TerraSu Living bir emlak acentesi değildir ve düzenlemeye tabi emlak aracılığı veya hukuki hizmet sunmaz. Gerektiğinde lisanslı emlak profesyonelleri ve diğer uzmanlarla çalışılır."
              >
                <BulletList items={realEstateItems} />
              </ServiceCard>

              <ServiceCard
                id="temizlik"
                index="03"
                title="Profesyonel Temizlik"
                description="Eviniz veya işletmeniz için güvenilir, düzenli ve özenli temizlik hizmeti koordinasyonu."
              >
                <BulletList items={cleaningItems} />
              </ServiceCard>

              <ServiceCard
                id="deneyimler"
                index="04"
                title="Portekiz Deneyimleri"
                description="Porto ve çevresini yerel bir bakışla tanımanız için özenle planlanan deneyim ve gezi koordinasyonu."
              >
                <BulletList items={experienceItems} />
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="iletisim" className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="eyebrow">İletişim</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Gözde K. ile İletişime Geçin
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.02rem] font-light leading-relaxed text-muted-foreground">
              İhtiyacınızı kısaca paylaşın; size en uygun destek planını birlikte belirleyelim.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:info@terrasuliving.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
              >
                info@terrasuliving.com
              </a>
              <a
                href="#danismanlik"
                className="inline-flex w-full items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
              >
                Hizmetleri İncele
              </a>
            </div>

            <p className="mt-8 text-sm font-light text-muted-foreground">
              Porto, Portugal · terrasuliving.com
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-secondary/50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
          <img
            src={logo}
            alt="TerraSu Living"
            loading="lazy"
            width={915}
            height={1024}
            className="h-20 w-auto object-contain"

          />
          <p className="max-w-xl text-xs font-light leading-relaxed text-muted-foreground">
            TerraSu Living, Gözde K. tarafından kurulmuş ve yönetilmektedir. Hukuki danışmanlık,
            resmi temsil veya düzenlemeye tabi emlak aracılığı hizmeti sunulmaz.
          </p>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} TerraSu Living
          </p>
        </div>
      </footer>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm font-light leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ServiceCard({
  id,
  index,
  title,
  description,
  disclaimer,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  disclaimer?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
    >
      <span className="font-serif text-sm tracking-[0.2em] text-primary">{index}</span>
      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground sm:text-[1.7rem]">
        {title}
      </h3>
      <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{description}</p>
      <span className="my-7 divider-leaf" />
      <div className="flex-1">{children}</div>
      {disclaimer && (
        <p className="mt-8 rounded-xl bg-secondary/70 px-4 py-3 text-[0.72rem] font-light leading-relaxed text-muted-foreground">
          {disclaimer}
        </p>
      )}
    </article>
  );
}
