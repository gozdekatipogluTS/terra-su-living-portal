import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/site/InfoPage";
import { images } from "@/lib/page-assets";
import { pages } from "@/i18n/pages";

const doc = pages.cleaning.en;

export const Route = createFileRoute("/property/cleaning")({
  head: () => ({
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.metaDescription },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/property/cleaning" }],
  }),
  component: () => (
    <InfoPage pageKey="cleaning" image={images.cleaning} imageAlt="Bright, freshly prepared apartment interior" />
  ),
});
