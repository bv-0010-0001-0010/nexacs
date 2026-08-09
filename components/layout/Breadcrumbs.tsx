import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <JsonLd data={breadcrumbJsonLd(full)} />
      <ol className={`flex flex-wrap items-center gap-2 text-xs tracking-wide uppercase ${tone === "dark" ? "text-concrete-300" : "text-steel-500"}`}>
        {full.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === full.length - 1 ? (
              <span className={tone === "dark" ? "text-offwhite" : "text-charcoal-900"} aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.path} className="focus-ring hover:text-amber-500">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
