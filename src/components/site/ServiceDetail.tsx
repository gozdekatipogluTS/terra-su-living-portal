import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { servicePaths, serviceSlugs, type ServiceSlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { serviceIcons } from "@/components/site/ServiceCards";
import { CtaLink, Disclaimer, Section, linkTo } from "@/components/site/ui";
import { ImageHero, PlanCta, usePremium } from "@/components/site/premium";

export function ServiceDetail({ slug, image }: { slug: ServiceSlug; image: string }) {
  const { t } = useLanguage();
  const p = usePremium();
  const service = t.service[slug];
  const intro = p.serviceIntro[slug];
  const Icon = serviceIcons[slug];
  const others = serviceSlugs.filter((s) => s !== slug);

  const extraGroups =
    slug === "property"
      ? p.property.sections
      : slug === "cleaning"
        ? [{ title: service.title, items: p.cleaning.items }]
        : slug === "experiences"
          ? [{ title: intro.title, items: p.tours.items }]
          : [];

  return (
    <>
      <ImageHero
        image={image}
        alt={p.serviceHeroAlt[slug]}
        eyebrow={t.services.eyebrow}
        title={service.title}
        lead={service.subtitle}
        priority
      />

      {/* PERSONAL INTRODUCTION */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-serif text-3xl leading-snug text-foreground">{intro.title}</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {p.founder.signature}
            </p>
          </div>
          <div className="space-y-5">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
            <div className="pt-2">
              <CtaLink to="/contact">{intro.cta}</CtaLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SCOPE OF SUPPORT */}
      <Section className="border-t border-border/60 bg-secondary/25">
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.items.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <h3 className="font-serif text-lg leading-snug text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* DETAILED SERVICE GROUPS */}
      {extraGroups.length > 0 && (
        <Section>
          <div className="grid gap-8 sm:grid-cols-2">
            {extraGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h2 className="font-serif text-2xl text-foreground">{group.title}</h2>
                <span className="divider-leaf my-6 block w-20" />
                <ul className="grid gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {service.disclaimer && (
            <div className="mt-12 max-w-3xl">
              <Disclaimer label={t.common.disclaimer} text={service.disclaimer} />
            </div>
          )}
        </Section>
      )}

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
