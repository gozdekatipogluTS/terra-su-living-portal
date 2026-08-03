import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Cleaning Services | TerraSu Living Porto";
const description =
  "Residential, business, Alojamento Local, move-in/move-out and deep cleaning services in Porto by TerraSu Living.";

export const Route = createFileRoute("/services/cleaning")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/cleaning" }],
  }),
  component: () => <ServiceDetail slug="cleaning" />,
});
