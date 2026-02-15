import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedDivider from "@/components/AnimatedDivider";
import ScrollToTop from "@/components/ScrollToTop";

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
        <Skills />
        <AnimatedDivider variant="reverse" />
        <Projects />
        <AnimatedDivider />
        <Services />
        <AnimatedDivider variant="reverse" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
