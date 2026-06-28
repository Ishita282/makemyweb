import { Container, Footer, Navbar } from "@/src/components/layout";
import { Card, Heading } from "@/src/components/ui";

const services = [
  "Website Development",
  "Web Applications",
  "Mobile Apps",
  "AI Integration",
  "E-Commerce",
  "WordPress Development",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Graphic Design",
];

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">
        <Container>
          <Heading level={1} className="text-center text-5xl">
            Our Services
          </Heading>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service}>
                <h3 className="text-xl font-semibold">{service}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
