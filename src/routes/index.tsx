import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import heroImage from "@/assets/hero-portugal.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import logo from "@/assets/terrasu-logo.png";
import { ServiceCards } from "@/components/site/ServiceCards";
import { FounderMessage, PlanCta } from "@/components/site/premium";
import { CtaLink, Eyebrow, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "TerraSu Living | Portugal Relocation & Lifestyle Support";
const description =
  "Personalised consulting, relocation support, property guidance, professional cleaning and curated Portugal experiences — created and managed by Gözde K. in Porto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://terrasuliving.com/" },
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
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLanguage();

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
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background" />

        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <img
            src={logo}
            alt="TerraSu Living — by Gözde K."
            width={915}
            height={1024}
            className="h-40 w-auto object-contain drop-shadow-sm sm:h-56"
          />
          <p className="mt-6 text-xs uppercase tracking-[0.34em] text-foreground/70">
            {t.common.base}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground sm:text-6xl">
            {t.home.heroSlogan}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {t.home.heroSub}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CtaLink to="/services">{t.home.ctaServices}</CtaLink>
            <CtaLink to="/contact" variant="outline">
              {t.home.ctaContact}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <FounderMessage />

      {/* PERSONALISED PLAN CTA */}
      <PlanCta />

      {/* BRAND INTRO */}

      <Section className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.introTitle}</h2>
          <span className="divider-leaf mx-auto my-7 w-24" />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.home.introText}
          </p>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-secondary/30">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{t.home.servicesEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.servicesTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.home.servicesText}</p>
        </div>
        <ServiceCards />
        <div className="mt-10">
          <CtaLink to="/services" variant="ghost">
            {t.common.allServices}
          </CtaLink>
        </div>
      </Section>

      {/* WHY */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{t.home.whyEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.whyTitle}</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.why.map((item, i) => (
            <div key={item.title} className="border-t border-border pt-6">
              <span className="font-serif text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDER */}
      <Section className="bg-secondary/30">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={founderImage}
              alt="TerraSu Living founder workspace in Porto"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card px-5 py-3 shadow-soft">
              <p className="font-serif text-lg text-foreground">Gözde K.</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.common.base}
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>{t.home.founderEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.founderTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.home.founderText}</p>
            <div className="mt-8">
              <CtaLink to="/about" variant="outline">
                {t.nav.about}
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{t.home.portfolioEyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.home.portfolioTitle}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.portfolio.items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/portfolio" variant="ghost">
            {t.nav.portfolio}
          </CtaLink>
        </div>
      </Section>

      {/* CONTACT CTA */}
      <Section className="pb-4">
        <div className="rounded-[2rem] border border-border bg-gradient-to-br from-secondary/70 to-card px-8 py-16 text-center shadow-soft sm:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{t.home.ctaText}</p>
          <div className="mt-9 flex justify-center">
            <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
