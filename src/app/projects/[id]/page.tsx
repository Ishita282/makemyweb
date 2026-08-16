import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Clock3,
  CreditCard,
  Mail,
  Phone,
} from "lucide-react";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const { id } = await params;

  const project = await prisma.project.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!project) {
    notFound();
  }

  const statusLabel = project.status.replaceAll("_", " ");

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-950"
          >
            MakeMy<span className="text-blue-600">Web</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 sm:block"
            >
              Services
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600"
            >
              Dashboard
            </Link>

            <Link
              href="/account"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
              title="My Account"
            >
              {(session.user.name?.charAt(0) || "U").toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        {/* Project Header */}
        <section className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-medium text-blue-100">
                Project Details
              </p>

              <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                {project.title}
              </h1>

              <p className="mt-2 text-sm text-blue-100">
                {project.service}
              </p>
            </div>

            <span className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide">
              {statusLabel}
            </span>
          </div>
        </section>

        {/* Main content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Project information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-950">
              Project Information
            </h2>

            <div className="mt-6 space-y-6">
              <InfoRow
                icon={<BriefcaseBusiness className="h-5 w-5" />}
                label="Service"
                value={project.service}
              />

              <InfoRow
                icon={<Building2 className="h-5 w-5" />}
                label="Company"
                value={project.company || "Not provided"}
              />

              <InfoRow
                icon={<CreditCard className="h-5 w-5" />}
                label="Budget"
                value={project.budget || "Not specified"}
              />

              <InfoRow
                icon={<Clock3 className="h-5 w-5" />}
                label="Timeline"
                value={project.timeline || "Not specified"}
              />

              <InfoRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={project.phone}
              />

              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={session.user.email || "Not available"}
              />

              <InfoRow
                icon={<CalendarDays className="h-5 w-5" />}
                label="Submitted"
                value={project.createdAt.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              />
            </div>
          </section>

          {/* Status */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Project Status
            </h2>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Current Status
                </span>

                <span className="font-semibold text-blue-600">
                  {statusLabel}
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/4 rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">
                What happens next?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Our team will review your project requirements and contact you
                with the next steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-5 flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Contact Support
            </Link>
          </section>
        </div>

        {/* Description */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">
            Project Requirements
          </h2>

          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600">
            {project.description}
          </p>
        </section>
      </div>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}
