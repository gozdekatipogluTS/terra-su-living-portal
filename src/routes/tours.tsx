import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/site/InfoPage";
import { images } from "@/lib/page-assets";
import { pages } from "@/i18n/pages";

const doc = pages.tours.en;

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.metaDescription },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/tours" }],
  }),
  component: () => (
    <InfoPage pageKey="tours" image={images.tours} imageAlt="Terrace table overlooking the Douro Valley vineyards" />
  ),
});
