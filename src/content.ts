// Site content now lives in src/content/*.json and is edited through Pages CMS (see .pages.yml and CMS_GUIDE.md).
// This file only types the JSON and exposes it to the components.
import homeJson from "./content/home.json";
import scienceJson from "./content/science.json";
import developmentJson from "./content/development.json";
import publicationsJson from "./content/publications.json";
import teamJson from "./content/team.json";
import companyJson from "./content/company.json";
import formJson from "./content/contact-form.json";

export const nav = [
  { id: "home", label: "Home" },
  { id: "science", label: "Our Science" },
  { id: "development", label: "Development" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

type Cta = { label: string; href: string };
type Titled = { title: string; headline: string; body: string[] };

export const home = homeJson as unknown as {
  hero: { eyebrow: string; headline: string; sub: string; primaryCta: Cta; secondaryCta: Cta };
  mission?: string;
  featuredImages?: { image?: string; alt?: string; caption?: string }[];
  challenge: Titled;
  approach: Titled;
  lead: { label: string; name: string; status: string; body: string; linkLabel: string; href: string };
};

export const science = scienceJson as unknown as {
  title: string;
  disclaimer: string;
  steps: { title: string; body: string }[];
  explore: { q: string; a: string }[];
  landscape: { title: string; intro: string; items: { t: string; d: string; highlight?: boolean }[] };
};

export const development = developmentJson as unknown as {
  title: string;
  intro: string;
  currentStage: number; // 1-based
  stages: string[];
  earlyResearch: { title: string; body: string; figure?: string; figureAlt?: string; figureNote: string };
  researchUpdates?: { title: string; date?: string; body?: string }[];
};

export type Publication = { title: string; authors?: string; date?: string; description?: string; doi?: string; url?: string; image?: string };
export const publications = (publicationsJson as unknown as { items: Publication[] }).items;

export const team = teamJson as unknown as {
  title: string;
  note: string;
  members: { name: string; role: string; bio: string; href?: string; photo?: string }[];
};

export const company = companyJson as unknown as {
  about?: { title?: string; body?: string };
  partnership?: { title?: string; body?: string };
  announcements?: { title: string; date?: string; body?: string }[];
  contact: { title: string; body: string; email: string; location: string };
  footerNote: string;
};

export const contactForm = formJson as unknown as { inquiryTypes: string[]; successMessage: string; errorMessage: string };
