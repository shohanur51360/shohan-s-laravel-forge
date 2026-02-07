import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      title: "Languages",
      items: [
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
        { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "jQuery", icon: "https://skillicons.dev/icons?i=jquery" },
      ],
    },
    {
      title: "Database & Tools",
      items: [
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      ],
    },
  ];

  const integrations = [
    { name: "SSLCommerz", description: "Payment Gateway" },
    { name: "REST API", description: "API Development" },
    { name: "Webhooks", description: "Real-time Events" },
  ];

  const backendFeatures = [
    "Authentication",
    "Role Management",
    "File Upload",
    "Email System",
    "Form Validation",
    "Session & Cookie",
    "Pagination",
    "Search & Filter",
    "CRUD Operations",
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
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Tech Icons Grid with 3D tilt */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, catIndex) => (
              <TiltCard key={category.title} glareEnabled>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h3 className="font-semibold mb-6 text-lg" style={{ transform: "translateZ(20px)" }}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-4 gap-4" style={{ transform: "translateZ(30px)" }}>
                    {category.items.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + catIndex * 0.15 + index * 0.08,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <motion.div
                          className="p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform"
                          whileHover={{
                            rotateY: 360,
                            transition: { duration: 0.6 },
                          }}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-8 h-8"
                            loading="lazy"
                          />
                        </motion.div>
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          {/* Payment & API Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <span className="text-primary">💳</span> Payment & API Integration
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {integrations.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.2 },
                  }}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <p className="font-medium group-hover:text-primary transition-colors">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <span className="text-primary">⚙️</span> Backend Features Built
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendFeatures.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.05,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.15 },
                  }}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
