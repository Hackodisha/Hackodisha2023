
import Accordion from "@/components/FAQs/Accordion";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/timeline";
import Statistics from "../components/suraj/Statistics";
import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer/Footer";
import { Sponsor } from "@/components/Sponsor/Sponsors";

export default function Home() {
  return (
    <>
  
      <Hero />
      <AboutUs />
      <Statistics />
      <Timeline />
      <Sponsor/>
      <div className="relative">
      <Accordion/>
      <Footer/>

      </div>    
    </>
  );
}
