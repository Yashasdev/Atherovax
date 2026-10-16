import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-cyan" : "text-midnight/70"}`}>
      <span className="h-px w-8 bg-cyan" />
      {children}
    </p>
  );
}

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
);
