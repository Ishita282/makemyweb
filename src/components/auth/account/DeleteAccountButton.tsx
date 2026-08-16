"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { signOut } from "next-auth/react";

export default function DeleteAccountButton() {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account? This action cannot be undone.",
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }

      // Delete the Auth.js session in the browser.
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("DELETE ACCOUNT ERROR:", error);

      setIsDeleting(false);

      alert("Unable to delete your account. Please try again.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex w-full items-center gap-4 rounded-xl border border-red-200 p-4 text-left transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
        <Trash2 className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-semibold text-red-600">
          {isDeleting ? "Deleting account..." : "Delete Account"}
        </p>

        <p className="mt-1 text-xs text-red-400">
          Permanently delete your account and all associated data.
        </p>
      </div>
    </button>
  );
}
