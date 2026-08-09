import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/content/locations";

export const metadata: Metadata = buildMetadata({
  title: "Construction Service Areas | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions supplies construction labour hire, skilled trades and services across Sydney, Western Sydney, Rouse Hill and NSW.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        h1="Where Nexa operates."
        description="Based in Rouse Hill, Nexa supplies construction workforce and services across Sydney and NSW."
        breadcrumbs={[{ name: "Locations", path: "/locations" }]}
      />

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="focus-ring group bg-offwhite p-9 hover:bg-white"
            >
              <h2 className="font-display text-xl font-medium tracking-tight text-charcoal-900 uppercase">
                {location.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{location.intro}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-600 uppercase">
                View {location.name} →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
