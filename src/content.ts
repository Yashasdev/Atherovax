// Central content file. Items marked `draft: true` or "PLACEHOLDER" require approval before publication.

export const nav = [
  { id: "home", label: "Home" },
  { id: "science", label: "Our Science" },
  { id: "development", label: "Development" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  headline: "Rethinking cardiovascular disease through immune tolerance.",
  sub: "AtheroVax is developing an investigational approach to atherosclerosis designed to address immune-driven inflammation within the arteries.",
};

export const challenge = {
  title: "The Challenge",
  body: [
    "Atherosclerosis occurs when plaque builds up within artery walls, narrowing and stiffening the vessels that carry blood through the body.",
    "Inflammation plays a role in how the disease progresses. Existing cardiovascular treatments address important risk factors, but inflammatory processes remain an area of active investigation.",
  ],
};

export const approach = {
  title: "A Different Approach",
  body: [
    "The immune system can contribute to chronic inflammation in the arterial wall. Restoring tolerance to specific molecular targets may represent a new therapeutic strategy.",
    "AtheroVax is investigating whether teaching the immune system a calmer, antigen-specific response could reduce that inflammation. This idea remains under preclinical investigation.",
  ],
};

export const lead = {
  name: "ATH101",
  status: "Preclinical · Investigational candidate",
  body: "ATH101 combines selected ApoB peptide fragments with a biodegradable PLGA nanoparticle carrier, designed to encourage an antigen-specific regulatory immune response. It has not been tested in people.",
};

export const science = {
  title: "Teaching the immune system a different response.",
  disclaimer:
    "This is a proposed therapeutic mechanism under preclinical investigation. It is not an established treatment effect in people.",
  steps: [
    { n: "01", title: "Targeted peptides", body: "ATH101 incorporates selected fragments of apolipoprotein B (ApoB), a protein associated with particles that transport cholesterol in the blood." },
    { n: "02", title: "Nanoparticle delivery", body: "A biodegradable PLGA polymer carrier packages the selected peptides for investigational delivery." },
    { n: "03", title: "Intended immune tolerance", body: "The formulation is designed to encourage an antigen-specific regulatory immune response that could reduce inflammation associated with atherosclerosis." },
  ],
  explore: [
    { q: "What are regulatory T cells?", a: "Regulatory T cells (Tregs) are immune cells that help keep immune responses in balance and limit unwanted inflammation. The ATH101 concept aims to encourage Tregs that respond to specific ApoB-derived targets." },
    { q: "What is ApoB?", a: "Apolipoprotein B (ApoB) is the main protein component of LDL and related lipoprotein particles. Fragments of ApoB can be recognized by immune cells in the artery wall." },
    { q: "Research background", a: "The concept builds on academic research into immune responses in atherosclerosis, including work from the Ley laboratory. See the sources listed under Development. [Detailed background: PLACEHOLDER pending approval]" },
  ],
};

export const landscape = {
  title: "Where this research fits",
  intro: "AtheroVax is a complementary research direction. It is not presented as clinically superior to established therapies.",
  items: [
    { t: "LDL-lowering treatments", d: "Established therapies that target circulating cholesterol levels." },
    { t: "Gene-editing programs", d: "Investigational programs that explore genetically modifying cholesterol-related pathways." },
    { t: "Antigen-specific immune tolerance", d: "An investigational direction that studies the immune response associated with arterial disease.", highlight: true },
  ],
};

export const development = {
  title: "Advancing a new approach to cardiovascular immunotherapy.",
  intro: "ATH101 is a preclinical research program. Later stages below are shown for orientation only and have not been reached.",
  currentStage: 0,
  stages: ["Preclinical Research", "IND-Enabling Studies", "Clinical Development", "Regulatory Review"],
  earlyResearch: {
    title: "Early Research",
    body: "The supplied presentation describes reduced plaque coverage in treated groups versus a diseased control in an experimental mouse model. These results are preclinical. Safety and effectiveness in humans have not been established.",
    figureNote: "PLACEHOLDER — approved research figure. Insert only once cleared for public release.",
  },
  publications: [
    { title: "Klaus Ley — Augusta University profile", href: "https://www.augusta.edu/centers/immcg/klaus-ley.php" },
    { title: "Ley Laboratory — Immunology Center of Georgia", href: "https://www.augusta.edu/centers/immcg/klaus-ley-lab/" },
    { title: "Peer-reviewed publication list: PLACEHOLDER pending verification", href: "" },
  ],
};

export const team = {
  title: "Grounded in scientific discovery. Driven by cardiovascular innovation.",
  note: "Draft content. Affiliations and company roles require approval before publication.",
  members: [
    { name: "Klaus Ley, MD", role: "Founder", bio: "Cardiovascular immunology researcher and Founding Co-Director of the Immunology Center of Georgia at Augusta University. His work studies immune responses in atherosclerosis and the potential for immune-directed therapies.", href: "https://www.augusta.edu/centers/immcg/klaus-ley.php", photo: "" },
    { name: "Eric Topol, MD", role: "Co-founder", bio: "Cardiologist, physician-scientist, and leader of the Scripps Research Translational Institute.", href: "https://www.scripps.edu/faculty/topol/", photo: "" },
    { name: "Clive Meanwell, MD, PhD", role: "Investor", bio: "Biopharmaceutical entrepreneur, co-founder of Population Health Partners, and founder and former CEO of The Medicines Company.", href: "", photo: "" },
  ],
};

export const contact = {
  title: "Connect with AtheroVax.",
  body: "We welcome inquiries about research collaboration and strategic partnership, as well as questions from investors and the scientific community.",
  email: "contact@example.com (PLACEHOLDER — replace with approved address)",
  location: "Location: PLACEHOLDER",
  inquiryTypes: ["Research collaboration", "Strategic partnership", "Investor inquiry", "Media / general"],
};

export const footerNote =
  "ATH101 is an investigational, preclinical candidate. Safety and effectiveness in humans have not been established. This site is for informational purposes and is not medical advice.";
