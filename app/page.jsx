import Link from "next/link";
import Reveal from "@/components/Reveal";
import StrikeBlock from "@/components/StrikeBlock";
import Carousel from "@/components/Carousel";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Work with me | UNMAKE by Tricia",
  description:
    "Organic growth systems for growing brands. AI handles the repetitive work; human judgment handles everything your audience can feel. Led by Tricia Hilario.",
};

const services = [
  ["01", "Social media management", "Strategy, content, scheduling, and community across Instagram, Facebook, and TikTok.", "From USD 1,200 / month"],
  ["02", "Email marketing", "Sequences and campaigns in Mailchimp or Klaviyo that sound like a person worth hearing from.", "From USD 600 / month"],
  ["03", "Influencer & UGC", "Strategy, outreach, and collaboration management. Relationship work stays human.", "From USD 600 / month"],
  ["04", "Amazon graphic design", "Storefronts, A+ Content, and Brand Story visuals that turn browsers into buyers.", "From USD 1,200 / project"],
  ["05", "Website design", "Clean, mobile-responsive sites built for conversion and easy to maintain.", "From USD 1,200 / project"],
  ["06", "SEO optimization", "Keyword research, on-page work, and content strategy so the right people find you.", "From USD 1,500 / project"],
];

export default function Home() {
  return (
    <>
      {/* 1. Hero — the philosophy */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-split">
            <div>
              <p className="eyebrow">Marketing, the UNMAKE way</p>
              <StrikeBlock />
            </div>
            <div className="hero-aside">
              <p className="lede">
                AI clears the repetitive work. I protect the parts your audience
                can actually feel. Efficient where it should be, human where it
                has to be.
              </p>
              <div className="hero-actions" style={{ marginTop: "var(--s4)" }}>
                <a className="btn" href="#offer">
                  See services
                </a>
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
          </div>
        </div>
      </header>

      {/* 2. Meet Tricia */}
      <section className="cream" id="meet-tricia">
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
                Founder and face of UNMAKE. Marketer, working parent, recovering
                over-complicator.
              </p>
              <div className="story" style={{ marginTop: "var(--s4)" }}>
                <p className="first">
                  I hold a BS in Entrepreneurship, so I don&apos;t just market
                  for businesses, I understand what it takes to run one: the
                  late nights, the tight budgets, the pressure to always do more
                  with less.
                </p>
                <p>
                  Before UNMAKE, I spent seven years in global banking (HSBC,
                  Deutsche Bank, ANZ, ING), then became a social media strategist
                  in 2018. Since then, I&apos;ve helped brands across a range of
                  industries in the US, UK, Australia, and Asia grow without
                  losing themselves in the process.
                </p>
                <p>
                  Now, in a world where AI can churn out content in seconds, I
                  still believe the best marketing comes from sincere, well
                  thought out solutions, not shortcuts. AI helps me work faster.
                  It doesn&apos;t replace the human touch that makes people trust
                  a brand.
                </p>
              </div>
              <div className="hero-actions">
                <a className="btn" href="#offer">
                  See services
                </a>
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

          {/* Not an agency — sits under Meet Tricia, same background */}
          <div className="callout compact">
            <span className="big">not an agency.</span>
            <div>
              <h3>You work with me. On purpose.</h3>
              <p>
                My assistant keeps the automations running behind the scenes.
                But every strategy and every final call is mine. No account
                managers, no handoffs, no junior team learning on your brand.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Where AI helps, where it doesn't */}
      <section className="cream">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">A clear stance</p>
            <h2>Where AI helps. Where it doesn&apos;t.</h2>
            <p>
              The data tells me what happened. AI helps me see it faster.{" "}
              <span style={{ color: "var(--fig)", fontWeight: 500 }}>
                Experience tells me what to do about it.
              </span>
            </p>
          </div>
          <div className="split">
            <div className="col ai">
              <h3>
                <span className="tag">handled by AI</span>
              </h3>
              <ul>
                <li>Analyzing performance data</li>
                <li>Spotting trends worth testing</li>
                <li>Drafting variations and schedules</li>
                <li>The repetitive production work</li>
              </ul>
            </div>
            <div className="col human">
              <h3>
                <span className="tag">kept human</span>
              </h3>
              <ul>
                <li>Your brand voice</li>
                <li>Strategy that actually stands out</li>
                <li>Community that feels real</li>
                <li>What to publish, kill, or change</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Two ways in */}
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
              <a className="btn on-dark" href="#offer">
                Explore services
              </a>
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

      {/* 6. The offer */}
      <section className="cream" id="offer">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The offer</p>
            <h2>Not ready to build the whole system?</h2>
            <p>
              Here&apos;s what I can do for you —
              <br />
              start with one piece, or stack a few.
            </p>
          </div>
          <div className="grid three">
            {services.map(([num, title, body, price]) => (
              <div className="card svc" key={num}>
                <span className="num serif">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="price">{price}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "var(--s4)", color: "var(--muted)" }}>
            Not sure which you need?{" "}
            <Link className="textlink" href="/contact">
              Tell me where you&apos;re stuck
            </Link>{" "}
            and I&apos;ll recommend the smallest system that solves it.
          </p>
        </Reveal>
      </section>

      {/* 7. Proof */}
      <section id="results">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Proof</p>
            <h2>Systems in the wild.</h2>
          </div>

          <div className="case">
            <div className="case-top">
              <div>
                <h3>Bouncee Co</h3>
                <p className="desc">
                  Stylish inflatable playhouses and toys, US
                </p>
                <div className="case-tags">
                  <span>Social</span>
                  <span>Email</span>
                  <span>Amazon</span>
                  <span>Influencer</span>
                </div>
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="n">9,600+</div>
                  <div className="l">authentic followers in year one</div>
                </div>
                <div className="metric">
                  <div className="n">0 to 1</div>
                  <div className="l">launched from scratch, organically</div>
                </div>
              </div>
            </div>
            <p className="sample-label">Selected work</p>
            <div className="samples">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/grid-bouncee.jpg"
                  alt="Instagram content grid created for Bouncee Co"
                  loading="lazy"
                />
                <figcaption>
                  Instagram grid: content planning and creation
                </figcaption>
              </figure>
              <Carousel
                slides={[
                  {
                    src: "/images/email-bouncee-1.jpg",
                    alt: "Email newsletter for Bouncee Co: Ball Pit Play Ideas",
                    caption: "Email: engagement campaign",
                  },
                  {
                    src: "/images/email-bouncee-2.jpg",
                    alt: "Email newsletter for Bouncee Co with product call to action",
                    caption: "Email: content to conversion",
                  },
                ]}
              />
            </div>
          </div>

          <div className="case">
            <div className="case-top">
              <div>
                <h3>Earthside Birth Pools</h3>
                <p className="desc">
                  Thoughtfully designed birth pools for home births, US
                </p>
                <div className="case-tags">
                  <span>Social</span>
                  <span>Email</span>
                  <span>Amazon</span>
                  <span>Influencer</span>
                </div>
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="n">9,700+</div>
                  <div className="l">followers, grown from zero in a year</div>
                </div>
                <div className="metric">
                  <div className="n">Trust-first</div>
                  <div className="l">voice held in a sensitive category</div>
                </div>
              </div>
            </div>
            <p className="sample-label">Selected work</p>
            <div className="samples">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/grid-earthside.jpg"
                  alt="Instagram content grid created for Earthside Birth Pools"
                  loading="lazy"
                />
                <figcaption>
                  Instagram grid: brand voice and storytelling
                </figcaption>
              </figure>
              <Carousel
                slides={[
                  {
                    src: "/images/email-earthside-1.jpg",
                    alt: "Email newsletter for Earthside: Birth is not just a medical event",
                    caption: "Email: education-led nurture",
                  },
                  {
                    src: "/images/email-earthside-2.jpg",
                    alt: "Email newsletter for Earthside on setting up a home birth space",
                    caption: "Email: guide format with product tie-in",
                  },
                ]}
              />
            </div>
          </div>

          <div className="client-strip">
            <p className="label">Also trusted by</p>
            <div className="clients">
              <span>OutsourcingMe · UK</span>
              <span>RSA Property Investment · UK</span>
              <span>Iren Shizen · Singapore</span>
              <span>SomethingMe Books · South Africa</span>
              <span>DMR Designs AU · Australia</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. Three steps */}
      <section className="cream tight">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The process</p>
            <h2>Three steps. That&apos;s it.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Tell me where you&apos;re stuck.</h3>
              <p>
                A message about your brand and what&apos;s eating your time. No
                40-field forms.
              </p>
            </div>
            <div className="step">
              <h3>Get a plan, not a pitch.</h3>
              <p>
                The smallest system that solves your problem, with clear
                pricing. If I&apos;m not the fit, I&apos;ll say so.
              </p>
            </div>
            <div className="step">
              <h3>Hand it off.</h3>
              <p>We agree on scope, I build, you approve. Then it runs.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Close */}
      <CtaBand
        title="Tell me where you're stuck."
        text="One message. I'll reply with a plan, clear pricing, and an honest read on fit."
        href="/contact"
        cta="Get a custom quote"
      />
    </>
  );
}
