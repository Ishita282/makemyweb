"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { Card, Section, SectionTitle } from "@/src/components/ui";
import { Reveal } from "@/src/components/effects";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    image: "/images/avatar-1.webp",
    review:
      "The team delivered a beautiful website that exceeded our expectations. Communication was smooth and the final product significantly improved our online presence.",
  },
  {
    name: "Michael Brown",
    role: "Founder, Nova Studio",
    image: "/images/avatar-2.webp",
    review:
      "Professional, fast, and incredibly talented. They transformed our idea into a modern web application that our clients love using every day.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    image: "/images/avatar-3.webp",
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

      <div className="grid gap-8 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal
            key={item.name}
            >
            <Card className="group relative h-full">
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-blue-100 transition group-hover:scale-110">
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
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover ring-2 ring-blue-100"
                />

                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
