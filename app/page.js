import About from "@/components/About";
import AnimatedCounters from "@/components/AnimatedCounters";
import Awards from "@/components/Awards";
import Benefits from "@/components/Benefits";
import ChatButton from "@/components/ChatButton";
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Know from "@/components/Know";
import Navbar from "@/components/Navbar";
import Ourclients from "@/components/Ourclients";
import Services from "@/components/OurServices";
import FAQ from "@/components/Quiz";
import Request from "@/components/Request";
import ImageCarousel from "@/components/Testimonials";
import Why from "@/components/Why";

export default function MyApp({ Component, pageProps}) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <ChatButton />
      <About />
      <AnimatedCounters />
      <Services />
      <Benefits />
      <Why />
      <FAQ />
      <Footer />
    </div>
  );
}