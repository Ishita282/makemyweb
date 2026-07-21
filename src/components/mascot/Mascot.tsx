"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useFollow } from "./useFollow";
import { useMascotAnimation } from "./useMascotAnimation";
import { mascotAnimation } from "./animations";

export default function Mascot() {
  const { x, y } = useFollow();

  const { state, direction } = useMascotAnimation(x, y);

  return (
    <motion.div
      animate={{
        x: x - 55,
        y: y - 90,
        scaleX: direction === "left" ? -1 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      <motion.div variants={mascotAnimation} animate={state}>
        <Image
          src="/images/chatbot.webp"
          alt="Webby"
          width={110}
          height={110}
          priority
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
