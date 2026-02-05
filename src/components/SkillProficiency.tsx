 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import SkillProgressBar from "./SkillProgressBar";
 
 const SkillProficiency = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   const circularSkills = [
     { name: "PHP", level: 90, color: "hsl(239, 84%, 67%)" },
     { name: "Laravel", level: 88, color: "hsl(4, 80%, 56%)" },
     { name: "JavaScript", level: 75, color: "hsl(50, 100%, 50%)" },
     { name: "MySQL", level: 85, color: "hsl(200, 80%, 50%)" },
     { name: "Bootstrap", level: 82, color: "hsl(265, 60%, 55%)" },
     { name: "Tailwind", level: 80, color: "hsl(190, 95%, 45%)" },
   ];
 
   const linearSkills = [
     { name: "Backend Development", level: 92 },
     { name: "RESTful API Design", level: 85 },
     { name: "Database Management", level: 88 },
     { name: "Payment Integration", level: 80 },
     { name: "Frontend Development", level: 75 },
     { name: "DevOps & Deployment", level: 70 },
   ];
 
   return (
     <section className="py-24 relative" ref={ref}>
       <div className="container px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="max-w-6xl mx-auto"
         >
           {/* Section Header */}
           <div className="flex items-center gap-4 mb-12">
             <span className="font-mono text-primary text-sm">02.25</span>
             <h2 className="text-2xl md:text-3xl font-bold">Skill Proficiency</h2>
             <span className="h-px flex-1 bg-border max-w-xs" />
           </div>
 
           <div className="grid lg:grid-cols-2 gap-12">
             {/* Circular Progress */}
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="p-6 rounded-xl border border-border bg-card"
             >
               <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                 <span className="text-primary">💻</span> Core Technologies
               </h3>
               <SkillProgressBar skills={circularSkills} type="circular" />
             </motion.div>
 
             {/* Linear Progress */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="p-6 rounded-xl border border-border bg-card"
             >
               <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                 <span className="text-primary">📊</span> Expertise Areas
               </h3>
               <SkillProgressBar skills={linearSkills} type="linear" />
             </motion.div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SkillProficiency;