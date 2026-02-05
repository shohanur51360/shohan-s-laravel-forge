import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
 import ParticleBackground from "@/components/ParticleBackground";
 import SkillProficiency from "@/components/SkillProficiency";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
       <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
         <SkillProficiency />
        <Skills />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
