"use client";

import { Bot, Globe, Rocket, ShieldCheck } from "lucide-react";

import { Card, Section, SectionTitle } from "@/src/components/ui";

import { Reveal } from "@/src/components/effects";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Launch your website quickly without compromising quality.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Automate workflows and enhance customer experience with AI.",
  },
  {
    icon: Globe,
    title: "Worldwide Service",
    description: "We work remotely with businesses across the globe.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description: "We're here before, during, and after your project launch.",
  },
];

export default function WhyUs() {
  return (
    <Section className="bg-slate-50">
      <SectionTitle
        badge="Why Choose Us"
        title="Everything You Need to Grow Online"
        description="We combine design, development, AI, and marketing to help businesses create modern digital experiences."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Reveal key={feature.title}>
              <Card className="h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
