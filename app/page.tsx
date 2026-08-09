import type { Metadata } from "next";
import Link from "next/link";
import { Hero3D } from "@/components/three/Hero3D";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { ConstructionTimeline } from "@/components/sections/ConstructionTimeline";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { locationLinks } from "@/lib/content/nav";
import { company } from "@/lib/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nexa Construction Solutions | Construction Labour Hire & Services NSW",
  description:
    "Nexa Construction Solutions supplies construction labour hire, skilled trades and project support across Sydney, Western Sydney and NSW. Based in Rouse Hill.",
  path: "/",
});

const pathways = [
  {
    eyebrow: "For Employers",
    title: "Workforce Solutions",
    description:
      "Ongoing workforce planning and supply for construction businesses managing shifting site requirements.",
    href: "/workforce-solutions",
    cta: "Explore Workforce Solutions",
  },
  {
    eyebrow: "For Project Teams",
    title: "Construction Services",
    description: "Site and project support that keeps construction work moving when a project needs more than staffing.",
    href: "/services",
    cta: "View Construction Services",
  },
  {
    eyebrow: "For Workers",
    title: "Construction Workers",
    description: "Register your skills and availability and be considered for upcoming construction opportunities.",
    href: "/for-workers",
    cta: "Looking for Work?",
  },
];

export default function Home() {
  return (
    <>
      <Hero3D>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow className="text-amber-400">Nexa Construction Solutions</Eyebrow>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] font-semibold tracking-tight text-offwhite uppercase sm:text-6xl md:text-7xl">
              Building the people behind the project.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-concrete-300 md:text-xl">
              Construction workforce solutions and skilled construction services built around your project.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/request-workers" variant="primary">
                Request Workers →
              </Button>
              <Button href="/services" variant="ghost-dark">
                Our Services →
              </Button>
            </div>
            <Link
              href="/for-workers"
              className="focus-ring mt-6 inline-block text-sm font-medium tracking-wide text-concrete-300 uppercase underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-400"
            >
              Looking for work? →
            </Link>
          </div>
        </div>
      </Hero3D>

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>Where To Start</Eyebrow>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Two sides of construction. One workforce partner.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pathways.map((pathway, index) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="focus-ring group relative flex flex-col justify-between border border-charcoal-900/10 bg-white p-8 transition-colors hover:border-amber-500 md:p-9"
            >
              <div>
                <span className="font-display text-xs tracking-[0.2em] text-amber-600 uppercase">
                  {pathway.eyebrow}
                </span>
                <h3 className="font-display mt-4 text-2xl font-medium text-charcoal-900 uppercase">
                  {pathway.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{pathway.description}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-charcoal-900 uppercase group-hover:text-amber-600">
                {pathway.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="pointer-events-none absolute top-8 right-8 font-display text-5xl font-semibold text-charcoal-900/5">
                0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <PhotoBand
        src="/images/hero/workers-steel-frame.jpg"
        alt="Construction workers and a crane lifting steel reinforcement on an active building site"
        eyebrow="On Site"
        heading="Real projects. Real crews. Every day."
      />

      <Section tone="dark" className="py-20 md:py-28">
        <ConstructionTimeline tone="dark" />
      </Section>

      <Section tone="concrete" className="py-20 md:py-28">
        <Eyebrow>What We Provide</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Labour hire, skilled trades and construction services.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="focus-ring group flex flex-col justify-between bg-offwhite p-8 transition-colors hover:bg-white md:p-10"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-charcoal-900 uppercase">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{service.tagline}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-600 uppercase">
                Learn more
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-charcoal-900 uppercase">
              Built for how construction actually runs.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              From residential builds to civil and infrastructure works, Nexa supplies workforce matched to the
              demands of each sector.
            </p>
            <Button href="/industries" variant="secondary" className="mt-6">
              View Industries →
            </Button>
          </div>
          <div className="md:col-span-2">
            <ul className="grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2">
              {industries.map((industry) => (
                <li key={industry.slug} className="bg-offwhite p-6">
                  <p className="font-display text-sm font-semibold tracking-wide text-charcoal-900 uppercase">
                    {industry.name}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-700">{industry.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Service Areas</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-offwhite uppercase md:text-3xl">
              Based in Rouse Hill. Working across NSW.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-concrete-300">
              {company.legalName} operates from {company.addressFull}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {locationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring border border-white/20 px-4 py-2 text-sm font-medium tracking-wide text-concrete-200 uppercase transition-colors hover:border-amber-500 hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        heading="Get the right workforce on your next project."
        description="Tell us what your project needs and we'll work to match suitable workers and trades against it."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Get a Quote"
        secondaryHref="/contact"
      />
    </>
  );
}
