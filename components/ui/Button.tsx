import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-charcoal-950 hover:bg-amber-400 border border-amber-500",
  secondary:
    "bg-transparent text-charcoal-900 border border-charcoal-900 hover:bg-charcoal-900 hover:text-offwhite",
  "ghost-dark":
    "bg-transparent text-offwhite border border-white/30 hover:border-white hover:bg-white/10",
  "ghost-light":
    "bg-transparent text-charcoal-900 border border-charcoal-900/30 hover:border-charcoal-900",
};

const baseClasses =
  "focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
