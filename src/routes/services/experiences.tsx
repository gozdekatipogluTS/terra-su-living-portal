import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Portugal Experiences | TerraSu Living";
const description =
  "Portugal experiences and local coordination: Porto, Northern Portugal and Douro Valley planning with licensed independent providers.";

export const Route = createFileRoute("/services/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/experiences" }],
  }),
  component: () => <ServiceDetail slug="experiences" />,
});
