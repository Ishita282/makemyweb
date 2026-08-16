import Link from "next/link";
import { redirect } from "next/navigation";

import { auth, signIn } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await auth();

  if (session?.user?.email) {
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (adminEmail && session.user.email.toLowerCase() === adminEmail) {
      redirect("/admin");
    }

    redirect("/dashboard");
  }
  const params = await searchParams;

  const error = params.error;
  const message = params.message;

  let errorMessage = "";

  if (error === "CredentialsSignin") {
    errorMessage = "Invalid email or password.";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-950">
          Welcome to MakeMyWeb
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Sign in to manage your projects, wishlist, reviews, and orders.
        </p>

        {message && (
          <p className="mt-6 text-center text-sm font-medium text-blue-600">
            {message}
          </p>
        )}

        {errorMessage && (
          <p className="mt-6 text-center text-sm font-medium text-red-600">
            {errorMessage}
          </p>
        )}

        {/* Email / Password Login */}
        <form
          action={async (formData) => {
            "use server";

            const emailValue = formData.get("email");
            const passwordValue = formData.get("password");

            if (
              typeof emailValue !== "string" ||
              typeof passwordValue !== "string"
            ) {
              return;
            }

            const email = emailValue.trim().toLowerCase();
            const password = passwordValue;

            const user = await prisma.user.findUnique({
              where: { email },
              select: {
                id: true,
                email: true,
              },
            });

            if (!user) {
              const encodedMessage = encodeURIComponent(
                "You are a new user. Please sign up.",
              );

              redirect(`/login?message=${encodedMessage}`);
            }

            const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

            const redirectTo =
              adminEmail && email === adminEmail ? "/admin" : "/dashboard";

            await signIn("credentials", {
              email,
              password,
              redirectTo,
            });
          }}
          className="mt-6 space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Google Login */}

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-sm text-slate-400">OR</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <form
          action={async () => {
            "use server";

            await signIn(
              "google",
              {
                redirectTo: "/auth/redirect",
              },
              {
                prompt: "select_account",
              },
            );
          }}
        >
          <button
            type="submit"
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
