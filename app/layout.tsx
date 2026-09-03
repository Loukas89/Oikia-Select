import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: { default: "Oikia Select | Curated Real Estate", template: "%s | Oikia Select" },
  description: "Επιλεγμένα ακίνητα που ταιριάζουν στις ανάγκες και στον τρόπο ζωής σου.",
  openGraph: { title: "Oikia Select", description: "Find the place that fits your life.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Oikia Select" }] },
  twitter: { card: "summary_large_image", title: "Oikia Select", description: "Find the place that fits your life.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="el"><body className="antialiased"><SiteHeader />{children}<SiteFooter /></body></html>;
}
