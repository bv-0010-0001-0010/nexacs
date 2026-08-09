type Tone = "light" | "dark" | "concrete";

const toneClasses: Record<Tone, string> = {
  light: "bg-offwhite text-charcoal-900",
  dark: "bg-charcoal-950 text-offwhite",
  concrete: "bg-concrete-100 text-charcoal-900",
};

export function Section({
  tone = "light",
  className = "",
  id,
  children,
}: {
  tone?: Tone;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-display text-sm tracking-[0.25em] uppercase text-amber-500 ${className}`}>
      {children}
    </p>
  );
}
