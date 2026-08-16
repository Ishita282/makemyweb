"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ButtonLink, Card, Section, SectionTitle } from "@/src/components/ui";

import { Reveal, Shine } from "@/src/components/effects";

import { services } from "@/src/data/services";

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

          const discount = Math.round(
            ((service.pricing.price - service.pricing.startingAt) /
              service.pricing.price) *
              100,
          );

          return (
            <Reveal key={service.id} delay={index * 0.1}>
              <Shine>
                <Card className="group relative h-full overflow-hidden border border-slate-200 transition-all duration-500 hover:border-blue-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="scale-110 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-40"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg transition duration-300 group-hover:scale-110`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                    {/* Title */}
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

                    {/* Description */}
                    <p className="mt-4 leading-7 text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6">
                      <p className="text-[clamp(6px,1.2vw,9px)] my-4 font-medium text-slate-400">
                        *Comparison based on typical current market pricing*
                      </p>
                      <span className="text-sm font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-300">
                        Starting at
                      </span>

                      <div className="mt-1 flex flex-wrap items-center gap-3">
                        <span className="text-sm text-slate-400 line-through">
                          ₹{service.pricing.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-2xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                          ₹{service.pricing.startingAt.toLocaleString("en-IN")}
                        </span>

                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700 transition-colors duration-500 group-hover:bg-green-400 group-hover:text-green-950">
                          {discount}% OFF
                        </span>
                      </div>
                    </div>

                    {/* Learn More */}
                    <Link
                      href={`/services/${service.id}`}
                      className="mt-8 flex items-center gap-2 font-medium text-blue-600 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </Card>
              </Shine>
            </Reveal>
          );
        })}
      </div>

      {/* Explore All */}
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
