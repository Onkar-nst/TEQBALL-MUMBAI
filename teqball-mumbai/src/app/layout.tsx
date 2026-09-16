import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Teqball Mumbai", template: "%s · Teqball Mumbai" },
  description:
    "Teqball Mumbai is India's high-performance teqball ecosystem: a national-standard club, a talent pathway, and the training ground behind the country's first Asian Youth Games teqball representative.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="tri-rule"><span className="s" /><span className="p" /><span className="g" /></div>
        <Topbar />
        <div className="shell">
          <SideNav />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
