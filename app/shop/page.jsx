import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ETSY_URL } from "@/lib/etsy";

export const metadata = {
  title: "Studio | UNMAKE",
  description:
    "Practical digital solutions for everyday life, from downloadable resources to web apps. Explore what is available now and see what is coming to UNMAKE Studio.",
};

export default function Shop() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap">
          <p className="eyebrow">UNMAKE Studio</p>
          <h1>Simple solutions<br />for everyday life.</h1>
          <p className="lede">
            Downloadable resources and digital tools designed to make everyday life
            easier.<br className="hidden sm:block" />
            <span className="sm:whitespace-nowrap">Meal planning, grocery lists, and more in The Table.</span>
          </p>
        </div>
      </header>

      <section className="cream" id="the-table">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Featured web app</p>
            <h2>The Table</h2>
            <p>
              A simple menu-planning web app to plan weekly meals, organize your
              grocery list, and share the day&apos;s full menu with your household.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "var(--s3)" }}>
              <a className="btn" style={{ justifyContent: "center", textAlign: "center" }} href="/table">Explore The Table</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="cream" id="available">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Available now</p>
            <h2>No Toy Needed, Vol. 1</h2>
          </div>
          <div className="product">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="product-cover"
              src="/images/no-toy-needed-cover.jpg"
              alt="No Toy Needed, Vol. 1 — 30 printable baby activities"
            />
            <div>
              <span className="pill-badge">Family · Babies 0–6 months</span>
              <p style={{ color: "var(--muted)", marginBottom: "var(--s2)" }}>
                Thirty developmental activities for your baby&apos;s first six
                months, using only what you already have at home. Every one comes
                with steps, materials, and safety notes. No prep, no shopping, no
                guilt.
              </p>
              <p className="price-tag">USD 14.99 · instant download</p>
              <a
                className="btn"
                href={ETSY_URL}
                target="_blank"
                rel="noopener"
              >
                Get it on Etsy
                <svg viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  marginTop: "var(--s2)",
                }}
              >
                Checkout and delivery handled securely by Etsy.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The collection</p>
            <h2 style={{ fontSize: "clamp(1.15rem, 4.6vw, 2rem)", whiteSpace: "nowrap" }}>Where the studio is headed.</h2>
            <p>
              A growing collection of practical resources, planners, and web apps for
              family, money, work, and home. Explore what is available now; more
              solutions are on the way.
            </p>
          </div>
          <div className="cats">
            <span className="live">Family</span>
            <span className="soon">Money · soon</span>
            <span className="soon">Work · soon</span>
            <span className="soon">Home · soon</span>
            <span className="soon whitespace-nowrap">Web apps</span>
          </div>
          <p style={{ marginTop: "var(--s4)", color: "var(--muted)" }}>
            Follow the creator on {" "}
            <a className="textlink" href="https://www.threads.net/@thenanayinpajama" target="_blank" rel="noopener">Threads</a>
            {" and "}
            <a className="textlink" href="https://www.instagram.com/thenanayinpajama" target="_blank" rel="noopener">Instagram</a>.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Have a question?"
        text="Questions about a download or The Table? Get in touch."
        href="/studio/contact"
        cta="Contact us"
      />
    </>
  );
}
