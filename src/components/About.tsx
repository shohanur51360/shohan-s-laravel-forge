import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, GraduationCap, Code2 } from "lucide-react";
import TiltCard from "./TiltCard";
import TypingTerminal from "./TypingTerminal";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const terminalLines = [
    { type: "comment" as const, content: "Initialize Developer Profile", delay: 300 },
    { type: "command" as const, content: "php artisan make:developer Shohan", delay: 200 },
    { type: "output" as const, content: "Developer profile created successfully!", delay: 100 },
    { type: "command" as const, content: "echo $developer→skills", delay: 400 },
    { type: "output" as const, content: '["PHP", "Laravel", "JavaScript", "MySQL"]', delay: 100 },
    { type: "command" as const, content: "echo $developer→currentFocus()", delay: 400 },
    { type: "output" as const, content: '"Building scalable web applications"', delay: 100 },
    { type: "command" as const, content: "echo $developer→status", delay: 400 },
    { type: "output" as const, content: '"Open for opportunities 🚀"', delay: 100 },
  ];

  const infoCards = [
    {
      icon: Sparkles,
      label: "Clean Code",
      value: "Best Practices",
      color: "text-primary",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSc in CSE",
      color: "text-primary",
    },
    {
      icon: Code2,
      label: "Specialty",
      value: "Laravel Expert",
      color: "text-primary",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-14">
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              Who I Am
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text + Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm <span className="text-foreground font-semibold">Shohanur Rahman Shohan</span>, a Full Stack Software Engineer with deep expertise in
                  Laravel and PHP ecosystems. I hold a BSc in Computer Science & Engineering and I'm
                  passionate about building scalable, secure, and maintainable web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From REST APIs and admin panels to e-commerce solutions and POS systems — I build
                  architecture that scales and lasts. I focus on clean and efficient code, performance
                  optimization and modern development practices.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {infoCards.map((card, index) => (
                  <TiltCard key={card.label} glareEnabled>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <card.icon className="w-6 h-6" />
                      </div>
                      <div style={{ transform: "translateZ(15px)" }}>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {card.label}
                        </p>
                        <p className="font-semibold text-foreground">{card.value}</p>
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>

            {/* Typing Terminal - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TypingTerminal lines={terminalLines} typingSpeed={25} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
