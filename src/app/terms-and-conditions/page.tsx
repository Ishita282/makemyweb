import { Section, SectionTitle } from "@/src/components/ui";

export const metadata = {
  title: "Terms & Conditions | MakeMyWeb",
  description: "Terms and Conditions for using MakeMyWeb services.",
};

export default function TermsPage() {
  return (
    <Section className="max-w-4xl text-center">
      <SectionTitle
        title="Terms & Conditions"
        description="Effective Date: July 22, 2026"
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <section>
          <h2>Acceptance</h2>
          <p>
            By using this website or our services, you agree to these Terms &
            Conditions.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <p>
            MakeMyWeb provides website development, web applications, mobile
            applications, AI solutions, UI/UX design, SEO, and digital
            marketing services.
          </p>
        </section>

        <section>
          <h2>Payments</h2>
          <ul>
            <li>Projects may require an advance payment.</li>
            <li>Invoices must be paid on time.</li>
            <li>Late payments may delay project delivery.</li>
          </ul>
        </section>

        <section>
          <h2>Client Responsibilities</h2>
          <ul>
            <li>Provide accurate information.</li>
            <li>Submit required content on time.</li>
            <li>Review deliverables promptly.</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            Ownership of the completed project transfers to the client after
            full payment unless otherwise agreed.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            MakeMyWeb is not responsible for indirect losses, business
            interruption, or damages caused by third-party services.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these Terms & Conditions at any time by publishing a
            revised version on this page.
          </p>
        </section>
      </div>
    </Section>
  );
}
