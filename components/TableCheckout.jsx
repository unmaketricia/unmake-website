"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";

// Public Paddle client-side token. Never place a Paddle API key here.
const CLIENT_TOKEN = "live_7fa52602859c6d96287dbd660b0";
const PRICE_ID = "pri_01m7k57ckk7x3gx2wgw2ymzymb";
let initialized = false;

export default function TableCheckout({ enabled = false }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  function initialize() {
    try {
      if (!window.Paddle) throw new Error("Paddle unavailable");
      const eventCallback = (event) => {
        if (event.name === "checkout.completed") {
          // Only a verified server webhook may grant app access.
          setCompleted(true);
          setError("");
          window.location.assign("/table/app/account");
        }
        if (event.name === "checkout.error") {
          setError("Checkout could not be completed. Please try again or contact us.");
        }
      };
      if (!initialized) {
        window.Paddle.Initialize({
          token: CLIENT_TOKEN,
          checkout: { settings: { displayMode: "overlay", theme: "light" } },
          eventCallback,
        });
        initialized = true;
      } else {
        window.Paddle.Update({ eventCallback });
      }
      setError("");
      setReady(true);
    } catch {
      setError("Checkout could not load. Please refresh the page or contact us.");
    }
  }

  async function openCheckout() {
    setError("");
    try {
      const stored = JSON.parse(localStorage.getItem("sb-pwhmbfnjzlljwcwtdsyp-auth-token") || "null");
      const session = stored?.expiresAt > Date.now() ? JSON.parse(stored.value) : null;
      if (!session?.access_token) {
        window.location.assign("/table/app/login");
        return;
      }
      const response = await fetch("https://pwhmbfnjzlljwcwtdsyp.supabase.co/auth/v1/user", {
        headers: {
          apikey: "sb_publishable_vfe4ALJ5WZ--XKWK386UVg_0uENYVQh",
          Authorization: "Bearer " + session.access_token,
        },
      });
      if (!response.ok) {
        window.location.assign("/table/app/login");
        return;
      }
      const user = await response.json();
      if (!user.email_confirmed_at) {
        setError("Confirm your account email before purchasing.");
        return;
      }
      window.Paddle.Checkout.open({
        customer: { email: user.email },
        customData: { table_user_id: user.id },
        items: [{ priceId: PRICE_ID, quantity: 1 }],
        settings: { displayMode: "overlay", theme: "light" },
      });
    } catch {
      setError("Checkout could not open. Please try again or contact us.");
    }
  }

  if (!enabled) {
    return (
      <div>
        <button className="btn" type="button" disabled style={{ opacity: 0.65, cursor: "not-allowed" }}>
          Available soon
        </button>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          Purchases open soon. <Link href="/table/app/login">Create an account or sign in</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <Script
        id="paddle-billing"
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onReady={initialize}
        onError={() => setError("Checkout could not load. Please refresh the page or contact us.")}
      />
      {completed ? (
        <p role="status">
          Thank you. Your payment is being confirmed. If you need help with access,{" "}
          <Link href="/studio/contact">contact UNMAKE Studio</Link>.
        </p>
      ) : (
        <button className="btn" type="button" disabled={!ready} onClick={openCheckout}>
          {ready ? "Buy The Table — $12" : "Loading checkout…"}
        </button>
      )}
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        One-time payment through Paddle. Applicable taxes are shown before you pay.
      </p>
      <p style={{ fontSize: "0.85rem" }}><Link href="/table/app/account">Already purchased? Open your account</Link></p>
      {error && <p role="alert">{error} <Link href="/studio/contact">Contact support</Link></p>}
    </div>
  );
}
