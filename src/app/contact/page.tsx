import { TiltCard } from "@/src/components/effects";
import {
  Section,
  SectionTitle,
  Input,
  Textarea,
  Button,
  Card,
} from "@/src/components/ui";

export const metadata = {
  title: "Contact | MakeMyWeb",
  description: "Get in touch with MakeMyWeb to discuss your next project.",
};

export default function ContactPage() {
  return (
    <Section>
      <SectionTitle
        badge="Contact"
        title="Let's Build Something Amazing"
        description="Tell us about your project and we'll get back to you shortly."
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <TiltCard>
          <Card>
            <form className="space-y-6">
              <Input placeholder="Your Name" />

              <Input type="email" placeholder="Email Address" />

              <Input placeholder="Company" />

              <Textarea placeholder="Tell us about your project..." />
                <Button>Send Message</Button>
            </form>
          </Card>
        </TiltCard>

        <TiltCard>
          <Card>
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="mt-8 space-y-5 text-slate-600">
              <p>📧 hello@makemyweb.com</p>

              <p>🌍 Worldwide Remote</p>

              <p>⏰ Monday &ndash; Saturday</p>

              <p>⚡ Usually responds within 24 hours</p>
            </div>
          </Card>
        </TiltCard>
      </div>
    </Section>
  );
}
