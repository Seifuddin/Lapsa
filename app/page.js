import About from "@/components/About";
import Awards from "@/components/Awards";
import Benefits from "@/components/Benefits";
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
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
      <Discount />
      <Services />
      <Request />
      <Why />
      <Know />
      <Benefits />
      <Awards />
      <Quiz />
      <Footer />
    </div>
  );
}