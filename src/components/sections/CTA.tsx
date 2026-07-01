"use client";

import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

import { Button, Section } from "@/src/components/ui";
import { AuroraBackground, Magnetic, Reveal } from "@/src/components/effects";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <AuroraBackground />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700" />
      </div>

      <Reveal>

      {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white">
          <Sparkles size={16} />
          Let&apos;s Build Something Amazing
        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          Ready To Grow
          <br />
          Your Business Online?
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100">
          Whether you need a premium website, a custom web application, AI
          automation, or a complete digital solution, we&apos;re ready to help.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Magnetic>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-white text-blue-700 hover:bg-green-100"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Magnetic>

          <Magnetic>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-blue-700"
            >
              <MessageCircle size={18} className="mr-2" />
              View Services
            </Button>
          </Magnetic>
        </div>

        {/* Bottom Stats */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-black text-white">50+</h3>

            <p className="mt-2 text-blue-100">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">100%</h3>

            <p className="mt-2 text-blue-100">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">24/7</h3>

            <p className="mt-2 text-blue-100">Dedicated Support</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
