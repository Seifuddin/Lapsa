import About from "@/components/About";
import AnimatedCounters from "@/components/AnimatedCounters";
import Benefits from "@/components/Benefits";
import ChatButton from "@/components/ChatButton";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import FAQ from "@/components/Quiz";
import Why from "@/components/Why";

export default function MyApp({ Component, pageProps}) {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ChatButton />
      <About />
      <AnimatedCounters />
      <OurServices />
      <Benefits />
      <Why />
      <FAQ />
    </div>
  );
}