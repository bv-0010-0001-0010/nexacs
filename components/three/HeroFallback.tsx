import Image from "next/image";

export function HeroFallback() {
  return (
    <div className="absolute inset-0 bg-charcoal-950">
      <Image
        src="/images/hero/workers-silhouette-sunset.jpg"
        alt="Construction workers silhouetted against the sky on an active building site"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/50 to-charcoal-950" />
      <div className="blueprint-grid-dark absolute inset-0 opacity-20" />
    </div>
  );
}
