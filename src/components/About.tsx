import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Coffee } from "lucide-react";
 import TypingTerminal from "./TypingTerminal";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Rocket, text: "Currently working on Laravel Web Applications" },
    { icon: Code2, text: "Learning REST API Development & Payment Integration" },
    { icon: Users, text: "Open to collaborate on Laravel & PHP Projects" },
    { icon: Coffee, text: "Love turning ideas into working code" },
  ];

   const terminalLines = [
     { type: "comment" as const, content: "Initialize Developer Profile", delay: 300 },
     { type: "command" as const, content: "php artisan make:developer Shohan" },
     { type: "output" as const, content: "Developer profile created successfully!" },
     { type: "command" as const, content: "echo $developer->skills" },
     { type: "output" as const, content: '["PHP", "Laravel", "JavaScript", "MySQL"]' },
     { type: "command" as const, content: "echo $developer->currentFocus()" },
     { type: "output" as const, content: '"Building scalable web applications"' },
     { type: "command" as const, content: "echo $developer->status" },
     { type: "output" as const, content: '"Open for opportunities 🚀"' },
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
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
             {/* Typing Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
               {isInView && <TypingTerminal lines={terminalLines} typingSpeed={25} />}
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-medium">Full Stack Software Engineer</span> specializing in 
                <span className="text-laravel font-medium"> Laravel</span> development. I love crafting elegant, efficient, 
                and scalable web applications that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With expertise in PHP, JavaScript, and MySQL, I focus on writing clean, maintainable code 
                following best practices. From authentication systems to payment integrations, I enjoy tackling 
                complex challenges and turning ideas into reality.
              </p>

              <div className="space-y-4 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground text-sm pt-1">{item.text}</span>
                  </motion.div>
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
