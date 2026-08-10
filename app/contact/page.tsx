import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, Eyebrow } from "@/components/ui/Section";
import { FormShell } from "@/components/ui/form/FormShell";
import { TextField, SelectField, TextAreaField } from "@/components/ui/form/fields";
import { buildMetadata } from "@/lib/seo";
import { company, contactPlaceholders, phoneHref } from "@/lib/content/company";

export const metadata: Metadata = buildMetadata({
  title: "Contact Nexa Construction Solutions | Construction Services NSW",
  description:
    "Contact Nexa Construction Solutions to discuss a project, workforce or employment enquiry. Based at 589 Withers Road, Rouse Hill NSW 2155.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-charcoal-950 text-offwhite">
        <Image
          src="/images/contact/sydney-harbour.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/80 to-charcoal-950" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} tone="dark" />
          <div className="pt-4 pb-16 md:pb-20">
            <Eyebrow className="text-amber-400">Contact</Eyebrow>
            <h1 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl">
              Let&apos;s talk about your project.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-concrete-300">
              Whether it&apos;s a project enquiry, a workforce request, or you&apos;re looking for construction
              work yourself, tell us what you need.
            </p>
          </div>
        </div>
      </div>

      <Section tone="light" className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="font-display text-xl font-semibold tracking-wide text-charcoal-900 uppercase">
              Send an enquiry
            </h2>
            <div className="mt-6">
              <FormShell
                subject="New Website Enquiry"
                submitLabel="Send Enquiry"
                successHeading="Your email app is opening"
                successBody="Your enquiry has been pre-filled in your email app — review it and hit send there to complete it."
                privacyNote="Submitting opens your email app with these details pre-filled. Nothing is sent until you send that email yourself."
              >
                <SelectField
                  id="enquiryType"
                  label="Enquiry Type"
                  required
                  options={["Project Enquiry", "Workforce / Employer Enquiry", "Worker Enquiry", "General Enquiry"]}
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <TextField id="fullName" label="Full Name" required autoComplete="name" />
                  <TextField id="company" label="Company (if applicable)" autoComplete="organization" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <TextField id="email" label="Email" type="email" required autoComplete="email" />
                  <TextField id="phone" label="Phone" type="tel" autoComplete="tel" />
                </div>
                <TextAreaField id="message" label="Message" required placeholder="Tell us about your project or enquiry" />
              </FormShell>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-display text-xl font-semibold tracking-wide text-charcoal-900 uppercase">
              Business details
            </h2>
            <address className="mt-6 not-italic text-sm leading-relaxed text-charcoal-700">
              {company.legalName}
              <br />
              ABN: {company.abn}
              <br />
              {company.address.street}
              <br />
              {company.address.suburb} {company.address.state} {company.address.postcode}
              <br />
              {company.address.country}
            </address>
            <p className="mt-4 text-sm text-steel-500">
              {company.email ? (
                <a href={`mailto:${company.email}`} className="focus-ring hover:text-amber-600">
                  {company.email}
                </a>
              ) : (
                contactPlaceholders.email
              )}
              <br />
              {company.phone && phoneHref ? (
                <a href={phoneHref} className="focus-ring hover:text-amber-600">
                  {company.phone}
                </a>
              ) : (
                contactPlaceholders.phone
              )}
            </p>

            <div className="mt-8 aspect-video w-full overflow-hidden border border-charcoal-900/10">
              <iframe
                title={`Map showing ${company.address.suburb} ${company.address.state}, near Nexa Construction Solutions`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=150.8899%2C-33.7010%2C150.9299%2C-33.6610&layer=mapnik&marker=-33.6810%2C150.9099"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs text-steel-500">
              Approximate area shown — Rouse Hill, NSW 2155.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
