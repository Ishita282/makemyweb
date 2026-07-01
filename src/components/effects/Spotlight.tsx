"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

interface SpotlightProps {
  size?: number;
}

export default function Spotlight({
  size = 500,
}: SpotlightProps) {
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  const x = useSpring(mouseX);
  const y = useSpring(mouseY);

  useEffect(() => {
    function move(e: MouseEvent) {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    }

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{
          x,
          y,
          width: size,
          height: size,
        }}
        className="absolute rounded-full bg-blue-500/15 blur-[120px]"
      />
    </motion.div>
  );
}
