export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          MakeMyWeb
        </p>

        <h1
          className="text-5xl font-extrabold leading-tight md:text-7xl"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Build the Business Your Customers Deserve.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          We design and develop premium websites, web applications,
          AI-powered solutions, and digital experiences that help
          businesses grow faster.
        </p>
      </section>
    </main>
  );
}
