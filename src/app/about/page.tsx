import {
  CTA,
} from "@/src/components/sections";

import {
  Section,
  SectionTitle,
  Card,
} from "@/src/components/ui";

export const metadata = {
  title: "About | MakeMyWeb",
  description:
    "Learn more about MakeMyWeb and our mission.",
};

const values = [
  {
    title: "Innovation",
    description:
      "We use modern technologies to build future-ready digital products.",
  },
  {
    title: "Quality",
    description:
      "Every project is crafted with attention to detail and performance.",
  },
  {
    title: "Partnership",
    description:
      "We believe in long-term relationships rather than one-time projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionTitle
          badge="About Us"
          title="Building Digital Products That Drive Growth"
          description="We help startups, businesses, and enterprises create modern websites, web applications, AI solutions, and digital experiences."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <Card key={item.title}>
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
