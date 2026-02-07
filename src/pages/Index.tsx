import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import SkillProficiency from "@/components/SkillProficiency";
import AnimatedDivider from "@/components/AnimatedDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <AnimatedDivider />
        <About />
        <AnimatedDivider variant="reverse" />
        <TechStack />
        <AnimatedDivider />
        <SkillProficiency />
        <AnimatedDivider variant="reverse" />
        <Skills />
        <AnimatedDivider />
        <Projects />
        <AnimatedDivider variant="reverse" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
