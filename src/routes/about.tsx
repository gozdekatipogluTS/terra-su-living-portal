import { createFileRoute } from "@tanstack/react-router";

import aboutImage from "@/assets/about-hero.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import logo from "@/assets/terrasu-logo.png";
import { ImageHero } from "@/components/site/premium";
import { CtaLink, Eyebrow, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { brand } from "@/i18n/brand";
import { siteCopy } from "@/i18n/site";



const title = "Meet Gözde | Founder of TerraSu Living, Porto";
const description =
  "The founder story behind TerraSu Living: why Terra means earth, Su means water, and why every Portugal relocation plan is written from scratch.";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/about" }],
  }),
  component: About,
});

function About() {
  const { t, lang } = useLanguage();
  const copy = siteCopy[lang];
  const b = brand[lang];



  return (
    <>
      <ImageHero
        image={aboutImage}
        alt="Serene Porto interior with olive branches and warm terracotta walls"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        lead={t.about.lead}
        priority
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>{b.meetEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{b.meetTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">{b.meetLead}</p>
            <span className="divider-leaf my-8 block w-24" />
            <div className="space-y-5">
              {b.meetStory.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 font-serif text-lg italic text-primary">{t.common.signature}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
              <img
                src={logo}
                alt="TerraSu Living"
                loading="lazy"
                width={915}
                height={1024}
                className="mx-auto h-36 w-auto object-contain"
              />
              <span className="divider-leaf my-6 block" />
              <p className="text-sm text-muted-foreground">{t.about.baseTitle}</p>
              <p className="mt-1 font-serif text-xl text-foreground">{t.common.base}</p>
            </div>
            <div className="rounded-3xl border border-border bg-secondary/40 p-8">
              <h3 className="font-serif text-xl leading-snug text-foreground">{b.meaningTitle}</h3>
              <dl className="mt-6 space-y-5">
                {b.meaning.map((entry) => (
                  <div key={entry.term} className="border-l-2 border-primary/50 pl-4">
                    <dt className="font-serif text-2xl text-foreground">{entry.term}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {entry.text}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-foreground/80">
                {b.meaningNote}
              </p>
            </div>
          </div>
        </div>
      </Section>


      <Section className="bg-secondary/30">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{copy.founderEyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{copy.founderTitle}</h2>
            <div className="mt-5 space-y-4">
              {copy.founderText.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 font-serif text-lg italic text-primary">{t.common.signature}</p>
          </div>
          <img
            src={founderImage}
            alt="Calm workspace representing the TerraSu Living approach"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">{t.about.valuesTitle}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((value) => (
            <div key={value.title} className="border-t border-border pt-6">
              <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-4">
        <div className="rounded-[2rem] border border-border bg-secondary/50 px-8 py-14 sm:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_auto]">
            <div>
              <h2 className="font-serif text-3xl text-foreground">{t.about.baseTitle}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t.about.baseText}</p>
            </div>
            <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
