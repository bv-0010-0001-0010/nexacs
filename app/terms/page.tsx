import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/content/company";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Nexa Construction Solutions",
  description: "Terms and conditions for the Nexa Construction Solutions Pty Ltd website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        h1="Terms & Conditions."
        description="Terms governing the use of this website."
        breadcrumbs={[{ name: "Terms & Conditions", path: "/terms" }]}
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
      <Section tone="light" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-charcoal-700">
          <p>
            {company.legalName} (ABN {company.abn}) is finalising full terms and conditions for this website. This
            page will be updated with complete terms covering website use, enquiries submitted through it, and
            engagement of Nexa&apos;s workforce and construction services.
          </p>
          <p>
            This website is published by {company.legalName}, {company.addressFull}.
          </p>
        </div>
      </Section>
    </>
  );
}
