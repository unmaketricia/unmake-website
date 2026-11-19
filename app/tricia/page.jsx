import Link from "next/link";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import { profile, services, icshWork, experience, packageNote, tools } from "@/lib/portfolio";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Tricia Hilario | AI Automation, Websites & Organic Marketing",
  description: profile.summary,
  robots: { index: false, follow: false },
};

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <header className="hero">
        <div className="wrap about-hero">
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              Thoughtful marketing.<br /> <span className={styles.titleHighlight}>Practical digital systems.</span>
            </h1>
            <p className="lede">I help brands connect with their audience and make everyday work easier through AI automation, website creation, and organic marketing.</p>
            <div className="hero-actions">
              <a className="btn" href="#work">Explore my work</a>
              <Link className="btn ghost" href="/tricia/cv">View my CV</Link>
            </div>
          </div>
          <div className="portrait"><img src="/images/tricia.jpg" alt="Tricia Hilario" width="340" height="425" /></div>
        </div>
      </header>

      <section className="cream" id="services" aria-label="Services">
        <Reveal className="wrap">
          <div className={styles.services}>
            {services.map(({ title, body }) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
            <article className="card">
              <h3>Paid marketing &amp; SEO, when you need them.</h3>
              <p>{packageNote}</p>
            </article>
          </div>
        </Reveal>
      </section>

      <section id="work">
        <Reveal className="wrap">
          <div className="section-head"><h2><span className={styles.titleHighlight}>Websites, workflows, and brands I’ve worked on.</span></h2></div>
          <article className={"case " + styles.icsh}>
            <div className="case-top">
              <div>
                <h3>Islamic &amp; Cultural Society of Harrow</h3>
                <p className="desc">Website &amp; systems modernisation</p>
                <Link className={"btn " + styles.caseLink} href="/tricia/work/icsh">Read the case study</Link>
              </div>
              <p className={styles.caseIntro}>I helped modernise ICSH’s digital setup across its website, workspaces, forms, and membership processes. My role connected the public-facing website with the practical systems the team needs behind it.</p>
            </div>
            <div className={styles.deliverables}>{icshWork.map(({ title, body }) => <div key={title}><h4>{title}</h4><p>{body}</p></div>)}</div>
          </article>
          <article className={"case " + styles.tableCase}>
            <div>
              <h3>The Table</h3>
              <p>A meal-planning and grocery-list web app I created from an everyday need. The project brings together website creation, a digital product, checkout, and private household access.</p>
            </div>
            <Link className="btn" href="/tricia/work/the-table">Read the case study</Link>
          </article>
          <section className={styles.organicWork} aria-labelledby="organic-social-media-manager">
            <h3 id="organic-social-media-manager"><span className={styles.titleHighlight}>Organic Social Media Management</span></h3>
            <div className="case">
              <div className="case-top">
                <div>
                  <h4>Bouncee Co</h4>
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
                  <h4>Earthside Birth Pools</h4>
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
          </section>
        </Reveal>
      </section>

      <section className="cream" id="experience">
        <Reveal className="wrap">
          <div className="section-head"><h2><span className={styles.titleHighlight}>Experience</span></h2></div>
          <div className={styles.experienceGrid}>
            <div><ul className="facts">{experience.map(item => <li key={item.role}><span className="yr">{item.period}</span><span><strong>{item.role}</strong><br />{item.organisation}</span></li>)}</ul><p className={styles.education}>BS in Entrepreneurship · Southville International School &amp; Colleges</p><Link className="textlink" href="/tricia/cv">Read my full CV</Link></div>
            <div className={styles.toolset}><h3><span className={styles.titleHighlight}>Tools I work with</span></h3><ul className="tag-list">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul><p className={styles.approach}>I choose tools around the task, then make sure the result is usable, documented, and easy to maintain.</p></div>
          </div>
        </Reveal>
      </section>

      <section className="cta-band" id="contact"><div className="wrap"><h2>What would make work easier for you?</h2><p>Tell me what you’re building or where you need support. I’ll recommend a scope and bespoke package around your priorities.</p><div className={styles.contactActions}><a className="btn on-dark" href="mailto:tricia@un-make.com">Email Tricia</a><a className="btn on-dark ghost" href="https://calendly.com/tricia-un-make/30min" target="_blank" rel="noopener noreferrer">Book a call</a></div></div></section>
    </main>
  );
}
