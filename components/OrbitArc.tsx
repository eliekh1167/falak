/**
 * OrbitArc — FALAK's signature visual motif.
 *
 * "Falak" (فلك) is the classical Arabic term for a celestial sphere / orbit —
 * the path a body traces around another. Every arc on this site is a literal
 * reference to that name: partial, off-axis rings rather than full decorative
 * circles, used as dividers, backdrops, and (on the About timeline) as the
 * actual structural device that carries the org's history.
 *
 * Kept as plain inline SVG (no animation library needed for a static arc);
 * pair with Tailwind's animate-orbit-spin-slow for a slow ambient rotation
 * where appropriate.
 */
export function OrbitArc({
  className = "",
  strokeWidth = 1,
  dashed = false,
}: {
  className?: string;
  strokeWidth?: number;
  dashed?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="200"
        cy="200"
        r="180"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "2 10" : "620 160"}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrbitField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <OrbitArc className="absolute -right-24 -top-32 h-[560px] w-[560px] text-line-soft animate-orbit-spin-slow" strokeWidth={0.75} />
      <OrbitArc className="absolute -left-40 top-1/3 h-[420px] w-[420px] text-line-soft" strokeWidth={0.5} dashed />
    </div>
  );
}
