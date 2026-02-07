import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
}

const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

const GlitchText = ({ text, className = "", glitchInterval = 4000 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations * (text.length / maxIterations)) {
              return char;
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );

      iterations += 1;

      if (iterations > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    // Initial glitch on mount
    const initialTimeout = setTimeout(triggerGlitch, 500);

    // Periodic glitch
    const periodicInterval = setInterval(triggerGlitch, glitchInterval);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(periodicInterval);
    };
  }, [triggerGlitch, glitchInterval]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        textShadow: [
          "0 0 0 transparent",
          "-2px 0 hsl(var(--laravel)), 2px 0 hsl(var(--primary))",
          "2px 0 hsl(var(--laravel)), -2px 0 hsl(var(--primary))",
          "0 0 0 transparent",
        ],
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {displayText}
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-primary/50"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)",
              transform: "translateX(-2px)",
            }}
            aria-hidden
          >
            {displayText}
          </span>
          <span
            className="absolute inset-0 text-laravel/50"
            style={{
              clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
              transform: "translateX(2px)",
            }}
            aria-hidden
          >
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;