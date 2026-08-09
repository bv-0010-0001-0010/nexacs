import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { blogCategories, blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Construction Resources | Nexa Construction Solutions",
  description:
    "Practical resources on construction labour hire, workforce management, safety and skilled trades from Nexa Construction Solutions.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        h1="Construction workforce, explained."
        description="Practical articles on labour hire, workforce planning, safety and skilled trades — for builders, contractors and workers."
        breadcrumbs={[{ name: "Resources", path: "/resources" }]}
        primaryLabel="Read the Blog"
        primaryHref="/blog"
      />

      <Section tone="light" className="py-20 md:py-28">
        <Eyebrow>Categories</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-medium tracking-tight text-charcoal-900 uppercase md:text-4xl">
          Browse by topic
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="border border-charcoal-900/15 bg-offwhite px-4 py-2 text-xs font-semibold tracking-wide text-charcoal-800 uppercase"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="concrete" className="py-16 md:py-24">
        <Eyebrow>Latest Articles</Eyebrow>
        <h2 className="font-display mt-3 max-w-2xl text-2xl font-medium tracking-tight text-charcoal-900 uppercase md:text-3xl">
          From the Nexa blog
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-charcoal-900/10 bg-charcoal-900/10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="focus-ring group bg-offwhite p-7 hover:bg-white">
              <p className="font-display text-xs tracking-[0.2em] text-amber-600 uppercase">{post.category}</p>
              <h3 className="font-display mt-3 text-lg font-medium text-charcoal-900 uppercase">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{post.excerpt}</p>
              <span className="mt-5 inline-block text-sm font-semibold tracking-wide text-charcoal-900 uppercase group-hover:text-amber-600">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
