import Link from "next/link";
import PrintCv from "@/components/PrintCv";
import { profile, services, cvExperience, packageNote, tools } from "@/lib/portfolio";
import styles from "./cv.module.css";

export const metadata = { title: "CV | Tricia Hilario", description: profile.summary, robots: { index: false, follow: false } };

export default function CV() {
  return <main className={styles.cv}>
    <div className={styles.actions}><Link className="textlink" href="/tricia">Back to portfolio</Link><PrintCv /></div>
    <article className={styles.document}>
      <header><h1>{profile.name}</h1><p className={styles.role}>{profile.role}</p><p className={styles.contact}>Philippines · Available for international projects<br /><a href={"mailto:" + profile.email}>{profile.email}</a> · <a href="https://www.un-make.com/tricia">www.un-make.com/tricia</a></p><p>{profile.summary}</p></header>
      <section><h2>Core expertise</h2><ul className={styles.expertise}>{services.map(item => <li key={item.title}>{item.title}</li>)}</ul><p>{packageNote}</p></section>
      <section><h2>Relevant experience</h2>{cvExperience.map(item => <div className={styles.job} key={item.role}><p className={styles.period}>{item.period}</p><h3>{item.role}</h3><p className={styles.organisation}>{item.organisation}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div>)}</section>
      <section><h2>Tools &amp; platforms</h2><p>{tools.join(" · ")}</p></section>
      <section><h2>Education</h2><p><strong>BS in Entrepreneurship</strong><br />Southville International School &amp; Colleges · 2011</p></section>
    </article>
  </main>;
}
