import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { trades } from "@/lib/content/trades";

export const metadata: Metadata = buildMetadata({
  title: "Skilled Construction Workers & Trades | Nexa Construction Solutions",
  description:
    "Nexa Construction Solutions supplies skilled construction workers and trades — carpenters, bricklayers, painters, tilers, plasterers, welders and more — across NSW.",
  path: "/skilled-trades",
});

export default function SkilledTradesPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Skilled Trades & Construction Workers",
          description:
            "Trade-specific construction workers matched to project requirements, supplied across Sydney and NSW.",
          path: "/skilled-trades",
        })}
      />
      <PageHero
        eyebrow="Skilled Trades"
        h1="Skilled people for demanding construction projects."
        description="Beyond general labour, Nexa places tradespeople matched to your project's specific scope, experience requirements and timing."
        breadcrumbs={[{ name: "Skilled Trades", path: "/skilled-trades" }]}
        show3D
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>Trade Categories</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Trades Nexa supplies.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-700">
          Availability depends on current workforce and project requirements — get in touch to discuss the trade
          and experience level your project needs.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((trade) => (
            <div key={trade.name} className="bg-offwhite">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={trade.image}
                  alt={trade.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-base font-semibold tracking-wide text-charcoal-900 uppercase">
                  {trade.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{trade.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="concrete" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>How Matching Works</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
              Matched on trade, experience and availability.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              Rather than supplying generic labour against a trade request, Nexa reviews each requirement against
              worker experience and availability before referral — so the person sent to site fits the work
              that&apos;s actually needed.
            </p>
          </div>
          <div>
            <Eyebrow>For Project Teams</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
              Short-term gaps or longer project phases.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              Whether you need a single tradesperson to cover a short-term gap or a crew for an extended project
              phase, requirements are scoped directly with your site team before anyone is placed.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-16 md:py-20">
        <Eyebrow>Related</Eyebrow>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-charcoal-900 uppercase">
          Explore related services
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link href="/labour-hire" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Labour Hire</p>
            <p className="mt-2 text-xs text-charcoal-700">Temporary and general workforce for your project.</p>
          </Link>
          <Link href="/workforce-solutions" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">Workforce Solutions</p>
            <p className="mt-2 text-xs text-charcoal-700">Ongoing workforce planning across multiple sites.</p>
          </Link>
          <Link href="/for-workers" className="focus-ring border border-charcoal-900/10 p-6 hover:border-amber-500">
            <p className="font-display text-sm font-semibold uppercase">For Workers</p>
            <p className="mt-2 text-xs text-charcoal-700">Register your trade and availability with Nexa.</p>
          </Link>
        </div>
      </Section>

      <CTASection
        heading="Need a specific trade on site?"
        description="Tell us the trade, experience level and timing your project needs and we'll work to find a match."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
