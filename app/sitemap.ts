import type { MetadataRoute } from "next";
import { company } from "@/lib/content/company";
import { locations } from "@/lib/content/locations";
import { blogPosts } from "@/lib/content/blog";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/labour-hire", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/skilled-trades", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/workforce-solutions", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.5, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/for-employers", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/request-workers", priority: 1, changeFrequency: "monthly" as const },
  { path: "/for-workers", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/register", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/locations", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.5, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.5, changeFrequency: "weekly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${company.siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationEntries = locations.map((location) => ({
    url: `${company.siteUrl}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${company.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...staticEntries, ...locationEntries, ...blogEntries];
}
