import AboutUs from "@/components/About";
import Aboutus from "@/components/AboutUs";
import AnimatedCounters from "@/components/AnimatedCounters";
import CorePrinciples from "@/components/CorePrinciples";
import AboutHero from "@/components/HeroAbout";
import ContactsHero from "@/components/HeroContacts";
import ServicesHero from "@/components/HeroService";
import Timeline from "@/components/Timeline";

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
              "https://www.facebook.com/profile.php?id=61570201295782", // ✅ Replace or remove
              "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48",
            ],
          }),
        }}
      />

      {/* Page Sections */}
      <AboutHero />
      <AboutUs />
      <CorePrinciples />
      <Timeline />
      <Aboutus />
    </div>
  );
}
