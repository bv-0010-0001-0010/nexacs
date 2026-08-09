import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Construction Industry Insights | Nexa Construction Solutions Blog",
  description:
    "Articles on construction labour hire, workforce management, safety, skilled trades and the Australian construction industry from Nexa Construction Solutions.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        h1="Construction industry insights."
        description="Practical, no-fluff articles for builders, contractors and construction workers."
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
      />

      <Section tone="light" className="py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="focus-ring group flex flex-col border border-charcoal-900/10 bg-white p-7 hover:border-amber-500">
              <p className="font-display text-xs tracking-[0.2em] text-amber-600 uppercase">{post.category}</p>
              <h2 className="font-display mt-3 text-xl font-medium text-charcoal-900 uppercase">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-700">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-steel-500">
                <span>{new Date(post.publishedAt).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
