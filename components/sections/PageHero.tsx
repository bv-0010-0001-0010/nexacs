import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AbstractScene } from "@/components/three/AbstractScene";

export function PageHero({
  eyebrow,
  h1,
  description,
  breadcrumbs,
  primaryLabel = "Request Workers",
  primaryHref = "/request-workers",
  secondaryLabel,
  secondaryHref,
  show3D = false,
}: {
  eyebrow: string;
  h1: string;
  description: string;
  breadcrumbs: Crumb[];
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  show3D?: boolean;
}) {
  return (
    <div className="relative overflow-hidden bg-charcoal-950 text-offwhite">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Breadcrumbs items={breadcrumbs} tone="dark" />
        <div className="grid grid-cols-1 items-center gap-10 pt-6 pb-20 md:grid-cols-5 md:pt-10 md:pb-28">
          <div className="md:col-span-3">
            <Eyebrow className="text-amber-400">{eyebrow}</Eyebrow>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl md:text-6xl">
              {h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-concrete-300">{description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
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
          {show3D ? (
            <div className="hidden md:col-span-2 md:block">
              <AbstractScene className="aspect-square w-full border border-white/10" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
