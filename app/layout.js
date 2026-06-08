import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsApp";

const GA_MEASUREMENT_ID = "G-HCMWHKJ5FK";

export const metadata = {
  metadataBase: new URL("https://lapsa.vercel.app"),

  title: {
    default: "Lapsa Web and Graphics",
    template: "%s | Lapsa Web and Graphics",
  },

  description:
    "Crafting websites and designs that elevate your brand.",

  keywords: [
    "web design Kenya",
    "graphic design Kenya",
    "web development Nairobi",
    "branding services",
    "Lapsa Web and Graphics",
  ],

  authors: [
    {
      name: "Lapsa Web and Graphics",
      url: "https://lapsa.vercel.app",
    },
  ],

  creator: "Lapsa Web and Graphics",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Lapsa Web and Graphics",
    description:
      "Crafting websites and designs that elevate your brand.",
    url: "https://lapsa.vercel.app",
    siteName: "Lapsa Web and Graphics",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Lapsa Web and Graphics Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lapsa Web and Graphics",
    description:
      "Crafting websites and designs that elevate your brand.",
    images: ["/images/og-image.jpeg"],
  },

  alternates: {
    canonical: "https://lapsa.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lapsa Web and Graphics",
              url: "https://lapsa.vercel.app",
              logo:
                "https://lapsa.vercel.app/android-chrome-512x512.png",
              description:
                "Professional web development and graphic design agency based in Kenya.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
              sameAs: [
                "https://facebook.com/lapsa",
                "https://instagram.com/lapsa",
                "https://linkedin.com/company/lapsa",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-slate-900 text-white">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
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
        <WhatsAppButton />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}