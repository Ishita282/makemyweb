import { Container, Footer, Navbar } from "@/src/components/layout";
import { Button, Heading, Text } from "@/src/components/ui";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Heading level={1} className="text-center text-5xl">
              Let&apos;s Build Something Amazing
            </Heading>

            <Text className="mt-6 text-center">
              Tell us about your project and we&apos;ll get back to you shortly.
            </Text>

            <form className="mt-12 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <Button type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
