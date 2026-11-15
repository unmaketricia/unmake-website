"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/studio", label: "Studio" },
  { href: "/table", label: "The Table" },
  { href: "/studio/contact", label: "Contact" },
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

  useEffect(() => setOpen(false), [pathname]);

  const navClass = "nav" + (scrolled ? " scrolled" : "") + (open ? " open" : "");

  return (
    <nav className={navClass}>
      <div className="nav-inner">
        <Link href="/" className="lockup">
          <span className="mark">UNMAKE</span>
          <span className="byline serif">Digital studio</span>
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
          <li className="nav-menu-cta">
            <Link className="btn ghost" href="/studio#available">
              Shop Solutions
            </Link>
          </li>
          <li className="nav-menu-cta">
            <Link className="btn" href="/studio/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-ctas">
          <Link className="btn ghost" href="/studio#available">
            Shop Solutions
          </Link>
          <Link className="btn" href="/studio/contact">
            Contact
          </Link>
        </div>
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
