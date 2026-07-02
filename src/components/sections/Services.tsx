"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Search,
  ArrowRight,
  Code2,
} from "lucide-react";

import { Card, Button, Section, SectionTitle } from "@/src/components/ui";
import { Magnetic, Reveal, Shine } from "@/src/components/effects";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive business websites built for speed, SEO, and conversions.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    image: "/images/webdev.webp",
  },
  {
    title: "Web Applications",
    description:
      "Custom dashboards, SaaS products, CRM systems, and enterprise web apps.",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    image: "/images/webapp.webp",
  },
  {
    title: "AI Integration",
    description:
      "Chatbots, AI automations, content generation, and intelligent workflows.",
    icon: Bot,
    color: "from-pink-500 to-rose-500",
    image: "/images/ai.webp",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with premium user experiences.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    image: "/images/mobileapp.webp",
  },
  {
    title: "E-Commerce",
    description:
      "High-converting online stores with secure payments and modern shopping experiences.",
    icon: ShoppingCart,
    color: "from-emerald-500 to-green-500",
    image: "/images/ecommerce.webp",
  },
  {
    title: "SEO & Branding",
    description:
      "Technical SEO, branding, UI/UX design, and digital marketing solutions.",
    icon: Search,
    color: "from-orange-500 to-yellow-500",
    image: "/images/seo.webp",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <SectionTitle
        badge="Our Services"
        title="Everything Your Business Needs to Grow"
        description="From websites and AI solutions to mobile apps and digital marketing, we build products that help businesses stand out."
      />

      <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 0.1}>
              <Shine>
                <Card className="group relative h-full overflow-hidden border border-slate-200 transition-all duration-500 hover:border-blue-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-0 scale-110 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-40"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg transition duration-300 group-hover:scale-110`}
                    >
                      <Icon className="text-white" size={30} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-medium text-blue-600 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Card>
              </Shine>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Magnetic>
          <Button href="/services" size="lg">
            Explore All Services
          </Button>
        </Magnetic>
      </div>
    </Section>
  );
}
