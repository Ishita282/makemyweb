"use client";

import { Badge, Section, SectionTitle } from "@/src/components/ui";
import { Marquee } from "@/src/components/effects";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "Firebase",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "React Native",
  "Expo",
  "Android",
  "iOS",
  "OpenAI",
  "Chatbots",
  "AI Agents",
  "Prompt Engineering",
  "Vercel",
  "Docker",
  "GitHub",
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));

export default function Skills() {
  return (
    <Section className="overflow-hidden bg-slate-50">
      <SectionTitle
        badge="Our Stack"
        title="Technologies We Love"
        description="Modern technologies used to build fast, scalable, and beautiful digital products."
      />

      <div className="mt-12 space-y-6">
        <Marquee duration={20}>
          {firstRow.map((skill) => (
            <Badge
              key={skill}
              className="flex-shrink-0 whitespace-nowrap px-5 py-2 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
