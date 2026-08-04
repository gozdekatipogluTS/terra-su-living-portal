import { createFileRoute } from "@tanstack/react-router";

import portfolioImage from "@/assets/portfolio-hero.jpg";
import { ImageHero, PlanCta, usePremium } from "@/components/site/premium";
import { Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Selected Journeys & Service Areas | TerraSu Living";
const description =
  "Selected support areas: relocation planning, administrative setup, property search and preparation, private group design and Turkey–Portugal programmes.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useLanguage();
  const p = usePremium();

  return (
    <>
      <ImageHero
        image={portfolioImage}
        alt="Editorial flat-lay of Portugal lifestyle details: azulejo tile, house key, map of Porto and olive branch"
        eyebrow={t.portfolio.eyebrow}
        title={p.portfolio.title}
        lead={p.portfolio.lead}
        priority
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.portfolio.entries.map((entry, i) => (
            <article
              key={entry.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={portfolioImage}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1920}
                  height={1088}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: `${(i * 17) % 100}% 50%` }}
                />
                <span className="absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-primary backdrop-blur">
                  {entry.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {entry.category}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-snug text-foreground">
                  {entry.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {entry.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground">{t.portfolio.note}</p>
      </Section>

      <PlanCta />
    </>
  );
}
