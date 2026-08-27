"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  duplicate?: boolean;
}

export default function Marquee({
  children,
  duration = 20,
  duplicate = true,
}: MarqueeProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: duplicate ? ["0%", "-50%"] : "0%" }}
        transition={
          duplicate
            ? {
                duration,
                ease: "linear",
                repeat: Infinity,
              }
            : undefined
        }
      >
        <div className="flex gap-8 pr-8">
          {children}
        </div>

        {duplicate && (
          <div className="flex gap-8">
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
}
