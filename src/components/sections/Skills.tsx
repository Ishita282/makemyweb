"use client";

import { Badge, Section, SectionTitle } from "@/src/components/ui";
import { Marquee } from "@/src/components/effects";

const categories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Firebase",
      "Supabase",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Android", "iOS"],
  },
  {
    title: "AI & Automation",
    skills: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Chatbots",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Vercel", "Docker", "GitHub Actions", "Cloudflare", "AWS"],
  },
];

export default function Skills() {
  return (
    <Section>
      <SectionTitle
        badge="Our Stack"
        title="Technologies We Love"
        description="Modern technologies used to build fast, scalable and beautiful products."
      />

      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-6 text-2xl font-bold">{category.title}</h3>

            <Marquee duration={18}>
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </Section>
  );
}
