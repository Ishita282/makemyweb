import { Footer, Navbar } from "@/src/components/layout";
import {
  CTA,
  FAQ,
  Hero,
  Process,
  Projects,
  Services,
  Testimonials,
  WhyUs,
} from "@/src/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
