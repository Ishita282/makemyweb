import Link from "next/link";
import { ArrowLeft, MessageSquare, Star } from "lucide-react";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Star className="h-6 w-6" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-950">
            My Reviews
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            View the reviews you have submitted for our services and projects.
          </p>

          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-slate-400" />

            <h2 className="mt-4 font-semibold text-slate-950">
              No reviews yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Once you complete a project, you&apos;ll be able to leave a
              review here.
            </p>

            <Link
              href="/projects"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
