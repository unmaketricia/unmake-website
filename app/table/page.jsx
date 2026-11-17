import Link from "next/link";
import Reveal from "@/components/Reveal";
import TableCheckout from "@/components/TableCheckout";
import EditorialIllustration from "@/components/EditorialIllustration";

export const metadata = {
  title: "The Table | Simple Meal Planning for Real Life | UNMAKE",
  description:
    "Plan your meals and see what needs to be bought with The Table, a straightforward meal-planning web app for busy people and households. No calorie counting or complicated setup.",
};

function ProductPreview({ kind = "week" }) {
  const examples = {
    week: {
      title: "A week at The Table",
      caption: "Example meal plan",
      rows: [["Monday", "Chicken and vegetable rice"], ["Tuesday", "Pasta with tomato sauce"], ["Wednesday", "Fish, rice, and greens"], ["Thursday", "Vegetable stir-fry"], ["Friday", "Homemade burgers"]],
    },
    day: {
      title: "Meals for your day",
      caption: "Example daily menu",
      rows: [["Breakfast", "Eggs and toast"], ["Lunch", "Chicken and vegetable rice"], ["Dinner", "Pasta with tomato sauce"], ["Snack", "Fruit and yogurt"]],
    },
    grocery: {
      title: "Remember what to buy",
      caption: "Example grocery list",
      rows: [["Produce", "Carrots, tomatoes, and greens"], ["Main ingredient", "Chicken and fish"], ["Pantry", "Rice and pasta"], ["Dairy", "Milk and yogurt"]],
    },
  };
  const example = examples[kind] || examples.week;
  return (
    <figure style={{ margin: 0, border: "1px solid var(--line)", borderRadius: "18px", overflow: "hidden", background: "var(--cream)" }}>
      <div style={{ background: "var(--teal-deep)", color: "var(--cream)", padding: "1.5rem" }}>
        <p style={{ margin: "0 0 0.4rem", fontSize: "0.8rem", letterSpacing: "0.12em" }}>THE TABLE</p>
        <h3 style={{ margin: 0, color: "inherit", fontSize: "1.5rem" }}>{example.title}</h3>
      </div>
      <dl style={{ padding: "0.5rem 1.5rem", margin: 0 }}>
        {example.rows.map(([label, value]) => (
          <div key={label} style={{ padding: "0.85rem 0", borderBottom: "1px solid var(--line)" }}>
            <dt style={{ fontWeight: 500, fontSize: "0.85rem", color: "var(--teal-deep)" }}>{label}</dt>
            <dd style={{ margin: "0.2rem 0 0", fontSize: "0.95rem" }}>{value}</dd>
          </div>
        ))}
      </dl>
      <figcaption style={{ padding: "0.75rem 1.5rem 1.25rem", fontSize: "0.8rem", color: "var(--muted)" }}>
        {example.caption}. Illustrative layout with sample entries.
      </figcaption>
    </figure>
  );
}

const steps = [
  {
    number: "01",
    title: "Plan what you’ll eat",
    text: "Add meals to your week in a clear, simple menu. Keep the plan focused on your household and the way you actually eat.",
  },
  {
    number: "02",
    title: "See what needs buying",
    text: "Use the grocery list to keep track of what you need for the meals you planned. No calorie targets or nutrition dashboards to manage.",
  },
  {
    number: "03",
    title: "Keep everyone in the loop",
    text: "See the full family menu for the day and invite a household member by email to access your household’s Table.",
  },
];

const features = [
  {
    title: "Weekly meal planning",
    text: "Build a practical menu for the week without navigating a maze of tools.",
  },
  {
    title: "A grocery list that follows your plan",
    text: "See what needs to be bought to make the meals happen, all in one straightforward place.",
  },
  {
    title: "The full day at a glance",
    text: "Keep the family’s complete menu for the day easy to find and share.",
  },
  {
    title: "Room for different needs",
    text: "Add another menu for dietary preferences, babies, toddlers, or other household needs.",
  },
  {
    title: "Simple home inventory",
    text: "Track portions of meat and protein you have, then use them while planning meals.",
  },
  {
    title: "Household access by email",
    text: "Invite a partner, helper, or other household member to the menu for your home.",
  },
];

export default function TablePage() {
  return (
    <>
      <header className="hero tight">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">UNMAKE · THE TABLE</p>
            <h1>Meal planning without another app to learn.</h1>
            <p className="lede">
              Plan your meals, see what needs to be bought, and get on with your day.
              The Table is plug-and-play meal planning for homemakers and busy people
              who need useful, simple tools.
            </p>
            <p style={{ color: "var(--muted)", marginTop: "var(--s2)" }}>
              No calorie counting. No complicated dashboards. Just your menu and what
              you need to make it happen.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginTop: "var(--s4)" }}>
              <Link className="btn" href="#purchase">Get The Table</Link>
              <Link className="textlink" href="#how-it-works">See how it works</Link>
            </div>
            <p className="price-tag" style={{ marginTop: "var(--s3)" }}>$12 one time · no monthly subscription</p>
          </div>
          <div className="table-hero-preview">
            <ProductPreview kind="week" />
            <EditorialIllustration scene="weekly" className="table-hero-spot" />
          </div>
        </div>
      </header>

      <section className="cream" id="how-it-works">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">A calmer way to plan</p>
            <h2>From grocery list to meal plan, without the extra steps.</h2>
            <p>
              You don’t need another system to maintain. The Table keeps meal planning
              and shopping close together, so it’s easy to start and easy to come back to.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} style={{ padding: "1.5rem", border: "1px solid var(--line)", borderRadius: "16px", background: "var(--cream)" }}>
                <p className="eyebrow">{step.number}</p>
                <h3>{step.title}</h3>
                <p style={{ color: "var(--muted)" }}>{step.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Made to feel straightforward</p>
            <h2>Open it. Plan your meals. Know what to buy.</h2>
            <p>
              If other meal-planning apps felt like one more thing to learn, The Table
              was made for a lighter start. It doesn’t ask you to count calories or
              spend time setting up a complicated routine. Your menu and grocery needs
              stay front and center.
            </p>
            <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)" }}>
              <li>Simple screens and a clear weekly menu</li>
              <li>Grocery planning tied to meals you intend to make</li>
              <li>Useful for a household, not just one person’s meal plan</li>
            </ul>
          </div>
          <ProductPreview kind="day" />
        </Reveal>
      </section>

      <section className="cream" id="features">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">The features you need</p>
            <h2>Useful for real homes and real schedules.</h2>
            <p>All the practical parts of planning meals, without turning it into a project.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article key={feature.title} style={{ padding: "1.35rem", border: "1px solid var(--line)", borderRadius: "16px", background: "var(--cream)" }}>
                <EditorialIllustration scene={["weekly", "groceries", "favorites", "custom", "inventory", "sharing"][index]} className="table-feature-illustration" />
                <h3>{feature.title}</h3>
                <p style={{ color: "var(--muted)", marginBottom: 0 }}>{feature.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap grid items-center gap-10 md:grid-cols-2">
          <ProductPreview kind="grocery" />
          <div>
            <p className="eyebrow">Spend less time figuring it out</p>
            <h2>Make the plan happen with what you actually need.</h2>
            <p>
              The point isn’t to measure every bite. It’s to make it easier to decide
              what’s for the day and remember what you need to buy before you start cooking.
            </p>
            <Link className="textlink" href="#purchase">Get started with The Table →</Link>
          </div>
        </Reveal>
      </section>

      <section className="cream" id="purchase">
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">One simple purchase</p>
            <h2>Make meal planning one less thing to figure out.</h2>
            <p>
              Get The Table for a one-time price of $12. No monthly subscription.
              Applicable taxes are calculated at checkout.
            </p>
          </div>
          <div style={{ maxWidth: "34rem", margin: "0 auto", padding: "2rem", textAlign: "center", border: "1px solid var(--line)", borderRadius: "18px", background: "var(--cream)" }}>
            <p className="eyebrow">The Table · web app</p>
            <p style={{ fontSize: "clamp(2rem, 6vw, 3rem)", margin: "0.5rem 0" }}>$12</p>
            <p style={{ color: "var(--muted)" }}>one-time purchase · no recurring fee</p>
            <TableCheckout enabled={process.env.TABLE_CHECKOUT_ENABLED === "true"} />
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: "var(--s2) 0 0" }}>
              <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/refunds">14-day refund policy</Link>
            </p>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal className="wrap">
          <div className="section-head">
            <p className="eyebrow">A few quick answers</p>
            <h2>Questions about The Table</h2>
          </div>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <details style={{ padding: "1rem 0", borderBottom: "1px solid var(--line)" }}>
              <summary>Does The Table count calories or track nutrition?</summary>
              <p style={{ color: "var(--muted)" }}>No. It focuses on meal planning and helping you remember what needs to be bought.</p>
            </details>
            <details style={{ padding: "1rem 0", borderBottom: "1px solid var(--line)" }}>
              <summary>Who is The Table for?</summary>
              <p style={{ color: "var(--muted)" }}>Homemakers, busy individuals, and households that want a simple way to plan meals and shopping.</p>
            </details>
            <details style={{ padding: "1rem 0", borderBottom: "1px solid var(--line)" }}>
              <summary>Can I plan for different needs in my home?</summary>
              <p style={{ color: "var(--muted)" }}>The Table is designed to support additional menus for preferences, dietary needs, babies, toddlers, and other household routines.</p>
            </details>
          </div>
        </Reveal>
      </section>
    </>
  );
}
