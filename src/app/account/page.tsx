import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  LogOut,
  Mail,
  Settings,
  User,
} from "lucide-react";

import DeleteAccountButton from "@/src/components/auth/account/DeleteAccountButton";
import { auth } from "@/src/lib/auth";
import LogoutButton from "@/src/components/auth/LogoutButton";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const userName = session.user.name || "User";
  const userEmail = session.user.email || "No email available";
  const initial = userName.charAt(0).toUpperCase();

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
        {/* Page heading */}
        <div>
          <p className="text-sm font-medium text-blue-600">Account</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">
            My Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your MakeMyWeb account information and settings.
          </p>
        </div>

        {/* Profile card */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              {initial}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950">{userName}</h2>

              <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <Mail className="h-4 w-4" />
                {userEmail}
              </p>
            </div>
          </div>
        </section>

        {/* Account information */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <User className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-bold text-slate-950">Account Information</h2>

              <p className="text-sm text-slate-500">
                Your current account details.
              </p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-100">
            <AccountDetail label="Name" value={userName} />

            <AccountDetail label="Email" value={userEmail} />

            <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center">
              <span className="text-sm font-medium text-slate-500">
                Email status
              </span>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                Verified
              </span>
            </div>
          </div>
        </section>

        {/* Account actions */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-bold text-slate-950">Account Actions</h2>

          <div className="mt-5 space-y-3">
            {/* Settings */}
            <Link
              href="/account/settings"
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <Settings className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Account Settings
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Manage your account preferences.
                </p>
              </div>
            </Link>

            {/* Logout */}
            <LogoutButton className="flex w-full items-center gap-4 rounded-xl border border-red-100 p-4 text-left transition hover:bg-red-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <LogOut className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-red-600">Logout</p>

                <p className="mt-1 text-xs text-red-400">
                  Sign out of your MakeMyWeb account.
                </p>
              </div>
            </LogoutButton>

            {/* Delete Account */}
            <DeleteAccountButton />
          </div>
        </section>
      </div>
    </main>
  );
}

function AccountDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-slate-500">{label}</span>

      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
}
