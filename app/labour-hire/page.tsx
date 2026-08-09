import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/content/services";

const service = getServiceBySlug("labour-hire")!;

export const metadata: Metadata = buildMetadata({
  title: "Construction Labour Hire Sydney & NSW | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions supplies construction labour hire across Sydney, Western Sydney and NSW — temporary workforce, general labour and skilled workers matched to your project.",
  path: "/labour-hire",
});

const offerings = [
  {
    title: "Temporary workforce",
    description: "Workers supplied for defined project phases, without the overhead of permanent hiring.",
  },
  {
    title: "Project workforce",
    description: "Crews scaled to match a project's programme — from a single call-out to a multi-month placement.",
  },
  {
    title: "General labour",
    description: "Site labour for material handling, setup, cleanup and general construction support.",
  },
  {
    title: "Skilled workers",
    description: "Trade-matched workers supplied where a project needs more than general labour.",
  },
  {
    title: "Flexible workforce requirements",
    description: "Workforce numbers that move with your schedule, not a fixed roster locked to a contract.",
  },
  {
    title: "Site support",
    description: "Workers briefed on site-specific requirements before deployment, ready to integrate with your crew.",
  },
];

export default function LabourHirePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Construction Labour Hire",
          description: service.description,
          path: "/labour-hire",
        })}
      />
      <PageHero
        eyebrow="Construction Labour Hire"
        h1="Construction labour hire built around your project."
        description="Temporary and project-based workforce, supplied when your site needs it — general labour through to skilled, trade-matched workers."
        breadcrumbs={[{ name: "Labour Hire", path: "/labour-hire" }]}
        show3D
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>What Nexa Supplies</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Workforce that matches how your project actually runs.
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
      </Section>

      <PhotoBand
        src="/images/labour-hire/workers-tying-rebar.jpg"
        alt="Construction labourers tying reinforcement steel on an active site"
      />

      <Section tone="concrete" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Who It&apos;s For</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
              Builders and contractors who need workforce, fast.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              Labour hire suits builders, contractors and project managers who need to bring on workers for a
              defined period — whether that&apos;s covering an unexpected gap, ramping up for a project phase, or
              supporting a schedule that shifts week to week.
            </p>
          </div>
          <div>
            <Eyebrow>Where We Work</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
              Sydney, Western Sydney and across NSW.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              Based in Rouse Hill, Nexa supplies labour hire across the Sydney metro area and wider NSW. See how
              this looks in{" "}
              <Link href="/locations/western-sydney" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
                Western Sydney
              </Link>{" "}
              or across{" "}
              <Link href="/locations/nsw" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
                NSW
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <PhotoBand
        src="/images/labour-hire/workers-site-stairs.jpg"
        alt="Construction workers moving through an active site"
        aspect="aspect-[16/9] md:aspect-[21/9]"
      />

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Related</Eyebrow>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
          Explore related services
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link href="/skilled-trades" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Skilled Trades</p>
            <p className="mt-2 text-xs text-charcoal-700">Trade-matched workers for specific project needs.</p>
          </Link>
          <Link href="/workforce-solutions" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Workforce Solutions</p>
            <p className="mt-2 text-xs text-charcoal-700">Ongoing workforce planning across multiple sites.</p>
          </Link>
          <Link href="/industries" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Industries</p>
            <p className="mt-2 text-xs text-charcoal-700">See the sectors Nexa supplies workforce into.</p>
          </Link>
        </div>
      </Section>

      <CTASection
        heading="Request labour hire for your project."
        description="Tell us your project location, worker type and timing, and we'll work to match suitable workers."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
