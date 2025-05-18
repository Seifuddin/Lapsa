import AboutUs from "@/components/About";
import Aboutus from "@/components/AboutUs";
import ServicesHero from "@/components/HeroService";

// ✅ SEO metadata for this page
export const metadata = {
  title: "About Us | Lapsa Web and Graphics",
  description:
    "Learn more about Lapsa, a creative web design and graphic design company in Kenya. Discover our mission, vision, and commitment to elevating your brand.",
  alternates: {
    canonical: "https://lapsa.vercel.app/about",
  },
  openGraph: {
    title: "About Lapsa Web and Graphics",
    description:
      "Creative web and graphic design solutions built on passion, precision, and purpose.",
    url: "https://lapsa.vercel.app/about",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="relative">
      {/* ✅ JSON-LD structured data (Organization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lapsa Web and Graphics",
            url: "https://lapsa.vercel.app",
            logo: "https://lapsa.vercel.app/logo.png", // ✅ Replace with your real logo URL
            description:
              "Lapsa is a Kenyan company offering professional web design and graphic design services.",
            sameAs: [
              "https://facebook.com", // ✅ Replace or remove
              "https://instagram.com",
            ],
          }),
        }}
      />

      {/* Page Sections */}
      <ServicesHero />
      <AboutUs />
      <Aboutus />
    </div>
  );
}
