import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shohancs", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shohancs", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shohancs.dev@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-laravel/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary mb-4 text-sm md:text-base"
          >
            &lt;Hello World /&gt;
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-foreground">I'm </span>
            <span className="text-gradient">Shohanur Rahman Shohan</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              Full Stack <span className="text-laravel font-medium">Laravel</span> Developer
            </h2>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          {/* Typing text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-muted-foreground mb-6 text-sm md:text-base"
          >
            Building web applications with Laravel 🚀 | Passionate about clean code & best practices ✨
          </motion.p>

          {/* Profile Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex items-center justify-center gap-3 mb-8 flex-wrap"
          >
            <img
              src="https://komarev.com/ghpvc/?username=shohancs&label=Profile%20Views&color=6366f1&style=for-the-badge"
              alt="Profile Views"
              className="h-7"
            />
            <img
              src="https://img.shields.io/github/followers/shohancs?label=Followers&style=for-the-badge&color=6366f1"
              alt="Followers"
              className="h-7"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
