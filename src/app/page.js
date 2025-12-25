import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RevealAnimations from "../components/RevealAnimations";

export const metadata = {
  title: "High-Performance Websites That Convert",
  description:
    "I help businesses grow with fast, scalable, and conversion-focused websites."
};

export default function Home() {
  return (
    <>
      <RevealAnimations />
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
