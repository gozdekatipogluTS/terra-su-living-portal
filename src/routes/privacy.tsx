import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy | TerraSu Living";
const description =
  "How TerraSu Living collects, uses and protects the personal information you share with us.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/privacy" }],
  }),
  component: () => <LegalPage doc="privacy" />,
});
