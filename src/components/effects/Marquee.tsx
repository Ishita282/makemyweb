"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
}

export default function Marquee({
  children,
  duration = 20,
}: MarqueeProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First Row */}
        <div className="flex gap-8 pr-8">
          {children}
        </div>

        {/* Duplicate Row */}
        <div className="flex gap-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
