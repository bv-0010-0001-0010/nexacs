import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { services } from "@/lib/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Construction Services NSW | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions provides construction support services across NSW — site support, project-based assistance and commercial and residential construction support.",
  path: "/services",
});

const offerings = [
  {
    title: "Construction support",
    description: "General project support scoped to what a build actually needs at each stage.",
  },
  {
    title: "Site services",
    description: "On-site support that helps a project team keep work moving day to day.",
  },
  {
    title: "Project-based services",
    description: "Support engaged for the length of a defined project or project phase.",
  },
  {
    title: "Commercial construction support",
    description: "Support for commercial builds, where programme certainty and coordination matter most.",
  },
  {
    title: "Residential construction support",
    description: "Support across residential builds, from single dwellings to multi-unit developments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Construction Services",
          description: "Construction support and project-based services across NSW.",
          path: "/services",
        })}
      />
      <PageHero
        eyebrow="Construction Services"
        h1="Construction services that keep projects moving."
        description="Where a project needs more than a workforce placement, Nexa provides construction support scoped to the job — site services through to project-based assistance."
        breadcrumbs={[{ name: "Construction Services", path: "/services" }]}
        show3D
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>What We Support</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Support scoped to your project, not a fixed package.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div key={offering.title} className="bg-offwhite p-7">
              <h3 className="font-display text-base font-semibold tracking-wide text-charcoal-900 uppercase">
                {offering.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{offering.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-steel-500">
          Specific capabilities are scoped per project — get in touch to discuss what your site needs.
        </p>
      </Section>

      <PhotoBand
        src="/images/services/commercial-structure.jpg"
        alt="Commercial concrete-frame building under construction against a clear sky"
      />

      <Section tone="concrete" className="py-20 md:py-28">
        <Eyebrow>How It Works With Labour Hire</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          Services and workforce, from the same point of contact.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Many projects need both people and support — a{" "}
          <Link href="/labour-hire" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
            labour hire
          </Link>{" "}
          requirement that grows into broader site support, or support work that needs additional{" "}
          <Link href="/skilled-trades" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
            skilled trades
          </Link>{" "}
          on top. Nexa covers both through the same relationship.
        </p>
      </Section>

      <PhotoBand
        src="/images/services/interior-fitout.jpg"
        alt="Interior building fit-out mid-construction with exposed framing"
        aspect="aspect-[16/9] md:aspect-[21/9]"
      />

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Related</Eyebrow>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
          Explore related services
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services
            .filter((service) => service.slug !== "construction-services")
            .map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500"
              >
                <p className="font-display text-sm font-semibold uppercase">{service.shortName}</p>
                <p className="mt-2 text-xs text-charcoal-700">{service.tagline}</p>
              </Link>
            ))}
        </div>
      </Section>

      <CTASection
        heading="Talk to us about your project's support needs."
        description="Tell us what your site needs and we'll work out whether that's workforce, services, or both."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Request Workers"
        secondaryHref="/request-workers"
      />
    </>
  );
}
