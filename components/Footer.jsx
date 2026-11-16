import Link from "next/link";
import { ETSY_URL } from "@/lib/etsy";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="lockup">
              <span className="mark">UNMAKE</span>
              <span className="byline serif">Digital studio</span>
            </div>
            <p className="tagline">Simple digital tools for everyday life.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/studio">Studio</Link>
            <Link href="/studio/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="mailto:tricia@un-make.com">tricia@un-make.com</a>
            <a
              href="https://www.threads.net/@thenanayinpajama"
              target="_blank"
              rel="noopener"
            >
              Threads
            </a>
            <a
              href="https://www.instagram.com/thenanayinpajama"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
            <a href={ETSY_URL} target="_blank" rel="noopener">
              Etsy shop
            </a>
          </div>
        </div>
        <nav aria-label="Legal policies" className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refunds">Refund Policy</Link>
        </nav>
        <div className="foot-bottom">
          © 2026 UNMAKE. Digital products by Tricia Hilario.
        </div>
      </div>
    </footer>
  );
}
