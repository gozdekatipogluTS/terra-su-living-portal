import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** TanStack Link `to` accepts literal route paths; our route constants are strings. */
export const linkTo = (path: string) => path as "/";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>}
        <span className="divider-leaf mx-auto mt-10 w-32" />
      </div>
    </section>
  );
}

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <Link
      to={linkTo(to)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        variant === "outline" &&
          "border border-foreground/20 bg-background/70 text-foreground backdrop-blur hover:border-primary hover:text-primary",
        variant === "ghost" && "text-primary hover:gap-3",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Disclaimer({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/50 p-6">
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

/** Spreadable hash prop that satisfies exactOptionalPropertyTypes. */
export const hashProp = (hash?: string) => (hash ? { hash } : {});
