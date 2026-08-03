import { Link } from "@tanstack/react-router";

import logo from "@/assets/terrasu-logo.png";
import { LanguageSwitcher } from "@/components/site/Header";
import { servicePaths, serviceSlugs } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { linkTo } from "@/components/site/ui";

export function Footer() {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="TerraSu Living"
            loading="lazy"
            width={915}
            height={1024}
            className="h-20 w-auto object-contain"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-foreground/80">{t.common.base}</p>
          <div className="mt-5">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.language}
            </p>
            <LanguageSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>

        <FooterColumn title={t.footer.quickLinks}>
          <FooterLink to={linkTo("/">{t.nav.home}</FooterLink>
          <FooterLink to={linkTo("/about">{t.nav.about}</FooterLink>
          <FooterLink to={linkTo("/services">{t.nav.services}</FooterLink>
          <FooterLink to={linkTo("/portfolio">{t.nav.portfolio}</FooterLink>
          <FooterLink to={linkTo("/contact">{t.nav.contact}</FooterLink>
        </FooterColumn>

        <FooterColumn title={t.footer.servicesTitle}>
          {serviceSlugs.map((slug) => (
            <FooterLink key={slug} to={linkTo(servicePaths[slug])}>
              {t.service[slug].title}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title={t.footer.legalTitle}>
          <FooterLink to={linkTo("/privacy">{t.footer.privacy}</FooterLink>
          <FooterLink to={linkTo("/cookies">{t.footer.cookies}</FooterLink>
          <FooterLink to={linkTo("/terms">{t.footer.terms}</FooterLink>
          <FooterLink to={linkTo("/contact">{t.nav.contact}</FooterLink>
        </FooterColumn>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} TerraSu Living. {t.footer.rights}
          </p>
          <p className="font-serif text-sm italic text-foreground/70">
            {lang === "tr" ? "Gözde K. tarafından kuruldu ve yönetiliyor" : "Created and managed by Gözde K."}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={linkTo(to)} className="text-sm text-foreground/80 transition-colors hover:text-primary">
        {children}
      </Link>
    </li>
  );
}
