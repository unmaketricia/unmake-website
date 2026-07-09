"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const navClass = `nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`;

  return (
    <nav className={navClass}>
      <div className="nav-inner">
        <Link href="/" className="lockup">
          <span className="mark">UNMAKE</span>
          <span className="byline serif">by Tricia</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? "active" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn nav-cta-desktop" href="/contact">
          Get a quote
        </Link>
        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
