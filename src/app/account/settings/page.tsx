import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  Lock,
  LogOut,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import { auth, signOut } from "@/src/lib/auth";

export default async function AccountSettingsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const customerName = session.user.name || "Customer";
  const customerEmail = session.user.email || "";

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

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
            Account Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your profile, security, notifications, and account.
          </p>
        </div>

        {/* Profile */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <User className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Profile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your basic account information.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Name
              </label>

              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {customerName}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>

              <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <Mail className="h-4 w-4 text-slate-400" />
                {customerEmail || "No email available"}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Profile editing will be added next.
          </p>
        </section>

        {/* Security */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Security
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your password and account security.
              </p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200">
            <Link
              href="/account/change-password"
              className="flex items-center justify-between p-4 transition hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-slate-500" />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Change Password
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Update your account password.
                  </p>
                </div>
              </div>

              <span className="text-sm font-medium text-blue-600">
                Manage
              </span>
            </Link>
          </div>
        </section>

        {/* Notifications */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Bell className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Control how MakeMyWeb communicates with you.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <NotificationRow
              title="Project Updates"
              description="Receive updates about your projects."
            />

            <NotificationRow
              title="Payment & Invoice Updates"
              description="Receive payment and invoice notifications."
            />

            <NotificationRow
              title="Marketing Emails"
              description="Receive news, offers, and MakeMyWeb updates."
            />
          </div>
        </section>

        {/* Account */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-950">
            Account
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your current session.
          </p>

          <form
            action={async () => {
              "use server";

              await signOut({
                redirectTo: "/",
              });
            }}
          >
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

function NotificationRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <div className="relative h-6 w-11 shrink-0 rounded-full bg-blue-600">
        <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  );
}
