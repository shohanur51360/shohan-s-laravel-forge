 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 interface Skill {
   name: string;
   level: number;
   color?: string;
 }
 
 interface SkillProgressBarProps {
   skills: Skill[];
   type?: "linear" | "circular";
 }
 
 const CircularProgress = ({ skill, index }: { skill: Skill; index: number }) => {
   const circumference = 2 * Math.PI * 45;
   const strokeDashoffset = circumference - (skill.level / 100) * circumference;
 
   return (
     <motion.div
       className="flex flex-col items-center gap-2"
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
     >
       <div className="relative w-24 h-24">
         <svg className="w-24 h-24 transform -rotate-90">
           {/* Background circle */}
           <circle
             cx="48"
             cy="48"
             r="45"
             stroke="hsl(var(--secondary))"
             strokeWidth="6"
             fill="none"
           />
           {/* Progress circle */}
           <motion.circle
             cx="48"
             cy="48"
             r="45"
             stroke={skill.color || "hsl(var(--primary))"}
             strokeWidth="6"
             fill="none"
             strokeLinecap="round"
             initial={{ strokeDashoffset: circumference }}
             animate={{ strokeDashoffset }}
             transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
             style={{ strokeDasharray: circumference }}
           />
         </svg>
         {/* Percentage text */}
         <motion.div
           className="absolute inset-0 flex items-center justify-center"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
         >
           <span className="text-lg font-bold">{skill.level}%</span>
         </motion.div>
       </div>
       <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
     </motion.div>
   );
 };
 
 const LinearProgress = ({ skill, index }: { skill: Skill; index: number }) => {
   return (
     <motion.div
       className="space-y-2"
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
     >
       <div className="flex justify-between items-center">
         <span className="text-sm font-medium">{skill.name}</span>
         <motion.span
           className="text-sm text-muted-foreground"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
         >
           {skill.level}%
         </motion.span>
       </div>
       <div className="h-2 bg-secondary rounded-full overflow-hidden">
         <motion.div
           className="h-full rounded-full"
           style={{ 
             background: skill.color || "linear-gradient(90deg, hsl(var(--primary)), hsl(280, 80%, 60%))" 
           }}
           initial={{ width: 0 }}
           animate={{ width: `${skill.level}%` }}
           transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
         />
       </div>
     </motion.div>
   );
 };
 
 const SkillProgressBar = ({ skills, type = "linear" }: SkillProgressBarProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
 
   return (
     <div ref={ref}>
       {isInView && (
         type === "circular" ? (
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
             {skills.map((skill, index) => (
               <CircularProgress key={skill.name} skill={skill} index={index} />
             ))}
           </div>
         ) : (
           <div className="space-y-4">
             {skills.map((skill, index) => (
               <LinearProgress key={skill.name} skill={skill} index={index} />
             ))}
           </div>
         )
       )}
     </div>
   );
 };
 
 export default SkillProgressBar;