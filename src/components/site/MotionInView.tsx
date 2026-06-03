"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MotionInViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function MotionInView({
  children,
  delay = 0,
  className,
}: MotionInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.12 });

  return (
    /* Perspective parent — makes rotateX on child produce real 3D depth */
    <div
      data-motion-in-view
      style={{ perspective: "1400px", perspectiveOrigin: "50% 80%" }}
    >
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: 20,
          rotateX: 6,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
        }}
        viewport={{ once: false, amount: 0.12 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
        data-visible={isInView ? "true" : "false"}
        data-text-anim
        className={`text-anim-scope ${className ?? ""}`}
        style={{
          willChange: "opacity, transform",
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
