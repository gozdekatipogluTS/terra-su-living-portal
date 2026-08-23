import { createFileRoute } from "@tanstack/react-router";

import aboutImage from "@/assets/about-hero.jpg";
import founderImage from "@/assets/gözde- katipoğlu.jpeg";
import { ImageHero } from "@/components/site/premium";
import { CtaLink, Eyebrow, Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { brand } from "@/i18n/brand";

const title = "Meet Gözde Katipoğlu | Founder of TerraSu Living, Porto";
const description =
  "Meet Gözde Katipoğlu, founder of TerraSu Living, and discover the personal story and philosophy behind the boutique Portugal service.";

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
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <img
              src={founderImage}
              alt="Gözde Katipoğlu, founder of TerraSu Living"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
            <p className="mt-5 text-center font-serif text-lg italic text-primary">
              {t.common.signature}
            </p>
          </div>
          <div>
            <Eyebrow>{b.meetEyebrow}</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {b.meetTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">{b.meetLead}</p>
            <span className="divider-leaf my-8 block w-24" />
            <div className="space-y-5">
              {b.meetStory.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-10 max-w-xl font-serif text-2xl leading-snug text-primary sm:text-3xl">
              {lang === "en"
                ? "Not every path is already there. Sometimes we create it simply by choosing to walk."
                : "Bazı yollar hazır değildir. Bazen onları yürüdükçe kendimiz oluştururuz."}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div>
            <Eyebrow>{b.whyEyebrow}</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {b.storyTitle}
            </h2>
            <div className="mt-8 space-y-5">
              {b.story.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-10">
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {b.meaning.map((entry) => (
                <div key={entry.term} className="border-l-2 border-primary/50 pl-5">
                  <h3 className="font-serif text-3xl text-foreground">{entry.term}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{entry.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-serif text-xl italic text-primary">{b.meaningNote}</p>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <Eyebrow>{lang === "en" ? "What I support" : "Sunduğum destek"}</Eyebrow>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {b.supportedServices.map((service) => (
                <li key={service} className="border-b border-border/70 pb-3 text-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug text-foreground sm:text-3xl">
              {b.closingStatement}
            </p>
            <div className="mt-8">
              <CtaLink to="/contact">{t.home.ctaContact}</CtaLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
