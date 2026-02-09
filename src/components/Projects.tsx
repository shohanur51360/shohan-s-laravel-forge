import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Globe } from "lucide-react";
import TiltCard from "./TiltCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "PropVerify",
      description:
        "Real Estate SaaS with Owner Phone Reveal on Login, Live SSLCommerz Payment & Physical Field Verification Team.",
      tech: ["PHP", "Laravel", "MySQL", "SSLCommerz", "Bootstrap"],
      github: "https://github.com/shohancs/PropVerify",
      live: "https://github.com/shohancs/PropVerify",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      color: "from-blue-500/20 to-indigo-500/20",
      icon: "🏠",
    },
    {
      title: "Local Farm Market",
      description:
        "A PHP & MySQL web app where local farmers sell dairy products, meat, sweets, and 'whole cow' deals with admin verification.",
      tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/shohancs/Local_Farm_Market",
      live: "https://github.com/shohancs/Local_Farm_Market",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
      color: "from-green-500/20 to-emerald-500/20",
      icon: "🌾",
    },
    {
      title: "Library Management System",
      description:
        "A professional web app enabling users to browse, search, and reserve books online with a robust admin dashboard.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      github: "https://github.com/shohancs/Library_Management_System",
      live: "https://github.com/shohancs/Library_Management_System",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
      color: "from-amber-500/20 to-orange-500/20",
      icon: "📚",
    },
    {
      title: "Interactive Blogging Platform",
      description:
        "A dynamic blog platform where admins manage posts and users share stories with modern web technologies.",
      tech: ["PHP", "CSS", "MySQL", "JavaScript"],
      github: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
      live: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      color: "from-purple-500/20 to-pink-500/20",
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
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <TiltCard key={project.title} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48" style={{ transform: "translateZ(20px)" }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay with links */}
                    <div className="absolute inset-0 z-20 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-110"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    {/* Tech badge on image */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-card/80 backdrop-blur-sm text-primary border border-border/50">
                        {project.tech[0]} / {project.tech[1]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ transform: "translateZ(15px)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                        <span className="text-2xl">{project.icon}</span>
                        {project.title}
                      </h3>
                      <Globe className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(25px)" }}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
