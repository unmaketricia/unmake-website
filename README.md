# UNMAKE by Tricia — Website

Next.js (App Router) + React + Tailwind CSS, with minimal Framer Motion
animations. Built to deploy on **Vercel** with zero configuration.

## Pages

| Route        | File                     |
| ------------ | ------------------------ |
| `/`          | `app/page.jsx`           |
| `/services`  | `app/services/page.jsx`  |
| `/shop`      | `app/shop/page.jsx`      |
| `/about`     | `app/about/page.jsx`     |
| `/contact`   | `app/contact/page.jsx`   |

Shared UI lives in `components/` (Nav, Footer, Reveal, Carousel, StrikeBlock,
CtaBand). The design system is in `app/globals.css`; theme tokens are also
mirrored in `tailwind.config.js`.

## The 2 edits before launch

1. **Etsy link** — open `lib/etsy.js` and paste your real Etsy shop/listing URL.
   Every "Get it on Etsy" and "Etsy shop" link across the site updates from
   this one file.
2. **Form email** (optional) — the quote form posts to
   `socials.tricia@gmail.com` via FormSubmit in `app/contact/page.jsx`.
   The first time the form is submitted, FormSubmit emails a one-time
   confirmation link to that address — click it once and you're set. Submit the
   form yourself right after launch to trigger it.

## Deploy to Vercel

1. Push this folder to a GitHub repo (make sure `package.json` is at the top
   level of the repo).
2. On vercel.com → **Add New → Project → Import** the repo.
3. Vercel auto-detects Next.js. Change nothing. Click **Deploy**.
4. Add your domain under **Settings → Domains** (`un-make.com`) and follow the
   DNS instructions. HTTPS is automatic.

## Animations added

- Scroll-reveal fade + rise on every section (Framer Motion, runs once).
- The signature strike-through ("busywork / guesswork / panic-posting") animates
  word-by-word when it scrolls into view.
- Sticky nav gains a hairline border on scroll; animated underline on links;
  animated hamburger on mobile.
- Buttons and cards lift on hover; work-sample carousels with snap + dots.
- All motion respects `prefers-reduced-motion`.

## Run locally (optional — needs Node.js 18+)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```
