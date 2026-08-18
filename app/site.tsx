"use client";

import Link from "next/link";
import { Activity, ArrowLeft, ArrowRight, Baby, Braces, CalendarPlus, Clock3, Crown, HeartPulse, Mail, MapPin, Menu, Phone, ScanLine, ScanSearch, ShieldPlus, Smile, Sparkles, Sun, UsersRound, Video, X } from "lucide-react";
import { FaFacebookF, FaTiktok, FaTooth, FaWhatsapp } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { posts, type BlogPost } from "./blog-content";
import { countryCodes } from "./country-codes";

const nav = [["Home", "/#home"], ["About", "/#about"], ["Services", "/#services"], ["Dentists", "/#dentists"], ["Case Stories", "/#case-stories"], ["Blogs", "/#blogs"], ["Contact", "/#contact"]];
// EmailJS browser credentials are public identifiers. Keep production fallbacks so
// self-hosted builds continue to work when the build server does not load .env.local.
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_8m01c19",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3aq2xfr",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "mlFFgEjSuc9xk9Acw",
};
const helpPrompts = [
  "Tell us about your dental concern...",
  "Which treatment are you interested in?",
  "Share your preferred appointment time...",
  "Let us know if you have dental pain...",
  "Planning treatment while visiting Nepal?",
];
const services = [
  { icon: Video, title: "Online Consultation", text: "Speak with our dental team remotely for guidance, planning and follow-up care." },
  { icon: ScanSearch, title: "Oral Medicine & Radiology", text: "Thorough assessment and diagnostic imaging for oral health concerns." },
  { icon: Activity, title: "Periodontal Treatment", text: "Personalised gum care to manage infection and protect the foundations of your smile." },
  { icon: FaTooth, title: "Dental Implants", text: "Natural-looking, carefully planned restorations for lasting confidence." },
  { icon: Smile, title: "Smile Design", text: "Whitening, veneers and subtle cosmetic care shaped around your face." },
  { icon: TbDental, title: "Root Canal Care", text: "Comfort-first treatment to relieve pain and preserve your natural tooth." },
  { icon: Braces, title: "Orthodontics", text: "Clear aligners and braces for children, teens and adults." },
  { icon: UsersRound, title: "Family Dentistry", text: "Prevention, check-ups and gentle dentistry through every life stage." },
  { icon: ShieldPlus, title: "Oral Surgery", text: "Wisdom tooth and minor surgical care with clear aftercare support." },
  { icon: Baby, title: "Pediatric Dental Care", text: "Friendly, gentle dental care that helps children build healthy lifelong habits." },
  { icon: Crown, title: "Prosthodontics", text: "Custom crowns, bridges and dentures designed to restore comfort and function." },
  { icon: Sun, title: "Teeth Whitening", text: "Professional whitening care to safely refresh your smile's natural brightness." },
];
const team = [
  { name: "Dr. Aashna Shrestha", role: "Lead Dentist · Restorative Care", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=82" },
  { name: "Dr. Nimesh Karki", role: "Implant & Oral Surgery", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=82" },
  { name: "Dr. Prerna Gurung", role: "Orthodontics & Smile Design", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=82" },
];
const stories = [
  { kicker: "Smile restoration", title: "A confident return home", text: "Srijana coordinated her treatment from Sydney, completing a clear, staged plan during her visit to Nepal.", tag: "Implants · 2025" },
  { kicker: "Clear aligners", title: "A subtle change, beautifully done", text: "A twelve-month aligner journey that fitted around Aayush’s work and travel schedule.", tag: "Orthodontics · 2025" },
  { kicker: "Family care", title: "Three generations, one clinic", text: "Preventive care and calm appointments helped one family make dental health a shared ritual.", tag: "General dentistry · 2024" },
];
export const pageContent: Record<string, { title: string; eyebrow: string; description: string }> = {
  about: { title: "Dentistry grounded in trust", eyebrow: "Our clinic", description: "Clinical precision, warm hospitality and treatment plans that always make sense." },
  services: { title: "Care for every kind of smile", eyebrow: "Our services", description: "From prevention to complex restoration, every treatment begins with listening." },
  dentists: { title: "Meet your dental team", eyebrow: "Our doctors", description: "Experienced hands, thoughtful communication and a shared commitment to your comfort." },
  "case-stories": { title: "Real journeys. Renewed confidence.", eyebrow: "Case stories", description: "Every smile has a story—and every plan is uniquely personal." },
  blogs: { title: "Clear guidance for healthier smiles", eyebrow: "The journal", description: "Practical notes from our doctors, written for patients at home and abroad." },
  contact: { title: "Let’s plan your visit", eyebrow: "Contact us", description: "Tell us what you need. Our care team will reply with the right next step." },
};

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="shell"><div className="topbar-contact"><span><Phone aria-hidden="true" />+977 01-5550000</span><span><Mail aria-hidden="true" />care@aannapurnaadental.com</span></div><div className="topbar-socials" aria-label="Social media"><span role="img" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></span><span role="img" aria-label="TikTok"><FaTiktok aria-hidden="true" /></span><span role="img" aria-label="WhatsApp"><FaWhatsapp aria-hidden="true" /></span></div></div></div>
    <header><div className="shell nav-wrap">
      <Link href="/" className="logo-link" aria-label="Aannapurnaa Dental Clinic home"><img src="/logo.png?v=2" alt="Aannapurnaa Dental Clinic" className="navbar-logo" /></Link>
      <Link className="mobile-booking-shortcut" href="/booking" aria-label="Book a consultation" onClick={() => setOpen(false)}><CalendarPlus aria-hidden="true" /><span>Book now</span></Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      <nav className={open ? "open" : ""}>{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button nav-cta" href="/booking" onClick={() => setOpen(false)}><CalendarPlus aria-hidden="true" /><span>Book now</span></Link></nav>
    </div></header>
  </>;
}

function Footer() {
  const footerLinks = nav.slice(1);
  return <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><img src="/White%20Logo.png" alt="Aannapurnaa Dental Clinic" className="footer-logo" /><p>Modern dentistry with a warm Nepalese heart—for patients at home and around the world.</p></div><nav className="footer-nav" aria-label="Footer navigation"><h3>Explore</h3><div className="footer-nav-links"><div>{footerLinks.slice(0, 3).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div>{footerLinks.slice(3).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div></div></nav><div className="footer-visit"><h3>Visit Us</h3><div className="footer-detail"><MapPin aria-hidden="true" /><span>Kathmandu, Nepal</span></div><div className="footer-detail"><Clock3 aria-hidden="true" /><span>Sunday–Friday<br/>9:00–18:00</span></div><div className="footer-detail"><Phone aria-hidden="true" /><span>+977 01-5550000</span></div></div><div className="footer-contact"><h3>Contact</h3><p>Questions about treatment or planning a visit? Our care team is ready to help.</p><a className="footer-email" href="mailto:care@aannapurnaadental.com"><Mail aria-hidden="true" /><span><small>Email us</small>care@aannapurnaadental.com</span><ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© 2026 Aannapurnaa Dental Clinic</span><div><span>Privacy</span><span>Accessibility</span></div></div></footer>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("seen"), { threshold: .12 }); io.observe(node); return () => io.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function WaterCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    type Drop = { x: number; y: number; size: number; life: number; decay: number; drift: number };
    const drops: Drop[] = [];
    const pointer = { x: -100, y: -100, smoothX: -100, smoothY: -100, active: false };
    let frame = 0;
    let lastDropX = -100;
    let lastDropY = -100;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!pointer.active) {
        pointer.smoothX = event.clientX;
        pointer.smoothY = event.clientY;
      }
      pointer.active = true;
    };
    const leave = () => { pointer.active = false; };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      pointer.smoothX += (pointer.x - pointer.smoothX) * .2;
      pointer.smoothY += (pointer.y - pointer.smoothY) * .2;

      if (pointer.active) {
        const distance = Math.hypot(pointer.smoothX - lastDropX, pointer.smoothY - lastDropY);
        if (distance > 11) {
          drops.push({ x: pointer.smoothX, y: pointer.smoothY, size: 7 + Math.min(distance * .08, 5), life: 1, decay: .024, drift: (Math.random() - .5) * .12 });
          lastDropX = pointer.smoothX;
          lastDropY = pointer.smoothY;
          if (drops.length > 34) drops.shift();
        }
      }

      context.lineCap = "round";
      for (let index = drops.length - 1; index >= 0; index--) {
        const drop = drops[index];
        drop.life -= drop.decay;
        drop.y += drop.drift;
        if (drop.life <= 0) { drops.splice(index, 1); continue; }

        const radius = drop.size + (1 - drop.life) * 17;
        const gradient = context.createRadialGradient(drop.x - radius * .25, drop.y - radius * .3, 0, drop.x, drop.y, radius);
        gradient.addColorStop(0, `rgba(255,255,255,${.11 * drop.life})`);
        gradient.addColorStop(.32, `rgba(126,164,255,${.09 * drop.life})`);
        gradient.addColorStop(.72, `rgba(23,70,255,${.045 * drop.life})`);
        gradient.addColorStop(1, "rgba(23,70,255,0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(drop.x, drop.y, radius, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = `rgba(72,116,255,${.16 * drop.life})`;
        context.lineWidth = .7;
        context.beginPath();
        context.arc(drop.x, drop.y, radius * .82, -.25, Math.PI * 1.45);
        context.stroke();
      }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <canvas ref={canvasRef} className="water-cursor-trail" aria-hidden="true" />;
}

function SiteEffects() {
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState<Record<string, string>>({});
  useEffect(() => {
    const show = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      setBookingData(detail && typeof detail === "object" ? detail : {});
      setOpen(true);
    };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-booking", show); window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-booking", show); window.removeEventListener("keydown", key); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <WaterCursorTrail />
    {open && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close booking form"><X aria-hidden="true" /></button>
        <span className="eyebrow">Book an enquiry</span><h2 id="booking-title">Let’s plan your visit.</h2><p>Share a few details and our care coordinator will contact you within one working day.</p>
        <ConsultationForm formId="modal-consultation" initialValues={bookingData} />
      </section>
    </div>}
  </>;
}

function ConsultationForm({ compact = false, formId, initialValues = {} }: { compact?: boolean; formId?: string; initialValues?: Record<string, string> }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const helpPlaceholder = useTypingPlaceholder(helpPrompts);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (compact) {
      window.dispatchEvent(new CustomEvent("open-booking", { detail: Object.fromEntries(Object.entries(data).map(([key, value]) => [key, String(value)])) }));
      return;
    }
    setBusy(true); setStatus("");
    try {
      const { serviceId: service, templateId: template, publicKey: key } = emailJsConfig;
      if (!service || !template || !key) throw new Error("EmailJS is not configured");

      const templateParams = {
        ...data,
        phone: `${data.country_code || ""} ${data.phone || ""}`.trim(),
        reply_to: data.email,
        form_name: compact ? "Quick consultation" : "Consultation enquiry",
        service: data.service || "Not specified",
        message: data.message || "No additional message provided.",
        time: new Intl.DateTimeFormat("en-NP", {
          dateStyle: "medium",
          timeStyle: "short",
          timeZone: "Asia/Kathmandu",
        }).format(new Date()),
      };
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: service, template_id: template, user_id: key, template_params: templateParams }),
      });
      if (!res.ok) throw new Error(await res.text() || "Email service unavailable");
      form.reset(); setStatus("Thank you. Our care coordinator will contact you shortly.");
    } catch (error) {
      console.error("Consultation form submission failed:", error);
      setStatus("We couldn’t send that just now. Please call +977 01-5550000.");
    }
    finally { setBusy(false); }
  }
  return <form className={compact ? "consult-form compact" : "consult-form"} onSubmit={submit} id={formId || (compact ? "quick-consultation" : "consultation")}>
    <label><span>Name</span><input name="name" required minLength={2} placeholder="Enter full name" defaultValue={initialValues.name || ""} /></label>
    <label><span>Email</span><input name="email" type="email" required placeholder="example@email.com" defaultValue={initialValues.email || ""} /></label>
    <label className="phone-field"><span>Phone / WhatsApp</span><span className="phone-input-group"><CountryCodeSelect initialValue={initialValues.country_code} /><input name="phone" type="tel" inputMode="tel" required pattern="[0-9 ()-]{6,16}" placeholder="Enter number" defaultValue={initialValues.phone || ""} /></span></label>
    <label><span>Preferred date</span><input name="preferred_date" type="date" required defaultValue={initialValues.preferred_date || ""} /></label>
    {!compact && <><label><span>Service</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label className="wide"><span>How can we help?</span><textarea name="message" rows={4} placeholder={helpPlaceholder} /></label></>}
    <button className="button" disabled={busy}>{busy ? "Sending…" : "Book a consultation"}</button>{status && <p className="form-status" role="status">{status}</p>}
  </form>;
}

function useTypingPlaceholder(phrases: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[0]);
      return;
    }
    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      const phrase = phrases[phraseIndex];
      characterIndex += deleting ? -1 : 1;
      setText(phrase.slice(0, characterIndex));
      let delay = deleting ? 24 : 48;
      if (!deleting && characterIndex === phrase.length) { deleting = true; delay = 1700; }
      else if (deleting && characterIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 350; }
      timer = setTimeout(type, delay);
    };
    timer = setTimeout(type, 350);
    return () => clearTimeout(timer);
  }, [phrases]);
  return text;
}

function CountryCodeSelect({ initialValue }: { initialValue?: string }) {
  const [value, setValue] = useState(initialValue || "+977");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLSpanElement>(null);
  const matches = countryCodes.filter((item) => `${item.country} ${item.code}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return <span className="country-code-select" ref={rootRef}>
    <input type="hidden" name="country_code" value={value} />
    <button type="button" className="country-code-trigger" aria-label={`Country code ${value}`} aria-expanded={open} aria-haspopup="listbox" onClick={() => { setOpen(!open); setQuery(""); }}>{value}</button>
    {open && <span className="country-code-menu">
      <input className="country-code-search" type="search" aria-label="Search country" placeholder="Search country" value={query} onChange={(event) => setQuery(event.target.value)} autoFocus />
      <span className="country-code-options" role="listbox">
        {matches.map((item) => <button type="button" role="option" aria-selected={item.code === value} key={`${item.flag}-${item.code}`} onClick={() => { setValue(item.code); setOpen(false); }}><span>{item.country}</span><b>{item.code}</b></button>)}
        {!matches.length && <span className="country-code-empty">No country found</span>}
      </span>
    </span>}
  </span>;
}

function ServiceGrid({ limit }: { limit?: number }) { const visibleServices = limit ? services.slice(0, limit) : services; return <div className="card-grid services-grid">{visibleServices.map((s,i)=><article className="service-card" key={s.title}><span className="service-icon"><s.icon aria-hidden="true" /></span><span className="number">{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.text}</p><span className="text-link service-static">Explore care</span></article>)}</div>; }
function TeamGrid() { return <div className="team-grid">{team.map(t=><article className="team-card" key={t.name}><div className="image-wrap"><img src={t.image} alt={t.name} loading="lazy" /></div><h3>{t.name}</h3><p>{t.role}</p></article>)}</div>; }
function StoryGrid() { return <div className="story-grid">{stories.map((s,i)=><article className={`story-card story-${i+1}`} key={s.title}><div className="story-content"><span className="eyebrow">{s.kicker}</span><h3>{s.title}</h3><p>{s.text}</p><span className="tag">{s.tag}</span></div></article>)}</div>; }
function BlogGrid({ limit }: { limit?: number }) { const visiblePosts = limit ? posts.slice(0, limit) : posts; return <div className="blog-grid">{visiblePosts.map((p,i)=><article className="blog-card" key={p.title}><Link href={`/blogs/${p.slug}`} className="blog-art" style={{ backgroundImage: `linear-gradient(0deg, rgba(7,25,90,.55), transparent), url(${p.image})` }} aria-label={`Read ${p.title}`}><span>Dental notes / {String(i+1).padStart(2,"0")}</span></Link><span className="date">{p.date}</span><h3><Link href={`/blogs/${p.slug}`}>{p.title}</Link></h3><p>{p.text}</p><Link href={`/blogs/${p.slug}`} className="text-link"><span>Read article</span><b aria-hidden="true"><ArrowRight /></b></Link></article>)}</div>; }

function BlogsPageContent() {
  const latest = [posts[1], posts[2], posts[3]];
  return <section className="blog-index"><div className="shell blog-surface">
    <div className="blog-lead-grid">
      <article className="featured-post" style={{ backgroundImage: `linear-gradient(0deg, rgba(3,12,45,.82), rgba(3,12,45,.08)), url(${posts[0].image})` }}><div className="featured-post-content"><span className="blog-category">{posts[0].category}</span><h1><Link href={`/blogs/${posts[0].slug}`}>{posts[0].title}</Link></h1><div className="post-meta"><span>{posts[0].date}</span><span>{posts[0].readTime}</span></div></div></article>
      <aside className="latest-posts" aria-labelledby="latest-posts-title"><div className="blog-section-heading"><h2 id="latest-posts-title">Latest posts</h2></div>{latest.map((post, index) => <article className="latest-post" key={`${post.title}-${index}`}><Link href={`/blogs/${post.slug}`} className="latest-post-art" style={{ backgroundImage: `url(${post.image})` }} aria-label={`Read ${post.title}`}/><div><h3><Link href={`/blogs/${post.slug}`}>{post.title}</Link></h3><span className="date">{post.date} · {post.readTime}</span></div></article>)}</aside>
    </div>
    <div className="blog-library-head"><h2>More from the journal</h2><div className="blog-arrows" aria-label="Article navigation"><button aria-label="Previous articles"><ArrowLeft aria-hidden="true" /></button><button aria-label="Next articles"><ArrowRight aria-hidden="true" /></button></div></div>
    <BlogGrid/>
  </div></section>;
}

export function BlogArticlePage({ post }: { post: BlogPost }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.metaDescription,
    url: `https://aannapurnaadental.com/blogs/${post.slug}`,
    image: post.image,
    datePublished: "2026-08-11",
    dateModified: "2026-08-11",
    reviewedBy: { "@type": "Organization", name: "Aannapurnaa Dental Clinical Team" },
    publisher: { "@type": "Dentist", name: "Aannapurnaa Dental Clinic", url: "https://aannapurnaadental.com" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  return <><SiteEffects/><Header/><main className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <article>
      <section className="article-hero"><div className="shell article-hero-grid"><div><Link href="/blogs" className="text-link article-back"><span>All articles</span><b aria-hidden="true"><ArrowRight /></b></Link><span className="eyebrow">{post.category}</span><h1>{post.title}</h1><p>{post.text}</p><div className="article-meta"><span>{post.date}</span><span>{post.readTime}</span><span>Reviewed by Aannapurnaa Dental clinical team</span></div></div><img className="article-hero-image" src={post.image} alt={post.title}/></div></section>
      <div className="shell article-layout"><div className="article-body"><p className="article-intro">{post.introduction}</p>{post.sections.map((section, index) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}{index === 1 && <figure><img src={post.secondaryImage} alt="Dental doctor providing professional patient care" loading="lazy"/><figcaption>Individual treatment is planned after a complete clinical assessment.</figcaption></figure>}</section>)}<section className="article-faq" aria-labelledby="article-faq-title"><span className="eyebrow">Quick answers</span><h2 id="article-faq-title">Frequently asked questions</h2>{post.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section><div className="article-note"><b>Medical disclaimer</b><p>This article is for general education and does not replace an in-person dental examination, diagnosis or treatment plan. Prices are broad market references rather than fixed clinic quotations. Suitability, cost and timelines vary by individual clinical findings. Reviewed by the Aannapurnaa Dental Clinical Team in August 2026.</p></div></div><aside className="article-cta"><span className="eyebrow">Need personal guidance?</span><h2>Start with a clinical consultation.</h2><p>Our team will assess your needs, explain appropriate options and prepare a clear treatment plan.</p><Link className="button" href="/booking">Book a consultation</Link></aside></div>
    </article>
  </main><Footer/></>;
}

export function HomePage() { return <><SiteEffects/><Header/><main>
  <section className="hero" id="home"><div className="particle-field" aria-hidden="true">{Array.from({length:14},(_,i)=><i key={i}/>)}</div><div className="shell hero-grid"><div className="hero-copy"><span className="pill">✦ Thoughtful dental care in Nepal</span><h1><span>Expert Dental &amp; Implant Care</span><em>in Kathmandu, Nepal.</em></h1><p>Personalised dental care, modern implant treatment and honest guidance for patients in Nepal and abroad.</p><div className="hero-actions"><button className="button" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Book a consultation</button><a className="button ghost" href="#services">Explore our care</a></div><div className="trust-row"><span><b>15+</b> years of care</span><span><b>4.9</b> patient rating</span><span><b>1,800+</b> smiles cared for</span></div></div><div className="hero-visual"><div className="hero-blob blob-one"></div><div className="hero-blob blob-two"></div><div className="hero-ring ring-one"></div><div className="hero-ring ring-two"></div><div className="blue-orbit"></div><img src="/doctor-cutout.png" alt="A welcoming dental doctor" /><div className="floating-note"><b>Clear care, wherever you live</b><span>Remote planning for diaspora patients</span></div></div></div><div className="shell booking-float"><ConsultationForm compact /></div></section>
  <section className="section about-summary-section" id="about"><Reveal className="shell about-summary"><div className="about-summary-copy"><span className="eyebrow">About Aannapurnaa Dental Clinic</span><h2>Advanced Dental Care, <em>Designed Around Your Smile.</em></h2><p className="lead">Modern dentistry should feel comfortable and reassuring. From routine prevention and cosmetic treatment to dental implants and smile restoration, we provide clear, personalised care shaped around your needs.</p><div className="about-trust"><div><ShieldPlus aria-hidden="true" /><span>Experienced<br/>Doctors</span></div><div><Sparkles aria-hidden="true" /><span>Modern<br/>Technology</span></div><div><HeartPulse aria-hidden="true" /><span>Patient-First<br/>Approach</span></div></div></div><div className="about-principles"><article><span className="about-number">01</span><span className="about-icon"><UsersRound aria-hidden="true" /></span><div><h3>Personalised Care</h3><p>Every smile is unique. Treatment plans reflect your oral health, goals and comfort.</p></div></article><article><span className="about-number">02</span><span className="about-icon"><ScanLine aria-hidden="true" /></span><div><h3>Complete Dental Solutions</h3><p>Preventive, restorative, cosmetic, implant and orthodontic care in one coordinated plan.</p></div></article><article><span className="about-number">03</span><span className="about-icon"><ShieldPlus aria-hidden="true" /></span><div><h3>Trusted Standards</h3><p>Thoughtful guidance, modern techniques and dependable support for lasting oral health.</p></div></article></div></Reveal></section>
  <section className="section soft" id="services"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our services</span><h2>Complete care for your best smile</h2></div><Link className="button ghost" href="/services">Show more services</Link></div><ServiceGrid limit={6}/></Reveal></section>
  <section className="section team-section" id="dentists"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our team</span><h2>Skilled hands. Kind people.</h2></div><p>Doctors who listen closely, explain clearly and care deeply.</p></div><TeamGrid/></Reveal></section>
  <section className="section blue-section journeys-section" id="case-stories"><Reveal className="shell"><div className="section-head light"><div><span className="eyebrow">Patient journeys</span><h2>Stories behind the smiles</h2></div><p>Thoughtful treatment journeys shaped by clear planning, careful support and individual needs.</p></div><StoryGrid/></Reveal></section>
  <section className="section" id="blogs"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">From the journal</span><h2>Useful advice, minus the jargon</h2></div><Link href="/blogs" className="text-link"><span>Visit the journal</span><b aria-hidden="true"><ArrowRight /></b></Link></div><BlogGrid limit={3}/><div className="blog-more"><Link href="/blogs" className="button ghost">See more blogs <ArrowRight aria-hidden="true" /></Link></div></Reveal></section>
  <section className="section cta" id="contact"><div className="shell cta-inner"><div><span className="eyebrow">Ready when you are</span><h2>Let’s make your next visit feel simple.</h2><p>Share your concern and travel plans. We’ll help map the right next step.</p></div><button className="button white" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Plan my consultation</button></div></section>
  </main><Footer/></>; }

export function BookingPage() { return <><SiteEffects/><Header/><main className="booking-page">
  <section className="booking-modal booking-page-card" aria-labelledby="booking-page-title">
    <span className="eyebrow">Book an enquiry</span>
    <h2 id="booking-page-title">Let’s plan your visit.</h2>
    <p>Share your details and we’ll contact you within one working day.</p>
    <ConsultationForm formId="booking-page-consultation" />
  </section>
  </main><Footer/></>; }

export function InnerPage({ slug }: { slug: string }) { const p=pageContent[slug]; return <><SiteEffects/><Header/><main>{slug!=="blogs" && <section className="page-hero"><div className="shell"><span className="eyebrow">{p.eyebrow}</span><h1>{p.title}</h1><p>{p.description}</p><div className="crumb"><Link href="/">Home</Link><span>·</span><span>{p.title}</span></div></div></section>}
  {slug==="about" && <><section className="section"><div className="shell about-feature"><div className="about-art"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Modern dental treatment room"/></div><div><span className="eyebrow">The Aannapurnaa promise</span><h2>Care rooted in clarity, comfort and respect.</h2><p className="lead">Named after one of Nepal’s most enduring symbols, our clinic pairs world-class standards with the warmth and familiarity of home.</p><ul className="check-list"><li>Transparent recommendations and fees</li><li>Evidence-led, minimally invasive care</li><li>Coordinated planning for overseas patients</li><li>Comfort-first appointments for every age</li></ul></div></div></section><section className="section soft"><div className="shell values"><article><b>01</b><h3>Listen first</h3><p>Your priorities shape the plan.</p></article><article><b>02</b><h3>Explain clearly</h3><p>No jargon. No pressure.</p></article><article><b>03</b><h3>Care completely</h3><p>Support before, during and after.</p></article></div></section></>}
  {slug==="services" && <section className="section"><div className="shell"><ServiceGrid/><div className="care-note"><div><span className="eyebrow">Not sure where to begin?</span><h2>Start with a conversation.</h2></div><p>Tell us what is bothering you and we’ll guide you to the right consultation—without pressure.</p><button type="button" className="button" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Talk to our team</button></div></div></section>}
  {slug==="dentists" && <section className="section"><div className="shell"><TeamGrid/><div className="team-note"><h2>One team, one standard of care.</h2><p>Our doctors collaborate across specialties, so complex treatment feels coordinated from day one.</p></div></div></section>}
  {slug==="case-stories" && <section className="section"><div className="shell"><StoryGrid/><p className="disclaimer">Individual results vary. Case stories are shared with consent and are intended for education, not as a promise of outcome.</p></div></section>}
  {slug==="blogs" && <BlogsPageContent/>}
  {slug==="contact" && <section className="section"><div className="shell contact-grid"><div className="contact-copy"><span className="eyebrow">Book consultation</span><h2>Tell us a little about your needs.</h2><p>Our coordinator typically replies within one working day. For urgent dental pain, please call us directly.</p><div className="contact-cards"><article><span><Phone aria-hidden="true" /></span><div><b>Call or WhatsApp</b><p>+977 01-5550000</p></div></article><article><span><Mail aria-hidden="true" /></span><div><b>Email</b><p>care@aannapurnaadental.com</p></div></article><article><span><MapPin aria-hidden="true" /></span><div><b>Visit</b><p>Kathmandu, Nepal</p></div></article></div></div><ConsultationForm/></div></section>}
  </main><Footer/></>; }
