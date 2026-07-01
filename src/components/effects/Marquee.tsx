"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode[];
  duration?: number;
}

export default function Marquee({
  children,
  duration = 20,
}: MarqueeProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...children, ...children].map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
