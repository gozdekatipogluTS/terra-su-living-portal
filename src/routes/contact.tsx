import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

import contactImage from "@/assets/contact-hero.jpg";
import { ImageHero, usePremium } from "@/components/site/premium";
import { Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Contact Gözde K. | TerraSu Living Porto";
const description =
  "Request a personalised service plan from TerraSu Living in Porto, Portugal: relocation, property support, cleaning and boutique tours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/contact" }],
  }),
  component: Contact,
});

const inputClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Contact() {
  const { t } = useLanguage();
  const p = usePremium();
  const f = p.contactForm;
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const line = (label: string, key: string) => `${label}: ${data.get(key) || "-"}`;
    const body = [
      line(f.fullName, "name"),
      line(f.email, "email"),
      line(f.phone, "phone"),
      line(f.country, "country"),
      line(f.language, "language"),
      line(f.service, "service"),
      line(f.people, "people"),
      line(f.destination, "destination"),
      line(f.startDate, "startDate"),
      line(f.budget, "budget"),
      line(f.supportLevel, "supportLevel"),
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
      <ImageHero
        image={contactImage}
        alt="Calm Lisbon doorway with pale azulejo tiles in morning light"
        eyebrow={t.contact.eyebrow}
        title={f.ctaTitle}
        lead={f.ctaText}
        priority
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={f.fullName}>
                <input name="name" required autoComplete="name" maxLength={100} className={inputClass} />
              </Field>
              <Field label={f.email}>
                <input name="email" type="email" required autoComplete="email" maxLength={255} className={inputClass} />
              </Field>
              <Field label={f.phone}>
                <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} />
              </Field>
              <Field label={f.country}>
                <input name="country" autoComplete="country-name" maxLength={80} className={inputClass} />
              </Field>
              <Field label={f.language}>
                <select name="language" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {f.select}
                  </option>
                  {f.languageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={f.service}>
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
              <Field label={f.people}>
                <input name="people" type="number" min={1} max={99} className={inputClass} />
              </Field>
              <Field label={f.destination}>
                <input name="destination" maxLength={120} className={inputClass} />
              </Field>
              <Field label={f.startDate}>
                <input name="startDate" type="month" className={inputClass} />
              </Field>
              <Field label={`${f.budget} (${f.budgetOptional})`}>
                <input name="budget" maxLength={80} className={inputClass} />
              </Field>
            </div>
            <Field label={f.supportLevel}>
              <select name="supportLevel" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  {f.select}
                </option>
                {f.supportOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={f.message}>
              <textarea name="message" required rows={6} maxLength={2000} className={inputClass} />
            </Field>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[var(--primary)]" />
              <span className="leading-relaxed">{f.consent}</span>
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              {f.submit}
            </button>
            {sent && (
              <p role="status" className="text-sm text-primary">
                {t.contact.sent}
              </p>
            )}
            <p className="text-xs leading-relaxed text-muted-foreground/90">{p.planCta.note}</p>
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
              <p className="mt-6 border-t border-border pt-5 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {p.founder.signature}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="eyebrow mb-4">WhatsApp</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.contact.responseText}
              </p>
              <a
                href="https://wa.me/351000000000"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.emailLabel === "Email" ? "Message on WhatsApp" : "WhatsApp'tan yazın"}
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="TerraSu Living, Porto, Portugal"
                src="https://www.google.com/maps?q=Porto,%20Portugal&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
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
