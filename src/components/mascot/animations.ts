import { Variants } from "framer-motion";

export const mascotAnimation: Variants = {
  idle: {
    y: [0, -6, 0],
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  walking: {
    y: [0, -3, 0],
    rotate: [-2, 2, -2],
    transition: {
      duration: 0.35,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
