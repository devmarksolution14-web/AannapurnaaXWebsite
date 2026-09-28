"use client";

import Link from "next/link";
import { Activity, ArrowLeft, ArrowRight, Baby, Braces, CalendarPlus, ChevronLeft, ChevronRight, Clock3, Crown, HeartPulse, Mail, MapPin, Menu, Phone, ScanLine, ScanSearch, ShieldPlus, Smile, Sparkles, Sun, UsersRound, Video, X } from "lucide-react";
import { FaFacebookF, FaTiktok, FaTooth, FaWhatsapp } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { posts, type BlogPost } from "./blog-content";
import { countryCodes } from "./country-codes";
import { pageContent } from "./page-content";

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
// Real clinic roster, sourced from Context-Aannapurnaa-Dental.docx (names, titles and
// registration numbers as written there) and cross-checked against the supplied photos
// by matching embedded image byte sizes 1:1 against public/team — every entry below is
// a verified match. The hygienist has no personal name in the source document.
// `pos` is a per-photo object-position Y (0-100%), tuned so every head lands in the same
// visual band despite each source photo having very different headroom/aspect ratio.
// Computed from each photo's actual pixel dimensions and head-top position rather than
// eyeballed, since "center top" alone only anchors to the frame's edge, not the face.
const team = [
  { name: "Dr. Mahesh Regmi", role: "Founder & Senior Consultant · Periodontics & Oral Implantology", image: "/team/dr-mahesh-regmi.jpg", pos: 0 },
  { name: "Dr. Jagadish Timilsena", role: "Conservative Dentistry & Endodontics", image: "/team/dr-jagdish-timilsena.jpg", pos: 0 },
  { name: "Dr. Krisha Subedi", role: "Dental Surgeon (BDS)", image: "/team/dr-krisha-subedi.jpg", pos: 33 },
  { name: "Dr. Mahesh Khadka", role: "Senior Consultant · Oral Medicine & Radiology", image: "/team/dr-mahesh-khadka.jpg", pos: 0 },
  { name: "Dr. Sudarshan Shrestha", role: "Oral & Maxillofacial Surgery", image: "/team/dr-sudarshan-shrestha.jpeg", pos: 37 },
  { name: "Dr. Sadhana Ghimire", role: "Consultant Orthodontist", image: "/team/dr-sadhana-ghimire.jpg", pos: 0 },
  { name: "Dr. Sanjaya Yadav", role: "Orthodontist & Clear Aligner Specialist", image: "/team/dr-sanjaya-yadav.jpeg", pos: 40 },
  { name: "Dr. Risab Shakya", role: "Consultant Periodontologist & Oral Implantologist", image: "/team/dr-rishab-shakya.jpg", pos: 0 },
  { name: "Richard Rai", role: "Dental Hygienist", image: "/team/dental-hygienist.jpeg", pos: 41 },
];
const stories = [
  { kicker: "Smile restoration", title: "A confident return home", text: "Srijana coordinated her treatment from Sydney, completing a clear, staged plan during her visit to Nepal.", tag: "Implants · 2025" },
  { kicker: "Clear aligners", title: "A subtle change, beautifully done", text: "A twelve-month aligner journey that fitted around Aayush’s work and travel schedule.", tag: "Orthodontics · 2025" },
  { kicker: "Family care", title: "Three generations, one clinic", text: "Preventive care and calm appointments helped one family make dental health a shared ritual.", tag: "General dentistry · 2024" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="shell"><div className="topbar-contact"><span><Phone aria-hidden="true" />+977 01-4976952</span><span><Mail aria-hidden="true" />aannapurnaa.dental@gmail.com</span></div><div className="topbar-socials" aria-label="Social media"><a href="https://www.facebook.com/profile.php?id=61572369631233" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a><a href="https://www.tiktok.com/@aannapurnaadental" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok aria-hidden="true" /></a><a href="https://wa.me/9779768595100" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp aria-hidden="true" /></a></div></div></div>
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
  return <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><img src="/White%20Logo.png" alt="Aannapurnaa Dental Clinic" className="footer-logo" /><p>Modern dentistry with a warm Nepalese heart—for patients at home and around the world.</p><div className="footer-socials" aria-label="Social media"><a href="https://www.facebook.com/profile.php?id=61572369631233" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a><a href="https://www.tiktok.com/@aannapurnaadental" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok aria-hidden="true" /></a><a href="https://wa.me/9779768595100" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp aria-hidden="true" /></a></div></div><nav className="footer-nav" aria-label="Footer navigation"><h3>Explore</h3><div className="footer-nav-links"><div>{footerLinks.slice(0, 3).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div>{footerLinks.slice(3).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div></div></nav><div className="footer-visit"><h3>Visit Us</h3><div className="footer-detail"><MapPin aria-hidden="true" /><span>Samakhusi-26, Townplanning Chowk, Kathmandu</span></div><div className="footer-detail"><Clock3 aria-hidden="true" /><span>Sunday–Friday<br/>9:00–19:00</span></div><div className="footer-detail"><Phone aria-hidden="true" /><span>+977 01-4976952<br/>+977 9768595100</span></div></div><div className="footer-contact"><h3>Contact</h3><p>Questions about treatment or planning a visit? Our care team is ready to help.</p><a className="footer-email" href="mailto:aannapurnaa.dental@gmail.com"><Mail aria-hidden="true" /><span><small>Email us</small>aannapurnaa.dental@gmail.com</span><ArrowRight aria-hidden="true" /></a></div></div><div className="shell footer-bottom"><span>© 2026 Aannapurnaa Dental Clinic</span><div><span>Privacy</span><span>Accessibility</span></div></div></footer>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => entry.isIntersecting && node.classList.add("seen"), { threshold: .12 }); io.observe(node); return () => io.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

// Brand cursor: a tapered silk ribbon that trails the native cursor and fades within a
// fraction of a second. Colour follows whatever is actually painted under the pointer —
// brand blue on light surfaces, white on blue/navy surfaces and photos — with a faint
// contrasting aura so the ribbon never disappears where two surfaces meet.
function BrandCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const TRAIL_LIFE = 260; // ms a ribbon sample stays visible
    const HEAD_WIDTH = 3.2;
    const TEXT_ENTRY = "input:not([type='checkbox']):not([type='radio']):not([type='submit']):not([type='button']), textarea, [contenteditable='true']";

    type Sample = { x: number; y: number; t: number };
    const samples: Sample[] = [];
    const pointer = { x: -200, y: -200, textEntry: false };
    let dark = false;
    let tone = 0; // 0 = brand blue on light, 1 = white on dark
    let frame = 0;
    let running = false;
    let lastTime = performance.now();
    let lastProbe = 0;

    const mix = (from: number[], to: number[], alpha: number) =>
      `rgba(${from.map((value, index) => Math.round(value + (to[index] - value) * tone)).join(",")},${alpha})`;
    const core = (alpha: number) => mix([23, 70, 255], [255, 255, 255], alpha);
    // The aura is the contrasting colour: white halo under blue, navy halo under white.
    const aura = (alpha: number) => mix([255, 255, 255], [9, 22, 60], alpha * (.5 + .5 * tone));

    const luminance = (r: number, g: number, b: number) => (.2126 * r + .7152 * g + .0722 * b) / 255;
    const readColours = (value: string) => Array.from(value.matchAll(/rgba?\(([^)]+)\)/g))
      .map((match) => match[1].split(/[\s,/]+/).filter(Boolean).map(Number))
      .filter(([, , , a = 1]) => a >= .5);

    // Reads the whole paint stack under the pointer (not just the target's ancestors), so
    // absolutely-positioned siblings such as the hero's blue orbit, gradients and photos
    // all count. The first opaque layer found decides the tone.
    const probe = () => {
      if (pointer.x < 0) return;
      let result = false;
      for (const element of document.elementsFromPoint(pointer.x, pointer.y)) {
        if (element === canvas) continue;
        const style = window.getComputedStyle(element);
        if (style.visibility === "hidden" || Number(style.opacity) < .35) continue;
        if (element instanceof HTMLImageElement || element instanceof HTMLVideoElement) {
          const box = element.getBoundingClientRect();
          if (box.width > 140 && box.height > 140) { result = true; break; } // photo, not a logo/icon
          continue;
        }
        if (style.backgroundImage.includes("url(")) { result = true; break; }
        const gradient = style.backgroundImage.includes("gradient") ? readColours(style.backgroundImage) : [];
        const colours = gradient.length ? gradient : readColours(style.backgroundColor);
        if (!colours.length) continue;
        const average = colours.reduce((sum, [r, g, b]) => sum + luminance(r, g, b), 0) / colours.length;
        result = average < .5;
        break;
      }
      dark = result;
      lastProbe = performance.now();
    };

    const addSample = (x: number, y: number, t: number) => {
      const last = samples[samples.length - 1];
      if (last) {
        const distance = Math.hypot(x - last.x, y - last.y);
        if (distance < 1.5) return;
        // Subdivide long jumps so fast flicks still render as a smooth curve.
        const steps = Math.min(Math.floor(distance / 5), 12);
        for (let step = 1; step < steps; step++) {
          const k = step / steps;
          samples.push({ x: last.x + (x - last.x) * k, y: last.y + (y - last.y) * k, t: last.t + (t - last.t) * k });
        }
      }
      samples.push({ x, y, t });
      if (samples.length > 120) samples.splice(0, samples.length - 120);
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const wake = () => {
      if (running) return;
      running = true;
      lastTime = performance.now();
      frame = window.requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const now = performance.now();
      const events = typeof event.getCoalescedEvents === "function" ? event.getCoalescedEvents() : [];
      for (const coalesced of events.length ? events : [event]) addSample(coalesced.clientX, coalesced.clientY, now);
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.textEntry = event.target instanceof Element && !!event.target.closest(TEXT_ENTRY);
      if (now - lastProbe > 40) probe();
      wake();
    };
    // Sections scroll underneath a resting pointer, so re-read the surface on scroll too.
    const scroll = () => { probe(); wake(); };
    const leave = () => { samples.length = 0; wake(); };

    const drawRibbon = (points: Sample[], now: number, widthScale: number, paint: (alpha: number) => string, strength: number) => {
      const count = points.length;
      const left: [number, number][] = [];
      const right: [number, number][] = [];
      for (let index = 0; index < count; index++) {
        const point = points[index];
        const previous = points[Math.max(index - 1, 0)];
        const next = points[Math.min(index + 1, count - 1)];
        let nx = -(next.y - previous.y);
        let ny = next.x - previous.x;
        const length = Math.hypot(nx, ny) || 1;
        nx /= length; ny /= length;
        const freshness = 1 - Math.min((now - point.t) / TRAIL_LIFE, 1);
        const along = index / (count - 1);
        const width = HEAD_WIDTH * widthScale * Math.sin(along * Math.PI / 2) * (.35 + .65 * freshness);
        left.push([point.x + nx * width, point.y + ny * width]);
        right.push([point.x - nx * width, point.y - ny * width]);
      }
      const tail = points[0];
      const head = points[count - 1];
      const gradient = context.createLinearGradient(tail.x, tail.y, head.x, head.y);
      gradient.addColorStop(0, paint(0));
      gradient.addColorStop(.55, paint(.35 * strength));
      gradient.addColorStop(1, paint(strength));
      context.beginPath();
      context.moveTo(left[0][0], left[0][1]);
      for (let index = 1; index < count - 1; index++) {
        context.quadraticCurveTo(left[index][0], left[index][1], (left[index][0] + left[index + 1][0]) / 2, (left[index][1] + left[index + 1][1]) / 2);
      }
      context.lineTo(left[count - 1][0], left[count - 1][1]);
      context.lineTo(right[count - 1][0], right[count - 1][1]);
      for (let index = count - 2; index > 0; index--) {
        context.quadraticCurveTo(right[index][0], right[index][1], (right[index][0] + right[index - 1][0]) / 2, (right[index][1] + right[index - 1][1]) / 2);
      }
      context.lineTo(right[0][0], right[0][1]);
      context.closePath();
      context.fillStyle = gradient;
      context.fill();
    };

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.667, 3);
      lastTime = now;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Quick ease (~120ms) so boundary crossings blend instead of flashing.
      tone += ((dark ? 1 : 0) - tone) * Math.min(.24 * dt, 1);

      while (samples.length && now - samples[0].t > TRAIL_LIFE) samples.shift();
      if (samples.length > 2 && !pointer.textEntry) {
        const head = samples[samples.length - 1];
        if (Math.hypot(head.x - samples[0].x, head.y - samples[0].y) > 4) {
          drawRibbon(samples, now, 2.6, aura, .28);   // contrast halo
          drawRibbon(samples, now, 3.4, core, .1);    // soft glow
          drawRibbon(samples, now, 1, core, .72);     // silk core
        }
      }

      if (!samples.length && Math.abs((dark ? 1 : 0) - tone) < .01) { running = false; return; }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <canvas ref={canvasRef} className="pulse-cursor-trail" aria-hidden="true" />;
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
    <BrandCursorTrail />
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
      setStatus("We couldn’t send that just now. Please call +977 01-4976952.");
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
const loopedTeam = [...team, ...team, ...team];
const TEAM_TRANSITION_MS = 760;
const TEAM_AUTO_ADVANCE_MS = 3000;

function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ active: boolean; startX: number; startIndex: number; moved: boolean }>({ active: false, startX: 0, startIndex: 0, moved: false });
  const indexRef = useRef(team.length);
  const wrapResetTimeoutRef = useRef<number | null>(null);
  const autoTimerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const [index, setIndex] = useState(team.length);

  const cardStep = () => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".team-card");
    return firstCard ? firstCard.offsetWidth + 22 : 320;
  };

  const syncTrack = (nextIndex: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = smooth ? `transform ${TEAM_TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none";
    track.style.transform = `translateX(${-nextIndex * cardStep()}px)`;
  };

  // The visible list is the team tripled end-to-end so a step can always animate past
  // an edge into a neighbouring copy; once that animated step lands, we silently swap
  // back to the equivalent position in the middle copy with no transition, so the loop
  // never runs out of room. That swap only happens here, and any previously-scheduled
  // swap is always cancelled first — without that guard, a stale swap from an earlier
  // step could fire after a newer one and yank the carousel back mid-browse, which is
  // what "resets after a point" was: not a wrap bug, but two of these racing.
  const step = (dir: number) => {
    if (wrapResetTimeoutRef.current != null) { window.clearTimeout(wrapResetTimeoutRef.current); wrapResetTimeoutRef.current = null; }
    setIndex((current) => {
      const next = current + dir;
      let settled = next;
      if (next >= team.length * 2) {
        syncTrack(next, true);
        settled = team.length;
        wrapResetTimeoutRef.current = window.setTimeout(() => { syncTrack(settled, false); wrapResetTimeoutRef.current = null; }, TEAM_TRANSITION_MS);
      } else if (next < team.length) {
        syncTrack(next, true);
        settled = team.length * 2 - 1;
        wrapResetTimeoutRef.current = window.setTimeout(() => { syncTrack(settled, false); wrapResetTimeoutRef.current = null; }, TEAM_TRANSITION_MS);
      } else {
        syncTrack(next, true);
      }
      indexRef.current = settled;
      return settled;
    });
  };

  const armAutoTimer = () => {
    if (autoTimerRef.current != null) window.clearTimeout(autoTimerRef.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoTimerRef.current = window.setTimeout(() => {
      if (!pausedRef.current) step(1);
      armAutoTimer();
    }, TEAM_AUTO_ADVANCE_MS);
  };

  // A manual step (button, drag) should always buy a full fresh interval before the
  // carousel moves on its own again — restarting mid-browse feels abrupt and cheap;
  // waiting out a stale countdown feels premium and unhurried.
  const stepManually = (dir: number) => { step(dir); armAutoTimer(); };

  useEffect(() => {
    syncTrack(index, false);
    armAutoTimer();
    return () => { if (autoTimerRef.current != null) window.clearTimeout(autoTimerRef.current); if (wrapResetTimeoutRef.current != null) window.clearTimeout(wrapResetTimeoutRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the track aligned with its current card on viewport/breakpoint changes —
  // cardStep() is a percentage of track width, so a resize without this would leave
  // the carousel visibly misaligned until the next manual step.
  useEffect(() => {
    const onResize = () => syncTrack(indexRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onPointerDown = (event: PointerEvent) => {
      dragRef.current = { active: true, startX: event.clientX, startIndex: indexRef.current, moved: false };
      track.style.transition = "none";
      track.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragRef.current.active) return;
      const delta = event.clientX - dragRef.current.startX;
      if (Math.abs(delta) > 3) dragRef.current.moved = true;
      track.style.transform = `translateX(${-dragRef.current.startIndex * cardStep() + delta}px)`;
    };

    const onPointerUp = (event?: PointerEvent) => {
      if (!dragRef.current.active) return;
      const delta = event ? event.clientX - dragRef.current.startX : 0;
      dragRef.current.active = false;

      if (Math.abs(delta) > 40) {
        stepManually(delta < 0 ? 1 : -1);
      } else {
        syncTrack(indexRef.current, true);
        if (dragRef.current.moved) armAutoTimer();
      }

      if (event) {
        try { track.releasePointerCapture(event.pointerId); } catch {
          // no-op if pointer capture is already released
        }
      }
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointerleave", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointerleave", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  // Pausing on hover/focus — rather than letting autoplay tick along underneath a
  // visitor who is actively reading a card — is what keeps a carousel feeling premium
  // instead of pushy. Leaving gives a full fresh interval rather than resuming a
  // part-spent one, same as a manual step.
  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; armAutoTimer(); };

  return (
    <div className="team-carousel" onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
      <div className="team-track" ref={trackRef}>
        {loopedTeam.map((t, i) => <article className="team-card" key={`${t.name}-${i}`}><div className="image-wrap"><img src={t.image} alt={t.name} loading="lazy" draggable={false} style={{ objectPosition: `center ${t.pos}%` }} /></div><h3>{t.name}</h3>{t.role && <p>{t.role}</p>}</article>)}
      </div>
      <button type="button" className="team-nav prev" aria-label="Previous team member" onClick={() => stepManually(-1)}><ChevronLeft aria-hidden="true" /></button>
      <button type="button" className="team-nav next" aria-label="Next team member" onClick={() => stepManually(1)}><ChevronRight aria-hidden="true" /></button>
    </div>
  );
}
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
  <section className="hero" id="home"><div className="particle-field" aria-hidden="true">{Array.from({length:14},(_,i)=><i key={i}/>)}</div><div className="shell hero-grid"><div className="hero-copy"><span className="pill">✦ Thoughtful dental care in Nepal</span><h1><span>Expert Dental &amp; Implant Care</span><em>in Kathmandu, Nepal.</em></h1><p>Personalised dental care, modern implant treatment and honest guidance for patients in Nepal and abroad.</p><div className="hero-actions"><button className="button" onClick={() => window.dispatchEvent(new Event("open-booking"))}>Book a consultation</button><a className="button ghost" href="#services">Explore our care</a></div><div className="trust-row"><span><b>15+</b> years of care</span><span><b>4.9</b> patient rating</span><span><b>1,800+</b> smiles cared for</span></div></div><div className="hero-visual"><div className="hero-blob blob-one"></div><div className="hero-blob blob-two"></div><div className="hero-ring ring-one"></div><div className="hero-ring ring-two"></div><div className="blue-orbit"></div><img src="/mahesh-regmi-cutout.png" alt="Dr. Mahesh Regmi, Founder of Aannapurnaa Dental Clinic" /><div className="floating-note"><b>Clear care, wherever you live</b><span>Remote planning for diaspora patients</span></div></div></div><div className="shell booking-float"><ConsultationForm compact /></div></section>
  <section className="section about-summary-section" id="about"><Reveal className="shell about-summary"><div className="about-summary-copy"><span className="eyebrow">About Aannapurnaa Dental Clinic</span><h2>Advanced Dental Care, <em>Designed Around Your Smile.</em></h2><p className="lead">Modern dentistry should feel comfortable and reassuring. From routine prevention and cosmetic treatment to dental implants and smile restoration, we provide clear, personalised care shaped around your needs.</p><div className="about-trust"><div><ShieldPlus aria-hidden="true" /><span>Experienced<br/>Doctors</span></div><div><Sparkles aria-hidden="true" /><span>Modern<br/>Technology</span></div><div><HeartPulse aria-hidden="true" /><span>Patient-First<br/>Approach</span></div></div></div><div className="about-principles"><article><span className="about-number">01</span><span className="about-icon"><UsersRound aria-hidden="true" /></span><div><h3>Personalised Care</h3><p>Every smile is unique. Treatment plans reflect your oral health, goals and comfort.</p></div></article><article><span className="about-number">02</span><span className="about-icon"><ScanLine aria-hidden="true" /></span><div><h3>Complete Dental Solutions</h3><p>Preventive, restorative, cosmetic, implant and orthodontic care in one coordinated plan.</p></div></article><article><span className="about-number">03</span><span className="about-icon"><ShieldPlus aria-hidden="true" /></span><div><h3>Trusted Standards</h3><p>Thoughtful guidance, modern techniques and dependable support for lasting oral health.</p></div></article></div></Reveal></section>
  <section className="section soft" id="services"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our services</span><h2>Complete care for your best smile</h2></div><Link className="button ghost" href="/services">Show more services</Link></div><ServiceGrid limit={6}/></Reveal></section>
  <section className="section team-section" id="dentists"><Reveal className="shell"><div className="section-head"><div><span className="eyebrow">Our team</span><h2>Skilled hands. Kind people.</h2></div><p>Doctors who listen closely, explain clearly and care deeply.</p></div><TeamCarousel/></Reveal></section>
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
  {slug==="dentists" && <section className="section"><div className="shell"><TeamCarousel/><div className="team-note"><h2>One team, one standard of care.</h2><p>Our doctors collaborate across specialties, so complex treatment feels coordinated from day one.</p></div></div></section>}
  {slug==="case-stories" && <section className="section"><div className="shell"><StoryGrid/><p className="disclaimer">Individual results vary. Case stories are shared with consent and are intended for education, not as a promise of outcome.</p></div></section>}
  {slug==="blogs" && <BlogsPageContent/>}
  {slug==="contact" && <section className="section"><div className="shell contact-grid"><div className="contact-copy"><span className="eyebrow">Book consultation</span><h2>Tell us a little about your needs.</h2><p>Our coordinator typically replies within one working day. For urgent dental pain, please call us directly.</p><div className="contact-cards"><article><span><Phone aria-hidden="true" /></span><div><b>Call or WhatsApp</b><p>+977 01-4976952</p><p>WhatsApp +977 9768595100</p></div></article><article><span><Mail aria-hidden="true" /></span><div><b>Email</b><p>aannapurnaa.dental@gmail.com</p></div></article><article><span><MapPin aria-hidden="true" /></span><div><b>Visit</b><p>Samakhusi-26, Townplanning Chowk, Kathmandu</p></div></article></div></div><ConsultationForm/></div></section>}
  </main><Footer/></>; }
