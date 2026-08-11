import Link from "next/link";
import { FalakLogo, YfpMark } from "./Logo";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-void">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <FalakLogo variant="light" />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-paper/60">
              A student-run aerospace and engineering program reviving Lebanon&apos;s
              orbital ambitions — one build at a time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <YfpMark size={24} />
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper/50">
                Managed by Youth for Physics
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow-light">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-paper/70 transition-colors hover:text-copper-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Connect</p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-paper/70">
              <li>Beirut, Lebanon</li>
              <li>
                <a
                  href="mailto:falak@youthforphysics.org"
                  className="transition-colors hover:text-copper-light"
                >
                  falak@youthforphysics.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/youthforphysics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-copper-light"
                >
                  @youthforphysics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="orbit-divider mt-14" />

        <div className="mt-6 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-widest2 text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} FALAK — Youth for Physics</span>
          <span>Est. 2024 · Beirut, Lebanon</span>
        </div>
      </div>
    </footer>
  );
}
