import Link from "next/link";
import Reveal from "@/components/Reveal";
import StrikeBlock from "@/components/StrikeBlock";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      {/* 1. Hook */}
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

      {/* 2. The difference */}
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

      {/* 3. Meet Tricia — trust */}
      <section id="meet-tricia">
        <Reveal className="wrap">
          <div className="about-hero">
            <div>
              <p className="eyebrow">Meet Tricia</p>
              <h2>
                From finance &amp; compliance
                <br />
                to systems that breathe
                <br />
                and content that connect.
              </h2>
              <p className="lede" style={{ marginTop: "var(--s3)" }}>
                Founder and the face of UNMAKE. Marketer, working parent,
                recovering over-complicator.
              </p>
              <div className="story" style={{ marginTop: "var(--s4)" }}>
                <p className="first">
                  I spent seven years in global banking: HSBC, Deutsche Bank,
                  ANZ, ING. I learned how demanding institutions build systems,
                  and what it costs to live inside ones that always ask for
                  more.
                </p>
                <p>
                  In 2018 I left and became a social media strategist. Seven
                  years on, I&apos;ve helped brands from skincare to publishing
                  to home design, across the US, UK, Australia, and Asia, grow
                  without burning out the people behind them.
                </p>
                <p>
                  Then AI arrived, and suddenly everyone could produce more
                  content, faster. Most of it sounds exactly the same.
                  That&apos;s where I planted my flag: use AI to clear the
                  busywork so the human work gets more attention, not less. The
                  parts that build real trust stay handmade.
                </p>
                <p
                  className="serif"
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.3rem",
                    color: "var(--fig)",
                    maxWidth: "24ch",
                    marginTop: "var(--s4)",
                  }}
                >
                  Keep what matters.
                  <br />
                  Unmake the rest.
                </p>
              </div>
              <div className="hero-actions">
                <Link className="btn" href="/services">
                  See services
                </Link>
                <a
                  className="btn ghost"
                  href="https://calendly.com/tricia-un-make/30min"
                  target="_blank"
                  rel="noopener"
                >
                  Book a call
                </a>
              </div>
            </div>
            <div className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tricia.jpg" alt="Tricia Hilario" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. The offer */}
      <section className="cream">
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

      {/* 5. Toolbox — credibility */}
      <section className="teal tight">
        <Reveal className="wrap">
          <p className="eyebrow">Toolbox</p>
          <h2 style={{ maxWidth: "20ch" }}>
            If your brand runs on it, I&apos;ve built a system in it.
          </h2>
          <p style={{ marginTop: "var(--s3)", maxWidth: "60ch" }}>
            Meta Business Suite, Instagram, Facebook, TikTok, Pinterest, Canva,
            Notion, Later, Hootsuite, Buffer, CapCut, Google Analytics, Google
            Workspace, Metricool, Sprout Social, Shopify, WooCommerce, Klaviyo,
            and Mailchimp, plus AI tools for analysis and production.
          </p>
        </Reveal>
      </section>

      {/* 6. Social proof */}
      <section className="cream">
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
            <Link className="btn" href="/services#results">
              See the results
            </Link>
          </p>
        </Reveal>
      </section>

      {/* 7. Convert */}
      <CtaBand
        title="Tell me where you're stuck."
        text="One message. I'll reply with a plan, clear pricing, and an honest read on fit."
        href="/contact"
        cta="Get a custom quote"
      />
    </>
  );
}
