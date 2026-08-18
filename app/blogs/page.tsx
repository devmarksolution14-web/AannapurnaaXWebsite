import type { Metadata } from "next";
import { InnerPage } from "../site";

export const metadata: Metadata = {
  title: "Dental Health Guides for Nepal",
  description: "Clinically reviewed guides on dental problems, oral cancer risks, whitening, clear aligners, treatment costs and dental implants in Nepal.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <InnerPage slug="blogs" />;
}
