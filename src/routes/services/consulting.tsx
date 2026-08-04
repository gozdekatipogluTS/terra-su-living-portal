import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, FileText } from "lucide-react";

import consultingImage from "@/assets/service-consulting.jpg";
import { servicePaths, serviceSlugs } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { AIMA_ARI_URL } from "@/i18n/premium";
import {
  DetailList,
  DetailNote,
  Expandable,
  ImageHero,
  PlanCta,
  usePremium,
} from "@/components/site/premium";
import { CtaLink, Disclaimer, Section, linkTo } from "@/components/site/ui";

const title = "Visa, Relocation & Administrative Support | TerraSu Living";
const description =
  "Personalised D2, D7, D8 and Golden Visa / ARI orientation, document preparation and end-to-end relocation support in Portugal by TerraSu Living.";

export const Route = createFileRoute("/services/consulting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/consulting" }],
  }),
  component: Consulting,
});

function Consulting() {
  const { t } = useLanguage();
  const p = usePremium();
  const c = p.consulting;
  const intro = p.serviceIntro.consulting;
  const others = serviceSlugs.filter((s) => s !== "consulting");

  return (
    <>
      <ImageHero
        image={consultingImage}
        alt={p.serviceHeroAlt.consulting}
        eyebrow={t.services.eyebrow}
        title={c.pageTitle}
        lead={t.service.consulting.subtitle}
        priority
      />

      {/* PAGE INTRO */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="flex justify-center pt-4">
            <CtaLink to="/contact">{intro.cta}</CtaLink>
          </div>
        </div>
      </Section>

      {/* VISA ROUTES */}
      <Section className="border-t border-border/60 bg-secondary/25">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">{c.visaEyebrow}</p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{c.visaTitle}</h2>
          <p className="mt-4 text-muted-foreground">{c.visaLead}</p>
        </div>

        <div className="space-y-5">
          {c.routes.map((route) => (
            <Expandable
              key={route.code}
              title={
                <>
                  <span className="text-primary">{route.code}</span>
                  <span className="text-foreground"> — {route.name}</span>
                </>
              }
              subtitle={route.description}
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <DetailList label={c.labels.suits} items={route.suits} />
                <DetailList label={c.labels.requirements} items={route.requirements} />
                <DetailList label={c.labels.documents} items={route.documents} />
                <DetailList label={c.labels.support} items={route.support} />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <DetailNote label={c.labels.referrals} text={route.referrals} />
                <DetailNote label={c.labels.notice} text={route.notice} />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <CtaLink to="/contact">{c.labels.request}</CtaLink>
                <span className="text-xs text-muted-foreground">
                  {c.labels.lastReviewed}: {c.lastReviewed}
                </span>
                {route.code.startsWith("Golden") && (
                  <a
                    href={AIMA_ARI_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary underline-offset-4 hover:underline"
                  >
                    {c.labels.officialSource}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Expandable>
          ))}
        </div>
      </Section>

      {/* DOCUMENT CHECKLIST */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <FileText className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground">
              {c.checklist.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.checklist.lead}</p>
          </div>
          <div>
            <Expandable title={c.checklist.title} subtitle={c.checklist.lead}>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {c.checklist.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <DetailNote label={t.common.disclaimer} text={c.checklist.notice} />
              </div>
            </Expandable>
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section className="border-t border-border/60 bg-secondary/25">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">{c.timeline.eyebrow}</p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{c.timeline.title}</h2>
          <p className="mt-4 text-muted-foreground">{c.timeline.note}</p>
        </div>
        <ol className="relative grid gap-8 border-l border-border pl-8 sm:grid-cols-2 sm:gap-10 sm:border-l-0 sm:pl-0">
          {c.timeline.steps.map((step, i) => (
            <li key={step.title} className="relative sm:border-t sm:border-border sm:pt-6">
              <span className="absolute -left-[2.15rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.65rem] font-medium text-primary-foreground sm:static sm:mb-3 sm:flex">
                {i + 1}
              </span>
              <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* LEGAL */}
      <Section className="pb-0">
        <div className="mx-auto max-w-3xl">
          <Disclaimer label={t.common.disclaimer} text={c.legalDisclaimer} />
        </div>
      </Section>

      <PlanCta label={intro.cta} />

      <Section className="border-t border-border/60 bg-secondary/30">
        <p className="eyebrow mb-6">{t.common.allServices}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s}
              to={linkTo(servicePaths[s])}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
            >
              <h3 className="font-serif text-xl text-foreground">{t.service[s].title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.service[s].preview}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
