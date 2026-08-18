import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "../../blog-content";
import { BlogArticlePage } from "../../site";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.metaDescription, url: `/blogs/${post.slug}`, images: [{ url: post.image }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.metaDescription, images: [post.image] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogArticlePage post={post} />;
}
