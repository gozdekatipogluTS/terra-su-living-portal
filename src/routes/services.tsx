import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import servicesImage from "@/assets/service-consulting.jpg";
import { ImageHero, PlanCta } from "@/components/site/premium";
import { Section, linkTo } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { siteCopy } from "@/i18n/site";

const title = "Services | TerraSu Living Portugal";
const description =
  "Personal relocation, administrative, home, business, transfer and boutique experience support across Portugal.";

export const Route = createFileRoute("/services")({
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
  const { lang } = useLanguage();
  const copy = siteCopy[lang];

  return (
    <>
      <ImageHero
        image={servicesImage}
        alt="Sunlit Portuguese desk with papers and a thoughtful relocation plan"
        eyebrow={lang === "en" ? "Services" : "Hizmetler"}
        title={
          lang === "en"
            ? "Personal Support for Your New Life in Portugal"
            : "Portekiz’de Yeni Hayatınız İçin Kişisel Destek"
        }
        lead={
          lang === "en"
            ? "Every journey is different. That is why my support does not begin with standard packages, but with your needs, priorities and the life you want to build in Portugal."
            : "Her yolculuk farklıdır. Bu nedenle sunduğum destek hazır paketlerden değil; ihtiyaçlarınızdan, önceliklerinizden ve Portekiz’de kurmak istediğiniz hayattan başlar."
        }
        priority
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {copy.services.map((service, index) => (
            <Link
              key={service.title}
              to={linkTo(service.to)}
              className="group flex min-h-56 flex-col justify-between border-t border-border px-1 py-7 transition-colors hover:border-primary"
            >
              <div>
                <p className="text-xs tracking-[0.22em] text-primary/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary transition-all group-hover:gap-3">
                {lang === "en" ? "Discover More" : "Daha Fazla"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <PlanCta />
    </>
  );
}
