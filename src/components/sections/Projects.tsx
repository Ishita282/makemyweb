"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  Section,
  SectionTitle,
  Card,
  Badge,
  ButtonLink,
} from "@/src/components/ui";
import { Magnetic, Reveal } from "@/src/components/effects";

const projects = [
  {
    title: "Ads Creation",
    image: "/images/project-1.webp",
    category: "Digital Marketing",
    technologies: ["Next.js", "Tailwind", "SEO"],
    demoUrl: "https://adscreation.in/",
  },
  {
    title: "Protech Medical System",
    image: "/images/project-2.webp",
    category: "E-commerce Platform",
    technologies: ["React", "Firebase", "MERN Stack"],
    demoUrl: "https://protechmedicalsystems.com/",
  },
  {
    title: "Bug Tracker",
    image: "/images/project-3.webp",
    category: "Software Development",
    technologies: ["Vite", "PostgreSQL", "TypeScript"],
    demoUrl: "https://bug-trace-beta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle
        badge="Featured Work"
        title="Projects We're Proud Of"
        description="Every project is crafted with performance, user experience, and business growth in mind."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <Card className="group overflow-hidden p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium opacity-0 transition duration-500 group-hover:opacity-100 hover:bg-blue-600 hover:text-white"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="p-8">
                <p className="text-sm font-medium text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Magnetic>
          <ButtonLink href="/projects">View All Projects</ButtonLink>
        </Magnetic>
      </div>
    </Section>
  );
}
