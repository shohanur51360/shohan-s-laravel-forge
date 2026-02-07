import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedDividerProps {
  variant?: "default" | "reverse";
}

const AnimatedDivider = ({ variant = "default" }: AnimatedDividerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative py-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
        {/* Left line */}
        <motion.div
          className="flex-1 h-px"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            background: variant === "default"
              ? "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5))"
              : "linear-gradient(90deg, hsl(var(--primary) / 0.5), transparent)",
            transformOrigin: variant === "default" ? "left" : "right",
          }}
        />

        {/* Center diamond */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          className="w-2 h-2 bg-primary/50 shrink-0"
        />

        {/* Right line */}
        <motion.div
          className="flex-1 h-px"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            background: variant === "default"
              ? "linear-gradient(90deg, hsl(var(--primary) / 0.5), transparent)"
              : "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5))",
            transformOrigin: variant === "default" ? "right" : "left",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedDivider;