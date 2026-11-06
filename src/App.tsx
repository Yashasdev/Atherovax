import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "./content";
import { Approach, Challenge, Company, Contact, Development, Footer, Hero, Highlights, Landscape, Science, Team } from "./components/Sections";

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? "bg-navy/90 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-white md:px-10">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_14px_#38CFF2]" />AtheroVax
        </a>
        <nav aria-label="Primary" className="hidden gap-8 text-sm md:flex">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="text-white/80 transition hover:text-cyan">{n.label}</a>)}
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 pb-6 text-white md:hidden">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-3 text-lg">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}

export default function App() {
  return (
    <>
      <a href="#challenge" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Challenge />
        <Approach />
        <Science />
        <Landscape />
        <Development />
        <Team />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
