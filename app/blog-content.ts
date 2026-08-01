export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  text: string;
  category: string;
  readTime: string;
  imageClass: string;
  image: string;
  secondaryImage: string;
  introduction: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const posts: BlogPost[] = [
  {
    slug: "planning-dental-treatment-nepal",
    date: "18 Jul 2026",
    title: "Planning dental treatment on your next trip to Nepal",
    text: "A practical timeline for consultations, scans, procedures and follow-up.",
    category: "Dental travel",
    readTime: "6 min read",
    imageClass: "art-1",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    introduction: "Combining dental care with a visit to Nepal can be convenient, but successful treatment depends on realistic scheduling and careful follow-up. A clear plan before you travel helps your clinical team assess what can be completed safely during your stay.",
    sections: [
      { heading: "Begin planning before you travel", paragraphs: ["Contact the clinic as early as possible and explain your main concern, relevant medical conditions, current medicines and expected travel dates. Recent dental records or X-rays may be useful for initial planning, although they do not replace an in-person examination.", "Complex treatment should never be confirmed from photographs or messages alone. Your final plan and fees can only be established after a clinical assessment and any necessary imaging."] },
      { heading: "Allow time for assessment and treatment", paragraphs: ["Keep the first part of your visit available for consultation. Your dentist may recommend examination, digital imaging, photographs or diagnostic impressions before discussing suitable options."], bullets: ["Check-ups, hygiene care and simple restorations may require one or two visits.", "Root canal treatment, crowns and bridges often need several appointments.", "Implant treatment usually involves healing periods measured in months and may require a later visit.", "Extensive rehabilitation should include contingency time for review and adjustment."] },
      { heading: "Plan around flights and recovery", paragraphs: ["Some procedures can cause temporary swelling, sensitivity or dietary restrictions. Avoid scheduling significant treatment immediately before a long flight or an important event. Your clinician will advise when travel is appropriate based on the procedure and your health." ] },
      { heading: "Arrange dependable follow-up", paragraphs: ["Before leaving Nepal, obtain a treatment summary, relevant radiographs, material details and aftercare instructions. Ask whom to contact if symptoms develop and whether routine maintenance can be completed by your dentist at home.", "Seek urgent dental care for increasing swelling, uncontrolled bleeding, fever, difficulty breathing or swallowing, or severe pain that is not improving."] },
    ],
  },
  {
    slug: "dental-implants-questions",
    date: "02 Jul 2026",
    title: "Dental implants: the questions worth asking first",
    text: "Understand candidacy, healing time, materials and long-term care.",
    category: "Dental implants",
    readTime: "7 min read",
    imageClass: "art-2",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85",
    introduction: "Dental implants can replace missing teeth with a stable, natural-looking restoration. They are not the only option, and suitability depends on your oral health, general health, available bone and long-term maintenance needs.",
    sections: [
      { heading: "Am I a suitable candidate?", paragraphs: ["A thorough assessment should include your medical and dental history, gum health, bite and three-dimensional bone anatomy where indicated. Smoking, uncontrolled diabetes, active gum disease and some medicines may increase risk and need to be addressed before treatment."] },
      { heading: "What does the full treatment involve?", paragraphs: ["Implant care commonly includes planning, surgical placement, healing, fitting the final tooth and ongoing maintenance. Bone or gum grafting may be recommended when tissue volume is insufficient."], bullets: ["Ask how many appointments and stages are expected.", "Clarify whether a temporary tooth will be available during healing.", "Understand which clinician is responsible for surgery, restoration and review.", "Request a written plan that separates essential and optional procedures."] },
      { heading: "How long will healing take?", paragraphs: ["Healing varies with the implant site, bone quality, grafting, general health and loading protocol. Some patients can receive a temporary restoration quickly, while others need several months before the implant supports a final crown. Faster treatment is not appropriate in every case."] },
      { heading: "What affects long-term success?", paragraphs: ["Implants cannot develop tooth decay, but the surrounding gum and bone can become inflamed. Daily plaque control, professional maintenance and management of grinding or smoking are essential. Ask about the implant system, restoration material, warranty terms and the availability of replacement components."] },
      { heading: "What alternatives should I consider?", paragraphs: ["Depending on your situation, a bridge, removable denture, orthodontic space closure or no immediate replacement may be reasonable. A professional recommendation should explain benefits, limitations, costs and likely maintenance for every suitable option."] },
    ],
  },
  {
    slug: "child-first-dental-visit",
    date: "21 Jun 2026",
    title: "A gentler guide to your child’s first dental visit",
    text: "Small steps that make a first appointment feel safe and familiar.",
    category: "Children's dentistry",
    readTime: "5 min read",
    imageClass: "art-3",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
    introduction: "A positive first visit helps children become comfortable with preventive dental care. The goal is to build familiarity, check healthy development and give parents practical guidance without creating pressure or fear.",
    sections: [
      { heading: "When should the first visit happen?", paragraphs: ["Professional guidance generally recommends a dental visit when the first tooth appears or by the first birthday. Early appointments allow the dentist to assess development, identify risk factors and discuss feeding, brushing and fluoride."] },
      { heading: "Prepare with simple, positive language", paragraphs: ["Tell your child that the dentist will count and look after their teeth. Avoid words that suggest pain, needles or drilling, and do not promise that nothing will happen. A calm, matter-of-fact explanation is usually most reassuring."], bullets: ["Choose an appointment time when your child is normally rested.", "Bring a list of medicines, allergies and relevant health information.", "Pack a familiar comfort item if it helps your child settle.", "Let the dental team introduce instruments in an age-appropriate way."] },
      { heading: "What happens during the appointment?", paragraphs: ["The dentist may examine a young child while they sit with a parent. The visit can include counting teeth, checking the bite and gums, assessing cavity risk and demonstrating brushing. X-rays are only recommended when the expected clinical benefit justifies them."] },
      { heading: "Build healthy habits at home", paragraphs: ["Brush twice daily with an age-appropriate amount of fluoride toothpaste and supervise until your child has reliable dexterity. Keep sugary snacks and drinks to mealtimes, encourage water between meals and avoid putting a child to bed with a bottle containing milk or sweetened liquid."] },
      { heading: "If your child feels anxious", paragraphs: ["Some children need several short visits before they accept a full examination. This is normal. Consistent language, gradual exposure and praise for specific cooperative steps can help. Your dentist can discuss additional behaviour-support options when clinically necessary."] },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
