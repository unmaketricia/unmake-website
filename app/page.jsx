import Link from "next/link";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Tricia Hilario | Digital Marketer & Social Media Strategist",
  description:
    "Independent digital marketer and social media strategist with 7+ years of experience helping brands across the US, UK, Australia, Singapore, and South Africa grow engaged audiences organically.",
};

const services = [
  ["01", "Social media management", "Strategy, content, scheduling, and community across Instagram, Facebook, and TikTok.", "From USD 1,200 / month"],
  ["02", "Email marketing", "Sequences and campaigns in Mailchimp or Klaviyo that sound like a person worth hearing from.", "From USD 600 / month"],
  ["03", "Influencer & UGC", "Strategy, outreach, and collaboration management. Relationship work stays human.", "From USD 600 / month"],
  ["04", "Amazon graphic design", "Storefronts, A+ Content, and Brand Story visuals that turn browsers into buyers.", "From USD 1,200 / project"],
  ["05", "Website design", "Clean, mobile-responsive sites built for conversion and easy to maintain.", "From USD 1,200 / project"],
  ["06", "SEO optimization", "Keyword research, on-page work, and content strategy so the right people find you.", "From USD 1,500 / project"],
];

const clients = [
  ["Earthside Birth Pools", "Thoughtfully designed birth pools · US"],
  ["Bouncee Co", "Stylish bounce houses & toys · US"],
  ["Iren Shizen", "Japanese skincare brand · Singapore"],
  ["RSA Property Investment", "Real estate investing · UK"],
  ["DC Dogsitter", "Boutique concierge pet care · Washington, D.C."],
  ["Urban Tribe Properties", "Real estate · UK"],
  ["OutsourcingMe", "VA outsourcing company · UK"],
  ["DMR Designs AU", "Luxury home design studio · Australia"],
  ["SomethingMe Books", "Children's book publishing · South Africa"],
];

const corporate = [
  ["HSBC", "Global Banking & Markets Associate"],
  ["Deutsche Bank", "Trading Risk & P&L Bookrunner"],
  ["ANZ Bank", "Global Markets Surveillance Analyst"],
  ["ING", "Anti-Money Laundering Officer"],
];

const skills = [
  "Social Media Strategy & Content Planning",
  "Brand Voice & Messaging",
  "Organic Growth & Community Building",
  "Content Creation & Storytelling",
  "Reels & Short-Form Video Strategy",
  "Analytics & Performance Reporting",
  "Influencer & UGC Strategy",
  "Copywriting & Caption Writing",
  "Email Marketing Campaigns",
  "Amazon Storefront & A+ Content Design",
];

const tools = [
  "Meta Business Suite",
  "Instagram · Facebook · TikTok · Pinterest",
  "Canva",
  "Notion",
  "Later · Hootsuite · Buffer",
  "CapCut · InShot",
  "Google Analytics · Workspace",
  "Metricool · Sprout Social",
  "Shopify · WooCommerce",
  "Klaviyo · Mailchimp",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero">
        <div className="wrap about-hero">
          <div>
            <p className="eyebrow">Digital Marketer &amp; Social Media Strategist</p>
            <h1>Hello, I&apos;m Tricia Hilario.</h1>
            <p className="lede">
              A retired banking and finance officer turned digital marketer,
              helping brands grow engaged audiences organically — authentically,
              and on their own terms.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">
                View my work
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
            <div className="hero-meta">
              <span>
                <b>7+ years</b> in digital marketing
              </span>
              <span>
                <b>Clients</b> in the US, UK, AU, SG &amp; ZA
              </span>
              <span>
                <b>Independent</b> — you work with me directly
              </span>
            </div>
          </div>
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tricia.jpg" alt="Tricia Hilario" />
          </div>
        </div>
      </header>

      {/* About */}
      <section className="cream" id="about">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">About me</p>
            <h2>
              From finance &amp; compliance
              <br />
              to systems that breathe
              <br />
              and content that connect.
            </h2>
          </div>
          <div className="story">
            <p className="first">
              I&apos;m an independent digital marketer and social media
              strategist based in the Philippines, working with brands
              worldwide. I hold a BS in Entrepreneurship, so I don&apos;t just
              market for businesses — I understand what it takes to run one: the
              late nights, the tight budgets, the pressure to always do more with
              less.
            </p>
            <p>
              Earlier in my career, I spent seven years in global banking (HSBC,
              Deutsche Bank, ANZ, ING), then became a social media strategist in
              2018. Since then, I&apos;ve helped brands across a range of
              industries in the US, UK, Australia, and Asia grow without losing
              themselves in the process.
            </p>
            <p>
              Now, in a world where AI can churn out content in seconds, I still
              believe the best marketing comes from sincere, well thought out
              solutions, not shortcuts. AI helps me work faster. It doesn&apos;t
              replace the human touch that makes people trust a brand.
            </p>
          </div>

          {/* Independent, not an agency */}
          <div className="callout compact">
            <span className="big">not an agency.</span>
            <div>
              <h3>You work with me. Directly.</h3>
              <p>
                Every strategy and every final call is mine. No account managers,
                no handoffs, no junior team learning on your brand — just one
                experienced strategist, start to finish.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Seven years in finance. Seven more in marketing.</h2>
          </div>
          <ul className="facts">
            <li>
              <span className="yr">2018–now</span>
              <span>
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  Independent Social Media Strategist &amp; Digital Marketer
                </b>{" "}
                — organic strategy, content, and campaigns for e-commerce,
                lifestyle, and community-focused brands.
              </span>
            </li>
            {corporate.map(([org, role]) => (
              <li key={org}>
                <span className="yr">2011–18</span>
                <span>
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>{org}</b> —{" "}
                  {role}
                </span>
              </li>
            ))}
            <li>
              <span className="yr">2011</span>
              <span>
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>
                  BS in Entrepreneurship
                </b>{" "}
                — Southville International School &amp; Colleges.
              </span>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* What I do */}
      <section className="cream" id="services">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">What I do</p>
            <h2>How I can help your brand grow.</h2>
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
            and I&apos;ll recommend the smallest thing that solves it.
          </p>
        </Reveal>
      </section>

      {/* Selected work */}
      <section id="work">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Brands I&apos;ve helped grow.</h2>
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
              {clients.map(([name, desc]) => (
                <span key={name} title={desc}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skills & tools */}
      <section className="cream" id="skills">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">Skills &amp; tools</p>
            <h2>What I bring, and what I build with.</h2>
          </div>
          <div className="grid two">
            <div className="card">
              <h3 style={{ marginBottom: "var(--s3)" }}>Core skills</h3>
              <ul className="tag-list">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "var(--s3)" }}>Tools &amp; software</h3>
              <ul className="tag-list">
                {tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <CtaBand
        title="Tell me where you're stuck."
        text="One message. I'll reply with a plan, clear pricing, and an honest read on fit."
        href="/contact"
        cta="Get in touch"
      />
    </>
  );
}
