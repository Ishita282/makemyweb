import { Container, Footer, Navbar } from "@/src/components/layout";
import { Card, Heading, Text } from "@/src/components/ui";

const projects = [
  {
    title: "Bug Tracking System",
    description: "A complete bug management platform.",
  },
  {
    title: "Visitor Pass Management",
    description: "Secure visitor management solution.",
  },
  {
    title: "Scriptly",
    description: "AI-powered writing platform.",
  },
];

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">
        <Container>
          <Heading level={1} className="text-center text-5xl">
            Our Projects
          </Heading>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title}>
                <div className="aspect-video rounded-xl bg-slate-100" />

                <Heading level={3} className="mt-5 text-2xl">
                  {project.title}
                </Heading>

                <Text className="mt-3">
                  {project.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
