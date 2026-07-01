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

export default function HomePage() {
  return (
    <>

      <main>
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
