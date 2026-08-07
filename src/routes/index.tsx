import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube } from "lucide-react";

import heroImage from "@/assets/hero-portugal.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import logo from "@/assets/terrasu-logo.png";
import { FounderMessage, PlanCta } from "@/components/site/premium";
import { CtaLink, Eyebrow, Section, hashProp, linkTo } from "@/components/site/ui";
import { brand } from "@/i18n/brand";

import { useLanguage } from "@/i18n/LanguageProvider";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  portfolioEntries,
  siteCopy,
} from "@/i18n/site";
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
          founder: { "@type": "Person", name: "Gözde K." },
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

const youtubeReady = YOUTUBE_URL.startsWith("http");

function Home() {
  const { lang, t } = useLanguage();
  const copy = siteCopy[lang];
  const b = brand[lang];
  const highlights = portfolioEntries.slice(0, 4);



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
            alt="TerraSu Living, by Gözde K."
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
            <CtaLink to="/complete-setup" variant="outline">
              {b.ctaSecondary}
            </CtaLink>
          </div>

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

      {/* SERVICES */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{copy.servicesEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{copy.servicesTitle}</h2>
          <p className="mt-4 text-muted-foreground">{copy.servicesLead}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.services.map((service) => (
            <Link
              key={service.title}
              to={linkTo(service.to)}
              {...hashProp(service.hash)}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-serif text-2xl leading-snug text-foreground">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-all group-hover:gap-3">
                {copy.readMore}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
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


      {/* FOUNDER MESSAGE */}
      <FounderMessage />

      {/* FOUNDER INTRO */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={founderImage}
              alt="Calm Porto workspace representing the TerraSu Living approach"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft">
              <p className="font-serif text-lg text-foreground">Gözde K.</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.base}</p>
            </div>
          </div>
          <div>
            <Eyebrow>{copy.founderEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{copy.founderTitle}</h2>
            <div className="mt-5 space-y-4">
              {copy.founderText.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <CtaLink to="/about" variant="outline">
                {t.nav.about}
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section className="bg-secondary/30">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{t.home.portfolioEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.portfolioTitle}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((entry) => (
            <article
              key={entry.key}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {entry.category[lang]}
              </p>
              <h3 className="mt-3 font-serif text-xl leading-snug text-foreground">
                {entry.title[lang]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.text[lang]}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/portfolio" variant="ghost">
            {t.nav.portfolio}
          </CtaLink>
        </div>
      </Section>

      {/* SOCIAL */}
      <Section>
        <div className="grid items-center gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>{INSTAGRAM_HANDLE}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{copy.socialTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{copy.socialText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5"
              >
                <Instagram className="h-4 w-4" />
                {copy.socialReels}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {copy.socialDm}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-7">
            <Youtube className="h-6 w-6 text-primary" />
            <p className="mt-4 font-serif text-xl text-foreground">{copy.socialYoutube}</p>
            {youtubeReady ? (
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                {copy.socialYoutube}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">{copy.socialYoutubePending}</p>
            )}
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section className="bg-secondary/30">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>{copy.packagesEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{copy.packagesTitle}</h2>
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
            <Eyebrow>{lang === "en" ? "Guides and updates" : "Rehber ve güncellemeler"}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {lang === "en"
                ? "Practical reading before you arrive"
                : "Gelmeden önce pratik okumalar"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {lang === "en"
                ? "The expat guide covers everyday life in Portugal, and the news page keeps service and procedure notes up to date."
                : "Expat rehberi Portekiz'de günlük yaşamı anlatır; haberler sayfası hizmet ve prosedür notlarını güncel tutar."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/expat-guide" variant="outline">
                {lang === "en" ? "Expat Guide" : "Expat Rehberi"}
              </CtaLink>
              <CtaLink to="/news" variant="ghost">
                {lang === "en" ? "News" : "Haberler"}
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
