import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Globe, Send } from "lucide-react";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shohancs.dev@gmail.com",
      href: "mailto:shohancs.dev@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shohancs",
      href: "https://github.com/shohancs",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shohancs",
      href: "https://linkedin.com/in/shohancs",
    },
    {
      icon: Globe,
      label: "Website",
      value: "shohancs.com",
      href: "https://shohancs.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-secondary/20" ref={ref}>
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-8 leading-relaxed"
          >
            I'm always interested in hearing about new opportunities and collaborating on Laravel projects!
            Whether you have a question or just want to say hi, feel free to reach out.
          </motion.p>

          {/* CTA Button with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <MagneticButton strength={0.4}>
              <a
                href="mailto:shohancs.dev@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <Send className="w-5 h-5" />
                Say Hello
              </a>
            </MagneticButton>
          </motion.div>

          {/* Contact Links Grid with 3D tilt */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <TiltCard key={link.label} glareEnabled>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20, rotateX: 15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left" style={{ transform: "translateZ(15px)" }}>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{link.value}</p>
                  </div>
                </motion.a>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
