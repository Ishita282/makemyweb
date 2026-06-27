import { Container } from "@/src/components/layout";
import { Card, Heading, Text } from "@/src/components/ui";

const services = [
  "Website Development",
  "Web Applications",
  "Mobile Apps",
  "AI Integration",
  "E-Commerce",
  "SEO",
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="text-center">
          <Heading className="text-4xl">
            Our Services
          </Heading>

          <Text className="mt-4">
            Everything you need to grow your business online.
          </Text>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service}>
              <h3 className="text-xl font-semibold">
                {service}
              </h3>

              <p className="mt-3 text-slate-600">
                Premium solutions built with modern technologies.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
