// Plain page metadata, kept in its own non-client module. site.tsx is a "use client"
// file — Server Components (app/[slug]/page.tsx, app/sitemap.ts) that imported this
// object from site.tsx got an empty client-reference stub in dev instead of the real
// data, which made every pageContent[slug] lookup return undefined and 404 on About,
// Dentists, Case Stories and Contact. Importing this data from a server-safe module
// fixes that.
export const pageContent: Record<string, { title: string; eyebrow: string; description: string }> = {
  about: { title: "Dentistry grounded in trust", eyebrow: "Our clinic", description: "Clinical precision, warm hospitality and treatment plans that always make sense." },
  services: { title: "Care for every kind of smile", eyebrow: "Our services", description: "From prevention to complex restoration, every treatment begins with listening." },
  dentists: { title: "Meet your dental team", eyebrow: "Our doctors", description: "Experienced hands, thoughtful communication and a shared commitment to your comfort." },
  "case-stories": { title: "Real journeys. Renewed confidence.", eyebrow: "Case stories", description: "Every smile has a story—and every plan is uniquely personal." },
  blogs: { title: "Clear guidance for healthier smiles", eyebrow: "The journal", description: "Practical notes from our doctors, written for patients at home and abroad." },
  contact: { title: "Let’s plan your visit", eyebrow: "Contact us", description: "Tell us what you need. Our care team will reply with the right next step." },
};
