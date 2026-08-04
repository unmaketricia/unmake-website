import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://un-make.com"),
  title: "Tricia Hilario | Digital Marketer & Social Media Strategist",
  description:
    "Independent digital marketer and social media strategist with 7+ years of experience helping brands across the US, UK, Australia, Singapore, and South Africa grow engaged audiences organically.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
