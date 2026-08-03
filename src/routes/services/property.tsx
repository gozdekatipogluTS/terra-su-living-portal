import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Property Support | TerraSu Living Portugal";
const description =
  "Property search and relocation assistance in Portugal: rental and purchase support, viewing coordination and local area guidance.";

export const Route = createFileRoute("/services/property")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/property" }],
  }),
  component: () => <ServiceDetail slug="property" />,
});
