"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { StartProjectModal } from "@/src/components/sections";

export default function StartProjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
      >
        <Plus className="h-4 w-4" />
        Start a Project
      </button>

      <StartProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
