 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 
 interface TerminalLine {
   type: "command" | "output" | "comment";
   content: string;
   delay?: number;
 }
 
 interface TypingTerminalProps {
   lines: TerminalLine[];
   typingSpeed?: number;
 }
 
 const TypingTerminal = ({ lines, typingSpeed = 30 }: TypingTerminalProps) => {
   const [displayedLines, setDisplayedLines] = useState<{ type: string; content: string }[]>([]);
   const [currentLineIndex, setCurrentLineIndex] = useState(0);
   const [currentCharIndex, setCurrentCharIndex] = useState(0);
   const [isTyping, setIsTyping] = useState(true);
 
   useEffect(() => {
     if (currentLineIndex >= lines.length) {
       setIsTyping(false);
       return;
     }
 
     const currentLine = lines[currentLineIndex];
     
     if (currentCharIndex === 0 && currentLine.delay) {
       const delayTimer = setTimeout(() => {
         setCurrentCharIndex(1);
       }, currentLine.delay);
       return () => clearTimeout(delayTimer);
     }
 
     if (currentCharIndex <= currentLine.content.length) {
       const timer = setTimeout(() => {
         setDisplayedLines((prev) => {
           const newLines = [...prev];
           if (currentCharIndex === 1 || newLines.length === currentLineIndex) {
             newLines[currentLineIndex] = {
               type: currentLine.type,
               content: currentLine.content.slice(0, currentCharIndex),
             };
           } else {
             newLines[currentLineIndex] = {
               ...newLines[currentLineIndex],
               content: currentLine.content.slice(0, currentCharIndex),
             };
           }
           return newLines;
         });
         setCurrentCharIndex((prev) => prev + 1);
       }, typingSpeed);
       return () => clearTimeout(timer);
     } else {
       const timer = setTimeout(() => {
         setCurrentLineIndex((prev) => prev + 1);
         setCurrentCharIndex(0);
       }, 200);
       return () => clearTimeout(timer);
     }
   }, [currentLineIndex, currentCharIndex, lines, typingSpeed]);
 
   const getLineColor = (type: string) => {
     switch (type) {
       case "command":
         return "text-primary";
       case "output":
         return "text-foreground";
       case "comment":
         return "text-muted-foreground";
       default:
         return "text-foreground";
     }
   };
 
   return (
     <div className="rounded-xl overflow-hidden border border-border bg-card font-mono text-sm">
       {/* Terminal header */}
       <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
         <div className="w-3 h-3 rounded-full bg-destructive/80" />
         <div className="w-3 h-3 rounded-full bg-accent" />
         <div className="w-3 h-3 rounded-full bg-primary/60" />
         <span className="ml-4 text-xs text-muted-foreground">~/developer-terminal</span>
       </div>
 
       {/* Terminal content */}
       <div className="p-6 min-h-[300px]">
         {displayedLines.map((line, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className={`${getLineColor(line.type)} mb-1`}
           >
             {line.type === "command" && (
               <span className="text-primary mr-2">❯</span>
             )}
             {line.type === "comment" && (
               <span className="text-muted-foreground mr-2">#</span>
             )}
             <span className="whitespace-pre-wrap">{line.content}</span>
           </motion.div>
         ))}
         
         {/* Blinking cursor */}
         {isTyping && (
           <motion.span
             className="inline-block w-2 h-4 bg-primary ml-1"
             animate={{ opacity: [1, 0] }}
             transition={{ duration: 0.5, repeat: Infinity }}
           />
         )}
       </div>
     </div>
   );
 };
 
 export default TypingTerminal;