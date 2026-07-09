import Link from "next/link";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Services | UNMAKE by Tricia",
  description:
    "Social media, email, influencer, Amazon design, websites, and SEO for growing brands. Powered by data, guided by AI, decided by seven years of human experience.",
};

const services = [
  ["01", "Social media management", "Strategy, content, scheduling, and community across Instagram, Facebook, and TikTok.", "From USD 1,200 / month"],
  ["02", "Email marketing", "Sequences and campaigns in Mailchimp or Klaviyo that sound like a person worth hearing from.", "From USD 600 / month"],
  ["03", "Influencer & UGC", "Strategy, outreach, and collaboration management. Relationship work stays human.", "From USD 600 / month"],
  ["04", "Amazon graphic design", "Storefronts, A+ Content, and Brand Story visuals that turn browsers into buyers.", "From USD 1,200 / project"],
  ["05", "Website design", "Clean, mobile-responsive sites built for conversion and easy to maintain.", "From USD 1,200 / project"],
  ["06", "SEO optimization", "Keyword research, on-page work, and content strategy so the right people find you.", "From USD 1,500 / project"],
];

export default function Services() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1>Systems that run without you babysitting them.</h1>
          <p className="lede">
            Organic growth for brands in any industry. Data, AI, and seven years
            of judgment.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/contact">
              Get a custom quote
            </Link>
          </div>
        </div>
      </header>

      <section className="cream tight">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The problem</p>
            <h2>Your marketing shouldn&apos;t be a second job.</h2>
            <p>
              Most brand owners market in the cracks of their day: posting when
              they remember, emailing when they panic. Since 2018, I&apos;ve
              built growth systems that run on their own, for brands from
              skincare to publishing to home design.
            </p>
          </div>
          <div className="callout">
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

      <section>
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">A clear stance</p>
            <h2>Where AI helps. Where it doesn&apos;t.</h2>
            <p>
              After seven years, I know which parts of marketing get better with
              automation, and which fall apart without a human.
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
          <p className="split-note">
            The data tells me what happened. AI helps me see it faster.{" "}
            <span className="accent">
              Experience tells me what to do about it.
            </span>
          </p>
          <p style={{ marginTop: "var(--s4)" }}>
            <Link className="btn" href="/contact">
              Build my marketing system
            </Link>
          </p>
        </Reveal>
      </section>

      <section className="cream">
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
                  <div className="l">followers, up from 8,000 in a year</div>
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

      <CtaBand
        title="Ready when you are."
        text="One message starts it. A plan, clear pricing, and an honest read on fit."
        href="/contact"
        cta="Get a custom quote"
      />
    </>
  );
}
