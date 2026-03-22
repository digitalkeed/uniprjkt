"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Ballina" },
  { href: "/rreth-nesh", label: "Rreth nesh" },
  { href: "/sherbimet", label: "Shërbimet" },
  { href: "/sektoret", label: "Sektorët" },
  { href: "/si-operojme", label: "Si Operojmë" },
  { href: "/projekte", label: "Referencat" },
  { href: "/kontakt", label: "Kontakti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="wrap nav-inner">
          <Link href="/" className="nav-logo" aria-label="UNI PROJECT — Ballina">
            <Logo />
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="nav-right">
            <a href="tel:+38344123456" className="nav-phone">
              +383 44 123 456
            </a>
            <Link href="/kontakt" className="btn btn-blue">
              Kërko ofertë
            </Link>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Mbyll menunë">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
          <div className="mobile-menu-cta">
            <a href="tel:+38344123456" className="btn btn-outline btn-lg btn-block">
              +383 44 123 456
            </a>
            <Link href="/kontakt" onClick={closeMenu} className="btn btn-blue btn-lg btn-block">
              Kërko ofertë
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
