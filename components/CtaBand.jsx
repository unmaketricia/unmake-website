import Link from "next/link";

export default function CtaBand({ title, text, href, cta }) {
  return (
    <div className="cta-band">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="btn on-dark" href={href}>
        {cta}
      </Link>
    </div>
  );
}
