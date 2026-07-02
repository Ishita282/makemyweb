"use client";

import { Bot, Globe, Rocket, ShieldCheck } from "lucide-react";

import { Card, Section, SectionTitle } from "@/src/components/ui";
import { Marquee, Reveal } from "@/src/components/effects";

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

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  const Icon = feature.icon;

  return (
    <Card className="group mx-4 w-[340px] flex-shrink-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition-transform duration-300 group-hover:scale-110">
        <Icon size={28} className="text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {feature.description}
      </p>
    </Card>
  );
}

export default function WhyUs() {
  return (
    <Section className="overflow-hidden bg-slate-50">
      <Reveal>
        <SectionTitle
          badge="Why Choose Us"
          title="Everything You Need to Grow Online"
          description="We combine design, development, AI, and marketing to help businesses create modern digital experiences."
        />
      </Reveal>

      <div className="space-y-6">
        <Marquee>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}

          {features.map((feature) => (
            <FeatureCard
              key={`${feature.title}-duplicate`}
              feature={feature}
            />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
