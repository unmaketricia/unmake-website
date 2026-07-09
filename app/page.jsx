import Link from "next/link";
import Reveal from "@/components/Reveal";
import StrikeBlock from "@/components/StrikeBlock";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Digital marketing, the UNMAKE way</p>
          <h1>Marketing that works smarter, not harder.</h1>
          <p className="lede">
            Organic growth systems for brands that want to grow without the
            grind.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/services">
              See services
            </Link>
            <Link className="btn ghost" href="/shop">
              Shop products
            </Link>
          </div>
          <div className="hero-meta">
            <span>
              <b>7+ years</b> in digital marketing
            </span>
            <span>
              <b>Brands</b> in the US, UK, AU &amp; Asia
            </span>
            <span>
              <b>One strategist</b>, no agency layers
            </span>
          </div>
        </div>
      </header>

      <section className="cream">
        <Reveal className="wrap">
          <p className="eyebrow">The philosophy</p>
          <StrikeBlock />
          <p
            style={{
              marginTop: "var(--s4)",
              color: "var(--muted)",
              maxWidth: "46ch",
            }}
          >
            AI clears the repetitive work. I protect the parts your audience can
            actually feel. Efficient where it should be, human where it has to
            be.
          </p>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Two ways in</p>
            <h2>Pick your path.</h2>
          </div>
          <div className="grid two">
            <div className="card feature">
              <span className="pill-badge">For brands</span>
              <h3>Done-for-you marketing</h3>
              <p>
                Social, email, influencer, Amazon, websites, and SEO. Built as
                systems, run with judgment.
              </p>
              <Link className="btn on-dark" href="/services">
                Explore services
              </Link>
            </div>
            <div className="card">
              <span className="pill-badge">For everyone</span>
              <h3>Digital products</h3>
              <p>
                Ready-to-use guides and templates that clear mental clutter from
                family, money, and work.
              </p>
              <Link className="btn ghost" href="/shop">
                Browse the shop
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="teal tight">
        <Reveal className="wrap">
          <p className="eyebrow">Trusted by</p>
          <h2 style={{ maxWidth: "20ch" }}>
            Brands across four continents, grown organically.
          </h2>
          <div className="clients" style={{ marginTop: "var(--s4)" }}>
            <span>Bouncee Co</span>
            <span>Earthside Birth Pools</span>
            <span>Iren Shizen</span>
            <span>DMR Designs AU</span>
            <span>SomethingMe Books</span>
            <span>RSA Property Investment</span>
            <span>OutsourcingMe</span>
          </div>
          <p style={{ marginTop: "var(--s5)" }}>
            <Link className="btn on-dark" href="/services#results">
              See the results
            </Link>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Tell me where you're stuck."
        text="One message. I'll reply with a plan, clear pricing, and an honest read on fit."
        href="/contact"
        cta="Get a custom quote"
      />
    </>
  );
}
