"use client";

import { AnimatePresence, motion } from "framer-motion";

interface SpeechBubbleProps {
  message: string;
  visible: boolean;
}

export default function SpeechBubble({
  message,
  visible,
}: SpeechBubbleProps) {
  return (
    <AnimatePresence>
      {visible && message && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-32
            right-8
            z-[9999]
            max-w-sm
            rounded-2xl
            bg-white
            px-5
            py-4
            shadow-xl
            border
            border-blue-100
          "
        >
          <p className="text-sm text-gray-800 leading-relaxed">
            {message}
          </p>

          {/* Bubble arrow */}
          <div
            className="
              absolute
              -bottom-3
              right-12
              h-5
              w-5
              rotate-45
              bg-white
              border-r
              border-b
              border-blue-100
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
