import type { Metadata } from "next";
import { getPost } from "../../blog-content";
import { BlogArticlePage } from "../../site";

const post = getPost("dental-implants-questions")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.text,
  alternates: { canonical: `/blogs/${post.slug}` },
};

export default function Page() {
  return <BlogArticlePage post={post} />;
}
