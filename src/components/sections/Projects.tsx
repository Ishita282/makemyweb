import { Container } from "@/src/components/layout";
import { Button, Card, SectionTitle } from "@/src/components/ui";

const projects = [
  {
    title: "Bug Tracking System",
    category: "Web Application",
  },
  {
    title: "Visitor Pass Management",
    category: "Management System",
  },
  {
    title: "Scriptly",
    category: "AI Writing Platform",
  },
];

export default function Projects() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          badge="Our Work"
          title="Featured Projects"
          description="A few projects that demonstrate our development capabilities."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="aspect-video rounded-xl bg-slate-100" />

              <h3 className="mt-6 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {project.category}
              </p>

              <Button
                href="/projects"
                variant="secondary"
                className="mt-6"
              >
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
