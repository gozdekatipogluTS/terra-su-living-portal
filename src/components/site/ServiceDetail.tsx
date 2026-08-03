import { Check } from "lucide-react";

import { servicePaths, serviceSlugs, type ServiceSlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { serviceIcons } from "@/components/site/ServiceCards";
import { CtaLink, Disclaimer, PageHero, Section } from "@/components/site/ui";
import { Link } from "@tanstack/react-router";
import { linkTo } from "@/components/site/ui";

export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const { t } = useLanguage();
  const service = t.service[slug];
  const Icon = serviceIcons[slug];
  const others = serviceSlugs.filter((s) => s !== slug);

  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={service.title} lead={service.subtitle} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">{service.intro}</p>
            <div className="mt-8">
              <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {service.items.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h2 className="font-serif text-lg leading-snug text-foreground">{item.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {service.disclaimer && (
          <div className="mt-14 max-w-3xl">
            <Disclaimer label={t.common.disclaimer} text={service.disclaimer} />
          </div>
        )}
      </Section>

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
