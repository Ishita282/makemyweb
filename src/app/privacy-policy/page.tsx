import { Section, SectionTitle } from "@/src/components/ui";

export const metadata = {
  title: "Privacy Policy | MakeMyWeb",
  description: "Read how MakeMyWeb collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="max-w-4xl text-center">
      <SectionTitle
        title="Privacy Policy"
        description="Effective Date: July 22, 2026"
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <section>
          <h2>Introduction</h2>
          <p>
            MakeMyWeb respects your privacy. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            website or services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Project Details</li>
            <li>Device & Browser Information</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <ul>
            <li>Respond to inquiries</li>
            <li>Provide requested services</li>
            <li>Improve our website</li>
            <li>Customer support</li>
            <li>Website analytics</li>
          </ul>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We may use cookies to improve website performance and user
            experience.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your data.
            However, no online system can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information by contacting us.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            This Privacy Policy may be updated from time to time without prior
            notice.
          </p>
        </section>
      </div>
    </Section>
  );
}
