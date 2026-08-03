import { createFileRoute } from "@tanstack/react-router";

import { ServiceCards } from "@/components/site/ServiceCards";
import { CtaLink, PageHero, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Services | TerraSu Living Portugal Support";
const description =
  "Consulting, property support, cleaning and Portugal experiences — four dedicated service areas from TerraSu Living in Porto.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services" }],
  }),
  component: Services,
});

function Services() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />
      <Section>
        <ServiceCards />
      </Section>
      <Section className="pt-0 pb-4">
        <div className="rounded-[2rem] border border-border bg-secondary/50 px-8 py-14 text-center sm:px-14">
          <h2 className="font-serif text-3xl text-foreground">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.home.ctaText}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
