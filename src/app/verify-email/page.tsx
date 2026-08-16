"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyEmailContent() {
  const searchParams = useSearchParams();

  const success = searchParams.get("success") === "true";
  const error = searchParams.get("error");

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
            ✓
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Email verified!
          </h1>

          <p className="mt-3 text-slate-600">
            Your MakeMyWeb account has been created successfully.
            You can now log in.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  let title = "Verify your email";
  let message =
    "Please check your email and click the verification link to complete your registration.";

  if (error === "invalid-token") {
    title = "Invalid verification link";
    message =
      "This verification link is invalid or has already been used.";
  }

  if (error === "expired") {
    title = "Verification link expired";
    message =
      "This verification link has expired. Please start the signup process again.";
  }

  if (error === "already-exists") {
    title = "Account already exists";
    message =
      "An account with this email already exists. Please log in instead.";
  }

  if (error === "server") {
    title = "Something went wrong";
    message =
      "We could not complete email verification. Please try again later.";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl">
          ✉
        </div>

        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

        <p className="mt-3 text-slate-600">{message}</p>

        {error === "already-exists" ? (
          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go to Login
          </Link>
        ) : error === "expired" ? (
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up Again
          </Link>
        ) : !error ? (
          <Link
            href="/signup"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Signup
          </Link>
        ) : (
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>
        )}
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="text-slate-600">Loading...</p>
        </main>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}
