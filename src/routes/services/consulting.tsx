import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Consulting | TerraSu Living Portugal";
const description =
  "NIF, NISS, bank account, relocation and residence document support in Portugal — personalised consulting by Gözde K.";

export const Route = createFileRoute("/services/consulting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/consulting" }],
  }),
  component: () => <ServiceDetail slug="consulting" />,
});
