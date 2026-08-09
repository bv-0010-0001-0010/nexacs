import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "For Employers | Construction Workforce | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions helps builders and contractors find the right construction workforce. See how the employer journey works, then request workers for your project.",
  path: "/for-employers",
});

const steps = [
  {
    step: "01",
    title: "Tell us what you need",
    description: "Share your project location, worker type, headcount and timing through a quick request.",
  },
  {
    step: "02",
    title: "Discuss project requirements",
    description: "We confirm scope, site conditions and any specific skills or experience the role needs.",
  },
  {
    step: "03",
    title: "Identify suitable workers",
    description: "Workers are matched against the requirement — trade, experience and availability.",
  },
  {
    step: "04",
    title: "Prepare for deployment",
    description: "Matched workers are briefed on your site's requirements ahead of starting.",
  },
  {
    step: "05",
    title: "Support your project",
    description: "Nexa stays available as your requirements shift through the life of the project.",
  },
];

export default function ForEmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        h1="The right workforce for your next project."
        description="Builders and contractors use Nexa to fill workforce gaps quickly, without compromising on fit. Here's how the process works."
        breadcrumbs={[{ name: "For Employers", path: "/for-employers" }]}
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>The Employer Journey</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Five steps from request to deployment.
        </h2>
        <div className="mt-14 space-y-0 divide-y divide-charcoal-900/10 border-t border-b border-charcoal-900/10">
          {steps.map((item) => (
            <div key={item.step} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:items-center sm:gap-8">
              <span className="font-display text-3xl font-semibold text-amber-600 sm:col-span-2">{item.step}</span>
              <h3 className="font-display text-lg font-medium text-charcoal-900 uppercase sm:col-span-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-700 sm:col-span-7">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoBand
        src="/images/employers/site-review.jpg"
        alt="Site supervisor and worker reviewing a project checklist on site"
      />

      <Section tone="concrete" className="py-16 md:py-20">
        <Eyebrow>Why Employers Use Nexa</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          One request, matched properly.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Rather than sourcing labour and trades separately for every requirement, employers submit one request and
          Nexa works to identify suitable workers against it — whether that&apos;s general labour, a specific trade, or
          an ongoing workforce plan across multiple sites.
        </p>
      </Section>

      <CTASection
        heading="Ready to request workers?"
        description="Submit your project's workforce requirements and we'll work to match suitable people to it."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
