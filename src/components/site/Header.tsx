import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/terrasu-logo.png";
import { useLanguage } from "@/i18n/LanguageProvider";
import { servicePaths } from "@/i18n/content";
import { cn } from "@/lib/utils";
import { linkTo } from "@/components/site/ui";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to={linkTo("/")} className="shrink-0" aria-label={t.common.brand} onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="TerraSu Living — by Gözde K."
            width={915}
            height={1024}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.menu}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={linkTo(link.to)}
              className="text-sm tracking-wide text-foreground/75 transition-colors hover:text-primary [&.active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <Link
            to={linkTo("/contact")}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            {t.nav.contact}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8" aria-label={t.nav.menu}>
            {[...links, { to: "/contact", label: t.nav.contact }].map((link) => (
              <Link
                key={link.to}
                to={linkTo(link.to)}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm text-foreground/80 last:border-0 [&.active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-x-5 gap-y-1 py-3">
              {Object.entries(servicePaths).map(([slug, path]) => (
                <Link
                  key={path}
                  to={linkTo(path)}
                  onClick={() => setOpen(false)}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {t.service[slug as keyof typeof t.service].title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function LanguageSwitcher({
  lang,
  setLang,
  className,
}: {
  lang: "en" | "tr";
  setLang: (l: "en" | "tr") => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs tracking-widest",
        className,
      )}
    >
      {(["en", "tr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
