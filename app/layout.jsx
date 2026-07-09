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
  title: "UNMAKE by Tricia | Marketing systems for brands that work smarter",
  description:
    "Organic growth systems for growing brands. AI handles the repetitive work. Human judgment handles everything your audience can feel. Led by Tricia Hilario.",
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
