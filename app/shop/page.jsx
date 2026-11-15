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
          <h1>Simple solutions for everyday life.</h1>
          <p className="lede">
            Downloadable resources and digital tools designed to make everyday life
            easier. Web apps and more solutions are on the way.
          </p>
        </div>
      </header>

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
            <h2>Where the studio is headed.</h2>
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
            <span className="soon">Web apps · soon</span>
          </div>
          <p style={{ marginTop: "var(--s4)", color: "var(--muted)" }}>
            New solutions land here first. Follow along at{" "}
            <a
              className="textlink"
              href="https://www.instagram.com/unmakeit"
              target="_blank"
              rel="noopener"
            >
              @unmakeit
            </a>
            .
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Have a question?"
        text="Questions about a download or upcoming web app? Get in touch."
        href="/studio/contact"
        cta="Contact us"
      />
    </>
  );
}


