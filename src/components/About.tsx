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
            {/* Terminal + PHP Class */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* PHP Class Display */}
              <div className="rounded-xl overflow-hidden border border-border bg-card font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-4 text-xs text-muted-foreground">Developer.php</span>
                </div>
                <div className="p-5 space-y-1 text-xs md:text-sm leading-relaxed">
                  <p><span className="text-primary">&lt;?php</span></p>
                  <p className="mt-2"><span className="text-primary">class</span> <span className="text-foreground font-semibold">Developer</span></p>
                  <p>{"{"}</p>
                  <p className="pl-4"><span className="text-primary">public string</span> <span className="text-accent">$name</span> = <span className="text-muted-foreground">"Shohanur Rahman Shohan"</span>;</p>
                  <p className="pl-4"><span className="text-primary">public string</span> <span className="text-accent">$role</span> = <span className="text-muted-foreground">"Laravel Developer"</span>;</p>
                  <p className="pl-4"><span className="text-primary">public array</span> <span className="text-accent">$languages</span> = [<span className="text-muted-foreground">"PHP"</span>, <span className="text-muted-foreground">"JavaScript"</span>];</p>
                  <p className="pl-4"><span className="text-primary">public array</span> <span className="text-accent">$frameworks</span> = [<span className="text-muted-foreground">"Laravel"</span>, <span className="text-muted-foreground">"Bootstrap"</span>, <span className="text-muted-foreground">"Tailwind CSS"</span>];</p>
                  <p className="pl-4"><span className="text-primary">public string</span> <span className="text-accent">$database</span> = <span className="text-muted-foreground">"MySQL"</span>;</p>
                  <p className="mt-2 pl-4"><span className="text-primary">public function</span> <span className="text-foreground">currentFocus</span>(): <span className="text-primary">string</span></p>
                  <p className="pl-4">{"{"}</p>
                  <p className="pl-8"><span className="text-primary">return</span> <span className="text-muted-foreground">"Building scalable web applications with Laravel"</span>;</p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Typing Terminal */}
              <TypingTerminal lines={terminalLines} typingSpeed={25} />
            </motion.div>

            {/* Text + Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
