import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
 import TiltCard from "./TiltCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "PropVerify",
      description: "Real Estate SaaS with Owner Phone Reveal on Login, Live SSLCommerz Payment & Physical Field Verification Team. A comprehensive property verification platform.",
      tech: ["PHP", "Laravel", "MySQL", "SSLCommerz", "Bootstrap"],
      github: "https://github.com/shohancs/PropVerify",
      icon: "🏠",
    },
    {
      title: "Local Farm Market",
      description: "A PHP & MySQL web app where local farmers sell dairy products, meat, sweets, and 'whole cow' deals with admin verification system.",
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/shohancs/Local_Farm_Market",
      icon: "🌾",
    },
    {
      title: "Library Management System",
      description: "A professional web app enabling users to browse, search, and reserve books online with a robust admin dashboard and inventory management.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      github: "https://github.com/shohancs/Library_Management_System",
      icon: "📚",
    },
    {
      title: "Interactive Blogging Platform",
      description: "A dynamic blog platform where admins manage posts and users share stories with modern web technologies and comment system.",
      tech: ["PHP", "CSS", "MySQL", "JavaScript"],
      github: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
      icon: "📝",
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
               <TiltCard
                key={project.title}
                 className="group"
              >
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                   style={{ transformStyle: "preserve-3d" }}
                 >
                  {/* Header */}
                   <div className="flex items-start justify-between mb-4" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <Folder className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                   <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" style={{ transform: "translateZ(20px)" }}>
                    {project.title}
                  </h3>
                   <p className="text-muted-foreground text-sm leading-relaxed mb-6" style={{ transform: "translateZ(15px)" }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                   <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(25px)" }}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                 </motion.div>
               </TiltCard>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/shohancs?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
