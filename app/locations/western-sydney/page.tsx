import type { Metadata } from "next";
import { LocationLayout } from "@/components/sections/LocationLayout";
import { buildMetadata } from "@/lib/seo";
import { getLocationBySlug } from "@/lib/content/locations";

const location = getLocationBySlug("western-sydney")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: "/locations/western-sydney",
});

export default function WesternSydneyLocationPage() {
  return <LocationLayout location={location} />;
}
