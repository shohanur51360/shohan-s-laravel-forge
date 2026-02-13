import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Server,
  Plug,
  LayoutDashboard,
  Database,
  ShoppingCart,
  Package,
  Bug,
  Wrench,
  CloudUpload,
  ShieldCheck,
  Code2,
} from "lucide-react";
import TiltCard from "./TiltCard";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    desc: "End-to-end web application development using Laravel and modern frontend technologies with scalable architecture.",
  },
  {
    icon: Server,
    title: "Laravel Backend Development",
    desc: "Robust backend solutions with clean architecture, custom APIs, data validation, and built-in integrations.",
  },
  {
    icon: Plug,
    title: "REST API Development",
    desc: "Secure, well-documented RESTful APIs for web & mobile applications with authentication and rate limiting.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panel & Dashboard",
    desc: "Feature-rich admin dashboards with data management, analytics, user management, and reporting.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "Efficient MySQL database architecture with optimized queries, indexing, and relationship modeling.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Complete e-commerce platforms with payment gateways, inventory management, and order tracking.",
  },
  {
    icon: Package,
    title: "POS & Inventory Systems",
    desc: "Point of sale and inventory management solutions for retail and wholesale businesses.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    desc: "Debugging and code optimization for existing applications to improve performance and stability.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Updates",
    desc: "Ongoing website maintenance, feature updates, and security patches to keep your platform running.",
  },
  {
    icon: CloudUpload,
    title: "cPanel Deployment & Hosting",
    desc: "Server setup, shared hosting configuration, SSL certificates, and Git deployment workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Role Management",
    desc: "Role-based access control systems with JWT/Sanctum authentication and permission management.",
  },
  {
    icon: Code2,
    title: "Custom Business Software",
    desc: "Tailor-made software solutions designed to streamline your business processes and operations.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
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
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="text-gradient">Services</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <TiltCard key={service.title} glareEnabled>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all h-full group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="font-semibold text-sm mb-2"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-xs leading-relaxed"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
