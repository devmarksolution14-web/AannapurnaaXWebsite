import type { Metadata } from "next";
import { InnerPage } from "../site";

export const metadata: Metadata = {
  title: "Clear guidance for healthier smiles",
  description: "Practical notes from our clinicians, written for patients at home and abroad.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <InnerPage slug="blogs" />;
}
