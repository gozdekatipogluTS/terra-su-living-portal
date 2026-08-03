import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaLink, PageHero, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Portfolio | TerraSu Living Support Areas";
const description =
  "Selected support areas and example client journeys: relocation, property search, home preparation and curated Portugal lifestyle planning.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} lead={t.portfolio.lead} />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.portfolio.items.map((item, i) => (
            <article
              key={item.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="font-serif text-sm text-primary">0{i + 1}</span>
              <h2 className="mt-3 font-serif text-2xl text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
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
        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground">{t.portfolio.note}</p>
        <div className="mt-10">
          <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
        </div>
      </Section>
    </>
  );
}
