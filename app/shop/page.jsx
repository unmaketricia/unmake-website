import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ETSY_URL } from "@/lib/etsy";

export const metadata = {
  title: "Shop | Tricia Hilario",
  description:
    "Digital products that clear mental clutter from family, money, and work. Start with No Toy Needed Vol. 1: 30 household-item activities for babies 0 to 6 months.",
};

export default function Shop() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap">
          <p className="eyebrow">The shop</p>
          <h1>Less mental clutter, ready to download.</h1>
          <p className="lede">
            Every planner asks more of you. These ask less. Guides that work the
            moment you open them.
          </p>
        </div>
      </header>

      <section className="cream">
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
            <h2>Where the shop is headed.</h2>
            <p>
              Products organized around where mental clutter piles up. Family is
              live. The rest are on the workbench.
            </p>
          </div>
          <div className="cats">
            <span className="live">Family</span>
            <span className="soon">Money · soon</span>
            <span className="soon">Work · soon</span>
            <span className="soon">Home · soon</span>
          </div>
          <p style={{ marginTop: "var(--s4)", color: "var(--muted)" }}>
            New products land here first. Follow along at{" "}
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
        title="Here for your brand instead?"
        text="The same systems thinking powers done-for-you marketing for growing brands."
        href="/#services"
        cta="Explore services"
      />
    </>
  );
}
