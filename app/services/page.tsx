import type { Metadata } from "next";
import { InnerPage } from "../site";

export const metadata: Metadata = {
  title: "Care for every kind of smile",
  description: "From prevention to complex restoration, every treatment begins with listening.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <InnerPage slug="services" />;
}
