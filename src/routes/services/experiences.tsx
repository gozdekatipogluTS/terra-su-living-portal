import { createFileRoute } from "@tanstack/react-router";

import toursImage from "@/assets/service-tours.jpg";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Tailor-Made Boutique Tours | TerraSu Living";
const description =
  "Private and small-group journeys in Portugal, Porto, Douro Valley and Turkey–Portugal programmes, designed individually by TerraSu Living.";

export const Route = createFileRoute("/services/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/experiences" }],
  }),
  component: () => <ServiceDetail slug="experiences" image={toursImage} />,
});
