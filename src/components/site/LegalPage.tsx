import { PageHero, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

export function LegalPage({ doc }: { doc: "privacy" | "cookies" | "terms" | "disclaimer" }) {
  const { t } = useLanguage();
  const page = t.legal[doc];

  return (
    <>
      <PageHero eyebrow={t.footer.legalTitle} title={page.title} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-5">
          {page.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <p className="pt-4 text-sm text-foreground/70">
            TerraSu Living — {t.common.base} · info@terrasuliving.com
          </p>
        </div>
      </Section>
    </>
  );
}
