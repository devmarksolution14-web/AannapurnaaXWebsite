import type { MetadataRoute } from "next";
import { posts } from "./blog-content";
import { pageContent } from "./site";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://aannapurnaadental.com"; return [{ url: base, changeFrequency: "weekly", priority: 1 }, ...Object.keys(pageContent).map((s) => ({ url: `${base}/${s}`, changeFrequency: "monthly" as const, priority: s === "contact" ? .9 : .7 })), ...posts.map((post) => ({ url: `${base}/blogs/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: .7 }))]; }
