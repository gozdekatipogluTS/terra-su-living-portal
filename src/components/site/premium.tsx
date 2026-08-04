import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { premium } from "@/i18n/premium";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Section, linkTo } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export function usePremium() {
  const { lang } = useLanguage();
  return premium[lang];
}

/** Full-width editorial hero with an image and readable overlay. */
export function ImageHero({
  image,
  alt,
  eyebrow,
  title,
  lead,
  priority = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  lead?: string;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        {...(priority ? {} : { loading: "lazy" as const })}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">{title}</h1>
        {lead && (
          <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">{lead}</p>
        )}
        <span className="divider-leaf mx-auto mt-10 block w-32" />
      </div>
    </section>
  );
}

/** Personal founder message block. */
export function FounderMessage() {
  const p = usePremium();
  return (
    <Section className="border-y border-border/60 bg-secondary/25">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">{p.founder.eyebrow}</p>
        <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          {p.founder.title}
        </h2>
        <span className="divider-leaf mx-auto my-8 block w-24" />
        <div className="space-y-5 text-left sm:text-center">
          {p.founder.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-8 font-serif text-xl text-foreground">Gözde K.</p>
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {p.founder.signature}
        </p>
      </div>
    </Section>
  );
}

/** Personalised enquiry CTA — no fixed pricing tables. */
export function PlanCta({ label }: { label?: string }) {
  const p = usePremium();
  return (
    <Section className="pb-4">
      <div className="rounded-[2rem] border border-border bg-gradient-to-br from-secondary/70 to-card px-8 py-16 text-center shadow-soft sm:px-16">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          {p.planCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{p.planCta.text}</p>
        <div className="mt-9 flex justify-center">
          <Link
            to={linkTo("/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            {label ?? p.planCta.button}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground/90">
          {p.planCta.note}
        </p>
      </div>
    </Section>
  );
}

/** Elegant expandable card. */
export function Expandable({
  title,
  subtitle,
  children,
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details
      className={cn(
        "group rounded-3xl border border-border bg-card px-7 py-6 shadow-soft transition-all duration-300 open:shadow-lift hover:border-primary/40",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
        <span>
          <span className="block font-serif text-xl text-foreground sm:text-2xl">{title}</span>
          {subtitle && (
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </span>
          )}
        </span>
        <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="mt-6 border-t border-border pt-6">{children}</div>
    </details>
  );
}

export function DetailList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DetailNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
