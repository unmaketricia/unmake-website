import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About | UNMAKE by Tricia",
  description:
    "Tricia Hilario spent seven years in global banking, then seven more building organic growth systems for brands worldwide. UNMAKE: keep what matters, unmake the rest.",
};

const facts = [
  ["Now", "Based in Calamba City, Laguna, Philippines. Working with brands worldwide."],
  ["2011", "BS in Entrepreneurship, Southville International School and Colleges."],
  ["2011–18", "Seven years in banking and finance."],
  ["2018–now", "Started as a content writer, fell for digital marketing, never looked back."],
  ["Always", "I organize for fun. My friends call it a flaw. My clients call it a superpower."],
];

export default function About() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap about-hero">
          <div>
            <p className="eyebrow">About</p>
            <h1>I unmake things for a living.</h1>
            <p className="lede">
              Founder and the face of UNMAKE. Marketer, working parent,
              recovering over-complicator.
            </p>
          </div>
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tricia.jpg" alt="Tricia Hilario" />
          </div>
        </div>
      </header>

      <section className="cream">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The story</p>
            <h2>
              From finance and compliance to systems that breathe and content
              that connects.
            </h2>
          </div>
          <div className="story">
            <p className="first">
              I spent seven years in global banking: HSBC, Deutsche Bank, ANZ,
              ING. I learned how demanding institutions build systems, and what
              it costs to live inside ones that always ask for more.
            </p>
            <p>
              In 2018 I left and became a social media strategist. Seven years
              on, I&apos;ve helped brands from skincare to publishing to home
              design, across the US, UK, Australia, and Asia, grow without
              burning out the people behind them.
            </p>
            <p>
              Then AI arrived, and suddenly everyone could produce more content,
              faster. Most of it sounds exactly the same. That&apos;s where I
              planted my flag: use AI to clear the busywork so the human work
              gets more attention, not less. My assistant keeps the automations
              humming; I spend my time where experience matters. The parts that
              build real trust stay handmade.
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
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The short version</p>
            <h2>Quick facts.</h2>
          </div>
          <ul className="facts">
            {facts.map(([yr, text]) => (
              <li key={yr}>
                <span className="yr">{yr}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

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

      <section className="cream tight">
        <Reveal className="wrap">
          <div className="grid two">
            <div className="card feature">
              <span className="pill-badge">Primary</span>
              <h3>Hire me for your brand</h3>
              <p>
                Done-for-you marketing systems. Organic growth without the daily
                grind.
              </p>
              <Link className="btn on-dark" href="/services">
                See services
              </Link>
            </div>
            <div className="card">
              <span className="pill-badge">Products</span>
              <h3>Shop UNMAKE</h3>
              <p>
                Ready-to-use guides and templates for family, money, and work.
              </p>
              <Link className="btn ghost" href="/shop">
                Browse the shop
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
