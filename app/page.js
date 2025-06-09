import About from "@/components/About";
import AnimatedCounters from "@/components/AnimatedCounters";
import Benefits from "@/components/Benefits";
import ChatButton from "@/components/ChatButton";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import FAQ from "@/components/Quiz";
import Why from "@/components/Why";

// ✅ Page-specific SEO metadata
export const metadata = {
  title: "Professional Web Design and Graphics in Kenya | Lapsa Web and Graphics",
  description: "Lapsa offers top-tier web development and creative graphic design services in Kenya. Elevate your brand with our professional solutions.",
  keywords: [
    "web design Kenya",
    "graphic design Kenya",
    "web development Nairobi",
    "branding services Kenya",
    "Lapsa Web and Graphics",
    "Lapsa"
  ],
  alternates: {
    canonical: "https://lapsa.vercel.app"
  },
  openGraph: {
    title: "Lapsa | Web Design and Graphics in Kenya",
    description: "Elevate your brand online with professional web development and graphics by Lapsa.",
    url: "https://lapsa.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lapsa Web and Graphics"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapsa Web and Graphics",
    description: "Get high-quality web and graphic design solutions with Lapsa.",
    images: ["/og-image.jpg"]
  }
};

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ChatButton />
      <About />
      <OurServices />
      <Benefits />
      <Why />
      <FAQ />
    </div>
  );
}