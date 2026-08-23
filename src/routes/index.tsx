import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Youtube } from "lucide-react";

import heroImage from "@/assets/hero-portugal.jpg";
import logo from "@/assets/terrasu-logo.png";
import portugalMap from "@/assets/portugal-map-transparent.png";
import { PlanCta } from "@/components/site/premium";
import { CtaLink, Eyebrow, Section } from "@/components/site/ui";
import { brand } from "@/i18n/brand";

import { useLanguage } from "@/i18n/LanguageProvider";
import { INSTAGRAM_URL, YOUTUBE_URL, siteCopy } from "@/i18n/site";
import { images } from "@/lib/page-assets";

const title = "TerraSu Living | Portugal Relocation, Administrative & Property Support";
const description =
  "Founder-led relocation consulting, visa preparation, NIF and NISS support, property search, home setup, transfers, business guidance and boutique tours across Portugal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://terrasuliving.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "TerraSu Living",
          founder: { "@type": "Person", name: "Gözde Katipoğlu" },
          areaServed: "Portugal",
          address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
          email: "info@terrasuliving.com",
          url: "https://terrasuliving.com",
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: Home,
});

const portugalCopy = {
  en: {
    eyebrow: "Discover Portugal",
    title: "A Brief Portrait of Portugal",
    intro:
      "At the western edge of Europe, opening onto the Atlantic, Portugal is a country of deep history, a gentle climate, a strong maritime inheritance and a distinct way of life. Its territory may be modest in size, but its character is not.",
    historyTitle: "History & Democracy",
    history:
      "Portugal is one of Europe's oldest nation states. The age of maritime exploration in the 15th and 16th centuries shaped its history and culture profoundly. A long authoritarian period in the 20th century came to an end with the Carnation Revolution on 25 April 1974, followed by the transition to democracy. Portugal joined the European Economic Community in 1986 and is now a member of the European Union.",
    geographyTitle: "Geography",
    geography:
      "Portugal covers approximately 92,000 km² on the western side of the Iberian Peninsula. Alongside the mainland, the Atlantic archipelagos of Madeira and the Azores are part of the country.",
    populationTitle: "Population",
    population:
      "Portugal has a population of approximately 10.7 million. Much of it is concentrated in the cities and metropolitan areas along the Atlantic coast.",
    climateTitle: "Climate",
    climate:
      "The country generally enjoys a mild climate. The north is cooler and wetter, while the southern regions are warmer and drier. The Atlantic has a noticeable influence, particularly on the coastal cities.",
    citiesTitle: "Three Cities to Know",
    cities: [
      {
        name: "Lisbon",
        text: "The capital and largest metropolitan area, and a centre for government, finance, technology and tourism.",
      },
      {
        name: "Porto",
        text: "Northern Portugal's economic and cultural centre, known for its historic fabric, the Douro, Port wine and a strong trading tradition.",
      },
      {
        name: "Braga",
        text: "One of Portugal's oldest cities, combining historic heritage with universities, technology and a growing business community.",
      },
    ],
    economyTitle: "Economy & Livelihoods",
    economy:
      "Services play an important role in Portugal's economy. Alongside tourism, trade, technology and professional services, the country has longstanding activity in textiles, footwear, automotive components, cork, agriculture, wine and fishing.",
    factsTitle: "Quick facts",
    facts: [
      ["Capital", "Lisbon"],
      ["Population", "≈ 10.7 million"],
      ["Area", "≈ 92,000 km²"],
      ["Currency", "Euro (€)"],
      ["Official language", "Portuguese"],
      ["Government", "Democratic Republic"],
      ["EU membership", "1986"],
      ["National day", "10 June"],
    ],
    bottom:
      "On the Atlantic shore, Portugal brings together Europe's long history and the texture of modern life.",
  },
  tr: {
    eyebrow: "Portekiz'i Tanıyın",
    title: "Portekiz'e Kısa Bir Bakış",
    intro:
      "Avrupa'nın en batısında, Atlantik Okyanusu'na açılan Portekiz; köklü tarihi, ılıman iklimi, güçlü denizcilik mirası ve kendine özgü yaşam kültürüyle küçük yüzölçümüne rağmen karakteri güçlü bir ülkedir.",
    historyTitle: "Tarih & Demokrasi",
    history:
      "Portekiz, Avrupa'nın en eski ulus devletlerinden biridir. 15. ve 16. yüzyıllardaki denizcilik ve keşifler dönemi ülkenin tarihini ve kültürünü derinden şekillendirdi. 20. yüzyıldaki uzun otoriter yönetim dönemi, 25 Nisan 1974'te gerçekleşen Karanfil Devrimi ile sona erdi. Ardından demokratik sisteme geçildi. Portekiz 1986 yılında Avrupa Ekonomik Topluluğu'na katıldı ve bugün Avrupa Birliği üyesidir.",
    geographyTitle: "Coğrafya",
    geography:
      "Yaklaşık 92.000 km² yüzölçümüne sahip Portekiz, İber Yarımadası'nın batısında yer alır. Ana karanın yanı sıra Atlantik'teki Madeira ve Azor Adaları da ülkenin parçasıdır.",
    populationTitle: "Nüfus",
    population:
      "Portekiz'in nüfusu yaklaşık 10,7 milyondur. Nüfusun önemli bölümü Atlantik kıyısındaki şehirler ve metropol alanlarında yoğunlaşır.",
    climateTitle: "İklim",
    climate:
      "Portekiz genel olarak ılıman bir iklime sahiptir. Kuzey daha serin ve yağışlıyken, güney bölgeleri daha sıcak ve kuraktır. Atlantik Okyanusu özellikle kıyı şehirlerinin iklimi üzerinde belirgin bir etkiye sahiptir.",
    citiesTitle: "Üç Önemli Şehir",
    cities: [
      {
        name: "Lizbon",
        text: "Ülkenin başkenti ve en büyük metropol alanı; yönetim, finans, teknoloji ve turizmin merkezidir.",
      },
      {
        name: "Porto",
        text: "Kuzey Portekiz'in ekonomik ve kültürel merkezi. Tarihi dokusu, Douro Nehri, Porto şarabı ve güçlü ticaret geleneğiyle öne çıkar.",
      },
      {
        name: "Braga",
        text: "Portekiz'in en eski şehirlerinden biri. Tarihi mirasının yanında üniversite, teknoloji ve gelişen iş dünyasıyla kuzey bölgesinin önemli merkezlerindendir.",
      },
    ],
    economyTitle: "Ekonomi & Geçim Kaynakları",
    economy:
      "Portekiz ekonomisinde hizmet sektörü önemli bir ağırlığa sahiptir. Turizm, ticaret, teknoloji ve profesyonel hizmetlerin yanı sıra tekstil, ayakkabı, otomotiv parçaları, mantar üretimi, tarım, şarapçılık ve balıkçılık ülkenin geleneksel ve modern ekonomik faaliyetleri arasında yer alır.",
    factsTitle: "Kısa Bilgiler",
    facts: [
      ["Başkent", "Lizbon"],
      ["Nüfus", "≈ 10,7 milyon"],
      ["Yüzölçümü", "≈ 92.000 km²"],
      ["Para birimi", "Euro (€)"],
      ["Resmî dil", "Portekizce"],
      ["Yönetim", "Demokratik Cumhuriyet"],
      ["AB üyeliği", "1986"],
      ["Ulusal Gün", "10 Haziran"],
    ],
    bottom:
      "Atlantik'in kıyısında, Avrupa'nın köklü geçmişi ile modern yaşamını bir araya getiren bir ülke.",
  },
} as const;

function Home() {
  const { lang, t } = useLanguage();
  const copy = siteCopy[lang];
  const b = brand[lang];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Sunlit Portuguese street with azulejo tiles and a river view"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/72 to-background" />

        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <img
            src={logo}
            alt="TerraSu Living, by Gözde Katipoğlu"
            width={915}
            height={1024}
            className="h-40 w-auto object-contain drop-shadow-sm sm:h-56"
          />
          <p className="mt-6 text-xs uppercase tracking-[0.32em] text-foreground/70">{copy.base}</p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground sm:text-6xl">
            {b.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {b.heroSub}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CtaLink to="/contact">{b.ctaPrimary}</CtaLink>
            <CtaLink to="/services" variant="outline">
              {b.ctaSecondary}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* CORE MESSAGE */}
      <Section className="border-y border-border/60 bg-secondary/25 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            {copy.coreMessage}
          </h2>
          <span className="divider-leaf mx-auto my-7 block w-24" />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {copy.coreSupport}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{copy.coreAlt}</p>
        </div>
      </Section>

      {/* PORTUGAL */}
      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4">
            <span className="portugal-flag" aria-label="Portugal flag" role="img">
              <span className="portugal-flag-seal" />
            </span>
            <Eyebrow>{portugalCopy[lang].eyebrow}</Eyebrow>
          </div>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {portugalCopy[lang].title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
            {portugalCopy[lang].intro}
          </p>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="font-serif text-2xl text-foreground">
              {portugalCopy[lang].historyTitle}
            </h3>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
              {portugalCopy[lang].history}
            </p>
          </div>

          <div className="mt-10 space-y-10 border-t border-border pt-10">
            {[
              [portugalCopy[lang].geographyTitle, portugalCopy[lang].geography],
              [portugalCopy[lang].populationTitle, portugalCopy[lang].population],
              [portugalCopy[lang].climateTitle, portugalCopy[lang].climate],
            ].map(([heading, text]) => (
              <div key={heading} className="max-w-4xl">
                <h3 className="font-serif text-2xl text-foreground">{heading}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-t border-border pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h3 className="font-serif text-2xl text-foreground">
              {portugalCopy[lang].economyTitle}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{portugalCopy[lang].economy}</p>
          </div>

          <div className="mt-10 border-t border-border pt-10">
            <h3 className="font-serif text-2xl text-foreground">
              {portugalCopy[lang].citiesTitle}
            </h3>
            <div className="mt-7 grid gap-8 md:grid-cols-3">
              {portugalCopy[lang].cities.map((city) => (
                <div key={city.name} className="border-t border-primary/50 pt-4">
                  <MapPin className="h-4 w-4 text-primary" strokeWidth={1.25} aria-hidden="true" />
                  <h4 className="mt-3 font-serif text-2xl text-foreground">{city.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{city.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid items-center gap-12 border-y border-border py-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-72 w-full items-center justify-center">
              <img
                src={portugalMap}
                alt={lang === "en" ? "Map of Portugal" : "Portekiz haritası"}
                loading="lazy"
                width={1024}
                height={1536}
                className="block h-auto max-h-[34rem] w-full max-w-[420px] object-contain"
              />
            </div>
            <div>
              <h3 className="eyebrow mb-6">{portugalCopy[lang].factsTitle}</h3>
              <div className="space-y-4">
                {portugalCopy[lang].facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-6 border-b border-border/70 pb-3"
                  >
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-right font-serif text-lg text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug text-primary sm:text-3xl">
            {portugalCopy[lang].bottom}
          </p>
        </div>
      </Section>

      {/* WHY TERRASU LIVING */}
      <Section className="border-y border-border/60 bg-secondary/25">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{b.whyEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{b.whyTitle}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{b.whyLead}</p>
        </div>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {b.why.map((reason, index) => (
            <div key={reason.title} className="border-t border-border pt-5">
              <span className="text-xs tracking-[0.28em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-xl text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOCIAL */}
      <Section>
        <div className="border-y border-border/70 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary/15 hover:text-primary"
            >
              <Instagram className="h-[19px] w-[19px] text-primary" strokeWidth={1.8} />
              {lang === "tr" ? "Instagram’da Takip Edin" : "Follow on Instagram"}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-[19px] w-[19px] text-primary/80" strokeWidth={1.8} />
              {lang === "tr" ? "Instagram’dan Mesaj Gönderin" : "Send a Message on Instagram"}
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <Youtube className="h-[19px] w-[19px] text-primary/80" strokeWidth={1.8} />
              {lang === "tr" ? "YouTube’da İzleyin" : "Watch on YouTube"}
            </a>
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section className="bg-secondary/30">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>{copy.packagesEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {copy.packagesTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{copy.packagesLead}</p>
            <p className="mt-4 text-sm text-muted-foreground">{copy.packagesNote}</p>
            <div className="mt-8">
              <CtaLink to="/contact">{copy.packagesCta}</CtaLink>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {copy.packages.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-foreground/85 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PRICING POSITION */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card px-8 py-14 text-center shadow-soft sm:px-14">
          <Eyebrow>{b.pricingEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{b.pricingTitle}</h2>
          <span className="divider-leaf mx-auto my-7 block w-24" />
          <div className="space-y-3">
            {b.pricingText.map((line) => (
              <p key={line} className="text-base leading-relaxed text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact">{b.pricingPrimary}</CtaLink>
            <CtaLink to="/contact" variant="outline">
              {b.pricingSecondary}
            </CtaLink>
          </div>
        </div>
      </Section>

      {/* GUIDE PREVIEW */}
      <Section className="pb-0">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={images.expat}
            alt="Portuguese coastline with cliffs and calm Atlantic water"
            loading="lazy"
            width={1920}
            height={1088}
            className="aspect-[16/10] w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <Eyebrow>{lang === "en" ? "Before you arrive" : "Gelmeden önce"}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {lang === "en"
                ? "Practical reading before you arrive"
                : "Gelmeden önce pratik okumalar"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {lang === "en"
                ? "A practical guide to everyday life in Portugal, from the first local questions to the details that make a new place feel familiar."
                : "İlk yerel sorulardan yeni bir yeri tanıdık hissettiren günlük ayrıntılara kadar Portekiz'deki yaşam için pratik bir rehber."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/expat-guide" variant="outline">
                {lang === "en" ? "Expat Guide" : "Expat Rehberi"}
              </CtaLink>
              <CtaLink to="/contact" variant="ghost">
                {lang === "en" ? "Ask Gözde" : "Gözde'ye Sorun"}
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <PlanCta />

      {/* LEGAL */}
      <Section className="pt-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-secondary/40 p-6">
          <p className="eyebrow mb-3">{copy.legalTitle}</p>
          <div className="space-y-3">
            {copy.legal.map((line) => (
              <p key={line} className="text-xs leading-relaxed text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
