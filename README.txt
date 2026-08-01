AANNAPURNAA DENTAL CLINIC WEBSITE
=================================

OVERVIEW
--------
This is a responsive, SEO-ready clinic website built with React, Next-compatible routing,
Vinext and Vite. It includes Home, About, Services, Dentists, Case Stories, Blogs and
Contact pages, plus a validated Book Consultation form. No CRM or database is required.

QUICK START
-----------
Requirements: Node.js 22.13 or later and npm.

1. Open a terminal in this project folder.
2. Run: npm install
3. Copy .env.example to .env.local and add any email settings you want.
4. Run: npm run dev
5. Open the local address printed in the terminal.

Production build: npm run build
Local production preview: npm run start

EMAILJS CONSULTATION ENQUIRIES
------------------------------
EmailJS is the recommended option because it can send the form directly without a CRM.

1. Create an account at https://www.emailjs.com/
2. Add an email service connected to the doctor's receiving inbox.
3. Create an email template. Add variables matching these form fields:
   {{name}}, {{email}}, {{phone}}, {{preferred_date}}, {{service}}, {{message}}
4. In EmailJS, copy the Service ID, Template ID and Public Key.
5. Add them to .env.local:

   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

6. Restart the development server after changing environment variables.
7. Submit a test enquiry and confirm it reaches the doctor. Configure an auto-reply in
   the EmailJS template if patients should receive confirmation.

Important: EmailJS public keys are designed for browser use, but you should still enable
domain restrictions, rate limits and CAPTCHA in EmailJS before launch. Never place a
private email password in this project.

MAILCHIMP NEWSLETTER / OPTIONAL FALLBACK
----------------------------------------
1. Create a Mailchimp Audience.
2. Go to Signup forms > Embedded form and copy the form action URL.
3. Add it to .env.local:

   NEXT_PUBLIC_MAILCHIMP_FORM_ACTION=https://YOUR_ACCOUNT.list-manage.com/subscribe/post?u=...&id=...

4. Restart the site. The Blogs newsletter form will post to Mailchimp. If EmailJS is not
   configured, the consultation form can also use this endpoint as a simple fallback,
   though EmailJS is better for full enquiry details.

If neither service is configured, the form stays in safe demonstration mode and shows a
success message without sending data. This makes local design testing easy.

CONTENT AND CONTACT DETAILS
---------------------------
Before launch, replace sample contact details in app/site.tsx:
- Phone: +977 01-5550000
- Email: care@aannapurnaadental.com
- Address: Kathmandu, Nepal
- Dentist names, biographies and service details

The official supplied logo is stored at public/logo.png. The social sharing image is at
public/og.png. Keep their filenames unchanged unless you also update app/layout.tsx.

SEO AND INDEXING
----------------
The site includes semantic headings and article elements, route-specific titles and
descriptions, canonical links, Open Graph/Twitter metadata, robots.txt and sitemap.xml.

Before going live:
1. Replace https://aannapurnaadental.com in app/layout.tsx, app/robots.ts and
   app/sitemap.ts if the final domain is different.
2. Add the production site to Google Search Console and Bing Webmaster Tools.
3. Submit https://YOUR-DOMAIN/sitemap.xml in both tools.
4. Verify every page has accurate clinic content and descriptive image alternative text.
5. Add LocalBusiness/Dentist structured data once the legal clinic name, exact address,
   phone, opening hours and map coordinates are confirmed.
6. Publish useful Nepal-focused articles regularly. Link them internally to relevant
   services and the consultation page.
7. Compress any replacement photos (WebP/AVIF preferred) and keep meaningful filenames.

DEPLOYMENT
----------
Cloudflare / Sites:
- Build command: npm run build
- The included .openai/hosting.json is ready for static hosting with no database or files.

Vercel:
1. Import the project repository in Vercel.
2. Add the EmailJS/Mailchimp values under Project Settings > Environment Variables.
3. Deploy. Vercel detects the framework automatically.

Netlify or another static host:
Use npm run build and follow the host's framework adapter guidance. Add the same public
environment variables in the host dashboard, then rebuild.

ACCESSIBILITY AND PERFORMANCE
-----------------------------
- Keyboard-accessible navigation and labeled forms are included.
- Motion is reduced automatically when the visitor requests reduced motion.
- Animations use lightweight CSS and browser observers rather than a heavy 3D scene.
- Remote clinic photos should be replaced with licensed, locally optimized photography
  before the final public launch.

PROJECT MAP
-----------
app/page.tsx          Home route
app/[slug]/page.tsx   Static routed pages
app/site.tsx          Shared site content and components
app/globals.css       Responsive design and motion
app/layout.tsx        Global SEO and social metadata
app/sitemap.ts        XML sitemap generator
app/robots.ts         Search crawler rules
public/logo.png       Clinic logo
public/og.png         Social preview image
.env.example          Email integration settings

SUPPORT CHECKLIST
-----------------
[ ] Replace sample phone, email and address
[ ] Confirm dentist names and credentials
[ ] Configure EmailJS and test delivery
[ ] Configure Mailchimp if newsletter signup is required
[ ] Update the final production domain
[ ] Replace temporary remote photography with licensed clinic photos
[ ] Test all forms on mobile and desktop
[ ] Submit sitemap after deployment
