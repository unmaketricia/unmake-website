import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Message received | UNMAKE Studio",
  description: "Your Studio message has been received.",
  robots: { index: false, follow: false },
};

export default function StudioThanks() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Message received</p>
          <h1>Thanks for reaching out.</h1>
          <p className="lede">
            Your message is on its way. I’ll follow up by email as soon as I can.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/studio">
              Back to Studio
            </Link>
          </div>
        </div>
      </header>
      <section className="cream tight">
        <Reveal className="wrap">
          <p>
            Need to add something? Email{" "}
            <a className="textlink" href="mailto:tricia@un-make.com">
              tricia@un-make.com
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
