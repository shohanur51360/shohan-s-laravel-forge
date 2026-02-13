import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, GraduationCap, Code2 } from "lucide-react";
import TiltCard from "./TiltCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
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
              <p className="text-muted-foreground leading-relaxed">
                My toolbox spans the full web stack: PHP, Laravel, JavaScript, jQuery, MySQL, Bootstrap,
                Tailwind CSS, and much more — I handle everything from development to deployment on
                cPanel and shared hosting.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
