import {
  Projects,
  CTA,
} from "@/src/components/sections";

export const metadata = {
  title: "Projects | MakeMyWeb",
  description:
    "Browse our portfolio of websites, web apps, and digital products.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />

      <CTA />
    </>
  );
}
