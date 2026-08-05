import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/terrasu-logo.png";
import { linkTo } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { navigation, siteCopy } from "@/i18n/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const copy = siteCopy[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          to={linkTo("/")}
          className="flex shrink-0 items-center gap-3"
          aria-label={t.common.brand}
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="TerraSu Living, by Gözde K."
            width={915}
            height={1024}
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="hidden text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground xl:block">
            {copy.base}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label={t.nav.menu}>
          {navigation.slice(1, 9).map((group) => (
            <div key={group.to} className="group relative">
              <Link
                to={linkTo(group.to)}
                className="inline-flex items-center gap-1 py-2 text-[0.8rem] tracking-wide text-foreground/75 transition-colors hover:text-primary [&.active]:text-primary"
              >
                {group.label[lang]}
                {group.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {group.children && (
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {group.children.map((child) => (
                    <Link
                      key={child.label.en}
                      to={linkTo(child.to)}
                      hash={child.hash}
                      className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {child.label[lang]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border/60 bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8" aria-label={t.nav.menu}>
            {navigation.map((group) => (
              <div key={group.to + group.label.en} className="border-b border-border/50 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    to={linkTo(group.to)}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3.5 text-sm text-foreground/85 [&.active]:text-primary"
                  >
                    {group.label[lang]}
                  </Link>
                  {group.children && (
                    <button
                      type="button"
                      aria-label={group.label[lang]}
                      aria-expanded={expanded === group.label.en}
                      onClick={() =>
                        setExpanded((cur) => (cur === group.label.en ? null : group.label.en))
                      }
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          expanded === group.label.en && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>
                {group.children && expanded === group.label.en && (
                  <div className="flex flex-col pb-3 pl-4">
                    {group.children.map((child) => (
                      <Link
                        key={child.label.en}
                        to={linkTo(child.to)}
                        hash={child.hash}
                        onClick={() => setOpen(false)}
                        className="border-l border-border py-2.5 pl-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
