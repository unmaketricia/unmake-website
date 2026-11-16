import Link from "next/link";

const policies = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refunds", label: "Refund Policy" },
];

export default function PolicyPage({ title, intro, children }) {
  return (
    <main>
      <header className="hero tight">
        <div className="wrap">
          <p className="eyebrow">UNMAKE Studio · Policies</p>
          <h1 style={{ maxWidth: "20ch" }}>{title}</h1>
          <p className="lede" style={{ maxWidth: "55ch" }}>{intro}</p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Last updated: November 17, 2026</p>
        </div>
      </header>
      <section className="cream tight">
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <nav aria-label="Policies" className="flex flex-wrap gap-x-6 gap-y-3 border-b border-[var(--line)] pb-8 mb-10">
            {policies.map((policy) => (
              <Link key={policy.href} className="textlink" href={policy.href} aria-current={title === policy.label ? "page" : undefined}>{policy.label}</Link>
            ))}
          </nav>
          <article className="space-y-10 [&_h2]:text-2xl [&_h2]:mb-4 [&_p]:max-w-none [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4" style={{ overflowWrap: "anywhere" }}>
            {children}
          </article>
          <p className="mt-12 pt-6 border-t border-[var(--line)]">
            Questions? <a className="textlink" href="mailto:tricia@un-make.com">tricia@un-make.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
