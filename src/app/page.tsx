import {
  CTA,
  FAQ,
  Hero,
  Process,
  Projects,
  Services,
  Testimonials,
  WhyUs,
  Skills,
} from "@/src/components/sections";
import {CursorSpotlight} from "@/src/components/effects";

export default function HomePage() {
  return (
    <>
      <main>
        <CursorSpotlight />
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
