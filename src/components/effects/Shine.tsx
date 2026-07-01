"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShineProps {
  children: ReactNode;
  className?: string;
}

export default function Shine({ children, className = "" }: ShineProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {children}

      <motion.div
        initial={{
          x: "-150%",
        }}
        whileHover={{
          x: "250%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          w-24
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />
    </div>
  );
}
