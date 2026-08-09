import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";

export function CTASection({
  eyebrow = "Ready when you are",
  heading,
  description,
  primaryLabel = "Request Workers",
  primaryHref = "/request-workers",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  heading: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal-950 py-20 text-offwhite md:py-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display mt-4 text-4xl leading-[1.05] font-medium tracking-tight uppercase md:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-concrete-300">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary">
            {primaryLabel} →
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="ghost-dark">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
