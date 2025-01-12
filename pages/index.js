// pages/index.js
import About from '../components/About';
import Why from '@/components/Why';
import Services from '@/components/OurServices';
import Testimonials from '@/components/Testimonials';
import Contacts from '@/pages/Contacts';
import Awards from '@/components/Awards';
import Know from '@/components/Know';
import Benefits from '@/components/Benefits';
import Request from '@/components/Request';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Request />
      <Why />
      <Know />
      <Testimonials />
      <Awards />
      <Benefits />
      <Contacts />
      {/* Other sections of your homepage */}
    </div>
  );
}