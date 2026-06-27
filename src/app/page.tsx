import { Footer, Navbar } from "@/src/components/layout";
import {
  CTA,
  Hero,
  Process,
  Projects,
  Services,
  Testimonials,
} from "@/src/components/sections";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
