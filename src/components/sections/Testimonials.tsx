import { Container } from "@/src/components/layout";
import { Card, SectionTitle } from "@/src/components/ui";

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Startup",
    review:
      "MakeMyWeb delivered a modern website that exceeded our expectations.",
  },
  {
    name: "Sarah Johnson",
    company: "E-commerce Brand",
    review:
      "Professional communication, fast delivery, and outstanding quality.",
  },
  {
    name: "Michael Brown",
    company: "Consulting Firm",
    review:
      "Highly recommended. The team understood our business perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="Trusted by Growing Businesses"
          description="What our clients say about working with us."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
