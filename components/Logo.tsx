import Image from "next/image";
import Link from "next/link";

/**
 * FalakLogo — typographic placeholder wordmark.
 *
 * No FALAK logo file has been supplied yet. This renders a clean lockup
 * (mark + wordmark) in the site's own type system so navigation reads
 * correctly today. TO REPLACE: once a FALAK logo file is supplied, swap
 * the <span> mark + wordmark below for an <Image src="/images/falak-logo.png" />
 * the same way YfpBadge below consumes the real YFP logo. If the supplied
 * file has a white/solid background that clashes with dark hero sections,
 * remove that background (e.g. via an image editor or `rembg`) before
 * dropping it in, the same treatment already applied to the YFP mark.
 */
export function FalakLogo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "text-paper" : "text-ink";
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="FALAK home">
      <span
        className={`relative flex h-7 w-7 items-center justify-center rounded-full border ${
          variant === "light" ? "border-paper/60" : "border-ink/60"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${variant === "light" ? "bg-copper-light" : "bg-copper"}`} />
        <span
          className={`absolute inset-0 rounded-full border border-dashed ${
            variant === "light" ? "border-paper/30" : "border-ink/25"
          } transition-transform duration-700 group-hover:rotate-90`}
        />
      </span>
      <span className={`font-display text-lg font-semibold tracking-wide ${textColor}`}>
        FALAK
      </span>
    </Link>
  );
}

/**
 * YfpBadge — uses the real YFP logo file supplied earlier (background
 * already made transparent). Links out to the parent org.
 */
export function YfpBadge({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textColor = variant === "light" ? "text-paper/80" : "text-ink/70";
  return (
    <a
      href="https://www.instagram.com/youthforphysics"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border ${
        variant === "light" ? "border-paper/25" : "border-ink/20"
      } px-3 py-1.5 transition-colors hover:border-copper`}
    >
      <Image src="/images/yfp-logo.png" alt="Youth for Physics" width={18} height={18} />
      <span className={`font-mono text-[11px] uppercase tracking-widest2 ${textColor}`}>
        A YFP Initiative
      </span>
    </a>
  );
}

export function YfpMark({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/images/yfp-logo.png"
      alt="Youth for Physics"
      width={size}
      height={size}
    />
  );
}
