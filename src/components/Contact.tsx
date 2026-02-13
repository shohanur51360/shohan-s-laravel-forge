import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Globe, MapPin, Send, Heart, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    { icon: Mail, value: "shohancs.dev@gmail.com", href: "mailto:shohancs.dev@gmail.com" },
    { icon: Globe, value: "shohancs.com", href: "https://shohancs.com" },
    { icon: MapPin, value: "Bangladesh", href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:shohancs.dev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/20" ref={ref}>
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
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Hire <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind? Let's discuss how I can help bring your ideas to
                life. I'm always open to new opportunities and collaborations.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.value}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
                required
              />
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                  required
                />
                <div className="absolute bottom-3 right-3 flex gap-1.5 text-muted-foreground">
                  <Heart className="w-4 h-4 hover:text-laravel transition-colors cursor-pointer" />
                  <MessageCircle className="w-4 h-4 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
              <MagneticButton strength={0.3}>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </MagneticButton>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
