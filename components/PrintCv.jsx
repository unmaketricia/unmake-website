"use client";
export default function PrintCv() {
  return <button className="btn" type="button" onClick={() => window.print()}>Print / save as PDF</button>;
}
