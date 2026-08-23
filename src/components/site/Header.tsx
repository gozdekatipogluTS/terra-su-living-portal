import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/terrasu-logo.png";
import { linkTo } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { siteCopy } from "@/i18n/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const copy = siteCopy[lang];
  const menuItems = [
    { to: "/", label: { en: "Home", tr: "Ana Sayfa" } },
    { to: "/about", label: { en: "About", tr: "Hakkında" } },
    { to: "/services", label: { en: "Services", tr: "Hizmetler" } },
    {
      to: "/tours",
      label: { en: "Private Boutique Experiences", tr: "Özel Butik Deneyimler" },
    },
    { to: "/portfolio", label: { en: "Client Experiences", tr: "Danışan Deneyimleri" } },
    { to: "/contact", label: { en: "Contact", tr: "İletişim" } },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function handleOutsideClick(event: MouseEvent) {
      const target = event.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

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
            alt="TerraSu Living, by Gözde Katipoğlu"
            width={915}
            height={1024}
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="hidden text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground 2xl:block">
            {copy.base}
          </span>
        </Link>

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
            ref={menuButtonRef}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-overlay fixed inset-x-0 bottom-0 top-20">
          <div
            ref={drawerRef}
            onMouseLeave={() => setOpen(false)}
            className="menu-drawer absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col border-l border-border px-7 pb-8 pt-9 shadow-lift sm:px-10 sm:pt-10"
          >
            <nav className="flex flex-col" aria-label={t.nav.menu}>
              {menuItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={linkTo(item.to)}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-2.5 whitespace-nowrap border-b border-border/60 py-3.5 font-serif text-lg text-foreground/85 transition-colors hover:text-primary sm:gap-3 sm:py-4 sm:text-xl"
                >
                  <span className="font-sans text-[0.65rem] tracking-[0.16em] text-primary/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label[lang]}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-6">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {lang === "en" ? "Language" : "Dil"}
              </span>
              <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
          </div>
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
