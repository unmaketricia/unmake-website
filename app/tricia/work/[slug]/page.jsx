import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/portfolio-case-studies";
import styles from "./case-study.module.css";

export function generateStaticParams() {
  return Object.keys(caseStudies).map(slug => ({ slug }));
}
export function generateMetadata({ params }) {
  const study = caseStudies[params.slug];
  if (!study) return {};
  return { title: study.title + " | Tricia Hilario", description: study.intro[0], robots: { index: false, follow: false } };
}
export default function CaseStudy({ params }) {
  const study = caseStudies[params.slug];
  if (!study) notFound();
  return <main className={styles.study}>
    <header className="hero tight"><div className="wrap">
      <Link className="textlink" href="/tricia#work">Back to selected work</Link>
      <p className="eyebrow">Case study · {study.client}</p>
      <h1>{study.title}</h1>
      <p className={styles.projectType}><strong>Project type</strong><br />{study.type}</p>
    </div></header>
    <article className="wrap">
      <div className={styles.intro}>{study.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      {study.sections.map(({ title, paragraphs }) => <section className={styles.section} key={title}><h2>{title}</h2><div>{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
      <section className={styles.details}><h2>Technology &amp; platforms</h2><ul>{study.technologies.map(tool => <li key={tool}>{tool}</li>)}</ul><h2>Key competencies demonstrated</h2><ul>{study.competencies.map(skill => <li key={skill}>{skill}</li>)}</ul></section>
      <div className={styles.actions}><a className="btn" href={study.link} target="_blank" rel="noopener noreferrer">{study.linkLabel}</a><a className="btn ghost" href="mailto:tricia@un-make.com">Discuss a similar project</a></div>
      <nav className={styles.related} aria-label="Other case studies">{Object.entries(caseStudies).filter(([slug]) => slug !== params.slug).map(([slug, other]) => <Link className="textlink" href={"/tricia/work/" + slug} key={slug}>Next case study: {other.title}</Link>)}</nav>
    </article>
  </main>;
}
