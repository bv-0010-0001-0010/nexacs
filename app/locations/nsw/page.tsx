import type { Metadata } from "next";
import { LocationLayout } from "@/components/sections/LocationLayout";
import { buildMetadata } from "@/lib/seo";
import { getLocationBySlug } from "@/lib/content/locations";

const location = getLocationBySlug("nsw")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: "/locations/nsw",
});

export default function NswLocationPage() {
  return <LocationLayout location={location} />;
}
