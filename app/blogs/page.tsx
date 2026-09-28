import type { Metadata } from "next";
import { InnerPage } from "../site";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("blogs");

export default function BlogsPage() {
  return <InnerPage slug="blogs" />;
}
