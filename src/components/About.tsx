import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Briefcase, GraduationCap, Mail, FileDown } from "lucide-react";
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

  const infoItems = [
    { icon: Phone, label: "Phone", value: "+88-01731578788" },
    { icon: MapPin, label: "City", value: "Dhaka, Bangladesh" },
    { icon: Briefcase, label: "Status", value: "Open to Work" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science" },
    { icon: Mail, label: "Email", value: "shohancs.dev@gmail.com" },
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
                  I am <span className="text-foreground font-semibold">Shahanur Rahman Shohan</span>, a dedicated Full-Stack Software Engineer with strong expertise in the Laravel and PHP ecosystem and a BSc in Computer Science & Engineering. I focus on building scalable, secure, and maintainable web applications that deliver real business value including REST APIs, admin dashboards, e-commerce platforms, POS systems, and custom business solutions. I prioritize clean architecture, structured code, and performance optimization to ensure long-term reliability and smooth user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am driven by building fast, reliable, and well-structured systems using PHP, JavaScript, and MySQL, and I am comfortable working on both Windows and Linux environments. I enjoy transforming ideas into impactful digital products and always aim to deliver clean, efficient, and production-ready solutions.
                </p>
              </div>

              {/* Info Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume */}
              <motion.a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </motion.a>
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
