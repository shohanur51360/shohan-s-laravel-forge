import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Languages & Frameworks",
      items: ["PHP", "Laravel", "JavaScript", "jQuery", "HTML", "CSS"],
    },
    {
      title: "Frontend & Styling",
      items: ["Bootstrap", "Tailwind CSS", "AJAX", "DOM"],
    },
    {
      title: "Databases & Backend",
      items: ["MySQL", "Eloquent ORM", "REST API", "Webhook", "Authentication", "JWT", "Sanctum"],
    },
    {
      title: "DevOps & Tools",
      items: ["Git", "GitHub", "Composer", "NPM", "VS Code", "Sublime Text", "cPanel", "SSL"],
    },
    {
      title: "Concepts & Patterns",
      items: ["OOP", "MVC", "CRUD", "Migrations", "Seeders", "Relationships", "Role Management"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
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
              What I Use
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Tech <span className="text-gradient">Stack</span>
            </h2>
          </div>

          {/* Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <h3 className="font-semibold text-sm text-primary mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
