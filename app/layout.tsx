import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { siteConfig } from "@/data/siteConfig";
import { publishedTerms } from "@/lib/dictionary";
import { toSearchDoc } from "@/lib/search";
import { Providers } from "@/components/layout/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { BackToTop } from "@/components/ui/BackToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const docs = publishedTerms.map(toSearchDoc);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <JsonLd data={websiteStructuredData()} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Providers docs={docs}>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
