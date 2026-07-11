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
              <span className="byline serif">by Tricia</span>
            </div>
            <p className="tagline">Keep what matters. Unmake the rest.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/">Work with me</Link>
            <Link href="/#offer">Services</Link>
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
          © 2026 UNMAKE by Tricia. Keep what matters.
        </div>
      </div>
    </footer>
  );
}
