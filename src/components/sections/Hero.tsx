import { Container } from "@/src/components/layout";
import { Button, Heading, Text } from "@/src/components/ui";

export default function Hero() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Premium Digital Growth Agency
          </span>

          <Heading className="mt-8 text-5xl leading-tight md:text-7xl">
            We Build Websites That Grow Businesses.
          </Heading>

          <Text className="mx-auto mt-8 max-w-2xl text-lg">
            From modern websites to AI-powered web applications,
            we help businesses launch faster, look better, and
            generate more customers online.
          </Text>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact">
              Start Your Project
            </Button>

            <Button
              href="/projects"
              variant="secondary"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                20+
              </h3>
              <p className="mt-1 text-slate-600">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                100%
              </h3>
              <p className="mt-1 text-slate-600">
                Client Focused
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                Worldwide
              </h3>
              <p className="mt-1 text-slate-600">
                Remote Services
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
