import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Disclaimer | TerraSu Living";
const description =
  "General information notice for TerraSu Living: guidance is for orientation only and regulated services are delivered by licensed independent professionals.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/disclaimer" }],
  }),
  component: () => <LegalPage doc="disclaimer" />,
});
