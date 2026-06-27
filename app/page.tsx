import { Container } from "@/components/layout/container";
import { Page } from "@/components/layout/page";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <Page>
      <Section>
        <Container>
          <h1 className="text-6xl font-extrabold tracking-tight">
            Build the business your customers deserve.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Premium websites, web applications,
            AI solutions and digital growth.
          </p>
        </Container>
      </Section>
    </Page>
  );
}
