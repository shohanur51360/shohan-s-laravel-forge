 import { useRef, useState } from "react";
 import { motion } from "framer-motion";
 
 interface TiltCardProps {
   children: React.ReactNode;
   className?: string;
   glareEnabled?: boolean;
 }
 
 const TiltCard = ({ children, className = "", glareEnabled = true }: TiltCardProps) => {
   const cardRef = useRef<HTMLDivElement>(null);
   const [rotateX, setRotateX] = useState(0);
   const [rotateY, setRotateY] = useState(0);
   const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
   const [isHovering, setIsHovering] = useState(false);
 
   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
     if (!cardRef.current) return;
 
     const rect = cardRef.current.getBoundingClientRect();
     const centerX = rect.left + rect.width / 2;
     const centerY = rect.top + rect.height / 2;
     
     const mouseX = e.clientX - centerX;
     const mouseY = e.clientY - centerY;
     
     const rotateXValue = (mouseY / (rect.height / 2)) * -10;
     const rotateYValue = (mouseX / (rect.width / 2)) * 10;
     
     setRotateX(rotateXValue);
     setRotateY(rotateYValue);
     
     // Glare position
     const glareX = ((e.clientX - rect.left) / rect.width) * 100;
     const glareY = ((e.clientY - rect.top) / rect.height) * 100;
     setGlarePosition({ x: glareX, y: glareY });
   };
 
   const handleMouseEnter = () => setIsHovering(true);
   
   const handleMouseLeave = () => {
     setIsHovering(false);
     setRotateX(0);
     setRotateY(0);
   };
 
   return (
     <motion.div
       ref={cardRef}
       className={`relative ${className}`}
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       style={{
         transformStyle: "preserve-3d",
         perspective: "1000px",
       }}
       animate={{
         rotateX,
         rotateY,
         scale: isHovering ? 1.02 : 1,
       }}
       transition={{
         type: "spring",
         stiffness: 300,
         damping: 20,
       }}
     >
       {children}
       
       {/* Glare effect */}
       {glareEnabled && isHovering && (
         <div
           className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
           style={{
             background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
           }}
         />
       )}
       
       {/* Border glow */}
       {isHovering && (
         <div
           className="absolute -inset-px rounded-xl pointer-events-none"
           style={{
             background: `linear-gradient(135deg, hsla(239, 84%, 67%, 0.5) 0%, transparent 50%, hsla(4, 80%, 56%, 0.3) 100%)`,
             mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
             maskComposite: "xor",
             WebkitMaskComposite: "xor",
             padding: "1px",
           }}
         />
       )}
     </motion.div>
   );
 };
 
 export default TiltCard;