import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Support | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions supplies construction workforce and services across residential, commercial, civil, infrastructure, fit-out and maintenance projects in NSW.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        h1="Built for how each sector of construction runs."
        description="Different sectors need different things from a workforce partner. Nexa supplies labour and services matched to the demands of each."
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 md:grid-cols-2">
          {industries.map((industry, index) => (
            <div key={industry.slug} className="relative bg-offwhite">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="font-display absolute top-4 left-4 text-4xl font-semibold text-offwhite/80 drop-shadow">
                  0{index + 1}
                </span>
              </div>
              <div className="p-9">
                <h2 className="font-display text-xl font-medium tracking-tight text-charcoal-900 uppercase">
                  {industry.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="concrete" className="py-16 md:py-20">
        <Eyebrow>A Note On Scope</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          Every sector, matched on requirement.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Whichever sector your project sits in, the process is the same: tell Nexa what the project needs, and
          Nexa works to match suitable workers or services against it.
        </p>
      </Section>

      <CTASection
        heading="Get workforce matched to your sector."
        description="Tell us about your project and industry and we'll work out the right workforce or services fit."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
