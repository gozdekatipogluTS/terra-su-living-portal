import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { Disclaimer, Section, linkTo } from "@/components/site/ui";
import { ImageHero, PlanCta } from "@/components/site/premium";
import { useLanguage } from "@/i18n/LanguageProvider";
import { pages } from "@/i18n/pages";
import { LAST_REVIEWED, siteCopy, type PageKey } from "@/i18n/site";

export function InfoPage({
  pageKey,
  image,
  imageAlt,
}: {
  pageKey: PageKey;
  image: string;
  imageAlt: string;
}) {
  const { lang } = useLanguage();
  const doc = pages[pageKey][lang];
  const copy = siteCopy[lang];

  return (
    <>
      <ImageHero
        image={image}
        alt={imageAlt}
        eyebrow={doc.eyebrow}
        title={doc.title}
        lead={doc.lead}
        priority
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5">
          {doc.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border/60 bg-secondary/25 pt-0 sm:pt-0">
        <div className="grid gap-8 pt-16 lg:grid-cols-2">
          {doc.sections.map((section) => (
            <article
              key={section.title}
              id={section.id}
              className="scroll-mt-28 rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <h2 className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                {section.title}
              </h2>
              {section.text && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
              )}
              {section.items && (
                <ul className="mt-6 space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4 text-xs leading-relaxed text-muted-foreground">
                  {section.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      {(doc.notices || doc.source) && (
        <Section className="pb-0">
          <div className="mx-auto max-w-3xl space-y-4">
            {doc.notices?.map((notice) => (
              <Disclaimer key={notice} label={copy.legalTitle} text={notice} />
            ))}
            <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span>
                {copy.lastReviewedLabel} {LAST_REVIEWED}
              </span>
              {doc.source && (
                <a
                  href={doc.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
                >
                  {copy.officialSource}: {doc.source.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{copy.combineNote}</p>
          </div>
        </Section>
      )}

      <PlanCta label={doc.cta} />

      <Section className="pt-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            to={linkTo("/complete-setup")}
            className="rounded-full border border-border px-5 py-2.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "en" ? "Complete Portugal Setup Support" : "Baştan Sona Kurulum Desteği"}
          </Link>
          <Link
            to={linkTo("/portfolio")}
            className="rounded-full border border-border px-5 py-2.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "en" ? "Selected service areas" : "Seçili hizmet alanları"}
          </Link>
        </div>
      </Section>
    </>
  );
}
