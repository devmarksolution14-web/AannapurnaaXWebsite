import type { MetadataRoute } from "next";
import { posts } from "./blog-content";
import { pageContent } from "./page-content";
import { siteUrl } from "./seo";

// Served at https://aannapurnaadental.com/sitemap.xml and referenced from robots.txt.
// Submit that URL in Google Search Console and Bing Webmaster Tools.
const pagePriority: Record<string, number> = { services: .9, contact: .9, dentists: .8, about: .8, blogs: .7, "case-stories": .6 };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const latestPost = new Date(Math.max(...posts.map((post) => new Date(post.date).getTime())));
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1, images: [`${siteUrl}/og-share.jpg`] },
    { url: `${siteUrl}/booking`, lastModified: now, changeFrequency: "monthly", priority: .9 },
    ...Object.keys(pageContent).map((slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: slug === "blogs" ? latestPost : now,
      changeFrequency: slug === "blogs" ? "weekly" as const : "monthly" as const,
      priority: pagePriority[slug] ?? .7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: .7,
      images: [`${siteUrl}${post.image}`],
    })),
  ];
}
