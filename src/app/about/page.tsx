import { Container, Footer, Navbar } from "@/src/components/layout";
import { Heading, Text } from "@/src/components/ui";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading level={1} className="text-5xl">
              About MakeMyWeb
            </Heading>

            <Text className="mt-6">
              MakeMyWeb is a modern digital agency helping businesses build
              high-quality websites, web applications, AI solutions, and
              digital experiences that drive real business growth.
            </Text>

            <Text className="mt-4">
              Our mission is to deliver premium-quality digital products with
              transparent pricing, fast turnaround, and long-term support.
            </Text>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
