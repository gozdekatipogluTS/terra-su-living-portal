import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Terms of Service | TerraSu Living";
const description =
  "The scope of TerraSu Living services and the boundaries of regulated services delivered by licensed providers.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/terms" }],
  }),
  component: () => <LegalPage doc="terms" />,
});
