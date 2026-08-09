import Image from "next/image";
import { Eyebrow } from "@/components/ui/Section";

export function PhotoBand({
  src,
  alt,
  eyebrow,
  heading,
  description,
  aspect = "aspect-[16/9] md:aspect-[21/9]",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  aspect?: string;
}) {
  return (
    <section className={`relative w-full overflow-hidden bg-charcoal-950 ${aspect}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
      {(heading || description) && (
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-10 md:pb-12">
          <div className="mx-auto max-w-7xl">
            {eyebrow ? <Eyebrow className="text-amber-400">{eyebrow}</Eyebrow> : null}
            {heading ? (
              <h2 className="font-display mt-2 max-w-2xl text-2xl font-medium tracking-tight text-offwhite uppercase md:text-4xl">
                {heading}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 max-w-xl text-sm text-concrete-300 md:text-base">{description}</p>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
