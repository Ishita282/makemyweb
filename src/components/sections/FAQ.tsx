"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { Section, SectionTitle, Card } from "@/src/components/ui";
import { Reveal } from "@/src/components/effects";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 1–3 weeks depending on the project scope and content availability.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. We build custom web applications, dashboards, SaaS platforms, admin panels, and AI-powered solutions tailored to your business.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize your current website with improved UI/UX, better performance, SEO, and mobile responsiveness.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. We offer technical SEO, on-page optimization, performance improvements, and strategies to improve your search visibility.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "We provide ongoing maintenance, hosting support, updates, security improvements, and feature enhancements as your business grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-slate-50">
      <SectionTitle
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before starting your project."
      />

      <div className="mx-auto max-w-4xl space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal
              key={faq.question}
            >
              <Card className="overflow-hidden p-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <Reveal>
                    {isOpen ? (
                      <Minus className="text-blue-600" size={22} />
                    ) : (
                      <Plus className="text-slate-500" size={22} />
                    )}
                  </Reveal>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Reveal>
                      <div className="border-t border-slate-200 px-6 py-5">
                        <p className="leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    </Reveal>
                  )}
                </AnimatePresence>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
