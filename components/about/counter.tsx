"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: reduce ? 0.01 : duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
