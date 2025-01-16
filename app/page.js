import About from "@/components/About";
import Awards from "@/components/Awards";
import Benefits from "@/components/Benefits";
import Marquee from "@/components/Clients";
import Hero from "@/components/Hero";
import Know from "@/components/Know";
import Services from "@/components/OurServices";
import Quiz from "@/components/Quiz";
import Request from "@/components/Request";
import Why from "@/components/Why";


export default function MyApp({ Component, pageProps}) {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Request />
      <Marquee />
      <Why />
      <Know />
      <Benefits />
      <Awards />
      <Quiz />
    </div>
  );
}