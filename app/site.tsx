"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [["Home", "/#home"], ["About", "/#about"], ["Services", "/#services"], ["Dentists", "/#dentists"], ["Case Stories", "/#case-stories"], ["Blogs", "/#blogs"], ["Contact", "/#contact"]];
const services = [
  { icon: "✦", title: "Dental Implants", text: "Natural-looking, carefully planned restorations for lasting confidence." },
  { icon: "◌", title: "Smile Design", text: "Whitening, veneers and subtle cosmetic care shaped around your face." },
  { icon: "⌁", title: "Root Canal Care", text: "Comfort-first treatment to relieve pain and preserve your natural tooth." },
  { icon: "◇", title: "Orthodontics", text: "Clear aligners and braces for children, teens and adults." },
  { icon: "＋", title: "Family Dentistry", text: "Prevention, check-ups and gentle dentistry through every life stage." },
  { icon: "☾", title: "Oral Surgery", text: "Wisdom tooth and minor surgical care with clear aftercare support." },
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
const posts = [
  { date: "18 Jul 2026", title: "Planning dental treatment on your next trip to Nepal", text: "A practical timeline for consultations, scans, procedures and follow-up." },
  { date: "02 Jul 2026", title: "Dental implants: the questions worth asking first", text: "Understand candidacy, healing time, materials and long-term care." },
  { date: "21 Jun 2026", title: "A gentler guide to your child’s first dental visit", text: "Small steps that make a first appointment feel safe and familiar." },
];

export const pageContent: Record<string, { title: string; eyebrow: string; description: string }> = {
  about: { title: "Dentistry grounded in trust", eyebrow: "Our clinic", description: "Clinical precision, warm hospitality and treatment plans that always make sense." },
  services: { title: "Care for every kind of smile", eyebrow: "Our services", description: "From prevention to complex restoration, every treatment begins with listening." },
  dentists: { title: "Meet your dental team", eyebrow: "Our clinicians", description: "Experienced hands, thoughtful communication and a shared commitment to your comfort." },
  "case-stories": { title: "Real journeys. Renewed confidence.", eyebrow: "Case stories", description: "Every smile has a story—and every plan is uniquely personal." },
  blogs: { title: "Clear guidance for healthier smiles", eyebrow: "The journal", description: "Practical notes from our clinicians, written for patients at home and abroad." },
  contact: { title: "Let’s plan your visit", eyebrow: "Contact us", description: "Tell us what you need. Our care team will reply with the right next step." },
};

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="shell"><span>☎ +977 01-5550000</span><span>✉ care@aannapurnaadental.com</span><span className="desktop-only">⌖ Kathmandu, Nepal</span><span className="top-push">For patients in Nepal & abroad</span></div></div>
    <header><div className="shell nav-wrap">
      <Link href="/" className="logo-link" aria-label="Aannapurnaa Dental Clinic home"><img src="/logo.png" alt="Aannapurnaa Dental Clinic" /></Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>☰</button>
      <nav className={open ? "open" : ""}>{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<button className="button nav-cta" onClick={() => { setOpen(false); window.dispatchEvent(new Event("open-booking")); }}>Book now</button></nav>
    </div></header>
  </>;
}

function Footer() { return <footer><div className="shell footer-grid"><div><img src="/logo.png" alt="Aannapurnaa Dental Clinic" className="footer-logo" /><p>Modern dentistry with a warm Nepalese heart—for patients at home and around the world.</p></div><div><h3>Explore</h3>{nav.slice(1).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div><h3>Visit</h3><p>Kathmandu, Nepal<br/>Sun–Fri · 9:00–18:00<br/>+977 01-5550000</p></div><div><h3>Stay connected</h3><p>Practical dental guidance, gently delivered.</p><a className="text-link" href="mailto:care@aannapurnaadental.com">care@aannapurnaadental.com →</a></div></div><div className="shell footer-bottom"><span>© 2026 Aannapurnaa Dental Clinic</span><span>Privacy · Accessibility</span></div></footer>; }

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("seen"), { threshold: .12 }); io.observe(node); return () => io.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SiteEffects() {
  const [open, setOpen] = useState(false);
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  useEffect(() => {
    const show = () => setOpen(true);
    const click = (e: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select")) return;
      const stamp = Date.now();
      const next = Array.from({ length: 3 }, (_, i) => ({ id: stamp + i, x: e.clientX, y: e.clientY, delay: i * 75 }));
      setBubbles((old) => [...old.slice(-9), ...next]);
      window.setTimeout(() => setBubbles((old) => old.filter((b) => b.id < stamp || b.id > stamp + 2)), 850);
    };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("open-booking", show); window.addEventListener("pointerdown", click); window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-booking", show); window.removeEventListener("pointerdown", click); window.removeEventListener("keydown", key); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <div className="click-bubbles" aria-hidden="true">{bubbles.map((b) => <i key={b.id} style={{ left: b.x, top: b.y, animationDelay: `${b.delay}ms` }} />)}</div>
    {open && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close booking form">×</button>
        <span className="eyebrow">Book an enquiry</span><h2 id="booking-title">Let’s plan your visit.</h2><p>Share a few details and our care coordinator will contact you within one working day.</p>
        <ConsultationForm formId="modal-consultation" />
      </section>
    </div>}
  </>;
}

function ConsultationForm({ compact = false, formId }: { compact?: boolean; formId?: string }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setStatus("");
    const form = e.currentTarget; const data = Object.fromEntries(new FormData(form));
    try {
      const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (service && template && key) {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service_id: service, template_id: template, user_id: key, template_params: data }) });
        if (!res.ok) throw new Error("Email service unavailable");
      } else {
        const mailchimp = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION;
        if (mailchimp) { const win = window.open("", "mailchimp-submit", "width=1,height=1"); const hidden = document.createElement("form"); hidden.action = mailchimp; hidden.method = "post"; hidden.target = "mailchimp-submit"; Object.entries(data).forEach(([k,v]) => { const input=document.createElement("input"); input.name=k === "email" ? "EMAIL" : k; input.value=String(v); hidden.appendChild(input); }); document.body.appendChild(hidden); hidden.submit(); hidden.remove(); setTimeout(()=>win?.close(), 1500); }
        else await new Promise(r => setTimeout(r, 700));
      }
      form.reset(); setStatus("Thank you. Our care coordinator will contact you shortly.");
    } catch { setStatus("We couldn’t send that just now. Please call +977 01-5550000."); }
    finally { setBusy(false); }
  }
  return <form className={compact ? "consult-form compact" : "consult-form"} onSubmit={submit} id={formId || (compact ? "quick-consultation" : "consultation")}>
    <label><span>Name</span><input name="name" required minLength={2} placeholder="Your full name" /></label>
    <label><span>Email</span><input name="email" type="email" required placeholder="you@example.com" /></label>
    <label><span>Phone / WhatsApp</span><input name="phone" required pattern="[+0-9 ()-]{7,20}" placeholder="+977 / country code" /></label>
    <label><span>Preferred date</span><input name="preferred_date" type="date" required /></label>
    {!compact && <><label><span>Service</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label className="wide"><span>How can we help?</span><textarea name="message" rows={4} placeholder="Tell us about your concern, travel dates, or preferred appointment time." /></label></>}
    <button className="button" disabled={busy}>{busy ? "Sending…" : "Book a consultation"}</button>{status && <p className="form-status" role="status">{status}</p>}
  </form>;
}

function ServiceGrid() { return <div className="card-grid services-grid">{services.map((s,i)=><article className="service-card" key={s.title}><span className="service-icon">{s.icon}</span><span className="number">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><Link href="/contact#consultation" className="text-link">Explore care →</Link></article>)}</div>; }
function TeamGrid() { return <div className="team-grid">{team.map(t=><article className="team-card" key={t.name}><div className="image-wrap"><img src={t.image} alt={t.name} loading="lazy" /></div><h3>{t.name}</h3><p>{t.role}</p></article>)}</div>; }
function StoryGrid() { return <div className="story-grid">{stories.map((s,i)=><article className={`story-card story-${i+1}`} key={s.title}><div className="story-content"><span className="eyebrow">{s.kicker}</span><h3>{s.title}</h3><p>{s.text}</p><span className="tag">{s.tag}</span></div></article>)}</div>; }
function BlogGrid() { return <div className="blog-grid">{posts.map((p,i)=><article className="blog-card" key={p.title}><div className={`blog-art art-${i+1}`}><span>Dental notes / {String(i+1).padStart(2,"0")}</span></div><span className="date">{p.date}</span><h3>{p.title}</h3><p>{p.text}</p><Link href="/contact" className="text-link">Read article →</Link></article>)}</div>; }

export function HomePage() { return <><SiteEffects/><Header/><main>
  <section className="hero" id="home"><div className="particle-field" aria-hidden="true">{Array.from({length:14},(_,i)=><i key={i}/>)}</div><div className="shell hero-grid"><div className="hero-copy"><span className="pill">✦ Thoughtful dental care in Nepal</span><h1>Your smile, cared for <em>beautifully.</em></h1><p>Modern dentistry, honest guidance and warm hospitality—for families in Nepal and Nepalese living around the world.</p><div className="hero-actions"><button className="button" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Book a consultation</button><a className="button ghost" href="#services">Explore our care</a></div><div className="trust-row"><span><b>15+</b> years of care</span><span><b>4.9</b> patient rating</span><span><b>1,800+</b> smiles cared for</span></div></div><div className="hero-visual"><div className="hero-blob blob-one"></div><div className="hero-blob blob-two"></div><div className="hero-ring ring-one"></div><div className="hero-ring ring-two"></div><div className="blue-orbit"></div><img src="/doctor-cutout.png" alt="A welcoming dental clinician" /><div className="floating-note"><b>Clear care, wherever you live</b><span>Remote planning for diaspora patients</span></div></div></div></section>
  <section className="section" id="about"><Reveal className="shell intro-grid"><div><span className="eyebrow">About Aannapurnaa</span><h2>Expert care, with the ease of coming home.</h2></div><div><p className="lead">We believe excellent dentistry is both precise and personal. Every appointment is unhurried, every option is explained, and every plan is built around your life.</p><Link className="text-link" href="/about">Discover our approach →</Link></div></Reveal></section>
  <section className="section soft" id="services"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our services</span><h2>Complete care for your best smile</h2></div><Link className="button ghost" href="/services">View all services</Link></div><ServiceGrid/></Reveal></section>
  <div className="ticker" aria-label="Dental services"><div>GENERAL DENTISTRY ✦ TEETH WHITENING ✦ DENTAL IMPLANTS ✦ ORTHODONTICS ✦ FAMILY CARE ✦</div></div>
  <section className="section" id="dentists"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our team</span><h2>Skilled hands. Kind people.</h2></div><p>Clinicians who listen closely, explain clearly and care deeply.</p></div><TeamGrid/></Reveal></section>
  <section className="section blue-section" id="case-stories"><Reveal className="shell"><div className="section-head light"><div><span className="eyebrow">Patient journeys</span><h2>Stories behind the smiles</h2></div><Link href="/case-stories" className="button white">View case stories</Link></div><StoryGrid/></Reveal></section>
  <section className="section" id="blogs"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">From the journal</span><h2>Useful advice, minus the jargon</h2></div><Link href="/blogs" className="text-link">Visit the journal →</Link></div><BlogGrid/></Reveal></section>
  <section className="section cta" id="contact"><div className="shell cta-inner"><div><span className="eyebrow">Ready when you are</span><h2>Let’s make your next visit feel simple.</h2><p>Share your concern and travel plans. We’ll help map the right next step.</p></div><button className="button white" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Plan my consultation</button></div></section>
  </main><Footer/></>; }

export function InnerPage({ slug }: { slug: string }) { const p=pageContent[slug]; return <><SiteEffects/><Header/><main><section className="page-hero"><div className="shell"><span className="eyebrow">{p.eyebrow}</span><h1>{p.title}</h1><p>{p.description}</p><div className="crumb"><Link href="/">Home</Link><span>·</span><span>{p.title}</span></div></div></section>
  {slug==="about" && <><section className="section"><div className="shell about-feature"><div className="about-art"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Modern dental treatment room"/></div><div><span className="eyebrow">The Aannapurnaa promise</span><h2>Care rooted in clarity, comfort and respect.</h2><p className="lead">Named after one of Nepal’s most enduring symbols, our clinic pairs world-class standards with the warmth and familiarity of home.</p><ul className="check-list"><li>Transparent recommendations and fees</li><li>Evidence-led, minimally invasive care</li><li>Coordinated planning for overseas patients</li><li>Comfort-first appointments for every age</li></ul></div></div></section><section className="section soft"><div className="shell values"><article><b>01</b><h3>Listen first</h3><p>Your priorities shape the plan.</p></article><article><b>02</b><h3>Explain clearly</h3><p>No jargon. No pressure.</p></article><article><b>03</b><h3>Care completely</h3><p>Support before, during and after.</p></article></div></section></>}
  {slug==="services" && <section className="section"><div className="shell"><ServiceGrid/><div className="care-note"><div><span className="eyebrow">Not sure where to begin?</span><h2>Start with a conversation.</h2></div><p>Tell us what is bothering you and we’ll guide you to the right consultation—without pressure.</p><Link className="button" href="/contact#consultation">Talk to our team</Link></div></div></section>}
  {slug==="dentists" && <section className="section"><div className="shell"><TeamGrid/><div className="team-note"><h2>One team, one standard of care.</h2><p>Our clinicians collaborate across specialties, so complex treatment feels coordinated from day one.</p></div></div></section>}
  {slug==="case-stories" && <section className="section"><div className="shell"><StoryGrid/><p className="disclaimer">Individual results vary. Case stories are shared with consent and are intended for education, not as a promise of outcome.</p></div></section>}
  {slug==="blogs" && <section className="section"><div className="shell"><BlogGrid/><div className="newsletter"><div><span className="eyebrow">Clinic notes</span><h2>A thoughtful read, once a month.</h2></div><form action={process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION || "#"} method="post"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="EMAIL" type="email" required placeholder="Your email address"/><button className="button">Subscribe</button></form></div></div></section>}
  {slug==="contact" && <section className="section"><div className="shell contact-grid"><div className="contact-copy"><span className="eyebrow">Book consultation</span><h2>Tell us a little about your needs.</h2><p>Our coordinator typically replies within one working day. For urgent dental pain, please call us directly.</p><div className="contact-cards"><article><span>☎</span><div><b>Call or WhatsApp</b><p>+977 01-5550000</p></div></article><article><span>✉</span><div><b>Email</b><p>care@aannapurnaadental.com</p></div></article><article><span>⌖</span><div><b>Visit</b><p>Kathmandu, Nepal</p></div></article></div></div><ConsultationForm/></div></section>}
  </main><Footer/></>; }
