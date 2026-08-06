import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ImageHero, PlanCta } from "@/components/site/premium";
import { Section, linkTo } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { portfolioEntries, siteCopy } from "@/i18n/site";
import { images } from "@/lib/page-assets";

const title = "Portfolio: Selected Service Areas | TerraSu Living";
const description =
  "Selected areas of support: relocation planning, administrative setup, rental and purchase coordination, home setup, cleaning, transfers, business research and boutique tours.";

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

const entryImages: Record<string, string> = {
  relocation: images.relocation,
  admin: images.admin,
  nifniss: images.nifniss,
  rental: images.rental,
  purchase: images.purchase,
  homesetup: images.homeSetup,
  cleaning: images.cleaning,
  transfer: images.transfer,
  business: images.business,
  groups: images.groups,
  tours: images.tours,
  expat: images.everyday,
};

function Portfolio() {
  const { lang } = useLanguage();
  const copy = siteCopy[lang];

  return (
    <>
      <ImageHero
        image={images.portfolio}
        alt="Editorial flat-lay of Portugal lifestyle details: azulejo tile, house key and olive branch"
        eyebrow={lang === "en" ? "Portfolio" : "Portföy"}
        title={
          lang === "en" ? "Selected Journeys and Service Areas" : "Seçili Süreçler ve Hizmet Alanları"
        }
        lead={
          lang === "en"
            ? "Each area below shows how a plan is prepared and coordinated. Client details are never published."
            : "Aşağıdaki her alan, bir planın nasıl hazırlandığını ve koordine edildiğini gösterir. Müşteri bilgileri hiçbir zaman yayımlanmaz."
        }
        priority
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioEntries.map((entry) => (
            <article
              key={entry.key}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={entryImages[entry.key] ?? images.portfolio}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1920}
                  height={1088}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-primary backdrop-blur">
                  {entry.status[lang]}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {entry.category[lang]}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-snug text-foreground">
                  {entry.title[lang]}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {entry.text[lang]}
                </p>
                {entry.to && (
                  <Link
                    to={linkTo(entry.to)}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
                  >
                    {copy.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground">{copy.combineNote}</p>
      </Section>

      <PlanCta />
    </>
  );
}
