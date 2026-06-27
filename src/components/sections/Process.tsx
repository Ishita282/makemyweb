import { Container } from "@/src/components/layout";
import { Heading } from "@/src/components/ui";

const steps = [
  "Discovery Call",
  "Planning",
  "Design",
  "Development",
  "Launch",
];

export default function Process() {
  return (
    <section className="py-24">
      <Container>
        <Heading className="text-center text-4xl">
          Our Process
        </Heading>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
