import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Studio Contact | UNMAKE",
  description:
    "Ask a question, get help with a digital product, or share feedback with UNMAKE Studio.",
};

export default function StudioContact() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap">
          <p className="eyebrow">UNMAKE Studio</p>
          <h1>Questions or feedback?</h1>
          <p className="lede">
            Send a note about a download, a web app, or an idea for a future
            solution. I read every message and will get back to you as soon as I can.
          </p>
        </div>
      </header>

      <section className="cream">
        <Reveal className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>What can I help with?</h3>
              <p>
                Product questions, download help, feedback, and suggestions for
                future Studio tools are all welcome.
              </p>
              <h3>Prefer email?</h3>
              <p>
                <a className="textlink" href="mailto:tricia@un-make.com">
                  tricia@un-make.com
                </a>
              </p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="2d389fe0-93a5-4cdf-97f9-672c0e593ef5"
              />
              <input
                type="hidden"
                name="subject"
                value="New UNMAKE Studio inquiry"
              />
              <input type="hidden" name="from_name" value="UNMAKE Studio" />
              <input
                type="hidden"
                name="redirect"
                value="https://www.un-make.com/studio/thank-you"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="field-row">
                <div>
                  <label htmlFor="studio-name">Your name</label>
                  <input
                    id="studio-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="studio-email">Email</label>
                  <input
                    id="studio-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="studio-topic">What is this about?</label>
                <select id="studio-topic" name="topic" required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option>Product question</option>
                  <option>Purchase or download help</option>
                  <option>Web app inquiry</option>
                  <option>Feedback or suggestion</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="studio-message">Your message</label>
                <textarea
                  id="studio-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me how I can help."
                ></textarea>
              </div>
              <button className="btn" type="submit">
                Send message
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
