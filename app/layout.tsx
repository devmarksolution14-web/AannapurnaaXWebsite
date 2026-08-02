import type { Metadata } from "next";
import "./globals.css";
import "./interactive.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aannapurnaadental.com"),
  title: { default: "Aannapurnaa Dental Clinic | Trusted Dental Care in Nepal", template: "%s | Aannapurnaa Dental Clinic" },
  description: "Modern, compassionate dental care in Nepal for local families and the Nepalese diaspora. Book implants, cosmetic dentistry, orthodontics and preventive care.",
  keywords: ["dentist Nepal", "dental clinic Kathmandu", "Nepalese diaspora dental care", "dental implants Nepal", "cosmetic dentistry Nepal"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_NP", siteName: "Aannapurnaa Dental Clinic", title: "Care that feels like home", description: "Thoughtful, modern dentistry in Nepal—planned clearly for patients at home and abroad.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aannapurnaa Dental Clinic" }] },
  twitter: { card: "summary_large_image", title: "Aannapurnaa Dental Clinic", description: "Modern dental care in Nepal, with a distinctly human touch.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="icon" type="image/png" href="/Small_Logo_annapurna.png?v=2" /><link rel="shortcut icon" href="/Small_Logo_annapurna.png?v=2" /><link rel="apple-touch-icon" href="/Small_Logo_annapurna.png?v=2" /></head><body>{children}</body></html>;
}
