import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, FlaskConical, User } from "lucide-react";
import * as C from "../content";
import { FORMSPREE_URL, SHEETS_WEBHOOK_URL } from "../formConfig";
import { Container, Eyebrow, Reveal } from "./ui";
import { ArteryCompare, HeroVisual, MechanismDiagram } from "./Visuals";

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_#38CFF2]";
const btnGhost = "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_40%,#0B2347_0%,#07162E_65%)]" />
      <div className="absolute inset-0 -z-10 opacity-90"><HeroVisual /></div>
      <Container className="pt-28 pb-24">
        <p className="rise mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan"><span className="h-px w-8 bg-cyan" />{C.home.hero.eyebrow}</p>
        <h1 className="rise max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight [animation-delay:.15s] sm:text-6xl lg:text-7xl">{C.home.hero.headline}</h1>
        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:.3s]">{C.home.hero.sub}</p>
        <div className="rise mt-10 flex flex-wrap gap-4 [animation-delay:.45s]">
          <a href={C.home.hero.primaryCta.href} className={btnPrimary}>{C.home.hero.primaryCta.label} <ArrowRight size={16} /></a>
          <a href={C.home.hero.secondaryCta.href} className={btnGhost}>{C.home.hero.secondaryCta.label}</a>
        </div>
      </Container>
      <a href="#challenge" aria-label="Scroll to next section" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2"><span className="scrolldot h-2 w-1 rounded-full bg-cyan" /></span>
      </a>
    </section>
  );
}

export function Challenge() {
  return (
    <section id="challenge" className="bg-navy pb-28 pt-8 text-white">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow dark>{C.home.challenge.title}</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{C.home.challenge.headline}</h2>
          {C.home.challenge.body.map((p) => <p key={p} className="mt-5 leading-relaxed text-white/70">{p}</p>)}
        </Reveal>
        <Reveal delay={150}><ArteryCompare /></Reveal>
      </Container>
    </section>
  );
}

export function Approach() {
  return (
    <section className="bg-mist py-28">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <Eyebrow>{C.home.approach.title}</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{C.home.approach.headline}</h2>
          {C.home.approach.body.map((p) => <p key={p} className="mt-5 max-w-xl leading-relaxed text-navy/70">{p}</p>)}
        </Reveal>
        <Reveal delay={150} className="self-center">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-2xl shadow-navy/20 transition hover:-translate-y-1">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{C.home.lead.label}</p>
            <h3 className="mt-4 text-4xl font-semibold">{C.home.lead.name}</h3>
            <span className="mt-3 inline-block rounded-full border border-cyan/50 px-3 py-1 text-xs text-cyan">{C.home.lead.status}</span>
            <p className="mt-6 leading-relaxed text-white/75">{C.home.lead.body}</p>
            <a href={C.home.lead.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:gap-3">{C.home.lead.linkLabel} <ArrowRight size={16} /></a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Science() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="science" className="bg-navy py-28 text-white">
      <Container>
        <Reveal>
          <Eyebrow dark>Our Science</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{C.science.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {C.science.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-white/10 bg-midnight/60 p-8 transition hover:-translate-y-1 hover:border-cyan/60">
                <span className="text-sm font-semibold text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-b from-midnight to-navy p-6 md:p-10"><MechanismDiagram /></div>
          <p className="mt-5 flex gap-3 rounded-2xl border border-cyan/30 bg-cyan/5 p-4 text-sm text-white/80"><FlaskConical className="mt-0.5 shrink-0 text-cyan" size={18} />{C.science.disclaimer} Schematic illustration, not to scale.</p>
        </Reveal>
        <Reveal className="mt-14">
          <h3 className="mb-4 text-lg font-semibold">Explore the science</h3>
          <div className="divide-y divide-white/10 rounded-3xl border border-white/10">
            {C.science.explore.map((e, i) => (
              <div key={e.q}>
                <button aria-expanded={open === i} aria-controls={`ex-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium hover:text-cyan">
                  {e.q}<ChevronDown size={18} className={`shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p id={`ex-${i}`} className="px-6 pb-6 text-sm leading-relaxed text-white/70">{e.a}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Landscape() {
  return (
    <section className="bg-mist py-28">
      <Container>
        <Reveal>
          <Eyebrow>Landscape</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{C.science.landscape.title}</h2>
          <p className="mt-4 max-w-2xl text-navy/70">{C.science.landscape.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {C.science.landscape.items.map((it, i) => (
            <Reveal key={it.t} delay={i * 100}>
              <div className={`h-full rounded-3xl border p-8 transition hover:-translate-y-1 ${it.highlight ? "border-cyan bg-white shadow-lg shadow-cyan/10" : "border-navy/10 bg-white"}`}>
                <h3 className="text-lg font-semibold">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Development() {
  const d = C.development;
  return (
    <section id="development" className="bg-white py-28">
      <Container>
        <Reveal>
          <Eyebrow>Development</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{d.title}</h2>
          <p className="mt-5 max-w-2xl text-navy/70">{d.intro}</p>
        </Reveal>
        <Reveal className="mt-14">
          <ol className="grid gap-4 md:grid-cols-4">
            {d.stages.map((s, i) => {
              const cur = i === d.currentStage - 1;
              return (
                <li key={s} className={`relative rounded-2xl border p-5 ${cur ? "border-cyan bg-navy text-white" : "border-dashed border-navy/20 text-navy/50"}`}>
                  <span className={`mb-3 block h-2 w-2 rounded-full ${cur ? "glow bg-cyan" : "bg-navy/20"}`} />
                  <p className="text-sm font-semibold">{s}</p>
                  <p className="mt-1 text-xs">{cur ? "Current stage" : "Future step · not yet reached"}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl font-semibold">{d.earlyResearch.title}</h3>
            <p className="mt-4 leading-relaxed text-navy/70">{d.earlyResearch.body}</p>
          </Reveal>
          <Reveal delay={120}>
            {d.earlyResearch.figure ? (
              <img src={d.earlyResearch.figure} alt={d.earlyResearch.figureAlt ?? ""} className="aspect-[16/10] w-full rounded-3xl border border-navy/10 object-cover" />
            ) : (
              <div role="img" aria-label="Placeholder for approved research figure" className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-dashed border-navy/25 bg-mist p-8 text-center text-sm text-navy/55">{d.earlyResearch.figureNote}</div>
            )}
          </Reveal>
        </div>
        {!!d.researchUpdates?.length && (
          <Reveal className="mt-16">
            <h3 className="text-lg font-semibold">Research updates</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {d.researchUpdates.map((u) => (
                <li key={u.title} className="rounded-2xl border border-navy/10 bg-mist p-6">
                  {u.date && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-midnight/70">{u.date}</p>}
                  <p className="mt-2 font-semibold">{u.title}</p>
                  {u.body && <p className="mt-2 text-sm leading-relaxed text-navy/70">{u.body}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        <Reveal className="mt-20">
          <h3 className="text-lg font-semibold">Sources &amp; publications</h3>
          <ul className="mt-4 divide-y divide-navy/10 rounded-2xl border border-navy/10">
            {C.publications.map((p) => {
              const href = p.url || (p.doi ? (p.doi.startsWith("http") ? p.doi : `https://doi.org/${p.doi}`) : "");
              const meta = [p.authors, p.date].filter(Boolean).join(" · ");
              const detail = !!(meta || p.description || p.image);
              if (!detail) {
                return (
                  <li key={p.title}>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-5 py-4 text-sm hover:text-midnight hover:underline">{p.title}<ArrowUpRight size={16} className="shrink-0 text-cyan" /></a>
                    ) : <span className="block px-5 py-4 text-sm text-navy/50">{p.title}</span>}
                  </li>
                );
              }
              const body = (
                <>
                  {p.image && <img src={p.image} alt="" className="h-14 w-20 shrink-0 rounded-lg object-cover" />}
                  <span className="min-w-0 flex-1">
                    <span className="block">{p.title}</span>
                    {meta && <span className="mt-1 block text-xs text-navy/55">{meta}</span>}
                    {p.description && <span className="mt-1 block text-xs leading-relaxed text-navy/65">{p.description}</span>}
                  </span>
                </>
              );
              return (
                <li key={p.title}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-4 px-5 py-4 text-sm hover:text-midnight hover:underline">{body}<ArrowUpRight size={16} className="mt-0.5 shrink-0 text-cyan" /></a>
                  ) : <span className="flex items-start gap-4 px-5 py-4 text-sm text-navy/50">{body}</span>}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-navy py-28 text-white">
      <Container>
        <Reveal>
          <Eyebrow dark>Team</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{C.team.title}</h2>
          <p className="mt-4 text-sm text-white/50">{C.team.note}</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {C.team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article className="group h-full rounded-3xl border border-white/10 bg-midnight/60 p-6 transition hover:-translate-y-1 hover:border-cyan/60">
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-midnight to-navy text-white/30" aria-label="Portrait placeholder" role="img">
                  {m.photo ? <img src={m.photo} alt={m.name} className="h-full w-full rounded-2xl object-cover" /> : <User size={56} strokeWidth={1} />}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{m.role}</p>
                <h3 className="mt-2 text-xl font-semibold">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{m.bio}</p>
                {m.href && <a href={m.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan">Institutional profile <ArrowUpRight size={14} /></a>}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  
const [sent, setSent] = useState(false);
const [submitting, setSubmitting] = useState(false);
const [error, setError] = useState(false);

const submit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitting(true);
  setError(false);

  const form = e.currentTarget;

  try {
    // First: Send the submission to Formspree
    const response = await fetch(
      FORMSPREE_URL,
      {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Formspree submission failed");
    }

    // Second: Send a copy to Google Sheets
    try {
      await fetch(
        SHEETS_WEBHOOK_URL,
        {
          method: "POST",
          body: new FormData(form),
          mode: "no-cors",
        }
      );
    } catch (sheetError) {
      console.error("Google Sheets submission failed:", sheetError);
    }

    setSent(true);
    form.reset();

  } catch {
    setError(true);
  } finally {
    setSubmitting(false);
  }
};
  
  const field = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm focus:border-cyan";
  return (
    <section id="contact" className="bg-mist py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{C.company.contact.title}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-navy/70">{C.company.contact.body}</p>
          <p className="mt-8 text-sm text-navy/60">{C.company.contact.email}<br />{C.company.contact.location}</p>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="rounded-3xl border border-navy/10 bg-white p-8 shadow-xl shadow-navy/5">
          
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Name<input required name="name" autoComplete="name" className={field} /></label>
              <label className="text-sm font-medium">Email<input required type="email" name="email" autoComplete="email" className={field} /></label>
              <label className="text-sm font-medium">Organization<input name="org" autoComplete="organization" className={field} /></label>
              <label className="text-sm font-medium">Inquiry type
                <select name="type" className={field}>{C.contactForm.inquiryTypes.map((t) => <option key={t}>{t}</option>)}</select>
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">Message<textarea required name="message" rows={5} className={field} /></label>
            <button 
              type="submit" 
              disabled={submitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-midnight disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send"}
              {!submitting && !sent && <ArrowRight size={16} />}
            </button>
            
             {sent && (
                 <p role="status" className="mt-4 text-sm text-midnight">
                  {C.contactForm.successMessage}
                 </p>
              )}

              {error && (
                 <p role="alert" className="mt-4 text-sm text-red-600">
                 {C.contactForm.errorMessage}
                 </p>
               )}

          </form>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-white/60">
      <Container className="text-xs leading-relaxed">
        <p className="mb-2 text-base font-semibold text-white">AtheroVax</p>
        <p className="max-w-3xl">{C.company.footerNote}</p>
      </Container>
    </footer>
  );
}

/** Optional block: renders only when a mission statement or featured images have been added in the CMS. */
export function Highlights() {
  const { mission, featuredImages } = C.home;
  const images = (featuredImages ?? []).filter((i) => i.image);
  if (!mission && !images.length) return null;
  return (
    <section className="bg-navy pb-16 pt-4 text-white">
      <Container>
        <Reveal>
          {mission && <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{mission}</p>}
          {!!images.length && (
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {images.map((i) => (
                <figure key={i.image} className="overflow-hidden rounded-3xl border border-white/10 bg-midnight/60">
                  <img src={i.image} alt={i.alt ?? ""} className="aspect-[4/3] w-full object-cover" />
                  {i.caption && <figcaption className="px-5 py-4 text-sm text-white/70">{i.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

/** Optional block: About, partnership info and announcements. Renders only when filled in via the CMS. */
export function Company() {
  const { about, partnership, announcements } = C.company;
  const blocks = [about, partnership].filter((b) => b?.body);
  if (!blocks.length && !announcements?.length) return null;
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <Eyebrow>Company</Eyebrow>
          {!!blocks.length && (
            <div className="grid gap-10 md:grid-cols-2">
              {blocks.map((b) => (
                <div key={b!.title}>
                  <h3 className="text-2xl font-semibold">{b!.title}</h3>
                  <p className="mt-4 leading-relaxed text-navy/70">{b!.body}</p>
                </div>
              ))}
            </div>
          )}
          {!!announcements?.length && (
            <div className={blocks.length ? "mt-14" : ""}>
              <h3 className="text-lg font-semibold">Announcements</h3>
              <ul className="mt-4 divide-y divide-navy/10 rounded-2xl border border-navy/10">
                {announcements.map((a) => (
                  <li key={a.title} className="px-5 py-4 text-sm">
                    {a.date && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-midnight/70">{a.date}</p>}
                    <p className="mt-1 font-semibold">{a.title}</p>
                    {a.body && <p className="mt-1 leading-relaxed text-navy/70">{a.body}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
