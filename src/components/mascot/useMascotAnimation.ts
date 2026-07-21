"use client";

import { useEffect, useRef, useState } from "react";
import { Direction, MascotState } from "./types";

export function useMascotAnimation(x: number, y: number) {
  const previous = useRef({ x, y });

  const [direction, setDirection] = useState<Direction>("right");
  const [state, setState] = useState<MascotState>("idle");

  useEffect(() => {
    const dx = x - previous.current.x;
    const dy = y - previous.current.y;

    const distance = Math.hypot(dx, dy);

    if (distance > 2) {
      setState("walking");

      if (dx > 0) {
        setDirection("right");
      } else if (dx < 0) {
        setDirection("left");
      }
    } else {
      setState("idle");
    }

    previous.current = { x, y };
  }, [x, y]);

  return {
    state,
    direction,
  };
}
