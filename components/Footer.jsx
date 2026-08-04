import Link from "next/link";
import { ETSY_URL } from "@/lib/etsy";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="lockup">
              <span className="mark">Tricia Hilario</span>
              <span className="byline serif">Digital marketer</span>
            </div>
            <p className="tagline">Marketing that still sounds like you.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/#about">About</Link>
            <Link href="/#work">Work</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:tricia@un-make.com">tricia@un-make.com</a>
            <a
              href="https://www.instagram.com/unmakeit"
              target="_blank"
              rel="noopener"
            >
              Instagram @unmakeit
            </a>
            <a href={ETSY_URL} target="_blank" rel="noopener">
              Etsy shop
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          © 2026 Tricia Hilario. Digital marketer &amp; social media strategist.
        </div>
      </div>
    </footer>
  );
}
