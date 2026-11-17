"use client";
import { Analytics } from "@vercel/analytics/next";
import { publicPageview } from "@/lib/analytics-event.mjs";

export default function WebAnalytics() {
  return <Analytics beforeSend={publicPageview} />;
}
