import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Contact Gözde K. | TerraSu Living Porto";
const description =
  "Get in touch with TerraSu Living in Porto, Portugal for consulting, property support, cleaning and Portugal experiences.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/contact" }],
  }),
  component: Contact,
});

const inputClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${t.contact.name}: ${data.get("name")}`,
      `${t.contact.email}: ${data.get("email")}`,
      `${t.contact.phone}: ${data.get("phone") || "-"}`,
      `${t.contact.service}: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:info@terrasuliving.com?subject=${encodeURIComponent(
      `TerraSu Living — ${data.get("service")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.contact.name}>
                <input name="name" required autoComplete="name" className={inputClass} />
              </Field>
              <Field label={t.contact.email}>
                <input name="email" type="email" required autoComplete="email" className={inputClass} />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={`${t.contact.phone} (${t.contact.phoneOptional})`}>
                <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
              </Field>
              <Field label={t.contact.service}>
                <select name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {t.contact.servicePlaceholder}
                  </option>
                  {t.contact.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label={t.contact.message}>
              <textarea name="message" required rows={6} className={inputClass} />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              {t.contact.submit}
            </button>
            {sent && (
              <p role="status" className="text-sm text-primary">
                {t.contact.sent}
              </p>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="eyebrow mb-5">{t.contact.detailsTitle}</p>
              <ul className="space-y-5 text-sm">
                <ContactRow icon={<Instagram className="h-4 w-4" />} label={t.contact.instagram}>
                  <a
                    href="https://instagram.com/ggozde_k"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    @ggozde_k
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail className="h-4 w-4" />} label={t.contact.emailLabel}>
                  <a
                    href="mailto:info@terrasuliving.com"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    info@terrasuliving.com
                  </a>
                </ContactRow>
                <ContactRow icon={<MapPin className="h-4 w-4" />} label={t.contact.location}>
                  <span className="text-foreground">{t.contact.locationValue}</span>
                </ContactRow>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-secondary/50 p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-card text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-serif text-xl text-foreground">{t.contact.responseTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.contact.responseText}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-primary">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        {children}
      </span>
    </li>
  );
}
