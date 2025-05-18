import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-HCMWHKJ5FK"; // Replace with your GA4 ID

export const metadata = {
  title: "Lapsa Web and Graphics",
  description: "Crafting websites and designs that elevate your brand.",
  keywords: [
    "web design Kenya",
    "graphic design Kenya",
    "web development Nairobi",
    "branding services",
    "Lapsa Web and Graphics"
  ],
  authors: [{ name: "Lapsa Web and Graphics", url: "https://lapsa.vercel.app" }],
  creator: "Lapsa Web and Graphics",
  metadataBase: new URL("https://lapsa.vercel.app"),
  openGraph: {
    title: "Lapsa Web and Graphics",
    description: "Crafting websites and designs that elevate your brand.",
    url: "https://lapsa.vercel.app",
    siteName: "Lapsa Web and Graphics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lapsa Web and Graphics preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapsa Web and Graphics",
    description: "Crafting websites and designs that elevate your brand.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lapsa Web and Graphics",
              url: "https://lapsa.vercel.app",
              logo: "https://lapsa.vercel.app/logo.png", // Replace with actual logo URL
              sameAs: [
                "https://facebook.com/lapsa",
                "https://instagram.com/lapsa",
                "https://linkedin.com/company/lapsa"
              ],
              description:
                "Professional web development and graphic design agency based in Kenya.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-900 text-white">
        {/* Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}