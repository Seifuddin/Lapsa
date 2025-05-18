import ServicesHero from "@/components/HeroService";
import OurServices from "@/components/OurServices";

// ✅ SEO metadata for this page
export const metadata = {
  title: "Our Services | Web Development & Graphic Design | Lapsa",
  description:
    "Explore our range of services including web design, branding, UI/UX design, and graphic design tailored to elevate your business in Kenya.",
  alternates: {
    canonical: "https://lapsa.vercel.app/services",
  },
};

export default function Services() {
  return (
    <div className="relative">
      {/* 
        Note: You cannot use <head> inside a React component like this.
        Instead, to add JSON-LD structured data, inject it in the layout or use Next.js’s 
        new Metadata API or a dedicated Head component like 'next/head' if using pages router.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development and Graphic Design",
            provider: {
              "@type": "Organization",
              name: "Lapsa Web and Graphics",
              url: "https://lapsa.vercel.app",
            },
            areaServed: {
              "@type": "Country",
              name: "Kenya",
            },
            serviceType: [
              "Website Design",
              "UI/UX Design",
              "Graphic Design",
              "Brand Identity",
              "Responsive Web Development",
            ],
            description:
              "Lapsa provides high-quality web development and graphic design services in Kenya. From creative branding to responsive websites, we help your business stand out.",
            url: "https://lapsa.vercel.app/services",
          }),
        }}
      />
      <ServicesHero />
      <OurServices />
    </div>
  );
}