import Link from "next/link";
export const metadata = { title: "Open your Table | UNMAKE Studio", robots: { index: false, follow: false } };
export default function TableThankYou() {
 return <section className="cream"><div className="wrap" style={{maxWidth:"44rem",textAlign:"center"}}>
  <p className="eyebrow" style={{justifyContent:"center"}}>Your next step</p>
  <h1>Make room at your Table.</h1>
  <p style={{margin:"1.5rem auto"}}>After your payment is confirmed, your purchase unlocks one private household for you and up to three additional members.</p>
  <ol style={{textAlign:"left",paddingLeft:"1.5rem",margin:"2rem auto",maxWidth:"34rem"}}>
   <li>Create an account using the same email you entered at checkout.</li>
   <li>Confirm your email, then sign in. Your purchase will be matched automatically.</li>
   <li>Open your private Table and start planning. Add it to your phone’s home screen for easy access.</li>
  </ol>
  <Link className="btn" href="/table/app/login?setup=1">Set up my Table</Link>
  <p style={{margin:"1rem auto"}}>Already have an account? <Link href="/table/app/login">Sign in</Link>.</p>
  <p style={{color:"var(--muted)",margin:"1.5rem auto"}}>The Table is an installable web app. There is no separate download file. Each household’s menus, groceries, and inventory are private.</p>
  <p style={{margin:"1rem auto"}}>Need help? <Link href="/studio/contact">Contact UNMAKE Studio</Link>.</p>
 </div></section>;
}
