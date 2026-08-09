import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd, localBusinessJsonLd, buildMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Nexa Construction Solutions | Construction Labour Hire & Services NSW",
    description:
      "Nexa Construction Solutions supplies construction labour hire, skilled trades and project support across Sydney, Western Sydney and NSW. Based in Rouse Hill.",
    path: "/",
  }),
  metadataBase: new URL("https://www.nexaconstructionsolutions.com.au"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-offwhite text-charcoal-900">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()]} />
        <a
          href="#main-content"
          className="fixed top-2 left-2 z-[100] -translate-y-24 bg-amber-500 px-4 py-2 text-sm font-semibold text-charcoal-950 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
