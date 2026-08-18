import type { Metadata } from "next";
import { BookingPage } from "../site";

export const metadata: Metadata = {
  title: "Book a Dental Consultation",
  description: "Book a dental consultation with Aannapurnaa Dental Clinic in Kathmandu, Nepal.",
  alternates: { canonical: "/booking" },
};

export default function Page() {
  return <BookingPage />;
}
