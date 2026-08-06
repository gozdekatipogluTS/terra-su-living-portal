import { createFileRoute } from "@tanstack/react-router";

import { ImageHero, PlanCta } from "@/components/site/premium";
import { Disclaimer, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LAST_REVIEWED, newsItems, siteCopy } from "@/i18n/site";
import { images } from "@/lib/page-assets";

const title = "News and Service Updates | TerraSu Living Portugal";
const description =
  "Visa and residence updates, administrative service notes, property information, business setup notes and upcoming boutique programmes from TerraSu Living in Porto.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/news" }],
  }),
  component: News,
});

function News() {
  const { lang } = useLanguage();
  const copy = siteCopy[lang];

  return (
    <>
      <ImageHero
        image={images.news}
        alt="Notebook and coffee beside a sunlit window in Porto"
        eyebrow={lang === "en" ? "News" : "Haberler"}
        title={lang === "en" ? "News and Service Updates" : "Haberler ve Hizmet Güncellemeleri"}
        lead={
          lang === "en"
            ? "Practical notes on visas, administrative procedures, property, business setup and upcoming programmes. Official requirements are always confirmed at source before a plan is prepared."
            : "Vize, idari işlemler, emlak, iş kurulumu ve yaklaşan programlar hakkında pratik notlar. Resmî koşullar, plan hazırlanmadan önce daima kaynağından teyit edilir."
        }
        priority
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {newsItems.map((item) => (
            <article
              key={item.title.en}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {item.category[lang]}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-foreground">
                {item.title[lang]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text[lang]}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {copy.legal.map((line) => (
            <Disclaimer key={line} label={copy.legalTitle} text={line} />
          ))}
          <p className="text-xs text-muted-foreground">
            {copy.lastReviewedLabel} {LAST_REVIEWED}
          </p>
        </div>
      </Section>

      <PlanCta />
    </>
  );
}
