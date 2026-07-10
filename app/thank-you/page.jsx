import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Thank you | UNMAKE by Tricia",
  description:
    "Your message is in. I'll reply within 24 hours with a plan, clear pricing, and an honest read on fit.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Message received</p>
          <h1>Thanks — your message is in.</h1>
          <p className="lede">
            I read every message myself. Expect a reply within 24 hours with a
            plan, clear pricing, and an honest read on whether we&apos;re a fit.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/services">
              Explore services
            </Link>
            <Link className="btn ghost" href="/shop">
              Browse the shop
            </Link>
          </div>
        </div>
      </header>

      <section className="cream tight">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">What happens next</p>
            <h2>Here&apos;s what to expect.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <h3>I read it, personally.</h3>
              <p>
                No auto-responder runarounds and no junior team. Your message
                comes straight to me.
              </p>
            </div>
            <div className="step">
              <h3>A reply within 24 hours.</h3>
              <p>
                Usually sooner. I work across US, UK, and AU time zones, so a
                reply is rarely far behind.
              </p>
            </div>
            <div className="step">
              <h3>A plan, not a pitch.</h3>
              <p>
                The smallest system that solves your problem, with clear
                pricing. If I&apos;m not the fit, I&apos;ll say so.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "var(--s5)", color: "var(--muted)" }}>
            Didn&apos;t mean to land here, or need to add something? Email me
            directly at{" "}
            <a className="textlink" href="mailto:hello@un-make.com">
              hello@un-make.com
            </a>{" "}
            or message{" "}
            <a
              className="textlink"
              href="https://www.instagram.com/unmakeit"
              target="_blank"
              rel="noopener"
            >
              @unmakeit
            </a>
            . A quick tip: check your spam folder so my reply doesn&apos;t get
            lost.
          </p>
          <p style={{ marginTop: "var(--s4)" }}>
            <Link className="btn" href="/">
              Back to home
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
