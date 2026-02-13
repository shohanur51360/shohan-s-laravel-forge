import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, X, Layers } from "lucide-react";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "PropVerify",
    shortDesc: "A property verification platform built with Laravel, featuring owner phone reveal on login, live SSLCommerz payment, and physical field verification team workflow.",
    fullDesc:
      "A comprehensive Real Estate SaaS platform featuring Owner Phone Reveal on Login, live SSLCommerz payment integration, and a dedicated Physical Field Verification Team workflow. Built with Laravel's robust backend architecture and a responsive Bootstrap frontend.",
    tech: ["PHP", "Laravel", "MySQL", "SSLCommerz", "Bootstrap"],
    github: "https://github.com/shohancs/PropVerify",
    live: "https://github.com/shohancs/PropVerify",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    category: "Full Stack",
  },
  {
    title: "Local Farm Market",
    shortDesc: "An online marketplace connecting local farmers with consumers for fresh produce including dairy, meat, and sweets with admin verification.",
    fullDesc:
      "A PHP & MySQL web application where local farmers can sell dairy products, meat, sweets, and exclusive 'whole cow' deals. Features admin verification for quality assurance, order management, and a clean storefront for customers.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    github: "https://github.com/shohancs/Local_Farm_Market",
    live: "https://github.com/shohancs/Local_Farm_Market",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=500&fit=crop",
    category: "Full Stack",
  },
  {
    title: "Library Management System",
    shortDesc: "Comprehensive library management with book tracking, user management, and automated reservation system with admin dashboard.",
    fullDesc:
      "A professional web application enabling users to browse, search, and reserve books online. Includes a robust admin dashboard for managing inventory, tracking reservations, and generating reports on library usage.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/shohancs/Library_Management_System",
    live: "https://github.com/shohancs/Library_Management_System",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    category: "Full Stack",
  },
  {
    title: "Interactive Blogging Platform",
    shortDesc: "A feature-rich blogging platform with admin controls, comments, categories, and user engagement tools built with vanilla PHP.",
    fullDesc:
      "A dynamic blogging platform where admins can manage posts, categories, and user interactions. Users can share stories, comment, and engage with content through a modern, responsive interface built with vanilla PHP and JavaScript.",
    tech: ["PHP", "CSS", "MySQL", "JavaScript"],
    github: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
    live: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    category: "Full Stack",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onClick,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group cursor-pointer rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="font-bold text-foreground group-hover:text-gradient transition-colors">
        {project.title}
      </h3>
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
    <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
      {project.shortDesc}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
      style={{ boxShadow: "0 0 80px -20px hsl(239 84% 67% / 0.3)" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="p-6 -mt-8 relative z-10">
        <div className="mb-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
            {project.category}
          </span>
          <h2 className="text-2xl font-bold text-gradient">{project.title}</h2>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-6">
          {project.fullDesc}
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all duration-300"
            style={{ boxShadow: "0 4px 20px -5px hsl(239 84% 67% / 0.5)" }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isInView={isInView}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
