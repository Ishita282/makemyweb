"use client";

import { Quote, Star } from "lucide-react";

import { Card, Section, SectionTitle } from "@/src/components/ui";
import { Marquee, Reveal } from "@/src/components/effects";

const testimonials = [
  {
    name: "Muskan Joshi",
    role: "CEO, Protechmedicalsystem",
    review:
      "The team delivered a beautiful website that exceeded our expectations. Communication was smooth and the final product significantly improved our online presence.",
  },
  {
    name: "Gaurav Sharma",
    role: "Marketing Director",
    review:
      "Professional, fast, and incredibly talented. They transformed our idea into a modern web application that our clients love using every day.",
  },
  {
    name: "Ananya Verma",
    role: "Manager",
    review:
      "From design to launch, everything was handled perfectly. We noticed better engagement and more customer inquiries within weeks.",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-slate-50">
      <SectionTitle
        badge="Testimonials"
        title="What Our Clients Say"
        description="We're proud to help businesses launch, grow, and succeed with modern digital solutions."
      />

      <Reveal>
        <Marquee duration={20}>
          {testimonials.map((item, index) => (
            <Card
              key={`${item.name}-${index}`}
              className="group relative w-[380px] flex-shrink-0"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-blue-100 transition-transform duration-300 group-hover:scale-110">
                <Quote size={42} />
              </div>

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-slate-600">{item.review}</p>

              {/* Author */}
              <div className="mt-8">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>

                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </Card>
          ))}
        </Marquee>
      </Reveal>
    </Section>
  );
}
