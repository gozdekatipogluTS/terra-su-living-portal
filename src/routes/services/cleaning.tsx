import { createFileRoute } from "@tanstack/react-router";

import cleaningImage from "@/assets/service-cleaning.jpg";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Cleaning & Property Preparation | TerraSu Living Porto";
const description =
  "Residential, business, Alojamento Local, move-in/move-out, deep cleaning and property preparation in Porto by TerraSu Living.";

export const Route = createFileRoute("/services/cleaning")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/cleaning" }],
  }),
  component: () => <ServiceDetail slug="cleaning" image={cleaningImage} />,
});
