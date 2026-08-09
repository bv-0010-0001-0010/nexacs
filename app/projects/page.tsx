import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Construction Projects | Nexa Construction Solutions",
  description:
    "Project case studies from Nexa Construction Solutions — workforce and construction services delivered across NSW. Portfolio content is added as projects are completed.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        h1="Where Nexa's workforce and services show up."
        description="This portfolio is built out as projects are completed. Each entry will cover the service provided, location and project type."
        breadcrumbs={[{ name: "Projects", path: "/projects" }]}
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>Project Categories</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Case studies, added as projects complete.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Nexa doesn&apos;t publish project details until work is complete and confirmed with the client. The
          categories below reflect where project case studies will appear.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.slug}
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-charcoal-950 p-6"
            >
              <Image
                src={industry.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-40 grayscale transition-all duration-300 group-hover:opacity-55 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />
              <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-25 transition-opacity group-hover:opacity-40" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(232,135,30,0.18),transparent_60%)]" />
              <p className="relative font-display text-xs tracking-[0.2em] text-amber-400 uppercase">
                {industry.name}
              </p>
              <p className="relative mt-2 text-sm text-concrete-300">Case study coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Have a project you'd like support on?"
        description="Tell us about the project and we'll work out the right workforce or services fit."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
