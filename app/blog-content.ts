export type BlogPost = {
  slug: string; date: string; title: string; text: string; metaDescription: string;
  category: string; readTime: string; imageClass: string; image: string; secondaryImage: string;
  introduction: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
};

const commonDental = "/Annapurna_dental_commonDental%20.png";
const examination = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85";
const oralScreening = "/Annapurna_dental%20BlogGukthkaPaan.png";
const whitening = "/annapurna_dental_teethWhitening.png";
const aligners = "/Annapurna_dental_Invisalign%20%26%20Clear%20Aligners%20.png";
const consultation = "/Annapurna_dental%20Dental%20Treatment.png";
const implant = "/Annapurna_dental_Dental%20Implants%20.png";
const clinic = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85";
const reviewed = "11 Aug 2026";

export const posts: BlogPost[] = [
  {
    slug: "common-dental-problems-in-nepal", date: reviewed,
    title: "Common Dental Problems in Nepal: Causes, Symptoms & Treatment",
    text: "Understand common dental problems in Nepal, their warning signs, treatment options and when to seek urgent care.",
    metaDescription: "Tooth decay, gum disease and more affect many people in Nepal. Learn the causes, warning signs and treatment options from Aannapurnaa Dental.",
    category: "Patient education", readTime: "10 min read", imageClass: "art-1", image: commonDental, secondaryImage: clinic,
    introduction: "The most common dental problems in Nepal include tooth decay, gum disease, sensitivity, persistent bad breath and tooth loss. Many can be prevented or treated more simply when identified early, before pain or swelling becomes severe.",
    sections: [
      { heading: "Why are dental problems common in Nepal?", paragraphs: ["Oral health is shaped by diet, daily plaque removal, fluoride exposure, tobacco and areca-nut use, access to preventive care and how early a problem is assessed. Frequent sugary tea, snacks and soft drinks can increase decay risk, while delaying care can turn a small cavity into an infection requiring more extensive treatment."], bullets: ["Brush twice daily with fluoride toothpaste.", "Limit frequent sugary foods and drinks.", "Avoid tobacco, gutkha, paan and areca nut.", "Arrange checkups according to your individual risk."] },
      { heading: "Tooth decay and gum disease", paragraphs: ["Tooth decay develops when plaque bacteria use sugars to produce acids that damage tooth structure. Early decay may have no symptoms; later signs include sensitivity, pain, a dark spot, a visible hole or food repeatedly collecting in one place.", "Gum disease often begins as gingivitis, with red, swollen or bleeding gums. Untreated disease can progress to periodontitis and affect the tissues and bone supporting the teeth. Early gingivitis may improve with professional cleaning and better home care; periodontitis needs clinical management."], bullets: ["Bleeding during brushing or flossing", "Persistent bad breath", "Gum recession or tenderness", "Loose teeth in advanced disease"] },
      { heading: "Sensitivity, bad breath and missing teeth", paragraphs: ["Sensitivity may be related to enamel wear, recession, decay, cracks or exposed roots. Persistent or one-tooth sensitivity should be examined. Persistent bad breath often has an oral cause such as plaque, tongue bacteria, gum disease, decay or dry mouth.", "Missing teeth can affect chewing, speech and tooth position. Suitable replacement options may include a bridge, denture or dental implant after assessment."] },
      { heading: "Oral changes linked to tobacco and betel nut", paragraphs: ["Tobacco and areca nut are important risk factors for oral disease and oral cancer. A mouth ulcer lasting more than three weeks, a persistent red or white patch, a lump, restricted mouth opening or difficulty swallowing or speaking should be assessed promptly."] },
      { heading: "When is dental care urgent?", paragraphs: ["Seek urgent dental or medical care for significant facial or mouth swelling, fever with dental pain, uncontrolled bleeding, rapidly worsening pain, or difficulty breathing or swallowing."] },
      { heading: "How to reduce your risk", paragraphs: ["Brush twice daily with fluoride toothpaste, clean between teeth, reduce frequent sugar exposure, avoid tobacco and areca nut, and respond early to bleeding gums, sensitivity or pain. Your dentist can recommend a recall interval based on your needs."] },
    ],
    faqs: [
      { question: "What is the most common dental problem in Nepal?", answer: "Tooth decay is one of the most common oral-health problems in Nepal. Gum disease, sensitivity, bad breath and tooth loss are also frequently seen." },
      { question: "Can gum disease be reversed?", answer: "Early gingivitis can often improve with professional cleaning and effective daily plaque removal. Periodontitis usually needs ongoing professional management." },
      { question: "When should tooth sensitivity be checked?", answer: "Persistent, worsening or localised sensitivity should be examined because it may be caused by decay, recession, enamel wear or a cracked tooth." },
      { question: "When should a mouth ulcer be checked?", answer: "Arrange an assessment if an ulcer lasts more than three weeks or appears with a persistent patch, lump or other concerning change." },
    ],
  },
  {
    slug: "gutkha-paan-tobacco-oral-cancer-risk-nepal", date: reviewed,
    title: "Gutkha, Paan & Tobacco: Oral Cancer Risks Nepalese Should Know",
    text: "Learn how gutkha, paan, tobacco and areca nut affect the mouth, including OSMF and oral-cancer warning signs.",
    metaDescription: "Gutkha, paan and tobacco raise oral cancer risk in Nepal. Learn about OSMF, warning signs and when to arrange an oral cancer check.",
    category: "Oral medicine", readTime: "8 min read", imageClass: "art-2", image: oralScreening, secondaryImage: examination,
    introduction: "Yes - gutkha, khaini and tobacco-containing paan are strongly associated with oral cancer. Areca nut, used in many paan and gutkha preparations, is also carcinogenic and strongly linked to oral submucous fibrosis (OSMF).",
    sections: [
      { heading: "Why are gutkha, paan and tobacco dangerous?", paragraphs: ["Gutkha commonly combines areca nut, tobacco, slaked lime and flavourings. Paan may contain betel leaf, areca nut and sometimes tobacco; khaini commonly combines tobacco with slaked lime. 'Smokeless' does not mean safe: tobacco and areca nut expose oral tissues to carcinogenic substances."] },
      { heading: "Oral submucous fibrosis and persistent patches", paragraphs: ["OSMF is a progressive scarring disorder associated with areca-nut use. It can cause burning with spicy food, tight cheeks, tissue stiffness and reduced mouth opening. Persistent white or red patches also require professional assessment."], bullets: ["Burning or tightness inside the cheeks", "Progressively reduced mouth opening", "A persistent white or red patch", "An ulcer lasting more than three weeks"] },
      { heading: "Warning signs of oral cancer", paragraphs: ["Early oral-cancer changes may be painless. See a dentist or doctor for a persistent ulcer, red or white patch, lump, unexplained numbness, restricted mouth opening, difficulty chewing or swallowing, speech changes or an unexplained loose tooth. These symptoms can have non-cancerous causes, but examination is important."] },
      { heading: "Can the damage be reversed?", paragraphs: ["Stopping tobacco and areca-nut use removes ongoing exposure and reduces risk, but existing lesions do not always disappear. Established OSMF may continue to restrict opening, suspicious lesions may need testing, and confirmed cancer requires specialist treatment.", "Paan without tobacco is not risk-free when it contains areca nut."] },
      { heading: "Oral cancer checks in Kathmandu", paragraphs: ["People who currently use or previously used tobacco, gutkha, khaini, paan or areca nut should discuss their risk with a dental or medical professional. Do not wait for pain before seeking an assessment."] },
    ],
    faqs: [
      { question: "Does chewing gutkha cause oral cancer?", answer: "Gutkha commonly contains tobacco and areca nut. Both contribute to serious oral-health and oral-cancer risks." },
      { question: "Is paan without tobacco safe?", answer: "No. Paan containing areca nut is not risk-free because areca nut is carcinogenic even without tobacco." },
      { question: "What is oral submucous fibrosis?", answer: "OSMF is progressive scarring and stiffening of oral tissues, strongly associated with areca-nut chewing. It can reduce mouth opening and is potentially malignant." },
      { question: "Can quitting gutkha reduce oral-cancer risk?", answer: "Yes. Stopping tobacco and areca-nut products reduces ongoing exposure and is an important risk-reduction step." },
    ],
  },
  {
    slug: "teeth-whitening-kathmandu-cost", date: reviewed,
    title: "Teeth Whitening in Kathmandu: Cost, Options & What to Expect",
    text: "Compare professional whitening options, cost factors, suitability, side effects and realistic results.",
    metaDescription: "Considering teeth whitening in Kathmandu? Compare whitening options, learn what affects cost and see what to expect before and after treatment.",
    category: "Cosmetic dentistry", readTime: "8 min read", imageClass: "art-3", image: whitening, secondaryImage: clinic,
    introduction: "Professional teeth-whitening cost in Kathmandu varies with the whitening system, treatment plan, number of sessions and whether cleaning or other care is required first. Not every type of discolouration responds to standard whitening.",
    sections: [
      { heading: "Why do teeth become stained?", paragraphs: ["Surface staining can come from tea, coffee, tobacco, gutkha, paan, plaque and tartar. Teeth also darken naturally with age. Internal discolouration may relate to medication, fluorosis, trauma or a non-vital tooth and may not respond predictably to conventional whitening."] },
      { heading: "Whitening options in Kathmandu", paragraphs: ["In-office whitening is supervised in the clinic and may produce a noticeable change in one appointment. Dentist-provided take-home trays whiten more gradually. Over-the-counter products may help mild staining but vary in concentration and fit.", "Some systems are marketed as laser or light-assisted whitening. The whitening agent performs the bleaching; light activation is not automatically better."] },
      { heading: "What affects teeth-whitening cost?", paragraphs: ["Cost depends on the system, in-office versus take-home care, number of sessions, cause of staining, sensitivity, cleaning needs and treatment required first. Contact Aannapurnaa Dental for a current individual quotation."] },
      { heading: "What happens during professional whitening?", paragraphs: ["Your dentist examines the teeth and gums, records the starting shade, protects the gums, applies the whitening product according to its protocol and reviews the result. Cavities, active gum disease, significant tartar or sensitivity may need attention first."] },
      { heading: "Who may need a different approach?", paragraphs: ["Whitening does not change crowns, veneers, bridges, fillings or implants. Deep internal discolouration may need internal bleaching, bonding, veneers or crowns. Cosmetic whitening is commonly postponed during pregnancy and breastfeeding because it is elective."] },
      { heading: "Aftercare and possible side effects", paragraphs: ["Temporary sensitivity and gum irritation can occur. Results gradually fade with ageing and exposure to staining habits. Good oral hygiene and avoiding tobacco and areca nut can help maintain the result."] },
    ],
    faqs: [
      { question: "How much does teeth whitening cost in Kathmandu?", answer: "Prices vary by system, number of sessions and any care required first. An examination is needed for an accurate current quotation." },
      { question: "Does teeth whitening damage enamel?", answer: "Professional whitening using an appropriate product and protocol is generally considered safe, although temporary sensitivity and gum irritation can occur." },
      { question: "Does whitening work on crowns or fillings?", answer: "No. Whitening changes natural tooth structure but does not change the colour of existing restorations." },
      { question: "Is laser whitening better?", answer: "Not necessarily. Light or laser activation does not automatically produce a better or longer-lasting result." },
    ],
  },
  {
    slug: "invisalign-clear-aligners-nepal-cost", date: reviewed,
    title: "Invisalign & Clear Aligners in Nepal: Cost, Process & What to Expect",
    text: "Compare clear aligners and braces, understand typical costs, treatment steps and who may be suitable.",
    metaDescription: "How much does Invisalign cost in Nepal? Compare clear aligners and braces, understand the process and learn whether you may be a candidate.",
    category: "Orthodontics", readTime: "9 min read", imageClass: "art-1", image: aligners, secondaryImage: oralScreening,
    introduction: "Invisalign and other clear aligners in Nepal may cost approximately NPR 120,000-350,000 or more. Final cost depends on case complexity, aligner system, tray count, refinements and monitoring. Most plans require 20-22 hours of daily wear.",
    sections: [
      { heading: "What are clear aligners?", paragraphs: ["Clear aligners are removable transparent trays that move teeth through a planned sequence. Invisalign is one recognised system, but local and international alternatives are available. Diagnosis, planning and professional supervision matter as much as brand."] },
      { heading: "Clear aligners vs traditional braces", paragraphs: ["Aligners are discreet and removable for eating and cleaning, but success depends on consistent wear. Braces remain fixed and can manage a broad range of movements. Aligners often suit mild-to-moderate crowding or spacing; braces may be recommended for more complex correction."], bullets: ["Clear aligners: approximately NPR 120,000-350,000+", "Metal braces: approximately NPR 45,000-90,000", "General market estimates only; obtain an individual plan"] },
      { heading: "What affects clear-aligner cost?", paragraphs: ["Tray count, system, complexity, reviews, refinements and preliminary dental treatment affect the total. Ask what the quotation includes, how often reviews occur and what happens if teeth do not track as planned."] },
      { heading: "How clear-aligner treatment works", paragraphs: ["Assessment may include an examination, digital scan, photographs and X-rays. Custom trays are usually worn for 20-22 hours daily and changed every one or two weeks according to instructions. Progress is monitored and retainers are generally needed afterward."] },
      { heading: "Are you a suitable candidate?", paragraphs: ["Aligners may suit mild-to-moderate crowding, spacing and selected bite problems. Severe crowding, complex rotations, major bite discrepancies or inconsistent wear may favour braces. Cavities and active gum disease should be treated first."] },
      { heading: "Clear aligners for people living abroad", paragraphs: ["Some plans combine in-person assessment with remote monitoring and scheduled Nepal visits. Confirm how many appointments are required and how refinements or retainers will be delivered."] },
    ],
    faqs: [
      { question: "How much does Invisalign cost in Nepal?", answer: "Clear-aligner treatment may cost around NPR 120,000-350,000 or more depending on complexity, system, tray count and monitoring." },
      { question: "How long do clear aligners take?", answer: "Many cases take about 6-18 months, but duration varies with the movement required and how consistently trays are worn." },
      { question: "How many hours should aligners be worn?", answer: "Most plans recommend approximately 20-22 hours per day." },
      { question: "Do I need retainers after aligners?", answer: "Yes. Retainers are generally recommended to maintain corrected tooth positions." },
    ],
  },
  {
    slug: "dental-treatment-cost-nepal", date: reviewed,
    title: "Dental Treatment Cost in Nepal (2026): Complete Price Guide",
    text: "A practical 2026 reference for dental treatment prices in Nepal and factors affecting your final quotation.",
    metaDescription: "Explore 2026 dental treatment costs in Nepal, including cleaning, fillings, root canals, crowns, implants, braces and clear aligners.",
    category: "Treatment costs", readTime: "10 min read", imageClass: "art-2", image: consultation, secondaryImage: clinic,
    introduction: "Dental treatment cost in Nepal varies by procedure, materials, complexity and what a clinic includes. General Kathmandu estimates range from about NPR 1,300 for basic cleaning to NPR 60,000-200,000+ for one implant and NPR 120,000-350,000+ for clear aligners.",
    sections: [
      { heading: "Dental treatment price guide for Nepal", paragraphs: ["These are broad 2026 market references, not fixed Aannapurnaa Dental quotations. An examination and any necessary imaging are required for an accurate plan."], bullets: ["Cleaning/scaling: NPR 1,300-4,500", "Dental filling: NPR 500-7,000 per tooth", "Simple extraction: NPR 500-2,500", "Wisdom-tooth removal: NPR 4,000-25,500", "Root canal: NPR 7,000-16,000", "Dental crown: NPR 6,000-26,000", "Professional whitening: NPR 8,000-25,000", "Metal braces: NPR 45,000-90,000", "Clear aligners: NPR 120,000-350,000+", "Single implant: NPR 60,000-200,000+"] },
      { heading: "Why do prices differ between clinics?", paragraphs: ["Complexity, material choice, tooth location, laboratory work, additional procedures and follow-up all change cost. Ask whether imaging, medication, reviews, retainers, implant components or crowns are included."] },
      { heading: "How to compare dental quotations", paragraphs: ["Compare complete scope, not headline price. For implants, confirm whether implant, abutment, crown, surgery, imaging and follow-up are included. For aligners, ask about refinements and retainers. For crowns and veneers, ask which material and laboratory are specified."] },
      { heading: "Planning treatment for NRNs", paragraphs: ["Cleaning, examinations, some fillings and simple extractions may take one or two appointments. Root canals with crowns, implants, orthodontics and extensive restorative care require more planning. Obtain a realistic schedule before booking travel."] },
      { heading: "Is dental treatment cheaper in Nepal?", paragraphs: ["Treatment can cost less than in many higher-cost healthcare markets, but there is no reliable percentage for every procedure. Compare itemised plans using comparable materials, stages and follow-up."] },
    ],
    faqs: [
      { question: "How much does a dental filling cost in Nepal?", answer: "A filling may cost approximately NPR 500-7,000 per tooth, depending on cavity size, tooth location, material and clinic." },
      { question: "How much does a root canal cost in Nepal?", answer: "A root canal may cost approximately NPR 7,000-16,000, depending on the tooth and complexity. A crown may be separate." },
      { question: "How much does a dental implant cost in Nepal?", answer: "A single implant may cost approximately NPR 60,000-200,000 or more, depending on system, crown, bone and complexity." },
      { question: "How can I get an accurate dental quotation?", answer: "An accurate quotation usually requires an examination and, where appropriate, X-rays, photographs or scans." },
    ],
  },
  {
    slug: "dental-implants-nepal-cost-process", date: reviewed,
    title: "Dental Implants in Nepal: Cost, Process, Recovery & What to Expect",
    text: "Understand implant costs in Nepal, candidacy, each treatment stage, healing time and alternatives.",
    metaDescription: "How much do dental implants cost in Nepal? Understand the process, recovery timeline, candidacy and how implants compare with bridges and dentures.",
    category: "Restorative dentistry", readTime: "10 min read", imageClass: "art-3", image: implant, secondaryImage: examination,
    introduction: "A single dental implant in Nepal may cost approximately NPR 60,000-200,000 or more. Total cost depends on the implant system, crown, bone condition and additional procedures. Treatment commonly takes 3-6 months for integration with the jawbone.",
    sections: [
      { heading: "What is a dental implant?", paragraphs: ["A dental implant is usually a titanium post placed in the jawbone to replace a missing tooth root. After osseointegration, it supports an abutment and custom crown. Implants can replace one tooth, support a bridge or help retain a full arch."] },
      { heading: "How much do dental implants cost in Nepal?", paragraphs: ["Market references include implant placement around NPR 60,000-100,000+, premium systems around NPR 100,000-200,000+, crowns around NPR 15,000-30,000+ and grafting around NPR 15,000-25,000+. Full-arch care may range from NPR 500,000-3,000,000+. Confirm what is included."] },
      { heading: "Who may be a suitable candidate?", paragraphs: ["Assessment considers available bone, gum health, oral hygiene, healing capacity and expectations. Active gum disease, significant bone loss, heavy smoking, poorly controlled diabetes and some medicines require additional planning."] },
      { heading: "Dental implant process step by step", paragraphs: ["Care starts with examination and imaging, followed by management of infection or gum disease. Grafting may be needed. The implant is placed under local anaesthesia, allowed to integrate for several months and then restored once stable."], bullets: ["Consultation and examination", "X-rays or CBCT where indicated", "Preliminary care or grafting if required", "Implant placement", "Healing and osseointegration", "Final abutment and crown"] },
      { heading: "Recovery timeline and warning signs", paragraphs: ["Swelling and discomfort often improve over a few days; gum healing commonly takes one or two weeks. Osseointegration commonly takes 3-6 months. Contact your dentist for severe or worsening pain, increasing swelling, fever, heavy bleeding, infection signs or a loose restoration."] },
      { heading: "Implants, bridges or dentures?", paragraphs: ["Implants can help maintain bone but take longer and often cost more initially. Bridges are fixed and often quicker but may involve adjacent teeth. Dentures are usually removable. The right option depends on teeth, bone, gums, health, budget and priorities."] },
      { heading: "Implants for Nepalese living abroad", paragraphs: ["Before travelling, confirm the visits required, whether grafting is likely, how long to remain after surgery and what happens if healing takes longer. Follow-up matters as much as price."] },
    ],
    faqs: [
      { question: "How much does a dental implant cost in Nepal?", answer: "A single implant may cost approximately NPR 60,000-200,000 or more depending on system, crown, bone and complexity." },
      { question: "How long does a dental implant take?", answer: "The complete process commonly takes around 3-6 months, but grafting, infection or delayed healing can extend it." },
      { question: "Is dental implant surgery painful?", answer: "Placement is performed under local anaesthesia. Some soreness and swelling afterward are common and usually improve over the following days." },
      { question: "What if I do not have enough bone?", answer: "A bone graft, sinus augmentation or another bone-building procedure may be recommended, adding cost and healing time." },
      { question: "How long do dental implants last?", answer: "Implants can function for many years, often decades, with effective hygiene and maintenance, but no implant is guaranteed for life." },
    ],
  },
];

export function getPost(slug: string) { return posts.find((post) => post.slug === slug); }
