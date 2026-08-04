import { createFileRoute } from "@tanstack/react-router";

import propertyImage from "@/assets/service-property.jpg";
import { ServiceDetail } from "@/components/site/ServiceDetail";

const title = "Property Support | TerraSu Living Portugal";
const description =
  "Personalised rental and purchase property search in Portugal: needs assessment, location research, viewing coordination and document organisation.";

export const Route = createFileRoute("/services/property")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://terrasuliving.com/services/property" }],
  }),
  component: () => <ServiceDetail slug="property" image={propertyImage} />,
});
