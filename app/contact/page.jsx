import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact | UNMAKE by Tricia",
  description:
    "Tell me where you're stuck. I'll reply with a plan, clear pricing, and an honest read on fit.",
};

export default function Contact() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Tell me where you&apos;re stuck.</h1>
          <p className="lede">
            A few details and I&apos;ll reply with a plan, clear pricing, and an
            honest read on fit.
          </p>
        </div>
      </header>

      <section className="cream">
        <Reveal className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Email</h3>
              <p>
                <a className="textlink" href="mailto:hello@un-make.com">
                  hello@un-make.com
                </a>
              </p>
              <h3>WhatsApp</h3>
              <p>
                <a
                  className="textlink"
                  href="https://wa.me/639605283683"
                  target="_blank"
                  rel="noopener"
                >
                  +63 960 528 3683
                </a>
              </p>
              <h3>Instagram</h3>
              <p>
                <a
                  className="textlink"
                  href="https://www.instagram.com/unmakeit"
                  target="_blank"
                  rel="noopener"
                >
                  @unmakeit
                </a>
              </p>
              <h3>Hours</h3>
              <p>
                I work across US, UK, and AU time zones and reply within one
                business day.
              </p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="e15b964e-cd6a-4d35-b42d-9a3fcd68758f"
              />
              <input
                type="hidden"
                name="subject"
                value="New quote request from un-make.com"
              />
              <input type="hidden" name="from_name" value="UNMAKE website" />
              {/* honeypot: bots tick this hidden box, real people can't see it */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="field-row">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="brand">Brand or website</label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  placeholder="yourbrand.com or @handle"
                />
              </div>
              <div>
                <label htmlFor="service">What&apos;s eating your time?</label>
                <select id="service" name="service">
                  <option>Social media</option>
                  <option>Email marketing</option>
                  <option>Influencer and UGC</option>
                  <option>Amazon design</option>
                  <option>Website</option>
                  <option>SEO</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Tell me a little more</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Where are you now, and what would better look like?"
                ></textarea>
              </div>
              <button className="btn" type="submit">
                Send it over
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
