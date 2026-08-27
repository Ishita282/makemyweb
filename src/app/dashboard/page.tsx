import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Heart,
  LogOut,
  MessageSquare,
  Plus,
  Settings,
  Star,
  User,
} from "lucide-react";

import { auth } from "@/src/lib/auth";
import LogoutButton from "@/src/components/auth/LogoutButton";
import StartProjectButton from "@/src/components/server/StartProjectButton";
import { prisma } from "@/src/lib/prisma";

export default async function DashboardPage() {
  const session = await auth();
  console.log("CURRENT SESSION:", session);

  if (!session?.user) {
    redirect("/login");
  }

  const customerName = session.user.name?.split(" ")[0] || "there";
  const customerEmail = session.user.email || "";

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  const isAdmin =
    !!adminEmail && customerEmail.trim().toLowerCase() === adminEmail;

  console.log("ADMIN CHECK:", {
    customerEmail,
    adminEmail,
    isAdmin,
  });

  const customerProjects = session.user.id
    ? await prisma.project.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 3,
      })
    : [];

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

            {isAdmin && (
              <Link
                href="/admin"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Admin Panel
              </Link>
            )}

            <Link
              href="/account"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white"
              title="My Account"
            >
              {customerName.charAt(0).toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-sm sm:p-8">
          <p className="text-sm font-medium text-blue-100">
            Customer Dashboard
          </p>

          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
            Hello, {customerName} 👋
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Manage your projects, services, payments, invoices, and account from
            one place.
          </p>

          {customerEmail && (
            <p className="mt-3 text-sm text-blue-100">
              Signed in as {customerEmail}
            </p>
          )}

          <StartProjectButton />
        </section>

        {/* Projects */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Your Projects
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track your ongoing and completed work.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {customerProjects.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-950">
                No projects yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                You haven&apos;t started a project yet. Tell us what you want to
                build and we&apos;ll help you get started.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Start a Project
              </Link>
            </div>
          ) : (
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {customerProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-950">
                    {project.service || "Project"}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                    {project.description || "No description provided."}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {project.status || "In Progress"}
                    </span>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-950">Quick Actions</h2>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <QuickAction
              href="/account"
              icon={<User className="h-5 w-5" />}
              label="My Profile"
            />

            <QuickAction
              href="/cart"
              icon={<BriefcaseBusiness className="h-5 w-5" />}
              label="My Projects"
            />

            <QuickAction
              href="/payments"
              icon={<CreditCard className="h-5 w-5" />}
              label="Payments"
            />

            <QuickAction
              href="/invoices"
              icon={<FileText className="h-5 w-5" />}
              label="Invoices"
            />

            <QuickAction
              href="/saved-services"
              icon={<Heart className="h-5 w-5" />}
              label="Saved Services"
            />

            <QuickAction
              href="/reviews"
              icon={<Star className="h-5 w-5" />}
              label="Reviews"
            />
          </div>
        </section>

        {/* Continue Project + Account */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Start your next project
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose a service and tell us what you want to build.
                </p>
              </div>

              <BriefcaseBusiness className="hidden h-6 w-6 text-blue-500 sm:block" />
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-slate-950">
                    Need a website?
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Build a professional website customized for your business.
                  </p>
                </div>

                <StartProjectButton />
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">Account</h2>

            <div className="mt-5 space-y-3">
              <AccountItem
                href="/account"
                icon={<User className="h-5 w-5" />}
                title="Profile"
              />

              <AccountItem
                href="/account/settings"
                icon={<Settings className="h-5 w-5" />}
                title="Settings"
              />

              <AccountItem
                href="/contact"
                icon={<MessageSquare className="h-5 w-5" />}
                title="Contact Support"
              />

              <LogoutButton className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-red-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <LogOut className="h-5 w-5" />
                </div>

                <span className="text-sm font-semibold text-red-600">
                  Logout
                </span>
              </LogoutButton>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Services for your business
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Explore services that can help your business grow online.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Website Development"
              description="Professional websites designed and developed for your business."
            />

            <ServiceCard
              title="E-commerce Development"
              description="Build an online store with the features your business needs."
            />

            <ServiceCard
              title="AI Solutions"
              description="Add AI-powered automation and intelligent features."
            />

            <ServiceCard
              title="UI/UX Design"
              description="Create modern and user-friendly digital experiences."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function QuickAction({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <span className="mt-3 text-xs font-semibold text-slate-700 sm:text-sm">
        {label}
      </span>
    </Link>
  );
}

function AccountItem({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        {icon}
      </div>

      <span className="text-sm font-semibold text-slate-700">{title}</span>
    </Link>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm">
      <h3 className="font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

      <Link
        href="/services"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Explore
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
