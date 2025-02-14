import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import FeaturesSection from "@/components/sections/Features";
import SolutionsSection from "@/components/sections/Solutions";
import TechnologySection from "@/components/sections/Technology";
import TestimonialsSection from "@/components/sections/Testimonials";
import PricingSection from "@/components/sections/Pricing";
import ContactUs from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <SolutionsSection/>
      <TechnologySection/>
      <TestimonialsSection/>
      <PricingSection/>
      {/* <Contact /> */}
      <ContactUs/>
      <Footer/>
    </main>
  );
}