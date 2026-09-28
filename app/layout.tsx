import type { Metadata } from "next";
import "./globals.css";
import "./interactive.css";
import { clinicSchema, homeDescription, homeTitle, shareImage, siteName, siteUrl, websiteSchema } from "./seo";

// Favicons come from app/icon.png and app/apple-icon.png (square, white background) —
// Next.js emits the <link rel="icon"> tags for them automatically.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: `%s | ${siteName}` },
  description: homeDescription,
  applicationName: siteName,
  keywords: ["best dental clinic in Nepal", "best dentist in Kathmandu", "dental clinic Kathmandu", "dentist Nepal", "dental implants Nepal", "root canal treatment Kathmandu", "braces and clear aligners Nepal", "cosmetic dentistry Nepal", "Nepalese diaspora dental care", "Aannapurnaa Dental"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "health",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_NP", siteName, url: "/", title: homeTitle, description: homeDescription, images: [shareImage] },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription, images: [shareImage.url] },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([clinicSchema, websiteSchema]) }} />
    {children}
  </body></html>;
}
