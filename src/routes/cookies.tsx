import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

const title = "Cookie Policy | TerraSu Living";
const description = "How this website uses minimal technical storage and no advertising cookies.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/cookies" }],
  }),
  component: () => <LegalPage doc="cookies" />,
});
