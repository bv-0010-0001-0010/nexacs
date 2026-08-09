import type { Metadata } from "next";
import { LocationLayout } from "@/components/sections/LocationLayout";
import { buildMetadata } from "@/lib/seo";
import { getLocationBySlug } from "@/lib/content/locations";

const location = getLocationBySlug("rouse-hill")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: "/locations/rouse-hill",
});

export default function RouseHillLocationPage() {
  return <LocationLayout location={location} />;
}
