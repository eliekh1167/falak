"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FalakLogo, YfpBadge } from "./Logo";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
<div className="mt-3">
  <FalakLogo variant="light" />
</div>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-widest2 transition-colors ${
                  active ? "text-copper" : "text-paper/75 hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-paper transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-6 bg-paper transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-6 bg-paper transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line-soft bg-void/98 backdrop-blur-md md:hidden">
          <nav className="container-content flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line-soft/50 py-3 font-mono text-sm uppercase tracking-widest2 text-paper/85 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <YfpBadge variant="light" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
