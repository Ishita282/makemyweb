import { Container } from "@/components/layout/container";
import { Page } from "@/components/layout/page";
import { Section } from "@/components/layout/section";

import {
  Display,
  Text,
} from "@/components/ui/typography";

export default function HomePage() {
  return (
    <Page>
      <Section>
        <Container>
          <Display>
            Build the business your customers deserve.
          </Display>

          <Text
            size="lg"
            tone="muted"
            className="mt-6 max-w-2xl"
          >
            Premium websites, web applications,
            AI integrations, automation,
            SEO and digital growth.
          </Text>
        </Container>
      </Section>
    </Page>
  );
}
