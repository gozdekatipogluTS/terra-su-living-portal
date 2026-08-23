import { createFileRoute } from "@tanstack/react-router";
import { ImageHero, PlanCta } from "@/components/site/premium";
import { Section } from "@/components/site/ui";
import { useLanguage } from "@/i18n/LanguageProvider";
import { images } from "@/lib/page-assets";

const title = "Portfolio: Selected Service Areas | TerraSu Living";
const description =
  "Personal client experiences from TerraSu Living's relocation, home search and settlement support in Portugal.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { lang } = useLanguage();
  const testimonials =
    lang === "en"
      ? [
          {
            initials: "S.K.",
            text: "From our very first conversation with Gözde, what stood out most was her honesty. She explained everything clearly, including what could and could not be done. We never felt like just another client. Knowing we had someone we could genuinely trust beside us made all the difference.",
          },
          {
            initials: "A.D.",
            text: "We had no idea how challenging renting a home in Portugal could be. Gözde guided us through the property search and viewings, spoke with the landlord and followed the rental process with great care. In the end, we found not simply a property, but a home that genuinely suited us.",
          },
          {
            initials: "M.T.",
            text: "Gözde was with us from the very beginning of our visa journey until our arrival in Portugal. She followed our documents, questions and next steps carefully throughout the process. Most importantly, we never felt alone.",
          },
          {
            initials: "E.B.",
            text: "What impressed us most about working with Gözde was the combination of professionalism and genuine warmth. When you are starting a life in a new country, having someone who truly listens and looks for solutions gives you an incredible sense of confidence.",
          },
          {
            initials: "N.P.",
            text: "Moving to Portugal was a major and stressful decision for us. Once Gözde planned the process with us step by step, everything became much more manageable. Her support with the formalities and settling in helped us begin our new life here with much greater confidence.",
          },
          {
            initials: "C.Y.",
            text: "For us, the biggest difference was that Gözde’s support went beyond simply explaining what needed to be done — she was genuinely involved throughout the journey. She answered our questions patiently, listened to our needs and made every step feel personal. It was an honest, warm and reassuring experience.",
          },
        ]
      : [
          {
            initials: "S.K.",
            text: "İlk görüşmemizden itibaren Gözde Hanım’da en çok hissettiğimiz şey dürüstlüktü. Yapılabilecekleri de yapılamayacakları da açıkça anlattı. Süreç boyunca kendimizi hiçbir zaman sadece bir müşteri gibi hissetmedik. Güvenebileceğimiz birinin yanımızda olduğunu bilmek bizim için çok değerliydi.",
          },
          {
            initials: "A.D.",
            text: "Portekiz’de ev kiralama sürecinin bu kadar zorlayıcı olabileceğini bilmiyorduk. Gözde Hanım ev araştırmasından görüşmelere, ev sahibiyle iletişimden sözleşme sürecine kadar her aşamayı büyük bir özenle yönetti. Sonunda sadece bir ev değil, gerçekten bize uygun bir yaşam alanı bulduk.",
          },
          {
            initials: "M.T.",
            text: "Gözde Hanım vize sürecimizin en başından Portekiz’e gelişimize kadar her aşamada yanımızdaydı. Evraklarımızı, süreçteki sorularımızı ve sonrasında atmamız gereken adımları tek tek takip etti. En önemlisi, hiçbir aşamada yalnız olduğumuzu hissetmedik.",
          },
          {
            initials: "E.B.",
            text: "Gözde Hanım’ın profesyonelliğinin yanında son derece samimi ve ulaşılabilir olması bizi çok etkiledi. Yeni bir ülkede ne yapacağınızı bilmediğiniz anlarda karşınızda gerçekten sizi dinleyen ve çözüm üretmeye çalışan birinin olması büyük bir güven veriyor.",
          },
          {
            initials: "N.P.",
            text: "Portekiz’e taşınmak bizim için büyük ve stresli bir karardı. Gözde Hanım süreci bizimle adım adım planladığında her şey çok daha yönetilebilir hale geldi. Özellikle resmi işlemler ve yerleşim konusunda verdiği destek, burada yeni hayatımıza çok daha güvenli başlamamızı sağladı.",
          },
          {
            initials: "C.Y.",
            text: "Bence Gözde Hanım’ın en önemli farkı, sadece yapılması gereken işlemleri anlatması değil; sürecin gerçekten içinde olması. Sorularımıza sabırla cevap verdi, ihtiyaçlarımızı dikkatle dinledi ve her aşamada yanımızda olduğunu hissettirdi. Dürüst, samimi ve güven veren yaklaşımı sayesinde kendimizi hiç yalnız hissetmedik.",
          },
        ];

  return (
    <>
      <ImageHero
        image={images.portfolio}
        alt="Editorial flat-lay of Portugal lifestyle details: azulejo tile, house key and olive branch"
        eyebrow={lang === "en" ? "Client experiences" : "Danışan deneyimleri"}
        title={lang === "en" ? "Stories We’ve Been Part Of" : "Birlikte Başlayan Hikâyeler"}
        lead={
          lang === "en"
            ? "Every move, every family and every new beginning has its own story."
            : "Her taşınmanın, her ailenin ve her yeni başlangıcın hikâyesi farklı."
        }
        priority
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((entry) => (
            <article
              key={entry.initials}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="font-serif text-2xl text-primary">{entry.initials}</p>
              <p className="mt-8 flex-1 text-base leading-relaxed text-foreground/80">
                “{entry.text}”
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground">
          {lang === "en"
            ? "Client names are displayed as initials to protect their privacy."
            : "Müşteri gizliliğini korumak amacıyla isimler yalnızca baş harfleriyle gösterilmektedir."}
        </p>
      </Section>

      <PlanCta />
    </>
  );
}
