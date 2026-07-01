"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

import {
  Section,
  SectionTitle,
  Card,
} from "@/src/components/ui";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals, audience, and project requirements before writing a single line of code.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, UI design, branding, and user experience are crafted to match your business perfectly.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build fast, secure, scalable websites and applications using modern technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After testing and deployment, we continue supporting your project with updates and improvements.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <Section className="bg-slate-50">
      <SectionTitle
        badge="Our Process"
        title="From Idea to Launch"
        description="A simple, transparent workflow that keeps your project on track from start to finish."
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Timeline line (desktop) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 lg:block" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className={`flex ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <Card className="relative w-full lg:w-[45%]">
                  {/* Step Number */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {step.number}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute top-10 hidden h-5 w-5 rounded-full border-4 border-white bg-blue-600 lg:block
                    ${
                      isLeft
                        ? '-right-[52px]'
                        : '-left-[52px]'
                    }"
                  />

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon
                      className="text-blue-600"
                      size={28}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
