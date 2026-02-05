 import { useEffect, useRef } from "react";
 import { motion } from "framer-motion";
 
 interface Particle {
   x: number;
   y: number;
   vx: number;
   vy: number;
   size: number;
   opacity: number;
 }
 
 const ParticleBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const particles = useRef<Particle[]>([]);
   const mousePosition = useRef({ x: 0, y: 0 });
   const animationFrameId = useRef<number>();
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext("2d");
     if (!ctx) return;
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     const createParticles = () => {
       particles.current = [];
       const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
       
       for (let i = 0; i < particleCount; i++) {
         particles.current.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
           vx: (Math.random() - 0.5) * 0.5,
           vy: (Math.random() - 0.5) * 0.5,
           size: Math.random() * 2 + 1,
           opacity: Math.random() * 0.5 + 0.2,
         });
       }
     };
 
     const drawParticles = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       particles.current.forEach((particle, i) => {
         // Update position
         particle.x += particle.vx;
         particle.y += particle.vy;
 
         // Wrap around edges
         if (particle.x < 0) particle.x = canvas.width;
         if (particle.x > canvas.width) particle.x = 0;
         if (particle.y < 0) particle.y = canvas.height;
         if (particle.y > canvas.height) particle.y = 0;
 
         // Mouse interaction
         const dx = mousePosition.current.x - particle.x;
         const dy = mousePosition.current.y - particle.y;
         const distance = Math.sqrt(dx * dx + dy * dy);
         
         if (distance < 150) {
           const force = (150 - distance) / 150;
           particle.vx -= (dx / distance) * force * 0.02;
           particle.vy -= (dy / distance) * force * 0.02;
         }
 
         // Draw particle
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
         ctx.fillStyle = `hsla(239, 84%, 67%, ${particle.opacity})`;
         ctx.fill();
 
         // Draw connections
         particles.current.slice(i + 1).forEach((otherParticle) => {
           const dx = particle.x - otherParticle.x;
           const dy = particle.y - otherParticle.y;
           const distance = Math.sqrt(dx * dx + dy * dy);
 
           if (distance < 120) {
             ctx.beginPath();
             ctx.moveTo(particle.x, particle.y);
             ctx.lineTo(otherParticle.x, otherParticle.y);
             ctx.strokeStyle = `hsla(239, 84%, 67%, ${0.15 * (1 - distance / 120)})`;
             ctx.lineWidth = 0.5;
             ctx.stroke();
           }
         });
       });
 
       animationFrameId.current = requestAnimationFrame(drawParticles);
     };
 
     const handleMouseMove = (e: MouseEvent) => {
       mousePosition.current = { x: e.clientX, y: e.clientY };
     };
 
     resizeCanvas();
     createParticles();
     drawParticles();
 
     window.addEventListener("resize", () => {
       resizeCanvas();
       createParticles();
     });
     window.addEventListener("mousemove", handleMouseMove);
 
     return () => {
       if (animationFrameId.current) {
         cancelAnimationFrame(animationFrameId.current);
       }
       window.removeEventListener("resize", resizeCanvas);
       window.removeEventListener("mousemove", handleMouseMove);
     };
   }, []);
 
   return (
     <>
       <canvas
         ref={canvasRef}
         className="fixed inset-0 pointer-events-none z-0"
         style={{ background: "transparent" }}
       />
       {/* Floating gradient orbs */}
       <motion.div
         className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
         style={{
           background: "radial-gradient(circle, hsla(239, 84%, 67%, 0.15) 0%, transparent 70%)",
         }}
         animate={{
           x: [0, 50, -30, 0],
           y: [0, -30, 50, 0],
           scale: [1, 1.1, 0.9, 1],
         }}
         transition={{
           duration: 20,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       />
       <motion.div
         className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
         style={{
           background: "radial-gradient(circle, hsla(4, 80%, 56%, 0.1) 0%, transparent 70%)",
         }}
         animate={{
           x: [0, -40, 30, 0],
           y: [0, 40, -30, 0],
           scale: [1, 0.9, 1.1, 1],
         }}
         transition={{
           duration: 25,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       />
       <motion.div
         className="fixed top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none z-0"
         style={{
           background: "radial-gradient(circle, hsla(280, 80%, 60%, 0.08) 0%, transparent 70%)",
         }}
         animate={{
           x: [0, 30, -40, 0],
           y: [0, -50, 20, 0],
           scale: [1, 1.2, 0.8, 1],
         }}
         transition={{
           duration: 18,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       />
     </>
   );
 };
 
 export default ParticleBackground;