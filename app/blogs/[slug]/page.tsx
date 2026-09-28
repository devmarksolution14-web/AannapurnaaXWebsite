import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "../../blog-content";
import { siteName } from "../../seo";
import { BlogArticlePage } from "../../site";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { robots: { index: false } };
  const path = `/blogs/${post.slug}`;
  const published = new Date(post.date).toISOString();
  // Article titles are already ~60 characters, so skip the brand suffix to avoid truncation.
  return {
    title: { absolute: post.title },
    description: post.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: "article", siteName, locale: "en_NP", url: path, title: post.title, description: post.metaDescription, publishedTime: published, modifiedTime: published, section: post.category, images: [{ url: post.image, alt: post.title }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.metaDescription, images: [post.image] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogArticlePage post={post} />;
}
