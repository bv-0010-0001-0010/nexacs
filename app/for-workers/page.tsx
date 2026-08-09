import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { trades } from "@/lib/content/trades";

export const metadata: Metadata = buildMetadata({
  title: "Construction Jobs & Careers | For Construction Workers | Nexa",
  description:
    "Register with Nexa Construction Solutions for construction work across Sydney, Western Sydney and NSW. General labour and skilled trades opportunities.",
  path: "/for-workers",
});

const points = [
  {
    title: "Registering with Nexa",
    description: "A short registration covers your trade or skill, experience, availability and location.",
  },
  {
    title: "Construction opportunities",
    description: "Registered workers are considered for suitable general labour and skilled trade placements as they come up.",
  },
  {
    title: "Worker requirements",
    description: "Relevant experience and, where the role needs it, current licences or tickets for the work.",
  },
  {
    title: "Availability",
    description: "Let us know your availability so you're only considered for placements that actually fit.",
  },
  {
    title: "Skills and experience",
    description: "The more detail you provide, the better a placement can be matched to what you actually do.",
  },
];

export default function ForWorkersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Construction Workers"
        h1="Your next construction opportunity starts here."
        description="Nexa places general labour and skilled trades across Sydney, Western Sydney and NSW. Register your skills and availability to be considered for upcoming work."
        breadcrumbs={[{ name: "For Workers", path: "/for-workers" }]}
        primaryLabel="Register With Nexa"
        primaryHref="/register"
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>How Registration Works</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          What to expect when you register.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="bg-offwhite p-8">
              <h3 className="font-display text-base font-semibold tracking-wide text-charcoal-900 uppercase">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoBand
        src="/images/workers/worker-portrait.jpg"
        alt="Confident construction worker holding a hard hat"
        eyebrow="For Workers"
        heading="Your next opportunity starts here."
      />

      <Section tone="concrete" className="py-16 md:py-20">
        <Eyebrow>Trades &amp; Roles</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          Roles Nexa places workers into.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {["General Construction Workers", ...trades.filter((t) => t.name !== "General Construction Workers").map((t) => t.name)].map(
            (label) => (
              <span
                key={label}
                className="border border-charcoal-900/15 bg-offwhite px-4 py-2 text-xs font-semibold tracking-wide text-charcoal-800 uppercase"
              >
                {label}
              </span>
            ),
          )}
        </div>
      </Section>

      <CTASection
        heading="Register with Nexa today."
        description="Share your trade, experience and availability and be considered for upcoming construction opportunities."
        primaryLabel="Register With Nexa"
        primaryHref="/register"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
