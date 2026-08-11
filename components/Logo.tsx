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
  const logoSrc = variant === "light" ? "/images/falak-logo-light.png" : "/images/falak-logo.png";
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="FALAK home">
      <Image src={logoSrc} alt="FALAK" width={220} height={56} className="h-14 w-auto" />
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
      <Image src="/images/yfp-logo.png" alt="Youth for Physics" width={36} height={36} />
      <span className={`font-mono text-[11px] uppercase tracking-widest2 ${textColor}`}>
        A YFP Initiative
      </span>
    </a>
  );
}

export function YfpMark({ size = 55 }: { size?: number }) {
  return (
    <Image
      src="/images/yfp-logo.png"
      alt="Youth for Physics"
      width={size}
      height={size}
    />
  );
}
