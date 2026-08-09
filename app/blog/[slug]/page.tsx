import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { blogPosts, getPostBySlug } from "@/lib/content/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | Nexa Construction Solutions`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          datePublished: post.publishedAt,
        })}
      />
      <div className="bg-charcoal-950 text-offwhite">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} tone="dark" />
          <div className="pt-4 pb-16 md:pb-20">
            <Eyebrow className="text-amber-400">{post.category}</Eyebrow>
            <h1 className="font-display mt-4 text-3xl leading-[1.1] font-semibold tracking-tight uppercase sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-concrete-300">
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </div>

      <Section tone="light" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          {post.body.map((block, index) => (
            <div key={index}>
              {block.heading ? (
                <h2 className="font-display mb-3 text-xl font-medium tracking-tight text-charcoal-900 uppercase md:text-2xl">
                  {block.heading}
                </h2>
              ) : null}
              {block.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mt-3 text-base leading-relaxed text-charcoal-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Need workforce for your project?"
        description="Tell us what your project needs and we'll work to match suitable workers."
        primaryLabel="Request Workers"
        primaryHref="/request-workers"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
