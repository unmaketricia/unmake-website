import { socialMetadata } from "@/lib/site-metadata";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WebAnalytics from "@/components/WebAnalytics";

const kalam = localFont({
  src: [
    { path: "../public/fonts/Kalam-Regular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/Kalam-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata = {
  ...socialMetadata("Unmake Studio | Simple web apps and digital tools", "Unmake Studio creates simple web apps and digital tools for everyday life, including The Table for meal planning and grocery organization."),
  metadataBase: new URL("https://www.un-make.com"),
  title: "Unmake Studio | Simple web apps and digital tools",
  description:
    "Unmake Studio creates simple web apps and digital tools for everyday life, including The Table for meal planning and grocery organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kalam.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
        <WebAnalytics />
      </body>
    </html>
  );
}
