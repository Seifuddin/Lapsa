import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ContactsHero from "@/components/HeroContacts";

// ✅ SEO metadata
export const metadata = {
  title: "Contact Us | Lapsa Web and Graphics",
  description:
    "Get in touch with Lapsa Web and Graphics for professional web design and graphic design services in Kenya. We're here to help your brand grow.",
  alternates: {
    canonical: "https://lapsa.vercel.app/contacts",
  },
  openGraph: {
    title: "Contact Lapsa Web and Graphics",
    description:
      "Reach out to Lapsa for expert website development and graphics services tailored to your business needs.",
    url: "https://lapsa.vercel.app/contacts",
    type: "website",
  },
};

export default function Contacts() {
  return (
    <div className="overflow-x-hidden">
      {/* ✅ Structured data for contact and business info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Us - Lapsa Web and Graphics",
              url: "https://lapsa.vercel.app/contacts",
              description:
                "Contact Lapsa for professional web design and graphic design services in Kenya.",
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lapsa Web and Graphics",
              url: "https://lapsa.vercel.app",
              telephone: "+254111608331", // ✅ Replace with actual phone
              email: "lapsatechnologies@gmail.com",   // ✅ Replace with real email
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              description:
                "Lapsa is a web development and graphic design company based in Kenya, offering creative solutions for businesses.",
            },
          ]),
        }}
      />

      {/* Page sections */}
      <Hero />
      <Contact />
    </div>
  );
}