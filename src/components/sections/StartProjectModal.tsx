"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { StartProjectDrawer } from "@/src/components/projects";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function StartProjectModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* drawer */}
            <StartProjectDrawer open={open} onClose={onClose} />

            {/* optional close button overlay (optional UX layer) */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-white p-2 shadow hover:bg-slate-100"
            >
              <X size={20} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
