import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; color: string }[];
  details?: { skill: string; description: string }[];
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const categories: SkillCategory[] = [
    {
      title: "Payment & API Integration",
      icon: "💳",
      skills: [
        { name: "SSLCommerz", color: "bg-green-600" },
        { name: "CoinGate Crypto", color: "bg-orange-500" },
        { name: "REST API", color: "bg-teal-500" },
        { name: "Third Party API", color: "bg-amber-600" },
        { name: "JSON Handling", color: "bg-gray-700" },
        { name: "Webhook", color: "bg-gray-500" },
      ],
      details: [
        { skill: "SSLCommerz", description: "Payment Gateway Integration for Bangladesh" },
        { skill: "CoinGate", description: "Crypto Payment API Concept & Integration" },
        { skill: "REST API", description: "Building & Consuming RESTful APIs" },
        { skill: "Third-Party API", description: "External Service Integration" },
        { skill: "Webhooks", description: "Real-time Event Handling" },
      ],
    },
    {
      title: "Backend Features Built",
      icon: "⚙️",
      skills: [
        { name: "Authentication", color: "bg-green-500" },
        { name: "Role Management", color: "bg-purple-600" },
        { name: "File Upload", color: "bg-blue-500" },
        { name: "Email System", color: "bg-red-500" },
        { name: "Form Validation", color: "bg-orange-600" },
        { name: "Session & Cookie", color: "bg-amber-700" },
        { name: "Pagination", color: "bg-slate-500" },
        { name: "Search & Filter", color: "bg-cyan-500" },
        { name: "CRUD Operations", color: "bg-lime-600" },
      ],
      details: [
        { skill: "Authentication", description: "Complete Login/Register System" },
        { skill: "Role Management", description: "Admin/User Role Based Access Control" },
        { skill: "File Upload", description: "Image & Document Upload System" },
        { skill: "Email System", description: "Laravel Mail Integration" },
        { skill: "Form Validation", description: "Server + Client Side Validation" },
        { skill: "Session & Cookie", description: "User State Management" },
        { skill: "Pagination", description: "Efficient Data Pagination" },
        { skill: "Search & Filter", description: "Dynamic Search & Filter System" },
      ],
    },
    {
      title: "Database Skills",
      icon: "🗃️",
      skills: [
        { name: "MySQL", color: "bg-blue-600" },
        { name: "Eloquent ORM", color: "bg-laravel" },
        { name: "Migration", color: "bg-blue-700" },
        { name: "Seeder", color: "bg-green-600" },
        { name: "Relationships", color: "bg-pink-600" },
      ],
      details: [
        { skill: "Eloquent ORM", description: "Laravel's Active Record Implementation" },
        { skill: "Migrations", description: "Database Version Control" },
        { skill: "Seeders", description: "Database Seeding & Factories" },
        { skill: "Relationships", description: "One-to-Many, Many-to-Many" },
        { skill: "Query Builder", description: "Fluent Database Queries" },
      ],
    },
    {
      title: "Deployment & Hosting",
      icon: "🚀",
      skills: [
        { name: "Shared Hosting", color: "bg-orange-500" },
        { name: "cPanel", color: "bg-orange-600" },
        { name: "Domain Setup", color: "bg-blue-600" },
        { name: "SSL Certificate", color: "bg-green-500" },
        { name: "Git Deployment", color: "bg-red-600" },
      ],
    },
    {
      title: "Tools & Concepts",
      icon: "🛠️",
      skills: [
        { name: "Git", color: "bg-red-600" },
        { name: "GitHub", color: "bg-gray-800" },
        { name: "VS Code", color: "bg-blue-600" },
        { name: "Composer", color: "bg-amber-700" },
        { name: "NPM", color: "bg-red-500" },
        { name: "OOP", color: "bg-green-600" },
        { name: "MVC Pattern", color: "bg-orange-600" },
        { name: "XSS Security", color: "bg-pink-600" },
        { name: "Sanctum/JWT", color: "bg-laravel" },
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.5</span>
            <h2 className="text-2xl md:text-3xl font-bold">Skills & Expertise</h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Categories */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  {category.details && (
                    <button
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span>🔍 View Details</span>
                      {expandedSections.includes(category.title) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${skill.color}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                {category.details && expandedSections.includes(category.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 text-muted-foreground font-medium">Integration</th>
                            <th className="text-left py-2 text-muted-foreground font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.details.map((detail) => (
                            <tr key={detail.skill} className="border-b border-border/50 last:border-0">
                              <td className="py-2 font-medium">{detail.skill}</td>
                              <td className="py-2 text-muted-foreground">{detail.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
