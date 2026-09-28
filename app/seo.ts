import type { Metadata } from "next";

// Single source of truth for search/social metadata. Titles stay under ~60 characters
// once the " | Aannapurnaa Dental Clinic" template is appended, and descriptions sit in
// the 140–160 character range Google shows in full on desktop results.
export const siteUrl = "https://aannapurnaadental.com";
export const siteName = "Aannapurnaa Dental Clinic";
export const shareImage = { url: "/og-share.jpg", width: 1200, height: 630, alt: "Aannapurnaa Dental Clinic – Best Dental Clinic in Nepal" };

export const homeTitle = "Dental Implants & Orthodontics in Kathmandu | Aannapurnaa Dental";
export const homeDescription = "Best dental clinic in Nepal for dental implants, root canals, braces, clear aligners and smile design. Specialist dentists in Samakhusi, Kathmandu. Book today.";

export const pageSeo: Record<string, { title: string; description: string }> = {
  about: {
    title: "About Our Dental Clinic in Kathmandu",
    description: "Meet Aannapurnaa Dental Clinic in Samakhusi, Kathmandu — specialist-led dentistry, modern equipment and clear treatment plans for families and the Nepalese diaspora.",
  },
  services: {
    title: "Dental Services in Kathmandu, Nepal",
    description: "Dental implants, root canal treatment, braces, clear aligners, gum care, oral surgery, whitening, kids' dentistry and online consultations at Aannapurnaa Dental, Kathmandu.",
  },
  dentists: {
    title: "Our Dentists & Dental Specialists",
    description: "Meet Dr. Mahesh Regmi and our team of periodontists, implantologists, orthodontists, endodontists and oral surgeons caring for patients at Aannapurnaa Dental, Kathmandu.",
  },
  "case-stories": {
    title: "Patient Case Stories & Smile Results",
    description: "Real patient journeys from Aannapurnaa Dental — dental implants, clear aligners and family dental care planned for patients in Nepal and those visiting from abroad.",
  },
  blogs: {
    title: "Dental Health Guides for Nepal",
    description: "Clinically reviewed guides on dental problems, oral cancer risks, whitening, clear aligners, treatment costs and dental implants in Nepal from Aannapurnaa Dental.",
  },
  contact: {
    title: "Contact a Dentist in Kathmandu",
    description: "Contact Aannapurnaa Dental Clinic, Samakhusi-26, Kathmandu. Call +977 01-4976952 or WhatsApp +977 9768595100. Open Sunday–Friday, 9:00–19:00.",
  },
  booking: {
    title: "Book a Dental Appointment in Kathmandu",
    description: "Book a dental consultation at Aannapurnaa Dental Clinic, Kathmandu — in person or online. Our care coordinator will confirm your appointment within one working day.",
  },
};

export function pageMetadata(slug: string): Metadata {
  const seo = pageSeo[slug];
  if (!seo) return {};
  const path = `/${slug}`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName, locale: "en_NP", url: path, title: `${seo.title} | ${siteName}`, description: seo.description, images: [shareImage] },
    twitter: { card: "summary_large_image", title: `${seo.title} | ${siteName}`, description: seo.description, images: [shareImage.url] },
  };
}

// LocalBusiness (Dentist) structured data — powers the knowledge panel, map pack and
// rich results. Details mirror the footer/contact information on the site.
export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#clinic`,
  name: siteName,
  alternateName: ["Aannapurnaa Dental", "अन्नपूर्ण डेन्टल"],
  description: homeDescription,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}${shareImage.url}`,
  telephone: "+977-1-4976952",
  email: "aannapurnaa.dental@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Samakhusi-26, Townplanning Chowk",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  areaServed: [{ "@type": "Country", name: "Nepal" }, { "@type": "City", name: "Kathmandu" }],
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  }],
  contactPoint: [{ "@type": "ContactPoint", telephone: "+977-9768595100", contactType: "customer service", availableLanguage: ["English", "Nepali"] }],
  founder: { "@type": "Person", name: "Dr. Mahesh Regmi", jobTitle: "Founder & Senior Consultant, Periodontics & Oral Implantology" },
  medicalSpecialty: "Dentistry",
  knowsAbout: ["Dental implants", "Periodontics", "Orthodontics", "Clear aligners", "Root canal treatment", "Oral and maxillofacial surgery", "Prosthodontics", "Pediatric dentistry", "Teeth whitening", "Oral medicine and radiology"],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61572369631233",
    "https://www.tiktok.com/@aannapurnaadental",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#clinic` },
  inLanguage: "en",
};
