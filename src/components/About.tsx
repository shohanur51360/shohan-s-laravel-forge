import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Coffee } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Rocket, text: "Currently working on Laravel Web Applications" },
    { icon: Code2, text: "Learning REST API Development & Payment Integration" },
    { icon: Users, text: "Open to collaborate on Laravel & PHP Projects" },
    { icon: Coffee, text: "Love turning ideas into working code" },
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
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden border border-border bg-card">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="ml-4 font-mono text-xs text-muted-foreground">Developer.php</span>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre className="leading-relaxed">
                    <code>
                      <span className="code-keyword">&lt;?php</span>{"\n\n"}
                      <span className="code-keyword">class</span> <span className="code-text">Developer</span>{"\n"}
                      {"{"}{"\n"}
                      {"    "}<span className="code-keyword">public string</span> <span className="text-foreground">$name</span> = <span className="code-string">"Shohanur Rahman Shohan"</span>;{"\n"}
                      {"    "}<span className="code-keyword">public string</span> <span className="text-foreground">$role</span> = <span className="code-string">"Laravel Developer"</span>;{"\n"}
                      {"    "}<span className="code-keyword">public array</span> <span className="text-foreground">$languages</span> = [<span className="code-string">"PHP"</span>, <span className="code-string">"JavaScript"</span>];{"\n"}
                      {"    "}<span className="code-keyword">public array</span> <span className="text-foreground">$frameworks</span> = [{"\n"}
                      {"        "}<span className="code-string">"Laravel"</span>, <span className="code-string">"Bootstrap"</span>, <span className="code-string">"Tailwind CSS"</span>{"\n"}
                      {"    "}];{"\n"}
                      {"    "}<span className="code-keyword">public string</span> <span className="text-foreground">$database</span> = <span className="code-string">"MySQL"</span>;{"\n\n"}
                      {"    "}<span className="code-keyword">public function</span> <span className="code-text">currentFocus</span>(): <span className="code-keyword">string</span>{"\n"}
                      {"    "}{"{"}{"\n"}
                      {"        "}<span className="code-keyword">return</span> <span className="code-string">"Building scalable web apps"</span>;{"\n"}
                      {"    "}{"}"}{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
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
