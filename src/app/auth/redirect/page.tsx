import { redirect } from "next/navigation";

import { auth } from "@/src/lib/auth";

export default async function AuthRedirectPage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (
    adminEmail &&
    session.user.email.trim().toLowerCase() === adminEmail
  ) {
    redirect("/admin");
  }

  redirect("/dashboard");
}
