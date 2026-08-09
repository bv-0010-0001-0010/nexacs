import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ConstructionTimeline } from "@/components/sections/ConstructionTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Construction Workforce Solutions NSW | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions provides ongoing construction workforce planning and supply across NSW — built for businesses managing multiple sites and shifting requirements.",
  path: "/workforce-solutions",
});

const capabilities = [
  {
    title: "Ongoing workforce planning",
    description: "Workforce mapped against your project pipeline, not sourced fresh for every requirement.",
  },
  {
    title: "Scaling up or down",
    description: "Crew numbers that move with project phases, without the overhead of permanent headcount.",
  },
  {
    title: "One point of contact",
    description: "A single relationship covering workforce requirements across multiple active sites.",
  },
  {
    title: "Built around your schedule",
    description: "Supply structured around your delivery programme, not a fixed roster or rigid contract.",
  },
];

export default function WorkforceSolutionsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Construction Workforce Solutions",
          description:
            "Ongoing construction workforce planning and supply for businesses managing multiple sites across NSW.",
          path: "/workforce-solutions",
        })}
      />
      <PageHero
        eyebrow="Workforce Solutions"
        h1="Workforce planning built around how your project runs."
        description="For businesses managing multiple sites or fluctuating labour needs, Nexa acts as an ongoing workforce partner rather than a one-off supplier."
        breadcrumbs={[{ name: "Workforce Solutions", path: "/workforce-solutions" }]}
        show3D
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>What This Covers</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          A workforce partner, not just a labour supplier.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title} className="bg-offwhite p-8">
              <h3 className="font-display text-base font-semibold tracking-wide text-charcoal-900 uppercase">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoBand
        src="/images/workforce/crew-aerial.jpg"
        alt="A crew of construction workers standing together on an active site slab, viewed from above"
        eyebrow="People Power Projects"
        heading="One crew. Every site."
      />

      <Section tone="dark" className="py-20 md:py-28">
        <ConstructionTimeline tone="dark" />
      </Section>

      <Section tone="concrete" className="py-20 md:py-28">
        <Eyebrow>Who It&apos;s For</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          Businesses running more than one site at a time.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Workforce Solutions suits builders and contractors managing several active projects, where sourcing
          labour separately for each site adds coordination cost. A single workforce relationship across all
          active sites reduces that overhead and gives project managers a consistent point of contact.
        </p>
      </Section>

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Related</Eyebrow>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
          Explore related services
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link href="/labour-hire" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Labour Hire</p>
            <p className="mt-2 text-xs text-charcoal-700">Temporary and project-based workforce.</p>
          </Link>
          <Link href="/for-employers" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">For Employers</p>
            <p className="mt-2 text-xs text-charcoal-700">See how the employer journey works with Nexa.</p>
          </Link>
          <Link href="/industries" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Industries</p>
            <p className="mt-2 text-xs text-charcoal-700">See the sectors Nexa supplies workforce into.</p>
          </Link>
        </div>
      </Section>

      <CTASection
        heading="Build an ongoing workforce plan with Nexa."
        description="Tell us about your project pipeline and current workforce challenges — we'll work out how Nexa can help."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
