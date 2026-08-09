import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/content/company";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Nexa Construction Solutions",
  description: "Privacy policy for Nexa Construction Solutions Pty Ltd.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        h1="Privacy Policy."
        description="How Nexa Construction Solutions handles information submitted through this website."
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
      <Section tone="light" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-charcoal-700">
          <p>
            {company.legalName} (ABN {company.abn}) is finalising a full privacy policy for this website. This
            page will be updated with complete details on what information is collected, how it is used, and how
            it can be accessed or removed.
          </p>
          <p>
            In the meantime: the forms on this website are not yet connected to a backend or data storage system.
            No information submitted through them is currently transmitted, stored or processed. Contacting Nexa
            directly is the current way to reach the business.
          </p>
        </div>
      </Section>
    </>
  );
}
