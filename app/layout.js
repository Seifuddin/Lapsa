import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"; // Global styles

export const metadata = {
  title: "Lapsa Web and Graphics",
  description: "Crafting websites and designs that elevate your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-slate-900 text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}