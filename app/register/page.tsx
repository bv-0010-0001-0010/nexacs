import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, Eyebrow } from "@/components/ui/Section";
import { FormShell } from "@/components/ui/form/FormShell";
import { TextField, SelectField, TextAreaField, FileField } from "@/components/ui/form/fields";
import { buildMetadata } from "@/lib/seo";
import { trades } from "@/lib/content/trades";

export const metadata: Metadata = buildMetadata({
  title: "Register With Nexa | Construction Jobs NSW | Nexa Construction Solutions",
  description:
    "Register as a construction worker with Nexa Construction Solutions. Share your trade, experience and availability for labour hire and skilled trades work across NSW.",
  path: "/register",
});

const tradeOptions = [...trades.map((trade) => trade.name), "Other"];
const experienceOptions = ["Under 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"];
const availabilityOptions = ["Immediately", "Within 2 weeks", "Within a month", "Flexible / Future opportunities"];

export default function RegisterPage() {
  return (
    <>
      <div className="bg-charcoal-950 text-offwhite">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Breadcrumbs items={[{ name: "Register", path: "/register" }]} tone="dark" />
          <div className="pt-2 pb-14 md:pb-16">
            <Eyebrow className="text-amber-400">Register With Nexa</Eyebrow>
            <h1 className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl">
              Join the Nexa workforce.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-concrete-300">
              Tell us about your trade, experience and availability. Registered workers are considered as suitable
              opportunities come up.
            </p>
          </div>
        </div>
      </div>

      <Section tone="light" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FormShell
            subject="New Worker Registration"
            submitLabel="Join the Nexa Workforce"
            successHeading="Your email app is opening"
            successBody="Your registration has been pre-filled in your email app. If you selected a resume, attach it there before hitting send to complete your registration."
            privacyNote="Submitting opens your email app with these details pre-filled. Nothing is sent until you send that email yourself — attach your resume there if you selected one."
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TextField id="fullName" label="Full Name" required autoComplete="name" />
              <TextField id="phone" label="Phone" type="tel" required autoComplete="tel" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TextField id="email" label="Email" type="email" required autoComplete="email" />
              <TextField id="location" label="Location" required placeholder="Suburb, NSW" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SelectField id="tradeSkill" label="Trade / Skill" required options={tradeOptions} />
              <SelectField id="experience" label="Experience" required options={experienceOptions} />
            </div>
            <SelectField id="availability" label="Availability" required options={availabilityOptions} />
            <FileField id="resume" label="Resume" accept=".pdf,.doc,.docx" />
            <TextAreaField
              id="additionalInformation"
              label="Additional Information"
              placeholder="Licences, tickets, or anything else relevant to your application"
            />
          </FormShell>
        </div>
      </Section>
    </>
  );
}
