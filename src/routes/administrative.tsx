import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/site/InfoPage";
import { images } from "@/lib/page-assets";
import { pages } from "@/i18n/pages";

const doc = pages.administrative.en;

export const Route = createFileRoute("/administrative")({
  head: () => ({
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.metaDescription },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/administrative" }],
  }),
  component: () => (
    <InfoPage pageKey="administrative" image={images.admin} imageAlt="Calm minimal public building interior with soft daylight" />
  ),
});
