import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { StackSection } from "@/components/StackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection />
      <ProjectsSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
