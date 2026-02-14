import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, FileDown, Facebook } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import GlitchText from "./GlitchText";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shohancs/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/shohancs/", label: "Facebook" },
    { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const bgY = useTransform(springY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        style={{ x: bgX, y: bgY }}
      />

      <FloatingShapes />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(239, 84%, 67%, 0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Glitch greeting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <GlitchText
              text="FULL-STACK SOFTWARE ENGINEER"
              className="font-mono text-primary text-xs md:text-sm tracking-[0.3em]"
              glitchInterval={5000}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20, rotateX: 30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ perspective: "1000px" }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Shahanur Rahman Shohan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Building scalable web applications with a focus on{" "}
            <span className="text-foreground font-semibold">Clean Code</span> &{" "}
            <span className="text-foreground font-semibold">Best Practices</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, type: "spring", stiffness: 200 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-primary font-semibold text-xs md:text-sm tracking-wide">
              Laravel Specialist
            </span>
            <span className="text-muted-foreground text-xs md:text-sm">
              — crafting robust backend systems
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <MagneticButton strength={0.3}>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary/20 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25 inline-block"
              >
                Hire Me
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-5"
          >
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.label} strength={0.4}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group inline-block"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
