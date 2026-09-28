import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPage } from "../site";
import { pageContent } from "../page-content";
import { pageMetadata } from "../seo";

export function generateStaticParams() { return Object.keys(pageContent).map((slug) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageContent[slug] ? pageMetadata(slug) : { robots: { index: false } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pageContent[slug]) notFound();
  return <InnerPage slug={slug} />;
}
