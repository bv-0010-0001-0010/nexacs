import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/content/company";

export const metadata: Metadata = buildMetadata({
  title: "About Nexa Construction Solutions | Construction Workforce Partner NSW",
  description:
    "Nexa Construction Solutions Pty Ltd (ABN 13 701 158 072) is a construction workforce and services partner based in Rouse Hill NSW, supplying labour hire and skilled trades across NSW.",
  path: "/about",
});

const values = [
  {
    title: "Right person, right project",
    description: "Workforce is matched against what a project actually needs, not supplied as generic headcount.",
  },
  {
    title: "Direct communication",
    description: "Site supervisors and project teams deal directly with Nexa — no unnecessary layers in between.",
  },
  {
    title: "Reliability over volume",
    description: "A smaller number of well-matched placements is worth more than filling a roster for its own sake.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexa"
        h1="A construction workforce and services partner."
        description="Nexa Construction Solutions helps construction projects get the right people, skills and support — from temporary labour hire through to ongoing workforce planning."
        breadcrumbs={[{ name: "About", path: "/about" }]}
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <PhotoBand
        src="/images/about/site-leadership-briefing.jpg"
        alt="Site leadership discussing a project on an active construction site"
        aspect="aspect-[16/9] md:aspect-[21/9]"
      />

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
              What Nexa does
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-charcoal-700">
              {company.legalName} supplies construction labour hire, skilled trades and project support to builders,
              contractors and project teams. The business exists to solve a specific problem: construction projects
              need the right people on site at the right time, and finding them shouldn&apos;t slow a programme down.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-700">
              Nexa works across two related needs — supplying workforce to businesses that need labour and trades,
              and providing direct construction support to project teams that need more than staffing. Both are
              handled through the same point of contact.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="concrete" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
              Why Nexa exists
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-charcoal-700">
              To make sourcing construction workforce and project support straightforward — so builders spend less
              time chasing labour and more time delivering their projects.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>Values</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          How Nexa approaches workforce.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="bg-offwhite p-8">
              <h3 className="font-display text-base font-semibold tracking-wide text-charcoal-900 uppercase">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Eyebrow className="text-amber-400">Safety Philosophy</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-offwhite uppercase md:text-3xl">
              Safety is set by the site, upheld by the worker.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-concrete-300">
              Every site has its own safety requirements and induction process. Nexa&apos;s role is making sure workers
              arrive ready to follow them — briefed on expectations before deployment, and clear that site safety
              procedures take precedence from the moment they arrive.
            </p>
          </div>
          <div>
            <Eyebrow className="text-amber-400">Quality Philosophy</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-offwhite uppercase md:text-3xl">
              Quality means the right match, not just a filled gap.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-concrete-300">
              A placement is only successful if the worker actually fits the project&apos;s requirements. Nexa treats
              accurate matching — on trade, experience and availability — as the measure of a good outcome, not
              simply how quickly a gap gets filled.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Company Details</Eyebrow>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
          {company.legalName}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-charcoal-900 uppercase">ABN</dt>
            <dd className="mt-1 text-charcoal-700">{company.abn}</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal-900 uppercase">Business Address</dt>
            <dd className="mt-1 text-charcoal-700">{company.addressFull}</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal-900 uppercase">Category</dt>
            <dd className="mt-1 text-charcoal-700">{company.category}</dd>
          </div>
        </dl>
      </Section>

      <CTASection
        heading="Work with Nexa on your next project."
        description="Whether you need workforce or construction support, tell us what you're working on."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
