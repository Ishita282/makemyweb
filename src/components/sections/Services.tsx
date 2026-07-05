"use client";

import Image from "next/image";
import {
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Search,
  ArrowRight,
  Code2,
  BarChart3,
} from "lucide-react";

import { ButtonLink, Card, Section, SectionTitle } from "@/src/components/ui";
import { Reveal, Shine } from "@/src/components/effects";

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
    title: "E-Commerce",
    description:
      "High-converting online stores with secure payments and modern shopping experiences.",
    icon: ShoppingCart,
    color: "from-emerald-500 to-green-500",
    image: "/images/ecommerce.webp",
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
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with interactive dashboards, business intelligence, performance tracking, and data-driven decision making.",
    icon: BarChart3,
    color: "from-sky-500 to-cyan-500",
    image: "/images/data.webp",
  },
  {
    title: "SEO & Branding",
    description:
      "Strengthen your online presence with technical SEO, brand identity, UI/UX design, content strategy, and digital marketing solutions.",
    icon: Search,
    color: "from-orange-500 to-yellow-500",
    image: "/images/seo.webp",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with premium user experiences.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    image: "/images/mobileapp.webp",
    comingSoon: true,
  },
];

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <SectionTitle
        badge="Our Services"
        title="Everything Your Business Needs to Grow"
        description="From websites and AI solutions to mobile apps and digital marketing, we build products that help businesses stand out."
      />

      <div className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedServices.map((service, index) => {
          const Icon = service.icon;
          const gradient = `bg-gradient-to-br ${service.color}`;

          return (
            <Reveal key={service.title} delay={index * 0.1}>
              <Shine>
                <Card className="group relative h-full overflow-hidden border border-slate-200 transition-all duration-500 hover:border-blue-300">
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-0 scale-110 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-40"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${gradient} shadow-lg transition duration-300 group-hover:scale-110`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                        {service.title}
                      </h3>

                      {service.comingSoon && (
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 transition-colors duration-500 group-hover:bg-amber-400 group-hover:text-slate-900">
                          Coming Soon
                        </span>
                      )}
                    </div>

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

      {limit && (
        <div className="mt-16 text-center">
          <ButtonLink href="/services" size="lg">
            Explore All Services
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}
