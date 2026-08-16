"use server";

import { signIn } from "@/src/lib/auth";

export async function continueWithGoogle() {
  await signIn("google", {
    redirectTo: "/dashboard",
    redirect: true,
  });
}
