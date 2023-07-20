import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/Timeline/timeline";
import Statistics from "../components/suraj/Statistics";
import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Statistics />
      <div className="relative">
      <Timeline />
      <Footer/>

      </div>
    </>
  );
}
