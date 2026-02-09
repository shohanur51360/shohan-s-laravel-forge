import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, X, Code2, Layers } from "lucide-react";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  icon: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "PropVerify",
    shortDesc: "Real Estate SaaS with Payment & Verification",
    fullDesc:
      "A comprehensive Real Estate SaaS platform featuring Owner Phone Reveal on Login, live SSLCommerz payment integration, and a dedicated Physical Field Verification Team workflow. Built with Laravel's robust backend architecture and a responsive Bootstrap frontend.",
    tech: ["PHP", "Laravel", "MySQL", "SSLCommerz", "Bootstrap"],
    github: "https://github.com/shohancs/PropVerify",
    live: "https://github.com/shohancs/PropVerify",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    icon: "🏠",
    category: "Full Stack",
  },
  {
    title: "Local Farm Market",
    shortDesc: "Farm-to-Table E-Commerce Platform",
    fullDesc:
      "A PHP & MySQL web application where local farmers can sell dairy products, meat, sweets, and exclusive 'whole cow' deals. Features admin verification for quality assurance, order management, and a clean storefront for customers.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    github: "https://github.com/shohancs/Local_Farm_Market",
    live: "https://github.com/shohancs/Local_Farm_Market",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=500&fit=crop",
    icon: "🌾",
    category: "Full Stack",
  },
  {
    title: "Library Management System",
    shortDesc: "Online Book Browsing & Reservation",
    fullDesc:
      "A professional web application enabling users to browse, search, and reserve books online. Includes a robust admin dashboard for managing inventory, tracking reservations, and generating reports on library usage.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/shohancs/Library_Management_System",
    live: "https://github.com/shohancs/Library_Management_System",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    icon: "📚",
    category: "Full Stack",
  },
  {
    title: "Interactive Blogging Platform",
    shortDesc: "Dynamic Blog with Admin Controls",
    fullDesc:
      "A dynamic blogging platform where admins can manage posts, categories, and user interactions. Users can share stories, comment, and engage with content through a modern, responsive interface built with vanilla PHP and JavaScript.",
    tech: ["PHP", "CSS", "MySQL", "JavaScript"],
    github: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
    live: "https://github.com/shohancs/Interactive_Blogging_Platform_with_Admin_Control",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    icon: "📝",
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
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group relative cursor-pointer rounded-xl overflow-hidden border border-border bg-card aspect-[4/3] hover:border-primary/60 transition-all duration-500"
  >
    {/* Image */}
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />

    {/* Gradient overlay — shifts on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-80 group-hover:opacity-95 group-hover:via-primary/20 transition-all duration-500" />

    {/* Category chip */}
    <div className="absolute top-3 right-3 z-10">
      <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
        {project.category}
      </span>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl drop-shadow-lg">{project.icon}</span>
        <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
        {project.shortDesc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-muted text-muted-foreground">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
    </div>

    {/* Hover glow ring */}
    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/40 transition-all duration-500 pointer-events-none" />
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
    {/* Backdrop */}
    <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

    {/* Modal */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
      style={{ boxShadow: "0 0 80px -20px hsl(239 84% 67% / 0.3)" }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6 -mt-8 relative z-10">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{project.icon}</span>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-gradient">{project.title}</h2>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-6">
          {project.fullDesc}
        </p>

        {/* Tech */}
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

        {/* Actions */}
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
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>
          <p className="text-muted-foreground text-sm mb-10 max-w-lg flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            Tap any project to explore details & live demo
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Modal */}
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
