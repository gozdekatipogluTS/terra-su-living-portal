import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Home, Sparkles, MapPinned } from "lucide-react";

import { servicePaths, serviceSlugs, type ServiceSlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { linkTo } from "@/components/site/ui";

export const serviceIcons: Record<ServiceSlug, typeof Compass> = {
  consulting: Compass,
  property: Home,
  cleaning: Sparkles,
  experiences: MapPinned,
};

export function ServiceCards() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {serviceSlugs.map((slug) => {
        const Icon = serviceIcons[slug];
        const service = t.service[slug];
        return (
          <Link
            key={slug}
            to={linkTo(servicePaths[slug])}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-foreground">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.preview}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
              {t.common.learnMore}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
