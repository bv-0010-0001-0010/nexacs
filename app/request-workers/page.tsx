import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, Eyebrow } from "@/components/ui/Section";
import { FormShell } from "@/components/ui/form/FormShell";
import { TextField, SelectField, TextAreaField } from "@/components/ui/form/fields";
import { buildMetadata } from "@/lib/seo";
import { trades } from "@/lib/content/trades";

export const metadata: Metadata = buildMetadata({
  title: "Request Construction Workers | Nexa Construction Solutions",
  description:
    "Request construction labour hire or skilled trades for your project. Tell Nexa Construction Solutions your requirements and we'll work to match suitable workers.",
  path: "/request-workers",
});

const workerTypes = [...trades.map((trade) => trade.name), "Not Sure — Advise Me"];

const reassurances = [
  "No obligation to proceed after submitting a request.",
  "Details are used only to assess and respond to your request.",
  "A project team member reviews every submission directly.",
];

export default function RequestWorkersPage() {
  return (
    <>
      <div className="bg-charcoal-950 text-offwhite">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Breadcrumbs items={[{ name: "Request Workers", path: "/request-workers" }]} tone="dark" />
          <div className="pt-2 pb-14 md:pb-16">
            <Eyebrow className="text-amber-400">Request Workers</Eyebrow>
            <h1 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl">
              Tell us what your project needs.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-concrete-300">
              Share your workforce requirements below and Nexa will work to match suitable workers to your project.
            </p>
          </div>
        </div>
      </div>

      <Section tone="light" className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-5">
          <div className="md:col-span-3">
            <FormShell
              subject="New Workforce Request"
              submitLabel="Submit Workforce Request"
              successHeading="Your email app is opening"
              successBody="Your workforce request has been pre-filled in your email app — review it and hit send there to complete your request."
              privacyNote="Submitting opens your email app with these details pre-filled. Nothing is sent until you send that email yourself."
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField id="fullName" label="Full Name" required autoComplete="name" />
                <TextField id="companyName" label="Company Name" required autoComplete="organization" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField id="email" label="Email" type="email" required autoComplete="email" />
                <TextField id="phone" label="Phone" type="tel" required autoComplete="tel" />
              </div>
              <TextField id="projectLocation" label="Project Location" required placeholder="Suburb, NSW" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <SelectField id="workerType" label="Worker Type" required options={workerTypes} />
                <TextField id="numberOfWorkers" label="Number of Workers" type="number" min={1} required />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField id="startDate" label="Start Date" type="date" required />
                <TextField id="projectDuration" label="Project Duration" placeholder="e.g. 6 weeks" required />
              </div>
              <TextAreaField
                id="requiredSkills"
                label="Required Skills"
                placeholder="Specific skills, tickets or experience needed"
              />
              <TextAreaField id="additionalRequirements" label="Additional Requirements" />
            </FormShell>
          </div>

          <div className="md:col-span-2">
            <div className="border border-charcoal-900/10 bg-concrete-100 p-7">
              <h2 className="font-display text-sm font-semibold tracking-wide text-charcoal-900 uppercase">
                Before you submit
              </h2>
              <ul className="mt-4 space-y-3">
                {reassurances.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal-700">
                    <span aria-hidden="true" className="mt-0.5 text-amber-600">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border border-charcoal-900/10 p-7">
              <h2 className="font-display text-sm font-semibold tracking-wide text-charcoal-900 uppercase">
                Prefer to talk it through first?
              </h2>
              <p className="mt-3 text-sm text-charcoal-700">
                Visit the{" "}
                <a href="/contact" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
                  Contact page
                </a>{" "}
                to reach Nexa directly, or read more about{" "}
                <a href="/for-employers" className="focus-ring underline decoration-amber-500 underline-offset-2 hover:text-amber-600">
                  how the employer journey works
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
