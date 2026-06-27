import { Container } from "@/src/components/layout";
import { Button, Heading, Text } from "@/src/components/ui";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-5xl text-white">
            Ready to Build Something Amazing?
          </Heading>

          <Text className="mt-6 text-lg text-white">
            Let&apos;s discuss your project and turn your ideas
            into a premium digital experience.
          </Text>

          <div className="mt-10">
            <Button
              href="/contact"
              variant="secondary"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
