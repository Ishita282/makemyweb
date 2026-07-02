"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import {
  AuroraBackground,
  GridBackground,
  Floating,
  FloatingBadge,
  Magnetic,
  NoiseBackground,
  Shine,
} from "@/src/components/effects";

import { Button, Section } from "@/src/components/ui";

const features = [
  "AI Powered Solutions",
  "Fast Project Delivery",
  "SEO Optimized",
];

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-20">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <AuroraBackground />

        <GridBackground />

        <NoiseBackground />
      </div>

      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Shine>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            Premium Digital Agency
          </span>
          </Shine>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Websites That
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Grow Businesses
            </span>
            Not Just Traffic.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            We build beautiful websites, web applications, AI-powered tools, and
            digital experiences that help businesses launch faster and grow with
            confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Magnetic>
              <Button href="/contact" size="lg">
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Magnetic>

            <Magnetic>
              <Button href="/projects" variant="outline" size="lg">
                View Our Work
              </Button>
            </Magnetic>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Cards */}

          <Floating
            duration={4}
            distance={10}
            className="absolute -left-8 top-10"
          >
            <FloatingBadge icon="🤖">AI Powered</FloatingBadge>
          </Floating>

          <Floating
            duration={5}
            distance={12}
            className="absolute -right-8 top-32"
          >
            <FloatingBadge icon="🚀">Fast Delivery</FloatingBadge>
          </Floating>

          <Floating
            duration={4.5}
            distance={8}
            className="absolute bottom-10 -left-5"
          >
            <FloatingBadge icon="🌍">Worldwide</FloatingBadge>
          </Floating>
          {/* Browser */}

          <motion.div
            whileHover={{
              rotate: -1,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl"
          >
            {/* Browser Header */}

            <div className="flex items-center gap-2 border-b bg-slate-100 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />

              <span className="h-3 w-3 rounded-full bg-yellow-400" />

              <span className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-6 rounded-full bg-white px-4 py-1 text-xs text-slate-500">
                makemyweb.com
              </div>
            </div>

            <Image
              src="/images/hero.webp"
              alt="MakeMyWeb Website"
              width={1200}
              height={800}
              priority
              className="w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
