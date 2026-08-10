import type { MetadataRoute } from "next";
import { company } from "@/lib/content/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description: "Construction labour hire, skilled trades and workforce solutions across NSW.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    icons: [
      {
        src: "/icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
