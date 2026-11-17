"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";

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
          // This browser event never grants access. Signed server events do.
          setCompleted(true);
          window.location.assign("/table/thank-you");
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

  function openCheckout() {
    setError("");
    try {
      // Guest checkout: Paddle collects the email and payment without app login.
      window.Paddle.Checkout.open({
        items: [{ priceId: PRICE_ID, quantity: 1 }],
        settings: {
          displayMode: "overlay",
          theme: "light",
          successUrl: window.location.origin + "/table/thank-you",
        },
      });
    } catch {
      setError("Checkout could not open. Please try again or contact us.");
    }
  }

  return (
    <div>
      {enabled && (
        <Script
          id="paddle-billing"
          src="https://cdn.paddle.com/paddle/v2/paddle.js"
          strategy="afterInteractive"
          onReady={initialize}
          onError={() => setError("Checkout could not load. Please refresh the page or contact us.")}
        />
      )}
      {completed ? (
        <p role="status">Thank you. Continue to <Link href="/table/thank-you">set up your private Table</Link>.</p>
      ) : (
        <button className="btn" type="button" disabled={!enabled || !ready} onClick={openCheckout}>
          {!enabled ? "Available soon" : ready ? "Buy The Table — $12" : "Loading checkout…"}
        </button>
      )}
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        {enabled
          ? "Secure payment through Paddle. No sign-in needed to purchase."
          : "Checkout opens once payment verification is connected."}
      </p>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
        After payment, create your private account using your checkout email. Open The Table in your browser or add it to your home screen.
      </p>
      <p style={{ fontSize: "0.85rem" }}><Link href="/table/app/account">Already purchased? Open your Table</Link></p>
      {error && <p role="alert">{error} <Link href="/studio/contact">Contact support</Link></p>}
    </div>
  );
}
