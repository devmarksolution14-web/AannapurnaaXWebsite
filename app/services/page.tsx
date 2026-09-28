import type { Metadata } from "next";
import { InnerPage } from "../site";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesPage() {
  return <InnerPage slug="services" />;
}
