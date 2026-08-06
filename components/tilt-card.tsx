"use client";

import type { MouseEvent, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  spotlight = true,
}: TiltCardProps) {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const spring = { stiffness: 220, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), spring);

  const sx = useTransform(mx, [0, 1], ["0%", "100%"]);
  const sy = useTransform(my, [0, 1], ["0%", "100%"]);
  const spotlightBg = useMotionTemplate`radial-gradient(420px circle at ${sx} ${sy}, rgb(55 72 110 / 0.12), transparent 65%)`;

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      className={`group relative h-full ${className}`}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }
      }
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={reduce ? undefined : { scale: 1.03, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {spotlight ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />
      ) : null}
      {children}
    </motion.div>
  );
}
