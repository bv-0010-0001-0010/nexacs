import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import type { LocationContent } from "@/lib/content/locations";
import { services } from "@/lib/content/services";
import { locationLinks } from "@/lib/content/nav";

export function LocationLayout({ location }: { location: LocationContent }) {
  return (
    <>
      <div className="relative overflow-hidden bg-charcoal-950 text-offwhite">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Breadcrumbs items={[{ name: "Locations", path: "/locations" }, { name: location.name, path: `/locations/${location.slug}` }]} tone="dark" />
          <div className="max-w-3xl pt-4 pb-20 md:pb-24">
            <Eyebrow className="text-amber-400">Service Area</Eyebrow>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl">
              {location.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-concrete-300">{location.intro}</p>
          </div>
        </div>
      </div>

      <Section tone="light" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl space-y-14">
          {location.body.map((block) => (
            <div key={block.heading}>
              <h2 className="font-display text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
                {block.heading}
              </h2>
              {block.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-base leading-relaxed text-charcoal-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="concrete" className="py-16 md:py-20">
        <Eyebrow>Services In This Area</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          What Nexa provides here
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={service.href} className="focus-ring border border-charcoal-900/10 bg-offwhite p-6 hover:border-amber-500">
              <p className="font-display text-sm font-semibold uppercase">{service.shortName}</p>
              <p className="mt-2 text-xs text-charcoal-700">{service.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Other Service Areas</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-3">
          {locationLinks
            .filter((link) => link.href !== `/locations/${location.slug}`)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring border border-charcoal-900/15 px-4 py-2 text-sm font-medium tracking-wide text-charcoal-800 uppercase hover:border-amber-500 hover:text-amber-600"
              >
                {link.label}
              </Link>
            ))}
        </div>
      </Section>

      <CTASection
        heading={`Get workforce or services in ${location.name}.`}
        description="Tell us about your project and we'll work out the right workforce or services fit."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
