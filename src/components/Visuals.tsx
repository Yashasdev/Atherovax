import { useId } from "react";

/** Abstract vessel network with drifting nanoparticles. */
export function HeroVisual() {
  const id = useId();
  const dots = [[780,150,5],[860,300,8],[690,420,4],[900,470,6],[610,230,3],[740,560,7],[950,180,3],[560,480,5]];
  return (
    <svg viewBox="0 0 1000 700" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38CFF2" stopOpacity=".9" />
          <stop offset="100%" stopColor="#38CFF2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}l`} x1="0" x2="1">
          <stop offset="0" stopColor="#38CFF2" stopOpacity="0" />
          <stop offset=".5" stopColor="#38CFF2" stopOpacity=".7" />
          <stop offset="1" stopColor="#38CFF2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="800" cy="330" r="300" fill={`url(#${id}g)`} opacity=".18" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M300 ${120 + i * 90} C 520 ${40 + i * 120}, 620 ${520 - i * 60}, 1050 ${180 + i * 85}`} fill="none" stroke={`url(#${id}l)`} strokeWidth={i === 2 ? 2 : 1} opacity={0.35 + i * 0.1} />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={i} className="flow" style={{ animationDuration: `${5 + i * 2}s` }} d={`M320 ${200 + i * 140} C 520 ${100 + i * 150}, 700 ${560 - i * 90}, 1040 ${260 + i * 120}`} fill="none" stroke="#38CFF2" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
      ))}
      {dots.map(([x, y, r], i) => (
        <g key={i} className="drift" style={{ animationDelay: `${i * -1.1}s`, animationDuration: `${8 + (i % 4) * 2}s` }}>
          <circle cx={x} cy={y} r={r * 5} fill={`url(#${id}g)`} opacity=".35" className="glow" />
          <circle cx={x} cy={y} r={r} fill="#38CFF2" />
          <circle cx={x} cy={y} r={r + 6} fill="none" stroke="#38CFF2" strokeOpacity=".4" />
        </g>
      ))}
    </svg>
  );
}

/** Healthy vs plaque-affected artery cross-sections. */
export function ArteryCompare() {
  const Vessel = ({ plaque, label }: { plaque: boolean; label: string }) => (
    <figure className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center">
      <svg viewBox="0 0 240 240" role="img" aria-label={label} className="mx-auto h-56 w-56">
        <circle cx="120" cy="120" r="104" fill="none" stroke="#38CFF2" strokeOpacity=".35" strokeWidth="2" />
        <circle cx="120" cy="120" r="92" fill="#0B2347" stroke="#38CFF2" strokeOpacity=".6" />
        {plaque ? (
          <>
            <path d="M120 28 A92 92 0 1 1 40 166 C 70 150, 80 120, 100 108 C 125 96, 150 100, 160 78 C 165 58, 140 40, 120 28Z" fill="#38CFF2" fillOpacity=".22" stroke="#38CFF2" strokeOpacity=".7" strokeDasharray="3 5" />
            <ellipse cx="108" cy="120" rx="30" ry="26" fill="#07162E" />
            {[[150,70],[170,100],[75,160],[95,175],[140,150]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="5" fill="#38CFF2" fillOpacity=".5" className="glow" style={{ animationDelay: `${i * .5}s` }} />)}
          </>
        ) : (
          <circle cx="120" cy="120" r="62" fill="#07162E" />
        )}
        {!plaque && [[100,110],[130,100],[120,140],[95,135],[140,128]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="4" fill="#fff" fillOpacity=".6" />)}
      </svg>
      <figcaption className="mt-3 text-sm text-white/70">{label}</figcaption>
    </figure>
  );
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Vessel plaque={false} label="Healthy artery: open channel" />
      <Vessel plaque label="Plaque-affected artery: narrowed, inflamed wall" />
    </div>
  );
}

/** Horizontal schematic: peptide → carrier → immune cell → intended effect. */
export function MechanismDiagram() {
  const Label = ({ x, t, s }: { x: number; t: string; s: string }) => (
    <g textAnchor="middle" fill="#fff">
      <text x={x} y="262" fontSize="15" fontWeight="700">{t}</text>
      <text x={x} y="284" fontSize="12" fill="#fff" fillOpacity=".6">{s}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 960 310" role="img" aria-label="Schematic: ApoB peptides are packaged in a PLGA nanoparticle, interact with an immune cell, and are intended to encourage a regulatory response that reduces inflammation." className="w-full min-w-[720px]">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#38CFF2" /></marker>
        <radialGradient id="np" cx="35%" cy="30%"><stop offset="0" stopColor="#38CFF2" stopOpacity=".5" /><stop offset="1" stopColor="#0B2347" /></radialGradient>
      </defs>
      {[210, 450, 700].map((x) => <line key={x} x1={x - 60} x2={x + 10} y1="125" y2="125" className="flow" stroke="#38CFF2" strokeWidth="1.5" markerEnd="url(#arr)" transform={`translate(${x === 210 ? 0 : 0} 0)`} />)}
      {/* peptides */}
      <g transform="translate(110 125)">
        {[[-34,-22],[20,-36],[34,10],[-20,28],[0,0]].map(([x,y],i) => (
          <path key={i} d={`M${x-14} ${y} q7 -12 14 0 t14 0`} fill="none" stroke="#38CFF2" strokeWidth="3" strokeLinecap="round" />
        ))}
      </g>
      <Label x={110} t="ApoB peptides" s="Selected fragments" />
      {/* nanoparticle */}
      <g transform="translate(330 125)">
        <circle r="62" fill="url(#np)" stroke="#38CFF2" strokeOpacity=".7" />
        {[[-20,-18],[18,-24],[24,14],[-16,22],[0,0]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="6" fill="#38CFF2" />)}
      </g>
      <Label x={330} t="PLGA nanoparticle" s="Biodegradable carrier" />
      {/* immune cell */}
      <g transform="translate(560 125)">
        <circle r="64" fill="#0B2347" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
        <circle r="26" fill="#38CFF2" fillOpacity=".25" stroke="#38CFF2" />
        <circle cx="-70" cy="-6" r="9" fill="#38CFF2" className="glow" />
      </g>
      <Label x={560} t="Immune cell" s="Antigen-specific interaction" />
      {/* effect */}
      <g transform="translate(830 125)">
        <circle r="56" fill="none" stroke="#38CFF2" strokeDasharray="4 6" className="glow" />
        <circle r="34" fill="#38CFF2" fillOpacity=".18" stroke="#38CFF2" strokeWidth="2" />
        <path d="M-14 0 l10 10 l20 -22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Label x={830} t="Intended effect" s="Regulatory response (proposed)" />
    </svg>
  );
}
