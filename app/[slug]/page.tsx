import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPage, pageContent } from "../site";

export function generateStaticParams() { return Object.keys(pageContent).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageContent[slug];
  return page ? { title: page.title, description: page.description, alternates: { canonical: `/${slug}` } } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pageContent[slug]) notFound();
  return <InnerPage slug={slug} />;
}
