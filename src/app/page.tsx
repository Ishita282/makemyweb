import {
  CTA,
  FAQ,
  Hero,
  Process,
  Projects,
  Services,
  WhyUs,
  Skills,
} from "@/src/components/sections";
import TestimonialsServer from "@/src/components/server/TestimonialsServer";

import { CursorSpotlight } from "@/src/components/effects";

export default function HomePage() {
  return (
    <>
      <main>
        <CursorSpotlight />
        <Hero />
        <Services limit={3} />
        <Skills />
        <Projects limit={3} />
        <WhyUs />
        <Process />
        <TestimonialsServer />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
