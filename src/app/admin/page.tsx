import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  FolderKanban,
  Users,
} from "lucide-react";

import { auth } from "@/src/lib/auth";
import { prisma } from "@/src/lib/prisma";

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();

  if (
    !adminEmail ||
    session.user.email.toLowerCase() !== adminEmail
  ) {
    redirect("/dashboard");
  }

  const [
    totalProjects,
    pendingProjects,
    activeProjects,
    completedProjects,
    totalCustomers,
    recentProjects,
  ] = await Promise.all([
    prisma.project.count(),

    prisma.project.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.project.count({
      where: {
        status: {
          in: ["IN_PROGRESS", "REVIEW"],
        },
      },
    }),

    prisma.project.count({
      where: {
        status: "COMPLETED",
      },
    }),

    prisma.user.count(),

    prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    }),
  ]);

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
            <span className="hidden text-sm font-medium text-slate-500 sm:block">
              Admin Panel
            </span>

            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Customer Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome */}
        <section className="rounded-2xl bg-gradient-to-r from-slate-950 to-slate-800 p-6 text-white shadow-sm sm:p-8">
          <p className="text-sm font-medium text-slate-400">
            MakeMyWeb Administration
          </p>

          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Manage customer projects, inquiries, and business activity from
            one place.
          </p>
        </section>

        {/* Statistics */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            icon={<FolderKanban className="h-5 w-5" />}
            label="Total Projects"
            value={totalProjects}
          />

          <StatCard
            icon={<Clock3 className="h-5 w-5" />}
            label="Pending"
            value={pendingProjects}
          />

          <StatCard
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            label="Active Projects"
            value={activeProjects}
          />

          <StatCard
            icon={<FolderKanban className="h-5 w-5" />}
            label="Completed"
            value={completedProjects}
          />

          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Customers"
            value={totalCustomers}
          />
        </section>

        {/* Recent Projects */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Recent Projects
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Latest project inquiries submitted by customers.
              </p>
            </div>

            <Link
              href="/admin/projects"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {recentProjects.length === 0 ? (
            <div className="p-10 text-center">
              <FolderKanban className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-4 font-semibold text-slate-950">
                No projects yet
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Customer project inquiries will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {recentProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/admin/projects/${project.id}`}
                  className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-slate-950">
                        {project.title}
                      </h3>

                      <p className="mt-1 truncate text-sm text-slate-500">
                        {project.user.name || "Customer"}{" "}
                        {project.user.email
                          ? `• ${project.user.email}`
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {project.status.replaceAll("_", " ")}
                    </span>

                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Admin Tools */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-950">
            Admin Tools
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AdminTool
              href="/admin/projects"
              icon={<FolderKanban className="h-5 w-5" />}
              title="Projects"
              description="View and manage customer projects."
            />

            <AdminTool
              href="/admin/customers"
              icon={<Users className="h-5 w-5" />}
              title="Customers"
              description="View your registered customers."
            />

            <AdminTool
              href="/admin/projects?status=PENDING"
              icon={<Clock3 className="h-5 w-5" />}
              title="Pending Requests"
              description="Review new project inquiries."
            />

            <AdminTool
              href="/dashboard"
              icon={<BriefcaseBusiness className="h-5 w-5" />}
              title="Customer View"
              description="Preview the customer dashboard."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}

function AdminTool({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
        Open
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
