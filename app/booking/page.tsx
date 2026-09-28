import type { Metadata } from "next";
import { BookingPage } from "../site";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("booking");

export default function Page() {
  return <BookingPage />;
}
