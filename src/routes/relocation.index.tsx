import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/site/InfoPage";
import { images } from "@/lib/page-assets";
import { pages } from "@/i18n/pages";

const doc = pages.relocation.en;

export const Route = createFileRoute("/relocation/")({
  head: () => ({
    meta: [
      { title: doc.metaTitle },
      { name: "description", content: doc.metaDescription },
      { property: "og:title", content: doc.metaTitle },
      { property: "og:description", content: doc.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/relocation" }],
  }),
  component: () => (
    <InfoPage pageKey="relocation" image={images.relocation} imageAlt="Passports, a notebook and travel documents arranged on a warm desk" />
  ),
});
