/**
 * PlaceholderImage — stand-in for real photography/renders, which will be
 * supplied later per the brief. Deliberately styled as an intentional
 * "spec sheet" placeholder (labeled, orbit-line texture) rather than a
 * broken-looking empty box, so pages read correctly before real assets
 * land. TO REPLACE: swap for <Image src="/images/…" alt="…" fill /> once
 * real photography exists — the labeled path (e.g. /images/uav-hero.jpg)
 * doubles as the filename to drop in.
 */
export function PlaceholderImage({
  label,
  path,
  aspect = "aspect-[16/9]",
  variant = "dark",
}: {
  label: string;
  path: string;
  aspect?: string;
  variant?: "dark" | "indigo";
}) {
  const bg = variant === "indigo" ? "bg-indigo" : "bg-void";
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden ${bg}`}
    >
      <svg
        className="absolute inset-0 h-full w-full text-line-soft opacity-40"
        aria-hidden="true"
      >
        <pattern id={`grid-${path}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${path})`} />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper/35">
          {path}
        </span>
        <span className="font-body text-sm text-paper/55">{label}</span>
      </div>
    </div>
  );
}
